# 8.2.3.2. 휘도가 어두운 색만(Luma/Luminance darken only)
#### 그림 8.2.3.2.a1. 휘도가 어두운 색만(Luma/Luminance darken only)
![layer_mode-darken-02-luma_darken_only](https://github.com/wonder13662/gimp/assets/15767104/b1c11680-b3b3-48fa-85e0-34f249abd281)

`휘도가 어두운 색만(Luma/Luminance darken only)` 모드에서는 위쪽 레이어의 픽셀에 대응하는 아래쪽 레이어의 픽셀의 휘도(luminance)를 비교합니다. 그리고 휘도의 값이 더 적은 이미지의 픽셀을 선택합니다. 완전히 [하얀색의 레이어](./08-02-03-02-01-equation.md#08-02-03-02-01-s4)는 아무런 효과가 없습니다. 그리고 완전히 [검은색의 레이어](./08-02-03-02-01-equation.md#08-02-03-02-01-s3)는 검은색의 이미지로 보입니다. `Luma`는 사람이 인식할 수 있는 범위 안에서의 휘도입니다.

더 많은 사례를 확인하려면 [8.2.3.2.1. 휘도가 어두운 색만(Luma/Luminance darken only) 모드 방정식](./08-02-03-02-01-equation.md)를 참고해주세요.

`휘도가 어두운 색만(Luma/Luminance darken only)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `휘도가 어두운 색만(Luma/Luminance darken only)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.2.3.2.2. 휘도가 어두운 색만(Luma/Luminance darken only): 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/8c4e1227-885b-4a6d-bfeb-84f62aec13ef"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 8.2.3.3. 곱하기(Multiply)](./08-02-03-03-00-multiply.md)

[⬅️ 이전: 8.2.3.1.1. 어두운 색만(Darken only) 모드 방정식](./08-02-03-01-01-equation.md)

[⬆️ 위: 8.2.3. 레이어 모드-어두움(Darken)](./08-02-03-00-darken-layer-modes.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-lighten.html)
