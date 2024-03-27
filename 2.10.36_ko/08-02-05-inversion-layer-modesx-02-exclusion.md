# 8.2.5.2. 제외(Exclusion)
#### 그림 8.2.5.2.a1. 제외(Exclusion)
![08-02-05-layer_mode-inversion-02-exclusion](https://github.com/wonder13662/gimp/assets/15767104/1688b8bd-600d-4308-b42b-189a9b439344)

`제외(Exclusion)` 모드는 `차이점(Difference)` 모드의 부드러운 버전입니다. `제외(Exclusion)` 모드는 다른 레이어의 밝은 부분에 대해서 반전시킵니다. 매우 어두운 부분에는 아무것도 하지 않습니다.

#### 영상 8.2.5.2.a2. 제외(Exclusion): 예시 영상
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/2f86dd4b-da63-4821-96ab-ca9ec710cb4a"></video>

`제외(Exclusion)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `제외(Exclusion)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.2.5.2.a3. 제외(Exclusion): 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/68d82cd7-a7c7-4c18-825a-795b06677b6e"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 8.2.5.3. 빼기(Subtract)](./08-02-05-inversion-layer-modesx-03-subtract.md)

[⬅️ 이전: 8.2.5.1. 차이점(Difference)](./08-02-05-inversion-layer-modesx-01-difference.md)

[⬆️ 위: 8.2.5. 레이어 모드-반전(Inversion)](./08-02-05-inversion-layer-modes.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-inversion.html)