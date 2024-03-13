# 8.3.7. 레이어 모드(Legacy) - 어두운 색만(Darken only)
## 1. 이미지 예시
#### 그림 8.3.7.a11. 레이어 모드(Legacy) - 어두운 색만(Darken only)
![08-03-07-layer_mode_legacy-darken_only](https://github.com/wonder13662/gimp/assets/15767104/e814d7ae-62c0-4241-8120-4a9a15eec3f3)

`레이어 모드(Legacy) - 어두운 색만(Darken only)` 모드는 위쪽 레이어와 아래쪽 레이어의 각 픽셀 값을 비교하여 작은 값을 갖습니다.

한쪽 레이어가 검정색(0)일 경우에는 검은색 이미지가 됩니다.
#### 그림 8.3.7.a12. 레이어 모드(Legacy) - 어두운 색만(Darken only): 위쪽 레이어가 검은색
![08-03-07-layer_mode_legacy-darken_only-top_layer_black](https://github.com/wonder13662/gimp/assets/15767104/ee65c95c-74e1-48f3-baf2-9be24a66b3c6)

한쪽 레이어가 하얀색(255)일 경우에는 아무런 변화가 없습니다.
#### 그림 8.3.7.a13. 레이어 모드(Legacy) - 어두운 색만(Darken only): 위쪽 레이어가 하얀색
![08-03-07-layer_mode_legacy-darken_only-top_layer_white](https://github.com/wonder13662/gimp/assets/15767104/be9a12b4-d6be-475e-a12b-63fa3c28d25f)

## 2. 방정식과 예시
#### 그림 8.3.7.a21. 레이어 모드(Legacy) - 어두운 색만(Darken only): 방정식
![08-03-07-layer_mode_legacy-darken_only-equation](https://github.com/wonder13662/gimp/assets/15767104/c92beee0-5a37-429c-84d2-427ab3f73e2f)

⚠️ 주의: 위 방정식의 `min`은 두개의 값중 더 작은 값을 돌려줍니다.

아래 예시 이미지의 색상 정보를 확인해보면, 위 방정식이 적용된 것을 확인할 수 있습니다.

#### 그림 8.3.7.a22. 각 레이어별 RGB 값
![08-03-07-layer_mode_legacy-darken_only-color_example-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/5fe70e37-cbc7-4bed-8625-86906093c689)

#### 표 8.3.7.a23. 레이어별 RGB 값

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|227.0|53.0|**53.0**|
|녹색(Green)|113.0|61.0|**61.0**|
|청색(Blue)|113.0|123.0|**113.0**|

```
결과 값 RGB(Red)
= min(227.0, 53.0)
= 53.0

결과 값 RGB(Green)
= min(113.0, 61.0)
= 61.0

결과 값 RGB(Blue)
= min(113.0, 123.0)
= 113.0
```

## 3. 서로 바꿀 수 있는 레이어(Commutative Layer)
`레이어 모드(Legacy) - 어두운 색만(Darken only)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `레이어 모드(Legacy) - 어두운 색만(Darken only)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.3.7.a31. 레이어 모드(Legacy) - 어두운 색만(Darken only): 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/1e39e143-01c3-471f-bfcf-6927eaa068cd"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 8.3.8. 레이어 모드(Legacy) - 곱하기(Multiply)](./08-03-legacy-layer-modesx-08-darken_layer_mode-multiply.md)

[⬅️ 이전: 8.3.6. 레이어 모드(Legacy) - 더하기(Addition)](./08-03-legacy-layer-modesx-06-lighten_layer_mode-addition.md)

[⬆️ 위: 8.3. 레거시 레이어 모드](./08-03-legacy-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-layer-modes-legacy.html)