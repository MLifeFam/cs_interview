## CISC (Complex Instruction Set Computer)

단어 그대로 연산에 처리되는 복잡한 명령어 집합을 갖는 CPU 구조이다. 하나의 명령어 실행을 통해 일련의 복잡한 프로세스를 수행한다.
명령어의 개수가 증가하게 되면, 동시에 프로세서의 내부 구조도 복잡해지며 고속으로 작동하는 프로세스를 만들기가 힘들다. 
CISC는 다음과 같은 특징을 갖는다.

- 명령어가 복잡하기 때문에 명령어를 해석하는데 시간이 오래걸리며, 명령어 해석에 필요한 회로도 복잡하다.
- 명령어의 포맷이나 길이에 관한 규칙이 없다.
  - 각각의 명령어는 사양을 충족시키기에 가장 적합한 포맷과 크기를 갖도록 설계됐다.
- 하나 이상의 클럭 주기로 하나의 명령어를 실행한다.
- RISC에 비해 전력 소모가 크다.



## RISC (Reduced Instruction Set Computer)

기존 CISC 방식에서 쓰이는 수 많은 명령어 중에서 실제로 쓰이는 명령어는 제한적이라는 점을 바탕으로 고안된 방식이며, 명령어 개수를 줄여 하드웨어 
구조를 좀 더 간단하게 만드는 방식이다. 대표적으로 ARM이 여기에 속한다.
RISC는 다음과 같은 특징을 갖는다.

- 파이프라이닝 기술을 도입할 수 있어 빠른 속도와 하드웨어 단순화 및 효율성 증가, 그리고 이로 인한 가격에서의 경쟁력 우위를 갖는다.
- 고정길이 명령어
  - 디코딩 속도가 빠르다.
  - 클럭 주기당 하나의 명령어를 수행한다.
- RISC 방식은 대부분 현대 프로세서 디자인에 사용되며, 임베디드 프로세스에도 사용된다.



## CISC와 RISC 비교

- 로직 회로의 크기
  - 명령어가 단순한 프로세스에 상응하기 때문에 RISC는 소형 로직으로도 충분하다.
  - 반면, CISC는 각 명령어에 대해 실행되는 프로세스들이 복잡하므로 대형 로직이 요구된다.
- 성능적 우위
  - 오늘날 몇몇 CISC는 RISC의 장점을 공유하고 있으며, 몇몇 RISC는 CISC의 장점을 일부 공유하고 있다.
    이로 인해, 누가 더 성능적 우위에 있다고 말하기 애매하다.
- 코드 밀도
  - CISC 아키텍처에서는 하나의 명령어로 여러개의 프로세스를 수행한다.
  - 그러나, RISC 아키텍처에서는 다수의 명령어로 하나의 프로세스를 수행한다.


<div align='center'>
    <img src='/img/computer_architecture_and_OS/cisc_risc/01.PNG' />
</div>




## ARM (Advanced RISC Machine)

-  ARM은 임베디드에서 많이 사용되는 RISC 기반의 프로세서이다.
-  RISC 기반이므로, CISC에 비해 명령어 수가 적고 이로인해 적은 트렌지스터가 필요로하여 전력소비 및 발열이 적다.
-  위에서 언급한 특징으로인해 스마트폰, 태블릿과 같은 모바일 기기와 임베디드 시스템에 적합하다.





## 면접에 나올 수 있는 질문

- CISC와 RISC에 대하여 설명





## 참고

- [CoolingTaste님 블로그](https://cooling.tistory.com/19)
- [미니송님 블로그](https://dany-it.tistory.com/41)
- [Jake.lee님 블로그](https://frontalnh.github.io/2018/04/17/%EC%BB%B4%ED%93%A8%ED%84%B0-%EA%B5%AC%EC%A1%B0-risc-%EC%99%80-cisc-%EA%B5%AC%EC%A1%B0/)
- [CISC vs RISC](https://jwprogramming.tistory.com/20)
- [공대생 교님 블로그](https://eunkyovely.tistory.com/35)
- [CISC와 RISC란 무엇인가?](https://www.seminet.co.kr/ms_pdf/667_20151229134857_201502_st.pdf)



## 기여자

<td align="center"><a href="https://github.com/zoolake"><img src="https://avatars.githubusercontent.com/u/57625026?v=4" width="100px;" alt=""/><br /><sub><b>Junho Moon</b></sub></a><br /><a href="#platform-zoolake" title="Packaging/porting to new platform">📦</a></td>