# 4.2.8. 인덱스 모드에서의 이미지

## 4.2.8.1. 문제 확인
GIMP는 세가자의 컬러 모드를 사용합니다.[RGB(A), 그레이스케일 그리고 인덱스](./19-glossaryx-color-model.md)입니다. 인덱스 컬러 모드는 색상표(Colormap)을 사용합니다. 색상표에는 이미지에서 사용하는 모든 색상이 모여있습니다. 하지만 [색상 추출(color picker)](./14-05-03-00-color-picker.md) 도구로 RGB 색상을 선택할 수 있습니다.다시 말해, 인덱스의 색상표와는 다른 색으로도 칠하려고 한다면, 잘못된 색을 칠하게 될 수 있습니다.

## 4.2.8.2. 해결방법
가능한한 RGB 모드로 색을 칠하세요. 이미지 메뉴 바의 [모드(Mode)](./16-06-03-mode.md) 메뉴를 클릭해서 다른 컬러 모드를 선택하고 시험해볼 수 있습니다. 여기서는 인덱스 모드로 작업하는 것으로 가정하겠습니다.

<a id="90-01-05-02-03-a1"></a>

#### [그림 90.1.5.2.3.a1. `이미지` → `모드` → `인덱스` (Windows)](./90-01-05-02-03-indexed.md#90-01-05-02-03-a1)
![90-01-05-02-03-a1](https://github.com/wonder13662/gimp/assets/15767104/de9fd366-f686-40f5-b7b8-e20ae7c05bea)

[다른 운영체제와 언어의 `이미지` → `모드` → `인덱스` 확인하기](./90-01-05-02-03-indexed.md#90-01-05-02-03-a2)

인덱스 모드로 바꿀 경우, 아래와 같은 대화상자를 확인할 수 있습니다.

<a id="90-04-32-a101"></a>

#### [그림 90.4.32.a101. `이미지를 색인 색상으로 변환` 대화상자 (Windows) (우리말)](./90-04-0032-convert_image_to_indexed_colors.md#90-04-32-a101)
![90-04-32-a101](https://github.com/wonder13662/gimp/assets/15767104/309f2a53-e806-4d69-bb89-22799ea04368)

[다른 운영체제와 언어의 `이미지를 색인 색상으로 변환` 대화상자 확인하기](./90-04-0032-convert_image_to_indexed_colors.md#90-04-32-a102)

인덱스 모드로 작업하면 [색상표 대화상자](./15-02-04-00-colormap-dialog.md)에서 색깔을 고를 수 있습니다.

<a id="90-04-06-a1"></a>

#### [그림 90.4.6.a1. 색상표 대화상자](./90-04-0006-colormap.md#90-04-06-a1)
![90-04-06-a1](https://github.com/wonder13662/gimp/assets/15767104/e6fff5e0-f875-48d7-9d55-71a8c40ab677)

만약 [색상표 대화상자](./15-02-04-00-colormap-dialog.md)를 찾을 수 없다면, 이미지 메뉴의 `창` → `색상표`를 선택하여 다시 [색상표 대화상자](./15-02-04-00-colormap-dialog.md)를 열 수 있습니다.

<a id="90-01-10-02-06-a101"></a>

#### [그림 90.1.10.2.6.a101. `창` → `색상표` (Windows)](./90-01-10-02-06-colormap.md#90-01-10-02-06-a101)
![90-01-10-02-06-a101](https://github.com/wonder13662/gimp/assets/15767104/6bde90e9-1786-4537-8dc8-631d03c446db)

[다른 운영체제와 언어의 `창` → `색상표` 확인하기](./90-01-10-02-06-colormap.md#90-01-10-02-06-a102)

전체 작업 과정은 아래 동영상으로 확인할 수 있습니다.

<a id="90-01-05-02-03-a101"></a>

#### [영상 90.1.5.2.3.a101. 색상모드를 인덱스로 바꿔 색상표(Colormap) 대화상자 만들기](./90-01-05-02-03-indexed.md#90-01-05-02-03-a101)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/e1b86121-19a0-4830-b091-c3a2db7e6d72"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 4.2.9. 붓, 지우개 또는 다른 도구로 작업한 효과가 보이지 않는 경우](./04-02-09-no-visible-effect-when-trying-to-use-a-brush-eraser-or-other-tool.md)

[⬅️ 이전: 4.2.7. 레이어 그룹에서 작업을 하려는 경우](./04-02-07-you-are-trying-to-act-on-a-layer-group.md)

[⬆️ 위: 4.2. GIMP(김프)가 멈추었을 때의 원인](./04-02-00-common-causes-of-gimp-non-responsiveness.md)

[⬆️ 위: 4. 문제 해결하기](./04-00-what-to-do-if-you-are-stuck.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-stuck-indexed-mode.html)