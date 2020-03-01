// 반복문을 순회하면서 모든 값들을 1대1비교한다.
// 큰 숫자를 만나면 카운트를 1개씩 늘린다. 
// 가장 큰 숫자는 그 카운트가 0일 것이고 두번째 큰 수는 카운트가 1일 것이다.
// 카운트가 1인 숫자를 출력한다. 

function getSecondBiggestNumber(arr) {
    for (var i = 0 ; i <= arr.length; i++) {
        var cnt = 0
        for (var j = 0 ; j <= arr.length; j++) {
            if (arr[i] < arr[j]) {
                cnt += 1
            }
        }
        if (cnt === 1) {
            return arr[i]
        } 
    }
}

// 테스트 코드
console.log(getSecondBiggestNumber([4, 7, 2, 1, 9, 3, 6, 5]));
console.log(getSecondBiggestNumber([80, 2, 44, 21, 92, 3, 51]));
console.log(getSecondBiggestNumber([4, 7, 6, 5]));


// 코드잇 정답 버전 : 반복문 1번만 쓰고 풀수 있다는 점에서 내 풀이보다 좋은거 인정
// 1등과 2등을 임의로 정한 다음에 순회하면서 값을 바꿔나가는 방식
// 반복 1번에 끝낼 수 있다. 

function getSecondBiggestNumber2(arr) {
    var first = arr[0];
    var second = arr[1];
    for (var i = 1 ; i <= arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } 
        else if (arr[i] > second) {
            second = arr[i];
        }
    }
    return second;
}
// 테스트 코드
console.log(getSecondBiggestNumber2([4, 7, 2, 1, 9, 3, 6, 5]));
console.log(getSecondBiggestNumber2([80, 2, 44, 21, 92, 3, 51]));
console.log(getSecondBiggestNumber2([4, 7, 6, 5]));

//배열만들기2
var arr1 = [[2, 1], [4, 3]];
var arr2 = [[3, 2, 1], [5, 4], [6]];
var arr3 = [[3], [4, 5], [6], [7], [8, 9, 10]];

function restoreArray(arr) {
    var returnArr = [];

    for (lst of arr){
        for (var i = lst.length-1; i >= 0; i -= 1){
            returnArr.push(lst[i])
        }
    }
  
    return returnArr;
}

console.log(restoreArray(arr1));
console.log(restoreArray(arr2));
console.log(restoreArray(arr3));