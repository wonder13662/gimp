# 13.4.5. Chip Away

## 1. `파일` → `만들기` → `무늬` → `Chip Away...`

#### 그림 13.4.5.a101. 결과 이미지
![13-04-05-a101-result(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/78e5b2d5-beb8-4224-ad80-7704512326f4)

#### 그림 13.4.5.a102. 메뉴 위치
![13-04-05-a102-menu(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/5664d307-e822-4a2d-857a-df61c26fe31e)

#### 그림 13.4.5.a103. 대화상자
![13-04-05-a103-dialog(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/9b13b75e-5e01-4aec-95ab-d7592fcf21d9)

#### 영상 13.4.5.a104. 전체 과정
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/e4647f1d-57f5-44d5-b76d-4f4b0045b33f"></video>

## 2. `필터` → `알파를 로고로` → `Chip Away...`

#### 그림 13.4.5.a111. 원본 이미지
![13-04-05-a111-source](https://github.com/wonder13662/gimp/assets/15767104/ccdd254c-b7e4-4cc4-91f7-cb9547d377f3)

#### 그림 13.4.5.a112. 결과 이미지
![13-04-05-a112-result](https://github.com/wonder13662/gimp/assets/15767104/af8952e6-2ded-42f8-ac89-7493e593492c)

#### 그림 13.4.5.a113. 메뉴 위치
![13-04-05-a113-menu](https://github.com/wonder13662/gimp/assets/15767104/5f000f59-81d6-4d61-b292-31d69055d142)

#### 그림 13.4.5.a114. 대화상자
![13-04-05-a114-dialog](https://github.com/wonder13662/gimp/assets/15767104/a4700754-3c33-48b1-be72-0d07b561858c)

#### 영상 13.4.5.a115. 전체 과정
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/0f458c5c-6452-4910-a1a0-897d8326279c"></video>

## 3. 스크립트
이 스크립트의 코드는 아래와 같습니다. 스크립트를 수정해서 사용하고 싶다면, [13.2. Script-fu 스크립트 사용하기](./13-02-00-using-script-fu-scripts.md)와 [13.3. Script-fu 튜토리얼](./13-03-00-a-script-fu-tutorial.md)를 참고해주세요.

```
; GIMP - The GNU Image Manipulation Program
; Copyright (C) 1995 Spencer Kimball and Peter Mattis
;
;  Supposed to look vaguely like roughly carved wood. Chipped away if you will.
;
;  Options: Text String - the string to make the logo from
;           Font        - which font to use
;           Font Size   - how big
;           Chip Amount - how rought he chipping is (how spread the bump map is)
;           Blur Amount - the bump layer is blurred slighty by this amount
;           Invert      - whether or not to invert the bumpmap (gives a carved in feel)
;           Drop Shadow - whether or not to draw a drop shadow
;           Keep bump layer? - whether to keep the layer used as the bump map
;           fill bg with pattern? - whether to fill the background with the pattern or leave it white
;           Keep Background - whether or not to remove the background layer
;
;  Adrian Likins  (Adrian@gimp.org)
;  Jan 11, 1998 v1
;
;  see http://www.gimp.org/~adrian/script.html
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
;  Some suggested patterns: Dried mud, 3D green, Slate
;

(define (apply-chip-away-logo-effect img
                                     logo-layer
                                     spread-amount
                                     blur-amount
                                     invert
                                     drop-shadow
                                     keep-bump
                                     bg-fill
                                     keep-back
                                     pattern)
  (let* (
        (width (car (gimp-drawable-width logo-layer)))
        (height (car (gimp-drawable-height logo-layer)))
        (bg-layer (car (gimp-layer-new img width height RGB-IMAGE "Background" 100 NORMAL-MODE)))
        (bump-layer (car (gimp-layer-new img width height RGBA-IMAGE "Bump Layer" 100 NORMAL-MODE)))
        )

    (gimp-context-push)
    (gimp-context-set-defaults)

    (script-fu-util-image-resize-from-layer img logo-layer)
    (script-fu-util-image-add-layers img bump-layer bg-layer)
    (gimp-layer-set-lock-alpha logo-layer TRUE)
    (gimp-context-set-pattern pattern)

    (gimp-context-set-background '(255 255 255))
    (gimp-selection-all img)

    (if (= bg-fill TRUE)
        (gimp-edit-bucket-fill bg-layer
                               PATTERN-BUCKET-FILL NORMAL-MODE
                               100 255 FALSE 1 1)
        (gimp-edit-fill bg-layer BACKGROUND-FILL)
    )

    (gimp-selection-all img)
    (gimp-edit-clear bump-layer)
    (gimp-selection-none img)
    (gimp-image-select-item img CHANNEL-OP-REPLACE logo-layer)
    (gimp-edit-fill bump-layer BACKGROUND-FILL)
    (gimp-edit-bucket-fill logo-layer
                           PATTERN-BUCKET-FILL NORMAL-MODE 100 255 FALSE 1 1)
    (gimp-selection-none img)

    (gimp-layer-set-lock-alpha bump-layer FALSE)
    (plug-in-spread RUN-NONINTERACTIVE img bump-layer spread-amount spread-amount)
    (gimp-image-select-item img CHANNEL-OP-REPLACE bump-layer)
    (plug-in-gauss-rle RUN-NONINTERACTIVE img bump-layer blur-amount TRUE TRUE)

    (gimp-selection-none img)

    (plug-in-bump-map RUN-NONINTERACTIVE img logo-layer bump-layer
                      135.00 25.0 60 0 0 0 0 TRUE invert 1)

    (gimp-item-set-visible bump-layer FALSE)

     (if (= drop-shadow TRUE)
        (begin
          (let* ((shadow-layer (car (gimp-layer-new img width height RGBA-IMAGE "Shadow layer" 100 NORMAL-MODE))))
            (gimp-image-set-active-layer img logo-layer)
            (script-fu-util-image-add-layers img shadow-layer)
            (gimp-selection-all img)
            (gimp-edit-clear shadow-layer)
            (gimp-selection-none img)
            (gimp-image-select-item img CHANNEL-OP-REPLACE logo-layer)
            (gimp-context-set-background '(0 0 0))
            (gimp-edit-fill shadow-layer BACKGROUND-FILL)
            (gimp-selection-none img)
            (plug-in-gauss-rle RUN-NONINTERACTIVE img shadow-layer 5 TRUE TRUE)
            (gimp-layer-translate shadow-layer 6 6))))

     (if (= keep-bump FALSE)
         (gimp-image-remove-layer img bump-layer))

     (if (= keep-back FALSE)
         (gimp-image-remove-layer img bg-layer))

    (gimp-context-pop)
  )
)

(define (script-fu-chip-away-logo-alpha img
                                        logo-layer
                                        spread-amount
                                        blur-amount
                                        invert
                                        drop-shadow
                                        keep-bump
                                        bg-fill
                                        keep-back
                                        pattern)
  (begin
    (gimp-image-undo-group-start img)
    (apply-chip-away-logo-effect img logo-layer spread-amount blur-amount
                                 invert drop-shadow keep-bump bg-fill
                                 keep-back pattern)
    (gimp-image-undo-group-end img)
    (gimp-displays-flush)
  )
)

(script-fu-register "script-fu-chip-away-logo-alpha"
  _"Chip Awa_y..."
  _"Add a chipped woodcarving effect to the selected region (or alpha)"
  "Adrian Likins <adrian@gimp.org>"
  "Adrian Likins <adrian@gimp.org>"
  "1997"
  "RGBA"
  SF-IMAGE      "Image"                 0
  SF-DRAWABLE   "Drawable"              0
  SF-ADJUSTMENT _"Chip amount"          '(30 0 200 1 10 0 1)
  SF-ADJUSTMENT _"Blur amount"          '(3 1 100 1 10 1 0)
  SF-TOGGLE     _"Invert"               FALSE
  SF-TOGGLE     _"Drop shadow"          TRUE
  SF-TOGGLE     _"Keep bump layer"      FALSE
  SF-TOGGLE     _"Fill BG with pattern" TRUE
  SF-TOGGLE     _"Keep background"      TRUE
  SF-PATTERN    _"Pattern"              "Burlwood"
)

(script-fu-menu-register "script-fu-chip-away-logo-alpha"
                         "<Image>/Filters/Alpha to Logo")


(define (script-fu-chip-away-logo text
                                  font
                                  font-size
                                  spread-amount
                                  blur-amount
                                  invert
                                  drop-shadow
                                  keep-bump
                                  bg-fill
                                  keep-back
                                  pattern)
  (let* ((img (car (gimp-image-new 256 256 RGB)))
         (text-layer (car (gimp-text-fontname img -1 0 0
                                     text 30 TRUE font-size PIXELS font))))
    (gimp-image-undo-disable img)
    (apply-chip-away-logo-effect img text-layer spread-amount blur-amount
                                 invert drop-shadow keep-bump bg-fill
                                 keep-back pattern)
    (gimp-image-undo-enable img)
    (gimp-display-new img)
  )
)

(script-fu-register "script-fu-chip-away-logo"
  _"Chip Awa_y..."
  _"Create a logo resembling a chipped wood carving"
  "Adrian Likins <adrian@gimp.org>"
  "Adrian Likins <adrian@gimp.org>"
  "1997"
  ""
  SF-STRING     _"Text"                 "Sloth"
  SF-FONT       _"Font"                 "RoostHeavy"
  SF-ADJUSTMENT _"Font size (pixels)"   '(200 2 1000 1 10 0 1)
  SF-ADJUSTMENT _"Chip amount"          '(30 0 200 1 10 0 1)
  SF-ADJUSTMENT _"Blur amount"          '(3 1 100 1 10 1 0)
  SF-TOGGLE     _"Invert"               FALSE
  SF-TOGGLE     _"Drop shadow"          TRUE
  SF-TOGGLE     _"Keep bump layer"      FALSE
  SF-TOGGLE     _"Fill BG with pattern" TRUE
  SF-TOGGLE     _"Keep background"      TRUE
  SF-PATTERN    _"Pattern"              "Burlwood"
)

(script-fu-menu-register "script-fu-chip-away-logo"
                         "<Image>/File/Create/Logos")
```

***

## 다른 페이지로 가기
[➡️ 다음: ?]()

[⬅️ 이전: 13.4.4. Chalk](./13-04-04-chalk.md)

[⬆️ 위: 13.4. 스크립트 예제](./13-04-00-script_examples.md)

[⬆️ 위: 13. 스크립팅](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-text.html#idm7428)
