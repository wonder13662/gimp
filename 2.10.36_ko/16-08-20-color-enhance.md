# 16.8.20. 색상 보강(Color Enhance)

<a id="90-01-07-14-05-a101"></a>

#### [그림 90.1.7.14.5.a101. `이미지 메뉴 바` → `색` → `자동` → `색상 보강` (Windows)](./90-01-07-14-05-color_enhance.md#90-01-07-14-05-a101)
<img width="556" height="299" alt="90-01-07-14-05-a101" src="https://github.com/user-attachments/assets/28528d6c-265c-4f55-b12a-6bf8f0ada855" />

<a id="16-08-20-s1"></a>

## 1. 기능 설명
`색상 보강(Color Enhance)` 명령은 [활성화 레이어](./19-glossaryx-active_layer.md)의 색상의 [색도(Chroma)](./19-glossaryx-chromaticity.md)의 범위를 최대한 확장합니다.

이 때, [색상(Hue)](./19-glossaryx-hue.md)과 [밝기(Lightness)](./19-glossaryx-lightness_hsl.md)는 바꾸지 않고 그대로 유지합니다.

이 작업은 색상 정보를 [CIE LCh 색공간](./19-glossaryx-color_model_cie_lch.md)으로 옮겨 이루어 집니다.

그 다음에 [색도(Chroma)](./19-glossaryx-chromaticity.md)의 범위를 확장하며, 다시 원래의 색공간으로 색상 정보를 바꿉니다.

참고로 [CIE LCh 색공간](./19-glossaryx-color_model_cie_lch.md)은 [밝기(Lightness)](./19-glossaryx-lightness_hsl.md), [색도(Chroma)](./19-glossaryx-chromaticity.md), [색상(Hue)](./19-glossaryx-hue.md)으로 구성되어 있습니다.

<a id="16-08-20-s2"></a>

## 2. 사용할 수 없는 색상 모드
이 명령은 [색도(Chroma)](./19-glossaryx-chromaticity.md)를 확장하므로 [그레이스케일](./19-glossaryx-color_mode_grayscale.md) 이미지에서는 사용할 수 없습니다.

[그레이스케일](./19-glossaryx-color_mode_grayscale.md) 이미지에서는 이 명령의 메뉴가 비활성화됩니다.

<a id="16-08-20-s3"></a>

## 3. 명령 활성화하기: `이미지 메뉴 바` → `색` → `자동` → `색상 보강`

<a id="90-01-07-14-05-a111"></a>

#### [영상 90.1.7.14.5.a111. `이미지 메뉴 바` → `색` → `자동` → `색상 보강` (Windows) (우리말)](./90-01-07-14-05-color_enhance.md#90-01-07-14-05-a111)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/a14273e6-bf02-4e93-ba27-0b952b08355b"></video>

<a id="16-08-20-s4"></a>

## 4. 예제

<a id="90-01-07-14-05-a201"></a>

#### [그림 90.1.7.14.5.a201. `이미지 메뉴 바` → `색` → `자동` → `색상 보강`: 값(Value) 채널 전후 비교 (Windows) (우리말)](./90-01-07-14-05-color_enhance.md#90-01-07-14-05-a201)
<img width="760" height="259" alt="90-01-07-14-05-a201" src="https://github.com/user-attachments/assets/5a657caf-4d77-4e99-bd61-ad29f78b6755" />

<a id="90-01-07-14-05-a211"></a>

#### [그림 90.1.7.14.5.a211. `이미지 메뉴 바` → `색` → `자동` → `색상 보강`: 빨강(Red) 채널 전후 비교 (Windows) (우리말)](./90-01-07-14-05-color_enhance.md#90-01-07-14-05-a211)
<img width="760" height="259" alt="90-01-07-14-05-a211" src="https://github.com/user-attachments/assets/18c179eb-d279-4f98-80ba-e4c4a23a23c5" />

<a id="90-01-07-14-05-a221"></a>

#### [그림 90.1.7.14.5.a221. `이미지 메뉴 바` → `색` → `자동` → `색상 보강`: 녹색(Green) 채널 전후 비교 (Windows) (우리말)](./90-01-07-14-05-color_enhance.md#90-01-07-14-05-a221)
<img width="760" height="259" alt="90-01-07-14-05-a221" src="https://github.com/user-attachments/assets/63f74299-5246-442b-8092-dd43d7242cb9" />

<a id="90-01-07-14-05-a231"></a>

#### [그림 90.1.7.14.5.a231. `이미지 메뉴 바` → `색` → `자동` → `색상 보강`: 파랑(Blue) 채널 전후 비교 (Windows) (우리말)](./90-01-07-14-05-color_enhance.md#90-01-07-14-05-a231)
<img width="760" height="259" alt="90-01-07-14-05-a231" src="https://github.com/user-attachments/assets/68566104-4f04-43d4-a753-bf49ea0a1edd" />

***

## 관련 정보

[10.1.3.1. 자동화 도구 - 2. 색상 보강(Color Enhance)](./10-01-03-01-automated_tools.md#10-01-03-01-s2)

***

## 다른 페이지로 가기

[➡️ 다음: 16.8.21. 색상 보강(레거시) - Color Enhance (legacy)](./16-08-21-color-enhance-legacy.md)

[⬅️ 이전: 16.8.19. HSV 대비 증가(Stretch Contrast HSV)](./16-08-19-stretch-contrast-hsv.md)

[⬆️ 위: 16.8. 색 메뉴(The colors menu)](./16-08-00-the-colors-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-filter-color-enhance.html)