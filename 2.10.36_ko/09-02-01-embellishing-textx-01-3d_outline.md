# 9.2.1.1. 3D Outline

## 1. `파일` → `만들기` → `로고` → `3D Outline...`

#### 그림 9.2.1.1.a101. 원본 이미지
![09-02-01-01-a102-file-create-logo-3d_outline-source(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/dee0219a-0e6a-4c2a-91e7-43e2c72783f9)

#### 그림 9.2.1.1.a102. 결과 이미지
![09-02-01-01-a102-file-create-logo-3d_outline-result(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/74607baf-5ba2-40b7-bada-dda532eac05c)

#### 그림 9.2.1.1.a103. 메뉴 위치
![09-02-01-01-a101-file-create-logo-3d_outline-hierarchy(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/f3b50423-afe9-4f3c-abf6-743d71c95bba)

#### 그림 9.2.1.1.a104. 대화상자
![09-02-01-01-a102-file-create-logo-3d_outline-dialog(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/4e63ac9a-b5fd-4e45-ad89-c620eb30dcb3)

#### 영상 9.2.1.1.a105. 전체 과정
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/2b1513fa-018f-4db0-96e1-01872e3d419b"></video>

## 2. `필터` → `알파를 로고로` → `3D Outline...`

#### 그림 9.2.1.1.a111. 원본 이미지
![09-02-01-01-a112-filters-alpha_to_logo-3d_outline-source(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/48f78dcc-99ee-43fb-84e6-4e712ffbad85)

#### 그림 9.2.1.1.a112. 결과 이미지
![09-02-01-01-a112-filters-alpha_to_logo-3d_outline-result(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/d93efd52-fa2c-4fb5-8280-64ac95a73054)

#### 그림 9.2.1.1.a113. 메뉴 위치
![09-02-01-01-a111-filters-alpha_to_logo-3d_outline-hierarchy(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/357d97e0-42bc-4e84-8d1a-b0db99dc8e3f)

#### 그림 9.2.1.1.a114. 대화상자
![09-02-01-01-filters-alpha_to_logo-3d_outlines-dialog(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/3dda7bfe-bde0-46e0-ba13-083ae606882f)

#### 영상 9.2.1.1.a115. 전체 과정
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/6f0e7420-543d-4e47-bab5-ad0bfca5e140"></video>

## 3. 스크립트
이 스크립트의 코드는 아래와 같습니다. 스크립트를 수정해서 사용하고 싶다면, [13.2. Script-fu 스크립트 사용하기](./13-02-00-using-script-fu-scripts.md)와 [13.3. Script-fu 튜토리얼](./13-03-00-a-script-fu-tutorial.md)를 참고해주세요.

```
(define (apply-3d-outline-logo-effect img
                                      logo-layer
                                      text-pattern
                                      outline-blur-radius
                                      shadow-blur-radius
                                      bump-map-blur-radius
                                      noninteractive
                                      s-offset-x
                                      s-offset-y)
  (let* (
        (width (car (gimp-drawable-width logo-layer)))
        (height (car (gimp-drawable-height logo-layer)))
        (bg-layer (car (gimp-layer-new img width height
                                       RGB-IMAGE "Background" 100 NORMAL-MODE)))
        (pattern-layer (car (gimp-layer-new img width height
                                       RGBA-IMAGE "Pattern" 100 NORMAL-MODE)))
        (alpha-layer 0)
        (shadow-layer 0)
        (pattern-mask 0)
        (floating-sel 0)
        )

    (gimp-context-push)

    (gimp-selection-none img)
    (script-fu-util-image-resize-from-layer img logo-layer)
    (script-fu-util-image-add-layers img pattern-layer bg-layer)
    (gimp-context-set-background '(255 255 255))
    (gimp-edit-fill bg-layer BACKGROUND-FILL)
    (gimp-edit-clear pattern-layer)
    (gimp-layer-set-lock-alpha logo-layer TRUE)
    (gimp-context-set-foreground '(0 0 0))
    (gimp-edit-fill logo-layer FOREGROUND-FILL)
    (gimp-layer-set-lock-alpha logo-layer FALSE)
    (plug-in-gauss-iir RUN-NONINTERACTIVE img logo-layer outline-blur-radius TRUE TRUE)

    (gimp-item-set-visible pattern-layer FALSE)
    (set! alpha-layer (car (gimp-image-merge-visible-layers img CLIP-TO-IMAGE)))
    (plug-in-edge RUN-NONINTERACTIVE img alpha-layer 2 1 0)
    (gimp-item-set-name alpha-layer "Bump map")
    (set! shadow-layer (car (gimp-layer-copy alpha-layer TRUE)))
    (gimp-item-set-name shadow-layer "Edges")
    (script-fu-util-image-add-layers img shadow-layer)
    (plug-in-gauss-iir RUN-NONINTERACTIVE img alpha-layer bump-map-blur-radius TRUE TRUE)

    (gimp-selection-all img)
    (gimp-context-set-pattern text-pattern)
    (gimp-edit-bucket-fill pattern-layer
                           PATTERN-BUCKET-FILL NORMAL-MODE 100 0 FALSE 0 0)
    (plug-in-bump-map noninteractive img pattern-layer alpha-layer
                      110.0 45.0 4 0 0 0 0 TRUE FALSE 0)

    (set! pattern-mask (car (gimp-layer-create-mask pattern-layer ADD-ALPHA-MASK)))
    (gimp-layer-add-mask pattern-layer pattern-mask)

    (gimp-selection-all img)
    (gimp-edit-copy shadow-layer)
    (set! floating-sel (car (gimp-edit-paste pattern-mask FALSE)))
    (gimp-floating-sel-anchor floating-sel)

    (gimp-layer-remove-mask pattern-layer MASK-APPLY)
    (gimp-invert shadow-layer)
    (gimp-item-set-name shadow-layer "Drop shadow")
    (plug-in-gauss-iir RUN-NONINTERACTIVE img shadow-layer shadow-blur-radius TRUE TRUE)

    (gimp-drawable-offset shadow-layer
                          FALSE OFFSET-BACKGROUND s-offset-x s-offset-y)

    (gimp-item-set-visible alpha-layer FALSE)
    (gimp-item-set-visible pattern-layer TRUE)
    ;;(set! final (car (gimp-image-flatten img)))

    (gimp-context-pop)
  )
)

(define (script-fu-3d-outline-logo-alpha img
                                         logo-layer
                                         text-pattern
                                         outline-blur-radius
                                         shadow-blur-radius
                                         bump-map-blur-radius
                                         noninteractive
                                         s-offset-x
                                         s-offset-y)
  (begin
    (gimp-image-undo-group-start img)
    (apply-3d-outline-logo-effect img logo-layer text-pattern
                                  outline-blur-radius shadow-blur-radius
                                  bump-map-blur-radius noninteractive
                                  s-offset-x s-offset-y)
    (gimp-image-undo-group-end img)
    (gimp-displays-flush)
  )
)

(script-fu-register "script-fu-3d-outline-logo-alpha"
  _"3D _Outline..."
  _"Outline the selected region (or alpha) with a pattern and add a drop shadow"
  "Hrvoje Horvat (hhorvat@open.hr)"
  "Hrvoje Horvat"
  "07 April, 1998"
  "RGBA"
  SF-IMAGE       "Image"               0
  SF-DRAWABLE    "Drawable"            0
  SF-PATTERN    _"Pattern"             "Parque #1"
  SF-ADJUSTMENT _"Outline blur radius" '(5 1 200 1 10 0 1)
  SF-ADJUSTMENT _"Shadow blur radius"  '(10 1 200 1 10 0 1)
  SF-ADJUSTMENT _"Bumpmap (alpha layer) blur radius" '(5 1 200 1 10 0 1)
  SF-TOGGLE     _"Default bumpmap settings" TRUE
  SF-ADJUSTMENT _"Shadow X offset"     '(0 0 200 1 5 0 1)
  SF-ADJUSTMENT _"Shadow Y offset"     '(0 0 200 1 5 0 1)
)

(script-fu-menu-register "script-fu-3d-outline-logo-alpha"
                         "<Image>/Filters/Alpha to Logo")


(define (script-fu-3d-outline-logo text-pattern
                                   text
                                   size
                                   font
                                   outline-blur-radius
                                   shadow-blur-radius
                                   bump-map-blur-radius
                                   noninteractive
                                   s-offset-x
                                   s-offset-y)
  (let* (
        (img (car (gimp-image-new 256 256 RGB)))
        (text-layer (car (gimp-text-fontname img -1 0 0 text 30 TRUE size PIXELS font)))
        )
    (gimp-image-undo-disable img)
    (apply-3d-outline-logo-effect img text-layer text-pattern
                                  outline-blur-radius shadow-blur-radius
                                  bump-map-blur-radius noninteractive
                                  s-offset-x s-offset-y)
    (gimp-image-undo-enable img)
    (gimp-display-new img)
  )
)

(script-fu-register "script-fu-3d-outline-logo"
  _"3D _Outline..."
  _"Create a logo with outlined text and a drop shadow"
  "Hrvoje Horvat (hhorvat@open.hr)"
  "Hrvoje Horvat"
  "07 April, 1998"
  ""
  SF-PATTERN    _"Pattern"             "Parque #1"
  SF-STRING     _"Text"                "GIMP"
  SF-ADJUSTMENT _"Font size (pixels)"  '(100 2 1000 1 10 0 1)
  SF-FONT       _"Font"                "RoostHeavy"
  SF-ADJUSTMENT _"Outline blur radius" '(5 1 200 1 10 0 1)
  SF-ADJUSTMENT _"Shadow blur radius"  '(10 1 200 1 10 0 1)
  SF-ADJUSTMENT _"Bumpmap (alpha layer) blur radius" '(5 1 200 1 10 0 1)
  SF-TOGGLE     _"Default bumpmap settings" TRUE
  SF-ADJUSTMENT _"Shadow X offset"     '(0 0 200 1 5 0 1)
  SF-ADJUSTMENT _"Shadow Y offset"     '(0 0 200 1 5 0 1)
)

(script-fu-menu-register "script-fu-3d-outline-logo"
                         "<Image>/File/Create/Logos")

```

***

## 다른 페이지로 가기
[➡️ 다음: ?]()

[⬅️ 이전: ?]()

[⬆️ 위: 9.2.1. 텍스트 꾸미기(Embellishing text)](./09-02-01-embellishing-text.md)

[⬆️ 위: 9.2. 텍스트(Text)](./09-02-00-text.md)

[⬆️ 위: 9. 텍스트 관리(Text management)](./09-00-text-management.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-text.html#idm7428)
