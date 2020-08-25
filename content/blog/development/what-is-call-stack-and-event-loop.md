---
title: 'Single thread인 JS가 어떻게 여러 개의 작업을 처리할까?'
date: 2020-6-13 16:21:13
category: 'development'
thumbnail: '../../assets/posts/callstack/js_title.png'
draft: false
---

![](../../assets/posts/callstack/js_title.png)


### 😢 해당 포스트는 마이그레이션중인 포스트에요! 추후 업데이트 필요!
<br />

웹사이트들을 돌아다니다가 정말 자극적인 문구의 사이트를 보게 되었다!    

바로 [모든 자바스크립트 개발자가 알아야 하는 33가지 개념](https://github.com/yjs03057/33-js-concepts#1-%ED%98%B8%EC%B6%9C-%EC%8A%A4%ED%83%9D)이라는 github repo였다! 얼마나 매력적인 제목인가? 마치 저것만 다 읽으면 전문가가 될 것 같은 느낌이다(물론 본인이 많이 노력해야겠지만..)    

해당 사이트에 들어가서 제일 먼저 보게 된 내용이, *호출 스택(call stack)*이라고 예전에 자바스크립트의 관련 지식에 대한 이야기를 보다가 본 단어이다.    

해당 내용을 통하여 들어간 포스트에는 자바스크립트를 처음 접했었을 때 읽었지만, 이해가 잘 가지 않았던 내용들이 꽤나 자세하게 적혀있었다.    

시간이 흐른 이후에 다시 동일한 내용의 글을 보게 된다면 이해력이 좀 올라가지 않을까 싶어서, 해당 내용에 대해 이해도 할 겸 정리도 해보려고 이번 포스트를 작성하게 되었다!    

---

## 우선 들어가기 앞서

나는 해당 분야에 깊은 지식이 없기 때문에, 본 포스트의 글은 원문을 읽고 나름 재해석(?)한 나의 내용이니 올바른 내용이 아닐 수도 있다. 만약 이 글을 읽고 있는 분이 오류를 캐치하거나 그렇다면, 주저없이 댓글로 남겨주시면 좋을 것 같다. ~~바로바로 수정할테니 제발 ㅠㅠ~~

본 포스트는 *Alexander Zlatkov*의 [How JavaScript works: an overview of the engine, the runtime, and the call stack](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)을 중심으로, 최하단의 글들을 참고했다. 

또한 영상 자료로는 *Philip Roberts*의 [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)을 참고했다. 나와 비슷한 JS초보자 및 영어를 읽기 힘들어하는 사람들에게 좋은 자료가 될 것이다.    

---

### JS engine / JS runtime

V8이라는 단어를 들어본 적 있는가? 다시 생각해보니 나는 V8이라는 단어를 예전에 JS입문할 때, 중간에 회사를 들어가서 사수분에게 한 번, 이 포스트를 정리하면서 한 번, 총 세 번들은 것 같다.    

그러나 세 번을 보아도 이게 대충 무엇인지만 알지, 정확하게 무엇을 의미하는지 모르고 있었다. 이 포스트를 쓰면서, 해당 내용이 어느 정도 연관이 있기 때문에 그것에 대하여 정리하는김에 또 JS engine과 관련이 있는 JS Runtime에 대해서도 알아보자.

우선 JS Engine이다. 위에서 언급한 V8도 JS engine 중 하나이다.    

![js_engine](../../assets/posts/callstack/js_engine.png)    

JS Engine의 개괄적인 이미지인데, 크게 두 가지의 구성요소가 존재한다.

* Memory Heap : 메모리 할당이 할당이 일어나는 곳
* Call Stack : 코드가 실행됨에 따라 스택 프레임이 쌓이는 곳

다음은 JS Runtime이다. JS Runtime의 개괄적 이미지는 다음과 같다.    

![js_runtime](../../assets/posts/callstack/js_runtime.png)    

우리가 여기서 눈여겨봐야하는 특징은, JS Engine의 그림이 JS Runtime 내부에 존재한다는 것이다. 이게 무엇을 의미할까?    

*Runtime*을 인터넷에 치면 다음과 같은 내용이 나온다.

> 런타임은 컴퓨터 과학에서 컴퓨터 프로그램이 실행되고 있는 동안의 환경을 말한다.       

그렇다. **JS Runtime**은, **JS**를 돌리는 **환경**을 의미한다. 그렇기 때문에, V8이라는 engine이 runtime의 내부 모식도에 보이는 것이다.    

이런 런타임은 종류에 따라 각기 다른 구조를 보여주기도 하며, 다른 API를 제공해주기도 한다. 

결론적으로 Node.js와 Chrome은 동일한 V8 엔진을 사용하지만, 각기 다른 runtime을 가지고 있다는것이 이 이유이다. (출처: [자바스크립트 엔진(JavaScript Engine)과 자바스크립트 런타임(Javascript Runtime)의 차이](https://geonlee.tistory.com/91))

---

### Call stack

그렇다면 이제 본격적으로 single-thread인 javascript가 어떻게 여러 개의 작업을 처리하는지 알아보자.    

그러기 위해서는 *Call stack* 부터 알아야한다. 위에서 간단한 설명을 한 것처럼, Call stack은 코드가 한 줄씩 실행되면서 그에 따른 *스택 프레임(stack frame)* 이 쌓이는 곳이다.    

스택 프레임이 무엇이냐면 간단하게 생각하면 다음과 같다.

> 함수 foo, boo, bar가 존재한다고 하자. 함수 foo안에서 boo를 호출하고, boo안에서는 bar를 호출한다. 내가 만약 함수 foo를 실행하면 어떻게 될까?     

물론 우리는 bar -> boo -> foo의 순서로 함수가 실행됨을 쉽게 알 수 있다. 하지만 함수가 100개라면? 그리고 그게 서로 얽히고 얽혀있다면?    

이럴때 사용되는 개념이 스택 프레임이다. 함수가 무엇을 호출하는지, 어디로 되돌아가야 하는지를 명시하는 일종의 이정표인 셈이다.    

위의 개념을 이용해서, 컴퓨터는 함수를 실행하면 먼저 스택 프레임을 저장하고 다른 함수로 이동하여 순차적으로 실행되는 로직을 가지고 있는 셈이다.    

다음은 예제이다.

```
function multiply(x, y) {
    return x * y;
}
function printSquare(x) {
    var s = multiply(x, x);
    console.log(s);
}
printSquare(5);
```
<br />
위의 코드의 call stack은 아래와 같이 쌓임을 알아두자.

![js_callstack](../../assets/posts/callstack/js_callstack.png)

여기서 javascript의 call stack의 문제점이 나오게 된다. single-thread 기반의 javscript이므로, 한 번에 한 개의 작업밖에 못하므로 만약 다음과 같은 코드를 실행시키면 다른 작업들이 끼어들지 못한다.    

```
function foo() {
    foo();
}
foo();
```
<br />

이는 다음과 같은 call stack을 생성시킬것이다.

![js_callstack_maximum](../../assets/posts/callstack/js_callstack_maximum.png)

위와 같이, single-thread에서 코드를 돌리는건 매우 multi-thread와 같은 환경에서 나오는 *deadlock* 과같은 치명적인 문제가 생기지는 않지만 한계가 명확하다.    

그럼 여기서 만약, 실행시간이 오~래 걸리는 코드를 실행시키면 어떻게 될까?    

---

### Event loop & Callback Queue, Concurrency

위에서 물어봤던 질문은 이곳에서 아주 큰 위험이 될 것이다. 생각을 다음과 같이 해보자.    

> *Button을 누르면 call stack에 쌓이고 나서 약 10초뒤에 작업이 끝나는 stack frame이 존재하는데, 해당 frame이 끝나고 나서 button에다가 focus를 해야한다면?*

어떻게 될까? 정말 끔찍한 시간이 될 거다. 웹 사이트는 약 10초 동안의 시간동안 아~무일도 안할거다. Button이 pressed된 상태에서 10초동안 기다렸다가 10초뒤에야 겨우 unpressed되고 focused될 것이다.    

만약 우리가 쓰는 네이버나 구글같은 사이트가 이렇게 작동한다고 해보자. 어떨까? 최악의 UX를 가져다 줄 것이다. 이게 모두 한 번에 한 작업, 즉 동기적으로 작동하기 때문이다.    

하지만 우리가 쓰는 웹 사이트가 위와 같이 작동하는가? 우리의 웹 사이트는 그렇게 작동하지 않는다. 우리는 유튜브를 보면서, 동시에 유튜브에 댓글을 달고, 동시에 유튜브의 영상 목록을 스크롤링한다. 위의 방법과 같게 작동한다면 꿈도 못꿀 이야기이다.    

이는 모두 *asynchronous*, **비동기적**으로 작동하기 떄문이다. 작업을 진행할때, 한 작업이 끝나기를 기다리지 않고 그 시간동안 다른 작업들을 진행하는 것이다.    

그렇다면 여기서 질문. Single-thread인 자바스크립트는 도대체 어떻게 **비동기적으로** 작업하는것일까? Thread가 한 개이니, 한 작업씩만 처리할 수 밖에 없을텐데..    

물론 한 번에 한 작업씩 처리하는 것도 맞고, single-threaded인 것도 맞다. 중요한건 **Event loop**과 **Callback Queue**가 존재한다는 것이다.    

**Callback Queue**는 이름에서 유추할 수 있듯이, 비동기적으로 실행된 *콜백(Callback)*함수들이 순서대로 쌓이는 영역이다.    

**Event Loop**은 Call Stack을 주기적으로 확인하여, 만약 비어있다면 Callback Queue에 존재하는 작업을 *FIFO*로 넣어준다.    

이러한 구조때문에 *비동기적* 이며 *single-thread*인 JS가 여러 개의 작업을 동시(Concurrency)에 할 수 있는것이다! 다음의 예제를 보면 이해가 갈 것이다.    

```
console.log('Hi')

setTimeout(function callback(){
    console.log('There')
}, 5000)

console.log('End')

// Result
Hi
End
There
```

JS를 처음 접하는 분들은 위와 같은 결과값이 이해가 가지 않을 것이다. 하지만 다음의 설명을 먼저 보자. 실행 순서는 다음과 같게 흘러간다.

1. 코드를 읽으면서 console.log('HI')을 만나 Call stack에 집어넣는다.
2. Call stack에 있는 작업을 실행 // 'hi'
3. 코드를 읽으면서 setTimeout 함수를 만나서, Web API의 'timer'를 호출하여 5초를 기다리게 함.
4. 그 동안에 JS는 아래의 console.log('End')를 만나서 Call stack에 집어넣고 실행 // 'End'
5. timer의 5초가 지났기 때문에, 콜백 함수인 'callback()' 함수를 Callback Queue에 집어넣음
6. Call stack이 비었기 떄문에, event loop은 Call Queue를 보고있었는데 갑자기 'callback()'함수가 들어와서 해당 함수를 Call stack에 적재!
7. Call stack에 존재하는 'callback()' 함수 실행! // 'There'

위와 같은 순서로 JS는 실행된다. 어떤가? 이제야 왜 single-thread인 JS가 동시에 여러 개의 작업을 처리할 수 있는지 알겠는가?    

혹시 글로 되어있어서 읽기가 힘들다면, [Loupe](http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIkhpISIpOwoKJC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKCnNldFRpbWVvdXQoZnVuY3Rpb24gdGltZW91dCgpIHsKICAgIGNvbnNvbGUubG9nKCJDbGljayB0aGUgYnV0dG9uISIpOwp9LCA1MDAwKTsKCmNvbnNvbGUubG9nKCJXZWxjb21lIHRvIGxvdXBlLiIpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)라는 사이트에 들어가서 위의 코드를 실행시켜보자. Loupe라는 사이트는 JS의 환경에서 실행되는 프로세스를 그림으로 보여주는 사이트이다.    

### Wrap-up

지금까지 JS가 어떻게 여러 개의 작업을 실행할 수 있는지에 대해서 알아보았다.    

결론적으로 JS가 single-thread임에도 불구하고 여러 작업을 진행할 수 있는 이유는 JS가 가진 특유의 **구조**떄문이라는 것을 알게 되었다.    

해당 내용은 생각보다 어렵기도 하고, 중요한 내용이기도 하니 자주 반복해서 글을 읽어 지식을 습득하려고 노력해보려고 한다 :)

---

### 참고한 사이트들

[자바스크립트 호출 스택(Call Stack) 이해하기](https://new93helloworld.tistory.com/358)        

[Understanding Javascript Function Executions — Call Stack, Event Loop , Tasks & more](https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec)    

[Event Loop (이벤트 루프)](https://velog.io/@thms200/Event-Loop-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84)    