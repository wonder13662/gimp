# 15.2.4.2. 색상표와 인덱스 이미지(Colormaps and Indexed Images)

<a id="15-02-04-02-s1"></a>

## 1. 색상표로 인덱스 이미지 만들기

인덱스 이미지에서 각 픽셀에 색을 설정할 때에는 [RGB](./19-glossaryx-color_mode_rgb.md) 또는 [그레이스케일](./19-glossaryx-color_mode_grayscale.md)처럼 색을 직접 픽셀에 색상 값을 설정하지 않습니다.

인덱스 이미지에서는 색상표의 색 중에서 픽셀에 설정할 색을 찾아 설정합니다.

모든 인덱스 이미지는 자신만의 색상표를 가지고 있습니다.

GIMP(김프)에서는 색상표가 가질 수 있는 색의 최대 갯수는 256개입니다.

<a id="90-04-32-a101-01"></a>

#### [그림 90.4.32.a101.1. `이미지를 색인 색상으로 변환` 대화상자: 최대 색상 수 256색 설정 (Windows) (우리말)](./90-04-0032-convert_image_to_indexed_colors.md#90-04-32-a101-01)
<img width="447" height="440" alt="90-04-32-a101-01" src="https://github.com/wonder13662/gimp/assets/15767104/5fcf55e5-da58-48f2-89f4-df3c8cadbc7f" />

색의 최대 갯수를 가지는 색상표는 임의의 [RGB](./19-glossaryx-color_mode_rgb.md) 색상에 0부터 255까지의 번호를 붙입니다.

어떤 색상에 어떤 번호가 붙는지, 어떤 순서로 번호가 붙여지는지는 정해진 규칙은 없습니다.

<a id="15-02-04-02-s2"></a>

## 2. 색상맵이 다른 기능에 미치는 영향
색상표의 색은 인덱스 이미지에서 사용가능한 색으로만 제한됩니다.

이 조건은 GIMP(김프)의 여러 기능들에 영향을 줍니다.

예를 들어, [무늬로 채우기](./16-03-17-00-fill-with-pattern.md)를 사용하면 GIMP(김프)는 무늬의 색상을 색상표의 색상과 정확하게 일치하는 것을 찾을 수 없습니다.

그래서 대략적으로 가까운 색을 찾습니다.

이 과정을 [양자화](./19-glossaryx-quantization.md)라고 합니다.

아래 예시 영상을 보시면, [양자화](./19-glossaryx-quantization.md)에 의해 무늬가 파란색이지만, 색상표에는 파란색이 없으므로 갈색으로 바뀌어 선택영역을 채우는 것을 확인할 수 있습니다.

<a id="90-04-06-a11"></a>

#### [영상 90.4.6.a11. 색상표 대화상자: 인덱스 이미지에서 무늬로 채우기 (Windows) (우리말)](./90-04-0006-colormap.md#90-04-06-a11)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/4a8090db-5d4f-4439-906c-486f677e660a"></video>

색상표가 지나치게 적은 수의 색을 가지고 있거나, 적절한 색이 아니라면, 인덱스 이미지의 품질이 떨어질 수 있습니다.

<a id="15-02-04-02-s3"></a>

## 3. 색상맵의 색상을 새로 추가하거나 바꾸기

색상표 대화상자에서 이미지의 색상표에 색을 추가하거나 색을 바꿀 수 있습니다.

번호가 지정된 색을 바꾸면, 이미지 전체에 걸쳐 바뀐 색으로 변하는 것을 확인할 수 있습니다.

<a id="90-04-06-a12"></a>

#### [영상 90.4.6.a12. 색상표 대화상자: 지정된 색을 바꾸기 (Windows) (우리말)](./90-04-0006-colormap.md#90-04-06-a12)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/8c6b9474-028c-44c6-a520-8aa116021236"></video>

색의 번호는 가장 왼쪽 위에서부터 0부터 오른쪽으로 1씩 증가합니다.

***

## 다른 페이지로 가기

[➡️ 다음: 15.2.4.3. 색상표 대화상자 사용하기(Using the Colormap dialog)](./15-02-04-03-00-using_the_colormap_dialog.md)

[⬅️ 이전: 15.2.4.1. 대화상자 활성화하기(Activate the dialog)](./15-02-04-01-activate_the_dialog.md)

[⬆️ 위: 15.2.4. 색상표 대화상자(Colormap dialog)](./15-02-04-00-colormap_dialog.md)

[⬆️ 위: 15.2. 이미지 구조 관련 대화상자(Image structure related dialogs)](./15-02-00-image-structure-related-dialogs.md)

[⬆️ 위: 15. 대화상자(Dialogs)](./15-00-dialogs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-indexed-palette-dialog.html#gimp-indexed-palette-dialog-colormaps)