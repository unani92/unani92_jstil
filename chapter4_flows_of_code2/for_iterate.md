### for 반복문

#### 기본 형태
`for (var i = 0; i < 6; i += 1) {   }`
> 반복에 사용하고자 하는 변수 선언
> 스코프의 범위
> 스코프의 주기(예: 1씩 증가시켜라)

#### 코드 구현
```javascript
var brands = ['apple','coke','starbucks','amazon','disney','bmw']

for (var i = 0; i<brands.length; i += 1) {
    console.log(brands[i]);
}
```
> 예상대로 순차적으로 한줄씩 출력된다. 

#### 연습문제 : 별찍기

당연히 될줄 알았던 곱하기로 문자열 concatenate가 자바스크립트에서는 안되더라....그래서 살짝 당황
그래서 더하기를 n번 하는 방향으로 코드를 짰다.
```javascript
function printTriangle(height) {
    var star = '';
    for (var i = 1; i <= height ; i ++) {
    	star += '*'
        console.log(star);
    }
}
```

#### 연습문제 : 2등 찾기 

자바스크립트 파일 참조