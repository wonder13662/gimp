# 8.2.3. 레이어 모드-어두움(Darken)
`어두움(Darken)` 그룹은 이미지를 더 어둡게 만드는 레이어 모드를 가지고 있습니다.

## 1. 어두운 색만(Darken only)
#### 그림 8.2.3.a10. 어두운 색만(Darken only)
![layer_mode-darken-01-darken_only](https://github.com/wonder13662/gimp/assets/15767104/9da2f52f-87ab-4d09-9db1-f2386145745a)

`어두운 색만(Darken only)` 모드는 상위 레이어와 하위 레이어의 각 픽셀 값을 대조하여 작은 값을 선택합니다. 따라서 한 레이어가 [흰색 이미지](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-03-darken-layer-modesx-01-darken_only_mode_equation.html#4-%EB%84%A4%EB%B2%88%EC%A7%B8-%EC%98%88%EC%A0%9C---%EC%95%84%EB%9E%98%EC%AA%BD-%EB%A0%88%EC%9D%B4%EC%96%B4%EA%B0%80-%ED%95%98%EC%96%80%EC%83%89)면 최종 이미지에는 변화가 없고, [검정색 이미지](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-03-darken-layer-modesx-01-darken_only_mode_equation.html#3-%EC%84%B8%EB%B2%88%EC%A7%B8-%EC%98%88%EC%A0%9C---%EC%95%84%EB%9E%98%EC%AA%BD-%EB%A0%88%EC%9D%B4%EC%96%B4%EA%B0%80-%EA%B2%80%EC%9D%80%EC%83%89)이면 최종 이미지는 검정색 이미지가 됩니다.

`어두운 색만(Darken only)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `어두운 색만(Darken only)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.2.3.a11. 어두운 색만(Darken only) - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/3e1f48f5-058d-436b-a845-ce46a35ac280"></video>

`어두운 색만(Darken only)` 모드는 [`밝은 색만(Lighten only)`](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-02-lighten-layer-mode.html#1-%EB%B0%9D%EC%9D%80-%EC%83%89%EB%A7%8Clighten-only)의 동작과 반대로 동작합니다.

[8.2.3.1. 어두운 색만(Darken only) 모드 방정식](./08-02-03-darken-layer-modesx-01-darken_only_mode_equation.md)에서 다른 사례들을 확인해볼 수 있습니다.

## 2. 휘도가 어두운 색만(Luma/Luminance darken only)
#### 그림 8.2.3.a20. 휘도가 어두운 색만(Luma/Luminance darken only)
![layer_mode-darken-02-luma_darken_only](https://github.com/wonder13662/gimp/assets/15767104/b1c11680-b3b3-48fa-85e0-34f249abd281)

`휘도가 어두운 색만(Luma/Luminance darken only)` 모드에서는 위쪽 레이어의 픽셀에 대응하는 아래쪽 레이어의 픽셀의 휘도(luminance)를 비교합니다. 그리고 휘도의 값이 더 적은 이미지의 픽셀을 선택합니다. 완전히 [하얀색의 레이어](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-03-darken-layer-modesx-02-luma_darken_only_mode_equation.html#4-%EB%84%A4%EB%B2%88%EC%A7%B8-%EC%98%88%EC%A0%9C---%EC%95%84%EB%9E%98%EC%AA%BD-%EB%A0%88%EC%9D%B4%EC%96%B4%EA%B0%80-%ED%95%98%EC%96%80%EC%83%89)는 아무런 효과가 없습니다. 그리고 완전히 [검은색의 레이어](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-03-darken-layer-modesx-02-luma_darken_only_mode_equation.html#3-%EC%84%B8%EB%B2%88%EC%A7%B8-%EC%98%88%EC%A0%9C---%EC%95%84%EB%9E%98%EC%AA%BD-%EB%A0%88%EC%9D%B4%EC%96%B4%EA%B0%80-%EA%B2%80%EC%9D%80%EC%83%89)는 검은색의 이미지로 보입니다. `Luma`는 사람이 인식할 수 있는 범위 안에서의 휘도입니다.

더 많은 사례를 확인하려면 [8.2.3.2. 휘도가 어두운 색만(Luma/Luminance darken only) 모드 방정식](./08-02-03-darken-layer-modesx-02-luma_darken_only_mode_equation.md)를 참고해주세요.

`휘도가 어두운 색만(Luma/Luminance darken only)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `휘도가 어두운 색만(Luma/Luminance darken only)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.2.3.a21. 휘도가 어두운 색만(Luma/Luminance darken only): 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/8c4e1227-885b-4a6d-bfeb-84f62aec13ef"></video>

## 3. 곱하기(Multiply)
#### 그림 8.2.3.a30. 곱하기(Multiply)
![layer_mode-darken-03-multiply](https://github.com/wonder13662/gimp/assets/15767104/e95afa21-1848-43cb-9cae-3fdb1a367e2c)

`곱하기(Multiply)` 모드는 위쪽 레이어의 픽셀 값들과 아래쪽 레이어의 픽셀 값들을 곱합니다. 결과값은 보통 더 어두워집니다. 두 레이어 중 한 레이어가 하얀색이라면, 결과값은 하얀색이 아닌 레이어와 같은 이미지입니다. 두 레이어 중 한 레이어가 검은색이면, 결과값은 검은색 이미지입니다.

#### 영상 8.2.3.a31. 곱하기(Multiply): 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/163a1375-ab6f-4b21-9946-74b8f674095c"></video>

`곱하기(Multiply)` 모드는는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `곱하기(Multiply)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

⚠️ 주의: `곱하기(Multiply)` 모드의 방정식은 픽셀의 RGB 값을 그대로 사용하는 방식이 아닙니다. 몇 가지 사례로 위의 설명대로 계산을 진행해보면, 실제 측정한 색상값과 결과가 맞지 않는 것을 확인할 수 있습니다. 이는 공식 문서에는 아직 설명되지 않은 내용이며, 확인되는대로 추가할 예정입니다.

## 4. 번(Burn)
### 그림 8.2.3.a40. 번(Burn)
![layer_mode-darken-04-burn](https://github.com/wonder13662/gimp/assets/15767104/f00ffb08-9d77-4c59-9473-964ef58e1b90)

`번(Burn)` 모드는 아래쪽 레이어의 픽셀 값을 반전시킵니다. 그리고 이 반전된 값을 위쪽 레이어의 픽셀 값으로 나눕니다. 그리고 이 결과를 다시 반전시킵니다. 이 과정을 거치면 이미지가 보통 더 어두워집니다. `곱하기(Multiply)` 모드와 어느 정도 비슷합니다.

⚠️ 주의: 픽셀 값을 반전시킨다는 것은 픽셀이 가질 수 있는 최대값에서 픽셀 값을 빼는 것을 의미합니다. 예를 들어 RGB Red가 100인 값을 반전하면, 최대값인 255에서 100을 뺀 155가 반전 값이 됩니다.

사진 보정에서 `번(Burn)` 모드는 어두운 방에서 찍은 사진의 특정 부분 노출값을 감소시켜 줄 때 사용됩니다. 이를 이용하면 밝은 부분에 있던 자세한 부분들이 드러납니다. 그레이스케일 이미지에서는 레이어모드보다 페인팅 도구 중 [`닷지(Dodge)/번(Burn)`의 `번(Burn)` 유형](./14-03-17-dodge-burn.md)을 사용하는 것이 좋습니다. 

⚠️ 주의: `번(Burn)` 모드의 방정식은 픽셀의 RGB 값을 그대로 사용하는 방식이 아닙니다. 몇 가지 사례로 위의 설명대로 계산을 진행해보면, 실제 측정한 색상값과 결과가 맞지 않는 것을 확인할 수 있습니다. 이는 공식 문서에는 아직 설명되지 않은 내용이며, 확인되는대로 추가할 예정입니다.

## 5. 선형적 번(Linear burn)

***

## 다른 페이지로 가기
[➡️ 다음: 8.2.4. 레이어 모드-Contrast](./08-02-04-contrast-layer-modes.md)

[⬅️ 이전: 8.2.2. 레이어 모드-Lighten](./08-02-02-lighten-layer-mode.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-lighten.html)
