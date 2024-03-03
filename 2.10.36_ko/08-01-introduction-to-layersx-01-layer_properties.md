# 8.1.1. 레이어 속성
이미지의 각 레이어들은 다음과 같은 속성을 갖습니다.

## 1. 이름
Every layer has a name. This is assigned automatically when the layer is created, but you can change it. You can change the name of a layer either by double-clicking on it in the Layers dialog, or by right-clicking there, and the selecting the top entry in the menu appears, `Edit Layer Attributes`.

모든 레이어는 이름을 갖고 있습니다. 이름은 레이어가 만들어 질때 자동으로 생깁니다. 하지만 나중에 이름을 바꿀 수 있습니다. 레이어의 이름은 두 가지 방법으로 바꿀 수 있습니다.

### 1-1. 레이어 대화상자에서 이름 바꾸기
#### 영상 90.4.3.a205. 레이어 대화상자에서 레이어 더블 클릭으로 이름 바꾸기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/95a3c67c-426e-4a07-a758-63098453ae03"></video>

### 1-2. 레이어 속성 편집 대화상자에서 이름 바꾸기 
레이어 대화상자의 레이어에서 오른쪽 클릭해서 팝업 메뉴를 띄웁니다. 이 팝업 메뉴에서 `레이어 속성 편집...`을 클릭합니다.

#### 그림 90.4.3.a203. 레이어 대화상자의 오른쪽 클릭 팝업(컨텍스트 메뉴) → `레이어 속성 편집...` (windows) (우리말)
![90-04-03-layer_dialog-context_menu(windows)(ko)-focus-edit_layer_properties](https://github.com/wonder13662/gimp/assets/15767104/00f2273c-924c-4429-b216-aff875a26734)

`레이어 속성 편집` 대화상자가 뜹니다. `레이어 속성 편집` 대화상자의 `레이어 이름`의 이름을 수정합니다. 대화상자 아래의 `확인` 버튼을 클릭해서 수정을 완료합니다.

#### 그림 90.4.62.a105. `레이어 속성 편집` 대화상자 → `레이어 이름` (Windows) (우리말)
![90-04-62-edit_layer_attributes(windows)(ko)-focus-layer_name](https://github.com/wonder13662/gimp/assets/15767104/20633024-7d4c-4357-9de9-1e5a8e0c29c4)

아래 영상에서 전체 과정을 확인할 수 있습니다.

#### 영상 90.4.3.a204. `레이어 속성 편집` 대화상자에서 이름 바꾸기 
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/d5a4bc9d-fee8-4487-9682-c06bc495b71f"></video>

## 2. 알파 채널의 유무
### 2-1. 알파 채널이란?
An alpha channel encodes information about how transparent a layer is at each pixel. It is visible in the Channel Dialog: white is complete opacity, black is complete transparency and gray levels are partial transparencies.

### 2-2. 배경 레이어
The background layer is special. If you have just created a new image, it only has one layer, which is the background layer. If the image has been created with an opaque Fill type, this one layer has no Alpha channel. To get a background layer with transparency, either create your new image with a transparent Fill type, or you use the [Add an Alpha Channel](./16-07-34-add-alpha-channel.md) command.

### 2-3. 새로 추가하는 레이어는 알파 채널을 갖습니다
If you add a new layer, even with an opaque Fill type, an Alpha channel is automatically added to the layer.

(TODO 영상: 새로운 레이어 추가)

Every layer other than the bottom layer of an image automatically has an Alpha channel, but you can't see a grayscale representation of the alpha values. See [Alpha](./19-glossaryx-alpha.md) in Glossary for more information.

### 2-4. 알파 채널 예제: 기본 이미지
This image has three layers painted with pure 100% opaque Red, Green, and Blue. In the Channel Dialog, you can see that an alpha channel has been added. It is white because the image is not transparent since there is at least one 100% opaque layer. The current layer is the red one: since it is painted with pure red, there is no green and no blue and the corresponding channels are black.

### 2-5. 알파 채널 예제: 한 개의 투명한 레이어가 있는 경우
첫번째 레이어의 왼쪽 부분을 투명하게 만들었습니다. 두번째 레이어는 녹색으로 첫번째 레이어의 투명한 부분을 통해 일부가 보입니다. 하지만 이미지에 불투명한 레이어가 있기 때문에 알파 채널은 여전히 흰색입니다.

### 2-6. 알파 채널 예제: 두 개의 투명한 레이어가 있는 경우
두번째 레이어의 왼쪽 부분도 투명하게 만들었습니다. 따라서 세번째 파랑색 레이어가 첫번째, 두번째 레이어를 통해 보이게 됩니다. 하지만 이미지에 불투명한 레이어가 있기 때문에 알파채널은 여전히 흰색입니다.

### 2-7. 알파 채널 예제: 셰 개의 투명한 레이어가 있는 경우
The left part of the third layer has been cleared. The Alpha channel is still white and the left part of the layer is opaque, because the background layer has no Alpha channel. In this case, the Clear command works like the Eraser and uses the Background color of Toolbox.

### 2-8. 알파 채널 예제: 배경레이어에 알파 채널을 추가한 경우
We used the `Layer` → `Transparency` → `Add Alpha Channel` command, on the Background layer. Now, the left part of the image is fully transparent and has the color of the page where the image is shown. The left part of the Alpha channel thumbnail is black (transparent) in the Channel Dialog.

## 3. 레이어 타입
The layer type is determined by the image type (see previous section), and the presence or absence of an alpha channel. These are the possible layer types:

- RGB
- RGBA
- Gray
- GrayA
- Indexed
- IndexedA

The main reason this matters is that some filters (in the `Filters` menu) only accept a subset of layer types, and appear disabled in the menu if the active layer does not have a supported type. Often you can rectify this either by changing the mode of image, or by adding or removing an alpha channel.

## 4. 가시성(Visibility)
It is possible to remove a layer from an image, without destroying it, by clicking on the symbol in the Layers dialog. This is called "toggling the visibility" of the layer. Most operations on an image treat toggled-off layers as if they did not exist. When you work with images containing many layers, with varying opacity, you often can get a better picture of the contents of the layer you want to work on by hiding some of the other layers. Shift 버튼을 누른 채, 눈 모양을 클릭하면, 방금 클릭한 레이어를 제외한 모든 레이어를 숨깁니다.

## 5. 활성화 레이어(Active Layer)
Usually, you activate a layer, to work on it, clicking it in the layer list. When you have a lot of layers, finding which layer an element of the image belongs to is not easy: then, press Alt and click with Mouse wheel on this element to activate its layer. The available layers will be looped through (starting from the upper one) while the Alt is held and the picked layer will be temporarily displayed in the status bar.

## 6. 다른 레이어에 연결(Linkage to other layers)
눈 모양 아이콘과 레이어 미리보기 사이를 클릭하면 연결 아이콘이 나타납니다. 이것을 이용해 움직이거나 변형하기 등의 여러 개의 레이어에 적용해야 하는 동작들을 위해 레이어들을 묶을 수 있습니다.

## 7. 크기와 경계
In GIMP, the boundaries of a layer do not necessarily match the boundaries of the image that contains it. When you create text, for example, each text item belongs to its own separate layer, and the layer size is automatically adjusted to contain the text and nothing more. Also, when you create a new layer using cut-and-paste, the new layer is sized just large enough to contain the pasted item. In the image window, the boundaries of the currently active layer are shown outlined with a black-and-yellow dashed line.

이 검은색과 노란색 점선 밖의 공간에서는 어떤 작업도 할 수 없습니다. 왜냐하면 실제로 점선 밖의 공간에는 아무것도 존재하지 않기 때문입니다. 따라서, 이 경우에는 레이어의 크기를 조정하면 됩니다.

> 🗒️ 참고
>
> 레이어가 차지하는 메모리의 총량은 레이어의 내용이 아닌 넓이에 의해 좌우됩니다. 따라서 큰 이미지나 많은 레이어를 가진 이미지로 작업을 한다면 레이어의 크기를 적절하게 조절할 필요가 있습니다.

## 8. 불투명도
레이어의 불투명도는 바로 밑에 위치한 레이어의 색상을 얼마만큼 투과시킬 것인가에 대한 것입니다. 불투명도의 범위는 0부터 100으로, 0은 완전 투명, 100은 완전 불투명입니다.

## 9. 모드
레이어의 모드는 레이어의 색상을 아래에 위치한 레이어의 색상과 혼합시키는 방식을 정하는 것입니다. 레이어 모드는 상당히 복잡하지만, 중요하므로 보다 상세한 내용은 [8.2. 레이어 모드](./08-02-00-layer-modes.md)을 참고해주세요.

## 10. 레이어 마스크
레이어에는 알파 채널외에도 투명도를 조절할 수 있는 방법이 하나 더 있습니다. 레이어 마스크를 추가해서 레이어의 투명도를 조절할 수 있습니다. 레이어 마스크는 레이어와 연동된 그레이스케일 `drawable` 영역입니다. 기본적으로 레이어에는 레이어 마스크가 없습니다. 그러므로 따로 레이어 마스크를 추가해 주어야 합니다. 보다 자세한 설명은 [15.2.1.4. 레이어 마스크](./15-02-01-layers-dialogx-04-layer_mask.md)을 참고해주세요.

***

## 다른 페이지로 가기
[➡️ 다음: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬅️ 이전: 8.1. 레이어 소개](./08-01-introduction-to-layers.md)

[⬆️ 위: 8.1. 레이어 소개](./08-01-introduction-to-layers.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-image-combining.html#gimp-layer-properties)
