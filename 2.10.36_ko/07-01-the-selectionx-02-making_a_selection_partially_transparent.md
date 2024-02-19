# 7.1.2. 부분적으로 투명한 선택 만들기

레이어의 투명도를 설정할 수 있지만, `선택`에 직접 투명도를 설정할 수는 없습니다. 이미지에 투명 효과를 주는 것은 상당히 쓸모가 많습니다. 레이어 투명도를 설정하기 위해 아래 방법들을 써보세요.

## 지우개 도구 사용하기
지우개 도구로 원하는 투명도를 줄 수 있습니다.

#### 그림 90.3.2.28.a2. 도구상자 - 지우개
![그림 90.3.2.28.a2. 도구상자 - 지우개](https://github.com/wonder13662/gimp/assets/15767104/8e448288-3d80-449d-ac03-89757a056a1b)

아래 영상에서 지우개 도구의 투명도를 바꿔 선택 영역 안쪽을 지우는 것을 확인해보세요.

#### 영상 90.3.2.28.a122. 투명도 조정한 지우개 도구로 선택영역 지우기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/2569f6bc-62eb-4783-afa5-16f4f5522fc6"></video>

## 떠있는 선택(floating selection) 사용하기
[이미지 메뉴 바](./03-02-02-image-windowx-02-image-menu.md)의 `선택` → `띄우기`는 떠있는 선택(floating selection)을 만듭니다. 이 명령은 [`떠있는 선택(floating selection)`](./16-04-05-float.md)이라고 하는 새로운 레이어를 만듭니다. 

(TODO 이미지 메뉴 바의 선택 - 띄우기 이미지 추가하기)

레이어 대화상자의 투명도 슬라이더를 조정해서 원하는 투명도로 만들 수 있습니다.

(TODO 투명도 슬라이더 조정하는 영상 추가하기)

그 다음, 선택을 고정(anchor)시킵니다. 고정시키기 위해서는 3가지 방법 중 하나를 선택합니다.

### 1. 레이어 대화상자의 아래쪽의 고정(anchor) 버튼 클릭 
레이어 대화상자의 아래쪽의 고정(anchor) 버튼을 누릅니다

(TODO 예시 영상 추가하기)

### 2. 선택 영역의 바깥쪽을 클릭
선택 영역의 바깥쪽을 클릭합니다. 마우스 커서가 선택영역 바깥쪽으로 나가있을 때, 닻(anchor) 아이콘이 마우스 커서 옆에 표시됩니다. 참고로 선택 영역의 바깥쪽을 클릭해서 고정시키는 동작은 선택 도구가 활성화되어 있을 때만 가능합니다.

⚠️ 주의: 닻(anchor) 아이콘은 Windows에서는 표시되지만, Mac에서는 표시되지 않습니다.

#### 영상 90.4.3.a181. "떠있는 선택(Floating selection)" 바깥의 마우스 커서의 닻(Anchor) 아이콘
![90-04-03-layers(windows)(ko)-floating_selection-anchor_icon(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/593587b7-b4f5-402c-94c9-9e404840d47c)

아래 영상에서 선택 영역의 바깥쪽을 클릭하는 과정을 확인할 수 있습니다.

#### 영상 90.4.3.a182. "떠있는 선택(Floating selection)" 바깥을 클릭해서 고정하기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/7383c9e9-060f-4b97-8205-49ac68134863"></video>

### 3. 레이어 대화상자의 컨텍스트 메뉴 사용
레이어 대화상자의 `떠있는 선택(floating selection)` 레이어의 오른쪽 클릭을 해서 컨텍스트 메뉴를 엽니다. 그리고 `레이어 고정`을 선택합니다

(TODO 예시 영상 추가하기)

### 복사 + 붙여넣기 방법
이 과정을 작업중에 자주 사용한다면 더 나은 방법이 있습니다. `Ctrl` + `C`로 선택을 복사하고, `Ctrl` + `V`로 클립보드에 붙여넣어 [`떠있는 선택(floating selection)`](./16-04-05-float.md)으로 새로운 레이어를 만듭니다. 이 새로운 레이어의 투명도를 조정하면 됩니다.

(TODO 복사 붙여넣기 방식 예시 영상 추가하기)

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