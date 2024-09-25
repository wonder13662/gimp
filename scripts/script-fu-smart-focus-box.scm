;디버깅 기능
(define (here line)(gimp-message(string-append " >>> " (number->string line) " <<<")))
;사용 예시
;(here 10)

;디버깅 기능
(define (err msg)(gimp-message(string-append " >>> " msg " <<<"))(quit))
;사용 예시
;(err "TEST")

(define (script-fu-smart-focus-box image layer padding thickness)
  (let*
    (
      ; define our local variables
      (theForegroundColor (car (gimp-context-get-foreground)))
      (hasSelection (car (gimp-selection-bounds image)))
    ) ;end of our local variables

    ;(gimp-undo-push-group-start image)

;디버깅: 숫자를 문자로 바꾸기
;(gimp-message (number->string 10))

;이미지에 포함된 선택영역의 왼쪽 x좌표값 가져오기 (이걸 함수로 만들어야겠다.)
;(gimp-message (number->string (car (cdr (gimp-selection-bounds image)))))
;(gimp-message (car (script-fu-wc-get_selection_x image)))
;(gimp-message (car (script-fu-wc-get_second_list_item '("A" "B" "C"))))
;(gimp-message (script-fu-wc-get_nth_list_item '("A" "B" "C") 2))
(gimp-message (script-fu-wc-get_nth_list_item '("A" "B") -2))
;(gimp-message (script-fu-wc-get_nth_list_item '()))
;(gimp-message (script-fu-wc-get_nth_list_item '("A")))

;TODO 여기서 다시 시작!

(err "TEST3")

;사용자가 지정한 선택 영역의 이미지를 복사해 별도의 레이어로 만듭니다.
;(gimp-edit-copy image)


;별도의 레이어의 외곽의 색을 추출합니다.

;별도의 레이어를 추출한 색을 기준으로 선택합니다.

;선택을 반전합니다.

;선택 영역을 삭제합니다.

;콘텐츠 영역만큼 레이어를 축소합니다.

;레이어의 크기의 선택영역을 만듭니다. 이 선택 영역을 기준으로 외곽선을 그립니다.

    ;외곽선 색상을 설정합니다
    ;(gimp-context-set-foreground '(255 0 255))

    ;사용자가 지정한 선택 영역을 padding 값만큼 늘립니다
    ;(gimp-selection-grow image padding)
    ;(script-fu-selection-rounded-rectangle image layer 0 0)

    ;선택영역을 전경색으로 채웁니다
    ;(gimp-edit-fill layer FILL-FOREGROUND)

    ;외곽선을 만들기 위해 내부를 축소하여 지웁니다.
    ;(gimp-selection-shrink image thickness)
    ;(gimp-drawable-edit-clear layer)

    ;전경색을 원래 색상으로 돌려놓습니다
    ;(gimp-context-set-foreground theForegroundColor)

    ;선택 영역을 해제합니다
    ;(gimp-selection-none image)

    ;임시저장한 GIMP의 설정으로 돌려놓습니다
    ;(gimp-context-push)

    ;(gimp-undo-push-group-end image)

    ;바뀐 부분을 이미지에 적용합니다
    ;(gimp-displays-flush)

    ;다이얼로그를 닫습니다
    (quit)
  )
)

;스크립트 등록
(script-fu-register
  "script-fu-smart-focus-box" ;function name
  "스마트 포커스 테두리 그리기" ;menu label
  "선택영역에 여백 값을 더해 눈에 띄는 외곽선을 그려줍니다" ;description
  "정원덕" ;author
  "copyright 2024, 정원덕" ;copyright notice
  "September 25, 2024" ;date created
  "" ;image type that the script works on
  SF-IMAGE      "Image"     0
  SF-DRAWABLE   "Layer"     0
  SF-ADJUSTMENT "Padding" '(10 0 40 1 10 0 SF-SLIDER)
  SF-ADJUSTMENT "Thickness" '(4 0 8 1 2 0 SF-SLIDER)
)
(script-fu-menu-register "script-fu-smart-focus-box" "<Image>/Filters/WonderKlass")
      