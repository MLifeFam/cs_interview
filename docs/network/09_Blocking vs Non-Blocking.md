## Blocking & Non-Blocking I/O

이번 시간에는 블로킹과 논블로킹의 차이점에 대해서 알아보도록 하겠다. 더불어 이와 관련된 Sync와 Async도 엮어서 간단하게 설명을 해보려고 한다.

## Blocking과 Non Blocking

블로킹(Blocking)과 Non Blocking의 차이는 바로 해당 작업이 끝나는것을 기다리느냐의 차이이다.

이걸 I/O 모델을 통해 설명해보자면 다음과 같다.

### Blocking

![블로킹](/img/network/block_vs_none_block/blocking.png)

가장 기본적인 I/O모델로, I/O 작업이 진행되는 동안 유저 프로세스는 자신의 작업을 중단한채 대기하는 방식이다.

위의 그림의 로직은 다음과 같다.

1. 유저가 커널에게 read작업을 요청한다.
2. 데이터가 입력될 때까지 기다린다.
3. 데이터가 입력되면 커널이 유저에게 결과를 전달하고 유저는 그 기다림을 끝내고 다시 작업에 들어갈 수 있다.

### Non-Blocking

![논 블로킹](/img/network/block_vs_none_block/non-blocking.png)

논 블로킹 방식은 I/O 작업이 진행되는 동안 유저 프로세스의 작업을 중단시키지 않는 방식이다.

1. 유저가 커널에게 read작업을 요청한다.
2. 데이터가 입력이 되던 안되던 요청하는 순간 바로 결과가 반환된다.
3. 입력 데이터가 있을 때 까지 1-2번을 반복한다.
4. 입력 데이터가 있으면 유저에게 결과가 전달된다.

이와 같은 방식은 I/O의 진행시간과 관계가 없기 때문에 애플리케이션에서 작업을 오랜시간 중지하지 않고도 I/O 작업을 진행할 수 있다.
그러나 반복적으로 시스템 호출이 발생하기 때문에 이 경우 역시 자원이 낭비된다.

## Sync vs Async

위의 내용을 들었으면 얼핏 Blocking 과 Non Blocking의 차이와 Sync와 Async의 차이가 일맥상통하는게 아닐까 라는 생각이 든다.

이전의 [동기 비동기](https://mfamcs.netlify.app/docs/CA_and_OS/%EB%8F%99%EA%B8%B0%20vs%20%EB%B9%84%EB%8F%99%EA%B8%B0) 문서가 있기 때문에 동기 비동기에 대해 잘모른다면 한번 확인해 보는것을 추천한다.

가장 중요한 부분은 이 두가지 그룹은 관심사의 차이라고 보는 것이 가장 중요할 것 같다. Blocking vs Non-Blocking은 **제어의 관점** 이라고 보면 되고 Sync와 Async 는 **순서와 결과의 관점**이라고 보면 된다. 이를 좀더 이해하기 쉽게 다른 관점으로 본다면 동기/비동기는 **작업을 수행하는 주체**가 두 개 이상이어야 한다. 이 때 작업의 시간을 서로 맞춘다면 이를 동기라고 부르고, 서로 작업의 시간이 관계가 없다면 이를 비동기라고 부른다. 반면, 블로킹/논블로킹은 **작업의 대상**이 두 개 이상이어야 한다.

이러한 혼돈된 개념때문에 많은 사람이 헷갈려하지만 실제로는 전혀 다른 개념이라고 생각할 수 있다.

두 개념은 완전히 다른 개념이기 때문에 두가지 개념이 합쳐진 조합이 존재한다. 동기-블로킹 조합, 동기-논블로킹 조합, 비동기-블로킹 조합, 비동기-논블로킹 조합이 그 예인데

아래 네가지의 자세한 설명은 [deveric님 블로그 링크](https://deveric.tistory.com/99)로 대체하도록 하겠다.

## 나올 수 있는 면접 질문

- 블로킹과 논블로킹은 무엇인가요?
- 블로킹과 논블로킹 vs Sync와 Async는 같은 말인가요?
- 위의 질문이 다른 말이라면 어떤 차이가 있나요?
- 두개의 조합을 합친 종류에 대해 설명해주세요.

## 참고 url

- [동기/비동기와 블로킹/논블로킹](https://deveric.tistory.com/99)
- [블로킹, 논블로킹 - I/O모델](https://ju3un.github.io/network-basic-1/)
- [Blocking vs Non-BLocking, Sync vs Async](https://www.youtube.com/watch?v=oEIoqGd-Sns)

## 기여자

<td align="center"><a href="http://kyun2da.dev"><img src="https://avatars.githubusercontent.com/u/50328132?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kyun Heo</b></sub></a><br /><a href="#platform-Kyun2da" title="Packaging/porting to new platform">📦</a></td>