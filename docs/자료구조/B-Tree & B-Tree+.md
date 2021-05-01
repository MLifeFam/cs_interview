

## 1. B-Tree란?

**B-Tree**는 자식 노드의 개수가 2개 이상인 트리를 말한다.
이진트리가 자식 노드가 최대 2개인 트리를 말하는 것인데, 
이 이진트리를 확장해서 더 많은 수의 자식을 가질 수 있게 일반화 시킨 것이 B-Tree이다.



## 2. B-Tree의 구조



![B-TreeStructure](/img/Data-Structure/B-Tree/B-TreeStructure.png)

그림의 네모 칸 하나 하나를 '노드' 라고 하며, 가장 상단의 노드를 '**루트 노드(Root Node)**', 중간 노드를 '**브랜치 노드(Branch Node)**', 가장 하단의 노드를 '**리프 노드(Leaf Node)**' 라고 한다.



안의 구조를 자세히 살펴보면 다음과 같다.

![B-TreeofOrder4](/img/Data-Structure/B-Tree/B-TreeofOrder4.jpg)

위 그림에서 보듯이, 한 노드당 자식 노드를 2개 이상 가질 수 있다.





