# 13.3.1.1. Scheme을 시작해봅시다(Let's Start Scheme'ing)
[Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language))은 Lisp 계열의 프로그래밍 언어의 한 종류입니다. GIMP(김프)는 가벼운 인터프리터 언어인 `TinyScheme`을 사용합니다. `TinyScheme`은 `R5RS` 표준을 따릅니다.

아래 3가지 기본 규칙을 확인해주세요.

## 1. 모든 구문은 괄호로 감싸줍니다
`Scheme`의 모든 구문은 괄호로 감싸줍니다.

아래 예시에서 연산자 `+`, 인자 `3`, `5`는 괄호로 감싸져 있습니다.

```
(+ 3 5)
```

## 2. 괄호 안의 아이템의 순서
괄호 안의 첫번째 아이템은 함수(function)입니다. 그리고 나머지 아이템은 함수의 인자(parameter)들입니다.

하지만, 괄호안에 포함된 것이 함수가 아닐 수도 있습니다. 리스트 안에 아이템일 수도 있습니다. 이것은 나중에 다루어 보겠습니다. 이 표기법은 접두사 표기법입니다. 왜냐하면, 함수가 앞에 놓이기 때문입니다.

아래 예시에서 괄호로 감싼 아이템들 중, 첫번째 아이템인 `+` 연산자는 함수입니다. 두번째 아이템 `3`, 세번째 아이템 `5`은 인자입니다.

```
(+ 3 5)
```

## 3. 연산 기호(`+`, `-`, `*`, `/`)도 함수입니다
계산 연산자도 함수입니다. 그러므로 계산 표현을 쓸 때에 계산 연산자가 괄호안의 첫번째 아이템이 됩니다.

아래 예시에서 괄호로 감싼 아이템들 중, 첫번째 아이템인 `+` 연산자는 함수입니다.

```
(+ 3 5)
```

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.1.2. 접두사, 삽입사, 접미사 예제(Examples Of Prefix, Infix, And Postfix Notations)](./13-03-01-02-example_of_prefix_infix_n_postfix_notations.md)

[⬅️ 이전: 13.3.1. Scheme에 익숙해지기(Getting acquainted with scheme)](./13-03-01-00-getting-acquainted-with-scheme.md)

[⬆️ 위: 13.3.1. Scheme에 익숙해지기(Getting acquainted with scheme)](./13-03-01-00-getting-acquainted-with-scheme.md)

[⬆️ 위: 13.3. script-fu 튜토리얼(A script-fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial.html#idm9574)
