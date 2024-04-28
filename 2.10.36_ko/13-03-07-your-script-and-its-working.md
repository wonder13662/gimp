# 13.3.7. 최종 스크립트 결과 확인하기(Your script and its working)

#### 파일 13.3.7.a1. 지금까지 작업한 "Text Box" 스크립트
[13-03-07.zip](https://github.com/wonder13662/gimp/files/15140812/13-03-07.zip)

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

    ;이미지 여백 계산하기
    (set! theBuffer (* theImageHeight (/ inBufferAmount 100) ) )

    ;이미지의 높이와 너비 다시 계산하기
    (set! theImageHeight (+ theImageHeight theBuffer theBuffer) )
    (set! theImageWidth  (+ theImageWidth  theBuffer theBuffer) )

    ;이미지를 텍스트에 맞춰 크기 조정하기
    (gimp-image-resize theImage theImageWidth theImageHeight 0 0)
    (gimp-layer-resize theLayer theImageWidth theImageHeight 0 0)

    ;텍스트 레이어를 이미지 가운데로 옮기기
    (gimp-layer-set-offsets theText theBuffer theBuffer)

    ;떠있는 선택을 레이어로 바꾸기
    (gimp-floating-sel-to-layer theText)

    ;새 이미지를 이미지 창에 띄우기
    (gimp-display-new theImage)

    ;더티 플래그 지우기
    (gimp-image-clean-all theImage)

    ;다른 스크립트에서 TextBox를 사용할 수 있도록 반환값 설정하기
    (list theImage theLayer theText)
  )
)
```



### [Home](./00-home.md)
### [Parent: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)
### [Prev: 13.3.6. 텍스트 박스 스크립트 확장하기(Extending the text box script)](./13-03-06-00-extending-the-text-box-script.md)
### [Next: 14.1.1. Introduction](./14-01-01-introduction.md)
