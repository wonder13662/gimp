# 16.5.11.6. 경고 표시(Clip Warning)

<a id="90-04-176-a181"></a>

#### [그림 90.4.176.a181. `화면 색상 표시 필터` 대화상자 → `경고 표시` (Windows) (우리말)](./90-04-0176-color_display_filters.md#90-04-176-a181)
<img width="472" height="544" alt="90-04-176-a181" src="https://github.com/user-attachments/assets/a269d984-1d09-4b87-915b-089c7766735d" />

`경고 표시(Clip Warning)` 필터는 이미지의 노출이 부족하거나(Underexposed) 노출이 지나친(Overexposed) 영역을 사용자가 정의한 색으로 표시합니다.

이 필터는 부동소수점 정밀도(Floating Point Precision)로 저장된 색상을 갖는 이미지로 작업할 수 있습니다.

`EXR`, `TIFF` 포맷의 부동소수점 정밀도(Floating Point Precision)의 16비트, 32비트의 채널을 갖는 이미지를 작업한다면, 이 필터로 작업하는 것이 좋습니다.

<a comment="[이슈]Mac에서는 경고 표시 필터가 작동하나, Windows에서는 동작하지 않습니다. 관련 이슈를 제보해야 합니다."></a>

## 1. 옵션(Options)

### 1-1. 그림자 보여주기(Show shadows)
32비트 부동소수점 모드에서 0보다 작은 노출이 부족한(Underexposed) 픽셀을 시각적으로 보여줍니다.

### 1-2. 그림자 색(Shadow color)
노출이 부족한 픽셀을 표시하는 색상입니다.

### 1-3. 강조표시 보여주기(Show highlights)
32비트 부동소수점 모드에서 1보다 큰 노출이 지나친(Overexposed) 픽셀을 시각적으로 보여줍니다.

### 1-4. 강조표시 색(Highlights color)
노출이 과다한한 픽셀을 표시하는 색상입니다.

### 1-5. 숫자가 아닌 픽셀 보여주기(Show bogus)
숫자가 아님(NaN: Not a Number) 에러가 발생한 픽셀을 시각적으로 보여줍니다.

### 1-6. 숫자가 아닌 픽셀 색(Bogus color)
숫자가 아님(NaN: Not a Number) 에러가 발생한 픽셀을 표시하는 색상입니다.

### 1-7. 알파 요소 표시(Include alpha component)
활성화되면, 알파 요소를 표시합니다.

### 1-8. 투명 픽셀 표시(Include transparent pixels)
활성화되면, 투명 픽셀을 표시합니다.

<a comment="[TODO]경고 표시로 어떤 이득을 얻을 수 있는지 사례가 필요하다. 공식 매뉴얼에는 관련 내용이 없음."></a>

***

## 다른 페이지로 가기

[➡️ 다음: 16.5.12. 색상 관리(Color Management)](./16-05-12-color-management.md)

[⬅️ 이전: 16.5.11.5. 휘도(Contrast)](./16-05-11-05-contrast.md)

[⬆️ 위: 16.5.11. 필터 보이기(Display Filters)](./16-05-11-00-display-filters.md)

[⬆️ 위: 16.5. 보기 메뉴(The view menu)](./16-05-00-the-view-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-display-filter-dialog.html#gimp-colordisplay-clip)