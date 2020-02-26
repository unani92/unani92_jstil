### 변수와 상수

#### 변수
> 세미콜론 : 문장의 끝맺음을 표현
> `var` 명령어로 사용

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Javascript Intro</title>
</head>
<body>
<script>
    var score = 1, score2 = 0; //주석처리
    const Max_Level = 99 ;
</script>
</body>
</html>
```

#### 변수이름 정하기 규칙
> 언더바, 달러는 사용이 가능하지만 숫자는 변수이름으로 사용이 불가함
> 변수는 대소문자 구분을 한다. 
> 매서드명과 동일한 변수명 사용 불가 예) if for var const 등


#### 상수
> `const` 명령어로 사용
> 통상적으로 대문자로 사용한다. 
> 한번 정하면 변경할 수 없다. 
    - 변경하려 하면 타입에러 발생