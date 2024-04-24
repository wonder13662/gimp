# 13.3.4.6. 스크립트를 등록하는 과정(Steps For Registering The Script)

#### 코드 13.3.4.6.a1. 스크립트 예시

```scheme
(script-fu-register
  "script-fu-text-box"                        ;함수 이름(function name)
  "Text Box"                                  ;메뉴 라벨(menu label)
  "Creates a simple text box, sized to fit\
    around the user's choice of text,\
    font, font size, and color."              ;함수 설명(description)
  "Michael Terry"                             ;스크립트 작성자(author)
  "copyright 1997, Michael Terry;\
    2009, the GIMP Documentation Team"        ;저작권 알림(copyright notice)
  "October 27, 1997"                          ;작성일(date created)
  ""                                          ;스크립트가 동작하는 이미지 타입(image type that the script works on)
  SF-STRING      "Text"          "Text Box"   ;프롬프트의 사용자 입력 문자열 변수(a string variable)
  SF-FONT        "Font"          "Charter"    ;프롬프트의 사용자 입력 글꼴(a font variable)
  SF-ADJUSTMENT  "Font size"     '(50 1 1000 1 10 0 1)
                                              ;프롬프트의 사용자 입력 글꼴 크기(a spin-button)
  SF-COLOR       "Color"         '(0 0 0)     ;프롬프트의 사용자 입력 색상(color variable)
)
(script-fu-menu-register "script-fu-text-box" "<Image>/File/Create/Text")
```

GIMP(김프)에 스크립트를 등록하기 위해서는 `script-fu-register` 함수를 호출해야 합니다. 스크립트 등록을 위해 `script-fu-register`에게 인자로 줄 2개의 필수 파라미터와 5개의 선택 파라미터를 스크립트에 추가해야 합니다. 파라미터는 아래와 같습니다.

## 1. 함수 이름(function name)(필수)
정의한 함수의 이름입니다. 이 함수는 스크립트가 호출될 때, 실행되는 진입점(entry-point) 함수입니다. 스크립트 안에는 이 함수 외에도 다른 함수를 추가적으로 정의할 수 있으므로, GIMP(김프)에게 진입점이 되는 함수의 이름을 알려주어야 합니다.

#### 코드 13.3.4.6.a2. 스크립트 예시 - 함수 이름

```scheme
(script-fu-register
  "script-fu-text-box"                        ;함수 이름(function name)
  ...
)
(script-fu-menu-register "script-fu-text-box" "<Image>/File/Create/Text")
```

함수 이름은 `프로시저 브라우저` 대화상자에서도 확인할 수 있습니다.

<a id="90-04-98-a111-01"></a>

#### 그림 90.4.98.a111.1. `프로시저 브라우저` 대화상자 - 추가한 스크립트 - 함수 이름 (Windows) (우리말)
![90-04-98-a111-01](https://github.com/wonder13662/gimp/assets/15767104/988b5ec1-fe75-4931-95ce-503e9a8ab94d)

## 2. 메뉴 라벨(menu label)(필수)
메뉴 라벨은 [이미지 메뉴 바](./03-02-02-02-image-menu.md)의 메뉴에서 보여지는 이름입니다. GIMP(김프) 2.10 버전 이전에는 메뉴 라벨에 메뉴의 위치를 직접 지정해야 했었습니다. 하지만 GIMP(김프) 2.10 버전부터는 메뉴의 위치는 `script-fu-menu-register` 함수의 두번째 인자(parameter)로 넘기도록 바뀌었습니다. 참고로 메뉴의 위치를 설정하는 방법은 [13.3.4.9. 메뉴 위치 등록하기(Registering the Menu Location)](./13-03-04-09-registering_the_menu_location.md)에서 확인할 수 있습니다.

#### 코드 13.3.4.6.a3. 스크립트 예시 - 메뉴 라벨

```scheme
(script-fu-register
  ...
  "Text Box"                                  ;메뉴 라벨(menu label)
  ...
)
(script-fu-menu-register "script-fu-text-box" "<Image>/File/Create/Text")
```

## 3. 스크립트 설명(선택)
스크립트에 대한 설명입니다.

#### 코드 13.3.4.6.a4. 스크립트 예시 - 스크립트 설명

```scheme
(script-fu-register
  ...
  "Creates a simple text box, sized to fit\
    around the user's choice of text,\
    font, font size, and color."              ;함수 설명(description)
  ...
)
(script-fu-menu-register "script-fu-text-box" "<Image>/File/Create/Text")
```

`프로시저 브라우저` 대화상자에서 이 설명을 확인할 수 있습니다.

<a id="90-04-98-a111-02"></a>

#### [그림 90.4.98.a111.2. `프로시저 브라우저` 대화상자 - 추가한 스크립트 - 함수 설명 (Windows) (우리말)](./90-04-98-procedure_browser.md#90-04-98-a111-02)
![90-04-98-a111-02](https://github.com/wonder13662/gimp/assets/15767104/7e5c6482-2d03-4c16-b0a2-2a953f8e4f41)

## 4. 스크립트 작성자 이름(선택)
스크립트 작성자의 이름입니다.

#### 코드 13.3.4.6.a5. 스크립트 예시 - 스크립트 작성자 이름

```scheme
(script-fu-register
  ...
  "Michael Terry"                             ;스크립트 작성자(author)
  ...
)
(script-fu-menu-register "script-fu-text-box" "<Image>/File/Create/Text")
```

`프로시저 브라우저` 대화상자에서 이 설명을 확인할 수 있습니다.

<a id="90-04-98-a111-03"></a>

#### [그림 90.4.98.a111.3. `프로시저 브라우저` 대화상자 - 추가한 스크립트 - 스크립트 작성자 (Windows) (우리말)](./90-04-98-procedure_browser.md#90-04-98-a111-03)
![90-04-98-a111-03](https://github.com/wonder13662/gimp/assets/15767104/0bf15ae7-ba04-4520-906d-70edb71a2162)

## 5. 저작권 정보(선택)
스크립트의 저작권 정보입니다. 

#### 코드 13.3.4.6.a6. 스크립트 예시 - 저작권 정보

```scheme
(script-fu-register
  ...
  "copyright 1997, Michael Terry;\
    2009, the GIMP Documentation Team"        ;저작권 알림(copyright notice)
  ...
)
(script-fu-menu-register "script-fu-text-box" "<Image>/File/Create/Text")
```

`프로시저 브라우저` 대화상자에서 이 설명을 확인할 수 있습니다.

<a id="90-04-98-a111-05"></a>

#### [그림 90.4.98.a111.5. `프로시저 브라우저` 대화상자 - 추가한 스크립트 - 저작권 정보 (Windows) (우리말)](./90-04-98-procedure_browser.md#90-04-98-a111-05)
![90-04-98-a111-05-focus-copyright](https://github.com/wonder13662/gimp/assets/15767104/f2b40d64-ab90-4a94-9de0-85c4ed56b073)

## 6. 작성 날짜와 버전 정보(선택)
스크립트의 작성일과 마지막 버전 정보입니다. 

#### 코드 13.3.4.6.a7. 스크립트 예시 - 작성 날짜와 버전 정보
```scheme
(script-fu-register
  ...
  "October 27, 1997"                          ;작성일(date created)
  ...
)
(script-fu-menu-register "script-fu-text-box" "<Image>/File/Create/Text")
```

`프로시저 브라우저` 대화상자에서 이 설명을 확인할 수 있습니다.

<a id="90-04-98-a111-04"></a>

#### [그림 90.4.98.a111.4. `프로시저 브라우저` 대화상자 - 추가한 스크립트 - 스크립트 작성일 (Windows) (우리말)](./90-04-98-procedure_browser.md#90-04-98-a111-04)
![90-04-98-a111-04](https://github.com/wonder13662/gimp/assets/15767104/a7b325af-72d2-49a9-b99c-0e2345ddca6b)

## 7. 스크립트가 동작하는 이미지 타입(선택)
스크립트가 동작하는 이미지 타입입니다. 선택할 수 있는 값은 다음과 같습니다. 선택하지 않으면 스크립트가 모든 타입에서 동작하는 것으로 설정됩니다.

- RGB
- RGBA
- GRAY
- GRAYA
- INDEXED
- INDEXEDA

#### 코드 13.3.4.6.a8. 스크립트 예시 - 스크립트가 동작하는 이미지 타입

```scheme
(script-fu-register
  ...
  ""                                          ;스크립트가 동작하는 이미지 타입(image type that the script works on)
  ...
)
(script-fu-menu-register "script-fu-text-box" "<Image>/File/Create/Text")
```

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.4.7. 스크립트의 인자를 등록하기(Registering The Script's Parameters)](./13-03-04-07-registering_the_scripts_parameters.md)

[⬅️ 이전: 13.3.4.5. 함수 등록하기(Registering The Function)](./13-03-04-05-registering_the_function.md)

[⬆️ 위: 13.3.4. 첫번째 Script-Fu 스크립트(Your first Script-Fu script)](./13-03-04-00-your-first-script-fu-script.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-first-script.html#idm9883)