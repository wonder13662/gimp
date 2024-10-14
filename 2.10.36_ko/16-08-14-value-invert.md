# 16.8.14. 명도 반전(Value Invert)

<a id="90-01-07-13-a1"></a>

#### [그림 90.1.7.13.a1. `이미지 메뉴 바` → `색` → `명도 반전`](./90-01-07-13-value_invert.md#90-01-07-13-a1)
<img width="916" height="970" alt="90-01-07-13-a1" src="https://github.com/user-attachments/assets/a81b3911-9d84-403c-9b94-d4f02ca3713b" />

`명도 반전(Value Invert)` 필터는 [활성화 레이어](./19-glossaryx-active_layer.md) 또는 [선택 영역](./19-glossaryx-selection.md)의 명도(Value) 또는 [휘도(Luminosity)](./19-glossaryx-luminance.md)를 반전시킵니다.

[색상(Hue)](./19-glossaryx-hue.md)과 [채도(Saturation)](./19-glossaryx-saturation.md)는 영향을 받지 않습니다.

하지만 "버림 오류(round-off error)"로 인해서 때때로 색이 약간 달라질 수 있습니다.

[색상(Hue)](./19-glossaryx-hue.md)과 [채도(Saturation)](./19-glossaryx-saturation.md)를 반전시키고 싶다면, [16.8.12. 반전(Invert)](./16-08-12-invert.md)를 사용하세요.

<a id="16-08-14-s1"></a>

## 1. `명도 반전(Value Invert)` 두번 적용시 왜곡 발생
높은 밝기를 가진 색상에 대해 `명도 반전(Value Invert)` 연속으로 두번 적용하면, [색상(Hue)](./19-glossaryx-hue.md)과 [채도(Saturation)](./19-glossaryx-saturation.md)는 상당히 왜곡될 수 있습니다.

그러므로 `명도 반전(Value Invert)`을 연속으로 두번 적용하여서 원본 이미지로 되돌릴 수 없습니다.

<a id="90-01-07-13-a21"></a>

#### [그림 90.1.7.13.a21. `이미지 메뉴 바` → `색` → `명도 반전`: 두번 적용시 왜곡되어 원본과 달라집니다 (Windows) (우리말)](./90-01-07-13-value_invert.md#90-01-07-13-a21)
<img width="960" height="214" alt="90-01-07-13-a21" src="https://github.com/user-attachments/assets/ae6be37e-a491-44c5-a82d-0f54f942754e" />

<a id="16-08-14-s2"></a>

## 2. 명령 활성화하기: `이미지 메뉴 바` → `색` → `명도 반전`

<a id="90-01-07-13-a11"></a>

#### [영상 90.1.7.13.a11. `이미지 메뉴 바` → `색` → `명도 반전` (Windows) (우리말)](./90-01-07-13-value_invert.md#90-01-07-13-a11)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/a09a7227-2a6a-4ec2-96cd-ef4154d23c4b"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 16.8.15. 자동 하위 메뉴(The auto submenu)](./16-08-15-the-auto-submenu.md)

[⬅️ 이전: 16.8.13. 선형 반전(Linear Invert)](./16-08-13-linear-invert.md)

[⬆️ 위: 16.8. 색 메뉴(The colors menu)](./16-08-00-the-colors-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-filter-invert-value.html)