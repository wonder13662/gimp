# 13.3.2.6. 함수(Functions)
함수(Function)는 아래와 같은 문법으로 작성합니다.

```scheme
(define
  (
    name
    param-list
  )
  expressions
)
```

`name`은 이 함수에 지정된 이름입니다. 

`param-list`는 공백을 구분자(인자를 나누는 기준)하는 목록입니다. 

이 목록은 인자들의 이름을 가지고 있습니다. 

그리고 `expression`은 연속적으로 연결된 표현식입니다. 

이 표현식은 함수가 호출될 때, 실행됩니다. 

실제 동작하는 함수의 코드는 아래와 같습니다.

```scheme
(define (AddXY inX inY) (+ inX inY) )
```

`AddXY`는 함수의 이름입니다. 

그리고 `inX`과 `inY`는 변수입니다. 

이 함수는 두개의 매개변수(parameter)를 갖습니다. 

그리고 이 두개의 매개변수를 더합니다.

`C/C++`, `Java`, `Pascal` 같은 [명령형 프로그래밍 언어](https://ko.wikipedia.org/wiki/%EB%AA%85%EB%A0%B9%ED%98%95_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)과 비교해보았을 때, 이 함수 정의에는 몇가지 없는 것들이 있습니다.

1. 매개 변수(parameter)에는 타입(String, Integer 등)이 없습니다. `Scheme`은 타입이 없는 언어입니다. 이 점 덕분에 빠른 스크립트 작성이 가능합니다.

2. 함수의 결과를 어떻게 리턴하는지 신경쓰지 않아도 됩니다. 함수를 호출할 때의 마지막 구문이 돌려준 값이 됩니다. 

`Script-Fu` 콘솔 창에 함수를 정의하고, 아래 코드를 입력해보세요. 

아래 이미지에서 결과를 확인해볼 수 있습니다.

```scheme
(AddXY (AddXY 5 6) 4)
```

<a id="90-04-97-a161"></a>

#### [그림 90.4.97.a161. 함수 사용하기](./90-04-0097-script_fu_console.md#90-04-97-a161)
![90-04-97-a161](https://github.com/wonder13662/gimp/assets/15767104/6536edfa-ca49-4533-bf0e-f3bcbc12d7c8)

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.3. 더 많은 리스트(Lists, lists and more lists)](./13-03-03-00-lists-lists-and-more-lists.md)

[⬅️ 이전: 13.3.2.5. 변수에 새로운 값을 할당하기(Assigning a New Value to a Variable)](./13-03-02-05-assigning_a_new_value_to_a_variable.md)

[⬆️ 위: 13.3.2. 변수와 함수(Variables and functions)](./13-03-02-00-variables-and-functions.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-identifier.html#idm9692)