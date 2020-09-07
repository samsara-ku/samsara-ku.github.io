---
title: 마크다운 작성법
date: 2020-4-13 16:22:13
category: 'common sense'
draft: false
---
이전의 post에서 Markup과 Markdown의 차이에 대해서 알아보았다.

이전 post에서는 Markdown이 무엇인지 알았으니, 이번에는 Markdown을 잘 사용하기 위해서 연습용 포스트를 올려봤다!
    
# 1. Header

### 1.1. 큰 제목

Header
======

```
Header
======
```

### 1.2. 작은 제목

Header
------

```
Header
------
```

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

# 2. Backquote

`">" 문자를 사용한다`

```
> This is first block.
>   > This is second block.
>   >   > This is third block.
```

> This is first block.
>   > This is second block.
>   >   > This is third block.

물론 backquote 안에서는 다양한 마크다운 요소를 활용할 수 있다.

> ### This is H3
>   >   * List

```
> ### This is H3
>   >   * List
```

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


This is first sentence.     
This is second sentence.    
This is third sentence.

```
This is first sentence.     
This is second sentence.    
This is third sentence.
```

# 6. Codes

`태그를 사용하는 방식과, 코드블럭코드를 사용하는 방법 2가지가 있다`

### 6.1. 코드블럭코드("~~~")를 사용하는 방법

`p.s) "~~~"는 백틱("```")으로 대체가 가능하다`
~~~
This is code paragraph
You can put everything on this block
Just do it!
~~~

```
~~~
This is code paragraph
You can put everything on this block
Just do it!
~~~
```

### 6.2. `<pre><code></code></pre>` 태그를 사용하는 방식

<pre>
<code>
This is code paragraph
You can put everything on this block
Just do it!
</code>
</pre>

```
<pre>
<code>
This is code paragraph
You can put everything on this block
Just do it!
</code>
</pre>
```

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

# 8. Link

`내부링크와 외부링크가 있다`

### 8.1. Internal link

`Markup language의 일부 특성중 id와 같은 특성을 이용하여 걸 수 있다.`

[Go to the first sentence](#top)

```
Form: [link keyword][#id]
Real example: [Go to the first sentence](#top)
```

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

#### 8.2.2. In-line external link

[Google](https://www.google.com "구글")

```
[Google](https://www.google.com "구글")
```

#### 8.2.3. URL external link

<https://www.google.com>

```
<https://www.google.com>
```

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

### 9.2. Bold

`** 또는 __로 감싼 텍스트`

**Hi**  
__Hi__

```
**Hi**  
__Hi__
```

# 10. Image

`말 그대로 이미지를 넣는 방법이다. 이미지를 넣는 방법도 여러 가지이다.`

### 10.1. In-line image

![alt text](../../assets/posts/1.jpg)

```
![alt text](../../assets/posts/1.jpg)
```

### 10.2. link image

![alt text](https://camo.githubusercontent.com/202c9ae1d457d6109be6c4cf13db9cac5fd708a6/687474703a2f2f6366696c65362e75662e746973746f72792e636f6d2f696d6167652f32343236453634363534334339423435333243374230)

```
![alt text](https://camo.githubusercontent.com/202c9ae1d457d6109be6c4cf13db9cac5fd708a6/687474703a2f2f6366696c65362e75662e746973746f72792e636f6d2f696d6167652f32343236453634363534334339423435333243374230)
```

### 10.3. Reference image

![alt text][1]

[1]:../../assets/posts/2.jpg


```
![alt text][1]

[1]:../../assets/posts/2.jpg
```

이상 여러 가지 Markdown 작성법에 대해서 알아보았다.

처음에 인터넷에서 봤을 때는 얼마 없다고 생각해서 금방 작성할 것으로 생각했는데, 생각보다 양이 너무 많다..

그리고 아직도 작성하지 못한 Markdown 요소들도 있다. Table, footnotes, fold 등 요긴하게 쓰일 요소들이 너무 많아 보이지만 시간문제로 패스..

이거 작성하면서 열심히 공부도 된 느낌이니, 나중에 도움이 될 것으로 생각한다 :)