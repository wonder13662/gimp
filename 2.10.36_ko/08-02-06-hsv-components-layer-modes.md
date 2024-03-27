# 8.2.6. 레이어 모드-HSV components
`HSV` 레이어 모드는 `HSV` 컬러 모델을 사용합니다.

## 1. HSV 색상(HSV Hue) 
#### 그림 8.2.6.a10. HSV 색상(HSV Hue) 
![08-02-06-layer_mode-hsv_component-01-hsv_hue](https://github.com/wonder13662/gimp/assets/15767104/9bc6d996-d48a-454b-8f08-a7ceba62d162)

`HSV 색상(HSV Hue)` 모드는 위쪽 레이어의 색상(Hue)와 아래쪽 레이어의 채도(Saturation)와 명도(Value)를 합쳐 결과 이미지를 만듭니다. 만약 위쪽 레이어의 채도(Saturation)가 0이라면, 위쪽 레이어의 색상(Hue) 대신 아래쪽 레이어의 색상(Hue)를 대신 사용합니다.

|HSV 값|대상 레이어|
|---|---|
|**색상(Hue)**|위쪽 레이어|
|채도(Saturation)|아래쪽 레이어|
|명도(Value)|아래쪽 레이어|

`HSV 색상(HSV Hue)` 모드는 지정한 색조로 전체 이미지에 적용하는 데에 유용합니다. 아래 동영상에서 이 과정을 확인해보세요.

#### 영상 8.2.6.a11. `HSV 색상(HSV Hue)`: 사용자가 지정한 색상의 색조로 이미지 전체에 적용
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/f441430c-33b0-4332-b88f-c9c2648825e9"></video>

## 2. HSV 채도(HSV Saturation)
#### 그림 8.2.6.a20. HSV 채도(HSV Saturation)
![08-02-06-layer_mode-hsv_component-02-hsv_saturation](https://github.com/wonder13662/gimp/assets/15767104/c8e20a44-4b38-496f-aa21-f9d8920555b2)

`HSV 채도(HSV Saturation)` 모드는 위쪽 레이어의 채도(Saturation)과 아래쪽 레이어의 색상(Hue)와 명도(Value)를 합쳐 결과 이미지를 만듭니다.

|HSV 값|대상 레이어|
|---|---|
|색상(Hue)|아래쪽 레이어|
|**채도(Saturation)**|위쪽 레이어|
|명도(Value)|아래쪽 레이어|

`HSV 채도(HSV Saturation)` 모드는 원본 이미지의 채도를 바꿔서 채도가 강렬한 이미지로 바꿀 수 있습니다. 아래 영상을 확인해주세요.

#### 영상 8.2.6.a21. `HSV 채도(HSV Saturation)`: 사용자가 지정한 색상의 색조로 이미지 전체에 적용
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/139b27e7-95a1-493e-a1ed-5544173f136c"></video>

## 3. HSL 색상(HSL Color)
#### 그림 8.2.6.a30. HSL 색상(HSL Color)
![08-02-06-layer_mode-hsv_component-03-hsl_color](https://github.com/wonder13662/gimp/assets/15767104/b91f0429-5220-4127-a5da-eef221a5db87)

`HSL 색상(HSL Color)` 모드는 위쪽 레이어의 색상(Hue)와 채도(Saturation), 아래쪽 레이어의 밝기(Lightness)를 합쳐 결과 이미지를 만듭니다.

|HSL 값|대상 레이어|
|---|---|
|**색상(Hue)**|위쪽 레이어|
|**채도(Saturation)**|위쪽 레이어|
|밝기(Lightness)|아래쪽 레이어|

`HSL 색상(HSL Color)` 모드는 어떤 대상의 부분의 색깔을 바꿔야 할 때 유용합니다. 아래 예시 영상에서 푸른핵 자동차의 색상을 `HSL 색상(HSL Color)` 모드를 사용하여 빨간색으로 바꾸는 과정을 확인할 수 있습니다.

#### 영상 8.2.6.a31. `HSL 색상(HSL Color)`: 자동차 이미지의 색상 바꾸기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/5cea6ccf-cc42-47c3-8064-7cccfbadb0e9"></video>

## 4. HSV 명도(HSV Value)
#### 그림 8.2.6.a40. HSV 명도(HSV Value)
![08-02-06-layer_mode-hsv_component-04-hsv_value](https://github.com/wonder13662/gimp/assets/15767104/ec2b6046-1917-426c-8214-d6a8d5815323)

HSV Value mode uses the Value of the upper layer and the Saturation and Hue of the lower layer to form the resulting image. You can use this mode to reveal the details in dark and light areas of an image without changing the Saturation.

`HSV 명도(HSV Value)` 모드는 위쪽 레이어의 명도(Value)와 아래쪽 레이어의 채도(Saturation)와 색상(Hue)를 합쳐 결과 이미지를 만듭니다. `HSV 명도(HSV Value)` 모드는 채도(Saturation)를 바꾸지 않고 이미지의 어둡거나 밝은 영역의 상세한 모습을 드러낼 때 사용할 수 있습니다.

|HSV 값|대상 레이어|
|---|---|
|색상(Hue)|아래쪽 레이어|
|채도(Saturation)|아래쪽 레이어|
|**명도(Value)**|위쪽 레이어|

아래 영상에서 위쪽 레이어의 명도를 아래쪽 레이어에 적용하여 이미지가 전체적으로 밝아지는 모습을 확인할 수 있습니다.

#### 영상 8.2.6.a41. `HSV 명도(HSV Value)`: 명도 높이기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/39adcadf-2162-45fe-a01c-135f4b8b182c"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 8.2.7. 레이어 모드-LCh components](./08-02-07-lch-components-layer-modes.md)

[⬅️ 이전: 8.2.5. 레이어 모드-반전(Inversion)](./08-02-05-inversion-layer-modes.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-hsv.html)
