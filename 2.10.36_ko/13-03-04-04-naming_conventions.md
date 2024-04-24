# 13.3.4.4. 이름 규칙(Naming Conventions)
`Scheme`에서 함수의 이름 규칙은 소문자(lowercase)와 하이픈(`-`)을 선호합니다. 하지만, 인자(Parameter)의 이름 규칙은 [카멜케이스(CamelCase)](https://ko.wikipedia.org/wiki/%EC%B9%B4%EB%A9%9C_%ED%91%9C%EA%B8%B0%EB%B2%95)입니다.

```scheme
(define (script-fu-text-box inText inFont inFontSize inTextColor))
```

인자에 접두사(prefix)로 `in`을 인자에 붙였습니다. 스크립트 안에서 선언된 변수에는 `the`를 붙입니다. 이렇게 표시해두면, 스크립트 안에서 인자와 변수의 구분이 쉬워집니다.

(TODO 추후 변수의 이름 규칙 적용한 코드 추가하기)

스크립트의 `abc` 함수를 `script-fu-abc`라고 이름짓는 것은 GIMP(김프)의 이름 규칙입니다. 이런 스타일로 이름을 지어두면, [절차적 데이터베이스(Procedual Database)](./19-glossaryx-procedural_database.md)에 등록되어, [이미지 메뉴 바](./03-02-02-02-image-menu.md)의 `필터` → `Script-Fu`의 아래에 보여지게 됩니다. 이 방식은 스크립트가 플러그인과 구분되어 보이게 해줍니다.

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.4.5. 함수 등록하기(Registering The Function)](./13-03-04-05-registering_the_function.md)

[⬅️ 이전: 13.3.4.3. 가장 필요한 것들(The Bare Essentials)](./13-03-04-03-the_bare_essentials.md)

[⬆️ 위: 13.3.4. 첫번째 Script-Fu 스크립트(Your first Script-Fu script)](./13-03-04-00-your-first-script-fu-script.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-first-script.html#idm9853)