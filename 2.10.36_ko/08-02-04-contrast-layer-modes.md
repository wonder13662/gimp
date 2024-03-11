# 8.2.4. 레이어 모드-대조(Contrast)
## 1. 덧씌우기(Overlay)
#### 그림 8.2.3.a10. 덧씌우기(Overlay)
![08-02-04-layer_mode-contrast-01-overylay](https://github.com/wonder13662/gimp/assets/15767104/9bebd04f-79a3-4588-bc22-7f058bf19732)

`덧씌우기(Overlay)` 모드는 밝은 픽셀은 더 밝게, 어두운 픽셀은 더 어둡게 만들어 줍니다. `덧씌우기(Overlay)` 모드는 [곱하기(Multiply)](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-03-darken-layer-modes.html#3-%EA%B3%B1%ED%95%98%EA%B8%B0multiply) 모드와 [화면(Screen)](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-02-lighten-layer-mode.html#3-%ED%99%94%EB%A9%B4screen) 모드를 합친 것입니다.

## 2. 부드러운 조명(Soft light)
#### 그림 8.2.3.a20. 부드러운 조명(Soft light)
![08-02-04-layer_mode-contrast-02-soft_light](https://github.com/wonder13662/gimp/assets/15767104/8e3e24ba-0476-46ae-b099-00650cff1f3b)

`부드러운 조명(Soft light)` 모드는 `덧씌우기(Overlay)` 모드와 비슷합니다. 하지만 `부드러운 조명(Soft light)` 모드는 `덧씌우기(Overlay)` 모드에 비해 결과 이미지가 좀 더 부드럽고 색상이 덜 밝습니다.

## 3. 강한 조명(Hard light)
#### 그림 8.2.3.a30. 강한 조명(Hard light)
![08-02-04-layer_mode-contrast-03-hard_light](https://github.com/wonder13662/gimp/assets/15767104/3121fc44-fd8a-400c-aecd-b5a353125dd2)

`강한 조명(Hard light)` 모드는 픽셀의 최대값의 절반 미만(RGB255의 경우, 128 미만)이라면 더 어둡게 만듭니다. 반대로 픽셀의 최대값의 절반 초과(RGB255의 경우, 128 초과)라면 더 밝게 만듭니다. `강한 조명(Hard light)` 모드는 [곱하기(Multiply)](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-03-darken-layer-modes.html#3-%EA%B3%B1%ED%95%98%EA%B8%B0multiply) 모드와 [화면(Screen)](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-02-lighten-layer-mode.html#3-%ED%99%94%EB%A9%B4screen) 모드를 조합해 사용합니다. `강한 조명(Hard light)` 모드를 2개의 사진을 조합해 더 밝은 색상과 예리한 경계를 얻을 때 사용할 수 있습니다.

아래 영상을 확인해보면 위쪽의 흑백 그라디언트 레이어가 `강한 조명(Hard light)` 모드로 바꿀 때에 아래 레이어의 밝은 부분과 어두운 부분에 영향을 미치는 것을 확인할 수 있습니다.

#### 영상 8.2.3.a31. 강한 조명(Hard light) 사용 예시 - 위쪽 레이어(그라디언트)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/69459325-9b49-42e8-aa9f-510fae7225f2"></video>

## 4. 은은한 조명(Vivid light)
#### 그림 8.2.3.a40. 은은한 조명(Vivid light)
![08-02-04-layer_mode-contrast-04-vivid_light](https://github.com/wonder13662/gimp/assets/15767104/858763f5-db0d-4246-8de3-ae54d8dd4e3a)

`은은한 조명(Vivid light)` 모드는 픽셀의 값이 중간값보다 밝으면 [닷지(Dodge)](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-02-lighten-layer-mode.html#4-%EB%8B%B7%EC%A7%80dodge)를 적용해서 밝은 부분의 대조를 강하게 만듭니다. 반대로 픽셀의 값이 중간값보다 어두우면 [번(Burn)](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-03-darken-layer-modes.html#4-%EB%B2%88burn)을 적용해서 어두운 부분의 대조를 강하게 만듭니다.

## 5. 핀 조명(Pin light)
#### 그림 8.2.3.a50. 핀 조명(Pin light)
![08-02-04-layer_mode-contrast-05-pin_light](https://github.com/wonder13662/gimp/assets/15767104/1b71a5bf-699b-4f08-86fc-c94ed930f362)

`핀 조명(Pin light)` 모드는 픽셀의 값이 중간값보다 밝으면 [밝은 색만(Lighten only)](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-02-lighten-layer-mode.html#1-%EB%B0%9D%EC%9D%80-%EC%83%89%EB%A7%8Clighten-only)를 적용해서 밝은 부분의 대조를 강하게 만듭니다. 반대로 픽셀의 값이 중간값보다 어두우면 [어두운 색만(Darken only)](https://wonder13662.github.io/gimp/2.10.36_ko/08-02-03-darken-layer-modes.html#1-%EC%96%B4%EB%91%90%EC%9A%B4-%EC%83%89%EB%A7%8Cdarken-only)을 적용해서 어두운 부분의 대조를 강하게 만듭니다.

아래 영상을 확인해보면 위쪽의 흑백 그라디언트 레이어가 `핀 조명(Pin light)` 모드로 바꿀 때에 아래 레이어의 밝은 부분과 어두운 부분에 영향을 미치는 것을 확인할 수 있습니다.

#### 영상 8.2.3.a51. 핀 조명(Pin light) 사용 예시 - 위쪽 레이어(그라디언트)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/350df6a2-2d0d-4a03-b7dc-6d25d1b4e509"></video>

## 6. 선형 조명(Linear light)
#### 그림 8.2.3.a60. 선형 조명(Linear light)
![08-02-04-layer_mode-contrast-06-linear_light](https://github.com/wonder13662/gimp/assets/15767104/8c237518-856d-499e-80b1-5a636b0413cb)

## 7. 강한 혼합(Hard mix)
#### 그림 8.2.3.a70. 강한 혼합(Hard mix)
![08-02-04-layer_mode-contrast-07-hard_mix](https://github.com/wonder13662/gimp/assets/15767104/87b0abaf-9ebe-428f-95e5-8e7a32a644fd)

***

## 다른 페이지로 가기
[➡️ 다음: 8.2.5. 레이어 모드-Inversion](./08-02-05-inversion-layer-modes.md)

[⬅️ 이전: 8.2.3. 레이어 모드-Darken](./08-02-03-darken-layer-modes.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-contrast.html)
