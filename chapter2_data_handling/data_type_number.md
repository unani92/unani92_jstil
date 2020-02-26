### 자료형

##### 분류
숫자, 문자, 부울형 자료타입이 존재한다. 
타입 조회는 `typeof` 함수를 사용한다. 
```html
<script>
    var n = 10;    // number
    var s = '10';  // string
    var b = true;  // boolean
    var c = 'true'; // string 
</script>
```

##### 숫자형에서의 특이점
파이썬과는 다르게 정수형과 소수형 숫자를 구분하지 않는다. 
그냥 다 number 데이터 타입으로 퉁쳐진다. 
![image](https://user-images.githubusercontent.com/53211781/75348437-2bdf5380-58e6-11ea-99d0-ad749ab3cb08.png)

**그런데** 파이썬과의 공통점도 있다.....
연산자 줄여쓰기 가능하다는것
```javascript
// 다음 두 줄은 같은 의미입니다.
x = x + 1;
x += 1;

// 다음 두 줄은 같은 의미입니다.
x = x * 2;
x *= 2;

// 다음 두 줄은 같은 의미입니다.
x = x - 3;
x -= 3;

// 다음 두 줄은 같은 의미입니다.
x = x / 2;
x /= 2;

// 다음 두 줄은 같은 의미입니다.
x = x % 7;
x %= 7;
```

1씩 증가 혹은 1씩 감소할 때는 더 간단하게 표현 가능
```html
x = x+1;
x += 1;
x++;
// 빼기는 기호만 다르기 때문에 생략
```

##### 연습문제

여기서 잠깐, `console.log`는 파이썬의 `print`와 같은 기능인것 같다. 
```javascript
var width = 10;
var height = 20;

// 둘레의 길이 구하기
var perimeter = width*2 + height*2;
// 코드를 작성하세요.

// 넓이 구하기
var area = width*height;
// 코드를 작성하세요.

// 테스트 코드
console.log("둘레의 길이: " + perimeter);
console.log("넓이: " + area);
```