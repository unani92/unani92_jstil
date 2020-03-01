### while문

```javascript
var i = 0;
while (i<brands.length) {
    console.log(brands[i]);
    i ++;
}
```
종료조건 잘못되면 무한루프타니 조심해야한다...

### break

내가 아는 그 `break` 맞다.
```javascript
var i = 100;

while (true) {
    // i가 23의 배수면 반복문을 끝냄
    if (i % 23 == 0) {
        break;
    }
    i = i + 1;
}

console.log(i);
// 115
```

### continue
```javascript
var i = 0;

while (i < 15) {
    i = i + 1;

    // i가 홀수면 console.log(i) 안하고 바로 조건부분으로 돌아감
    if (i % 2 == 1) {
        continue;
    }
    console.log(i);
}
```

### 배열만들기 연습문제
```javascript
function range(start, end, step) {
    var arr = [];
    var i = start;
    if (step > 0) {
        while (i < end) {
            arr.push(i)
            i += step
        }
    }
    else {
        while (i > end) {
            arr.push(i)
            i += step
        }
    }
    

    return arr;
}

// 테스트 코드
console.log(range(1, 10, 1));
console.log(range(-1, 10, 3));
console.log(range(10, -10, -4));
```

