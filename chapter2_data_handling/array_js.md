### 배열

#### 사용예시
파이썬과 마찬가지로 배열 안에 여러 데이터타입을 담을 수 있다. 
```javascript
var brands = ['apple','cocacola','starbucks']
var iPad = [800,'black',true]
```

#### 배열의 데이터 타입

배열의 데이터타입은 object 이다. 
```javascript
typeof brands;
typeof iPad;
```
```
object
object
```

#### 데이터 핸들링(파이썬과의 비교 대조를 통해)
이것도 파이썬이랑 유사하다. 0번부터 시작하는 것조차도
다만 길이를 조회하는 `len()` 은 arr.length 
```javascript
brands[1];        // 'cocacola'
brands.length;   //  3 
```

파이썬 리스트는 mutable 하지만 str은 immutable하다.
리스트는 인덱싱을 통해 값을 바꿔줄 수 있지만 str은 불가하다. 
자바스크립트 또한 마찬가지이다. 파이썬처럼 직접적인 에러메시지를 띄워주지는 않지만 값이 바뀌지 않았다는 것을 알 수 있다.  
![image](https://user-images.githubusercontent.com/53211781/75357477-c8105700-58f4-11ea-92c6-4f7e433d0406.png)

#### 2차원배열

소스코드랑 출력을 보면 **파이썬이랑 똑 같 다**. 

```html
<script>
    alert('hello javascript')
    var myFavoriteNum = window.prompt('좋아하는 숫자를 입력하시오');
    var brands = ['apple','coca','starbucks'];
    var products = [
        ['iphone','imac','macbook'],
        ['coke','pepsi'],
        ['americano','latte','tea']
    ];
    var appleProducts = products[0];
    console.log(products);
    console.log(products[2][0])
    console.log(appleProducts[1])
</script>
```

![image](https://user-images.githubusercontent.com/53211781/75359351-a06ebe00-58f7-11ea-9293-6fd5802e4fd6.png)
