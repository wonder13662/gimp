# 13.4.7. Glowing Logo

## 1. `파일` → `만들기` → `무늬` → `Glowing Logo...`

#### 그림 13.4.7.a101. 결과 이미지
![13-04-07-a101-result](https://github.com/wonder13662/gimp/assets/15767104/bf243586-706c-4989-b40d-a15f9133daa0)

#### 그림 13.4.7.a102. 메뉴 위치
![13-04-07-a102-menu](https://github.com/wonder13662/gimp/assets/15767104/df08747d-b03d-41d8-bcdb-3d9ee6f217cd)

#### 그림 13.4.7.a103. 대화상자
![13-04-07-a103-dialog](https://github.com/wonder13662/gimp/assets/15767104/ccac28b7-1a62-4737-bece-a0e887a4b4ec)

#### 영상 13.4.7.a104. 전체 과정
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/bf0d0534-1b63-4977-8249-350d3d5161d3"></video>

## 2. `필터` → `알파를 로고로` → `Glowing Logo...`

#### 그림 13.4.7.a111. 원본 이미지
![13-04-07-a111-source](https://github.com/wonder13662/gimp/assets/15767104/f340af75-4a7a-452a-8400-1c2714b4080f)

#### 그림 13.4.7.a112. 결과 이미지
![13-04-07-a112-result](https://github.com/wonder13662/gimp/assets/15767104/8f092da9-0d6c-4da0-ad24-49630cef5a23)

#### 그림 13.4.7.a113. 메뉴 위치
![13-04-07-a113-menu](https://github.com/wonder13662/gimp/assets/15767104/645c2da8-12af-4665-a0f0-0ef31ee5e286)

#### 그림 13.4.7.a114. 대화상자
![13-04-07-a114-dialog](https://github.com/wonder13662/gimp/assets/15767104/aa886b35-075c-4b4a-b377-a7c7e4780622)

#### 영상 13.4.7.a115. 전체 과정
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/861c49d0-9ef0-4d66-8b65-5bc71bed9d10"></video>

## 3. 스크립트
이 스크립트의 코드는 아래와 같습니다. 스크립트를 수정해서 사용하고 싶다면, [13.2. Script-fu 스크립트 사용하기](./13-02-00-using-script-fu-scripts.md)와 [13.3. Script-fu 튜토리얼](./13-03-00-a-script-fu-tutorial.md)를 참고해주세요.

```
;  GLOWING
;  Create a text effect that simulates a glowing hot logo

(define (apply-glowing-logo-effect img
                                   logo-layer
                                   size
                                   bg-color)
  (let* (
        (grow (/ size 4))
        (feather1 (/ size 3))
        (feather2 (/ size 7))
        (feather3 (/ size 10))
        (width (car (gimp-drawable-width logo-layer)))
        (height (car (gimp-drawable-height logo-layer)))
        (posx (- (car (gimp-drawable-offsets logo-layer))))
        (posy (- (cadr (gimp-drawable-offsets logo-layer))))
        (glow-layer (car (gimp-layer-copy logo-layer TRUE)))
        (bg-layer (car (gimp-layer-new img width height RGB-IMAGE "Background" 100 NORMAL-MODE)))
        )

    (gimp-context-push)
    (gimp-context-set-defaults)

    (script-fu-util-image-resize-from-layer img logo-layer)
    (script-fu-util-image-add-layers img glow-layer bg-layer)
    (gimp-layer-translate glow-layer posx posy)

    (gimp-selection-none img)
    (gimp-context-set-background bg-color)
    (gimp-edit-fill bg-layer BACKGROUND-FILL)

    (gimp-layer-set-lock-alpha logo-layer TRUE)
    (gimp-context-set-background '(0 0 0))
    (gimp-edit-fill logo-layer BACKGROUND-FILL)

    (gimp-image-select-item img CHANNEL-OP-REPLACE logo-layer)
    (gimp-selection-feather img feather1)
    (gimp-context-set-background '(221 0 0))
    (gimp-edit-fill glow-layer BACKGROUND-FILL)
    (gimp-edit-fill glow-layer BACKGROUND-FILL)
    (gimp-edit-fill glow-layer BACKGROUND-FILL)

    (gimp-image-select-item img CHANNEL-OP-REPLACE logo-layer)
    (gimp-selection-feather img feather2)
    (gimp-context-set-background '(232 217 18))
    (gimp-edit-fill glow-layer BACKGROUND-FILL)
    (gimp-edit-fill glow-layer BACKGROUND-FILL)

    (gimp-image-select-item img CHANNEL-OP-REPLACE logo-layer)
    (gimp-selection-feather img feather3)
    (gimp-context-set-background '(255 255 255))
    (gimp-edit-fill glow-layer BACKGROUND-FILL)
    (gimp-selection-none img)

    (gimp-layer-set-mode logo-layer OVERLAY-MODE)
    (gimp-item-set-name glow-layer "Glow Layer")

    (gimp-context-pop)
  )
)


(define (script-fu-glowing-logo-alpha img
                                      logo-layer
                                      size
                                      bg-color)
  (begin
    (gimp-image-undo-group-start img)
    (apply-glowing-logo-effect img logo-layer (* size 3) bg-color)
    (gimp-image-undo-group-end img)
    (gimp-displays-flush)
  )
)

(script-fu-register "script-fu-glowing-logo-alpha"
  _"Glo_wing Hot..."
  _"Add a glowing hot metal effect to the selected region (or alpha)"
  "Spencer Kimball"
  "Spencer Kimball"
  "1997"
  "RGBA"
  SF-IMAGE      "Image"                 0
  SF-DRAWABLE   "Drawable"              0
  SF-ADJUSTMENT _"Effect size (pixels)" '(50 1 500 1 10 0 1)
  SF-COLOR      _"Background color"     '(7 0 20)
)

(script-fu-menu-register "script-fu-glowing-logo-alpha"
                         "<Image>/Filters/Alpha to Logo")


(define (script-fu-glowing-logo text
                                size
                                font
                                bg-color)
  (let* (
        (img (car (gimp-image-new 256 256 RGB)))
        (border (/ size 4))
        (text-layer (car (gimp-text-fontname img -1 0 0 text border TRUE size PIXELS font)))
        )
    (gimp-image-undo-disable img)
    (apply-glowing-logo-effect img text-layer size bg-color)
    (gimp-image-undo-enable img)
    (gimp-display-new img)
  )
)

(script-fu-register "script-fu-glowing-logo"
  _"Glo_wing Hot..."
  _"Create a logo that looks like glowing hot metal"
  "Spencer Kimball"
  "Spencer Kimball"
  "1997"
  ""
  SF-STRING     _"Text"               "GLOWING"
  SF-ADJUSTMENT _"Font size (pixels)" '(150 2 1000 1 10 0 1)
  SF-FONT       _"Font"               "Slogan"
  SF-COLOR      _"Background color"   '(7 0 20)
)

(script-fu-menu-register "script-fu-glowing-logo"
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
