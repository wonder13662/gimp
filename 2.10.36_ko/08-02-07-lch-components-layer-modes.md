# 8.2.7. 레이어 모드-LCh components
`LCh` 레이어 모드는 `LCh` 컬러 모델을 사용합니다. `LCh`는 밝기(Lightness), 채도(Chroma), 색상(Hue)을 의미합니다. `LCh`는 수학적으로 [CIELAB 색 공간](https://ko.wikipedia.org/wiki/CIELAB_%EC%83%89_%EA%B3%B5%EA%B0%84)에서 왔습니다.

#### 표 8.2.7.a1. LCh 컬러모델과 HSV 컬러모델 비교

|LCh|HSV|
|---|---|
|밝기(Lightness)|명도(Value)|
|채도(Chroma)|채도(Saturation)|
|색상(Hue)|색상(Hue)|

## 1. LCh 색상(LCh Hue)
#### 그림 8.2.7.a10. LCh 색상(LCh Hue)
![08-02-07-layer_mode-lch_component-01-lch_hue](https://github.com/wonder13662/gimp/assets/15767104/1ab7457f-18b7-4d6b-b53f-862a61a49c25)

`LCh 색상(LCh Hue)` 모드는 [HSV 명도(HSV Value)](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-06-hsv-components-layer-modes.html#4-hsv-%EB%AA%85%EB%8F%84hsv-value)와 상당히 비슷하지만, 다른 방정식을 사용합니다.

`LCh 색상(LCh Hue)` 모드는 위쪽 레이어의 색상(Hue)와 아래쪽 레이어의 밝기(Lightness)와 채도(Chroma)를 합쳐 결과 이미지를 만듭니다.

|LCh 값|대상 레이어|
|---|---|
|밝기(Lightness)|아래쪽 레이어|
|채도(Chroma)|아래쪽 레이어|
|**색상(Hue)**|**위쪽 레이어**|

#### 영상 8.2.7.a11. `LCh 색상(LCh Hue)` 적용하기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/d0e09e26-1b6b-42c7-9ac4-b8a6d0922245"></video>

## 2. LCh 크로마(LCh Chroma)
#### 그림 8.2.7.a20. LCh 크로마(LCh Chroma)
![08-02-07-layer_mode-lch_component-02-lch_chroma](https://github.com/wonder13662/gimp/assets/15767104/fc528e3b-9c0d-4c20-8a79-848e95c99d52)

`LCh 크로마(LCh Chroma)` 모드는 [HSV 채도(HSV Saturation)](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-06-hsv-components-layer-modes.html#2-hsv-%EC%B1%84%EB%8F%84hsv-saturation)와 상당히 비슷하지만, 다른 방정식을 사용합니다.

`LCh 크로마(LCh Chroma)` 모드는 위쪽 레이어의 채도(Chroma)와 아래쪽 레이어의 밝기(Lightness)와 색상(Hue)를 합쳐 결과 이미지를 만듭니다.

|LCh 값|대상 레이어|
|---|---|
|밝기(Lightness)|아래쪽 레이어|
|**채도(Chroma)**|**위쪽 레이어**|
|색상(Hue)|아래쪽 레이어|

#### 영상 8.2.7.a21. `LCh 크로마(LCh Chroma)` 적용하기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/7a1090df-7966-4c49-b92b-1170cafb617d"></video>

## 3. LCh Color(LCh Color)
#### 그림 8.2.7.a30. LCh Color(LCh Color)
![08-02-07-layer_mode-lch_component-03-lch_color](https://github.com/wonder13662/gimp/assets/15767104/20ce38dd-51dd-4620-b5b0-001d7f5d5fbc)

`LCh Color(LCh Color)` 모드는 위쪽 레이어의 채도(Chroma), 색상(Hue) 그리고 아래쪽 레이어의 밝기(Lightness)를 합쳐 결과 이미지를 만듭니다.

|LCh 값|대상 레이어|
|---|---|
|밝기(Lightness)|아래쪽 레이어|
|**채도(Chroma)**|**위쪽 레이어**|
|**색상(Hue)**|**위쪽 레이어**|

`LCh Color(LCh Color)` 모드는 [HSL 색상(HSL Color)](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-06-hsv-components-layer-modes.html#3-hsl-%EC%83%89%EC%83%81hsl-color)와 비슷하게 동작합니다. 하지만 `LCh Color(LCh Color)` 모드는 [HSL 색상(HSL Color)](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-06-hsv-components-layer-modes.html#3-hsl-%EC%83%89%EC%83%81hsl-color)보다 좀 더 어둡습니다. 아래 영상에서 확인해보세요.

#### 영상 8.2.7.a31. `LCh Color(LCh Color)`로 대상의 색깔 바꾸기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/6cb9a75d-3faa-4db0-b849-2c681cb82b11"></video>

#### 영상 8.2.7.a32. `LCh Color(LCh Color)`와 `HSL 색상(HSL Color)` 비교하기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/1a6d68ce-8e83-40db-9edb-ed9d0999ffe8"></video>

`LCh Color(LCh Color)` 모드를 활용한 예로 [A tutorial on GIMP's very awesome LCH Blend Modes](https://ninedegreesbelow.com/photography/gimp-lch-blend-modes.html)를 참고해주세요.

## 4. LCh 밝기(LCh Lightness)
#### 그림 8.2.7.a40. LCh 밝기(LCh Lightness)
![08-02-07-layer_mode-lch_component-04-lch_lightness](https://github.com/wonder13662/gimp/assets/15767104/b7f27b94-2707-44c6-b341-b1ccda27f9eb)

`LCh 밝기(LCh Lightness)` 모드는 위쪽 레이어의 밝기(Lightness) 그리고 아래쪽 레이어의 채도(Chroma), 색상(Hue)을 합쳐 결과 이미지를 만듭니다.

|LCh 값|대상 레이어|
|---|---|
|**밝기(Lightness)**|**위쪽 레이어**|
|채도(Chroma)|아래쪽 레이어|
|색상(Hue)|아래쪽 레이어|

`LCh 밝기(LCh Lightness)` 모드는 [HSV 명도(HSV Value)](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-06-hsv-components-layer-modes.html#4-hsv-%EB%AA%85%EB%8F%84hsv-value)와 비슷하게 동작합니다.

`LCh 밝기(LCh Lightness)` 모드를 활용한 예로 [A tutorial on GIMP's very awesome LCH Blend Modes](https://ninedegreesbelow.com/photography/gimp-lch-blend-modes.html)를 참고해주세요.

## 5. 휘도(Luminance)
#### 그림 8.2.7.a50. 휘도(Luminance)
![08-02-07-layer_mode-lch_component-05-luminance](https://github.com/wonder13662/gimp/assets/15767104/bb450a4a-aac8-468f-880f-ff8fd1626805)

`휘도(Luminance)` 모드는 위쪽 레이어의 휘도를 아래쪽 레이어의 휘도로 나눕니다. 나눈 몫을 아래쪽 레이어의 컴포넌트의 값에 곱합니다.
[comment]: <> (TODO 실제 사용 사례에 대해서 내용 추가해야 함. 어디에 쓰는걸까?)

***

## 다른 페이지로 가기
[➡️ 다음: 8.3. 레거시 레이어 모드](./08-03-legacy-layer-modes.md)

[⬅️ 이전: 8.2.6. 레이어 모드-HSV components](./08-02-06-hsv-components-layer-modes.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-lch.html)
