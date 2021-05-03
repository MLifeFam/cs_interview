# Stack vs Queue

## 1-1.  Stack의 정의

   Stack이란, 영어 Stack의 의미처럼 쌓아 올린다는 뜻이다. 한쪽에서만 원소를 삽입하고 삭제가 가능한 자료구조이다. LIFO(Last In First Out)구조로 되어있다.

## 1-2. Stack의 기술 내용

   ![](/img/Data-Structure/Stack_and_Queue/stack_image2.png)

   Stack에는 두가지 중요한 기술인 Push와 Pop이 있다. 그림과 같은 입구와 출구가 동일한 바구니가 있다. Push를 하게 되면 바구니에 원소를 집어넣게 된다. 또 한번 Push를 하게 되면 첫 원소 위에 두번째 원소가 위치하게 된다. 여기서 첫번째 원소를 꺼내고 싶다면 Pop을 두번해야 한다. 결국 삽입을 할 때에도 맨 위(Top)에 삽입을 하게 되고 꺼낼때에도 맨 위에 있는 원소를 꺼내게 된다.

   주로 문자열의 역순을 만들 때, 괄호 검사를 할 때, DFS나 재귀함수, 웹 브라우저에서의 뒤로가기 방식에 사용된다. Stack의 시간복잡도는 Stack 안의 원소의 총 개수가 n일 때, O(n)이다.

   ![](/img/Data-Structure/Stack_and_Queue/stack_image.png)

## 2-1. Queue의 정의

   Queue란, 영어 Queue의 의미처럼 일렬로 서서 들어온 순서대로 나가는 방식이다. 한쪽에서 원소를 삽입하고 반대쪽에서 삭제가 가능한 자료구조이다. FIFO(First In First Out)구조로 되어있다.

## 2-2. Queue의 기술 내용

   Queue에는 두가지 중요한 기능인 Enqueue와 Dequeue가 있다. Enqueue를 하여 데이터를 삽입할 수 있고 Dequeue를 사용하여 데이터를 제거할 수 있다. 데이터를 삽입할 때에 삽입되는 원소의 위치는 Queue의 맨 뒷부분(Back)이고, 데이터를 제거할 때에 제거되는 원소의 위치는 Queue의 맨 앞부분(Front)이다. Queue의 시간복잡도는 Queue 안의 원소의 총 개수가 n일 때, O(n)이다.

   ![](/img/Data-Structure/Stack_and_Queue/queue_image.png)

## 3. 나올 수 있는 면접 질문

   스택과 큐를 어디에 적용할 수 있을까?

   ​	스택은 DFS나 재귀함수, 문자열의 역순을 구현 할 때 사용 가능하다.

   ​	큐는 BFS나 캐시 구현 할 때 사용 가능하다.

   

   스택과 큐의 차이점은?

   ​	스택은 한방향(Top)을 통하여 접근할 수 있고, push & pop 연산을 통해서 원소들을 삽입, 삭제하게 된다.	LIFO(Last In First Out)구조이다.

   ​	큐는 한쪽에서는 삽입을 하고, 반대쪽에서는 삭제를 하게 된다. FIFO(First In First Out)구조이다.



## 4. 참고 url

https://galid1.tistory.com/178
https://gmlwjd9405.github.io/2018/08/03/data-structure-stack.html
https://ko.wikipedia.org/wiki/%EC%8A%A4%ED%83%9D
https://ko.wikipedia.org/wiki/%ED%81%90_(%EC%9E%90%EB%A3%8C_%EA%B5%AC%EC%A1%B0)
https://ko.wikipedia.org/wiki/%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84_%ED%81%90



## 5. 기여자


 <td align="center"><a href="https://github.com/HelloNaks"><img src="https://avatars.githubusercontent.com/u/49478141?v=4?s=100" width="100px;" alt=""/><br /><sub><b>HelloNaks</b></sub></a><br /><a href="#platform-HelloNaks" title="Packaging/porting to new platform">📦</a></td>