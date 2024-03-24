# 13.4.10. Neon Logo

## 1. `파일` → `만들기` → `로고` → `Neon Logo...`

#### 그림 13.4.10.a101. 결과 이미지
![13-04-10-a101-result](https://github.com/wonder13662/gimp/assets/15767104/f0ddccc7-afa3-4c6d-92d6-c9e4dfb7d30b)

#### 그림 13.4.10.a102. 메뉴 위치
![13-04-10-a102-menu](https://github.com/wonder13662/gimp/assets/15767104/f15dd55a-d0b4-4b59-9355-9ce6fea08ec2)

#### 그림 13.4.10.a103. 대화상자
![13-04-10-a103-dialog](https://github.com/wonder13662/gimp/assets/15767104/7a6dd6d9-ea63-4b01-a057-e1909f31457f)

#### 영상 13.4.10.a104. 전체 과정
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/465f7e51-24f9-4463-bf69-b59d25c08788"></video>

## 2. `필터` → `알파를 로고로` → `Neon Logo...`

#### 그림 13.4.10.a111. 원본 이미지
![13-04-10-a111-source](https://github.com/wonder13662/gimp/assets/15767104/a4425603-f822-4a73-8662-82374b825c1b)

#### 그림 13.4.10.a112. 결과 이미지
![13-04-10-a112-result](https://github.com/wonder13662/gimp/assets/15767104/4452bc02-fdcf-44a8-97be-bcbf279368af)

#### 그림 13.4.10.a113. 메뉴 위치
![13-04-10-a113-menu](https://github.com/wonder13662/gimp/assets/15767104/2750fc5e-440d-41d8-aeb7-c996c888cde2)

#### 그림 13.4.10.a114. 대화상자
![13-04-10-a114-dialog](https://github.com/wonder13662/gimp/assets/15767104/bb1110f0-c025-47a3-9d42-ab19b4142561)

#### 영상 13.4.10.a115. 전체 과정
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/f66bb6a2-4112-4fde-9027-4e22796623e9"></video>

## 3. 스크립트
이 스크립트의 코드는 아래와 같습니다. 스크립트를 수정해서 사용하고 싶다면, [13.2. Script-fu 스크립트 사용하기](./13-02-00-using-script-fu-scripts.md)와 [13.3. Script-fu 튜토리얼](./13-03-00-a-script-fu-tutorial.md)를 참고해주세요.

```
; GIMP - The GNU Image Manipulation Program
; Copyright (C) 1995 Spencer Kimball and Peter Mattis
;
; This program is free software: you can redistribute it and/or modify
; it under the terms of the GNU General Public License as published by
; the Free Software Foundation; either version 3 of the License, or
; (at your option) any later version.
;
; This program is distributed in the hope that it will be useful,
; but WITHOUT ANY WARRANTY; without even the implied warranty of
; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
; GNU General Public License for more details.
;
; You should have received a copy of the GNU General Public License
; along with this program.  If not, see <http://www.gnu.org/licenses/>.
;
; NEON
; Create a text effect that simulates neon lighting

(define (apply-neon-logo-effect img
                                tube-layer
                                size
                                bg-color
                                glow-color
                                shadow)

  (define (set-pt a index x y)
    (begin
      (aset a (* index 2) x)
      (aset a (+ (* index 2) 1) y)))

  (define (neon-spline1)
    (let* ((a (cons-array 6 'byte)))
      (set-pt a 0 0 0)
      (set-pt a 1 127 145)
      (set-pt a 2 255 255)
      a))

  (define (neon-spline2)
    (let* ((a (cons-array 6 'byte)))
      (set-pt a 0 0 0)
      (set-pt a 1 110 150)
      (set-pt a 2 255 255)
      a))

  (define (neon-spline3)
    (let* ((a (cons-array 6 'byte)))
      (set-pt a 0 0 0)
      (set-pt a 1 100 185)
      (set-pt a 2 255 255)
      a))

  (define (neon-spline4)
    (let* ((a (cons-array 8 'byte)))
      (set-pt a 0 0 0)
      (set-pt a 1 64 64)
      (set-pt a 2 127 192)
      (set-pt a 3 255 255)
      a))

  (define (find-hue-offset color)
    (let* (
          (R (car color))
          (G (cadr color))
          (B (caddr color))
          (max-val (max R G B))
          (min-val (min R G B))
          (delta (- max-val min-val))
          (hue 0)
          )
      (if (= delta 0)
        0
        (begin
          (cond
            ((= max-val R)
             (set! hue (/ (- G B) (* 1.0 delta))))
            ((= max-val G)
             (set! hue (+ 2 (/ (- B R) (* 1.0 delta)))))
            ((= max-val B)
             (set! hue (+ 4 (/ (- R G) (* 1.0 delta)))))
          )
          (set! hue (* hue 60))
          (if (< hue 0) (set! hue (+ hue 360)))
          (if (> hue 360) (set! hue (- hue 360)))
          (if (> hue 180) (set! hue (- hue 360)))
          hue
        )
      )
    )
  )

  (let* (
        (tube-hue (find-hue-offset glow-color))
        (shrink (/ size 14))
        (grow (/ size 40))
        (feather (/ size 5))
        (feather1 (/ size 25))
        (feather2 (/ size 12))
        (inc-shrink (/ size 100))
        (shadow-shrink (/ size 40))
        (shadow-feather (/ size 20))
        (shadow-offx (/ size 10))
        (shadow-offy (/ size 10))
        (width (car (gimp-drawable-width tube-layer)))
        (height (car (gimp-drawable-height tube-layer)))
        (glow-layer (car (gimp-layer-new img width height RGBA-IMAGE
                                         "Neon Glow" 100 NORMAL-MODE)))
        (bg-layer (car (gimp-layer-new img width height RGB-IMAGE
                                       "Background" 100 NORMAL-MODE)))
        (shadow-layer (if (= shadow TRUE)
                          (car (gimp-layer-new img width height RGBA-IMAGE
                                               "Shadow" 100 NORMAL-MODE))
                          0))
        (selection 0)
        (max_shrink 0)
        )

    (gimp-context-push)
    (gimp-context-set-defaults)

    ; ensure that we don't shrink selection so much
    ; that we create an empty selection.
    (gimp-image-select-item img CHANNEL-OP-REPLACE tube-layer)
    (while (= (car (gimp-selection-is-empty img)) FALSE)
      (begin
        (gimp-selection-shrink img 1)
              (set! max_shrink (+ max_shrink 1))
              ; escape early if we know that we can perform
        ; as much shrink steps as we want
        (if (> max_shrink shrink)
            (gimp-selection-none img))
      )
    )
    (if (= (car (gimp-selection-is-empty img)) TRUE)
      (if (> max_shrink 0)
          (set! max_shrink (- max_shrink 1))))
    ; clamp upper bounds to valid shrink step range
    (if (> shrink max_shrink)
      (set! shrink max_shrink))
    (if (> inc-shrink (/ max_shrink 3))
      (set! inc-shrink (/ max_shrink 3)))
    (if (> shadow-shrink max_shrink)
      (set! shadow-shrink max_shrink))

    (script-fu-util-image-resize-from-layer img tube-layer)
    (script-fu-util-image-add-layers img glow-layer bg-layer)
    (if (not (= shadow 0))
        (begin
          (gimp-image-insert-layer img shadow-layer 0 -1)
          (gimp-edit-clear shadow-layer)))

    (gimp-context-set-background '(0 0 0))
    (gimp-image-select-item img CHANNEL-OP-REPLACE tube-layer)
    (set! selection (car (gimp-selection-save img)))
    (gimp-selection-none img)

    (gimp-edit-clear glow-layer)
    (gimp-edit-clear tube-layer)

    (gimp-context-set-background bg-color)
    (gimp-edit-fill bg-layer BACKGROUND-FILL)

    (gimp-image-select-item img CHANNEL-OP-REPLACE selection)
    (gimp-context-set-background '(255 255 255))
    (gimp-edit-fill tube-layer BACKGROUND-FILL)
    (gimp-selection-shrink img shrink)
    (gimp-context-set-background '(0 0 0))
    (gimp-edit-fill selection BACKGROUND-FILL)
    (gimp-edit-clear tube-layer)

    (gimp-selection-none img)
    (if (not (= feather1 0))
      (plug-in-gauss-rle RUN-NONINTERACTIVE img tube-layer feather1 TRUE TRUE))
    (gimp-image-select-item img CHANNEL-OP-REPLACE selection)
    (if (not (= feather2 0))
      (plug-in-gauss-rle RUN-NONINTERACTIVE img tube-layer feather2 TRUE TRUE))

    (gimp-selection-feather img inc-shrink)
    (gimp-selection-shrink img inc-shrink)
    (gimp-curves-spline tube-layer 4 6 (neon-spline1))

    (gimp-image-select-item img CHANNEL-OP-REPLACE selection)
    (gimp-selection-feather img inc-shrink)
    (gimp-selection-shrink img (* inc-shrink 2))
    (gimp-curves-spline tube-layer 4 6 (neon-spline2))

    (gimp-image-select-item img CHANNEL-OP-REPLACE selection)
    (gimp-selection-feather img inc-shrink)
    (gimp-selection-shrink img (* inc-shrink 3))
    (gimp-curves-spline tube-layer 4 6 (neon-spline3))

    (gimp-layer-set-lock-alpha tube-layer 1)
    (gimp-image-select-item img CHANNEL-OP-REPLACE tube-layer)
    (gimp-selection-invert img)
    (gimp-context-set-background glow-color)
    (gimp-edit-fill tube-layer BACKGROUND-FILL)

    (gimp-selection-none img)
    (gimp-layer-set-lock-alpha tube-layer 0)
    (gimp-curves-spline tube-layer 4 8 (neon-spline4))

    (gimp-image-select-item img CHANNEL-OP-REPLACE selection)
    (gimp-selection-grow img grow)
    (gimp-selection-invert img)
    (gimp-edit-clear tube-layer)
    (gimp-selection-invert img)

    (gimp-selection-feather img feather)
    (gimp-edit-fill glow-layer BACKGROUND-FILL)

    (if (not (= shadow 0))
        (begin
          (gimp-image-select-item img CHANNEL-OP-REPLACE selection)
          (gimp-selection-grow img grow)
          (gimp-selection-shrink img shadow-shrink)
          (gimp-selection-feather img shadow-feather)
          (gimp-selection-translate img shadow-offx shadow-offy)
          (gimp-context-set-background '(0 0 0))
          (gimp-edit-fill shadow-layer BACKGROUND-FILL)))
    (gimp-selection-none img)

    (gimp-item-set-name tube-layer "Neon Tubes")
    (gimp-image-remove-channel img selection)

    (gimp-context-pop)
  )
)

(define (script-fu-neon-logo-alpha img
                                   tube-layer
                                   size
                                   bg-color
                                   glow-color
                                   shadow)
  (begin
    (gimp-image-undo-group-start img)
    (apply-neon-logo-effect img tube-layer (* size 5) bg-color glow-color shadow)
    (gimp-image-undo-group-end img)
    (gimp-displays-flush)
  )
)

(script-fu-register "script-fu-neon-logo-alpha"
  _"N_eon..."
  _"Convert the selected region (or alpha) into a neon-sign like object"
  "Spencer Kimball"
  "Spencer Kimball"
  "1997"
  "RGBA"
  SF-IMAGE      "Image"                 0
  SF-DRAWABLE   "Drawable"              0
  SF-ADJUSTMENT _"Effect size (pixels)" '(30 1 200 1 10 0 1)
  SF-COLOR      _"Background color"     "black"
  SF-COLOR      _"Glow color"           '(38 211 255)
  SF-TOGGLE     _"Create shadow"        FALSE
)

(script-fu-menu-register "script-fu-neon-logo-alpha"
                         "<Image>/Filters/Alpha to Logo")

(define (script-fu-neon-logo text
                             size
                             font
                             bg-color
                             glow-color
                             shadow)
  (let* (
        (img (car (gimp-image-new 256 256 RGB)))
        (border (/ size 4))
        (tube-layer (car (gimp-text-fontname img -1 0 0 text border TRUE size PIXELS font)))
        )
    (gimp-image-undo-disable img)
    (apply-neon-logo-effect img tube-layer size bg-color glow-color shadow)
    (gimp-image-undo-enable img)
    (gimp-display-new img)
  )
)

(script-fu-register "script-fu-neon-logo"
  _"N_eon..."
  _"Create a logo in the style of a neon sign"
  "Spencer Kimball"
  "Spencer Kimball"
  "1997"
  ""
  SF-STRING     _"Text"               "NEON"
  SF-ADJUSTMENT _"Font size (pixels)" '(150 2 1000 1 10 0 1)
  SF-FONT       _"Font"               "Blippo"
  SF-COLOR      _"Background color"   "black"
  SF-COLOR      _"Glow color"         '(38 211 255)
  SF-TOGGLE     _"Create shadow"      FALSE
)

(script-fu-menu-register "script-fu-neon-logo"
                         "<Image>/File/Create/Logos")
```

***

## 다른 페이지로 가기
[➡️ 다음: 13.4.8. Imigre-26](./13-04-08-Imigre_26.md)

[⬅️ 이전: 13.4.6. Chrome](./13-04-06-chrome_logo.md)

[⬆️ 위: 13.4. 스크립트 예제](./13-04-00-script_examples.md)

[⬆️ 위: 13. 스크립팅](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-text.html#idm7428)
