### 형변환

#### 사용예시
사용 매커니즘은 파이썬과 유사하다.
```javascript
var scoreString = '10';
typeof scoreString ;    // string

Number(scoreString);    // 10
typeof Number(scoreString);    // number

typeof String(20);        // string
```

#### window.prompt()
```html
<script>
    alert('hello javascript');
    var myFavoriteNum = window.prompt('좋아하는 숫자를 입력하시오');
    myFavoriteNum = Number(myFavoriteNum);
</script>
```
파이썬으로 따지면 `input()` 이랑 같은 기능이다.
파이썬과 마찬가지로 숫자가 들어와도 **문자열**로 입력을 받는다. 
![image](https://user-images.githubusercontent.com/53211781/75354427-48808900-58f0-11ea-884f-8da5c3a6ae7c.png)

따라서 형변환을 하는 것은 파이썬에서 `int(input())`으로 형변환해서 사용하는 것과 같은 이유라 할 수 있다. 

#### 연습문제

개행 시 세미콜론 붙이는 습관을 들이자....
```javascript
// 숫자형과 문자열 재료
var material1 = '3';
var material2 = 3;
var material3 = '4';
var material4 = 10;

// 요리 결과
var result1;
var result2;

// 형 변환을 사용해서 result1에는 문자열 '30'을, result2에는 숫자형 40을 만들어 넣어보세요.
result1 = Number(material1) * material4;
result1 = String(result1);

result2 = Number(material3) * material4;
// 테스트 코드
console.log(result1);
console.log(typeof result1);
console.log(result2);
console.log(typeof result2);
```
