# 9.2.1.2. Bovination

## 1. `파일` → `만들기` → `로고` → `Bovination`

#### 그림 9.2.1.2.a101. 결과 이미지
![09-02-01-02-a101-result(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/87cef2b0-dfa9-4099-9d4d-bca13d7f3a13)

#### 그림 9.2.1.2.a102. 메뉴 위치
![09-02-01-02-a102-menu(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/f89ff1d7-5546-48c4-828b-d291e605b8fd)

#### 그림 9.2.1.2.a103. 대화상자
![09-02-01-02-a103-dialog(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/abf7fbd1-14b3-49f1-806f-aa35e49d23dc)

#### 영상 9.2.1.2.a104. 전체 과정
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/c63c006c-3ff3-4922-95db-c00f7cf9b9b5"></video>

## 2. `필터` → `알파를 로고로` → `Bovination`

#### 그림 9.2.1.2.a111. 원본 이미지
![09-02-01-02-a111-source](https://github.com/wonder13662/gimp/assets/15767104/eec322e9-d6d5-4245-b5d2-de22cc666fa2)

#### 그림 9.2.1.2.a112. 결과 이미지
![09-02-01-02-a112-result](https://github.com/wonder13662/gimp/assets/15767104/a3e4a853-caa9-498c-b52c-7c808c5614ca)

#### 그림 9.2.1.2.a113. 메뉴 위치
![09-02-01-02-a113-menu](https://github.com/wonder13662/gimp/assets/15767104/0fbaad77-f5c3-4c5a-b985-7a051be5c497)

#### 그림 9.2.1.2.a114. 대화상자
![09-02-01-02-a114-dialog](https://github.com/wonder13662/gimp/assets/15767104/8852e327-932f-4130-8058-d9efd3b66dbf)

#### 영상 9.2.1.2.a115. 전체 과정
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/02e63b34-33a9-4186-9ebf-b86ef80c20ff"></video>

## 3. 스크립트
이 스크립트의 코드는 아래와 같습니다. 스크립트를 수정해서 사용하고 싶다면, [13.2. Script-fu 스크립트 사용하기](./13-02-00-using-script-fu-scripts.md)와 [13.3. Script-fu 튜토리얼](./13-03-00-a-script-fu-tutorial.md)를 참고해주세요.

```
(define (apply-bovinated-logo-effect img
                                     logo-layer
                                     spots-x
                                     spots-y
                                     bg-color)
  (let* (
        (width (car (gimp-drawable-width logo-layer)))
        (height (car (gimp-drawable-height logo-layer)))
        (bg-layer (car (gimp-layer-new img
                                       width height RGBA-IMAGE
                                       "Background" 100 NORMAL-MODE)))
        (blur-layer (car (gimp-layer-new img
                                         width height RGBA-IMAGE
                                         "Blur" 100 NORMAL-MODE)))
        )

    (gimp-context-push)
    (gimp-context-set-defaults)

    (script-fu-util-image-resize-from-layer img logo-layer)
    (script-fu-util-image-add-layers img blur-layer bg-layer)

    (gimp-selection-all img)
    (gimp-context-set-background bg-color)
    (gimp-edit-fill bg-layer BACKGROUND-FILL)
    (gimp-selection-none img)

    (gimp-layer-set-lock-alpha blur-layer TRUE)
    (gimp-context-set-background '(255 255 255))
    (gimp-selection-all img)
    (gimp-edit-fill blur-layer BACKGROUND-FILL)
    (gimp-edit-clear blur-layer)
    (gimp-context-set-background '(191 191 191))
    (gimp-selection-none img)
    (gimp-layer-set-lock-alpha blur-layer FALSE)
    (gimp-image-select-item img CHANNEL-OP-REPLACE logo-layer)
    (gimp-edit-fill blur-layer BACKGROUND-FILL)
    (plug-in-gauss-rle RUN-NONINTERACTIVE img blur-layer 5.0 1 1)
    (gimp-selection-none img)
    (gimp-layer-set-lock-alpha logo-layer TRUE)
    (gimp-selection-all img)
    (plug-in-solid-noise RUN-NONINTERACTIVE img logo-layer 0 0 23 1 spots-x spots-y)
    (gimp-brightness-contrast logo-layer 0 127)
    (gimp-selection-none img)
    (gimp-layer-set-lock-alpha logo-layer FALSE)
    (plug-in-bump-map RUN-NONINTERACTIVE img logo-layer blur-layer
                      135 50 10 0 0 0 0.3 TRUE FALSE 0)
    (gimp-layer-set-offsets blur-layer 5 5)
    (gimp-invert blur-layer)
    (gimp-layer-set-opacity blur-layer 50.0)
    (gimp-image-set-active-layer img logo-layer)

    (gimp-context-pop)
  )
)

(define (script-fu-bovinated-logo-alpha img
                                        logo-layer
                                        spots-x
                                        spots-y
                                        bg-color)
  (begin
    (gimp-image-undo-group-start img)
    (apply-bovinated-logo-effect img logo-layer spots-x spots-y bg-color)
    (gimp-image-undo-group-end img)
    (gimp-displays-flush)
  )
)

(script-fu-register "script-fu-bovinated-logo-alpha"
  _"Bo_vination..."
  _"Add 'cow spots' to the selected region (or alpha)"
  "Brian McFee <keebler@wco.com>"
  "Brian McFee"
  "April 1998"
  "RGBA"
  SF-IMAGE      "Image"             0
  SF-DRAWABLE   "Drawable"          0
  SF-ADJUSTMENT _"Spots density X"  '(16 1 16 1 10 0 1)
  SF-ADJUSTMENT _"Spots density Y"  '(4 1 16 1 10 0 1)
  SF-COLOR      _"Background Color" "white"
)

(script-fu-menu-register "script-fu-bovinated-logo-alpha"
                         "<Image>/Filters/Alpha to Logo")


(define (script-fu-bovinated-logo text
                                  size
                                  font
                                  spots-x
                                  spots-y
                                  bg-color)
  (let* ((img (car (gimp-image-new 256 256 RGB)))
         (border (/ size 4))
         (text-layer (car (gimp-text-fontname img -1 0 0 text border TRUE size PIXELS font))))
    (gimp-image-undo-disable img)
    (apply-bovinated-logo-effect img text-layer spots-x spots-y bg-color)
    (gimp-image-undo-enable img)
    (gimp-display-new img)
  )
)

(script-fu-register "script-fu-bovinated-logo"
  _"Bo_vination..."
  _"Create a logo with text in the style of 'cow spots'"
  "Brian McFee <keebler@wco.com>"
  "Brian McFee"
  "April 1998"
  ""
  SF-STRING     _"Text"               "Fear the Cow"
  SF-ADJUSTMENT _"Font size (pixels)" '(80 2 1000 1 10 0 1)
  SF-FONT       _"Font"               "RoostHeavy"
  SF-ADJUSTMENT _"Spots density X"    '(16 1 16 1 10 0 1)
  SF-ADJUSTMENT _"Spots density Y"    '(4 1 16 1 10 0 1)
  SF-COLOR      _"Background color"   "white"
)

(script-fu-menu-register "script-fu-bovinated-logo"
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
