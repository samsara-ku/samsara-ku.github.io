---
title: 'Git과 Github의 차이'
date: 2020-4-15 16:23:13
category: 'common sense'
draft: false
---

### 😢 해당 포스트는 마이그레이션중인 포스트에요! 추후 업데이트 필요!
<br />

![alt](https://universalarticles.com/wp-content/uploads/2019/11/github.png)

<br />

나를 비롯한 많은 초보 개발자부터 경력이 많은 개발자까지, 개발자에게 있어서 Git과 Github는 필수적인 존재이다.  

그러나 나를 포함한 많은 초보 개발자분들은, Git과 Github의 차이를 잘 모르고 사용하는 분들이 많다. 물론 이 글을 쓰기 전의 나도 그랬다.    

혹자는 다음과 같이 말하기도 한다.

> 엥? Git이랑 Github랑 같은거 아니에요? 

땡. 완벽하게 틀렸다. 물론 둘의 차이를 몰라도 코딩을 하는데에는 개인적으로 상관이 없다고 생각한다. 

하지만 모르는 것을 알고서 넘어가는 것과 모르는 것을 모르고 넘어가는 것의 차이는 명확하다. 또한 모르는 것을 알고 있다고 착각하고 사는 것과 모르는 것을 실제로 알고 넘어가는것의 차이도.

그러한 이유로 이번에는 Git이 무엇이고, Github는 무엇이며, 둘의 차이는 무엇인지 한 번 알아보도록 하자.

------

# 1. Git
Git은 **`VCS(Version Control System)`**이다.    

이름에서도 그것의 의미를 충분히 유추할 수 있다. 예시를 하나 들어보자.

이 글을 읽고 있는 당신과 당신을 포함한 수 많은 개발자들은 코드를 **단 한번**에 짜는 것이 힘든것을 알고있다. 

프로젝트의 규모가 작다면 가능한 이야기일지 몰라도, 아무리 머리가 좋은 프로그래머여도 프로젝트의 규모가 커진다면 불가능한 이야기이다.    

그러한 상황에서 우리 개발자들은 하나의 **"목표"**, 즉 프로그램의 완성을 위하여 차근차근 단계를 밟아가면서 만들기 마련이다.  

그러한 과정에서 프로그램의 버전이 나오기 마련이다. 버전 1.0에서는 로그인 기능을 구현했고, 버전 1.1에서는 레이아웃을 다듬고, 버전 1.2에서는 api를 사용해서 특정 정보를 가져오는 등의 순차적 개발이 일어날것이다.  

그런데 만약 작업을 하다 버전 2.0에서 오류가 나서 다시 버전을 예전으로 돌려야 하는데 정보가 남아있지 않다면? 코드를 다시 돌리기 위해서 엄청난 노력을 해야만 다시 예전 버전으로 돌릴 수 있을 것이다.

이런 불상사를 미연에 방지하기 위하여 만든것이 VCS, 즉 **버전 관리 시스템**이다. VCS는 수정된 파일을 저장해주고, 백업을 해주는 등의 귀찮은 수작업을 대신해준다. 또한 어떤 파일이 수정되었는지, 예전으로 롤백하는 방법을 알려주기도 한다.

이제 우리는 편하게 버전을 관리할 수 있게 되었다.

------

# 2. Github

그런데 이번에는 위의 문제보다 심각한 문제가 발생했다. VCS를 이용해서 편리하게 개발을 하고 있다가, 컴퓨터가 고장이 나서 다시 되살릴수가 없게 되었다! 

그래서 새 컴퓨터를 구해서 다시 코딩을 해야하는데, 나에게 이제 남은 정보는 어렴풋이 나는 기억들밖에 없다. 이럴 때는 어떻게 해야할까? 

이러한 문제를 해결하기 위하여 Github라는 **`클라우드 스토리지`**를 사용하는 것이다. 

만약 우리의 로컬에 심각한 오류가 발생해서 되살릴 수 없더라도, 이를 미리 클라우드 서버에 올려놓는다면 우리는 나중에 다시 그 파일들을 다운로드하기만 하면 다시 작업을 진행할 수 있을 것이다.  

또한 클라우드 서버에 정보를 올리기 때문에, 한 프로젝트에 여러 명의 사람들이 참여해도 우리는 클라우드 서버에 업로드 되어있는 파일들을 볼 수 있고 수정하여 다시 올릴 수 있다.

또한 모르는 사람들도 내 코드를 볼 수 있기 때문에(내가 오픈소스로 열었을 때), 내가 모르는 치명적인 결함을 다른 사람들이 보고를 해서 수정을 해줄 수 있다는 점에서 엄청난 생산성을 보여줄 수 있다. 

이처럼, Git과 같은 VCS를 클라우드 형식으로 관리하는것을 Github라고 말한다.

-------

여기까지 Git과 Github의 차이를 짤막하고 쉽게 알아보았다.    

개발에 정말 꼭 필요한 내용은 아니라고 생각한다. 몰라도 어느정도의 코딩들은 가능하니까. 이전의 내가 그랬었고. 

하지만 **"내가 쓰는 프로그램이 무엇이고, 이게 어떠한 기능을 가지고 있는지는 알아야하지 않을까?"** 라는 생각에 이 글을 쓰게 되었다.  

나중에 천천히 git의 command에 대해서 정리하는 포스트를 만들어봐야겠다. 항상 사용하고 있는 git이지만, 너무나도 어렵다..

부디 이 글을 읽는 사람들이 Git과 Github의 차이를 알게되는 것에 도움이 되었으면 하는 바람이다 :)