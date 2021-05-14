## TDD의 정의

TDD란 Test Driven Development의 약자로 이를 한국어로 번역하면 `테스트 주도 개발방법론`을 뜻한다. 소프트웨어 개발 초기 방식에서는 [폭포수 모델](https://ko.wikipedia.org/wiki/%ED%8F%AD%ED%8F%AC%EC%88%98_%EB%AA%A8%EB%8D%B8)방식을 사용하여 개발을 하곤 했는데, 점차 소프트웨어가 거대해져 가면서 기존의 방식이 부정당하였고, 그때그때 소단위 요구사항을 추가하거나 기존의 문제점을 해결하며 점차 큰 규모의 소프트웨어를 개발하는 [애자일 방식](https://namu.wiki/w/%EC%95%A0%EC%9E%90%EC%9D%BC)이 떠오르기 시작했다. 애자일 방식중 하나인 [익스트림 프로그래밍(eXtream Programming)](https://ko.wikipedia.org/wiki/%EC%9D%B5%EC%8A%A4%ED%8A%B8%EB%A6%BC_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)방식이 있는데 일반적인 애자일 방식과 다른 점은 바로 `테스트`가 존재한다는 점이다. 바로 TDD가 이러한 XP 실천방식 중 하나이다.

## TDD 프로세스와 개발 방식

<img src="/img/dev_knowledge/tdd/tdd_process.png" width="50%" />

TDD는 위의 그림과 같이 세가지의 과정이 개발하며 끊임없이 반복된다. 일반적인 개발 방법은 먼저 개발 코드를 작성하지만, TDD 방법론은 테스트 코드를 먼저 작성한다. 테스트를 통과하면 개발 코드를 작성하고, 마지막으로 리펙토링을 하며 끊임 없이 좋은 코드를 만들어 나간다.

## TDD 원칙과 효과

TDD의 지지자 [로버트 마틴](https://en.wikipedia.org/wiki/Robert_C._Martin)은 TDD의 제 3원칙을 주장하는데 다음과 같다.

1. **실패하는 테스트를 작성하기 전에는 절대로 제품 코드를 작성하지 않는다.**
2. **실패하는 테스트 코드를 한 번에 하나 이상 작성 하지 않는다.**
3. **현재 실패하고 있는 테스트를 통과하기에 충분한 정도를 넘어서는 제품 코드를 작성하지 않는다.**

애자일 방식에서는 불확실성을 높이기 위해 **피드백**과 **협력**이 중요한데 TDD가 바로 이러한 두가지 측면을 모두 강화 시켜주기도 한다.

테스트가 잘되고 있는지 계속 피드백을 줄 수 있고 테스트를 통과하면서 잘 되고 있는지를 `검증`할 수 있기 때문에다. 또한, 테스트를 공유하며 남이 짠 코드를 좀 더 `쉽게 이해`할 수 있을 뿐만아니라 남이 짠 코드를 고쳐도 테스트 코드가 잘 되는지 알려주기 때문에 좀 더 고칠 수 있는 `용기`가 생길 수 있다.

## TDD의 장점과 단점

장점

- 보다 튼튼한 객체 지향적인 코드 생산
  - 기능별로 테스트를 하기 때문에 철저한 모듈화가 이루어진다. 이는 종속성과 의존성이 낮은 모듈로 조합된 소프트웨어 개발을 가능하게 한다.
- 재설계 시간의 단축
  - 테스트 코드를 먼저 작성하기 때문에 지금 무엇을 해야하는지 분명하게 정의하고 개발을 시작하게 된다.
- 디버깅 시간의 단축
  - 자동화된 유닛테스팅을 전제로 해서 특정 버그를 손쉽게 찾아낼 수 있다.
- 테스트 문서의 대체 가능
- 추가 구현의 용이함
  - 앞서 말했듯이 TDD의 경우 자동화된 유닛테스팅을 전제로 하므로 기존 코드에 영향이 덜 가도록 구현이 가능함

단점

- 생산성의 저하
  - 개발전에 미리 테스트 코드를 짜고, 중간중간 테스트 코드를 고쳐나가야 해서 생산성이 떨어진다.
- 개발 방식의 변화
  - 원래 TDD를 안하던 사람들이 하려고 하면 개발방식을 바꾸기가 힘들다.
- TDD툴에 집착하게 됨
  - Jest나 JUnit 같은 TDD 툴에 집착하거나 규칙에 얽매이게 된다.

## TDD의 한계

TDD 선구자인 [Kent Beck](https://ko.wikipedia.org/wiki/%EC%BC%84%ED%8A%B8_%EB%B2%A1) 은 다음 두 가지를 TDD가 현재 접근하기 어려운 분야라고 말한다.

1. `동시성(concurrency)`이 걸린 코드에 대한 테스트 케이스 작성.
   - 예를들면, 자바의 병렬 프로그램 작성시 여러가지 예외 사항이 있어서 테스트 케이스를 작성하기가 쉽지 않음
2. `보안 등의 비기능적 요소`

이외에도 다음과 같은 한계가 존재한다.

3. `GUI`
   - 뷰 레이어와 로직 레이어를 확실히 분리시켜 설계해야 하기 때문에 TDD가 어려움
4. `의존성 모듈 테스트`
   - 테스트 대상 클래스가 다른 클레스에 의존을 하고 있을경우
   - ex) A 테스트를 위해 B도 필요하다. 그러나 B가 아직 준비가 되어 있지 않다면 테스트가 이루어질 수 없다.
   - 보통 이럴 경우 B가 문제 없다는 가정하에 A 테스트를 진행함
5. `S/W 개발시 비용증가`
   - TDD 자체가 일정비용(시간 등)을 필요로 함.

:::tip 테스트 라이브러리 없이 테스트 코드를 작성할 수 있나요?

네, 가능합니다. 직접 테스트 코드를 짜면 됩니다. 하지만 잘 구축되어 있는 테스트 라이브러리 사용을 추천합니다!

이에 대한 토론이 되어있는 [stackoverflow](https://stackoverflow.com/questions/4325014/how-to-do-unit-testing-without-the-use-of-a-library)를 참조해주세요

:::

## TDD Tools

- Java를 위한 JUnit
- Javascript를 위한 Jest
- Python을 위한 unittest와 pytest

## 나올 수 있는 면접 질문

1. TDD란 무엇인가?
2. TDD를 해야하는 이유는 무엇일까?
3. TDD 도구를 사용해본 경험은 있는가?

## 책 추천

이 글을 읽고 TDD에 대해 좀 더 공부해보고 싶다면 [켄트 백의 테스트 주도 개발 번역본](http://www.yes24.com/Product/Goods/12246033)을 추천한다.

## 참고

- [테스트 주도 개발 - 나무위키](https://namu.wiki/w/%ED%85%8C%EC%8A%A4%ED%8A%B8%20%EC%A3%BC%EB%8F%84%20%EA%B0%9C%EB%B0%9C)
- [TDD 방법론 - wooaoe님 블로그](https://wooaoe.tistory.com/33)
- [TDD정의와 효과 - gmlwjd9405님 블로그](https://gmlwjd9405.github.io/2018/06/03/agile-tdd.html)
- [Test-Driven Development - soulpark님 블로그](https://soulpark.wordpress.com/2012/09/12/test-driven-development/)

## 기여자

<td align="center"><a href="http://kyun2da.dev"><img src="https://avatars.githubusercontent.com/u/50328132?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kyun Heo</b></sub></a><br /><a href="#platform-Kyun2da" title="Packaging/porting to new platform">📦</a></td>
