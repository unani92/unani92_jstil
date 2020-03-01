### for of 반복문
 
> 파이썬에서 iterable한 객체들을 하나씩 출력하는 것과 같은 기능이다. 
```python
lst = [15,78,54,62,23]
for i in lst : 
    print(i)
```

```javascript
var brands = ['nike','adidas','puma']
for (val of brands){
    console.log(val);
} 
```

### for in 반복문

> for of 반복문은 2015년에 생긴 기능이다. 
> 이전에는 for in 반복문을 사용했었다. 

#### 활용사례

![image](https://user-images.githubusercontent.com/53211781/
75628603-ef7d6180-5c1d-11ea-81c8-840f4436f4cd.png)

배열을 순회할 때 쓰는 것은 동일하지만 for of와 달리 배열의 인덱스를 통해 순회한다는 것을 알 수 있다. 

for of 처럼 배열의 값으로 순회하려면 이렇게 해야 한다. 
```javascript
for (idx in brands){
    console.log(brands[idx])
}
```