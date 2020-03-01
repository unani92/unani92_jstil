### 배열만들기2 연습문제

> python에서는 현재 배열을 기준으로 해당 인덱스 번호가 없는데 인덱싱을 시도하면 IndexError를 출력한다. 
> 그런데 javascript은 없는 인덱스 번호를 사용하면 해당 인덱스 번호를 가지는 원소를 삽입한다. 
> 참고로 `push()`는 파이썬의 `append()`랑 동일한 매서드이다.

#### 내 소스코드
```javascript
var arr1 = [[2, 1], [4, 3]];
var arr2 = [[3, 2, 1], [5, 4], [6]];
var arr3 = [[3], [4, 5], [6], [7], [8, 9, 10]];

function restoreArray(arr) {
    var returnArr = [];

    for (lst of arr){
        for (var i = lst.length-1; i >= 0; i -= 1){
            returnArr.push(lst[i]);
        }
    }
  
    return returnArr;
}

console.log(restoreArray(arr1));
console.log(restoreArray(arr2));
console.log(restoreArray(arr3));
```

#### 코드잇 ver

> 루프를 돌 때마다 idx를 1씩 증가시키고 배열에 idx번을 가진 원소를 push하는 방식
> 파이썬이면 상상도 못할 방식이지만 자바스크립트는 가능한 것 같다.
```javascript
var arr1 = [[2, 1], [4, 3]];
var arr2 = [[3, 2, 1], [5, 4], [6]];
var arr3 = [[3], [4, 5], [6], [7], [8, 9, 10]];

function restoreArray(arr) {
    var returnArr = [];
    var idx = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = arr[i].length - 1; j >= 0; j--) {
            returnArr[idx] = arr[i][j];
            idx++;
        }
    }
    return returnArr;
}
```

