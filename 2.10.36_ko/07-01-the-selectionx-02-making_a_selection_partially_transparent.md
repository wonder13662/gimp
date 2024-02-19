# 7.1.2. 부분적으로 투명한 선택 만들기

레이어의 투명도를 설정할 수 있지만, `선택`에 직접 투명도를 설정할 수는 없습니다. 이미지에 투명 효과를 주는 것은 상당히 쓸모가 많습니다. 레이어 투명도를 설정하기 위해 아래 방법들을 써보세요.

## 지우개 도구 사용하기
지우개 도구로 원하는 투명도를 줄 수 있습니다.

#### 그림 90.3.2.28.a2. 도구상자 - 지우개
![그림 90.3.2.28.a2. 도구상자 - 지우개](https://github.com/wonder13662/gimp/assets/15767104/8e448288-3d80-449d-ac03-89757a056a1b)

아래 영상에서 지우개 도구의 투명도를 바꿔 선택 영역 안쪽을 지우는 것을 확인해보세요.

#### 영상 90.3.2.28.a122. 투명도 조정한 지우개 도구로 선택영역 지우기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/2569f6bc-62eb-4783-afa5-16f4f5522fc6"></video>

## Complext selection
use `Select` → `Float` to create a floating selection. This create a new layer with the selection called "Floating Selection" ([Float](./16-04-05-float.md)). Set the opacity slider in the Layer Dialog to the desired opacity. Then anchor the selection: outside the selection, the mouse pointer includes an anchor. When you click while the mouse pointer includes the anchor, the floating selection disappears from the Layer Dialog and the selection is at the right place and partially transparent (anchoring works this way only if a selection tool is activated: you can also use the Anchor Layer command in the context menu by right clicking on the selected layer in the layer dialog).

And, if you use this function frequently: `Ctrl` + `C` to copy the selection, `Ctrl` + `V` to paste the clipboard as a floating selection, and `Layer` → `New Layer` to turn the selection into a new layer. You can adjust the opacity before, or after creating the new layer.

## 레이어 마스크 사용하기
use `Layer` → `Mask` → `Add Layer Mask` to add a layer mask to the layer with the selection, initializing it with the selection. Then use a brush with the desired opacity to paint the selection with black, i.e. paint it with transparency. Then Layer/Mask/Apply Layer Mask. See [15.2.1.4. Layer masks](./15-02-01-layers-dialogx-04-layer_mask.md)

## ?
To make the solid background of an image transparent, add an Alpha channel, and use the Magic Wand to select the background. Then, use the Color Picker tool to select the background color, which becomes the foreground color in Toolbox. Use the Bucket Fill tool with the selected color. Set the Bucket Fill mode to "Color Erase", which erases pixels with the selected color; other pixels are partially erased and their color is changed.

## ?
The simplest method is to use `Edit` → `Clear`, which gives complete transparency to a selection.

***

## 다른 페이지로 가기
[➡️ 다음: 7.2. 선택 만들기와 사용하기](./07-02-00-creating-and-using-selections.md)

[⬅️ 이전: 7.1.1. 페더링](./07-01-the-selectionx-01-feathering.md)

[⬆️ 위: 7.1. 선택](./07-01-the-selection.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-painting.html#gimp-concepts-selection-transparent)