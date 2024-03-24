# 13.4.6. Chrome

## 1. `파일` → `만들기` → `무늬` → `Chrome...`

#### 그림 13.4.6.a101. 결과 이미지
![13-04-06-a101-result](https://github.com/wonder13662/gimp/assets/15767104/a9e41829-1163-46c0-bb87-745912060047)

#### 그림 13.4.6.a102. 메뉴 위치
![13-04-06-a102-menu](https://github.com/wonder13662/gimp/assets/15767104/51063c54-588c-4d43-aab2-4dbdcff227fd)

#### 그림 13.4.6.a103. 대화상자
![13-04-06-a103-dialog](https://github.com/wonder13662/gimp/assets/15767104/28e51e7d-756c-4f3d-9b3a-705293945563)

#### 영상 13.4.6.a104. 전체 과정
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/2f87cc60-af47-41e9-908b-01451d1fc7f9"></video>

## 2. `필터` → `알파를 로고로` → `Chrome...`

#### 그림 13.4.6.a111. 원본 이미지
![13-04-06-a111-source](https://github.com/wonder13662/gimp/assets/15767104/02009a13-c6ba-41c4-86ed-3877cba99c4f)

#### 그림 13.4.6.a112. 결과 이미지
![13-04-06-a112-result](https://github.com/wonder13662/gimp/assets/15767104/fa2822d0-5aed-4e63-9401-bf6cd3f49568)

#### 그림 13.4.6.a113. 메뉴 위치
![13-04-06-a113-menu](https://github.com/wonder13662/gimp/assets/15767104/666f2d79-6cf5-42bc-a904-4ed947fe31ab)

#### 그림 13.4.6.a114. 대화상자
![13-04-06-a114-dialog](https://github.com/wonder13662/gimp/assets/15767104/1754a4d5-6f4d-4625-bc71-9589432ace89)

#### 영상 13.4.6.a115. 전체 과정
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/ce759c2c-2409-418f-86b3-b0984b8085b4"></video>

## 3. 스크립트
이 스크립트의 코드는 아래와 같습니다. 스크립트를 수정해서 사용하고 싶다면, [13.2. Script-fu 스크립트 사용하기](./13-02-00-using-script-fu-scripts.md)와 [13.3. Script-fu 튜토리얼](./13-03-00-a-script-fu-tutorial.md)를 참고해주세요.

```
;  CHROME-LOGOS

(define (apply-chrome-logo-effect img
                                  logo-layer
                                  offsets
                                  bg-color)
  (let* (
        (offx1 (* offsets 0.4))
        (offy1 (* offsets 0.3))
        (offx2 (* offsets (- 0.4)))
        (offy2 (* offsets (- 0.3)))
        (feather (* offsets 0.5))
        (width (car (gimp-drawable-width logo-layer)))
        (height (car (gimp-drawable-height logo-layer)))
        (layer1 (car (gimp-layer-new img width height RGBA-IMAGE "Layer 1" 100 DIFFERENCE-MODE)))
        (layer2 (car (gimp-layer-new img width height RGBA-IMAGE "Layer 2" 100 DIFFERENCE-MODE)))
        (layer3 (car (gimp-layer-new img width height RGBA-IMAGE "Layer 3" 100 NORMAL-MODE)))
        (shadow (car (gimp-layer-new img width height RGBA-IMAGE "Drop Shadow" 100 NORMAL-MODE)))
        (background (car (gimp-layer-new img width height RGB-IMAGE "Background" 100 NORMAL-MODE)))
        (layer-mask (car (gimp-layer-create-mask layer1 ADD-BLACK-MASK)))
        )

    (gimp-context-push)
    (gimp-context-set-defaults)

    (script-fu-util-image-resize-from-layer img logo-layer)
    (script-fu-util-image-add-layers img layer1 layer2 layer3 shadow background)
    (gimp-context-set-background '(255 255 255))
    (gimp-selection-none img)
    (gimp-edit-fill layer1 BACKGROUND-FILL)
    (gimp-edit-fill layer2 BACKGROUND-FILL)
    (gimp-edit-fill layer3 BACKGROUND-FILL)
    (gimp-edit-clear shadow)
    (gimp-image-select-item img CHANNEL-OP-REPLACE logo-layer)
    (gimp-item-set-visible logo-layer FALSE)
    (gimp-item-set-visible shadow FALSE)
    (gimp-item-set-visible background FALSE)
    (gimp-context-set-background '(0 0 0))
    (gimp-edit-fill layer1 BACKGROUND-FILL)
    (gimp-selection-translate img offx1 offy1)
    (gimp-selection-feather img feather)
    (gimp-edit-fill layer2 BACKGROUND-FILL)
    (gimp-selection-translate img (* 2 offx2) (* 2 offy2))
    (gimp-edit-fill layer3 BACKGROUND-FILL)
    (gimp-selection-none img)
    (set! layer1 (car (gimp-image-merge-visible-layers img CLIP-TO-IMAGE)))
    ; if the original image contained more than one visible layer:
    (while (> (car (gimp-image-get-item-position img layer1))
              (car (gimp-image-get-item-position img shadow)))
      (gimp-image-raise-item img layer1)
    )
    (gimp-invert layer1)
    (gimp-layer-add-mask layer1 layer-mask)
    (gimp-image-select-item img CHANNEL-OP-REPLACE logo-layer)
    (gimp-context-set-background '(255 255 255))
    (gimp-selection-feather img feather)
    (gimp-edit-fill layer-mask BACKGROUND-FILL)
    (gimp-context-set-background '(0 0 0))
    (gimp-selection-translate img offx1 offy1)
    (gimp-edit-fill shadow BACKGROUND-FILL)
    (gimp-selection-none img)
    (gimp-context-set-background bg-color)
    (gimp-edit-fill background BACKGROUND-FILL)
    (gimp-item-set-visible shadow TRUE)
    (gimp-item-set-visible background TRUE)
    (gimp-item-set-name layer1 (car (gimp-item-get-name logo-layer)))
    (gimp-image-remove-layer img logo-layer)

    (gimp-context-pop)
  )
)


(define (script-fu-chrome-logo-alpha img
                                     logo-layer
                                     offsets
                                     bg-color)
  (begin
    (gimp-image-undo-group-start img)
    (apply-chrome-logo-effect img logo-layer offsets bg-color)
    (gimp-image-undo-group-end img)
    (gimp-displays-flush)
  )
)

(script-fu-register "script-fu-chrome-logo-alpha"
  _"C_hrome..."
  _"Add a simple chrome effect to the selected region (or alpha)"
  "Spencer Kimball"
  "Spencer Kimball & Peter Mattis"
  "1997"
  "RGBA"
  SF-IMAGE       "Image"                0
  SF-DRAWABLE    "Drawable"             0
  SF-ADJUSTMENT _"Offsets (pixels * 2)" '(10 2 100 1 10 0 1)
  SF-COLOR      _"Background Color"     "lightgrey"
)

(script-fu-menu-register "script-fu-chrome-logo-alpha"
                         "<Image>/Filters/Alpha to Logo")


(define (script-fu-chrome-logo text
                               size
                               font
                               bg-color)
  (let* (
        (img (car (gimp-image-new 256 256 RGB)))
        (b-size (* size 0.2))
        (text-layer (car (gimp-text-fontname img -1 0 0 text b-size TRUE size PIXELS font)))
        )
    (gimp-image-undo-disable img)
    (apply-chrome-logo-effect img text-layer (* size 0.1) bg-color)
    (gimp-image-undo-enable img)
    (gimp-display-new img)
  )
)

(script-fu-register "script-fu-chrome-logo"
  _"C_hrome..."
  _"Create a simplistic, but cool, chromed logo"
  "Spencer Kimball"
  "Spencer Kimball & Peter Mattis"
  "1997"
  ""
  SF-STRING     _"Text"               "GIMP"
  SF-ADJUSTMENT _"Font size (pixels)" '(100 2 1000 1 10 0 1)
  SF-FONT       _"Font"               "Bodoni"
  SF-COLOR      _"Background color"   "lightgrey"
)

(script-fu-menu-register "script-fu-chrome-logo"
                         "<Image>/File/Create/Logos")
```

***

## 다른 페이지로 가기
[➡️ 다음: ?]()

[⬅️ 이전: 13.4.5. Chip Away](./13-04-05-chip_away.md)

[⬆️ 위: 13.4. 스크립트 예제](./13-04-00-script_examples.md)

[⬆️ 위: 13. 스크립팅](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-text.html#idm7428)
