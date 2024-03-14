# 8.3.13. 레이어 모드(Legacy) - 차이점(Difference)
## 1. 이미지 예시
#### 그림 8.3.13.a11. 레이어 모드(Legacy) - 차이점(Difference)
![08-03-13-layer_mode_legacy-difference](https://github.com/wonder13662/gimp/assets/15767104/f7259329-dc7c-4e0a-8a99-3fc933a0aea8)

`레이어 모드(Legacy) - 차이점(Difference)` 모드는 이미지를 반전시킬 때 사용합니다.

## 2. 방정식과 예시
`레이어 모드(Legacy) - 차이점(Difference)` 모드의 방정식은 아래쪽 레이어의 픽셀 값에서 위쪽 레이어의 픽셀 값을 뺀 뒤, 그 결과의 절대값을 가져갑니다.

#### 그림 8.3.13.a21. 레이어 모드(Legacy) - 차이점(Difference): 방정식
![08-03-13-layer_mode_legacy-difference-equation](https://github.com/wonder13662/gimp/assets/15767104/666591fa-d1fb-4ce7-9b06-7ed19e2b77f0)

아래 예시 이미지의 색상 정보를 확인해보면, 위 방정식이 적용된 것을 확인할 수 있습니다.

#### 그림 8.3.13.a22. 각 레이어별 RGB 값
![08-03-13-layer_mode_legacy-difference-color_example-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/09683fbf-e630-415d-8b6c-578494c5abbc)

#### 표 8.3.8.a23. 레이어별 RGB 값

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|227.0|53.0|**174.0**|
|녹색(Green)|113.0|61.0|**52.0**|
|청색(Blue)|113.0|123.0|**10.0**|

```
결과 값 RGB(Red)
= |53.0 - 227.0|
= |-174|
= 174.0

결과 값 RGB(Green)
= |61.0 - 113.0|
= |-52|
= 52.0

결과 값 RGB(Blue)
= |123.0 - 113.0|
= |10|
= 10.0
```

## 3. 서로 바꿀 수 있는 레이어(Commutative Layer)
`레이어 모드(Legacy) - 차이점(Difference)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `레이어 모드(Legacy) - 차이점(Difference)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.3.13.a31. 레이어 모드(Legacy) - 차이점(Difference): 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/5b0b31f4-d5b1-4b62-b874-0c6d8a3dee0f"></video>

***

## 다른 페이지로 가기
[➡️ 다음: ?]()

[⬅️ 이전: 8.3.12. 레이어 모드(Legacy) - 강한 빛(Hard light)](./08-03-legacy-layer-modesx-12-contrast_layer_mode-hard_light.md)

[⬆️ 위: 8.3. 레거시 레이어 모드](./08-03-legacy-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-layer-modes-legacy.html)