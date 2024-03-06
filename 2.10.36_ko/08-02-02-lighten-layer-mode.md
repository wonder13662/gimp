# 8.2.2. 레이어 모드-Lighten
`밝은 색(Lighten)` 그룹은 레이어를 더 밝게 만들어 줍니다.

## 1. 밝은 색만(Lighten only)
#### 그림 8.2.2.a1. 밝은 색만(Lighten only): 위쪽 레이어(마스크)의 불투명도(Opacity)가 100%
![layer_mode-lighten-01-lighten_only](https://github.com/wonder13662/gimp/assets/15767104/b3feb4cb-af62-4ab3-bb31-0393fa70baf1)

`밝은 색만(Lighten only)` 모드는 위쪽 레이어와 아래쪽 레이어의 각 픽셀의 RGB값을 비교하여 더 밝은 RGB값을 선택합니다. 따라서 한 레이어가 [검정색 이미지](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-02-lighten-layer-modex-01-lighten_only_mode_equation.html#3-%EC%84%B8%EB%B2%88%EC%A7%B8-%EC%98%88%EC%A0%9C---%EC%95%84%EB%9E%98%EC%AA%BD-%EB%A0%88%EC%9D%B4%EC%96%B4%EA%B0%80-%EA%B2%80%EC%9D%80%EC%83%89)이면 최종 이미지에는 변화가 없고, [하얀색 이미지](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-02-lighten-layer-modex-01-lighten_only_mode_equation.html#4-%EB%84%A4%EB%B2%88%EC%A7%B8-%EC%98%88%EC%A0%9C---%EC%95%84%EB%9E%98%EC%AA%BD-%EB%A0%88%EC%9D%B4%EC%96%B4%EA%B0%80-%ED%95%98%EC%96%80%EC%83%89)이면 최종 이미지는 하얀색 이미지가 됩니다. 

#### 영상 8.2.2.a2. 밝은 색만(Lighten only): 위쪽 레이어가 검정색 또는 하얀색
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/8ab044b7-7fb3-4a81-8996-51f698d5fa6a"></video>

`밝은 색만(Lighten only)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `밝은 색만(Lighten only)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.2.2.a3. 밝은 색만(Lighten only): 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/ba0c1475-7112-4a0b-a595-5feeac2eb4e1"></video>

[8.2.2.1. 밝은 색만(Lighten only) 모드 방정식](./08-02-02-lighten-layer-modex-01-lighten_only_mode_equation.md)에서 실제 사례로 확인해보실 수 있습니다.

## 2. 휘도가 밝은 색만(Luma/Luminance lighten only)
`휘도가 밝은 색만(Luma/Luminance lighten only)` 모드는 위 아래의 레이어의 각 픽셀의 휘도(luminance)를 비교합니다. 그리고 더 큰 휘도값을 가진 픽셀의 RGB값을 결과 이미지에 씁니다. `휘도(Luminance)`값은 LCh의 L(Lightness)입니다. 이에 대한 내용은 [8.2.2.2. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 방정식](./08-02-02-lighten-layer-modex-02-luma_mode_equation.md)을 참고해주세요.

#### 그림 8.2.2.a11. 휘도가 밝은 색만(Luma/Luminance lighten only)
![layer_mode-lighten-02-luma_luminance_lighten_only](https://github.com/wonder13662/gimp/assets/15767104/dd263715-e508-42e1-a75f-3781b744faa7)

[완전히 검은색 레이어](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-02-lighten-layer-modex-02-luma_mode_equation.html#2-3-%EC%84%B8%EB%B2%88%EC%A7%B8-%EC%98%88%EC%A0%9C---%EC%95%84%EB%9E%98%EC%AA%BD-%EB%A0%88%EC%9D%B4%EC%96%B4%EA%B0%80-%EA%B2%80%EC%9D%80%EC%83%89)는 결과 이미지에 영향을 주지 않습니다. [완전히 하얀색 레이어](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-02-lighten-layer-modex-02-luma_mode_equation.html#2-4-%EB%84%A4%EB%B2%88%EC%A7%B8-%EC%98%88%EC%A0%9C---%EC%95%84%EB%9E%98%EC%AA%BD-%EB%A0%88%EC%9D%B4%EC%96%B4%EA%B0%80-%ED%95%98%EC%96%80%EC%83%89)는 결과 이미지를 하얀색 이미지로 만들어 버립니다. 

#### 영상 8.2.2.a12. 휘도가 밝은 색만(Luma/Luminance lighten only): 위쪽 레이어가 검정색 또는 하얀색
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/79601a9a-5922-4e58-8d3a-d020fd08eefb"></video>

`휘도가 밝은 색만(Luma/Luminance lighten only)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `휘도가 밝은 색만(Luma/Luminance lighten only)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.2.2.a23. 밝은 색만(Lighten only): 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/61ae966e-78f3-4583-952f-4cc88238759a"></video>

`Luma`는 사람이 인식할 수 있는 범위 안에서의 휘도입니다.

[8.2.2.2. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 방정식](./08-02-02-lighten-layer-modex-02-luma_mode_equation.md)에서 `휘도가 밝은 색만(Luma/Luminance lighten only)` 모드의 예제를 확인할 수 있습니다.

## 3. 화면(Screen)
#### 그림 8.2.2.a25. 화면(Screen)
![layer_mode-lighten-03-screen](https://github.com/wonder13662/gimp/assets/15767104/2eb78d94-6380-4697-8aa3-7c460c8333ff)

`화면(Screen)` 모드는 이미지의 2개의 레이어의 보이는 각각의 픽셀의 RGB 값을 아래 방정식에 따라 결과값을 얻습니다. 

#### 8.2.2.1.a21. 화면(Screen) 모드 방정식
![layer_mode-lighten-03-screen-equation](https://github.com/wonder13662/gimp/assets/15767104/981c61cb-c9c4-4f8c-9215-9d87c82f9778)

#### 8.2.2.1.a1. RGB 색상값의 0부터 255인 경우의 화면(Screen) 모드 방정식
```
픽셀의 `화면(Screen)` 모드의 RGB 색상값 = 255 - ((255 - 위쪽 레이어의 픽셀의 RGB 색상값) x (255 - 아래쪽 레이어의 픽셀의 RGB 색상값) / 255)
```

[8.2.2.3. 화면(Screen) 모드 방정식](./08-02-02-lighten-layer-modex-03-screen_mode_equation.md)에서 `화면(Screen)` 모드의 픽셀 RGB 값의 계산 과정의 실제 사례를 확인할 수 있습니다.

결과 이미지는 보통은 더 밝아집니다. 때때로 형체의 일부분이 사라지기도 합니다. 예외적으로 검은색 레이어는 다른 레이어를 바꾸지 않습니다. 그리고 하얀색 레이어는 결과 이미지를 하얗게 만듭니다. 이미지의 어두운 색은 좀 더 투명하게 바뀝니다.

`화면(Screen)` 모드는 주로 위쪽 레이어의 검은색을 제거하기 위해 사용됩니다.

`화면(Screen)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `화면(Screen)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.2.2.a24. 화면(Screen): 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/5abc2173-d9c6-4abe-9947-a0541133cd4e"></video>

## 4. 닷지(Dodge)
#### 그림 8.2.2.a31. 닷지(Dodge)
![layer_mode-lighten-04-dodge](https://github.com/wonder13662/gimp/assets/15767104/6f0872ea-c3e8-48bf-8aa9-818cf24d10d2)

`닷지(Dodge)` 모드는 아래쪽 레이어의 픽셀의 RGB값을 위쪽 레이어의 반전시킨 픽셀의 RGB값으로 나눈 것입니다. 결과 이미지는 보통 더 밝아집니다. 하지만 일부 색상은 반전될 수도 있습니다.

#### 8.2.2.2.a1. 닷지(Dodge) 모드 방정식
![layer_mode-lighten-04-dodge-equation](https://github.com/wonder13662/gimp/assets/15767104/0aa732a5-1d58-4211-993f-6f87a6d90ba0)

#### 8.2.2.2.a2. RGB 색상값의 0부터 255인 경우의 닷지(Dodge) 모드 방정식
```
픽셀의 `닷지(Dodge)` 모드의 RGB 색상값 = (256 x 아래쪽 레이어의 RGB 값) / ((255 - 위쪽 레이어의 RGB 값) + 1)
```

[8.2.2.4. 닷지(Dodge) 모드 방정식](./08-02-02-lighten-layer-modex-04-dodge_mode_equation.md)에서 `닷지(Dodge)` 모드의 픽셀 RGB 값의 계산 과정의 실제 사례를 확인할 수 있습니다.

사진 보정에서 닷지(Dodge)는 어두운 방에서 찍은 사진의 특정 부분 노출값을 증가시켜 줄 때 사용됩니다. 이를 적용하면 그림자 속에 숨어있던 부분들이 드러납니다. 하지만 그레이스케일의 이미지에서 이러한 용도로 사용한다면, 레이어 모드보다 페인팅 도구 중 닷지(Dodge)/번(Burn) 도구를 사용하는 것이 좋습니다.

## 5. 더하기(Addition)

[8.2.2.5. 더하기(Addition) 모드 방정식](./08-02-02-lighten-layer-modex-05-addition_mode_equation.md)

***

## 다른 페이지로 가기
[➡️ 다음: 8.2.3. 레이어 모드-Darken](./08-02-03-darken-layer-modes.md)

[⬅️ 이전: 8.2.1. 레이어 모드-Normal](./08-02-01-normal-layer-mode.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-lighten.html)
