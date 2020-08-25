---
title: 'ES6가 무엇일까?'
date: 2020-6-08 16:21:13
category: 'development'
draft: false
---

### 😢 해당 포스트는 마이그레이션중인 포스트에요! 추후 업데이트 필요!
<br />

![](../../assets/posts/es6/title.png)
<br />
> *ES6란, ECMAScript 2015를 의미하며 ECMAScript의 가장 최신 표준 버전이다.*    

[ES6](https://github.com/lukehoban/es6features)의 github에 들어가면 보이는 서두이다.    

왜 이 포스트를 쓰게 됬냐면, 내가 사용하는 javascript라는 정말 다재다능한 ~~그리고 뭐같기도 한~~ 언어이다.    

이런 javascript에는 방대한 양의 문법들이 존재하는데, 우연히 ES6의 github에 들어가게 되어서 무슨 문법들이 2015년에 추가가 되었을까? 싶어서 들어갔다가 된통 혼났다.    

2015년에 나왔다고 해서, 5년이 지난 지금인 2020년에는 잘 안쓰이겠지라고 생각했던 내가 부끄럽다. 아직도 많이 사용되는 문법들이 존재하더라. 그 중에 내가 처음 보는 문법들도 있었고, 읽어보니 정말 유용한데 내가 활용을 못하는 문법들도 존재하더라.    

글을 어느정도 읽어보니, 내 자신에 대해 부끄러움과 이걸 꼭 알아야지 싶은 욕망이 느껴져서 해당 포스트를 작성하게 되었다.    

그래서 이번 포스트는 ES6(이하 ECMAScript 2015)에 대해서 알아보자! 모든 문법들을 다루지는 않고(내가 너무 힘들다..), 주관적으로 중요하다고 생각하는 문법들만 모아서 정리했다.    

---
## Arrow Function

> 화살표 함수는 `=>`를 사용하는 함수의 축약버전(shorthand)입니다. 함수와는 다르게, 화살표 함수는 `this`를 외부 코드에서 받아옵니다(lexical this)

우리가 정말 자주 사용하는 문법이다. 개인적으로 정말 좋아하는 문법이지만, 사용하기 어려워하는 문법이기도하다. 왜냐하면 위 문장 중, **lexical this**라는 특성때문이다. 가끔 생각없이 사용하다가, 원치 않는 결과가 나올 때가 있어서 어렵지만, 그럼에도 불구하고 너무 간편하게 사용할 수 있어서 좋다.   

사용법은 아래와 같다.    

```
// 기존의 함수 사용법
var power = function (x) {
  return x * x
}

------------

// Arrow Function 사용 (매개변수 1개일 시, 소괄호 생략가능. 나머지는 필수)
var power = x => { return x * x }

------------

// 매개변수에 default값 설정 가능
var num = (x = 3) => { console.log(x) }

num() // 3
num(10) // 10

------------

// args를 사용한 가변인자 전달
var sum = (...args) => { return args.reduce((pre, cur) => pre + cur) }

console.log(sum(1,2,3,4)) // 10

------------

// lexical this
const person = {
  name : 'Lee',
  sayName : () => { console.log(`hi + ${this.name}`) }
}

// arrow function은 this를 lexical하게 binding하므로, 선언한 곳의 상위 context의 this에 binding된다.
// 그렇기 때문에 해당 객체의 method에 arrow function을 사용하면, 객체의 상위 context의 this인 window 객체에 binding된다.

obj1.sayName() // 그러므로 undefined 
```
---
## Class

원래 javascript에는 class가 없었다. 이는 javascript가 **object-oriented하지 않음을 의미하지는 않는다.**    

단지 javascript는 `prototype`을 사용하여, object-oriented를 구현할 뿐이다.    

여기서 나오는 `prototype`이라는 개념이 매우 생소할텐데, 그래서 많은 개발자들이 처음 javascript를 접할 때 어려움이 있었다고 한다.    

그래서 ES6에는 개발자들을 위하여 C/C++, JAVA등에서 쉽게 볼 수 있는 개념인 class를 도입한 것이다.    

주의해야할 점은, javascript는 그래도 `prototype`기반 언어이다. Class는 단지 **문법적 설탕(syntatic sugar)**임을 유의해야한다.



---
## Destructuring

개인적으로 참 좋은 문법이라고 생각한다. Javascript를 공부하기 이전에 제일 많이 썼던 언어였던 C/C++은 이렇게 못했었다. ~~내가 그런 함수를 못 찾은거일수도~~    

우리는 가끔씩 api를 콜해서 나오는 data라던지, random 함수를 통해서 나오는 data들 같이 많은 자료를 한 번에 받을 때 그 모든 자료가 필요한 것은 아닌 경우가 많다.    

**Destructuring**은 객체나 배열을 변수로 **분해**할 수 있는 특별한 문법이다. 그러한 상황에서 우리가 원하는 인자만을 값으로 받을 수 있다 이 말이다.    

예제를 통해서 보는 것이 이해가 가장 빠를테니 예제를 보자.    

```
// Instead of this
let firstName = arr[0]
let surname = arr[1]

// Using this
let [firstName, surname] = arr

------------

// No need to using 2nd element
let [firstName, , title] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic']

console.log(firstName) // Julius
console.log(title) // Consul

------------

// `...` syntax means 'REST OF THINGS THAT I DON'T ASSING'
let [name1, name2, ...rest] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic']

console.log(name1) // Julius
console.log(name2) // Caesar

// `rest` is array
console.log(rest[0]) // Consul
console.log(rest[1]) // of the Roman Republic
console.log(rest.length) // 2

------------

// If the left array length is longer than right one, that value is undefiend
let [name1, name2, name3, name4] = ['Julius', 'Caesar', 'Consul']

console.log(name1) // Julius 
console.log(name2) // Caesar
console.log(name3) // Consul
console.log(name4) // undefined

------------

// So we can assign 'default' value to it
let [name = 'Guest', surname = 'Anonymous'] = ['Julius']

console.log(name)    // Julius
console.log(surname) // Anonymous

------------

// We should carefully use syntax when we assign it array, but object are not
let options = {
  title: 'Menu',
  width: 100,
  height: 200
}

let {title, width, height} = options

console.log(title)  // Menu
console.log(width)  // 100
console.log(height) // 200

// Same output
let {height, width, title} = options

console.log(title)  // Menu
console.log(width)  // 100
console.log(height) // 200

// Also can extract specific value from object

let {height} = options

console.log(height) // 200
```
---
## Default, Rest, Spread

사실 이 글을 쓰면서 되게 웃긴 부분이, 다른 문법들을 설명할 때 해당 문법을 사용해서 설명한게 웃긴 점이다.    

그렇다고 해당 내용을 설명하지 않을 수는 없으니 간단하게 예제만 보고 넘어가자.

```
// Default
let [name = 'Guest', surname = 'Anonymous'] = ['Julius']

console.log(name)    // Julius
console.log(surname) // Anonymous (Default)

------------

// Rest
let [name1, name2, ...rest] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic']

console.log(name1) // Julius
console.log(name2) // Caesar
console.log(rest) // ['Consul', 'of the Roman Republic']

------------

// Spread
var addInArray = function (one, two, three) {
  return one + two + three
}

var arr = [1,2,3]

addInArray.apply(null, arr) // 6, legacy version
addInArray(...arr) // 6, spread(ES6) version
```
---
## Let, Const

Beginner인 나도 엄청 중요한 문법이라고 생각한다. 물론 그렇지 않을 수도 있다.    

하지만 개인적으로 자바스크립트를 처음 공부하면서 느낀것들 중, 제일 신선하게 다가왔던 것은 let과 const를 공부하면서 나오는 개념들이었다.    

그 자세한 내용들에 대해서는 추후 포스트를 통해 한 번에 다루도록 하고, 오늘의 내용은 아주 **짧고, 간단하게** 끝내보려고 한다.    

두 문법 다 *Block-scoped binding constructs*이며, `let`은 새로운 var이고 `const`는 일회성 var이라고 생각하면 편하다.    

변수 문법이기 때문에, 예제는 생략하겠다.    

---
## For .. Of

이 문법은 비슷한 문법들과 비교하면서 설명하면 좋을 것 같아서, 예제부터 시작하겠다.

```
// forEach
var items = ['item1', 'item2', 'item3']

items.forEach(function(item) {
    console.log(item)
})


// for ... in
var obj = {
    a: 1, 
    b: 2, 
    c: 3
}

for (var prop in obj) {
    console.log(prop, obj[prop]) // a 1, b 2, c 3
}

// for ... of
var iterable = [10, 20, 30]

for (var value of iterable) {
  console.log(value) // 10, 20, 30
}
```
<br />
결론을 다음과 같이 결정지을 수 있다.
* forEach: Object를 제외한 array, map, set에 대해 가능
* for ...in: Object와 array에만 가능 (두 자료형에는 `Enumerable`이라는 속성이 존재하기 때문)
* for ...of: Object를 제외한 array, map, set에 대해 가능 (`Symbol.iterator` 속성을 가져야 하기 때문)

---
## Promises

[JQ탭의 promise와 callback 비교](https://samsara-ku.github.io/question.html)에서 정리했던 내용이 여기서 도움이 되다니! 스스로 정리하면서 이게 의미가 있을까 싶었던 때가 있었는데, 이럴 때 도움이 될 줄은 생각도 못했다!    

자세한 내용은 위의 링크에서 찾을 수 있는 *"Promise", "Callback" 패턴은 각각 무엇이며, 차이점은?*의 내용으로 대치하겠다. 다시 정리하는거 너무 어려워서...

---

이렇게 오늘은 ES6가 무엇인지, 그리고 ES6에서 추가된 문법은 무엇이 있는지에 대해서 간략하게 정리해보았다.

해당 내용은 아직까지도 쓰는 내용들이니 꼭 복습/암기해서 나중에 개발할 때 써먹자.    

생산성이 매우 올라갈만한 문법들이 많다고 생각한다! :)    

### 참고한 사이트들

[forEach, for in, for of 특징 및 성능 비교](https://medium.com/sjk5766/foreach-for-in-for-of-%ED%8A%B9%EC%A7%95-%EB%B0%8F-%EC%84%B1%EB%8A%A5-%EB%B9%84%EA%B5%90-47a77464b034)    

[자바스크립트 for in vs for of 반복문 정리](https://jsdev.kr/t/for-in-vs-for-of/2938)    

[ES6 화살표 함수(arrow function) 변경점 요약(사용법, this등)](https://jeong-pro.tistory.com/110)    

[구조 분해 할당](https://ko.javascript.info/destructuring-assignment)    