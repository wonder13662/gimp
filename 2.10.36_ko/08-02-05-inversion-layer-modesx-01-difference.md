# 8.2.5.1. 차이점(Difference)
#### 그림 8.2.5.1.a1. 차이점(Difference)
![08-02-05-layer_mode-inversion-01-difference](https://github.com/wonder13662/gimp/assets/15767104/ec82aa6b-698f-4174-b7ed-5774198c8c5d)

#### 8.2.5.1.a2. 차이점(Difference) 모드의 방정식
```
RGB 결과값 = |위쪽 레이어 RGB 값 - 아래쪽 레이어 RGB 값|
```

`차이점(Difference)` 모드는 아래쪽 레이어의 픽셀 값에서 위쪽 레이어의 픽셀의 값을 뺀 결과를 절대값을 만듭니다. `차이점(Difference)` 모드는 두 레이어를 비교할 때 유용합니다. 두 레이어가 같다면, 차이는 0이므로 검은색이 됩니다. 그렇지 않다면, 픽셀별로 차이점을 색조의 차이로 보여줍니다. 

아래 영상에서 같은 이미지와 그렇지 않을 때의 차이를 확인할 수 있습니다.

#### 영상 8.2.5.1.a3. `차이점(Difference)`: 같은 이미지 레이어와 그렇지 않은 레이어의 차이
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/72f5e5c5-5a02-4a8c-a45e-f5d8e0756af4"></video>

`차이점(Difference)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `차이점(Difference)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.2.5.1.a4. `차이점(Difference)`: 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/e897254a-0fe1-4149-8eac-3f8f9e397515"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 8.2.5.2. 제외(Exclusion)](./08-02-05-inversion-layer-modesx-02-exclusion.md)

[⬅️ 이전: 8.2.5. 레이어 모드-반전(Inversion)](./08-02-05-inversion-layer-modes.md)

[⬆️ 위: 8.2.5. 레이어 모드-반전(Inversion)](./08-02-05-inversion-layer-modes.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-inversion.html)