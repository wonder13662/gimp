# 8.3.3. 레이어 모드(Legacy) - 밝은 색만(Lighten only)
## 1. 이미지 예시
#### 그림 8.3.3.a11. 레이어 모드(Legacy) - 밝은 색만(Lighten only)
![08-03-03-layer_mode_legacy-lighten_only](https://github.com/wonder13662/gimp/assets/15767104/5b6ec47d-2128-45fe-9cb3-137f08caea12)

`레이어 모드(Legacy) - 밝은 색만(Lighten only)` 모드는 위쪽 레이어(마스크)와 아래쪽 레이어(배경 이미지)의 각 픽셀 값을 비교해서 큰 값을 가져갑니다. 따라서 한 레이어가 검정색 이미지이면 최종 이미지에는 변화가 없고, 하얀색 이미지이면 최종 이미지는 하얀색 이미지가 됩니다.

## 2. 방정식과 예시
#### 그림 8.3.3.a21. 레이어 모드(Legacy) - 밝은 색만(Lighten only): 방정식
![08-03-03-layer_mode_legacy-lighten_only-equation](https://github.com/wonder13662/gimp/assets/15767104/60f227b4-db7a-46e5-8b06-1bcf91e26e34)

⚠️ 주의: 위 방정식의 `max`은 두개의 값 중 더 큰 값을 돌려줍니다.

아래 예시 이미지의 색상 정보를 확인해보면, 위 방정식이 적용된 것을 확인할 수 있습니다.

#### 그림 8.3.3.a22. 각 레이어별 RGB 값
![08-03-03-layer_mode_legacy-lighten_only-color_example-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/49625b08-0b7c-4790-8763-43e729f6a563)

#### 표 8.3.3.a23. 레이어별 RGB 값

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|227.0|53.0|**227.0**|
|녹색(Green)|113.0|61.0|**113.0**|
|청색(Blue)|113.0|123.0|**123.0**|

```
결과 값 RGB(Red)
= max(227.0, 53.0)
= 227.0

결과 값 RGB(Green)
= max(113.0, 61.0)
= 113.0

결과 값 RGB(Blue)
= max(113.0, 123.0)
= 123.0
```

## 3. 서로 바꿀 수 있는 레이어(Commutative Layer)
`레이어 모드(Legacy) - 밝은 색만(Lighten only)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `레이어 모드(Legacy) - 밝은 색만(Lighten only)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.3.3.a31. 레이어 모드(Legacy) - 밝은 색만(Lighten only): 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/53ff3837-274b-43b1-969a-12837585eabf"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 8.3.4. 레이어 모드(Legacy) - 화면(Screen)](./08-03-04-lighten_layer_mode-screen.md)

[⬅️ 이전: 8.3.2. 레이어 모드(Legacy) - 분해(Dissolve)](./08-03-02-normal_layer_mode-dissolve.md)

[⬆️ 위: 8.3. 레거시 레이어 모드](./08-03-00-legacy-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-layer-modes-legacy.html)