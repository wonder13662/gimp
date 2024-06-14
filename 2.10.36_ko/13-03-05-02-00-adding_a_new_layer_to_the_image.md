# 13.3.5.2. 이미지에 새 레이어 추가하기(Adding a New Layer to the Image)
이제 새 이미지를 만들었으므로, 새 이미지에 레이어를 추가해보겠습니다. 레이어를 만들기 위해 `gimp-layer-new` 함수를 새 이미지의 ID를 인자로 넘겨서 호출하겠습니다.

지금부터는 편의를 위해서 전체 함수를 나열하기 보다는 추가하는 코드만 보여주도록 하겠습니다. 완전한 코드는 [13.3.7. 최종 스크립트 결과 확인하기(Your script and its working)](./13-03-07-your-script-and-its-working.md)에서 확인할 수 있습니다.

## 1. 이미지에 새로운 레이어 추가
사용하는 변수는 모두 선언했기 때문에, 변수 선언의 괄호를 닫아야 합니다.

```scheme
  (
  ...
    ;이미지에 새로운 레이어를 만듭니다.
    (theLayer
              (car
                  (gimp-layer-new
                    theImage
                    theImageWidth
                    theImageHeight
                    RGB-IMAGE
                    "layer 1"
                    100
                    LAYER-MODE-NORMAL
                  )
              )
    )
  ) ;지역변수 끝
```

## 2. 새 레이어를 이미지에 추가
새 레이어를 만들어 변수에 저장하면, 새 레이어를 이미지에 추가해야 합니다.

```scheme
;새 레이어를 이미지에 추가
(gimp-image-insert-layer theImage theLayer 0 0)
```
## 3. 새 이미지를 이미지 창에 띄우기
그럼 지금까지의 작업 결과를 확인하기 위해서 아래 코드를 추가하여 빈 이미지를 보여주도록 하겠습니다.

```scheme
;새 이미지를 이미지 창에 띄우기
(gimp-display-new theImage)
```

여기까지 진행한 코드는 [13.3.5.2.1. 작업중인 스크립트](./13-03-05-02-01-script_in_progress.md)에서 확인할 수 있습니다.

## 4. 작업한 스크립트 확인하기
작업을 저장하고, [이미지 메뉴 바](./03-02-02-02-image-menu.md)의 `필터` → `Script-Fu` → `스크립트 새로고침` 메뉴를 선택해서 스크립트를 갱신합니다. 그리고 스크립트를 실행시켜서 새로운 이미지를 띄웁니다.

무작위로 색상이 결정되는 쓰레기 값을 가지고 있는 문제가 있습니다만, 이것은 아직 지우지 않아서 생기는 문제입니다. 다음 장에서 해결해보도록 합시다.

#### 영상 13.3.5.2.a1. 작업한 스크립트 확인하기
<video controls="controls" width="640" height="360"  src="https://github.com/wonder13662/gimp/assets/15767104/6bb1b108-b563-43e1-8059-c3786faadf62"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.5.2.1. 작업중인 스크립트](./13-03-05-02-01-script_in_progress.md)

[⬅️ 이전: 13.3.5.1. 새 이미지 만들기(Creating a New Image)](./13-03-05-01-00-creating_a_new_image.md)

[⬆️ 위: 13.3.5. 스크립트 개선하기(Giving our script some guts)](./13-03-05-00-giving-our-script-some-guts.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-script.html#idm10188)
