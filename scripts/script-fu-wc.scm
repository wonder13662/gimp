;디버깅 기능
(define (here x)(gimp-message(string-append " >>> " (number->string x) " <<<")))
;디버깅 기능
(define (err msg)(gimp-message(string-append " >>> " msg " <<<"))(quit))

(define (script-fu-wc-get_selection_x image)

  (list (number->string (car (cdr (gimp-selection-bounds image)))))

)

(script-fu-register
  "script-fu-wc-get_selection_x" ;function name
  "선택 영역의 x좌표 가져오기" ;menu label
  "이미지의 활성화 선택 영역의 x좌표를 문자열로 가져옵니다." ;description
  "정원덕" ;author
  "copyright 2024, 정원덕" ;copyright notice
  "September 29, 2024" ;date created
  "" ;image type that the script works on
  SF-IMAGE      "Image"     0
)

; 리스트의 길이를 반환합니다.
(define (length xs)
  (if (null? xs)
      0
      (+ 1 (length (cdr xs)))
  )
)

; 리스트의 n번째 아이템을 반환합니다.
(define (script-fu-wc-get_nth_list_item inList inPosition)
  (if (< 0 inPosition)
    1
    (err "아이템의 번호는 양의 정수여야 합니다.")
  )

  (if (<= 0 (- (length inList) (- inPosition 1))) 
    1
    (err "리스트가 유효하지 않습니다.")
  )

; TODO n번째 아이템을 반환하도록 순회하는 로직이 추가되어야 합니다.

  (car (cdr inList))
)

(script-fu-register
  "script-fu-wc-get_nth_list_item" ;function name
  "리스트의 두번째 아이템 가져오기" ;menu label
  "리스트의 두번째 아이템을 가져옵니다." ;description
  "정원덕" ;author
  "copyright 2024, 정원덕" ;copyright notice
  "September 29, 2024" ;date created
  "" ;image type that the script works on
  SF-VALUE      "List"
)
      