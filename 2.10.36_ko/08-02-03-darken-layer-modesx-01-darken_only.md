# 8.2.3.1. 어두운 색만(Darken only)
#### 그림 8.2.3.1.a1. 어두운 색만(Darken only)
![layer_mode-darken-01-darken_only](https://github.com/wonder13662/gimp/assets/15767104/9da2f52f-87ab-4d09-9db1-f2386145745a)

`어두운 색만(Darken only)` 모드는 상위 레이어와 하위 레이어의 각 픽셀 값을 대조하여 작은 값을 선택합니다. 따라서 한 레이어가 [흰색 이미지](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-03-darken-layer-modesx-01-darken_onlyx-01-equation.html#4-%EB%84%A4%EB%B2%88%EC%A7%B8-%EC%98%88%EC%A0%9C---%EC%95%84%EB%9E%98%EC%AA%BD-%EB%A0%88%EC%9D%B4%EC%96%B4%EA%B0%80-%ED%95%98%EC%96%80%EC%83%89)면 최종 이미지에는 변화가 없고, [검정색 이미지](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-03-darken-layer-modesx-01-darken_onlyx-01-equation.html#3-%EC%84%B8%EB%B2%88%EC%A7%B8-%EC%98%88%EC%A0%9C---%EC%95%84%EB%9E%98%EC%AA%BD-%EB%A0%88%EC%9D%B4%EC%96%B4%EA%B0%80-%EA%B2%80%EC%9D%80%EC%83%89)이면 최종 이미지는 검정색 이미지가 됩니다.

`어두운 색만(Darken only)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `어두운 색만(Darken only)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.2.3.1.a2. 어두운 색만(Darken only) - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/3e1f48f5-058d-436b-a845-ce46a35ac280"></video>

`어두운 색만(Darken only)` 모드는 [`밝은 색만(Lighten only)`](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-02-lighten-layer-mode.html#1-%EB%B0%9D%EC%9D%80-%EC%83%89%EB%A7%8Clighten-only)의 동작과 반대로 동작합니다.

[8.2.3.1.1. 어두운 색만(Darken only) 모드 방정식](./08-02-03-darken-layer-modesx-01-darken_onlyx-01-equation.md)에서 다른 사례들을 확인해볼 수 있습니다.

***

## 다른 페이지로 가기

[➡️ 다음: 8.2.3.2. 휘도가 어두운 색만(Luma/Luminance darken only)](./08-02-03-darken-layer-modesx-02-luma_darken_only.md)

[⬅️ 이전: 8.2.3. 레이어 모드-어두움(Darken)](./08-02-03-darken-layer-modes.md)

[⬆️ 위: 8.2.3. 레이어 모드-어두움(Darken)](./08-02-03-darken-layer-modes.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-lighten.html)
