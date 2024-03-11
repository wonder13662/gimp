# 8.2.5. 레이어 모드-반전(Inversion)
## 1. 차이점(Difference)
#### 그림 8.2.5.a10. 차이점(Difference)
![08-02-05-layer_mode-inversion-01-difference](https://github.com/wonder13662/gimp/assets/15767104/ec82aa6b-698f-4174-b7ed-5774198c8c5d)

#### 8.2.5.a11. 차이점(Difference) 모드의 방정식
```
RGB 결과값 = |위쪽 레이어 RGB 값 - 아래쪽 레이어 RGB 값|
```

`차이점(Difference)` 모드는 아래쪽 레이어의 픽셀 값에서 위쪽 레이어의 픽셀의 값을 뺀 결과를 절대값을 만듭니다. `차이점(Difference)` 모드는 두 레이어를 비교할 때 유용합니다. 두 레이어가 같다면, 차이는 0이므로 검은색이 됩니다. 그렇지 않다면, 픽셀별로 차이점을 색조의 차이로 보여줍니다. 

아래 영상에서 같은 이미지와 그렇지 않을 때의 차이를 확인할 수 있습니다.

#### 영상 8.2.5.a12. `차이점(Difference)`: 같은 이미지 레이어와 그렇지 않은 레이어의 차이
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/72f5e5c5-5a02-4a8c-a45e-f5d8e0756af4"></video>

`차이점(Difference)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `차이점(Difference)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.2.5.a13. `차이점(Difference)`: 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/e897254a-0fe1-4149-8eac-3f8f9e397515"></video>

## 2. 제외(Exclusion)
#### 그림 8.2.5.a20. 제외(Exclusion)
![08-02-05-layer_mode-inversion-02-exclusion](https://github.com/wonder13662/gimp/assets/15767104/1688b8bd-600d-4308-b42b-189a9b439344)

`제외(Exclusion)` 모드는 `차이점(Difference)` 모드의 부드러운 버전입니다. `제외(Exclusion)` 모드는 다른 레이어의 밝은 부분에 대해서 반전시킵니다. 매우 어두운 부분에는 아무것도 하지 않습니다.

#### 영상 8.2.5.a21. 제외(Exclusion): 예시 영상
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/2f86dd4b-da63-4821-96ab-ca9ec710cb4a"></video>

`제외(Exclusion)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `제외(Exclusion)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.2.5.a22. 제외(Exclusion): 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/68d82cd7-a7c7-4c18-825a-795b06677b6e"></video>

## 3. 빼기(Subtract)
#### 그림 8.2.5.a30. 빼기(Subtract)
![08-02-05-layer_mode-inversion-03-subtract](https://github.com/wonder13662/gimp/assets/15767104/99cc7034-cb9b-4d83-acdb-4e8366e45d69)

#### 8.2.5.a31. 빼기(Subtract) 모드의 방정식
```
RGB 결과값 = max(아래쪽 레이어 RGB 값 - 위쪽 레이어 RGB 값, 0)
```

⚠️ 주의: 위 방정식의 `max`은 두개의 값 중 더 큰 값을 돌려줍니다.

Subtract mode subtracts the pixel value of the upper layer from the pixel value of the lower layer. The resulting image is normally darker. You might get a lot of black or near-black in the resulting image.

`빼기(Subtract)` 모드는 아래쪽 레이어의 픽셀 값에서 위쪽 레이어의 픽셀 값을 뺍니다. 결과 이미지는 보통 더 어두워집니다. 결과 값이 음수인 경우에는 0(검은색)으로 설정됩니다.

## 4. 질감 드러내기(Grain extract)
#### 그림 8.2.5.a40. 질감 드러내기(Grain extract)
![08-02-05-layer_mode-inversion-04-grain_extract](https://github.com/wonder13662/gimp/assets/15767104/6563b3f3-64c4-45da-b179-ec3059cc7cdb)

## 5. 질감 합치기(Grain merge)
#### 그림 8.2.5.a50. 질감 합치기(Grain merge)
![08-02-05-layer_mode-inversion-05-grain_merge](https://github.com/wonder13662/gimp/assets/15767104/a25eb580-cb91-40bc-8230-c659500ec32f)

## 6. 나누기(Divide)
#### 그림 8.2.5.a60. 나누기(Divide)
![08-02-05-layer_mode-inversion-06-divide](https://github.com/wonder13662/gimp/assets/15767104/e8d1f72e-42ec-484c-b1e9-53dc06b9351d)

***

## 다른 페이지로 가기
[➡️ 다음: 8.2.6. 레이어 모드-HSV components](./08-02-06-hsv-components-layer-modes.md)

[⬅️ 이전: 8.2.4. 레이어 모드-Contrast](./08-02-04-contrast-layer-modes.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-inversion.html)