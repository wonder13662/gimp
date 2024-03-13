# 8.3.8. 레이어 모드(Legacy) - 곱하기(Multiply)
## 1. 이미지 예시
#### 그림 8.3.8.a11. 레이어 모드(Legacy) - 곱하기(Multiply)
![08-03-08-layer_mode_legacy-multiply](https://github.com/wonder13662/gimp/assets/15767104/4f4de759-de2d-48ba-ba8c-8913c6e04813)

`레이어 모드(Legacy) - 곱하기(Multiply)` 모드는 위쪽 레이어와 아래쪽 레이어의 각 픽셀의 색상값을 서로 곱한 뒤, 255로 나눈 값을 가집니다. 결과 이미지는 보통 더 어두워 집니다.

한쪽 레이어가 검정색(0)일 경우에는 검은색 이미지가 됩니다.
#### 그림 8.3.8.a12. 레이어 모드(Legacy) - 곱하기(Multiply): 위쪽 레이어가 검은색
![08-03-08-layer_mode_legacy-multiply-top_layer_black](https://github.com/wonder13662/gimp/assets/15767104/83bd6d35-a425-4d58-b0b6-c1fac26e3fca)

한쪽 레이어가 하얀색(255)일 경우에는 아무런 변화가 없습니다.
#### 그림 8.3.8.a13. 레이어 모드(Legacy) - 곱하기(Multiply): 위쪽 레이어가 하얀색
![08-03-08-layer_mode_legacy-multiply-top_layer_white](https://github.com/wonder13662/gimp/assets/15767104/9da0b790-8824-4483-8467-e25feef94372)

## 2. 방정식과 예시
#### 그림 8.3.8.a21. 레이어 모드(Legacy) - 곱하기(Multiply): 방정식
![08-03-08-layer_mode_legacy-multiply-equation](https://github.com/wonder13662/gimp/assets/15767104/acf9f17b-2528-44a1-af25-817530ef5bc7)

#### 그림 8.3.8.a22. 각 레이어별 RGB 값
![08-03-08-layer_mode_legacy-multiply-color_example-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/3be80233-1944-4fc6-a364-e7073951246c)

#### 표 8.3.8.a23. 레이어별 RGB 값

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|227.0|53.0|**47.0**|
|녹색(Green)|113.0|61.0|**27.0**|
|청색(Blue)|113.0|123.0|**55.0**|

```
결과 값 RGB(Red)
= 227.0 x 53.0 / 255
= 47.1803921569
= 47.0

결과 값 RGB(Green)
= 113.0 x 61.0 / 255
= 27.03137254902
= 27.0

결과 값 RGB(Blue)
= 113.0 x 123.0 / 255
= 54.5058823529
= 55.0
```

## 3. 서로 바꿀 수 있는 레이어(Commutative Layer)
`레이어 모드(Legacy) - 곱하기(Multiply)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `레이어 모드(Legacy) - 곱하기(Multiply)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.3.8.a31. 레이어 모드(Legacy) - 곱하기(Multiply): 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/dfb41f7b-4e93-41e2-a905-41bcfcbed0a5"></video>

***

## 다른 페이지로 가기
[➡️ 다음: ?]()

[⬅️ 이전: 8.3.7. 레이어 모드(Legacy) - 어두운 색만(Darken only)](./08-03-legacy-layer-modesx-07-darken_layer_mode-darken_only.md)

[⬆️ 위: 8.3. 레거시 레이어 모드](./08-03-legacy-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-layer-modes-legacy.html)