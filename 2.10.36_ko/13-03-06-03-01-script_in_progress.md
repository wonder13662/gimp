# 13.3.6.3.1. 작업중인 스크립트
지금까지 작업한 스크립트의 내용은 다음과 같습니다.

#### 파일 13.3.6.3.1.a1. 지금까지 작업한 "Text Box" 스크립트
[13-03-06-03-01.zip](https://github.com/wonder13662/gimp/files/15140207/13-03-06-03-01.zip)

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

  ;슬라이더(여백 공간)
  SF-ADJUSTMENT  "Buffer amount" '(35 0 100 1 10 1 0)
)

;스크립트가 표시될 메뉴 위치를 설정
(script-fu-menu-register "script-fu-text-box" "<Image>/File/Create/Text")

;Text Box 함수 정의
(define (script-fu-text-box inText inFont inFontSize inTextColor inBufferAmount)
  (let*
    (
      ;지역 변수를 선언합니다.
      ;새로운 이미지를 만듭니다.
      (theImageWidth  10)
      (theImageHeight 10)
      (theImage
        (car
          (gimp-image-new
            theImageWidth
            theImageHeight
            RGB
          )
        )
      )
      ;텍스트를 저장하는 변수입니다.
      ;텍스트는 나중에 만들 것입니다.
      (theText)

      ;여백 공간
      (theBuffer)

      ;이미지에 새로운 레이어를 만듭니다.
      (theLayer
        (car
          (gimp-layer-new
            theImage
            theImageWidth
            theImageHeight
            RGB-IMAGE
            "layer 1"
            100
            LAYER-MODE-NORMAL
          )
        )
      )
    ) ;지역변수 끝

    ;새 레이어를 이미지에 추가
    (gimp-image-insert-layer theImage theLayer 0 0)

    ;전경색, 배경색 바꾸기
    (gimp-context-set-background '(255 255 255) )
    (gimp-context-set-foreground inTextColor)

    ;이미지에 텍스트 추가
    (gimp-drawable-fill theLayer BACKGROUND-FILL)

    ;이미지에 텍스트 추가하기
    (set! theText
      (car
        (gimp-text-fontname
          theImage theLayer
          0 0
          inText
          0
          TRUE
          inFontSize PIXELS
          inFont
        )
      )
    )

    ;이미지를 텍스트에 맞추기
    (set! theImageWidth   (car (gimp-drawable-width  theText) ) )
    (set! theImageHeight  (car (gimp-drawable-height theText) ) )

    (gimp-image-resize theImage theImageWidth theImageHeight 0 0)
    (gimp-layer-resize theLayer theImageWidth theImageHeight 0 0)

    ;새 이미지를 이미지 창에 띄우기
    (gimp-display-new theImage)

    ;더티 플래그 지우기
    (gimp-image-clean-all theImage)
  )
)
```

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.6.4. 새 코드 추가하기(Adding the New Code)](./13-03-06-04-adding_the_new_code.md)

[⬅️ 이전: 13.3.6.3. 매개변수와 등록 함수 수정하기(Modifying the Parameters and the Regitration Function)](./13-03-06-03-00-modifying_the_parameters_and_the_regitration_function.md)

[⬆️ 위: 13.3.6.3. 매개변수와 등록 함수 수정하기(Modifying the Parameters and the Regitration Function)](./13-03-06-03-00-modifying_the_parameters_and_the_regitration_function.md)

[⬆️ 위: 13.3.5. 스크립트 개선하기(Giving our script some guts)](./13-03-05-00-giving-our-script-some-guts.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)