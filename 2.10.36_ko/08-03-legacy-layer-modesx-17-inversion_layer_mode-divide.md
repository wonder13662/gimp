# 8.3.17. 레이어 모드(Legacy) - 나누기(Divide)
## 1. 이미지 예시
#### 그림 8.3.17.a11. 레이어 모드(Legacy) - 나누기(Divide)
![08-03-17-layer_mode_legacy-divide](https://github.com/wonder13662/gimp/assets/15767104/3d5ddf5c-6bf3-4362-bbe5-d8782cec44b2)

`레이어 모드(Legacy) - 나누기(Divide)` 모드를 적용하면 이미지는 밝아집니다. 때로는 태운 것처럼 하얀 부분이 많아지기도 합니다.

## 2. 방정식과 예시
`레이어 모드(Legacy) - 나누기(Divide)` 모드는 아래쪽 레이어의 픽셀 값에 256을 곱한 뒤, 위쪽 레이어의 픽셀 값으로 나눈 값을 가져갑니다. 위쪽 레이어의 픽셀 값에 1을 더해 분모가 0이 되는 것을 피합니다.

#### 그림 8.3.17.a21. 레이어 모드(Legacy) - 나누기(Divide): 방정식
![08-03-17-layer_mode_legacy-divide-equation](https://github.com/wonder13662/gimp/assets/15767104/5b54800f-0486-4cb5-a833-790eb0defeca)

아래 예시 이미지의 색상 정보를 확인해보면, 위 방정식이 적용된 것을 확인할 수 있습니다.

#### 그림 8.3.17.a22. 각 레이어별 RGB 값
![08-03-17-layer_mode_legacy-divide-color_example-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/6da4abe1-c256-4c25-bb9d-67b58ee40cdd)

#### 표 8.3.8.a23. 레이어별 RGB 값

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|227.0|53.0|**60.0**|
|녹색(Green)|113.0|61.0|**138.0**|
|청색(Blue)|113.0|123.0|**255.0**|

```
결과 값 RGB(Red)
= min((256 x 53.0) / (227.0 + 1), 255)
= min(13568 / 228, 255)
= min(59.5087719298, 255)
= 59.5087719298
= 60.0

결과 값 RGB(Green)
= min((256 x 61.0) / (113.0 + 1), 255)
= min(15616 / 114, 255)
= min(136.9824561404, 255)
= 136.9824561404
= 138.0

결과 값 RGB(Blue)
= min((256 x 123.0) / (113.0 + 1), 255)
= min(31488 / 114, 255)
= min(276.2105263158, 255)
= 255.0
```

***

## 다른 페이지로 가기
[➡️ 다음: ?]()

[⬅️ 이전: 8.3.16. 레이어 모드(Legacy) - 질감 합치기(Grain merge)](./08-03-legacy-layer-modesx-16-inversion_layer_mode-grain_merge.md)

[⬆️ 위: 8.3. 레거시 레이어 모드](./08-03-legacy-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-layer-modes-legacy.html)