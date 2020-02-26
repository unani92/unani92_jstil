### string

```javascript
var text1 = 'hello';

//에러(세미콜론부터 제대로 처리가 안된다.)
var text2 = 'it's cool';

//해결하기 
var text3 = "it's cool";
```

#### 문자열 더하기
```javascript
'hello' + 'world' 
'2' + '5' 
```
```
helloworld
'25'
```
#### 연습문제
```javascript
// 숫자형과 문자열 재료
var material1 = 3;
var material2 = '3';
var material3 = 10;
var material4 = '4';
var material5 = 4;

// 연산 결과
var result1;
result1 = material2 + material4;
var result2;
result2 = material1*material3+material5;
// 연산을 통해 result1에 문자열 '34'를, result2에 숫자형 34를 만들어 넣어주세요.
// 코드를 작성하세요.

// 테스트 코드
console.log(result1);
console.log(typeof result1);
console.log(result2);
console.log(typeof result2);
```
