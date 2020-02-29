### if문

#### 활용예시
```javascript
var inputNumber = window.prompt('한자리 숫자를 입력하세요')

if (inputNumber === '7') {
    alert('Lucky!!');
    }
else {
    alert('Unlucky!!')
    }
```

![image](https://user-images.githubusercontent.com/53211781/75611598-33f5f800-5b5f-11ea-9ca4-6c527d01043d.png)

![image](https://user-images.githubusercontent.com/53211781/75611607-4c661280-5b5f-11ea-9041-addb6ac13b4c.png)

#### else if
> if문이랑 똑같은 문법으로 작성해주면 된다. 
```html
<script>
    var inputNumber = window.prompt('한자리 숫자를 입력하세요')
    if (inputNumber === '7') {
        alert('Lucky!!');
    }
    else if (inputNumber === '0') {
        alert('Zero')
    }
    else if (inputNumber === '1') {
        alert('One')
    }
    else {
        alert('Unlucky!!')
    }
</script>
```

#### 논리연산자와 함께 사용하는 조건문

> 잠깐 복습 !! &&(and) ||(or) !(not)
```javascript
var num = 12 ;
if (num % 2 === 0 && num % 3 === 0) {
console.log(num + '은 6의 배수입니다')
}
else {
console.log(num + '은 6의 배수가 아닙니다')
}
```

#### 서열정리 
> `if` `else if` `else` 중첩하는 방법 연습하기
> 코드가 길어서 따로 파일로 저장
> 들여쓰기를 하지 않으면 에러(IndentationError)를 발생시키는 파이썬과 달리 문법 자체가 들여쓰기를 강제하지 않지만 **들여쓰는 습관을 들이는게** 디버깅 등 코드 관리에 좋다는게 내 생각. 