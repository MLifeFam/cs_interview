

## 1. B-Tree란?

**B-Tree**는 자식 노드의 개수가 2개 이상인 트리를 말한다.
이진트리가 자식 노드가 최대 2개인 트리를 말하는 것인데, 
이 이진트리를 확장해서 더 많은 수의 자식을 가질 수 있게 일반화 시킨 것이 B-Tree이다.





## 2. B-Tree의 구조



![TreeStructure](C:\Android\AndroidProject\cs_interview\static\img\Data-Structure\B-Tree\TreeStructure.png)

그림의 네모 칸 하나 하나를 '노드' 라고 하며, 가장 상단의 노드를 '**루트 노드(Root Node)**', 중간 노드를 '**브랜치 노드(Branch Node)**', 가장 하단의 노드를 '**리프 노드(Leaf Node)**' 라고 한다.



안의 구조를 자세히 살펴보면 다음과 같다.

![B-TreeStructure](C:\Android\AndroidProject\cs_interview\static\img\Data-Structure\B-Tree\B-TreeStructure.png)

위 그림에서 보듯이, 노드당 데이터를 2개 이상 가질 수 있으며  자식 노드를 자신의 데이터 수 이상으로 가질 수 있다. 즉, 노드의 데이터가 N개이면, 자식 수는 N+1개가 된다.

여기서 노드당 최대 M개의 자식노드를 가질 때, **M차 B트리** 라고 한다.





## 3. B-Tree의 규칙

- 노드의 자료수가 N이면, 자식 수는 N+1이어야 함
- 각 노드의 자료는 정렬된 상태여야함 ( 1, 3, 5 처럼 )
- 루트 노드는 적어도 2개 이상의 자식을 가져야함
- 루트 노드를 제외한 모든 노드는 적어도 M/2개의 자료를 가지고 있어야함
- 외부 노드(Leaf Node)로 가는 경로의 길이는 모두 같음.
- 입력 자료는 중복 될 수 없음
- 이진트리와 같이 노드 데이터보다 작은값은 왼쪽에, 큰 값은 오른쪽에 위치한다.





## 4. B+Tree란?

B-Tree의 확장개념으로,  데이터의 빠른 접근을 위해 인덱스 역할만 하는 비단말 노드(Not Leaf)가 추가로 존재한다.

브랜치 노드에는 노드를 찾아갈 수 있는 Key만 담아두고 리프 노드에 Key와 Data가 존재한다. 
그리고 리프 노드끼리는 LinkedList로 연결되어 있다.





## 5. B+Tree의 구조



![B+TreeStructure](C:\Android\AndroidProject\cs_interview\static\img\Data-Structure\B-Tree\B+TreeStructure.png)

위의 그림처럼 InnerNode는 LeafNode의 데이터를 찾아가는 데에만 쓰이며, 
LeafNode끼리는 LinkedList로 연결되어 있다.





## 6. B+Tree와 B-Tree의 차이점

- B-Tree는 모든 노드에 데이터가 저장됨
- B+Tree는 Leaf에만 데이터 저장. 나머지 노드에는 Key만 저장됨 ( 메모리 활용에 효율적 )



- B-Tree는 탐색시, 최상의 경우엔 루트에서 끝날 수 있지만, 
- B+Tree는 최상의 경우에도 일단 Leaf로 내려가야 함



- B-Tree는 순차 탐색시에도 매번 루트에서 탐색을 시작하지만,
- B+Tree는 순차탐색 시 LinkedList를 통해 빠르게 이어나갈 수 있음 (범위 탐색과 풀스캔에 유리)





## 7. 면접 시 예상 질문

- B-Tree의 시간복잡도가 O(logN)인 이유는 무엇인가요?
- B-Tree의 사용 예시는 무엇이 있을까요?
- B+Tree가 B-Tree와 비교하여 장단점을 한가지씩 말해보세요





## 8. 참고

- https://zorba91.tistory.com/293
- https://github.com/gyoogle/tech-interview-for-developer/blob/master/Computer%20Science/Data%20Structure/B%20Tree%20%26%20B%2B%20Tree.md#%EC%9E%A5%EC%A0%90





## 9. 기여자

<td align="center"><a href="http://hongcoding.tistory.com"><img src="https://avatars.githubusercontent.com/u/46186664?v=4?s=100" width="100px;" alt=""/><br /><sub><b>HongEunho</b></sub></a><br /><a href="#platform-HongEunho" title="Packaging/porting to new platform">📦</a></td>