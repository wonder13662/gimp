# 13.3.4.5. 함수 등록하기(Registering The Function)
GIMP(김프)에 작업한 함수를 등록해봅시다. `script-fu-register` 함수를 호출해서 등록할 수 있습니다.

GIMP(김프)가 이 스크립트를 읽으면, `script-fu-register` 함수를 실행합니다. 이 함수는 스크립트를 [프로시저 데이터베이스(Procedural database)](./19-glossaryx-procedural_database.md)에 등록합니다.

`script-fu-register` 함수는 스크립트 어디든 위치시킬수 있습니다. 보통은 스크립트의 가장 아래쪽에 둡니다.

메인 함수와 `script-fu-register` 함수가 있는 스크립트의 내용은 아래와 같습니다. 인자(Parameter)에 대해서는 [13.3.4.6. 스크립트를 등록하는 과정(Steps For Registering The Script)](./13-03-04-06-steps_for_registering_the_script.md)에서 설명하겠습니다.

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

작성한 스크립트를 확장자가 [`.scm`](./19-glossaryx-scm.md)인 파일로 스크립트 디렉토리에 저장하였다면, [이미지 메뉴 바](./03-02-02-02-image-menu.md)의 `필터` → `Script-Fu` → `스크립트 새로고침` 메뉴를 클릭해서 GIMP(김프)를 재시작하지 않고 스크립트를 읽어 들입니다. 이 새로운 스크립트는 [이미지 메뉴 바](./03-02-02-02-image-menu.md)의 `파일` → `만들기` → `Text` → `Text Box`에서 확인할 수 있습니다.

<a id="90-01-09-16-02-a1"></a>

#### [그림 90.1.9.16.2.a1. `필터` → `Script-Fu` → `스크립트 새로고침` (Windows)](./90-01-09-16-02-refresh_scripts.md#90-01-09-16-02-a1)
![90-01-09-16-02-a1](https://github.com/wonder13662/gimp/assets/15767104/7acc7e38-7cbc-449d-bd21-de2b19c10d9a)

[다른 운영체제와 언어의 `필터` → `Script-Fu` → `스크립트 새로고침` 확인하기](./90-01-09-16-02-refresh_scripts.md#90-01-09-16-02-a2)

#### 그림 13.3.4.5.a1. `파일` → `만들기` → `Text` → `Text Box`
![13-03-04-05-a1](https://github.com/wonder13662/gimp/assets/15767104/4f11ae5b-7199-40b4-9402-e1bfbfa0bb47)

새로운 스크립트를 호출하면 실제로는 아무런 동작도 하지 않습니다. 하지만 프롬프트 대화상자를 볼 수 있습니다.

#### 그림 13.3.4.5.a2. `Text Box` 대화상자
![13-03-04-05-a2](https://github.com/wonder13662/gimp/assets/15767104/252d3a23-be1d-4d7c-9b04-5c29d0ad8b54)

마지막으로, [이미지 메뉴 바](./03-02-02-02-image-menu.md)의 `도움말` → `프로시저 찾아보기` 메뉴를 클릭하면, 작업한 스크립트가 등록된 것을 확인할 수 있습니다.

<a id="90-01-11-07-a1"></a>

#### [그림 90.1.11.7.a1. `도움말` → `프로시저 찾아보기`](./90-01-11-07-procedure_browser.md#90-01-11-07-a1)
![90-01-11-07-a1](https://github.com/wonder13662/gimp/assets/15767104/a000dc6a-07b3-497f-a76d-ab8baa918332)

<a id="90-04-98-a111"></a>

#### [그림 90.4.98.a111. `프로시저 브라우저` 대화상자 - 추가한 스크립트 확인 (Windows) (우리말)](./90-04-98-procedure_browser.md#90-04-98-a111)
![90-04-98-a111](https://github.com/wonder13662/gimp/assets/15767104/e35a44e3-27fc-4b62-82b2-2496b012b11b)

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.4.6. 스크립트를 등록하는 과정(Steps For Registering The Script)](./13-03-04-06-steps_for_registering_the_script.md)

[⬅️ 이전: 13.3.4.4. 이름 규칙(Naming Conventions)](./13-03-04-04-naming_conventions.md)

[⬆️ 위: 13.3.4. 첫번째 Script-Fu 스크립트(Your first Script-Fu script)](./13-03-04-00-your-first-script-fu-script.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-first-script.html#idm9859)