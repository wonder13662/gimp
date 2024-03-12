# 8.2.6. 레이어 모드-HSV components
## 1. HSV 색조(HSV Hue) 
#### 그림 8.2.6.a10. HSV 색조(HSV Hue) 
![08-02-06-layer_mode-hsv_component-01-hsv_hue](https://github.com/wonder13662/gimp/assets/15767104/9bc6d996-d48a-454b-8f08-a7ceba62d162)

`HSV 색조(HSV Hue) ` 모드는 위쪽 레이어의 색조(Hue)와 아래쪽 레이어의 채도(Saturation)와 명도(Value)를 합쳐 결과 이미지를 만듭니다. 만약 위쪽 레이어의 채도(Saturation)가 0이라면, 위쪽 레이어의 색조(Hue) 대신 아래쪽 레이어의 색조(Hue)를 대신 사용합니다.

|HSV 값|대상 레이어|
|---|---|
|**색조(Hue)**|위쪽 레이어|
|채도(Saturation)|아래쪽 레이어|
|명도(Value)|아래쪽 레이어|

`HSV 색조(HSV Hue) ` 모드는 지정한 색조로 전체 이미지에 적용하는 데에 유용합니다. 아래 동영상에서 이 과정을 확인해보세요.

#### 영상 8.2.6.a11. `HSV 색조(HSV Hue) `: 사용자가 지정한 색상의 색조로 이미지 전체에 적용
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/f441430c-33b0-4332-b88f-c9c2648825e9"></video>

## 2. HSV 채도(HSV Saturation)
#### 그림 8.2.6.a20. HSV 채도(HSV Saturation)
![08-02-06-layer_mode-hsv_component-02-hsv_saturation](https://github.com/wonder13662/gimp/assets/15767104/c8e20a44-4b38-496f-aa21-f9d8920555b2)

`HSV 채도(HSV Saturation)` 모드는 위쪽 레이어의 채도(Saturation)과 아래쪽 레이어의 색조(Hue)와 명도(Value)를 합쳐 결과 이미지를 만듭니다.

|HSV 값|대상 레이어|
|---|---|
|색조(Hue)|아래쪽 레이어|
|**채도(Saturation)**|위쪽 레이어|
|명도(Value)|아래쪽 레이어|

`HSV 채도(HSV Saturation)` 모드는 원본 이미지의 채도를 바꿔서 채도가 강렬한 이미지로 바꿀 수 있습니다. 아래 영상을 확인해주세요.

#### 영상 8.2.6.a21. `HSV 채도(HSV Saturation)`: 사용자가 지정한 색상의 색조로 이미지 전체에 적용
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/139b27e7-95a1-493e-a1ed-5544173f136c"></video>

## 3. HSL 색상(HSL Color)
#### 그림 8.2.6.a30. HSL 색상(HSL Color)
![08-02-06-layer_mode-hsv_component-03-hsl_color](https://github.com/wonder13662/gimp/assets/15767104/b91f0429-5220-4127-a5da-eef221a5db87)

## 4. HSV 명도(HSV Value)
#### 그림 8.2.6.a40. HSV 명도(HSV Value)
![08-02-06-layer_mode-hsv_component-04-hsv_value](https://github.com/wonder13662/gimp/assets/15767104/ec2b6046-1917-426c-8214-d6a8d5815323)

***

## 다른 페이지로 가기
[➡️ 다음: 8.2.7. 레이어 모드-LCh components](./08-02-07-lch-components-layer-modes.md)

[⬅️ 이전: 8.2.5. 레이어 모드-Inversion](./08-02-05-inversion-layer-modes.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-inversion.html)
