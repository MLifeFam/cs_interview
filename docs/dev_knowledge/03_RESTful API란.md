# RESTful API란?

RestAPI(RESTful API)란 REST아키텍처의 제약 조건을 준수하는 애플리케이션 프로그래밍 인터페이스이다.

전반적인 이해를 위해 REST와 RESTful의 개념에 대해서 설명하겠습니다.

### REST란

**REST의 정의**

- "Representational State Transfer"의 약자

- 월드 와이드 웹(www)과 같은 분산 하이퍼미디어 시스템을 위한 소프트웨어 개발 아키텍처의 한 형식

  - REST는 기본적으로 웹의 기존 기술과 HTTP 프로토콜을 그대로 활용하기 때문에 웹의 장점을 최대한 활용할 수 있는 아키텍처 스타일이다.
  - REST는 네트워크 상에서 Client와 Server 사이의 통신 방식 중 하나이다.

- ##### REST의 구체적인 개념

  - HTTP URI(Uniform Resource Identifier)를 통해 자원(Resource)을 명시하고, HTTP Method(Post, Get, Put, Delete)를 통해 해당 자원에 대한 CRUD Operation을 적용하는 것을 의미한다.
  - 즉, REST는 자원 기반의 구조(ROA, Resource Oreiented Architecture) 설계의 중심에 Resource가 있고 HTTP Method를 통해 Resource를 처리하도록 설계된 아키텍쳐를 의미한다.
  - 웹 사이트의 이미지, 텍스트, DB 내용 등의 모든 자원에 고유한 ID인 HTTP URI를 부여한다.

- ##### REST 장단점

  - **장점**
    - 여러 가지 서비스 디자인에서 생길 수 있는 문제를 최소하해준다.
    - Hypermedia API의 기본을 충실히 지키면서 범용성을 보장한다.(Hypermedia란 하나의 컨텐츠가 텍스트나 이미지, 사운드와 같은 다양한 포맷의 컨텐츠를 링크하는 개념이다.)
    - HTTP 프로토콜의 표준을 최대한 활용하여 여러 추가적인 장점을 함께 가져갈 수 있게 해준다.
  - **단점**
    - 브라우저를 통해 테스트할 일이 많은 서비스라면 쉽게 고칠 수 있는 URL보다 Header값이 왠지 더 어렵게 느껴진다.
    - 구형 브라우저가 아직 제대로 지원해주지 못하는 부분이 존재한다.

- ##### **REST가 필요한 이유**

  - '애플리케이션 분리 및 통합'
  - 다양한 클라이언트의 등장
  - 최근의 서버 프로그램은 다양한 브라우저와 안드로이드, 아이폰과 같은 모바일 디바이스에서도 통신이 가능해야한다.

- ##### REST의 구성 요소

  - **자원(Resource):URI**
    - 모든 자원에 고유한 ID가 존재하고, 이 자원은 Server에 존재한다.
    - 자원을 구별하는 ID는 HTTP URI다. (ex. '/groups/:group_id')
    - Client는 URI를 이용해서 자원을 지정하고 해당 자원의 정보에 대한 조작을 Server에 요청한다.
  - **행위: HTTP Method**
    - HTTP 프로토콜의 Method를 사용한다.
    - HTTP 프로토콜은 **GET, POST, PUT, DELELE, HEAD**와 같은 메서드를 제공한다.
  - **표현(Representation of Resource)**
    - REST에서 하나의 자원은 JSON, XML, TEXT, RSS 등 여러 형태의 Representation으로 나타내어 질 수 있다.
    - JSON 혹은 XML를 통해 데이터를 주고 받는 것이 일반적이다.

- ##### REST 특징

  - Server-client구조
  - Stateless(무상태성) -> 작업을 위한 상태정보를 따로 저장하고 관리하지 않는다.
  - Cacheable(캐시가능) -> REST의 가장 큰 특징은 HTTP라는 기존 웹 표준을 그대로 사용하기 때문에, 웹에서 사용하는 기존 인프라를 사용할 수 있다. 따라서 HTTP가 가진 캐싱 기능을 적용할 수 있다.
  - Self-descriptiveness(자체 표현 구조) -> REST API 메시지만 보고도 이를 쉽게 이해할 수 있는 자체 표현 구조로 되어 있다는 뜻
  - 계층형 구조 -> REST 서버는 다중 계층으로 구성될 수 있으며, 보안, 로드밸런싱, 암호화 계층을 추가해 구조상의 유연성을 둘 수 있다.
  - Uniform(유니폼 인터페이스) -> 특정 언어나 기술에 종속되지 않고 모든 플랫폼에 사용할 수 있으며, URI로 지정한 리소스에 대한 조작이 가능한 아키텍처 스타일을 의미한다.

  

### REST API란

**REST API**

- **REST API의 정의**
  - REST 기반으로 서비스 API를 구현한 것

- ##### REST API의 특징

  - REST는 HTTP 표준을 기반으로 구현하므로, HTTP를 지원하는 프로그램 언어로 클라이언트, 서버를 구현할 수 있다.
  - 즉, REST API를 제작하면 델파이 클라이언트 뿐 아니라, 자바, C#, 웹 등을 이용해 클라이언트를 제작할 수 있다.

- #####  REST API 설계 규칙

  - URI는 정보의 자원을 표현해야한다.
  - 자원에 대한 행위는 HTTP Method(Get, Put, Post, Delete 등)로 표현한다.
  - 소문자 사용 (최소한 대소문자 구분)한다.
  - 슬래시 구분자는 계층 관계를 나타내는데 사용한다. (ex. '/groups/:group_id')
  - URI의 마지막 문자로 슬래시를 포함하지 않는다.
  - 하이픈(-)은 URI 가독성을 높이는데 사용한다.
  - 밑줄(_)은 URI에 사용하지 않는다.

##### RESTful

- ##### RESTful 의 개념

  - RESTful은 일반적으로 REST라는 아키텍처를 구현하는 웹 서시브를 나타내기 위해 사용되는 용어이다.

    -> 즉, REST 원리를 따르는 시스템은 RESTful이란 용어로 지칭된다.

  - RESTful은 REST를 REST답게 쓰기 위한 방법으로, 누군가가 공식적으로 발표한 것이 아니다.

- ##### RESTful의 목적

  - 이해하기 쉽고 사용하기 쉬운 REST API를 만드는 것
  - RESTful API를 구현하는 근본적인 목적이 퍼포먼스 향상에 있는게 아니라, 일관적인 컨벤션을 통한 API의 이해도 및 호환성을 높이는게 주 동기이니, 퍼포먼스가 중요한 상황에서는 굳이 RESTful API를 구현할 필요는 없다.

- ##### RESTful 하지 못한 경우

  - CRUD 기능을 모두 POST로만 처리하는 API
  - route에 resource, id외의 정보다 들어가는 경우
  - 응답에 대한 메타데이터가 Body에 포함된 경우
  - URL에 동사가 포함되어 있는 경우
  - URL에 RPC 호출 메서드 명이 있는 경우 (ex. **?action=createReservation**)



### 면접 예상 질문

##### 1. REST란 무엇이고, RESTful 하게 API를 디자인한다는 것은 무엇인가요?

- REST는 Representational State Transfer의 약자입니다. 간단히 말해서 URI와 HTTP 메소드를 이용해 객체화된 서비스에 접근하는 것입니다.
- RESTful 하게 API를 디자인 한다는 것은 URI를 규칙에 맞게 잘 설계했는지의 여부입니다.(설계규칙을 참고하시면 됩니다.)

##### 2.REST API를 사용하는 이유는 무엇인가요?

- 분산 시스템을 사용하기 위해서이다. 이를 사용하면 거대한 애플리케이션을 모듈, 기능별로 분리하기 쉬워지고 REST API를 서비스하면 어떤 다른 모듈 또는 애플리케이션이라도 상호간의 통신을 할 수 있기 때문이다.

##### 3. HTTP Method의 종류에는 무엇이 있나요?

- 크게 GET, POST, PUT, DELETE, HEAD가 있다.





### 참고 자료

http://www.incodom.kr/REST

https://ijbgo.tistory.com/20

https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html

https://beyondj2ee.wordpress.com/2013/03/21/%EB%8B%B9%EC%8B%A0%EC%9D%98-api%EA%B0%80-restful-%ED%95%98%EC%A7%80-%EC%95%8A%EC%9D%80-5%EA%B0%80%EC%A7%80-%EC%A6%9D%EA%B1%B0/

https://wooaoe.tistory.com/51