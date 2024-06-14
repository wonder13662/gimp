# 8.3.6. 레이어 모드(Legacy) - 더하기(Addition)
## 1. 이미지 예시
#### 그림 8.3.6.a11. 레이어 모드(Legacy) - 더하기(Addition)
![08-03-06-layer_mode_legacy-addition](https://github.com/wonder13662/gimp/assets/15767104/e2c77dd3-7d1e-481d-bfb4-1752e3fde7ce)

`레이어 모드(Legacy) - 더하기(Addition)` 모드를 적용하면 이미지는 밝아집니다.

## 2. 방정식과 예시
#### 그림 8.3.6.a21. 레이어 모드(Legacy) - 더하기(Addition): 방정식
![08-03-06-layer_mode_legacy-addition-equation](https://github.com/wonder13662/gimp/assets/15767104/78934c43-efd6-424e-a501-2a860413f105)

⚠️ 주의: 위 방정식의 `min`은 두개의 값중 더 작은 값을 돌려줍니다.

모든 픽셀은 255를 최대값으로 갖습니다. 255보다 큰 값은 255로 조정됩니다.

아래 예시 이미지의 색상 정보를 확인해보면, 위 방정식이 적용된 것을 확인할 수 있습니다.

#### 그림 8.3.6.a22. 각 레이어별 RGB 값
![08-03-06-layer_mode_legacy-addition-color_example-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/cf54d73e-d73e-42f2-8295-0f8cb53e2fff)

#### 표 8.3.6.a23. 레이어별 RGB 값

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|227.0|53.0|**255.0**|
|녹색(Green)|113.0|61.0|**174.0**|
|청색(Blue)|113.0|123.0|**236.0**|

```
결과 값 RGB(Red)
= min((227.0 + 53.0), 255)
= min(280, 255)
= 255.0

결과 값 RGB(Green)
= min((113.0 + 61.0), 255)
= min(174, 255)
= 174

결과 값 RGB(Blue)
= min((113.0 + 123.0), 255)
= min(236, 255)
= 236
```

## 3. 서로 바꿀 수 있는 레이어(Commutative Layer)
`레이어 모드(Legacy) - 더하기(Addition)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `레이어 모드(Legacy) - 더하기(Addition)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.3.6.a31. 레이어 모드(Legacy) - 더하기(Addition): 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/b6b692ad-69d7-4a2c-acc9-6583dfaa7b28"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 8.3.7. 레이어 모드(Legacy) - 어두운 색만(Darken only)](./08-03-07-darken_layer_mode-darken_only.md)

[⬅️ 이전: 8.3.5. 레이어 모드(Legacy) - 닷지(Dodge)](./08-03-05-lighten_layer_mode-dodge.md)

[⬆️ 위: 8.3. 레거시 레이어 모드](./08-03-00-legacy-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-layer-modes-legacy.html)