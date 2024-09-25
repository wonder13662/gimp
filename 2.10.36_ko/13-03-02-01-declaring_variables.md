# 13.3.2.1. 변수 선언하기(Declaring Variables)
변수를 선언하는 몇가지 방법이 있지만, 가장 선호하는 방법은 `let*` 생성자를 사용하는 것입니다. 

`let*` 생성자는 다른 프로그래밍 언어의 생성자와 마찬가지로 지역 변수의 목록을 정의하고 지역 변수가 유효한 영역을 정합니다.

아래 예제를 보면, `a`와 `b`, 2개의 변수를 선언하고 있습니다. 

`a`에는 1을, `b`에는 2를 각각 할당해서 초기화했습니다.

```scheme
(let*
  (
    (a 1)
    (b 2)
  )
  (+ a b)
)
```

<a id="90-04-97-a141"></a>

#### [그림 90.4.97.a141. 변수 선언하기: 여러 줄로 코드 작성하기](./90-04-0097-script_fu_console.md#90-04-97-a141)
![90-04-97-a141](https://github.com/wonder13662/gimp/assets/15767104/8228d750-66e0-41ca-a730-0e0aec0e184f)

또는 한줄로 작성하면 아래와 같습니다.

```scheme
(let* ( (a 1) (b 2) ) (+ a b) )
```

<a id="90-04-97-a142"></a>

#### [그림 90.4.97.a142. 변수 선언하기: 한 줄로 코드 작성하기](./90-04-0097-script_fu_console.md#90-04-97-a142)
![90-04-97-a142](https://github.com/wonder13662/gimp/assets/15767104/30fe5213-11c1-4427-a55c-ccb724e01f2e)

위 2개의 구문은 같은 동작을 합니다. `a`, `b`의 2개의 변수를 선언하고, 초기화합니다. 

그리고 두 변수의 합을 구해 표시합니다.

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.2.2. 지역 변수는 무엇인가요?(What is a Local Variable?)](./13-03-02-02-what_is_a_local_variable.md)

[⬅️ 이전: 13.3.2. 변수와 함수(Variables and functions)](./13-03-02-00-variables-and-functions.md)

[⬆️ 위: 13.3.2. 변수와 함수(Variables and functions)](./13-03-02-00-variables-and-functions.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-identifier.html#idm9652)
