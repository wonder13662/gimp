# 10.1.3.1. 자동화 도구
디지털 카메라의 지능적인 노출 보정 시스템에도 불구하고, 사진들은 종종 과다 노출되거나 노출이 부족합니다. 혹은 간섭광으로 색이 이상해 지기도 합니다. GIMP(김프)는 이러한 경우의 색상 보정을 위해 버튼 클릭 한번으로 사용 가능한 자동 도구에서부터 다양한 조정값들을 사용할 수 있는 고급 도구들을 지원합니다.

김프에는 다섯 개의 자동 색상 보정 도구들이 있습니다.

## 1. 평준화(Equalize)
#### [그림 90.1.7.14.1.a1. `색` → `자동` → `평준화` (Windows)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-01-equalize.html#%EA%B7%B8%EB%A6%BC-9017141a1-%EC%83%89--%EC%9E%90%EB%8F%99--%ED%8F%89%EC%A4%80%ED%99%94-windows)
[![90-01-07-colorsx-01-auto(windows)-focus-equalize](https://github.com/wonder13662/gimp/assets/15767104/a7ed6ccd-411e-4cef-8d29-a21310798748)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-01-equalize.html#%EA%B7%B8%EB%A6%BC-9017141a1-%EC%83%89--%EC%9E%90%EB%8F%99--%ED%8F%89%EC%A4%80%ED%99%94-windows)

[다른 운영체제와 언어의 `색` → `자동` → `평준화` 확인하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-01-equalize.html#%EA%B7%B8%EB%A6%BC-9017141a2-%EC%83%89--%EC%9E%90%EB%8F%99--%ED%8F%89%EC%A4%80%ED%99%94-mac)

`평준화(Equalize)`는 색상들을 가능한 강도의 범위에 걸쳐 색상들을 고르게 펴줍니다.

간혹 `평준화(Equalize)`의 결과물이 놀라운 대비(contrast) 효과를 보여주기도 하지만, 대체로 이상한 이미지로 보입니다.

#### [영상 90.1.7.14.1.a3. `색` → `자동` → `평준화` (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-01-equalize.html#%EC%98%81%EC%83%81-9017141a3-%EC%83%89--%EC%9E%90%EB%8F%99--%ED%8F%89%EC%A4%80%ED%99%94-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/7e9fa797-0a96-43e8-9a74-0a2f1909d9ba"></video>

## 2. 색상 보강(Color Enhance)
#### [그림 90.1.7.14.5.a1. `색` → `자동` → `색상 보강` (Windows)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-05-color_enhance.html#%EA%B7%B8%EB%A6%BC-9017145a1-%EC%83%89--%EC%9E%90%EB%8F%99--%EC%83%89%EC%83%81-%EB%B3%B4%EA%B0%95-windows)
[![90-01-07-colorsx-01-auto(windows)-focus-color_enhance](https://github.com/wonder13662/gimp/assets/15767104/0c44c7c0-f339-4f45-9fed-5d2c1e5d6577)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-05-color_enhance.html#%EA%B7%B8%EB%A6%BC-9017145a1-%EC%83%89--%EC%9E%90%EB%8F%99--%EC%83%89%EC%83%81-%EB%B3%B4%EA%B0%95-windows)

[다른 운영체제와 언어의 `색` → `자동` → `색상 보강` 확인하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-05-color_enhance.html#%EA%B7%B8%EB%A6%BC-9017145a2-%EC%83%89--%EC%9E%90%EB%8F%99--%EC%83%89%EC%83%81-%EB%B3%B4%EA%B0%95-mac)

`색상 보강(Color Enhance)`은 레이어 색상의 밝기(Lightness)나 색조(Hue)를 변경하지 않고 채도(Saturation) 범위만 증가시킵니다. 그러므로 `색상 보강(Color Enhance)`은 그레이스케일 이미지에서 동작하지 않습니다.

#### [그림 90.1.7.14.5.a4. 색상 보강 사용 전후 비교]()
[![90-01-07-14-05-a4-before_n_after(windows)(ko)-label](https://github.com/wonder13662/gimp/assets/15767104/89c75c04-cf70-4a31-9484-e3487870aff9)]()

#### [영상 90.1.7.14.5.a3. `색` → `자동` → `색상 보강` (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-05-color_enhance.html#%EC%98%81%EC%83%81-9017145a3-%EC%83%89--%EC%9E%90%EB%8F%99--%EC%83%89%EC%83%81-%EB%B3%B4%EA%B0%95-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/995fa1b9-a38b-43c3-bd41-dbb7b056bd1b"></video>

## 3. 대비 증가(Stretch Contrast)
#### [그림 90.1.7.14.3.a1. `색` → `자동` → `대비 증가...` (Windows)]()
[![90-01-07-colorsx-01-auto(windows)-focus-stretch_contrast](https://github.com/wonder13662/gimp/assets/15767104/f7f9e92f-a885-41e0-a503-8a10e3e4d55c)]()

[다른 운영체제와 언어의 `색` → `자동` → `대비 증가...` 확인하기]()

`대비 증가(Stretch Contrast)`는 노출이 부족한 이미지에 효과적입니다. 이 기능은 가장 밝은 부분이 색조 범위의 오른쪽에, 그리고 가장 어두운 부분이 검은색이 될 때까지 전체 이미지를 조정합니다.

#### [그림 90.1.7.14.3.a4. 대비 증가 적용 전후 비교]()
[![90-01-07-14-03-a3-stretch_contrast-before_n_after(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/13c1f0b0-67be-4891-9d18-2ee4e77147b4)]()

#### [영상 90.1.7.14.3.a5. `색` → `자동` → `대비 증가...` (Windows) (우리말)]()
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/049288bc-b11d-43ae-8d5e-4c7907f8fcfc"></video>

`대비 증가(Stretch Contrast)`의 단점으로는 밝기의 양이 전적으로 이미지의 가장 밝은 곳과 가장 어두운 곳에 의해서 결정된다는 것입니다. 그래서 이미지 안에 하얀 점 픽셀이나 검은색 점 픽셀이 하나라도 있으면, 표준화시킬때 효과적이지 않게 작동하게 됩니다.

`대비 증가(Stretch Contrast)`는 빨강, 녹색, 파랑 채널에 독립적으로 작동합니다. 이 기능은 [컬러 캐스트](./19-glossaryx-color_cast.md)를 줄이는 데 효과적입니다.


## 4. HSV 대비 증가(Stretch Contrast HSV)

## 5. 화이트 밸런스

***

## 다른 페이지로 가기

[➡️ 다음: ?]()

[⬅️ 이전: ?]()

[⬆️ 위: 10.1.3. 색상 보정](./10-01-working-with-digital-camera-photosx-03-improving_colors.md)

[⬆️ 위: 10.1. 디지털 카메라로 찍은 사진 편집하기](./10-01-working-with-digital-camera-photos.md)

[⬆️ 위: 10. 사진 편집하기](./10-00-enhancing-photographs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-imaging-photos.html#gimp-using-photography-colors)
