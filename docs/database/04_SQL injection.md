## SQL injection이란?

SQL 삽입(SQL Injection, SQL 인젝션, SQL 주입)은 응용 프로그램 보안 상의 허점을 의도적으로 이용해, 악의적인 SQL문을 실행되게 함으로써 데이터베이스를 비정상적으로 조작하는 코드 인젝션 공격 방법이다. 이는 [OWASP](https://ko.wikipedia.org/wiki/OWASP)에서 발표한 웹 애플리케이션 취약점 중 하나이기도 하다.

## SQL 인젝션 공격

역사적으로 가장 많이 참조된 SQL 인젝션 취약점 대부분은 PHP의 뷰, 로직, 데이터 코드 사이의 구분이 느슨한 것이 원인이 되어 발생했다.

예전에 PHP 개발자는 SQL, HTML, PHP를 한 데 섞어 PHP파일에 집어넣었는데, 이러한 모델이 오용되어 PHP 코드에 많은 취약점이 생기게 되었다.

근래에 들어 PHP 코딩 표준이 좀 더 엄격해지고 SQL 인젝션 발생을 줄여주는 도구가 나왔다고는 하지만, 여전히 시큐어 코딩 가이드를 지키지 않는 애플리케이션들은 SQL 인젝션의 위험이 존재한다.

아래의 node.js/Express.js 서버 코드 예제를 통해 어떤식으로 sql 인젝션이 일어날 수 있는지 알아보도록 하자.

```javascript
const sql = require('mssql');

// /user에 대해 POST 요청을 받으며, 요청 본문에 user_id 매개변수를 포함한다.
// SQL 조회가 수행되어, 주어진 user_id 매개변수와 id가 같은 사용자를 데이터베이스에서 찾으려고 시도한다.
// 데이터베이스 질의 결과를 응답으로 반환한다.

app.post('users', funciton(req,res) {
    const user_id = req.params.user_id;

    // SQL 데이터베이스에 연결한다.
    await sql.connect('mssql://username:password@localhost/database');

    // http 요청 본문으로 받은 user_id 매개변수를 가지고 데이터베이스에 질의한다.
    const result = await sql.query('SELECT * FROM users WHERE USER = ' + user_id);

    // 요청자에게 HTTP 응답을 통해 SQL 질의 결과를 반환한다.
    return res.json(result);
})
```

이 질의에 유효한 user_id가 들어온 경우에 요청자에게 사용자 객체를 반환한다.

```javascript
const user_id = '1=1';
```

user_id가 위와같이 항상 참인 값으로 설정을 해 질의한다면, SELECT \* FROM users where USER = true가 되어 요청자에게 사용자 전체의 정보를 반환하게 될것이다.

```javascript
user_id = '123abc; DROP TABLE users;';
```

위와 같은 정보를 user_id 에 삽입하게 된다면 질의문은 SELECT \* FROM users WHERE USER = 123abd; DROP TABLE users;가 되어서 사용자 정보가 모조리 삭제되는 불상사가 발생할 수 있다.

## SQL 인젝션 방어

SQL 인젝션을 방어하는 방법에는 크게 두 가지가 존재한다.

### 1. 프리페어드 스테이트먼트

SQL 구현 대부분이 프리페어드 스테이트먼트(prepared statement)를 지원한다. 이 것을 사용하면 SQL 질의에서 사용자 제공 데이터를 사용할 때 위험이 상당히 줄어들 뿐만 아니라 매우 배우기 쉽고 SQL 질의를 아주 쉽게 디버깅할 수 있다는 장점이 있다.

이 프리페어드 스테이트먼트는 변수를 갖는 질의를 미리 컴파일한다. 이 변수는 흔히 바인드 변수로 알려져 있지만 플레이스홀더 변수라고 부르기도 한다.

이 것을 적용하지 않은 SQL 질의는 사용자 제공데이터(변수)를 그냥 문자열 자체로 DB에 전송하여 질의 자체를 변경할 위험이 있지만, 이를 적용하면 질의 자체를 변경하는 것이 아예 불가능하다.

mysql 의 예시를 보면 다음과 같다.

```sql
SELECT name, barcode from products WHERE price <= ' + price + ';'
```

이 질의문은 가격(price)이 물음표(?) 이하인 상품(product)을 MySQL 데이터베이스에 질의해 이름(name)과 바코드(barCode)를 결과로 반환한다.

이를 프리페어드 스테이트먼트를 적용한 질의문은 아래와 같다.

```sql
PREPARE q FROM 'SELECT name, barcode from products WHERE price <= ?';
SET @price = 12;
EXECUTE q USING @price;
DEALLOCATE PREPARE q;
```

먼저 PREPARE문을 사용해 q라는 이름으로 질의를 저장한다. 이 질의는 컴파일되어 사용 준비를한다. 다음으로 @price 변수를 12로 설정한다. 이것은 전자상거래 사이트에서 필터링을 하려고 할 때 사용자가 설정하기 좋은 변수가 된다. 그런 다음 @price로 플레이스홀더 ?를 채워 질의를 실행한다. 끝으로 q를 할당 해제함으로써 메모리에서 제거한다. q는 @price를 가지고 실행되기 전에 컴파일되기 때문에 악의적으로 사용자가 5; UPDATE users WHERE id = 123 SET balance = 10000으로 설정하였다 하더라도 추가적인 질의를 컴파일하지 않으므로 실행되지 않아 SQL인젝션 방어를 할 수 있게 된다.

### 2. 데이터베이스별 방어

오라클, MySQL 등등의 SQL은 모두 SQL 질의에 사용하기 위험해 보이는 문자 및 문자 집합을 자동으로 이스케이핑하는 방법을 제공한다.

MySql을 예로 들어보자

```sql
SELECT QUOTE('test''case');
```

MySql의 QUOTE함수는 역슬래시, 작은따옴표, NULL 문자를 이스케이프해서 작은따옴표를 사용하는 올바른 문자열을 반환한다.

또한 MYSQL은 mysql_real_escape_string()을 제공하는데, 이 함수는 모든 역슬래시와 작은 따옴표를 이스케이프하며 큰따옴표, \n, \r도 이스케이프한다.

이를 php에서 아래와 같이 사용할 수있다.

```php
$username = mysql_real_escape_string($_POST["username"]);
$password = mysql_real_escape_string($_POST["password"]);

$mysqli->query("SELECT * FROM users WHERE username='{$username}' AND password='{$password}'");
```

## 나올 수 있는 면접 질문

- SQL 인젝션이란 무엇인가요?
- SQL 인젝션을 방어하는 기법은 무엇이 있나요?

## 참고 url

- [웹 애플리케이션 보안](http://www.yes24.com/Product/Goods/97315227)
- [SQL 삽입 - 위키백과](https://ko.wikipedia.org/wiki/SQL_%EC%82%BD%EC%9E%85)

## 기여자

<td align="center"><a href="http://kyun2da.dev"><img src="https://avatars.githubusercontent.com/u/50328132?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kyun Heo</b></sub></a><br /><a href="#platform-Kyun2da" title="Packaging/porting to new platform">📦</a></td>
