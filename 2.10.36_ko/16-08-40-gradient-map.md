# 16.8.40. 그라디언트 맵(Gradient Map)

<a id="90-01-07-17-06-a101"></a>

#### [그림 90.1.7.17.6.a101. `이미지 메뉴 바` → `색` → `지도` → `그라디언트 맵` (Windows)](./90-01-07-17-06-gradient_map.md#90-01-07-17-06-a101)
<img width="511" height="381" alt="90-01-07-17-06-a101" src="https://github.com/user-attachments/assets/a0bb8141-0763-4b18-8740-f31540f8e405" />

`그라디언트 맵(Gradient Map)` 필터는 [활성화 레이어](./19-glossaryx-active_layer.md) 또는 이미지의 [선택 영역](./19-glossaryx-selection.md)의 색상을 바꾸는 필터를 적용하기 위해 [도구상자](./19-glossaryx-toolbox.md)의 활성화된 그라디언트를 사용합니다. 

<a id="90-03-04-a2"></a>

#### [그림 90.3.4.a2. 도구상자의 '붓/무늬/그라디언트' → `그라디언트`](./90-03-04-brush_n_pattern_n_gradient.md#90-03-04-a2)
<img width="264" height="181" alt="90-03-04-a2" src="https://github.com/wonder13662/gimp/assets/15767104/f0f3242f-006c-417b-8d6b-82044636c631" />

필터를 사용하기 위해, 그라디언트를 [그라디언트 대화상자](./15-03-05-00-gradient_dialog.md)에서 선택합니다.

그 다음, 필터를 적용할 [레이어](./19-glossaryx-layer.md)를 선택하거나 또는 [이미지](./19-glossaryx-image.md)의 부분을 [선택 영역](./19-glossaryx-selection.md)으로 만듭니다.

필터를 클릭하면 추가적인 입력이나 대화상자가 열리지 않고 자동으로 실행됩니다.

이 필터는 이미지의 색상의 강도를 0에서 255로 분석하여 가장 어두운 강도의 픽셀을 그라디언트의 왼쪽 끝의 색상에 배치합니다.

그리고 가장 밝은 강도의 픽셀을 그라디언트의 오른쪽 끝의 색상에 배치합니다.

중간 강도의 색들은 대응하는 그라디언트의 중간의 색에 배치합니다.

<a id="16-08-40-s1"></a>

## 1. 명령 활성화하기: `이미지 메뉴 바` → `색` → `지도` → `그라디언트 맵`

<a id="90-01-07-17-06-a3"></a>

#### [영상 90.1.7.17.6.a3. `색` → `지도` → `그라디언트 맵` (Windows) - 이미지 색상 바꾸기](./90-01-07-17-06-gradient_map.md#90-01-07-17-06-a3)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/8a25ac5e-ee10-4700-b1dc-92f336d9365b"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 16.8.41. 팔레트 맵(Palette Map)](./16-08-41-palette-map.md)

[⬅️ 이전: 16.8.39.2. 회색 다루기(Gray Handling)](./16-08-39-02-gray_handling.md)

[⬆️ 위: 16.8. 색 메뉴(The colors menu)](./16-08-00-the-colors-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/plug-in-gradmap.html)