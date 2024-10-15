# 16.8.19. HSV 대비 증가(Stretch Contrast HSV)

<a id="90-01-07-14-04-a101"></a>

#### [그림 90.1.7.14.4.a101. `이미지 메뉴 바` → `색` → `자동` → `HSV 대비 증가` (Windows)](./90-01-07-14-04-stretch_contrast_hsv.md#90-01-07-14-04-a101)
<img width="556" height="299" alt="90-01-07-14-04-a101" src="https://github.com/user-attachments/assets/a6819651-8e86-43f4-bdf7-2e0ee1037dfd" />

<a id="16-08-19-s1"></a>

## 1. 기능 설명
`HSV 대비 증가(Stretch Contrast HSV)` 명령은 [대비 증가…(Stretch Contrast…)](./16-08-18-00-stretch-contrast.md)와 같은 기능을 합니다.

다만 이 명령은 [RGB 색 공간](./19-glossaryx-color_mode_rgb.md)이 아닌 [HSV 색 공간](./19-glossaryx-color_model_hsv.md)에서 작동하며, [색상(Hue)](./19-glossaryx-hue.md)을 유지시킵니다.

그러므로, 이 명령은 독립적으로 색상의 [색상(Hue)](./19-glossaryx-hue.md), [채도(Saturation)](./19-glossaryx-saturation.md), [값(HSV)](./19-glossaryx-value_hsv.md)의 범위를 확장합니다.

때때로는 결과가 좋지만 대체로는 좀 이상해 보입니다.

실제 사례는 [예제](./16-08-19-stretch-contrast-hsv.md#16-08-19-s4)에서 그라디언트 결과 이미지에 노이즈가 추가된 것을 확인할 수 있습니다.

<a id="16-08-19-s2"></a>

## 2. 사용할 수 있는 이미지 모드
이 명령은 [RGB](./19-glossaryx-color_mode_rgb.md) 이미지와 [인덱스](./19-glossaryx-color_mode_indexed.md) 이미지에서 작동합니다.

[그레이스케일](./19-glossaryx-color_mode_grayscale.md) 이미지에서는 이 명령은 비활성화되어 사용할 수 없습니다.

<a id="16-08-19-s3"></a>

## 3. 명령 활성화하기: `이미지 메뉴 바` → `색` → `자동` → `HSV 대비 증가`

<a id="90-01-07-14-04-a111"></a>

#### [영상 90.1.7.14.4.a111. `이미지 메뉴 바` → `색` → `자동` → `HSV 대비 증가` (Windows)](./90-01-07-14-04-stretch_contrast_hsv.md#90-01-07-14-04-a111)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/bd4e128d-51b8-4f54-bfd8-06ce6fcf93c6"></video>

<a id="16-08-19-s4"></a>

## 4. 예제
[대비 증가…(Stretch Contrast…)](./16-08-18-00-stretch-contrast.md)는 오른쪽으로 치우친 색상 확장 결과를 보여주었으나, `HSV 대비 증가(Stretch Contrast HSV)` 명령은 오른쪽, 왼쪽 모두 색상 확장이 된 결과를 보여줍니다.

아울러 하얀색-검은색 그라디언트에서는 노이즈가 추가되는 결과를 확인할 수 있습니다.

<a id="90-01-07-14-04-a201"></a>

#### [그림 90.1.7.14.4.a201. `이미지 메뉴 바` → `색` → `자동` → `HSV 대비 증가`: 값(Value) 채널 전후 비교 (Windows) (우리말)](./90-01-07-14-04-stretch_contrast_hsv.md#90-01-07-14-04-a201)
<img width="760" height="259" alt="90-01-07-14-04-a201" src="https://github.com/user-attachments/assets/1b9c5f56-443a-4b2f-9db6-1399a3afec7d" />

<a id="90-01-07-14-04-a211"></a>

#### [그림 90.1.7.14.4.a211. `이미지 메뉴 바` → `색` → `자동` → `HSV 대비 증가`: 빨강(Red) 채널 전후 비교 (Windows) (우리말)](./90-01-07-14-04-stretch_contrast_hsv.md#90-01-07-14-04-a211)
<img width="760" height="259" alt="90-01-07-14-04-a211" src="https://github.com/user-attachments/assets/82e04133-9074-4a62-9c41-72b49d3eed1a" />

<a id="90-01-07-14-04-a221"></a>

#### [그림 90.1.7.14.4.a221. `이미지 메뉴 바` → `색` → `자동` → `HSV 대비 증가`: 녹색(Green) 채널 전후 비교 (Windows) (우리말)](./90-01-07-14-04-stretch_contrast_hsv.md#90-01-07-14-04-a221)
<img width="760" height="259" alt="90-01-07-14-04-a221" src="https://github.com/user-attachments/assets/22aa86e1-c6cf-4828-8891-a685f9d72cf3" />

<a id="90-01-07-14-04-a231"></a>

#### [그림 90.1.7.14.4.a231. `이미지 메뉴 바` → `색` → `자동` → `HSV 대비 증가`: 파랑(Blue) 채널 전후 비교 (Windows) (우리말)](./90-01-07-14-04-stretch_contrast_hsv.md#90-01-07-14-04-a231)
<img width="760" height="259" alt="90-01-07-14-04-a231" src="https://github.com/user-attachments/assets/1e0dff69-22b4-4c41-b8c0-fc059d77f310" />

***

## 관련 정보

[10.1.3.1. 자동화 도구 - 4. HSV 대비 증가(Stretch Contrast HSV)](./10-01-03-01-automated_tools.md#10-01-03-01-s4)

***

## 다른 페이지로 가기

[➡️ 다음: 16.8.20. 색상 보강(Color Enhance)](./16-08-20-color-enhance.md)

[⬅️ 이전: 16.8.18.3. 예제(Example)](./16-08-18-03-example.md)

[⬆️ 위: 16.8. 색 메뉴(The colors menu)](./16-08-00-the-colors-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-filter-stretch-contrast-hsv.html)