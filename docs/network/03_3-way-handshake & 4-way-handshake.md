<br/>

## 3-Way-Handshake

<br/>

3-Way-Handshake란, 전송제어 프로토콜(TCP)에서 통신을 하는 장치간 서로 연결이 잘 되어있는지 확인하는 과정/방식이다. 

쉽게 말해서 `TCP 통신을 이용하여 데이터를 전송하기 위해 네트워크 연결을 확인하는 과정` 이라고 할 수 있다.

3-Way-Handshake 과정을 통해 데이터를 주고받는 양 쪽 모두 데이터를 전송할 준비가 되었다는 것을 보장 할 수 있어야하고, 실제로 데이터 전달을 시작하기 전에 한 쪽이 다른쪽이 준비되었다는 것을 알 수 있도록 한다.

<br/>

### 3-Way-Handshake 과정

<br/>

3-Way-Handshake는 `클라이언트와 서버` 사이에서 이루어지는데 A라는 클라이언트와 B라는 프로세스 사이의 예시를 통해 과정을 설명해본다.

<br/>

먼저 포트의 상태 정보는 다음을 뜻한다.

```
- CLOSED: 포트가 닫힌 상태
- LISTEN: 포트가 열린 상태로 연결 요청 대기 중
- SYN_RCV: SYNC 요청을 받고 상대방의 응답을 기다리는 중
- ESTABLISHED: 포트 연결 상태
```

<br/>

또 TCP Header 안의 플래그 정보는 다음과 같다.

```
- SYN (Synchroinize Sequence Number): 동기화 요청을 뜻함
- ACK (Acknowledgement Number) : 확인, 응답을 뜻함
- FIN (Finish) : 세션 연결을 종료시킬 때 사용
```

<br/>

<div align='center'>

![3-way-handshaking](/img/network/3-way-handshake&4-way-handshake/3-way-handshaking.png)
###### <small>  이미지 출처 : https://gmlwjd9405.github.io/2018/09/19/tcp-connection.html</small>

<br/>

</div>

1. **A → B : SYN**
   - 접속 요청 프로세스 A가 연결 요청 메시지 전송 (SYN)
   - 송신자가 최초로 데이터를 전송할 때 Sequence Number을 임의의 랜덤 숫자로 지정하고, SYN 플래그 비트를 1로 설정한 세그먼트를 전송
   - PORT 상태 - *B: LISTEN*, *A:CLOSED*
   <br/>


2. **B → A: SYN + ACK**
   - 접속 요청을 받은 프로세스 B가 요청을 수락했으며, 접속 요청 프로세스인 A도 포트를 열어 달라는 메시지 전송 (SYN + ACK)
   - 수신자는 Acknowledgement Number 필드를 (Sequence Number + 1)로 지정하고, SYN과 ACK 플래그 비트를 1로 설정한 세그먼트를 전송
   - PORT 상태 - *B: SYN_RCV, A:CLOSED*
   <br/>


3. **A → B: ACK**
   - PORT 상태 - *B: SYN_RCV, A: ESTABLISHED*
   - 마지막으로 접속 요청 프로세스 A가 수락 확인을 보내 연결을 맺음 (ACK)
   - 이때, 전송할 데이터가 있으면 이 단계에서 데이터를 전송 할 수 있음
   - PORT 상태 - *B: ESTABLISHED, A: ESTABLISHED*

<br/>

위 과정은 다음처럼 표현 할 수 있다.

```
Client > Server : TCP SYN
Server > Client : TCP SYN ACK
Clinet > Server : TCP ACK
```

<br/>

:::tip  왜 SYN에 랜덤한 수를 전송할까?
연결을 맺을 때 사용하는 포트는 유한 범위 내에서 사용하고 시간이 지남에 따라 재사용된다. 따라서 두 통신 호스트가 과거에 사용된 포트 번호 쌍을 사용할 가능성이 존재하기 때문에 이런 가능성을 줄이기 위해서 ISN을 난수로 설정한다.
:::

<br/>

---

## 4-Way-Handshake

<br/>

3-Way-Handshake가 연결을 설정하는 과정이였다면 `4-Way-Handshake는 연결을 해제하는 과정`이다.

연결 해제란 서버와 상호작용을 통해 통신을 하다가 더 이상 통신을 하지 않겠다는 것을 의미한다.

<br/>

### 4-Way-Handshake 과정

<br/>

4-Way-Handshake 또한 클라이언트와 서버 사이에서 이루어지고 A라는 클라이언트와 B라는 서버를 예시로 과정을 설명한다.

<br/>

<div align='center'>

![4-way-handshaking](/img/network/3-way-handshake&4-way-handshake/4-way-handshaking.png)
###### <small>  이미지 출처 : https://gmlwjd9405.github.io/2018/09/19/tcp-connection.html</small>

<br/>

</div>

1. **A → B : FIN**
   - 프로세스 A가 연결을 종료하겠다는 FIN 플래그를 전송
   - 프로세스 B가 FIN 플래그로 응답하기 전까지 연결을 계속 유지
   <br/>


2. **B → A: ACK**
   - 프로세스 B는 일단 확인 메시지를 보내고 자신이 통신이 끝날 때 까지 기다린다 (TIME_WAIT 상태)
   - 수신자는 Acknowledgement Number 필드를 (Sequence Number + 1)로 지정하고, ACK 플래그 비트를 1로 설정한 세그먼트를 전송한다.
   - 자신이 전송할 데이터가 남아있다면 이어서 계속 전송한다.
   <br/>


3. **B → A: FIN**
   - 프로세스 B의 통신이 끝났으면 연결 종료 요청에 합의한다는 의미로 프로세스 A에게 FIN 플래그를 전송한다.

4. **A → B: ACK**
   - 프로세스 A는 확인했다는 메시지를 전송한다.

<br/>


---

## 면접에 나올 수 있는 질문

<br/>

<details>
<summary><strong> Q. 3-way-handshake란?</strong></summary>
<div markdown="1">
<br/>

> A. TCP 통신에서 데이터를 전송하기 위해 네트워크 연결을 확인하는 과정이다

</div>
</details>

<br />

<details>
<summary><strong> Q. 4-way-handshake란?</strong></summary>
<div markdown="1">
<br/>

> A. TCP 통신에서 네트워크 연결을 해제하는 과정

</div>
</details>

<br />

<details>
<summary><strong> Q. 왜 2-way-handshake는 불가능할까?</strong></summary>
<div markdown="1">
<br/>

> A. TCP는 양방향 연결이기 때문에 클라이언트가 서버에게 존재를 알리고, 서버에서도 클라이언트에게 존재를 알린 뒤 대답을 얻어야한다.<br/> 총 4단계가 필요하며 축약한 것이 3단계 이므로 2 way로는 한계가 있다. <br/> <br/> 1단계: 클라이언트가 서버에게 존재를 알린다 <br/> 2단계: 서버가 클라이언트의 존재를 알았다고 대답하며 클라이언트에게 존재를 알린다 <br/> 3단계: 클라이언트가 서버의 존재를 알았다고 대답한다.

</div>
</details>

<br />

---

## 참고

<br />

- [[TCP] 3-way-handshake & 4-way-handshake](https://asfirstalways.tistory.com/356)
- [[Network] TCP 3-way handshaking과 4-way handshaking](https://gmlwjd9405.github.io/2018/09/19/tcp-connection.html)
- [[네트워크 쉽게 이해하기 22편] TCP 3 Way-Handshake & 4 Way-Handshake](https://mindnet.tistory.com/entry/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EC%89%BD%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-22%ED%8E%B8-TCP-3-WayHandshake-4-WayHandshake)
- [TCP 3-way Handshake, 4-way Handshake](https://goodgid.github.io/TCP-IP-3Way-4Way/)

<br />

---

## 기여자

<br />

<td align="center">
	<a href="http://jongminfire.dev">
		<img src="https://avatars.githubusercontent.com/u/51112542?v=4?s=100" width="100px;" alt="" />
		<br />
		<sub>
			<b>Jongminfire</b>
		</sub>
	</a>
	<br />
	<a href="#platform-Jongminfire" title="Packaging/porting to new platform">
		📦
	</a>
</td>