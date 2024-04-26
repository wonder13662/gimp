# 13.3.5.3.1. 작업중인 스크립트
지금까지 작업한 스크립트의 내용은 다음과 같습니다.

#### 파일 13.3.5.3.1.a1. 지금까지 작업한 "Text Box" 스크립트
[textbox.scm.zip](https://github.com/wonder13662/gimp/files/15131931/textbox.scm.zip)

```scheme
(define (script-fu-text-box inText inFont inFontSize inTextColor)
  (let*
    (
      ; 지역 변수를 선언합니다.
      ; 새로운 이미지를 만듭니다.
      (theImageWidth  10)
      (theImageHeight 10)
      (theImage (car
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
  )
)

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
(script-fu-menu-register "script-fu-text-box" "<Image>/File/Create/Text")
```

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.5.4. 더티 플래그 지우기(Clearing the Dirty Flag)](./13-03-05-04-00-clearing_the_dirty_flag.md)

[⬅️ 이전: 13.3.5.3. 텍스트 추가하기(Adding the Text)](./13-03-05-03-00-adding_the_text.md)

[⬆️ 위: 13.3.5.3. 텍스트 추가하기(Adding the Text)](./13-03-05-03-00-adding_the_text.md)

[⬆️ 위: 13.3.5. 스크립트 개선하기(Giving our script some guts)](./13-03-05-00-giving-our-script-some-guts.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)