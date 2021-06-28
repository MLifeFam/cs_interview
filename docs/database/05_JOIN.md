### JOIN(조인)

JOIN이란 '연결하다' 라는 뜻을 지닌 단어이다. 이 단어의 뜻처럼, 데이터베이스에서는

**둘 이상의 테이블을 연결해서 테이블을 검색하는 방법을 이야기 한다.**



### JOIN의 종류

1. INNER JOIN
2. OUTER JOIN
3. CROSS JOIN
4. SELF JOIN

![join](/img/database/join/join.png)



그렇다면, 이제 다음과 같은 테이블 두 개를 가지고 각각의 조인에 대해 알아보자.

Star 테이블

| ID   | Name   | DepNo |
| ---- | ------ | ----- |
| 1    | 강호동 | 10    |
| 2    | 이수근 | 10    |
| 3    | 유재석 | 20    |
| 4    | 박명수 | 20    |
| 5    | 안재현 | 30    |
| 6    | 송민호 | 30    |
| 7    | 이병헌 | NULL  |

Dep 테이블

| DepNo | DepName      |
| ----- | ------------ |
| 10    | 1박2일       |
| 20    | 무한도전     |
| 30    | 신서유기     |
| 40    | 이경규가간다 |



------



### 1. INNER JOIN(이너조인)

![innerjoin](/img/database/join/innerjoin.png)

이너조인은 위의 그림처럼 두 개의 테이블에서 **공통된 요소**들을 통해 결합하는 조인방식이다.

가장 일반적인 조인으로, 조인 사용시 명령어로 INNER JOIN 대신 JOIN을 입력해도 INNER JOIN이 사용된다.

```mysql
SELECT Star.Name, Dep.DepName
From Star JOIN Dep ON Star.DepNo = Dep.DepNo
```

| Name   | DepName  |
| ------ | -------- |
| 강호동 | 1박2일   |
| 이수근 | 1박2일   |
| 유재석 | 무한도전 |
| 박명수 | 무한도전 |
| 안재현 | 신서유기 |
| 송민호 | 신서유기 |

위의 Star, Dep테이블을 가지고 INNER JOIN을 수행한 결과이다.

Star테이블과 Dep테이블 중에서 Star의 DepNo와 Dep의 DepNo가 일치하는 요소들만 골라서 출력을 하게된다.



여기서 눈여겨 보아야 할 부분은, 

**Star테이블의 '이병헌'과 Dep테이블의 '이경규가 간다' 라는 행이 누락되어 있는 것이다.**

이 둘은 두 테이블 간의 **공통된 데이터**가 없기 때문이다.

즉, '이병헌'은 DepNo가 Null이기 때문에 Dep테이블과 겹치는 부분이 없으며 '이경규가간다' 는 Star테이블에서 같은 DepNo 코드를 가진 데이터가 없기 때문에 출력되지 않은 것이다.

이렇듯, INNER JOIN은 ON의 조건에 맞는 공통된 부분이 있는 경우에만 출력이 된다.



### 2. OUTER JOIN(아우터조인)

위의 INNER JOIN은 공통된 부분이 있는 행만 출력을 해주었는데, 공통된 부분이 없는 데이터도 함께 보고싶은 경우가 있을 것이다. 

이럴 때 사용하는 것이 바로 OUTER JOIN이다.

OUTER JOIN은 크게 **LEFT(OUTER) JOIN**과 **RIGHT(OUTER) JOIN**, **FULL OUTER JOIN**으로 나눌 수 있다.

#### 2.1 LEFT JOIN

공통적인 부분 + LEFT 테이블에 있는 것만 출력

![leftjoin1](/img/database/join/leftjoin1.png)

```mysql
SELECT Star.Name, Dep.Name
FROM Star LEFT JOIN Dep
ON Star.DepNo = Dep.DepNo
```

| Name   | DepName  |
| ------ | -------- |
| 강호동 | 1박2일   |
| 이수근 | 1박2일   |
| 유재석 | 무한도전 |
| 박명수 | 무한도전 |
| 안재현 | 신서유기 |
| 송민호 | 신서유기 |
| 이병헌 | NULL     |

위의 테이블 처럼, 공통된 값 + 왼쪽 테이블에 있는 값이 출력된 것을 알 수 있다.



반면, 여기서 만약 공통된 부분마저 제외하고 왼쪽에 '만' 있는 것을 출력하고 싶다면

다음과 같이 NULL을 이용하여 한 가지 속성만 더 추가해주면 된다.

![leftjoin2](/img/database/join/leftjoin2.png)

```mysql
SELECT Star.Name, Dep.Name
From Star LEFT JOIN Dep
ON Star.DepNo = Dep.DepNo
WHERE Star.DepNo IS NULL
```

| Name   | DepName |
| ------ | ------- |
| 이병헌 | Null    |



#### 2.2 RIGHT JOIN

![rightjoin](/img/database/join/rightjoin.png)

공통적인 부분 + 오른쪽에 있는 것만 출력

```mysql
SELECT Star.Name, Dep.Name
FROM Star RIGHT JOIN Dep
ON Star.DepNo = Dep.DepNo
```

| Name   | DepName      |
| ------ | ------------ |
| 강호동 | 1박2일       |
| 이수근 | 1박2일       |
| 유재석 | 무한도전     |
| 박명수 | 무한도전     |
| 안재현 | 신서유기     |
| 송민호 | 신서유기     |
| NULL   | 이경규가간다 |

위의 LEFT JOIN과 마찬가지로 RIGHT 테이블에 '만' 있는 것을 출력하고 싶다면

똑같이 NULL 속성을 이용하여 출력할 수 있다. (위의 LEFT JOIN 설명 참고)



#### 2.3 FULL OUTER JOIN

A테이블이 가지고 있는 것 + B 테이블이 가지고 있는 것 모두

![fullouter](/img/database/join/fullouter.png)

```mysql
SELECT Star.Name, Dep.Name
FROM Star FULL OUTER JOIN Dep
ON Star.DepNo = Dep.DepNo
```

| Name   | DepName      |
| ------ | ------------ |
| 강호동 | 1박2일       |
| 이수근 | 1박2일       |
| 유재석 | 무한도전     |
| 박명수 | 무한도전     |
| 안재현 | 신서유기     |
| 송민호 | 신서유기     |
| 이병헌 | NULL         |
| NULL   | 이경규가간다 |

즉, LEFT OUTER JOIN과 RIGHT OUTER JOIN의 결과값을 합친 것이라고 볼 수 있다.



### 3. CROSS JOIN(크로스 조인)

크로스 조인은 두 테이블 간의 가능한 모든 경우의 수에 대한 결과를 보여 준다.

```mysql
SELECT Star.Name, Dep.Name
FROM Star CROSS JOIN Dep
```

| Name   | DepName      |
| ------ | ------------ |
| 강호동 | 1박2일       |
| 이수근 | 1박2일       |
| 유재석 | 1박2일       |
| 박명수 | 1박2일       |
| 안재현 | 1박2일       |
| 송민호 | 1박2일       |
| 이병헌 | 1박2일       |
| 강호동 | 무한도전     |
| 이수근 | 무한도전     |
| ...    | ...          |
| 송민호 | 이경규가간다 |
| 이병헌 | 이경규가간다 |

위의 결과 처럼, 두 테이블의 모든 행들을 서로 교차하여 곱한다고 생각하면 된다.

그래서 Star테이블(7행) x Dep테이블(4행) = 28 행이 탄생하게 된다.



### 4. SELF JOIN(셀프조인)

셀프 조인은 이름처럼 자기 혼자서 '스스로' 결합을 하는 방식이다.

즉, 위의 LEFT, RIGHT조인과는 다르게 다른 테이블을 참조하는 것이 아닌 자기 자신을 참조한다.

SELF JOIN이 필요한 상황을 예를 들어 설명해보겠다.

| ID   | Name   | Partner |
| ---- | ------ | ------- |
| 1    | 강호동 | 3       |
| 2    | 유재석 | 4       |
| 3    | 나영석 | 5       |
| 4    | 김태호 | 6       |
| 5    | 이명한 | 1       |
| 6    | 박명수 | 2       |

위의 테이블을 보면 각각의 스타의 이름과 Partner의 번호가 부여되어 있다.

이 때, Partner의 번호 대신 이름을 알고 싶다면 어떻게 해야 할까?

이럴 때 사용하는 것이 바로 SELF JOIN이다. Partner의 정보도 같은 테이블 내에 존재하기 때문이다.

```mysql
SELECT A.ID, A.Name, A.Partner, B.Partner PartName
FROM Star A JOIN Star B 
ON A.Partner = B.ID
```

| ID   | Name   | Partner | PartName |
| ---- | ------ | ------- | -------- |
| 1    | 강호동 | 3       | 나영석   |
| 2    | 유재석 | 4       | 김태호   |
| 3    | 나영석 | 5       | 이명한   |
| 4    | 김태호 | 6       | 박명수   |
| 5    | 이명한 | 1       | 강호동   |
| 6    | 박명수 | 2       | 유재석   |

이렇게 하나의 테이블을 가지고 SELF JOIN을 이용하여 출력할 수 있다.



### 면접 예상 질문

- JOIN의 종류와 각각의 종류의 특징에 대해 이야기 해보세요
- SELF 조인을 사용할 경우를 예를 들어 보세요
- LEFT OUTER JOIN을 수행할 때, 오직 LEFT에만 있는 값을 가져오도록 쿼리를 한번 짜보세요.



### 참고자료

- [godpearl님 블로그](https://pearlluck.tistory.com/46)
- [문범우님 블로그](https://doorbw.tistory.com/223)



### 기여자

<td align="center"><a href="http://hongcoding.tistory.com"><img src="https://avatars.githubusercontent.com/u/46186664?v=4?s=100" width="100px;" alt=""/><br /><sub><b>HongEunho</b></sub></a><br /><a href="#platform-HongEunho" title="Packaging/porting to new platform">📦</a></td>