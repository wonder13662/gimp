# 16.8.39.1.3. 회색 다루기(Gray Handling)

<a id="90-04-212-a131"></a>

#### [그림 90.4.212.a131. `색 전환` 대화상자 → `회색 다루기` (Windows) (우리말)](./90-04-0212-rotate_colors.md#90-04-212-a131)
<img width="448" height="718" alt="90-04-212-a131" src="https://github.com/user-attachments/assets/1039a4cb-c582-4ce8-a9be-fc2ffa1fb5a8" />

`회색 다루기(Gray Handling)`에서는 회색을 처리하는 방법에 대해 설정할 수 있습니다.

기본적으로 회색은 색상이 아닌 것으로 판단합니다.

그러므로 회색은 색 전환 과정에서 바뀌지 않게 됩니다.

하지만 `회색 다루기(Gray Handling)`에서 살짝 채도가 높은 색상을 회색으로 바꾸거나 회색을 색상을 바꿀 수 있습니다.

색상환(Color Wheel) 안쪽의 작은 원을 클릭, 드래그해서 [색상(Hue)](./19-glossaryx-hue.md)과 [채도(Saturation)](./19-glossaryx-saturation.md)를 설정하여 회색으로 바꿀 색상을 선택할 수 있습니다.

색상환의 안쪽의 작은 원의 위치는 색상환 왼쪽의 [색상(Hue)](./19-glossaryx-hue.md) 슬라이더와 [채도(Saturation)](./19-glossaryx-saturation.md) 슬라이더에 대응합니다.

<a id="16-08-39-01-03-s1"></a>

## 1. 회색 임계값(Gray threshold)

<a id="90-04-212-a132"></a>

#### [그림 90.4.212.a132. `색 전환` 대화상자 → `회색 다루기` → `회색 임계값` (Windows) (우리말)](./90-04-0212-rotate_colors.md#90-04-212-a132)
<img width="448" height="718" alt="90-04-212-a132" src="https://github.com/user-attachments/assets/30fed324-4a1a-4da8-9c58-0ec9526cedab" />

`회색 임계값(Gray threshold)` 슬라이더는 어떤 색상이 회색으로 처리될지 결정합니다.

선택한 색상보다 채도가 낮은 모든 색은 선택된 "회색"이 됩니다.

<a id="16-08-39-01-03-s2"></a>

## 2. 회색 모드(Gray mode)

<a id="90-04-212-a133"></a>

#### [그림 90.4.212.a133. `색 전환` 대화상자 → `회색 다루기` → `회색 모드` (Windows) (우리말)](./90-04-0212-rotate_colors.md#90-04-212-a133)
<img width="448" height="718" alt="90-04-212-a133" src="https://github.com/user-attachments/assets/dfaaed3e-b9f7-45a3-998c-f58c5874b4bc" />

<a id="90-04-212-a134"></a>

#### [그림 90.4.212.a134. `색 전환` 대화상자 → `회색 다루기` → `회색 모드`: 드롭다운 목록 (Mac)](./90-04-0212-rotate_colors.md#90-04-212-a134)
<img width="102" height="44" alt="90-04-212-a134" src="https://github.com/user-attachments/assets/97d34c4b-fd07-4e01-ab42-cc0914629600" />

<a id="16-08-39-01-03-s2-01"></a>

### 2-1. Treat as this
`원본 범위(Source Range)` 안의 회색톤의 색상들을 `원본 범위(Source Range)` 안의 [색상(Hue)](./19-glossaryx-hue.md) 슬라이더와 [채도(Saturation)](./19-glossaryx-saturation.md)를 가지고 있는 것처럼 처리합니다.

이 회색톤의 색상들은 `원본 범위(Source Range)`, `대상 범위(Destination Range)`에 따라 색전환을 하게 됩니다.

<a id="16-08-39-01-03-s2-02"></a>

### 2-2. Change to this
It will change gray colors to the selected Hue and Saturation without any rotation.
회색톤의 색상들을 `회색 다루기(Gray Handling)`의 색상환에서 선택한 [색상(Hue)](./19-glossaryx-hue.md)과 [채도(Saturation)](./19-glossaryx-saturation.md)로 바꿉니다.

이 회색톤의 색상들은 `원본 범위(Source Range)`, `대상 범위(Destination Range)`에 따라 색전환을 하지 않습니다.

***

## 다른 페이지로 가기

[➡️ 다음: 16.8.39.1.4. 혼합 옵션(Blending Options)](./16-08-39-01-04-blending_options.md)

[⬅️ 이전: 16.8.39.1.2. 범위(Range)](./16-08-39-01-02-range.md)

[⬆️ 위: 16.8.39.1. 옵션(Options)](./16-08-39-01-00-options.md)

[⬆️ 위: 16.8.39. 색 전환…(Rotate Colors…)](./16-08-39-00-rotate-colors.md)

[⬆️ 위: 16.8. 색 메뉴(The colors menu)](./16-08-00-the-colors-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-filter-color-rotate.html#idm33201)