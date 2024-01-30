;디버깅 기능
(define (here x)(gimp-message(string-append " >>> " (number->string x) " <<<")))
;디버깅 기능
(define (err msg)(gimp-message(string-append " >>> " msg " <<<"))(quit))

(define (script-fu-focus-box image layer padding thickness)
  (let*
    (
      ; define our local variables
      (theForegroundColor (car (gimp-context-get-foreground)))
      (hasSelection (car (gimp-selection-bounds image)))
    ) ;end of our local variables

    (gimp-undo-push-group-start image)

    ;외곽선 색상을 설정합니다
    (gimp-context-set-foreground '(255 0 255))

    ;사용자가 지정한 선택 영역을 padding 값만큼 늘립니다
    (gimp-selection-grow image padding)
    (script-fu-selection-rounded-rectangle image layer 0 0)

    ;선택영역을 전경색으로 채웁니다
    (gimp-edit-fill layer FILL-FOREGROUND)

    ;외곽선을 만들기 위해 내부를 축소하여 지웁니다.
    (gimp-selection-shrink image thickness)
    (gimp-drawable-edit-clear layer)

    ;전경색을 원래 색상으로 돌려놓습니다
    (gimp-context-set-foreground theForegroundColor)

    ;선택 영역을 해제합니다
    (gimp-selection-none image)

    ;임시저장한 GIMP의 설정으로 돌려놓습니다
    ;(gimp-context-push)

    (gimp-undo-push-group-end image)

    ;바뀐 부분을 이미지에 적용합니다
    (gimp-displays-flush)

    ;다이얼로그를 닫습니다
    (quit)
  )
)

(script-fu-register
  "script-fu-focus-box" ;function name
  "포커스 테두리 그리기" ;menu label
  "선택영역에 여백 값을 더해 눈에 띄는 외곽선을 그려줍니다" ;description
  "정원덕" ;author
  "copyright 2024, 정원덕" ;copyright notice
  "January 29, 2024" ;date created
  "" ;image type that the script works on
  SF-IMAGE      "Image"     0
  SF-DRAWABLE   "Layer"     0
  SF-ADJUSTMENT "Padding" '(10 0 40 1 10 0 SF-SLIDER)
  SF-ADJUSTMENT "Thickness" '(4 0 8 1 2 0 SF-SLIDER)
)
(script-fu-menu-register "script-fu-focus-box" "<Image>/Filters/WonderKlass")
      