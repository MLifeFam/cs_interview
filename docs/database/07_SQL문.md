## 기본 SQL문

### 1. SELECT

데이터를 불러오는 쿼리문

1. SELECT 컬럼명 FROM 테이블명;

   해당 테이블의 해당 컬럼의 데이터를 불러온다.

   테이블의 전체 컬럼의 데이터를 불러오고 싶다면 컬럼명에 * 를 넣으면 된다.

   ```sql
   SELECT * FROM Calendar;
   ```

2. SELECT 컬럼명 FROM 테이블명 WHERE 조건;

   WHERE 뒤의 조건이 참인 데이터만 불러온다.

   조건은 [컬럼명 = 값] 으로 설정하여 컬럼명에 해당하는 값이 조건에 맞는 데이터만 불러오게 된다.

   ```sql
   SELECT * FROM Calendar WHERE MONTH = 9;
   ```

3.  SELECT 컬럼명 FROM 테이블명 WHERE 조건 ORDER BY 컬럼명 ASC(or DESC);

   ORDER BY 뒤의 컬럼명에 대해 오름차순(ASC) 혹은 내림차순(DESC)으로 정렬하여 불러온다.

   기본값은 오름차순(ASC)으로 설정되어 있다.

   ```sql
   SELECT * FROM Calendar WHERE MONTH = 9 ORDER BY MONTH ASC;
   ```

4. SELECT 컬럼명 FROM 테이블명 WHERE 조건 ORDER BY 컬럼명 ASC(or DESC) LIMIT 개수;

   위의 3번 데이터를 N개 불러온다.

   LIMIT 3이라면 상위 3개 데이터만 불러오게 된다.

   ```sql
   SELECT * FROM Calendar WHERE MONTH = 9 ORDER BY MONTH ASC LIMIT 3;
   ```

<br/>

### 2. INSERT

데이터를 삽입하는 쿼리문

1. INSERT INTO 테이블명 (컬럼명1, 컬럼명2, ...) VALUES (값1, 값2, ...);

   테이블의 컬럼들에 값을 삽입한다.

   컬럼명과 값의 순서와 개수는 동일해야 하며 문자열을 값으로 입력하는 경우 따옴표로 감싼다.

   ```sql
   INSERT INTO Calendar(Calendar_id, MONTH, DAY, EVENT) VALUES(300, 9, 13, "정기회의");
   ```

2. INSERT INTO 테이블명 VALUES (값1, 값2, ...);

   테이블의 컬럼명을 입력하지 않은 경우, 모든 컬럼에 값을 입력하게 된다.

   따라서, 모든 칼럼의 수와 순서에 맞게 데이터를 입력해야 한다.

   ex) Calendar_id, MONTH, DAY, EVENT 컬럼이 존재하는 경우

   ```sql
   INSERT INTO Calendar VALUES(300, 9, 13); ==> X
   INSERT INTO Calendar VALUES(300, 9, 13, "정기회의"); ==> O
   ```

<br/>

### 3. UPDATE

데이터를 수정하는 쿼리문

1. UPDATE 테이블명 SET 컬럼명 = 변경할 값;

   테이블의 모든 데이터의 컬럼 값을 변경한다.

   예를 들어, Calendar라는 테이블의 MONTH 컬럼에 해당하는 값을 모두 9월로 바꾸고 싶다면 다음과 같이 입력한다.

   ```sql
   UPDATE Calendar SET MONTH = 9;
   ```

2. UPDATE 테이블명 SET 컬럼명 = 변경할 값 WHERE 조건;

   조건에 해당하는 데이터만 변경한다.

   다음 예시는 MONTH값이 null인 데이터만 MONTH를 9로 변경하는 예시이다.

   ```sql
   UPDATE Calendar SET MONTH = 9 WHERE MONTH is null;
   ```

3. UPDATE 테이블명 SET 컬럼명1 = 변경할값 1, 컬럼명2 = 변경할값 2 , ... ;

   변경할 컬럼이 여러개 일 때, 콤마를 사용하여 여러 개의 값을 모두 변경할 수 있다.

   ```sql
   UPDATE Calendar SET MONTH = 9, DATE = 1;
   ```

<br/>

### 4. DELETE

데이터를 삭제하는 쿼리문

1. DELETE FROM 테이블명;

   테이블에 존재하는 모든 데이터를 삭제한다

   ```sql
   DELETE FROM Calendar
   ```

2. DELETE FROM 테이블명 WHERE 조건

   WHERE 조건에 부합하는 데이터만 삭제한다.

   다음 예시는 월의 값이 13인 데이터만 삭제하는 쿼리이다.

   ```sql
   DELETE FROM Calendar WHERE MONTH = 13;
   ```

<br/>

## 심화 SQL문

### 1. DISTINCT

중복을 제거하고자 하는 컬럼에 붙여 사용한다.

1. SELECT DISTINCT 컬럼명 FROM 테이블;

   컬럼명에 해당하는 데이터의 중복을 제거하여 나타낸다.

   

   다음과 같은 Calendar 테이블이 존재한다고 하자.

   | MONTH | DATE | EVENT      |
   | ----- | ---- | ---------- |
   | 5     | 5    | 어린이날   |
   | 5     | 8    | 어버이날   |
   | 6     | 6    | 현충일     |
   | 10    | 9    | 한글날     |
   | 12    | 25   | 크리스마스 |

   </br>

   SELECT DISTINCT MONTH FROM Calendar;

   이 쿼리를 실행할 경우 다음과 같은 결과가 나오게 된다.

   MONTH = 5인 데이터가 두개 이기 때문에 중복을 제거하여 하나만을 나타낸다.

   | MONTH |
   | ----- |
   | 5     |
   | 6     |
   | 10    |
   | 12    |

   또한, 이를 활용하여 중복을 제거한 데이터의 개수를 나타내는데 활용할 수 있다.

   SELECT COUNT(DISTINCT MONTH) FROM Calendar

   => 4

   만약, DISTINCT를 사용하지 않는다면

   SELECT COUNT(MONTH) FROM Calendar

   => 5

   <br/>

   마찬가지로, 다음과 같이 조건 또한 추가하여 나타낼 수 있다.

   SELECT DISTINCT 컬럼명 FROM 테이블명 WHERE 컬럼명 = 조건

   </br>



### 2. GROUP BY

테이블에서 특정 속성의 값이 같은 튜플을 모아 그룹을 만들고, 그룹별로 검색을 하기 위해 사용한다.

SELECT {컬럼명} FROM {테이블명} {조건절} GROUP BY {테이블명} 의 형태로 사용한다.

<br/>

여기서, 집계함수 (sum, min, max 등등)를 사용하지 않으면 DISTINCT와 비슷한 경우가 있다.

예를 들어, 

SELECT MONTH FROM Calendar GROUP BY MONTH; 라는 쿼리를 실행하면

SELECT DISTINCT MONTH FROM Calendar;를 실행했을 때와 마찬가지로

| MONTH |
| ----- |
| 5     |
| 6     |
| 10    |
| 12    |

라는 결과가 나타난다.

<br/>

DISTINCT와 마찬가지로 중복이 제거된 결과가 나타난다.

하지만 GROUP BY는 그룹별로 정렬을 하여 나타내며 DISTINCT는 정렬을 하지 않는다.

따라서, 정렬이 필요한 경우와 필요하지 않은 경우를 생각하여 적절히 사용하면 될 것이다.

<br/>

또, 집계함수를 사용하는 경우에는 GROUP BY 를 사용해야 할 것이다.

예를 들어, 각 월 별로 월에 해당하는 이벤트들이 있을 때

나는 각 월의 이벤트가 몇 개씩 존재하는지를 알고 싶다고 하자.

이 때는 다음과 같이 쿼리를 짜야 한다.

```sql
SELECT MONTH, COUNT(EVENT) FROM Calendar GROUP BY MONTH;
```

<br/>

또한, 그룹별로 조건을 주어 조건을 만족한 그룹만을 가져오도록 할 수 있다.

이 때, 조건은 HAVING을 사용하여 나타낸다.

예를 들어, 월 별로 이벤트가 3개 이상인 월 만을 가져오고 싶다고 하자.

그럼 다음과 같은 쿼리를 작성할수 있다.

```sql
SELECT MONTH, COUNT(EVENT) AS cnt FROM Calendar GROUP BY MONTH HAVING cnt >= 3;
```

<br/>

HAVING 절은 이렇게 GROUP BY와 함께 사용하며 그룹 별 조건을 나타낼 수 있다.

또, WHERE 절과 다르게 집계함수를 사용할 수 있다.

(WHERE절에서는 집계함수 사용이 불가능하다.)

<br/>

이외의 추가적인 SQL문에 대해서는 다음 포스팅에 이어 나가려고 한다.

<br/>



## 마무리

### 추가로 학습하면 좋을 자료

다음 포스팅에 이어서 추가적인 SQL문을 게시하겠지만, 그 전에 앞서 심화적인 내용들을 더 알고 싶다면

다음과 같은 키워드로 검색해보는 것을 추천한다.

- DML ( Data Manipulation Language )
- DDL ( Data Definition Language )
- DCL ( Data Control Language )
- SQL LIKE

<br/>

### 기여자

<td align="center"><a href="http://hongcoding.tistory.com"><img src="https://avatars.githubusercontent.com/u/46186664?v=4?s=100" width="100px;" alt=""/><br /><sub><b>HongEunho</b></sub></a><br /><a href="#platform-HongEunho" title="Packaging/porting to new platform">📦</a></td>





