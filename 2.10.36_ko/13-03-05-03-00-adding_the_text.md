# 13.3.5.3. 텍스트 추가하기(Adding the Text)
## 1. 디버깅 코드 삭제
이미지를 보여주는 행은 이제 더 이상 필요하지 않으므로 삭제합니다(또는 `;`을 행의 가장 앞에 써서 [주석](./13-03-03-08-accessing_other_elements_in_a_list.md#13-03-03-08-s3)으로 만들수도 있습니다).

## 2. 전경색, 배경색 바꾸기
이미지에 텍스트를 추가하기 전에, 사용자가 선택한 [배경색](./19-glossaryx-background_color.md)과 [전경색](./19-glossaryx-foreground_color.md)을 설정해야 합니다. 

GIMP(김프)의 `gimp-context-set-background`와 `gimp-context-set-foreground` 함수를 사용합니다.

```scheme
(gimp-context-set-background '(255 255 255) )
(gimp-context-set-foreground inTextColor)
```

⚠️ 주의: `gimp-context-set-background`와 `gimp-context-set-foreground` 함수의 명세(Speficication)는 [프로시저 브라우저](./16-12-08-the-procedure-browser.md)로 검색하면 확인할 수 있습니다.

전경색과 배경색이 설정되면, 배경색으로 [`drawable`](./19-glossaryx-drawable.md) 객체의 색을 채웁니다.

```scheme
(gimp-drawable-fill theLayer BACKGROUND-FILL)
```

## 3. 이미지에 텍스트 추가하기
이미지가 지워졌으므로, 텍스트를 추가해보겠습니다.

```scheme
(set! theText
  (car
    (gimp-text-fontname
      theImage theLayer
      0 0
      inText
      0
      TRUE
      inFontSize PIXELS
      inFont
    )
  )
)
```

[프로시저 브라우저](./16-12-08-the-procedure-browser.md)로 `gimp-text-fontname` 함수를 검색해서 파라미터를 살펴보면, 내용은 길지만, 상당히 직관적인 함수입니다. 

`gimp-text-fontname` 함수로 새로운 텍스트 레이어를 만들어서 변수 `theText`의 값을 텍스트 레이어에 지정할 것입니다.

## 4. 이미지를 텍스트에 맞추기
이제 텍스트가 있으므로, 텍스트의 크기에 맞춰 이미지의 너비와 높이를 조정할 수 있습니다.

```scheme
(set! theImageWidth   (car (gimp-drawable-width  theText) ) )
(set! theImageHeight  (car (gimp-drawable-height theText) ) )

(gimp-image-resize theImage theImageWidth theImageHeight 0 0)

(gimp-layer-resize theLayer theImageWidth theImageHeight 0 0)
```
여기서 [`drawable`](./19-glossaryx-drawable.md)이 무엇인지 궁금할 수 있습니다. 

`drawable`은 그릴 수 있는 모든 대상을 말합니다. 

이 대상에는 [채널](./19-glossaryx-channel.md), [레이어](./19-glossaryx-layer.md), [마스크](./19-glossaryx-masks.md), [선택 영역](./19-glossaryx-selection.md) 등이 있습니다. 

[레이어](./19-glossaryx-layer.md)는 `drawable`의 구체화된 버전입니다.

이미지가 준비되었으므로, 이제 이미지를 화면에 다시 보여주는 `gimp-display-new` 함수를 호출합니다.

```scheme
(gimp-display-new theImage)
```

## 4. 작업 과정 확인하기
작업을 저장하고, [이미지 메뉴 바](./19-glossaryx-image_menu_bar.md)의 `필터` → `Script-Fu` → `스크립트 새로 고침` 메뉴를 선택해서 스크립트를 갱신합니다. 

그리고 스크립트를 실행시켜서 새로운 이미지를 띄웁니다.

#### 영상 13.3.5.3.a1. 작업한 스크립트 확인하기
<video controls="controls" width="640" height="360"  src="https://github.com/wonder13662/gimp/assets/15767104/4e087243-be88-4c16-b862-49faf020806e"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.5.3.1. 작업중인 스크립트](./13-03-05-03-01-script_in_progress.md)

[⬅️ 이전: 13.3.5.2.1. 작업중인 스크립트](./13-03-05-02-01-script_in_progress.md)

[⬆️ 위: 13.3.5. 스크립트 개선하기(Giving our script some guts)](./13-03-05-00-giving-our-script-some-guts.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-script.html#idm10203)