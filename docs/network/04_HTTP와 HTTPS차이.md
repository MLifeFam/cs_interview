## HTTP란?

HTTP란 Hyper Text Transfer Protocol의 약자로 말 그대로 하이퍼 텍스트를 전송하는 프로토콜이다.

팀 버너스 리와 그의 팀은 CERN에서 HTML을 전송하기 위해 HTTP 라는 프로토콜을 발명하였다.

HTTP는 클라이언트와 서버 사이에 이루어지는 요청/응답 프로토콜이다. 1990년대 초에 설계된 HTTP는 거듭하여 진화해온 확장 프로토콜이며, 애플리케이션 계층의 프로토콜이다.

## HTTP의 특징

- `HTTP는 간단하다` : HTTP는 사람이 읽을 수 있도록 간단하게 고안되었다. HTTP/2에서 더 복잡해지기는 했지만 여전히 HTTP 메시지를 프레임별로 캡슐화하여 간결함을 유지하였다.
- `확장 가능하다` : 클라이언트와 서버가 새로운 헤더의 시맨틱에 대해서만 합의한다면, 언제든지 새로운 기능을 추가할 수 있다.
- `무상태(Stateless)`: HTTP는 상태를 저장하지 않는다. 즉, 통신간의 연결 상태 처리나, 정보를 저장할 필요가 없기 때문에 서버 디자인이 간단해진다는 장점이 있다. 만약 저장이 필요한 경우에는 쿠키나 세션을 활용해 정보를 저장할 수 있다.
- `비연결성(Connectionless)`: 클라이언트와 서버가 한 번 연결을 맺은 후, 클라이언트의 요청에 대해 서버가 응답을 마치면 맺었던 연결을 끊어버리는 성질을 말한다. 이러한 특징의 장점은 컴퓨터마다 매번 연결을 유지할 필요가 없기 때문에 리소스를 줄일 수 있어 더 많은 연결을 그때그때 수행할 수 있다는 장점이 있다. 하지만 연결 해제를 매번 해주어야 때문에 이에 대한 오버헤드가 일어난다는 단점또한 가지고 있다.

## HTTP의 통신 흐름

1. TCP 연결을 연다.
2. HTTP 메시지를 전송한다.
3. 서버에 의해 전송된 응답을 읽는다.
4. 연결을 닫거나 다른 요청들을 위해 재사용한다.

## HTTP 메시지

### 요청 메시지

![http_request](/img/network/http_vs_https/http_request.png)

- http 메서드
- 리소스의 경로
- http 프로토콜 버전
- 헤더
- body

### 응답 메시지

![http_response](/img/network/http_vs_https/http_response.png)

- http 프로토콜 버전
- 상태 코드
- 상태 메시지
- http 헤더
- body

## HTTPS란?

HTTPS란 (HyperText Transfer Protocol over Secure Socket Layer)의 약자로, HTTP위에 **SSL** 보안 프로토콜이 추가된 형태를 말한다.

이는 아래와 같은 HTTP의 보안상 약점을 개선하기 위해 넷스케이프 커뮤니케이션즈 코퍼레이션이 개발하였다.

- 평문(암호화 하지 않은) 통신이기 때문에 패킷을 수집하여 도청 가능하다.
- 통신 상대를 확인하지 않기 때문에 위장 가능하다.
- 완전성(정보의 정확성) 즉, 발신된 리퀘스트나 리스폰스와 수신한 리퀘스트나 리스폰스가 같은지를 증명할 수 없기 때문에 변조 가능하다.

그렇다면 이를 해결한 HTTPS는 어떠한 특징을 가지고 있는지 살펴보자.

## HTTPS의 특징

앞서 말했듯이 HTTPS는 HTTP에 SSL이나 TLS가 추가된 형식이다.

보통 HTTP는 직접 TCP와 통신하지만 HTTPS는 SSL과 통신하고 SSL이 TCP와 통신하게 된다. SSL은 공개키 암호의 방식을 사용하는데, 이 방식은 수신한 공개키가 본래 의도한 서버가 발행한 공개키인지를 증명할 수가 없어서 인증 기관을 두어 그 약점을 보완하였다. 인증기관은 다음과 같은 순서로 이용된다.

1. 서버의 운영자가 인증 기관에 서버의 공개키를 등록한다.
2. 인증기관은 인증 기관의 비밀키로 서버의 공개키에 디지털 서명을하여 서명이 끝난 공개키를 만든다.
3. 서버는 이 인증 기관에 의해서 작성된 공개키 인증서를 클라이언트에 보내고 공개키 암호로 통신을 한다.
4. 증명서를 받은 클라이언트는 증명 기관의 공개키를 사용해서 서버의 공개키를 인증한 것이 진짜 인증 기관이라는 것과 서버의 공개키가 신뢰할 수 있다는 것을 알 수 있다.

위와 같은 인증기관 추가와 SSL의 사용으로 HTTP의 단점을 해결하여 다음과 같은 장점을 가질 수 있었다.

- 통신 암호화(SSL이나 TLS라는 다른 프로토콜을 조합하여 HTTP의 통신 내용을 암호화)
- 상대를 확인하는 증명서(제3자 기관에 의해 발행되는 증명서를 통해 클라이언트가 내가 통신하고자 하는 상대인지 아닌지 판단)

이제, HTTPS를 사용하여 클라이언트와 서버가 어떻게 통신을 진행하는지 알아보도록 하자.

## HTTPS의 통신 흐름

![https_process](/img/network/http_vs_https/https_process.png)

1. 클라이언트가 Client Hello 메시지를 보내면서 SSL 통신을 시작한다. 메시지에는 클라이언트가 제공하는 SSL 버전을 지정하고, 암호 스위트로 불리는 리스트등이 포함되어 있다.
2. 서버가 SSL 통신이 가능한 경우에는 Server Hello 메시지로 응답하고 클라이언트와 같이 SSL 버전과 암호 스위트를 포함한다.
3. 서버가 Certificate 메시지를 보낸다. 메시지에는 공개키 증명서가 포함되어 있다.
4. 서버가 Server Hello Done 메시지를 보내고 최초의 SSL negotiation이 끝났음을 알린다.
5. 클라이언트가 Client Key Exchange 메시지로 응답한다. 메시지에는 통신을 암호화 하는데 사용하는 Pre-Master secret이 포함되어 있다.
6. 키를 생성한다.
7. 클라이언트는 Change Cipher Spec 메시지를 보낸다. 이 메시지는 이 메시지 이후의 통신은 암호키를 사용해서 진행한다는 것을 나타내고 있다.
8. 클라이언트는 Finished 메시지를 보낸다. 이 메시지는 접속 전체의 체크값을 포함하며, 네고시에이션이 성공했는지는 서버가 이 메시지를 올바르게 복호화할 수 있느냐에 따라 결정된다.
9. 서버에서도 마찬가지로 Change Cipher Spec 메시지를 보낸다.
10. 서버에서 마찬가지로 Finished 메시지를 보낸다.
11. 서버와 클라이언트의 Finished 메시지 교환이 완료되면 SSL에 의한 접속이 확립되고 통신은 SSL에 의해 보호된 상태로 애플리 케이션 계층의 프로토콜에 의해 통신을 하게된다. 즉, HTTP 리퀘스트를 보낸다.
12. 서버가 HTTP 리스폰스를 보낸다.
13. 클라이언트가 접속을 끊고, close_notify 메시지를 송신한다. 이후 FIN 메시지를 보내 TCP 통신을 종료한다.

## HTTPS는 보안상의 이점밖에 없는가?

HTTPS로 전환하게 되면 `검색엔진 최적화(SEO)`에 있어서도 큰 혜택을 볼 수 있다. 구글이 HTTPS 웹사이트에 가산점을 주는 이유 때문이기도 하지만, 사용자들이 결국에는 가장 안전하다고 생각하는 사이트를 더 많이 방문하기 때문이다. 또한 가속화된 모바일 페이지(AMP, Accelerated Mobile Pages)를 만들고 싶을 때도 HTTPS 프로토콜을 사용해야 한다. [AMP참고](https://blog.outsider.ne.kr/1285)

## 모든 사이트는 HTTPS를 사용하는게 좋을까?

HTTPS 가 HTTP보다 보안과 SEO측면에서 좋다고 볼 수 있지만 HTTPS는 평문 통신인 HTTP에 비해 CPU나 메모리 리소스가 많이 필요하다. 따라서 엑세스가 많은 웹 사이트 등에서 암호화를 하면 부하가 상당하다. 또한 Let’s Encrypt와 같은 무료 증명서를 이용하지 않는경우라면 증명서를 구입하는 비용도 생각해 봐야할 문제이기도 하다.

## 나올 수 있는 면접 질문

- HTTP란 무엇인가요?
- HTTPS란 무엇인가요?
- HTTP의 통신과정은 무엇인가요?
- HTTPS의 통신과정은 무엇인가요?
- HTTP와 HTTPS 차이점은 무엇이 있을까요?

## 참고 url

- [HTTP - 위키백과](https://ko.wikipedia.org/wiki/HTTP)
- [HTTP - MDN](https://developer.mozilla.org/ko/docs/Web/HTTP)
- [HTTPS - 위키백과](https://ko.wikipedia.org/wiki/HTTPS)
- [HTTP vs HTTPS 차이 - 위시캣 블로그](http://blog.wishket.com/http-vs-https-%EC%B0%A8%EC%9D%B4-%EC%95%8C%EB%A9%B4-%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%9D%98-%EB%A0%88%EB%B2%A8%EC%9D%B4-%EB%B3%B4%EC%9D%B8%EB%8B%A4/)
- [안전한 SSL/TLS를 운영하기 위해 알아야 하는 것들](https://engineering.linecorp.com/ko/blog/best-practices-to-secure-your-ssl-tls/)

## 기여자

<td align="center"><a href="http://kyun2da.dev"><img src="https://avatars.githubusercontent.com/u/50328132?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kyun Heo</b></sub></a><br /><a href="#platform-Kyun2da" title="Packaging/porting to new platform">📦</a></td>
