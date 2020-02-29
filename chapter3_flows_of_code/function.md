## 함수

### 코드 예시
> 함수 만드는 것은 어느 언어나 거기서 거기인거 같다. 
> 중복되는 코드를 줄일 때 어느 언어에서나 쓰는 기능
> `function f(args) {} ;` 

```html
<script>
    function logTask(task) {
        console.log(task + ':완료');
        console.log('-');
    }

    logTask('보고서 작성');
</script>
```

### 연습문제 2
> Number 타입과 String 타입은 연산이 안되기 때문에
> 타입 통일 먼저 하고 concatenate를 해야 하는 문제
```html
<script>
    function expressMultiplication(a,b) {
        console.log(String(a) + ' * ' + String(b) + ' = ' + a*b);
    }
</script>
```

### 리턴값이 있는 함수
> 위에서 본 함수들은 리턴값이 없는 함수였다. 
> 파이썬의 `.sort()`와 `sorted()`의 차이와 똑같다.

```javascript
function inchToCentimeter(inch) {
     var centimeter = inch * 2.54;  // 1 inch = 2.54cm
      return centimeter
      };             // cm로 계산한 결괏값 돌려주기
 
var result1 = inchToCentimeter(2); // 2 inch를 cm로 바꾼 값
var result2 = inchToCentimeter(3); // 3 inch를 cm로 바꾼 값

console.log(result1);
console.log(result2);
console.log(inchToCentimeter(1) + inchToCentimeter(5));
```

#### parseInt 함수
![image](https://user-images.githubusercontent.com/53211781/75611340-11fb7600-5b5d-11ea-9a1f-784b41f0c187.png)

#### 각종 내장함수
| 함수         | 내용                                                       |
| ------------ | ---------------------------------------------------------- |
| String()     | 숫자를 문자열로 변환하는 함수                              |
| Number()     | 문자열을 숫자로 변환하는 함수                              |
| parseInt()   | 문자열 안에서 정수를 뽑아내는 함수                         |
| parseFloat() | 문자열 안에서 소수점 포함한 수를 뽑아내는 함수             |
| alert()      | 사용자에게 메시지(팝업)을 띄우는 함수                      |
| prompt()     | 메시지를 띄우고 문자열을 입력받는 함수 `input()`           |
| confirm()    | 메시지를 띄우고 확인과 취소 중 **하나를** 누르게 하는 함수 |
