# 8.2.2.4. 닷지(Dodge)
#### 그림 8.2.2.4.a1. 닷지(Dodge)
![layer_mode-lighten-04-dodge](https://github.com/wonder13662/gimp/assets/15767104/6f0872ea-c3e8-48bf-8aa9-818cf24d10d2)

`닷지(Dodge)` 모드는 아래쪽 레이어의 픽셀의 RGB값을 위쪽 레이어의 반전시킨 픽셀의 RGB값으로 나눈 것입니다. 결과 이미지는 보통 더 밝아집니다. 하지만 일부 색상은 반전될 수도 있습니다.

#### 8.2.2.4.1.a1. 닷지(Dodge) 모드 방정식
![layer_mode-lighten-04-dodge-equation](https://github.com/wonder13662/gimp/assets/15767104/0aa732a5-1d58-4211-993f-6f87a6d90ba0)

#### 8.2.2.4.a2. RGB 색상값의 0부터 255인 경우의 닷지(Dodge) 모드 방정식
```
픽셀의 `닷지(Dodge)` 모드의 RGB 색상값 = (256 x 아래쪽 레이어의 RGB 값) / ((255 - 위쪽 레이어의 RGB 값) + 1)
```

[8.2.2.4.1. 닷지(Dodge) 모드 방정식](./08-02-02-lighten-layer-modex-04-dodgex-01-equation.md)에서 `닷지(Dodge)` 모드의 픽셀 RGB 값의 계산 과정의 실제 사례를 확인할 수 있습니다.

사진 보정에서 닷지(Dodge)는 어두운 방에서 찍은 사진의 특정 부분 노출값을 증가시켜 줄 때 사용됩니다. 이를 적용하면 그림자 속에 숨어있던 부분들이 드러납니다. 하지만 그레이스케일의 이미지에서 이러한 용도로 사용한다면, 레이어 모드보다 페인팅 도구 중 닷지(Dodge)/번(Burn) 도구를 사용하는 것이 좋습니다.

***

## 다른 페이지로 가기
[➡️ 다음: 8.2.2.5. 더하기(Addition)](./08-02-02-lighten-layer-modex-05-addition.md)

[⬅️ 이전: 8.2.2.3. 화면(Screen)](./08-02-02-lighten-layer-modex-03-screen.md)

[⬆️ 위: 8.2.2. 레이어 모드-Lighten](./08-02-02-lighten-layer-mode.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-lighten.html#layer-mode-dodge)
