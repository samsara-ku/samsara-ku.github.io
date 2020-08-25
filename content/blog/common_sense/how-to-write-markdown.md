---
title: 마크다운 작성법
date: 2020-4-13 16:22:13
category: 'common sense'
draft: false
---

### 😢 해당 포스트는 마이그레이션중인 포스트에요! 추후 업데이트 필요!
<br />

이전의 post에서 Markup과 Markdown의 차이에 대해서 알아보았다.

이번 post에서는 Markdown이 무엇인지 알았으니, Markdown은 어떻게 작성해야 하는지에 대해서 알아보도록 하겠다. 

사실 많은 blog나 github에 이미 Markdown의 작성법이 나와있지만 이전의 포스트에서도 그랬듯이 익숙해지기 위해선 일단 공부를하고, 그 공부한 내용을 스스로 어딘가에 작성하여 반복적으로 보는것이 도움이 된다.    

그러한 이유로 이번에는 Markdown의 작성법에 대해서 알아보자! 

다음은 마크다운 작성법이다.

------
    
# 1. Header

### 1.1. 큰 제목

Header
======

```
Header
======
```
<br/>

### 1.2. 작은 제목

Header
------

```
Header
------
```
<br/>

### 1.3. 글 머리

# h1
## h2
### h3
#### h4
##### h5
###### h6
####### h7 (없음)

```
# h1
## h2
### h3
#### h4
##### h5
###### h6
####### h7 (없음)
```
<br/>

------
# 2. Backquote

`">" 문자를 사용한다`

```
> This is first block.
>   > This is second block.
>   >   > This is third block.
```
<br/>

> This is first block.
>   > This is second block.
>   >   > This is third block.

물론 backquote 안에서는 다양한 마크다운 요소를 활용할 수 있다.

> ### This is H3
>   >   * List
>   >   > `In-line code`

```
> ### This is H3
>   >   * List
>   >   > `In-line code`
```
<br/>

------
# 3. Ordered-list

`순서가 있는 리스트는 숫자와 온점을 사용한다`

1. First
2. Second
3. Third

```
1. First
2. Second
3. Third
```
<br/>

`c.f) 순서가 있는 리스트는, 숫자를 임의의 순서대로 적어내려도 내림차순으로 정리되니 조심하자`

1. First
4. Forth
3. Second
2. Third


```
1. First
4. Forth
3. Second
2. Third
```
<br/>

------

# 4. Unordered-list

`순서가 없는 리스트는 "*", "+", "-"를 사용한다`

* First
    * Second
        * Third
+ First
    + Second
        + Third
- First
    - Second
        - Third

```
* First
    * Second
        * Third
+ First
    + Second
        + Third
- First
    - Second
        - Third
```
<br/>

`셋의 기호를 혼합해서 사용이 가능함, 그러나 3번째 list 아래로는 모양이 통일되므로 주의`

* First
    - Second
        + Third
            * Forth
                + Fifth
                    - Sixth

```
* First
    - Second
        + Third
            * Forth
                + Fifth
                    - Sixth
```
<br/>

------

# 5. Normal Text

`4개의 공백 또는 하나의 탭키가 나오기 전까지는 한 줄로 이어져서 나온다`

This is first sentence.
    This is second sentence.
        This is third sentence.

```
This is first sentence.
    This is second sentence.
        This is third sentence.
```

<br/>

This is first sentence.     
This is second sentence.    
This is third sentence.

```
This is first sentence.     
This is second sentence.    
This is third sentence.
```
<br/>

------

# 6. Codes

`태그를 사용하는 방식과, 코드블럭코드를 사용하는 방법 2가지가 있다`

### 6.1. 코드블럭코드("~~~")를 사용하는 방법

`c.f) "~"는 backtick으로 대체가 가능하다`
~~~
This is code paragraph
You can put everything on this block
Just do it!
~~~
<br/>

```
~~~
This is code paragraph
You can put everything on this block
Just do it!
~~~
```
<br/>

### 6.2. `<pre><code></code></pre>` 태그를 사용하는 방식

<pre>
<code>
This is code paragraph
You can put everything on this block
Just do it!
</code>
</pre>
<br/>

```
<pre>
<code>
This is code paragraph
You can put everything on this block
Just do it!
</code>
</pre>
```
<br/>

------

# 7. Horizontal line

`다음과 같은 다양한 방법으로 구분선을 표기해줄 수 있다`

* * *

***

*****

- - -

---------------------------------------

```
* * *

***

*****

- - -

---------------------------------------
```
<br/>

------

# 8. Link

`내부링크와 외부링크가 있다`

### 8.1. Internal link

`Markup language의 일부 특성중 id와 같은 특성을 이용하여 걸 수 있다.`

[Go to the first sentence](#top)

```
Form: [link keyword][#id]
Real example: [Go to the first sentence](#top)
```
<br/>

### 8.2. External link

`내부링크와 비슷한 방법으로, 또는 약간 다른 방법을 이용하여 선언하여 이용할 수 있다`

#### 8.2.1. Reference external link

[Google][1]     
[Naver][2]

[1]:https://google.com/ "구글"
[2]:https://naver.com/  "네이버"

```
[Google][1]     
[Naver][2]

[1]:https://google.com/ "구글"
[2]:https://naver.com/  "네이버"
```
<br/>

#### 8.2.2. In-line external link

[Google](https://www.google.com "구글")

```
[Google](https://www.google.com "구글")
```
<br/>

#### 8.2.3. URL external link

<https://www.google.com>

```
<https://www.google.com>
```
<br/>

------

# 9. Emphasis

`이탤릭체와 볼드체, 두 가지의 종류가 있다`

### 9.1. Italic

`* 또는 _로 감싼 텍스트`

*Hi*    
_Hi_

```
*Hi*    
_Hi_
```
<br/>

### 9.2. Bold

`** 또는 __로 감싼 텍스트`

**Hi**  
__Hi__

```
**Hi**  
__Hi__
```
<br/>

------

# 10. Image

`말 그대로 이미지를 넣는 방법이다. 이미지를 넣는 방법도 여러 가지이다.`

### 10.1. In-line image

![alt text](../../assets/posts/1.jpg)

```
![alt text](../../assets/posts/1.jpg)
```
<br/>

### 10.2. link image

![alt text](https://camo.githubusercontent.com/202c9ae1d457d6109be6c4cf13db9cac5fd708a6/687474703a2f2f6366696c65362e75662e746973746f72792e636f6d2f696d6167652f32343236453634363534334339423435333243374230)

```
![alt text](https://camo.githubusercontent.com/202c9ae1d457d6109be6c4cf13db9cac5fd708a6/687474703a2f2f6366696c65362e75662e746973746f72792e636f6d2f696d6167652f32343236453634363534334339423435333243374230)
```
<br/>

### 10.3. Reference image

![alt text][1]

[1]:../../assets/posts/2.jpg


```
![alt text][1]

[1]:../../assets/posts/2.jpg
```
<br/>

------

이상 여러가지 Markdown 작성법에 대해서 알아보았다.  

처음에 인터넷에서 봤을때는 얼마없다고 생각해서 금방 작성할 것이라고 생각했는데, 생각보다 양이 너무 많다..   

그리고 아직도 작성하지 못한 Markdown요소들도 있다.. 

Table, footnotes, fold 등등.. 요긴하게 쓰일 요소들이 너무 많다. 

나중에 시간이 된다면 한번에 업데이트하거나 내가 필요로 요구할 때, 사용하기에 먼저 앞서서 이 글에다가 업데이트하는 방법도 나쁘지 않은 것 같다. (솔직히 이 정도까지만 해도 내가 평생 쓸 Markdown 요소들은 다 써놓은 것 같기는 하지만..)   

이거 작성하면서 열심히 공부도 된 느낌이니 나중에도 좀 다시 보면서 공부해야겠다. :)
