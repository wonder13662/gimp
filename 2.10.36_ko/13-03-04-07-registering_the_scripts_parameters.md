# 13.3.4.7. 스크립트의 매개변수를 등록하기(Registering The Script's Parameters)
`script-fu-register` 함수에서 필요한 매개변수를 목록으로 만들면, 이 매개변수들이 어떤 타입인지 알려줘야 합니다.

#### 코드 13.3.4.7.a1. `script-fu-register` 함수의 매개변수 목록

```scheme
(script-fu-register
  ...
  SF-STRING      "Text"          "Text Box"   ;프롬프트의 사용자 입력 문자열 변수(a string variable)
  SF-FONT        "Font"          "Charter"    ;프롬프트의 사용자 입력 글꼴(a font variable)
  SF-ADJUSTMENT  "Font size"     '(50 1 1000 1 10 0 1)
                                              ;프롬프트의 사용자 입력 글꼴 크기(a spin-button)
  SF-COLOR       "Color"         '(0 0 0)     ;프롬프트의 사용자 입력 색상(color variable)
)
(script-fu-menu-register "script-fu-text-box" "<Image>/File/Create/Text")
```

여기서 정의한 매개변수의 타입은 사용자가 스크립트를 선택하면 나타나는 대화상자에서 씁니다. 각 매개변수의 기본값도 역시 정의합니다.

<a id="13-03-04-05-a2"></a>

#### [그림 13.3.4.5.a2. `Text Box` 대화상자](./13-03-04-05-registering_the_function.md#13-03-04-05-a2)
![13-03-04-05-a2](https://github.com/wonder13662/gimp/assets/15767104/252d3a23-be1d-4d7c-9b04-5c29d0ad8b54)

스크립트 등록 과정에서 아래와 같은 매개변수의 타입을 사용합니다.

|매개변수 타입|설명|예제|
|---|---|---|
|SF-IMAGE|스크립트가 `이미지 열기`에서 동작을 하는 경우에, 이 매개변수는 요청한 파라미터 목록의 다음의 첫번째 매개변수가 되어야 합니다. GIMP(김프)는 이 매개변수에 이미지의 참조를 전달합니다.|3|
|SF-DRAWABLE|스크립트가 `이미지 열기`에서 동작을 하는 경우에, 이 매개변수는 매개변수 `SF-IMAGE` 다음의 두번째 매개변수가 되어야 합니다. 이 매개변수는 활성화된 레이어를 참조합니다. GIMP(김프)는 이 매개변수에 활성화된 레이어의 참조를 전달합니다.|17|
|SF-VALUE|이 매개변수는 숫자와 문자열을 받습니다. 기본 문자를 입력하는 경우에는 반드시 따옴표로 감싸야 합니다. 그러므로 `SF-STRING`을 사용하는 것이 더 낫습니다.|42|
|SF-STRING|이 매개변수는 문자열을 받을 수 있습니다.|"Some text"|
|SF-COLOR|이 매개변수는 RGB 색상값을 받을 수 있습니다.|'(0 102 255)'|
|SF-TOGGLE|이 매개변수는 불린(Boolean) 값을 받습니다. 대화상자에는 체크박스로 보여집니다.|`TRUE` or `FALSE`|

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.4.8. Script-Fu 매개변수(parameter) API(The Script-Fu parameter API)](./13-03-04-08-00-the_script_fu_parameter_api.md)

[⬅️ 이전: 13.3.4.6. 스크립트를 등록하는 과정(Steps For Registering The Script)](./13-03-04-06-steps_for_registering_the_script.md)

[⬆️ 위: 13.3.4. 첫번째 Script-Fu 스크립트(Your first Script-Fu script)](./13-03-04-00-your-first-script-fu-script.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-first-script.html#idm9913)