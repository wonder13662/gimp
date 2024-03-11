# 8.2.3.3. 곱하기(Multiply) 모드 방정식
`곱하기(Multiply)` 모드는 아래와 같은 방정식을 갖습니다.

#### 8.2.3.3.a2. 곱하기(Multiply) 모드 방정식 해석
```
최종 결과 RGB 값 = (아래쪽 레이어의 RGB 값 x 위쪽 레이어의 RGB 값) / 255
```

그럼 실제 사례를 살펴보겠습니다.

## 1. 첫번째 예제
#### 그림 8.2.3.3.a101. 곱하기(Multiply) 모드 예제
![08-02-03-03-layer_mode-darken-03-multiply-color_example-01(50%)](https://github.com/wonder13662/gimp/assets/15767104/847bd9eb-c5d0-4644-b435-0bae21b67dc1)

#### 그림 8.2.3.3.a102. 각 레이어별 RGB  값
![08-02-03-03-layer_mode-darken-03-multiply-color_example-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/275a8496-e5c5-4c61-b425-becaebdd2fcd)

#### 표 8.2.3.3.a103. 레이어별 RGB 값

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|249.0|255.0|**249.0**|
|녹색(Green)|251.0|0.0|**0.0**|
|청색(Blue)|10.0|255.0|**10.0**|

```
결과 값 RGB(Red)
= (249.0 x 255.0) / 255
= 249.0

결과 값 RGB(Green)
= (251.0 x 0.0) / 255
= 0.0

결과 값 RGB(Blue)
= (10.0 x 255.0) / 255
= 10.0
```

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

## 2. 두번째 예제
#### 그림 8.2.3.3.a201. 곱하기(Multiply) 모드 예제
![08-02-03-02-layer_mode-darken-02-luma_darken_only-color_example-02(50%)](https://github.com/wonder13662/gimp/assets/15767104/b98dcf9e-19ff-49c7-b0c9-e4c669ae70eb)

[이미지 메뉴 바](./03-02-02-image-windowx-02-image-menu.md)의 `색` → `무채화` → `무채화`로 휘도값을 가진 흑백이미지로 변경합니다.

#### 그림 8.2.3.3.a202. 각 레이어별 휘도 정보
![08-02-03-02-layer_mode-darken-02-luma_darken_only-color_example-02-BW_luminance(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/afe586a7-78d1-4eab-926f-7daf97264638)

||위쪽 레이어|아래쪽 레이어|
|---|---|---|
|적색(Red)|149.0|**65.0**|
|녹색(Green)|149.0|**65.0**|
|청색(Blue)|149.0|**65.0**|

```
선택된 휘도(Luminance) 값
= min(149.0, 65.0)
= 65.0
```

아래쪽 레이어의 휘도값(65.0)이 위쪽 레이어의 휘도값(149.0)보다 낮으므로 아래쪽 레이어의 RGB 값이 결과 이미지에 반영됩니다.

#### 그림 8.2.3.3.a203. 각 레이어별 RGB  값
![08-02-03-02-layer_mode-darken-02-luma_darken_only-color_example-02-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/9c76013e-70bc-427a-aa94-bc27a4b0a9a5)

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|227.0|**53.0**|**53.0**|
|녹색(Green)|113.0|**61.0**|**61.0**|
|청색(Blue)|113.0|**123.0**|**123.0**|

위 계산 결과를 통하여 휘도가 65.0로 더 어두운 `아래쪽 레이어`의 색상이 선택된 것을 확인할 수 있습니다.

## 3. 세번째 예제 - 아래쪽 레이어가 검은색
#### 그림 8.2.3.3.a301. 곱하기(Multiply) 모드 예제
![08-02-03-02-layer_mode-darken-02-luma_darken_only-color_example-03-black(50%)](https://github.com/wonder13662/gimp/assets/15767104/84fce6a9-d1e7-4939-b7be-9735506ab355)

[이미지 메뉴 바](./03-02-02-image-windowx-02-image-menu.md)의 `색` → `무채화` → `무채화`로 휘도값을 가진 흑백이미지로 변경합니다.

#### 그림 8.2.3.3.a302. 각 레이어별 휘도 정보
![08-02-03-02-layer_mode-darken-02-luma_darken_only-color_example-03-BW_luminance(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/ce1a4d8e-af33-4dda-9557-d6b1be38c333)

||위쪽 레이어|아래쪽 레이어|
|---|---|---|
|적색(Red)|149.0|**0.0**|
|녹색(Green)|149.0|**0.0**|
|청색(Blue)|149.0|**0.0**|

```
선택된 휘도(Luminance) 값
= min(149.0, 0.0)
= 0.0
```

아래쪽 레이어의 휘도값(0.0)이 위쪽 레이어의 휘도값(149.0)보다 낮으므로 아래쪽 레이어의 RGB 값이 결과 이미지에 반영됩니다.

#### 그림 8.2.3.3.a303. 각 레이어별 RGB  값
![08-02-03-02-layer_mode-darken-02-luma_darken_only-color_example-03-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/778d2218-73b4-4866-bb7e-4060633df5ac)

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|227.0|**0.0**|**0.0**|
|녹색(Green)|113.0|**0.0**|**0.0**|
|청색(Blue)|113.0|**0.0**|**0.0**|

위 계산 결과를 통하여 휘도가 0.0로 더 어두운 `아래쪽 레이어`의 색상이 선택된 것을 확인할 수 있습니다.

## 4. 네번째 예제 - 아래쪽 레이어가 하얀색
#### 그림 8.2.3.3.a401. 곱하기(Multiply) 모드 예제
![08-02-03-02-layer_mode-darken-02-luma_darken_only-color_example-04-white(50%)](https://github.com/wonder13662/gimp/assets/15767104/b71d5afd-f643-42aa-b322-0f9a91cb633f)

[이미지 메뉴 바](./03-02-02-image-windowx-02-image-menu.md)의 `색` → `무채화` → `무채화`로 휘도값을 가진 흑백이미지로 변경합니다.

#### 그림 8.2.3.3.a402. 각 레이어별 휘도 정보
![08-02-03-02-layer_mode-darken-02-luma_darken_only-color_example-04-BW_luminance(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/035832f1-661c-478a-90eb-2c8d49d1114e)

||위쪽 레이어|아래쪽 레이어|
|---|---|---|
|적색(Red)|**149.0**|255.0|
|녹색(Green)|**149.0**|255.0|
|청색(Blue)|**149.0**|255.0|

```
선택된 휘도(Luminance) 값
= min(149.0, 255.0)
= 149.0
```

위쪽 레이어의 휘도값(149.0)이 아래쪽 레이어의 휘도값(255.0)이 보다 낮으므로 아래쪽 레이어의 RGB 값이 결과 이미지에 반영됩니다.

#### 그림 8.2.3.3.a403. 각 레이어별 RGB  값
![08-02-03-02-layer_mode-darken-02-luma_darken_only-color_example-04-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/2c0bfddc-97d1-4fab-91cb-8c965106e6d1)

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|**227.0**|255.0|**227.0**|
|녹색(Green)|**113.0**|255.0|**113.0**|
|청색(Blue)|**113.0**|255.0|**113.0**|

위 계산 결과를 통하여 휘도가 149.0로 더 어두운 `위쪽 레이어`의 색상이 선택된 것을 확인할 수 있습니다.

***

## 다른 페이지로 가기
[⬆️ 위: 8.2.3. 레이어 모드-어두움(Darken)](./08-02-03-darken-layer-modes.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-lighten.html)
