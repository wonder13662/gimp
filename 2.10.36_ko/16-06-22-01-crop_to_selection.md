# 16.6.22.1. 선택 영역 잘라내기(Crop to selection)

<a id="90-01-05-11-a101"></a>

#### [그림 90.1.5.11.a101. `이미지 메뉴 바` → `이미지` → `선택 영역 잘라내기`](./90-01-05-11-crop_to_selection.md#90-01-05-11-a101)
<img width="977" height="603" alt="90-01-05-11-a101" src="https://github.com/user-attachments/assets/2133a1cf-cc29-4de6-abcf-55c00d52ea53" />

<a id="16-06-22-01-s1"></a>

## 1. 기본 동작
`선택 영역 잘라내기(Crop to selection)` 명령은 이미지를 선택 영역의 경계까지만 남기고 나머지 영역을 제거합니다.

<a id="90-01-05-11-a111"></a>

#### [영상 90.1.5.11.a111. `이미지 메뉴 바` → `이미지` → `선택 영역 잘라내기` (Windows) (우리말)](./90-01-05-11-crop_to_selection.md#90-01-05-11-a111)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/bb1a173f-d871-46b7-980a-db3a927020ee"></video>

<a id="16-06-22-01-s2"></a>

## 2. 일부만 선택된 영역은 잘라내지 않습니다.
일부만 선택된 영역([페더링](./19-glossaryx-feathering.md))은 잘라내기로 제거되지 않습니다.

[선택](./19-glossaryx-selection.md)이 [페더링](./19-glossaryx-feathering.md)되면, 잘라내기는 [페더링](./19-glossaryx-feathering.md)의 바깥쪽부터 적용됩니다.

이미지에 [선택](./19-glossaryx-selection.md)이 없다면, `선택 영역 잘라내기(Crop to selection)` 메뉴는 비활성 상태가 됩니다.

<a id="16-06-22-01-s3"></a>

## 3. 활성화된 레이어의 선택 영역만 잘라내고 싶다면?
`선택 영역 잘라내기(Crop to selection)` 명령은  모든 이미지 레이어를 잘라냅니다.

활성화 레이어만 잘라내고 싶다면, [16.7.54.1. 선택영역 잘라내기(Crop to selection)](./16-07-54-01-crop_to_selection.md)을 사용해주세요.

## 4. 키보드 단축키: Ctrl + Alt + Shift + `C` (Windows)

⚠️ 주의: 이 단축키는 `Mac`에서 동작하지 않습니다.

<a id="90-10-84-01-01-a1"></a>

#### [영상 90.10.84.1.1.a1. `이미지 메뉴 바` → `이미지` → `선택 영역 잘라내기`: 키보드 단축키: Ctrl + Alt + Shift + `C` (Windows) (우리말)](./90-10-84-01-01-ctrl_alt_shift_c.md#90-10-84-01-01-a1)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/e7bf4bbb-26f4-478e-a40c-20f7c1ae37ed"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 16.6.22.2. 콘텐츠로 잘라내기(Crop to content)](./16-06-22-02-crop_to_content.md)

[⬅️ 이전: 16.6.22. 이미지 잘라내기(Crop image)](./16-06-22-00-crop-image.md)

[⬆️ 위: 16.6.22. 이미지 잘라내기(Crop image)](./16-06-22-00-crop-image.md)

[⬆️ 위: 16.6. 이미지 메뉴(The "Image" menu)](./16-06-00-the-image-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-image-crop.html#crop-image-to-selection)