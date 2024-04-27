# 13.3.4.9.1. 작업중인 스크립트
지금까지 작업한 스크립트의 내용은 다음과 같습니다.

#### 파일 13.3.4.9.1.a1. 지금까지 작업한 "Text Box" 스크립트

```scheme
; 스크립트를 프로시저 데이터베이스(Procedure Database)에 등록
(script-fu-register
  "script-fu-text-box"                        ;스크립트의 진입점 함수의 이름(entry-point function name)
  "Text Box"                                  ;메뉴 라벨(menu label)
  "Creates a simple text box, sized to fit\
    around the user's choice of text,\
    font, font size, and color."              ;스크립트 설명(description)
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

; 스크립트가 표시될 메뉴 위치를 설정
(script-fu-menu-register "script-fu-text-box" "<Image>/File/Create/Text")

; Text Box 함수 정의
(define (script-fu-text-box inText inFont inFontSize inTextColor))
```

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.5. 스크립트 개선하기(Giving our script some guts)](./13-03-05-00-giving-our-script-some-guts.md)

[⬅️ 이전: 13.3.4.9. 메뉴 위치 등록하기(Registering the Menu Location)](./13-03-04-09-00-registering_the_menu_location.md)

[⬆️ 위: 13.3.5.2. 이미지에 새 레이어 추가하기(Adding a New Layer to the Image)](./13-03-05-02-00-adding_a_new_layer_to_the_image.md)

[⬆️ 위: 13.3.5. 스크립트 개선하기(Giving our script some guts)](./13-03-05-00-giving-our-script-some-guts.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)