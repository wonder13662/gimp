# 13.3.4.5.1. 작업중인 스크립트
지금까지 작업한 스크립트의 내용은 다음과 같습니다.

#### 파일 13.3.4.5.1.a1. 지금까지 작업한 "Text Box" 스크립트
[13-03-04-05-01.zip](https://github.com/wonder13662/gimp/files/15140168/13-03-04-05-01.zip)

```scheme
;스크립트를 프로시저 데이터베이스(Procedure Database)에 등록
(script-fu-register
  ;스크립트의 진입점 함수의 이름(entry-point function name)
  "script-fu-text-box"

  ;메뉴 라벨(menu label)
  "Text Box"

  ;스크립트 설명(description)
  "Creates a simple text box, sized to fit\
    around the user's choice of text,\
    font, font size, and color."

  ;스크립트 작성자(author)
  "Michael Terry"

  ;저작권 알림(copyright notice)
  "copyright 1997, Michael Terry;\
    2009, the GIMP Documentation Team"
  
  ;작성일(date created)
  "October 27, 1997"

  ;스크립트가 동작하는 이미지 타입(image type that the script works on)
  ""

  ;프롬프트의 사용자 입력 문자열 변수(a string variable)
  SF-STRING      "Text"          "Text Box"

  ;프롬프트의 사용자 입력 글꼴(a font variable)
  SF-FONT        "Font"          "Charter"

  ;프롬프트의 사용자 입력 글꼴 크기(a spin-button)
  SF-ADJUSTMENT  "Font size"     '(50 1 1000 1 10 0 1)

  ;프롬프트의 사용자 입력 색상(color variable)                                            
  SF-COLOR       "Color"         '(0 0 0)
)

;Text Box 함수 정의
(define (script-fu-text-box inText inFont inFontSize inTextColor))
```

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.4.6. 스크립트를 등록하는 과정(Steps For Registering The Script)](./13-03-04-06-steps_for_registering_the_script.md)

[⬅️ 이전: 13.3.4.5. 함수 등록하기(Registering The Function)](./13-03-04-05-00-registering_the_function.md)

[⬆️ 위: 13.3.5.2. 이미지에 새 레이어 추가하기(Adding a New Layer to the Image)](./13-03-05-02-00-adding_a_new_layer_to_the_image.md)

[⬆️ 위: 13.3.5. 스크립트 개선하기(Giving our script some guts)](./13-03-05-00-giving-our-script-some-guts.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)