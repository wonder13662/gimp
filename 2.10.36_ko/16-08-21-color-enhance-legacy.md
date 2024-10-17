# 16.8.21. 색상 보강(레거시) - Color Enhance (legacy)

<a id="90-01-07-14-06-a1"></a>

#### [그림 90.1.7.14.6.a1. `이미지 메뉴 바` → `색` → `자동` → `색상 보강(레거시)` (Windows)](./90-01-07-14-06-color_enhance_legacy.md#90-01-07-14-06-a1)
<img width="556" height="299" alt="90-01-07-14-06-a1" src="https://github.com/user-attachments/assets/1ba606e9-27ef-42b1-826e-5deb4a1c8ce1" />

<a id="16-08-21-s1"></a>

## 1. 기능 설명
`색상 보강(레거시)` 명령은 [레이어](./19-glossaryx-layer.md)의 색상 정보의 [채도(Saturation)](./19-glossaryx-saturation.md)의 범위를 늘립니다.

이 때, [명도(Brightness)](./19-glossaryx-brightness.md) or [색상(Hue)](./19-glossaryx-hue.md)는 바꾸지 않고 그대로 둡니다.

이 명령은 색상 정보를 [HSV 색공간](./19-glossaryx-color_model_hsv.md)으로 옮긴 뒤에 이미지의 [채도(Saturation)](./19-glossaryx-saturation.md) 범위를 측정합니다. 

그 뒤에 이미지의 [채도(Saturation)](./19-glossaryx-saturation.md) 범위를 가능한 많이 확대합니다.

그리고 나서, 색상 정보를 다시 [RGB 색상공간](./19-glossaryx-color_mode_rgb.md)으로 옮깁니다.

<a id="16-08-21-s2"></a>

## 2. 대비 증가…(Stretch Contrast…)와의 차이점
`색상 보강(레거시)` 명령은 [대비 증가…(Stretch Contrast…)](./16-08-18-00-stretch-contrast.md)와 비슷합니다.

하지만 `색상 보강(레거시)` 명령은 [HSV 색공간](./19-glossaryx-color_model_hsv.md)에서 작업이 이루어지고, [색상(Hue)](./19-glossaryx-hue.md)을 바꾸지 않는다는 점에서 다릅니다.

<a id="16-08-21-s3"></a>

## 3. 사용 가능한 이미지 모드
`색상 보강(레거시)` 명령은 색상 정보의 [채도(Saturation)](./19-glossaryx-saturation.md)의 범위를 바꾸기 때문에 [그레이스케일](./19-glossaryx-color_mode_grayscale.md) 이미지에서는 동작하지 않습니다.

[그레이스케일](./19-glossaryx-color_mode_grayscale.md) 이미지에서는 메뉴가 비활성화됩니다.

<a id="16-08-21-s4"></a>

## 4. 명령 활성화하기: `이미지 메뉴 바` → `색` → `자동` → `색상 보강(레거시)`

<a id="90-01-07-14-06-a101"></a>

#### [영상 90.1.7.14.6.a101. `이미지 메뉴 바` → `색` → `자동` → `색상 보강(레거시)` (Windows) (우리말)](./90-01-07-14-06-color_enhance_legacy.md#90-01-07-14-06-a101)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/ad66a5ad-b12d-4479-9b47-13512bfaa8b5"></video>

<a id="16-08-21-s5"></a>

## 5. 예제
아래 예제 이미지에서는 그라디언트의 오른쪽, 검은색 부분에서 바뀐 것을 확인할 수 있습니다.

하지만, 히스토그램에서는 유의미한 차이를 확인하기 어렵습니다.

<a id="90-01-07-14-06-a201"></a>

#### [그림 90.1.7.14.6.a201. `이미지 메뉴 바` → `색` → `자동` → `색상 보강(레거시)`: 값(Value) 채널 전후 비교 (Windows) (우리말)](./90-01-07-14-06-color_enhance_legacy.md#90-01-07-14-06-a201)
<img width="760" height="259" alt="90-01-07-14-06-a201" src="https://github.com/user-attachments/assets/6101fca2-0e95-4d20-9e0b-69527d143e84" />

<a id="90-01-07-14-06-a211"></a>

#### [그림 90.1.7.14.6.a211. `이미지 메뉴 바` → `색` → `자동` → `색상 보강(레거시)`: 빨강(Red) 채널 전후 비교 (Windows) (우리말)](./90-01-07-14-06-color_enhance_legacy.md#90-01-07-14-06-a211)
<img width="760" height="259" alt="90-01-07-14-06-a211" src="https://github.com/user-attachments/assets/43f3df72-10ab-40f8-a117-90d44ae2c6f3" />

<a id="90-01-07-14-06-a221"></a>

#### [그림 90.1.7.14.6.a221. `이미지 메뉴 바` → `색` → `자동` → `색상 보강(레거시)`: 녹색(Green) 채널 전후 비교 (Windows) (우리말)](./90-01-07-14-06-color_enhance_legacy.md#90-01-07-14-06-a221)
<img width="760" height="259" alt="90-01-07-14-06-a221" src="https://github.com/user-attachments/assets/9d44bbd1-f2cc-42e3-92c3-c748718edb9e" />

<a id="90-01-07-14-06-a231"></a>

#### [그림 90.1.7.14.6.a231. `이미지 메뉴 바` → `색` → `자동` → `색상 보강(레거시)`: 파랑(Blue) 채널 전후 비교 (Windows) (우리말)](./90-01-07-14-06-color_enhance_legacy.md#90-01-07-14-06-a231)
<img width="760" height="259" alt="90-01-07-14-06-a231" src="https://github.com/user-attachments/assets/46acfcfa-b90d-4455-b804-4e27e88c0e62" />

***

## 다른 페이지로 가기

[➡️ 다음: 16.8.22. 성분 하위 메뉴(The "Components" submenu)](./16-08-22-the-components-submenu.md)

[⬅️ 이전: 16.8.20. 색상 보강(Color Enhance)](./16-08-20-color-enhance.md)

[⬆️ 위: 16.8. 색 메뉴(The colors menu)](./16-08-00-the-colors-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/plug-in-color-enhance.html)