# 10.1.3.3. 색조 및 채도 조정
## 1. 각 채널별로 보정하기
빨간색이나 파란색 등 특정 색조가 강한 이미지는 [레벨](./16-08-10-levels.md) 도구를 이용하여 빨강, 녹색, 파랑의 각 채널별로 조절하면 쉽게 보정할 수 있습니다. 만약 [레벨](./16-08-10-levels.md) 도구로 보정하기 어렵다면, [색상 균형(Color Balance)](./16-08-02-color-balance.md) 도구나 [커브(Curves)](./16-08-11-curves.md) 도구를 사용하면 되지만, 이는 사용하기 훨씬 더 어렵습니다.

#### [영상 90.4.72.a135. `레벨` 대화상자 → `채널`의 빨강, 초록, 파랑 슬라이더 변경 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-72-level.html#%EC%98%81%EC%83%81-90472a135-%EB%A0%88%EB%B2%A8-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90--%EC%B1%84%EB%84%90%EC%9D%98-%EB%B9%A8%EA%B0%95-%EC%B4%88%EB%A1%9D-%ED%8C%8C%EB%9E%91-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%8D%94-%EB%B3%80%EA%B2%BD-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/0e88e5c4-e823-44b9-8e0e-fef725a627dd"></video>

## 2. 보정 확인하기
제대로 보정을 했는지 확신하기 어려운 때가 있습니다. 이럴 때는 흰색이나 회색 계열의 지점을 확인해봅니다. 도구 상자에서 스포이드 모양의 [색상 추출(Color Picker)](./14-05-03-color-picker.md) 도구를 선택한 뒤, 흰색이나 회색 계열의 지점을 클릭하여 색상 추출 대화상자를 엽니다. 제대로 보정이 되었다면, 선택된 색상의 빨강, 녹색, 파랑의 각 성분이 동일할 것입니다. 만약 각 성분값이 같지 않다면 각 성분값이 동일하도록 다시 보정을 합니다.

#### [그림 90.4.75.a101. `색상 추출` 대화상자 - 캔버스에 포함 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-75-color_picker.html#%EA%B7%B8%EB%A6%BC-90475a101-%EC%83%89%EC%83%81-%EC%B6%94%EC%B6%9C-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%BA%94%EB%B2%84%EC%8A%A4%EC%97%90-%ED%8F%AC%ED%95%A8-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![그림 90 4 75 a101  `색상 추출` 대화상자 - 캔버스에 포함 (Windows) (우리말)](https://github.com/wonder13662/gimp/assets/15767104/2937fd4f-5117-4fe9-9694-f0948aba3c04)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-75-color_picker.html#%EA%B7%B8%EB%A6%BC-90475a101-%EC%83%89%EC%83%81-%EC%B6%94%EC%B6%9C-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%BA%94%EB%B2%84%EC%8A%A4%EC%97%90-%ED%8F%AC%ED%95%A8-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

#### [그림 90.4.75.a111. `색상 추출` 대화상자 - 캔버스에서 분리 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-75-color_picker.html#%EA%B7%B8%EB%A6%BC-90475a111-%EC%83%89%EC%83%81-%EC%B6%94%EC%B6%9C-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%BA%94%EB%B2%84%EC%8A%A4%EC%97%90%EC%84%9C-%EB%B6%84%EB%A6%AC-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![그림 90 4 75 a102  `색상 추출` 대화상자 - 캔버스에서 분리 (Windows) (우리말)](https://github.com/wonder13662/gimp/assets/15767104/bd79d8ab-a559-4a8c-a397-8beb0a26f563)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-75-color_picker.html#%EA%B7%B8%EB%A6%BC-90475a111-%EC%83%89%EC%83%81-%EC%B6%94%EC%B6%9C-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%BA%94%EB%B2%84%EC%8A%A4%EC%97%90%EC%84%9C-%EB%B6%84%EB%A6%AC-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

[다른 운영체제와 언어의 `색상 추출` 대화상자 확인하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-75-color_picker.html#%EA%B7%B8%EB%A6%BC-90475a121-%EC%83%89%EC%83%81-%EC%B6%94%EC%B6%9C-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%BA%94%EB%B2%84%EC%8A%A4%EC%97%90-%ED%8F%AC%ED%95%A8-windows-%EC%98%81%EC%96%B4)

#### [영상 90.4.75.a102. `색상 추출` 대화상자 - 캔버스에 포함 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-75-color_picker.html#%EC%98%81%EC%83%81-90475a102-%EC%83%89%EC%83%81-%EC%B6%94%EC%B6%9C-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%BA%94%EB%B2%84%EC%8A%A4%EC%97%90-%ED%8F%AC%ED%95%A8-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/65684fa9-aa57-4b6b-b68a-00a0bd858e2c"></video>

## 3. 색상/채도(Hue/Saturation) 도구
만약 이미지가 변색되었다면 색상, 명도, 채도를 슬라이더로 조절할 수 있는 [색상/채도(Hue/Saturation)](./16-08-05-hue-saturation.md) 도구를 사용합니다. 

#### [그림 90.4.76.a101. `색상-채도` 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-76-hue_saturation.html#%EA%B7%B8%EB%A6%BC-90476a101-%EC%83%89%EC%83%81-%EC%B1%84%EB%8F%84-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![그림 90 4 76 a101  `색상-채도` 대화상자 (Windows) (우리말)](https://github.com/wonder13662/gimp/assets/15767104/1e845854-a7e1-4f7e-bfd4-5b5c21b223f5)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-76-hue_saturation.html#%EA%B7%B8%EB%A6%BC-90476a101-%EC%83%89%EC%83%81-%EC%B1%84%EB%8F%84-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

[다른 운영체제와 언어의 `색상-채도` 대화상자 확인하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-76-hue_saturation.html#%EA%B7%B8%EB%A6%BC-90476a102-%EC%83%89%EC%83%81-%EC%B1%84%EB%8F%84-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%98%81%EC%96%B4)

채도(Saturation)을 증가시키면 이미지를 더 보기 좋게 만들 수 있습니다. 동시에 명도를 함께 조절하는 데도 쓸 수 있습니다. 여기서의 명도는 [명도/대비](./16-08-09-brightness-contrast.md) 도구의 명도와 비슷하지만, 빨강, 녹색, 파랑의 조합으로 되어 있습니다. [색상/채도(Hue/Saturation)](./16-08-05-hue-saturation.md) 도구는 제한된 영역의 하위 색상(대화상자의 상단의 버튼으로 선택)을 조절합니다. 하지만 자연스러운 색상을 얻고 싶다면, 대부분의 경우에는 이 방법을 사용해서는 안됩니다.

#### [영상 90.4.76.a105. `색상-채도` 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-76-hue_saturation.html#%EC%98%81%EC%83%81-90476a105-%EC%83%89%EC%83%81-%EC%B1%84%EB%8F%84-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/fc26c240-c08a-4606-a7d7-acdc3e63067f"></video>

반대로 빛이 너무 적은 상태로 사진을 찍었다면, 채도가 너무 높아져서 문제가 됩니다. 이럴 경우에는 [색상/채도(Hue/Saturation)](./16-08-05-hue-saturation.md) 도구를 이용해서 채도를 낮춰줍니다.

[comment]: <> (TODO 빛이 너무 적어 채도를 낮추는 예시 영상 추가하기)

***

## 다른 페이지로 가기

[➡️ 다음: ?]()

[⬅️ 이전: ?]()

[⬆️ 위: 10.1.3. 색상 보정](./10-01-working-with-digital-camera-photosx-03-improving_colors.md)

[⬆️ 위: 10.1. 디지털 카메라로 찍은 사진 편집하기](./10-01-working-with-digital-camera-photos.md)

[⬆️ 위: 10. 사진 편집하기](./10-00-enhancing-photographs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-imaging-photos.html#gimp-using-photography-colors)
