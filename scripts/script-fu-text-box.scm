;디버깅 기능
(define (here x)(gimp-message(string-append " >>> " (number->string x) " <<<")))
;디버깅 기능
(define (err msg)(gimp-message(string-append " >>> " msg " <<<"))(quit))

(define (script-fu-text-box inImage inLayer inPadding inText inFont inFontSize)
  (let*
    (
      ; define our local variables
      (theForegroundColor (car (gimp-context-get-foreground)))
      ;사용자가 지정한 선택 영역의 여부
      (hasUserSelection (car (gimp-selection-bounds inImage)))
      ;사용자가 지정한 선택 영역의 좌표 정보
      (theUserSelectionBounds (cdr (gimp-selection-bounds inImage)))
      ;사용자가 지정한 선택 영역의 좌표 정보 x
      (theUserSelectionBoundsX (car theUserSelectionBounds))
      ;사용자가 지정한 선택 영역의 좌표 정보 y
      (theUserSelectionBoundsY (car (cdr theUserSelectionBounds)))
      (theTextLayer)
      (theTextLayerPosition 0)
      (theTextBoxWidth 0)
      (theTextBoxHeight 0)
      (theTextBoxLayer)
    ) ;end of our local variables

    ;선택영역이 없다면 중단합니다
    (if (> 1 hasUserSelection) 
        (err "선택영역이 필요합니다. 더 이상 진행할 수 없습니다.")
    )

    (gimp-undo-push-group-start inImage)

    ;사용자의 선택 영역을 해제합니다
    (gimp-selection-none inImage)

    ;현재 GIMP의 설정을 임시저장합니다
    ;(gimp-context-push)

    ;텍스트 색상을 설정합니다
    (gimp-context-set-foreground '(255 255 255))

    ;사용자가 입력한 텍스트를 만듭니다
    (set! theTextLayer
      (car
        (gimp-text-fontname
         inImage
         -1 ;new layer
         theUserSelectionBoundsX
         theUserSelectionBoundsY
         inText
         0 ;border
         TRUE
         inFontSize
         PIXELS
         inFont
        )
      )
    )

    ;텍스트 레이어의 순서(Position)을 구합니다
    (set! 
     theTextLayerPosition
     (car 
      (gimp-image-get-item-position 
       inImage
       theTextLayer
      )
     )
    )

    ;텍스트의 너비와 높이를 구합니다
    (set! theTextBoxWidth   (car (gimp-drawable-width  theTextLayer) ) )
    (set! theTextBoxHeight  (car (gimp-drawable-height theTextLayer) ) )

    ;텍스트 박스를 그릴 새로운 레이어를 만듭니다
    (set!
     theTextBoxLayer
     (car
      (gimp-layer-new 
       inImage
       (car (gimp-image-width inImage))
       (car (gimp-image-height inImage))
       RGBA-IMAGE
       "text-box-bg"
       100 ;opacity
       LAYER-MODE-NORMAL
      )
     ) 
    )

    ;이미지에 새로운 레이어를 추가합니다
    (gimp-image-insert-layer 
     inImage 
     theTextBoxLayer ;layer
     -1 ;parent
     (+ 1 theTextLayerPosition) ;position
    )

    ;텍스트의 좌표에 텍스트 박스를 그릴 선택 영역을 그립니다
    (gimp-image-select-rectangle 
     inImage
     CHANNEL-OP-ADD
     theUserSelectionBoundsX
     theUserSelectionBoundsY
     theTextBoxWidth
     theTextBoxHeight
    )

    ;텍스트의 선택 영역을 inPadding 값만큼 늘립니다
    (gimp-selection-grow inImage inPadding)
    (script-fu-selection-rounded-rectangle inImage inLayer 0 0)


    ;텍스트 박스의 색상을 설정합니다
    (gimp-context-set-foreground '(255 0 255))

    ;선택영역을 전경색으로 채웁니다
    (gimp-edit-fill theTextBoxLayer FILL-FOREGROUND)

    ;선택 영역을 해제합니다
    (gimp-selection-none inImage)

    ;임시저장한 GIMP의 설정으로 돌려놓습니다
    (gimp-context-push)

    (gimp-undo-push-group-end inImage)

    ;바뀐 부분을 이미지에 적용합니다
    (gimp-displays-flush)

    ;다이얼로그를 닫습니다
    (quit)
  )
)

(script-fu-register
  "script-fu-text-box" ;function name
  "텍스트 박스 만들기" ;menu label
  "입력한 텍스트 주변을 감싸는 사각형 배경을 추가해줍니다" ;description
  "정원덕" ;author
  "copyright 2024, 정원덕" ;copyright notice
  "January 29, 2024" ;date created
  "" ;image type that the script works on
  SF-IMAGE      "Image"     0
  SF-DRAWABLE   "Layer"     0
  SF-ADJUSTMENT "Padding" '(10 0 40 1 10 0 SF-SLIDER)
  SF-STRING      "Text"          "Text Box"            ;사용자가 입력하는 텍스트
  SF-FONT        "Font"          "NanumGothicOTF"      ;글꼴
  SF-ADJUSTMENT  "Font size"     '(28 1 200 1 10 0 1)  ;글꼴 크기
)
(script-fu-menu-register "script-fu-text-box" "<Image>/Filters/WonderKlass")
      