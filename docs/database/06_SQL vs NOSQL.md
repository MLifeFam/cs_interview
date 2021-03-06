#### SQL vs NOSQL



## SQL (관계형 DB)

SQL 이란 Structed Query Language의 약자로 구조화 된 쿼리 언어라는 뜻을 가지고 있다. 특정 유형의 데이터베이스와 상호 작용하는 데 사용하는 쿼리 언어이고 NOSQL과 비교를 할때에는 관계형 데이터베이스라는 의미로 사용이 된다.

SQL을 사용하면 관계형 데이터베이스 관리 시스템(RDBMS)에서 데이터를 저장, 수정, 검색 및 삭제를 할 수 있다.

####  SQL의 특징

1. 데이터는 엄격한 데이터 스키마를 따라 데이터베이스에 저장된다.
2. 데이터는 관계를 통해 연결된 여러 테이블에 분산된다.



##### 1. 엄격한 스키마

데이터는 테이블에 레코드로 저장되며, 각 테이블에는 명확하게 정의된 구조가 있다. 

구조(Structure)는 필드의 이름과 데이터 유형으로 정의된다.

![엄격한 스키마](/img/database/sql_nosql/sql_nosql_1.jfif)

- 스키마를 준수하지 않는 레코드는 추가할 수 없다.
- 테이블에서 새로운 필드를 넣고 싶다면, 스키마를 뜯어 고쳐야 한다.

##### 2. 관계

데이터들을 여러 테이블에 나눠서, 데이터들의 중복을 피할 수 있다.

만약 사용자가 구입한 상품들을 나타내기 위해서는 Users, Products, Orders 3개의 테이블을 만들어야 하지만, 각각의 테이블들은 다른 테이블에 저장되지 않은 데이터를 가진다.(중복 데이터 X)

![관계](/img/database/sql_nosql/sql_nosql_2.jfif)



## NOSQL (비관계형 DB)

NoSQL은 SQL과 반대되는 접근방식이기 때문에 지어진 이름이다.

- 스키마 X
- 관계 X

NoSQL에서는 레코드를 문서라고 부른다.

SQL에서는 정해진 스키마를 따르지 않으면 데이터를 추가할 수 없지만, NoSQL에서는 다른 구조의 데이터를 같은 컬렉션에 추가할 수 있다.

![NoSQL](/img/database/sql_nosql/nosql_1.jfif)

문서는 JSON 데이터와 비슷한 형태이다. 그리고 관련 데이터들을 동일한 컬렉션에 넣는다.(SQL처럼 여러 테이블에 나눠 담지 않는다.) 따라서 여러 테이블이나 콜렉션에 조인(Join)할 필요없이 이미 필요한 모든 것을 갖춘 문서를 작성하게 된다.(Join이라는 개념이 존재하지 않음)

컬렉션을 통해 데이터를 복제하여 각 컬렉션 일부분에 속하는 데이터를 정확하게 산출하도록 한다.

![NoSQL](/img/database/sql_nosql/nosql_2.jfif)

데이터가 중복되기 때문에 불안정하다.(컬렉션 B에서 데이터 수정하지 않고 컬렉션 A에서만 데이터가 수정될 수 있음)

하지만 복잡하고 느린 조인(Join)을 사용할 필요가 없다는 큰 장점이 있다.



## 확장성

수직적 확장이란 데이터베이스 서버의 성능을 향상시키는 것이다.

수평적 확장이란 데이터 베이스 서버의 수를 늘리고 데이터베이스가 전체적으로 분산되는 것을 의미한다.

SQL은 수직적 확장만을 지원하지만, NoSQL은 수평적 확장이 가능하다.

![확장성](/img/database/sql_nosql/scaling.jfif)



## SQL 장점 및 단점

- 명확하게 정의 된 스키마, 데이터 무결성 보장
- 관계는 각 데이터를 중복없이 한번만 저장된다.
- 상대적으로 덜 유연하다. 데이터 스키마는 사전에 계획되고 알려져야 한다.(나중에 수정하기 번거롭거나 불가능)
- 관계를 맺고 있어서 JOIN문이 많은 복잡한 쿼리가 생길 수 있다.
- 수평적 확장이 어렵고, 보통 수직적 확장만 가능하다.



## NoSQL 장점 및 단점

- 스키마가 없어서 더 유연하다. 언제든 데이터들을 조정하고 새로운 필드를 추가 가능하다.
- 데이터는 애플리케이션이 필요로 하는 형식으로 저장된다. 데이터를 읽는 속도가 빨라진다.
- 수직 & 수평 확장이 가능하여 데이터베이스가 애플리케이션에서 발생시키는 모든 읽기 / 쓰기 요청을 처리할 수 있다.
- 유연성 때문에 데이터 구조 결정을 미루게 될 수 있다.
- 데이터 중복은 여러 컬렉션과 문서가 여러개의 레코드가 변경된 경우 업데이트를 해야한다.
- 데이터가 여러 컬렉션에 중복되어 있기 때문에, 수정 해야하는 경우 모든 컬렉션에서 수행해야한다.



## SQL이 효율적일 때

- 관계를 맺고 있는 데이터가 자주 변경될 경우
- 변경될 여지가 없고, 명확한 스키마가 사용자와 데이터에게 중요한 경우



## NOSQL이 효율적일 때

- 정확한 데이터 구조를 알 수 없거나 변경/확장 될 수 있는 경우
- 읽기를 자주 하지만, 데이터 변경 별로 없을 경우
- 데이터베이스를 수평으로 확장해야 하는경우(데이터의 양이 많을 경우)



## 나올 수 있는 면접 질문

- SQL과 NOSQL이란?
- SQL과 NOSQL의 장단점은?
- SQL과 NOSQL이 효율적인 경우?



## 참고 url

[Siyoon210 - SQL vs NoSQL](https://siyoon210.tistory.com/130)

[튜나 - 관계형 데이터베이스와 비관계형 데이터베이스](https://devuna.tistory.com/25)

[테크인터뷰 - SQL과 NoSQL의 차이](https://gyoogle.dev/blog/computer-science/data-base/SQL%20&%20NOSQL.html)



## 기여자


 <td align="center"><a href="https://github.com/HelloNaks"><img src="https://avatars.githubusercontent.com/u/49478141?v=4?s=100" width="100px;" alt=""/><br /><sub><b>HelloNaks</b></sub></a><br /><a href="#platform-HelloNaks" title="Packaging/porting to new platform">📦</a></td>