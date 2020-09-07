---
title: '나중에 도움이 될 수 있는 Q&A'
date: 2020-5-03 16:21:13
category: 'etc'
draft: false
---
# 1. *HTML* 질문

<details>
<summary>"div", "section", "article", "nav", "header", "aside" 태그의 차이점은? </summary>
<div markdown="1">
  <br />
  W3C에서는 이 문제에 대해서 다음과 같이 설명한다.

  ```
  A semantic element clearly describes its meaning to both the browser and the developer.
  Examples of non-semantic elements: <div> and <span> - Tells nothing about its content.
  Examples of semantic elements: <form>, <table>, and <article> - Clearly defines its content.  
  ```  
  이해하기 쉽게 말하자면, **의미가 있는 태그**와 **의미가 없는 태그**를 구분하겠다는 설명이다.  
  
  HTML5 이전의 웹페이지들은 **non-semantic tag**(`div`, `span` 등)와 `id`와 `class`를 이용해서 구성을 했었다고 한다.  
  
  개발자들은 이 과정에서 큰 문제점을 알게 되었었는데, 많은 div와 span으로 구성되어있는 html 파일에서 가독성이 떨어지며 **non-semantic tag**에 어떤것이 들어가는지 예상이 안되므로 코드의 보수가 힘들다는 점이였다.  

  그래서 HTML5에서는 **semantic tag**, 즉 의미가 있는 태그들을 이용하여 코드의 가독성과 규격성을 높혀 코드의 보수를 쉽게 하도록 해주었다.
  
  이렇듯 **semantic tag**들은 의미가 있는 태그들이며, W3C는 다음과 같은 폼을 제시해주고있다.  

  ![alt](https://t1.daumcdn.net/cfile/tistory/2545B83B594764122F)

</div>
</details>

<details>
<summary>"form" 태그에 있는 "input" 태그의 값을 서버에 전송할 때, "JavaScript" 를 사용하지 않고 전송하는 방법은? </summary>
<div markdown="1">
  <br />

  ``` 
  action: Form 태그 내부에 데이터를 보내는 URL을 지정한다.
  actocomplete: Form의 자동완성을 지정한다.
  enctype: 넘기려는 content의 타입을 지정하는데 사용한다.
  method: Form을 서버로 전송하는 http의 method를 지정한다.
  name: Form을 식별하기 위한 식별자로써 사용된다.
  target: action에서 지정한 스크립트 파일이 현재나 다른 위치에서 열리도록 지정한다.
  accepted-charset: Form에 전송될 문자의 인코딩을 지정한다.
  ```

  위의 내용은 `form` 태그의 속성들이다.

  그러므로 `form`은 JavaScript으로도 서버에 정보를 보낼 수 있지만, `form` 태그의 속성인 `action`과 `method`를 이용하여 서버에 정보를 보낼 수 있다.  

</div>
</details>

<details>
<summary>"p" 태그와 "div" 태그의 차이점은?</summary>
<div markdown="1">
  <br />
  다음과 같다.  

  ```
  <p> : "문장의 단락(paragraph)"을 표시하기 위한 태그이다. <div> 태그를 포함할 수 없다.
  <div> : "구간의 구분(division)"을 표시하기 위한 태그이다. <p> 태그를 포함할 수 있다.
  ``` 

</div>
</details>

<details>
<summary>"meta" 태그의 역할은?</summary>
<div markdown="1">
  <br />


  `meta` 태그는 **웹 서버**와 **웹 브라우저**간에 **상호 교환되는 정보**를 정의하는데 사용된다.   

  HTML문서의 `head` 태그에 존재하며, 웹 사이트의 디자인에는 전혀 영향을 주지 않는다.  
  
  대신 문서를 누가 만들었고, 문서의 키워드는 무엇이며, 누가 만들었는지 등의 문서의 특성을 담고 있다.  

  이러한 `meta` 태그에는 3가지 속성이 존재하며, 그 내용은 다음과 같다.  

  ```
  1. http-equiv = "항목명"  
  웹 브라우저가 서버에 명령을 내리는 속성으로 name 속성을 대신하여 사용될 수 있으며, HTML 문서가 응답 헤더와 함께 웹 서버로부터 웹 브라우저에 전송되었을 때에만 의미를 갖습니다.  

  2. content = "정보값"
  meta 정보의 내용을 지정합니다.  

  3. name = "정보 이름"
  몇 개의 meta 정보의 이름을 정할 수 있으며 지정하지 않으면 http-equiv 와 같은 기능을 합니다. 
  ```
  다음과 같은 속성을 이용하여 웹 페이지의 제목, 제작일, 언어, 브라우저 호환성 등 여러 가지를 다룰 수 있다.

  자세한 내용은 [다음](https://webclub.tistory.com/354 "메타태그 설명")을 참고하면 될 것 같다.

</div>
</details>

<details>
<summary>"script" 태그를 "head" 태그에 넣는 것과 "body" 태그에 넣는 것의 차이는?</summary>
<div markdown="1">
  <br />


  `script`태그는 보통 JavaScript파일을 `import`하기 위하여 사용되는 태그이며, 이렇게 `import`된 파일들은 순서에 따라 실행된다.  

  `script`태그는 `head`와 `body`태그의 사이 또는 `body`의 마지막 부분에 넣을 수 있다. 
  
  위의 두 방법은 큰 차이가 존재하는데, 이유는 **브라우저의 렌더링 방식**에 존재한다. 브라우저의 렌더링 방식은 다음과 같다.
  
  ```
  1. HTML을 읽기 시작한다.
  2. HTML을 파싱한다 (parsing: 컴퓨터가 읽을 수 있는 코드로 바꾸는 작업)
  3. DOM 트리 생성.
  4. Render 트리가 생성 (DOM tree + CSS의 CSSOM 트리 결합)
  5. Display(브라우저)에 표시된다.
  ```

  이 과정에서 우리는 **1번, 2번 과정**을 주의해야만 한다. 

  1번과 2번 과정에서 브라우저는 HTML 요소를 차례대로 읽어가면서 파싱하는데, 이 과정에서 `script`태그를 만나게 된다면 파싱을 중단한다.

  그러고 나서 바로 script 태그의 소스 파일을 찾아 JavaScript 코드를 모두 실행하고 다시 파싱을 진행하게 된다.

  이러는 과정에서 생기는 문제점은 다음과 같다.

  ```
  1. JavaScript Code의 실행으로 인한, Rendering Delay
  2. Rendering Delay로 인한 DOM 조작 불가능 상황에서의 DOM 조작 코드 실행
  ```

  특히 우리는 **2번 상황**에 대해 고민을 해야 할 필요가 있는데, DOM이 트리가 생성되기 전에 DOM에 접근하려고 하면 `undefined`값이 리턴되므로 모든 코드가 실행이 안 될 것이다.

  위와 같은 이유로 우리는 일반적으로, script 태그를 `head`태그보다는 `body`태그의 최하단 부분에 위치시키는 일이 많다.

  한편, 위와 같은 방법을 사용하지 않고서도 해결하는 방법들이 존재한다. 바로 `script`태그의 `async`속성과 `defer`속성을 사용하는 방법이다.

  **이를 사용한다면 HTML 파싱과 script의 로드가 동시에 실행된다!**

  ```
  e.g)  <script async src="index.js"></script>
        <script defer src="index.js"></script>
  ```

  `async`의 경우에는 HTML의 파싱이 모두 끝나지 않더라도, `script`의 로드가 완료되는 즉시 실행시킨다. 
  `defer`의 경우에는 HTML의 파싱이 모두 끝난 후에 `script`의 실행이 이루어지게 한다. 

  추가로 `async`의 경우에는, 비동기적으로 여러 스크립트를 실행되므로 일관된 실행 순서를 보장시켜주지 못한다. 동기적으로 실행시키기를 원한다면 `async=false`를 사용하여 실행시키면 된다. 

  또한 `async`는 HTML 파싱과 동시에 스크립트 로드를 하지만 스크립트 실행은 HTML 파싱이 중지된 상태에서 되기 때문에 중간에 HTML 파싱이 멈추는 시점이 생길 수 있다. 다만 실행 순서를 감안해야 한다.

  그리고 `defer`는 HTML 파싱과 동시에 스크립트를 불러오고 HTML 파싱이 완료 된 후 스크립트가 실행된다. 위에서 설명한 `script` 태그가 `body` 태그의 최하단에 위치해야 하는 이유에 모두 적합하다.

</div>
</details>

# 2. *JavaScript* 질문

<details>
<summary> "===" 와 "==" 의 차이는?</summary>
<div markdown="1">
  <br />



  `===`과 `==`는 같은 목적을 추구하지만, 다른 기능을 지원한다.

  `==`는 좌항과 우항의 **값**만을 비교한다. 만약 `1 == "1"`과 같은 표현이 있다 하면, 그 값은 `true`이다. 왜냐하면, 좌항과 우항의 **값**이 모두 "1"이기 때문이다. 타입은 상관하지 않는다.

  `===`는 좌항과 우항의 **값**뿐만 아니라, **타입**도 비교한다. 만약 `1 == "1"`과 같은 표현이 있다 하면, 그 값은 `false`이다. 왜냐하면, 좌항과 우항의 **값**은 모두 "1"이지만, 좌항의 타입은 `Number`이고, 우항의 타입은 `String`이기 때문이다.

  그렇다면 `null == undefined`와 `null === undefined`는 어떨까?

  `null`과 `undefined`는 같이 값이 없음을 내포하지만 `null`은 **값이 없음을 명시적으로 표현한 형태**이고 `undefined`는 **값이 없음을 암시적으로 표현한 형태**이다.

  그래서 `null == undefined`는 `true`이고 `null === undefined`는 `false`를 반환하게 된다.

  **그러므로 더 엄격한 비교가 필요하다면 `===`, 값만 비교한다면 `==`를 사용하자.**
</div>
</details>

<details>
<summary> "typeof"와 "instanceof"의 차이점은?</summary>
<div markdown="1">
  <br />

  
  `typeof`와 `instanceof`도 2.1의 문제처럼 같은 목적을 추구하지만, 다른 기능을 지원한다.

  우선 `typeof`는 **unary operator**이며, 리턴 값은 각 변수의 **primitive type**을 `String` 타입을 가진 값으로 준다.

  ```
  e.g)  
    typeof 3; // === 'number' 
    typeof 'str'; // === 'string' 
    typeof {}; // === 'object' 
    typeof []; // === 'object' 
    typeof function () {}; // === 'function' 
    typeof null; // === 'object'
  ```

  `instanceof`는 **binary operator**이며, 리턴 밸류는 각 변수의 **prototype의 chain**을 비교한 뒤 `Boolean`으로 준다.  
  
  ```
  e.g) 
    "foo" instanceof String; // === false 
    "foo" instanceof Object; // === false
    
    true instanceof Boolean; // === false 
    true instanceof Object; // === false

    [0,1] instanceof Array; // === true 
    {0:1} instanceof Object; // === true

    var color1 = new String("red"); 
    var color2 = "red"; 

    color1 == color2; // === true 
    color1 instanceof String; // === true 
    color2 instanceof String; // === 무엇일까요?
  ```

  위의 내용을 보고 점검을 해보자. 마지막의 답은 무엇일까? 답은 바로 `false`이다. 만약 답을 맞히지 못했다면 [다음](https://poiemaweb.com/js-prototype "프로토타입에 관한 설명")을 읽고 다시 보자.  

  이와 관련된 내용인, 프로토타입에 관한 내용은 [JavaScript 포스트](# "프로토타입 정리 포스트")를 따로 만들어서 다뤄볼 예정이다.

  [예시 출처](https://unikys.tistory.com/260 "포스트 예제 링크")
</div>
</details> 

<details>
<summary> "JavaScript"에서 "객체를 정의"하는 방법은?</summary>
<div markdown="1">
  <br />


  ### 1. 객체 리터럴  

  별 다른 문법 없이 중괄호만을 사용하여 선언하는 방식을 객체 리터럴이라고 말한다.

  ```
    var object = {
      name: "Yunhoe",
      age: 23,
      gender: "male"
    }
  ```

  ### 2. Object 생성자 함수  

  Object의 생성자 함수인, new Object()를 사용해서 선언하는 방식이다. `new Object()`로 선언한 객체는 초기에 비어있다.

  ```
    var object = new Object(); // Empty object

    object.name = "Yunhoe";
    object.age = 23;
    object.gender = "male";
  ```

  ### 3. 생성자 함수  

  Java나 C++의 `class`와 매우 비슷한 형식이다. 말 그대로 생성자 함수를 사용하여 객체를 선언하는 방식이다.

  ```
    function person(name, age, gender){
      this.name = name;
      this.age = age;
      this.gender = gender;
    }

    var object = new person("Yunhoe", 23, "male")
  ```

  ### 4. Class 함수

  ES6부터 추가 된 문법으로, 우리가 흔히들 알고있는 `class`의 사용을 편하게 하고자 만든 문법이다.  
  
  그렇다고 이 `class`는 javascript의 기존 모델인 `프로토타입 기반 객체지향 모델`을 폐기한게 아니다.   

  **기존 프로토타입 기반 패턴의 [Syntatic Sugar](https://en.wikipedia.org/wiki/Syntactic_sugar)임을 알아야 한다**.

  ```
    class person {
      constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
      }
    }

    var object = new person("Yunhoe", 23, "male");
  ```
</div>
</details>

<details>
<summary>HTTP 전송 방식("Method")의 종류는?</summary>
<div markdown="1">

  ## 1. GET
  
  ```
  가장 흔하게 사용되는 method로써, 서버에 존재하는 resource를 request하는데 사용된다.  

  서버는 response로 body에 resource의 content를 실어서 보낸다.
  ```

  ## 2. HEAD
  
  ```
  GET method와 비슷하게 서버에 resource를 request하지만, response로 header만 받는다.  

  HEAD를 사용하면 resource를 request하지 않아도 object의 존재를 확인할 수 있고 수정이 되었는지도 확인 할 수 있다. 

  개인적으로 GET의 find 버전이라고 생각한다.
  ```

  ## 3. PUT

  ```
  GET method의 정반대로 서버에 문서를 쓸 때 사용한다.   

  PUT method는 서버가 client의 request body를 확인하고, 만약 서버에 해당 request에 관련된 URL이 존재한다면 replace하고 그렇지 않으면 create한다.  

  해당 method는 URL을 직접 수정하므로, 웹 사이트를 변조할 수 있으므로 사용자 인증 과정을 거쳐야만 할 것이다.
  ```

  ## 4. POST

  ```
  PUT method와 비슷하게 서버에 resource data를 HTML폼을 이용하여 전송할 때 사용한다.  

  그러나 PUT method와 다른 점이 있는데, 바로 멱등성(idempotency)의 차이이다.  

  동일한 요청을 한 번 보내는 것과 여러 번 연속으로 보내는 것이 같은 효과를 지니고, 서버의 상태도 동일하게 남을 때, 해당 HTTP 메서드가 멱등성을 가졌다고 말한다. 

  결론적으로 둘의 차이라는것은, PUT method는 멱등성을 가졌지만 POST method는 멱등성을 가지고 있지 않다는 것이다.  

  해당 내용은 추후에 다른 포스트를 통하여 자세히 다루어 볼 예정이다.
  ```

  ## 5. TRACE

  ```
  Client의 request는 firewall, proxy server, gateway 등을 거치면서 수정될 수 있는 여지가 존재한다.  

  TRACE method는 위의 단계들을 거치고 나서 최종 목적지(서버)에 도착했을 때의 request는 어떻게 생겼을지를 보여주는 method이다.
  ```

  ## 6. OPTIONS

  ```
  OPTIONS method는 서버가 어떠한 method들을 지원해주는지 확인하는 method이다.
  ```

  ## 7. DELETE

  ```
  DELETE method는 request에 기재된 URL에 해당되는 resource를 삭제할 수 있도록 하는 method이다.  

  주의해야할 점은, HTTP 명세에서 서버가 클라이언트에게 DELETE request를 무시할 수 있으므로 100% 삭제가 됨을 보장하지 못한다는 점이다.
  ```
</div>
</details>

<details>
<summary>"Promise", "Callback" 패턴은 각각 무엇이며, 차이점은?</summary>
<div markdown="1">
  <br />

  둘 다 JavaScript의 특성 때문에 생기는 문제인 **비동기적 처리**를 위한 패턴이다.

  예시를 하나 들어보자. 만약 당신이 웹 사이트를 운영하고, 그 사이트에서 다양한 기능들을 구현해놨는데 그것들이 비동기적으로 처리되지 않는다고 가정해보자.

  그렇게 되면 정말 끔찍하게 될 것이다. 당신의 웹 사이트의 이용자들은, 단순히 좋아요를 누름에도 그것을 처리하기 위한 시간 동안 다른 게시글들을 보지 못하게 될 거다.

  그리고 하나 더 예시를 들어보자. 만약 당신의 웹 사이트가 요청과 응답이 모두 비동기적으로 작동한다고 말이다. 어떤 상황이 일어날까?

  당신의 웹 사이트 이용자들은 비동기적인 요청에 만족할 것이다. 댓글을 달고 동시에 좋아요도 누를 수 있고. 그러나 한 가지 문제점이 있다. 당신의 코드에 말이다.

  일반적으로 사람들은 동기적으로 코드를 짜기 마련이다. 순차적인 흐름이 있다는 것이다. 로그인으로 예를 들어보면, 로그인 창이 나오고 그 이후에 입력하고 그 이후에 제출하고 그 이후에 인증하고 등등..

  그런데 만약 비동기적으로 응답이 도착한다면 어떻게 될까? 당신의 코드는 순차적 실행을 보장하지 못하기 때문에 코드를 읽기에도, 유지 및 보수하는게 힘들 것이다.

  이를 해결하기 위하여 존재하는 것들이 **Callback**과 **Promise**이다.
  
  <details>
  <summary>Callback Pattern</summary>
  <div markdown="1">
  <br />
  아래의 코드를 보고 한 번 결과를 생각해보자.

  ```
  function getData() {
    var data;

    axios.get('https://idonknowurl.com/posts/1', function(response) {
    data = response;
    });

    return data;
  }

  console.log(getData()); // undefined
  ```

  C, C++, java 그리고 python과 같은 언어에서는 이해가 가기 어려운 결과이다. 왜 undefined가 나올까? 이유는 위에서도 말했지만, JavaScript가 **비동기적**으로 작동하기 때문이다.  

  즉, JavaScript는 axios.get의 실행 결과를 기다리지 않고 바로 실행한다는 것이다. 그렇기 때문에, 우리는 **비동기적 처리**에 대해서 생각을 해야만 했고, 그것의 해결방안이 callback pattern인 것이다.

  여기서 Callback pattern은 말 그대로 callback 함수를 사용하는 패턴이다. 그렇다면 Callback 함수는 무엇일까?
  
  말 그대로 "callback", 나중에 특정 event나 point에서 부르겠다는 함수이다. 우리는 이 함수패턴을 이용해서 위와 같은 문제를 다음과 같게 해결할 수 있다.

  ```
  function getData(callback) {
    axios.get('https://idonknowurl.com/posts/1', 
      function(response) {
        callback(response)
      });
  }

  getData(function(Data) {
    console.log(Data)
  });
  ```

  이렇게 콜백 함수를 사용하면 특정 로직이 끝났을 때 원하는 동작을 실행시킬 수 있다.

  그런데, 이렇게 좋은 Callback을 남발하게 된다면 "Callback Hell"이라는 문제가 일어나게 된다.

  비동기 처리를 위해서 콜백 뒤에 콜백, 그리고 콜백.. 이런 방법으로 코드를 짜다 보면 아래와 같은 기괴한 구조의 코드를 볼 수 있게 된다. 이를 우리는 "Callback Hell"이라고 부른다.  

  Callback Hell이 문제인 이유는 가독성의 하락, 로직 변경의 어려움, 코드 실행 순서 파악의 어려움, 그리고 코드의 유지 및 보수가 힘들기 때문이다.

  ![Callback_Hell](http://cfile7.uf.tistory.com/image/9951A34F5B5ADFC3019F6A)
  > Callback Hell의 무서움을 잘 표현해주는 사진
  </div>
  </details>

  <details>
  <summary>Promise Pattern</summary>
  <div markdown="1">
  <br />


  그렇다면 저런 문제가 생기는 callback 패턴을 울며 겨자먹기로 사용해야 할까? 다행히도 **Promise**라는 대안이 존재한다. 그렇다면 **Promise**는 무엇일까? 

  [다음](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261 "프로미스 설명")의 사이트에서는 Promise를 아래와 같이 설명한다.  

  > *A promise is an object that may produce a single value some time in the future*  
  
  쉽게 말하자면, Promise는 비동기 처리를 위한 객체이다. 비동기 처리한 결과값의 저장소로써, 이후의 과정과 연결하기 위한 일종의 징검다리 역할을 해준다.  

  Promise는 callback과 동일하게 비동기 처리를 위한 로직이지만, callback과 다른점이 있다. 바로 **상태**가 있다는 점이다. 한 번 알아보자.

  Promise는 다음과 같은 3가지 상태가 존재한다.

  * 대기(pending) : 이행되거나 거부되지 않은, 초기의 상태 
  * 이행(fulfilled) : 연산이 성공적으로 완료됨  
  * 거부(rejected) : 연산이 실패함  

  ![Promise_map](https://media.prod.mdn.mozit.cloud/attachments/2014/09/18/8633/51a934a714e191f53e588bff719bc321/promises.png)
  
  이 상태를 Promise의 분기점으로 삼아, 비동기적 처리를 좀 더 효율적으로 진행할 수 있다. 위에서 아래로 가는 일반적인 코드 순서를 보장할 수 있으며, 가독성이 올라가므로 코드의 유지 및 보수가 쉽게 되기 때문이다.

  결과적으로 callback에서 나온 코드를 다음과 같이 변경할 수 있게 된다.

  ```
  function getData() {
    return new Promise(function(resolve, reject) {
      axios.get('https://idonknowurl.com/posts/1', function(response) {
        if (response) {
          resolve(response);
        }
        reject(new Error("Request is failed"));
      });
    });
  }

  getData()
  .then(function(data) {
    console.log(data); // response 값 출력
  })
  .catch(function(err) {
    console.error(err); // Error 출력
  });
  ```
  </div>
  </details>

</div>
</details>

<details>
<summary>"async", "await"과 "Promise"의 차이점은?</summary>
<div markdown="1">
  <br />

  위의 문제와 비슷한 느낌처럼, Callback과 Promise와 Async&await 모두 JavaSscript의 비동기 처리를 위해서 사용되는 기법들이다.  

  하지만 Callback과 Promise가 차이가 있듯이, Promise와 Async&Await도 차이가 존재하기 마련이다. 그 차이의 정보는 [다음](https://medium.com/@constell99/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-async-await-%EA%B0%80-promises%EB%A5%BC-%EC%82%AC%EB%9D%BC%EC%A7%80%EA%B2%8C-%EB%A7%8C%EB%93%A4-%EC%88%98-%EC%9E%88%EB%8A%94-6%EA%B0%80%EC%A7%80-%EC%9D%B4%EC%9C%A0-c5fe0add656c "Promise_and_async&await_차이")의 사이트를 참고하였다.  

  ### 1. 간결함과 깔끔함

  우리는 Promise를 사용하여 비동기 로직을 처리할 때 then()과 catch(), resolve()와 reject()를 사용하여 구성을 하였다. Callback hell을 피하기 위한 장치이기도 하였고, 실제로 보기에 깔끔하다. 

  그러나 async&await을 사용하면, promise보다 더 깔끔한 코드를 생성할 수 있다. 우리는 단지 비동기 로직을 처리하기 위한 함수의 앞에 async를 붙히고, 내부의 비동기 처리 부분에 await을 붙히기만 하면 된다. 

  심지어 return의 형식도 promise로 반환되어 나오기 때문에, 이전에 promise를 사용하는 사람들이 손쉽게 사용할 수 있도록 구상되었다. 



  ### 2. 에러 핸들링

  Promise 내부에서 에서 나오는 error를 처리하기 위해서는, `try/catch` 구문을 사용할 수 없다. 왜냐하면 그 error는 **Promise** 내부에서 나온 error이기 때문이다.  
  
  만약 당신이 그러한 error를 잡고싶다면, 그 error 처리문은 promise 내부에 들어가 있어야만 한다. 

  그러나 만약 async&await을 사용하게 된다면, 걱정할 필요가 없다. 해당 구문은, `try/catch`구문으로 error를 검출할 수 있기 떄문이다! 



  ### 3. Nested code 해결

  Promise의 결과값을 받고, 그 결과물을 받아서 또 Promise를 반환하고 그 결과물을 받아서 또 Promise를 반환하는 코드가 있다고 생각하자.  

  예시는 아래와 같다. 

  ```
  const makeRequest = () => {
    return promise1()
      .then(value1 => {
        return promise2(value1)
          .then(value2 => {
            return promise3(value1, value2)
          })
      })
  }
  ```

  이러한 Nested된 promise는 꼬리에 꼬리를 무는, 마치 Callback hell과도 비슷한 경험을 선사해준다.  

  만약 이런 상황을 async&await으로 해결한다면? 꽤나 간단하게 줄여진다. 예시는 다음과 같다.  

  ```
  const makeRequest = async () => {
    const value1 = await promise1()
    const value2 = await promise2(value1)
    return promise3(value1, value2)
  }
  ```
</div>
</details>

<details>
<summary>"Event Bubbling"과 "Capture"란? (미완)</summary>
<div markdown="1">
  <br />  

  해당 문서는 [다음](https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/ "이벤트에 대한 설명")을 침고하였다.

  JavaScript에는 이벤트를 감지하는 방식이 2가지가 존재하는데, 그 2가지가 바로 Event Bubbling/Event Capture이다. 

  Event Bulbbing: 특정화면 요소에서 이벤트가 발생했을 때, 해당 요소의 이벤트가 해당 요소의 상위 요소로 전파되는 특성

  이벤트 캡쳐: 이벤트 버블링의 정 반대의 방식. 상위 요소에서 하위 요소로 퍼져나감을 의미함. 

  +) event.stopPropagation(), Event Delegation

  > 이와 같은 하위에서 상위 요소로의 이벤트 전파 방식을 이벤트 버블링(Event Bubbling)이라고 합니다.

</div>
</details>

# 3. *Vue.js* 질문

<details>
<summary>"Mixin"이란?</summary>
<div markdown="1">
  <br />

  Vue에서는 재사용이 가능한 부분들을 자주 언급한다. Mixin도 **재사용**에 초점을 맞춘 기능 중 하나이다.

  Mixin은 반복적으로 사용되는 컴포넌트의 옵션들을 위한 기능인데, 컴포넌트에 mixin으로 선언한 변수들을 주입하게 된다면 해당 컴포넌트는 mixin의 옵션을 그대로 가져간다. 말 그대로 "mix-in", **섞여 들어간다**는 것이다.

  ```
  var myMixin = {
    created: function () {
      this.hello()
    },
    methods: {
      hello: function () {
        console.log('hello from mixin!')
      }
    }
  }

  var Component = Vue.extend({
    mixins: [myMixin]
  })

  var component = new Component() // => "hello from mixin!"
  ```

  Vue 객체를 extend한 component에 mixin값으로 myMixin을 할당해주니 myMixin의 특성을 가져가게 되었다. **Mix-in**된 것이다!
</div>
</details>

<details>
<summary>"EventBus"란?</summary>
<div markdown="1">
  <br />


  Vue의 eventbus는 다음과 같은 상황에서 사용한다.

  > Vue의 부모와 자식(Parent and child)는 데이터를 props와 event의 형식으로 주고 받는다. 그런데 만약 내가 부모에게서 변수를 자식의 자식의 자식의 자식의 자식의 자식에게 주려면..?? 이 모든것을 props로 연결시켜서 전달해주는 방법이 정말 합리적일까?  

  이러한 상황에서 좀 더 자유롭게 컴포넌트끼리 통신을 할 수 있게 만드는 방법이 바로 **eventbus**이다. 어떻게 쓰는지는 다음 방법을 보자.  

  (componentA.vue)
  ```
  Vue.prototype.EventBus = new Vue();

  export default {
    name: 'componentA',
    methods: {
      showMsg: function() {
        this.EventBus.$emit('alertMessage', 'Hello');
      });
    }
  }  
  ```

  (componentB.vue)

  ```
  Vue.prototype.EventBus = new Vue();
  export default {
    name: 'componentB',
    mounted: function() {
      this.EventBus.$on('alertMessage', function(payload) {
        console.log(payload)
      });
    }
  }
  ```
  
  해당 예제는 [다음](https://webisfree.com/2018-12-03/[vuejs]-eventbus%EB%A5%BC-%EC%82%AC%EC%9A%A9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A3%BC%EA%B3%A0%EB%B0%9B%EB%8A%94-%ED%86%B5%EC%8B%A0-%EB%B0%A9%EB%B2%95 "eventbus 설명")에서 가져왔으며 설명은 다음과 같다.  

  공통으로 사용되는 Vue.prototype.EventBus 객체를 이용하여, "componentA"에서는 event를 emit하고 "componentB"에서는 event를 listen하여 "componentA"에서 전달받은 변수인 'Hello'를 payload로 받아 출력한다. 

  이렇듯 eventbus는 component간의 자유로운 통신을 허락해주도록 하지만, 전역 범위로 사용이 가능하기 때문이 **데이터 충돌**에 주의해서 사용해야만 하는 단점이 있다. 
</div>
</details>

<details>
<summary>"Component LifeCycle" 이란?</summary>
<div markdown="1">
  <br />

  
  Vue에서는 component뿐만 아니라 instance들도 **Lifecycle**을 가지고 있다.  

  Vue의 Lifecycle이 무엇이냐면, 말 그대로 component나 instance들의 **생명주기**이다. 생성될 때부터 파괴되는 시점까지의 과정들을 거치는 것을 설명하는 개념이다.  

  크게 created, mounted, updated, destroyed의 4가지 구성으로 볼 수 있으며 이 주기들을 이름으로 갖는 함수를 이용해서 특정 lifecycle에 특정 method들을 부를 수 있게 허용해준다.

  자세한 그림은 Vue 공식사이트에서 제공해주는 다음 사진으로 대체한다.

  ![vue_component_life_cycle](https://kr.vuejs.org/images/lifecycle.png)
</div>
</details>

<details>
<summary>"Vue" vs "React", "Angular" (미완)</summary>
<div markdown="1">
  <br />

  
  자세한 내용은 이 [사이트](https://medium.com/sjk5766/angular-vs-react-vs-vue-72046f6748b8 "Vue_vs_React_vs_Angular")로 대체하겠다.. 잘 모르는 내용이다..  
</div>
</details>

<details>
<summary>"Vuex"란? 써야하는 이유는?</summary>
<div markdown="1">
  <br />


  Vuex란 **상태관리** 관련 라이브러리이다. 우선, vuex를 이해하기 위해서는 **상태관리**에 대해서 먼저 알 필요가 있다.  

  [다음](https://joshua1988.github.io/web-development/vuejs/vuex-start/ "Vuex설명")의 사이트에서는 상태관리를 이렇게 설명한다.  

  > 상태 관리란 여러 컴포넌트 간의 데이터 전달과 이벤트 통신을 한곳에서 관리하는 패턴을 의미합니다. 뷰와 성격이 비슷한 프레임워크인 리액트(React)에서는 Redux, Mobx와 같은 상태 관리 라이브러리를 사용하고 있고 뷰에서는 Vuex라는 상태 관리 라이브러리를 사용합니다.  

  그렇다면, 상태관리로 해결할 수 있는 일이 무엇이길래 라이브러리까지 만들었을까? 위의 사이트에선, 다음과 같이 설명한다.

  > 상태 관리는 중대형 규모의 웹 애플리케이션에서 컴포넌트 간에 데이터를 더 효율적으로 전달할 수 있습니다. 일반적으로 앱의 규모가 커지면서 생기는 문제점들은 다음과 같습니다.  
  > > 뷰의 컴포넌트 통신 방식인 props, event emit 때문에 중간에 거쳐할 컴포넌트가 많아지거나, 이를 피하기 위해 Event Bus를 사용하여 컴포넌트 간 데이터 흐름을 파악하기 어려운 것
  
  이러한 문제점을 해결하기 위해 모든 데이터 통신을 한 곳에서 중앙 집중식으로 관리하는 것이 **상태 관리**라고한다.

  결론적으로 이런 상태관리를 편하게, 그리고 효율적으로 한다는 점에서 Vuex를 쓰게 된다는 것이다.
</div>
</details>

# 4. *CSS* 질문

<details>
<summary>CSS "position" 속성에서 "relative" 와 "absolute" 의 차이점은?</summary>
<div markdown="1">
  <br />


  `position`속성은 CSS에서 레이아웃을 배치할때 사용하는 속성이다.

  `position`속성은 `top`, `right`, `bottom` 그리고 `left`의 값으로 위치를 조정할 수 있으며, 상속되는 값이 아니다.

  `position`속성에는 4가지의 속성이 존재하는데 `static`, `relative`, `absolute` 그리고 `fixed` 속성이 존재한다.

  ```
    1. static: "default"속성이며, 별다른 위치를 지정하지 않을때 사용한다.

    2. relative: 위치계산을 할 때, 객체가 "static"일때의 위치를 기준으로 상하좌우 이동시킬 수 있다.

    3. absolute: 위치계산을 할 때, 객체의 상위요소(static 속성을 갖고있는 객체는 제외)를 기준으로 상하좌우로 이동할 수 있다. 객체의 상위요소가 없다면, 기준은 html 요소를 기준으로 잡는다.

    4. fixed: 현재 브라우저의 화면에 대한 위치를 가지며, 화면이 이동함에 따라 변하는 위치가 아닌 고정된 위치값을 가진다.
  ```

  비슷한 속성으로는 [`float`](https://webclub.tistory.com/617 "Explain of float property")가 존재하는데, 비슷한 목적을 가지고 있지만 사용법이 다르니 모두 알고 넘어가자.
</div>
</details>

<details>
<summary>"display" 속성에서 "inline", "inline-block", "block" 의 차이점은?</summary>
<div markdown="1">
  <br />


  `block`속성은 일반적인 **`div`** 태그의 속성과 비슷하다. `block`속성을 가진 객체는 `height`만큼의 한 줄을 차지하게 되고, 다음 태그는 다음 줄로 넘어간다.

  `inline`속성은 일반적인 **`span`** 태그의 속성과 비슷하다. `inline`속성을 가진 객체는 text 만큼의 크기를 점유하며, `width`, `height`, `margin` 그리고 `line-height`등의 속성을 사용할 수 없다.

  `inline-block`속성은 위의 두 가지 속성인, **`block`**과 **`inline`**속성을 두 가지 혼합한 속성이라고 생각하면 편하다. `inline` 속성과 비슷하게 한 줄이지만 `block` 형태를 유지하고 있고 `width`, `height` 그리고 `line-height` 등 `inline` 속성에서 컨트롤 할 수 없었던 속성들을 컨트롤 할 수 있게 된다.

</div>
</details>

<details>
<summary>"transform" 속성에서 "translate" 로 엘리먼트의 위치를 변경하는 것과 "left", "right", "bottom", "top" 으로 위치를 변경하는 것의 차이점은?</summary>
<div markdown="1">
  <br />

  
  관련 지식을 찾다가 [다음](https://bbatta38.github.io/css/2016/04/29/css3-transition-transform-%EB%B9%84%EA%B5%90/, "관련지식설명")과 같은 사이트에서 이러한 문장을 보았다.  

  ```
  퍼포먼스의 차이는 크롬 개발자 도구를 사용하여 쉽게 알아볼 수 있었다.
  
  먼저 left를 이용하여 모션을 구현했을 때의 Timeline 모습이다.

  총 5.4초의 시간동안 모션이 이루어졌고 Rendering 시간은 247.9 ms, Painting 시간은 292.6 ms 걸렸다.

  두번째 transform:translate를 이용하여 모션을 구현했을 때의 Timeline 모습이다.

  총 5.6초의 시간동안 모션이 이루어졌고 Rendering 시간은 18.6 ms, Painting 시간은 5.1 ms 걸렸다.
  ```

  숫자만 대충 봐도 비슷한 시간에 한 쪽은, rendering과 painting에 소요하는 시간이 상당하지만 다른 하나는 그렇지 않다.  

  왜 이러한 차이를 보여줄까? 우리는 이를 알기 위해서 **브라우저의 동작원리**에 대해서 알 필요가 있다. 

  브라우저의 동작원리는 브라우저마다 차이가 있지만, 대강 다음과 같다.

  ```
  1. 불러오기 : 리소스 파일 로딩
  2. 파싱 : DOM 트리를 생성 
  3. 렌더링 트리 생성 : 화면에 DOM을 표시하기 위해서는, 위치 및 크기 정보같은 정보를 저장하기 위한 별도의 트리(렌더링 트리)가 필요한데, 이 트리를 생성
  4. CSS 스타일 결정 : 특정 태그에 어떠한 스타일이 적용됨을 확인
  5. 레이아웃 : 각 객체가 위치와 크기값을 가지게 되는 과정
  6. 페인팅 : 렌더링 트리를 탐색하며 특정 메모리 공간에 RGB값을 주입
  ```

  `left`는 이 과정 속에서 element가 이동하는 동안에 렌더링 트리를 재생성하고, CSS 스타일을 재결정하고, 레이아웃을 재설정하며 그리고 페인팅을 다시하게 된다. 

  반면 `translate`는 element가 이동하는 동안에 위와 같은 과정이 덜 일어나는것을 볼 수가 있다.

  결론적으로 **performance** 측면에서 **`translate`**을 통한 이동이 **`left`**을 통한 이동보다 **optimal**하다는 점이 차이점이다.

  관련된 내용은 [다음](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/ "설명")에서도 볼 수 있다.
</div>
</details>

# 5. *웹 개발* 질문

<details>
<summary>CORS란? 그리고 CORS를 해결할 수 있는 방법은?</summary>
<div markdown="1">
  <br />  
  CORS는 Cross-Origin Resource Sharing의 약자로, **포트 또는 도메인**이 다른 서버에 리소스를 요청할 수 있게하는 구조를 의미한다.  

  기본적으로 HTTP 요청은 `<img>`, `<link>` 그리고 `<script>` 태그를 이용하여 다른 서버의 리소스를 요청하는 방법은 허용된다.

  그러나 `<script></script>`의 태그 내부부분에서 외부 서버로 요청되는 CORS는 **Same Origin Policy**라는 보안상의 이유로 요청을 금지한다. 

  다음은 예시([출처](https://velog.io/@jmkim87/%EC%A7%80%EA%B8%8B%EC%A7%80%EA%B8%8B%ED%95%9C-CORS-%ED%8C%8C%ED%97%A4%EC%B3%90%EB%B3%B4%EC%9E%90 "CORS 설명"))이다.  

  ```
  e.g) 사이트 도메인이 www.a.com 일 경우...  

      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
          if (xhr.readyState === xhr.DONE) {
              if (xhr.status === 200 || xhr.status === 201) {
                  console.log(xhr.responseText);
              } else {
                  console.error(xhr.responseText);
              }
          }
      };
      xhr('get', 'https://www.b.com/api/v1/user/13');
      xhr.send();
  ```
  
  위의에서 우리는 사이트 도메인이 **www.a.com**인 곳에서, 도메인이 **www.b.com**인 곳으로 HTTP 요청함을 볼 수 있다.  

  이렇게 요청을 한다면, 프로토콜(http/https), 포트넘버, 도메인이 다른 서버로 HTTP 요청을 했으므로 CORS 관련 에러가 나오게 된다.  
  
  이러한 CORS 관련 에러는 다음과 같이 여러 해결 방법들이 존재한다.  

  ### 1. 동일한 도메인과 포트넘버 사용하기

  ~~이론상 가장 간단한 방법이다..!!~~

  실생활에서 서버와 클라이언트의 도메인과 포트가 동일할 경우가 없을테니 패스..  

  ### 2. 웹 브라우저단에서 해결하기

  디버깅 목적으로 웹 브라우저에서 CORS를 해결하는 방법이 있다.  

  어디까지나 클라이언트의 "웹 브라우저"에서 해결하는 방법이기 때문에, 실제로 운영되는 서비스나 그런곳에서 사용되기는 어렵다. 개인이 설정을 해줘야하는 작업이기 때문에, 근본적인 해결방법이 될 수 없다. 

  ```
  1. 웹 브라우저의 커맨드를 통한 CORS 해결
  2. 웹 브라우저의 플러그인을 통한 CORS 해결
  3. JSONP방식을 통한 CORS 해결
  ```

  해결방법에 대한 [자세한 내용](https://enterkey.tistory.com/409 "CORS 해결방법 설명")은 다음을 참고하면 좋겠다.

  ### 3. Access-Control-Allow-Origin response header 추가

  ```
  app.get('/data', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(data);
  })
  ```
  다음과 같이 REST api의 header부분에 **Access-Contorl-Allow-Origin** 부분을 모든 클라이언트의 요청에 대해 추가해주면 된다. 
  
  단점이 있다면, 모든 REST api에 header를 넣어야 한다는 단점이 있다.  
</div>
</details>

<details>
<summary>RESTful이란?</summary>
<div markdown="1">
  <br />


  RESTful이라는 의미는 **REpresentational State Transfer**의 약자인 REST라는 소프트웨어 프로그램 개발의 아키텍처의 비공식적 가이드(형용사형이므로)라고 생각하면 된다.

  이렇게 이해할려면 어려우므로, RESTful을 이해하려면 그것의 근간이 되는 REST에 대해서 알아야만 한다.

  학부시절에 REST아키텍쳐를 말로만 들어봐서 의미를 잘 몰라 한국어로 번역해봤는데, **대표적인 상태 전달**이라고 한다. 누가 이렇게 이해할까..??
  
  의미를 찾아보던 중, [다음과 같은 블로그](https://www.a-mean-blog.com/ko/blog/%ED%86%A0%EB%A7%89%EA%B8%80/_/REST%EC%99%80-RESTful-API "REST에 대한 설명")에서는 REST에 대해서 이렇게 설명했다.

  > ... 저는 개인적으로 이 단어를 변형해서 "**자원(resource)**의 **대표(representation)**에 의한 상태 전달" 이라고 설명하려 합니다 ...

  그렇다면 **자원**이라는 것은 무엇일까? 해당 블로그에서 설명하는 **자원**이라는 정의는 다음과 같다.

  > 여기서 '자원'이란 뜻은 넓은 의미로 해당 소프트웨어가 관리하는 모든 것이 될 수 있습니다. 문서가 될 수도 있고 그림이 될 수도 있고 데이터가 될 수도 있고 심지어 해당 소프트웨어 자체가 될 수도 있습니다. 예를 들어 DB에 학생 명부가 저장되어 있다고 한다면 이 학생들의 정보가 자원이 됩니다. 그리고 '자원의 대표'의 의미는 그 자원을 대표하기 위한 이름을 뜻합니다. 학생데이터를 대표하기 위한 이름은 무엇이 좋을까요? 물론 학생(students:복수형을 사용합니다)입니다. 학생 전체 명부가 아니라 명부상의 한 학생에 대한 자원을 얻고자 한다면 대표이름과 한 학생을 특정할 수 있는 값(id 등)이 사용됩니다.

  그렇다면 **상태전달**이란 의미는 무엇일까? 해당 블로그에서 설명하는 **상태전달**은 다음과 같다.

  > 데이터가 요청되어지는 시점에서 자원의 상태(정보)를 전달하는 것을 뜻합니다. 데이터를 요청하는 시점에 따라 데이터가 바뀔 수도 있기 때문에 '상태'라는 표현을 쓴 것이라 추측해 봅니다. 프로그램이 학생 명부 전체 리스트를 요청받으면 요청받은 시점의 '상태' 즉 데이터를 전달하게 됩니다. 또한 새로운 학생 명부 '상태'를 프로그램에 전달하여 해당 자원을 수정할 수도 있습니다.

  고로 자원을 이름으로 구분하여, 해당 자원의 상태를 주고 받는 모든 아키텍쳐들은 REST 아키텍쳐인 것이다.

  여기에 내가 조금 들어본 지식들을 조합해서 생각해보면, REST라는 것에 대한 내 생각은 다음과 같다.

  **자원(Resources)을 대표하는 이름(URL)을 이용하여, 자원을 선택하고 그 자원의 상태를 다루는(HTTP Method) 아키텍쳐**

  또한 이런 REST를 정의하기 위한 조건들이 있는데, 그 조건들은 다음과 같다.

  ```
    * 클라이언트-서버 구조
    * 무상태(Stateless)
    * 캐시 처리 가능(Cacheable)
    * 계층화(Layered System)
    * Code on demand (optional)
    * 인터페이스 일관성
  ```

  참고로, RESTful에 정답은 없다. 그저 REST의 원리를 따르는 시스템들을 표현하기 위해서 사용되는 단어라고 생각하면 된다.
</div>
</details>

<details>
<summary>RESTful의 메소드 종류는?</summary>
<div markdown="1">
  <br />

  ```
    1. GET
    2. POST
    3. PUT
    4. DELETE
  ```

  정도가 있겠다. 상기의 4가지 HTTP method들을 통하여 CRUD하되, 최대한 REST의 방향을 따라가야만 한다.  

  RESTful에 대해서는 나중에 따로 포스트를 올릴 거지만(~~올려야 하지만~~), 좋은 REST API를 만들기 위해서는 critical한 condition들을 만족해야만 한다. 예를들어 목적에 부합하게 method를 사용해야한다던지, URL의 표현 방식에 대해서도 설명하는 글들이 많다.  

  자세한 내용은 [다음](https://meetup.toast.com/posts/92 "REST API의 조건에 대한 설명")을 참고해보자. 아직 나에게는 많이 어려운 내용같다...  
</div>
</details>

<details>
<summary>웹에서 HTTP 통신을 할 때의 과정은?</summary>
<div markdown="1">
  <br />


  다음과 같은 순서를 따른다.  

  ```
    1. URL 주소 입력에 따른 DNS 서버의 IP 주소 반환 및 클라이언트의 서버 연결 요청
    2. 클라이언트-서버 연결 시도  
        - 연결 방식은 TCP 연결방식, 3-hand shaking을 통하여 연결의 신뢰성보장
    3. 연결이 성공되면, 클라이언트의 HTTP Request가 서버에게 전달
    4. 서버의 HTTP Response가 클라이언트에게 전달
    5. 클라이언트-서버의 TCP 연결 헤제
  ```

  해당 내용은 [다음](https://jess-m.tistory.com/17 "HTTP 통신 과정 설명")을 참고했다.
</div>
</details>

<details>
<summary>크로스 브라우징이란?</summary>
<div markdown="1">
  <br />

    
  회사에 입사하고 1달 즈음 되었을 때, 처음으로 크로스 브라우징에 관한 이슈를 사수분께 들었었다.

  당시의 나는 크로스 브라우징이라는 이슈를 단순히 **모든 웹 브라우저에서 같은 화면 보이게 하기** 정도의 이슈로 생각했었는데, 이번에 이 글을 쓰게 되면서 그런 생각을 고치게 되었다.

  이 글을 쓰기 위해서 참고한 사이트는 [다음](https://mulder21c.github.io/2019/01/30/what-is-cross-browsing/ "크로스 브라우징에 대한 설명")과 같고, 해당 사이트에서는 다음과 같은 내용을 찾을 수 있다.

  > 크로스 브라우징은 동일성을 의미하지 않는다.

  단순히 크로스 브라우징이 여러 개의 브라우저에서 같게 보이게 하는 기술로 착각했던 나를 비롯한 수많은 초보 개발자들은 이 글을 읽고 다음과 의문이 들었을 것이다.

  *아니 그러면 도대체 크로스 브라우징은 뭔데?*

  크로스 브라우징이란, 위의 사이트에서 다음과 같이 설명을 잘해준다.

  > 크로스 브라우징이란 적어도 표준 웹 기술을 채용하여 다른 기종 혹은 플랫폼에 따라 달리 구현되는 기술을 비슷하게 만듦과 동시에 어느 한쪽에 최적화되어 치우치지 않도록 공통 요소를 사용하여 웹 페이지를 제작하는 기법을 말하는 것이다. 또한, 지원할 수 없는 다른 웹 브라우저를 위한 장치를 구현하여 모든 웹 브라우저 사용자가 방문했을 때 정보로서의 소외감을 느끼지 않도록 하는 방법론적 가이드를 의미하는 것이다.

  한 마디로, **동일성**이 아닌 **동등성**에 대해서 논하고 있다는 것이다. 어느 웹 브라우저에도 치우치지 않는, 공통요소를 최대한 많이 사용하여 웹 페이지를 제작하는 기법이 바로 **크로스 브라우징**이라는 것이다.

  모든 브라우저에서 같은 사용자 경험을 주지 않아도 괜찮다. 왜냐하면, 크로스 브라우징은 그런 것이 아닌, 특정 브라우저에만 의존되는 기술들을 사용하지 않고 최대한의 호환성을 제공하는 것에 관심이 있기 때문이다.

  크로스 브라우징에 대하여 나처럼 정보를 잘못 알고 있던 분들이 다시 알아갔으면 좋겠다 :)
</div>
</details>
  