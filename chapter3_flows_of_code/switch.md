## switch문

> 조건에 따라서 의도된 흐름을 유도한다는 점에서 if문과 유사하다. 
> switch문은 **if문을 여러개 뭉쳐놓은 덩어리**라고 이해하면 편할 것 같다. 
> if문은 &&(and) ||(or) 로 이어진 것들의 조건의 참/거짓을 따진다. 
> switch문은 **각각 case들의 참/거짓**을 따진다. 


### 코드 구현

`case`는 if와 같은 역할을 한다. 
`break`는 `switch`문을 탈출하기 위해 사용한다. 
```javascript
var inputNumber = Number(window.prompt('숫자를 입력하세요'));
switch (inputNumber) {
    case 0 : 
        alert('Zero');
        break
    case 1 : 
        alert('One');
        break
    case 7 :
        alert('Lucky');
        break
    default : 
        alert('unlucky');
        break
```

### break가 없다면

> `case 0`을 만족하던 안하던 상관없이 다음 케이스로 넘어가게 된다. 
> 만약 0을 넣었다면 Zero부터 unlucky 모두를 순차적으로 출력한다. 
> 1을 넣었다면 `case 0`은 false이므로 넘어가고 One부터 unlucky를 출력한다.

### if문과의 차이점

1. switch 문의 case에서는 조건식을 걸 수 없다. 
    - 부등호, 논리연산자 등을 case와 함께 사용할 수 없다. 
    - 따라서 범위로 조건을 나누어야 하는 경우에는 switch문을 사용하기 어렵다. 

2. 조건이 참이던 아니건 if문을 거치면 그것으로 끝이다. 
    - switch문은 조건에 맞는 케이스를 찾고 명령을 수행한다 해서 구문이 끝나지 않는다.
    - 따라서 break문을 적절히 사용하지 않으면 switch문이 원하는 타이밍에서 끝나지 않는다. 
![image](https://user-images.githubusercontent.com/53211781/75627058-251b4e00-5c10-11ea-9c6c-b6f5f1d145b9.png)
C를 만족시킨다 해서 switch 문이 끝나지 않고 다음 다음까지 출력 후 break를 만나 구문이 종료된다.