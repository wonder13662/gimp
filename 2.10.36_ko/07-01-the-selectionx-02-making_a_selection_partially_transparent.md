# 7.1.2. 부분적으로 투명한 선택 만들기

레이어의 투명도를 설정할 수 있지만, `선택`에 직접 투명도를 설정할 수는 없습니다. 이미지에 투명 효과를 주는 것은 상당히 쓸모가 많습니다. 레이어 투명도를 설정하기 위해 아래 방법들을 써보세요.

## 지우개 도구 사용하기
지우개 도구로 원하는 투명도를 줄 수 있습니다.

#### [그림 90.3.2.28.a2. 도구상자 - 지우개](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-02-tool_iconx-28-eraser.html#%EA%B7%B8%EB%A6%BC-903228a2-%EB%8F%84%EA%B5%AC%EC%83%81%EC%9E%90---%EC%A7%80%EC%9A%B0%EA%B0%9C)
[![그림 90.3.2.28.a2. 도구상자 - 지우개](https://github.com/wonder13662/gimp/assets/15767104/8e448288-3d80-449d-ac03-89757a056a1b)](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-02-tool_iconx-28-eraser.html#%EA%B7%B8%EB%A6%BC-903228a2-%EB%8F%84%EA%B5%AC%EC%83%81%EC%9E%90---%EC%A7%80%EC%9A%B0%EA%B0%9C)

아래 영상에서 지우개 도구의 투명도를 바꿔 선택 영역 안쪽을 지우는 것을 확인해보세요.

#### [영상 90.3.2.28.a122. 투명도 조정한 지우개 도구로 선택영역 지우기](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-02-tool_iconx-28-eraser.html#%EC%98%81%EC%83%81-903228a122-%ED%88%AC%EB%AA%85%EB%8F%84-%EC%A1%B0%EC%A0%95%ED%95%9C-%EC%A7%80%EC%9A%B0%EA%B0%9C-%EB%8F%84%EA%B5%AC%EB%A1%9C-%EC%84%A0%ED%83%9D%EC%98%81%EC%97%AD-%EC%A7%80%EC%9A%B0%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/2569f6bc-62eb-4783-afa5-16f4f5522fc6"></video>

## 떠있는 선택(floating selection) 사용하기
[이미지 메뉴 바](./03-02-02-image-windowx-02-image-menu.md)의 `선택` → `띄우기`는 떠있는 선택(floating selection)을 만듭니다. 이 명령은 [`떠있는 선택(floating selection)`](./16-04-05-float.md)이라고 하는 새로운 레이어를 만듭니다. 

#### [그림 90.1.3.4.a101. `선택` → `띄우기`](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-03-selectx-04-float.html#%EA%B7%B8%EB%A6%BC-90134a101-%EC%84%A0%ED%83%9D--%EB%9D%84%EC%9A%B0%EA%B8%B0)
[![그림 90.1.3.4.a101. `선택` → `띄우기`](https://github.com/wonder13662/gimp/assets/15767104/8080d2be-dc54-4cf0-80ed-e13dfdacfb9a)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-03-selectx-04-float.html#%EA%B7%B8%EB%A6%BC-90134a101-%EC%84%A0%ED%83%9D--%EB%9D%84%EC%9A%B0%EA%B8%B0)

레이어 대화상자의 투명도 슬라이더를 조정해서 원하는 투명도로 만들 수 있습니다.

#### [영상 90.4.3.a183. "떠있는 선택(Floating selection)"의 투명도 조정하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-03-layers.html#%EC%98%81%EC%83%81-9043a183-%EB%96%A0%EC%9E%88%EB%8A%94-%EC%84%A0%ED%83%9Dfloating-selection%EC%9D%98-%ED%88%AC%EB%AA%85%EB%8F%84-%EC%A1%B0%EC%A0%95%ED%95%98%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/da6c8a2b-6811-43ac-a361-b8a05eb7ac0c"></video>

그 다음, 선택을 고정(anchor)시킵니다. 고정시키기 위해서는 3가지 방법 중 하나를 선택합니다.

### 1. 레이어 대화상자의 아래쪽의 고정(anchor) 버튼 클릭 
레이어 대화상자의 아래쪽의 고정(anchor) 버튼을 누릅니다

#### [영상 90.4.3.a184. "떠있는 선택(Floating selection)"을 대화상자 아래의 고정 버튼 클릭으로 고정하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-03-layers.html#%EC%98%81%EC%83%81-9043a184-%EB%96%A0%EC%9E%88%EB%8A%94-%EC%84%A0%ED%83%9Dfloating-selection%EC%9D%84-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-%EC%95%84%EB%9E%98%EC%9D%98-%EA%B3%A0%EC%A0%95-%EB%B2%84%ED%8A%BC-%ED%81%B4%EB%A6%AD%EC%9C%BC%EB%A1%9C-%EA%B3%A0%EC%A0%95%ED%95%98%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/3a3b84fe-c6b3-49d2-92ec-c81a9061d76c"></video>

### 2. 선택 영역의 바깥쪽을 클릭
선택 영역의 바깥쪽을 클릭합니다. 마우스 커서가 선택영역 바깥쪽으로 나가있을 때, 닻(anchor) 아이콘이 마우스 커서 옆에 표시됩니다. 참고로 선택 영역의 바깥쪽을 클릭해서 고정시키는 동작은 선택 도구가 활성화되어 있을 때만 가능합니다.

⚠️ 주의: 닻(anchor) 아이콘은 Windows에서는 표시되지만, Mac에서는 표시되지 않습니다.

#### [영상 90.4.3.a181. "떠있는 선택(Floating selection)" 바깥의 마우스 커서의 닻(Anchor) 아이콘](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-03-layers.html#%EC%98%81%EC%83%81-9043a181-%EB%96%A0%EC%9E%88%EB%8A%94-%EC%84%A0%ED%83%9Dfloating-selection-%EB%B0%94%EA%B9%A5%EC%9D%98-%EB%A7%88%EC%9A%B0%EC%8A%A4-%EC%BB%A4%EC%84%9C%EC%9D%98-%EB%8B%BBanchor-%EC%95%84%EC%9D%B4%EC%BD%98)
[![90-04-03-layers(windows)(ko)-floating_selection-anchor_icon(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/593587b7-b4f5-402c-94c9-9e404840d47c)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-03-layers.html#%EC%98%81%EC%83%81-9043a181-%EB%96%A0%EC%9E%88%EB%8A%94-%EC%84%A0%ED%83%9Dfloating-selection-%EB%B0%94%EA%B9%A5%EC%9D%98-%EB%A7%88%EC%9A%B0%EC%8A%A4-%EC%BB%A4%EC%84%9C%EC%9D%98-%EB%8B%BBanchor-%EC%95%84%EC%9D%B4%EC%BD%98)

아래 영상에서 선택 영역의 바깥쪽을 클릭하는 과정을 확인할 수 있습니다.

#### [영상 90.4.3.a182. "떠있는 선택(Floating selection)" 바깥을 클릭해서 고정하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-03-layers.html#%EC%98%81%EC%83%81-9043a182-%EB%96%A0%EC%9E%88%EB%8A%94-%EC%84%A0%ED%83%9Dfloating-selection-%EB%B0%94%EA%B9%A5%EC%9D%84-%ED%81%B4%EB%A6%AD%ED%95%B4%EC%84%9C-%EA%B3%A0%EC%A0%95%ED%95%98%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/7383c9e9-060f-4b97-8205-49ac68134863"></video>

### 3. 레이어 대화상자의 컨텍스트 메뉴 사용
레이어 대화상자의 `떠있는 선택(floating selection)` 레이어의 오른쪽 클릭을 해서 컨텍스트 메뉴를 엽니다. 그리고 `레이어 고정`을 선택합니다

#### [영상 90.4.3.a185. "떠있는 선택(Floating selection)"을 대화상자의 컨텍스트 메뉴의 `레이어 고정`으로 고정하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-03-layers.html#%EC%98%81%EC%83%81-9043a185-%EB%96%A0%EC%9E%88%EB%8A%94-%EC%84%A0%ED%83%9Dfloating-selection%EC%9D%84-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90%EC%9D%98-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-%EB%A9%94%EB%89%B4%EC%9D%98-%EB%A0%88%EC%9D%B4%EC%96%B4-%EA%B3%A0%EC%A0%95%EC%9C%BC%EB%A1%9C-%EA%B3%A0%EC%A0%95%ED%95%98%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/4ea970be-7bdb-4b9b-8c05-fdc3d899aae2"></video>

### 복사 + 붙여넣기 방법
이 과정을 작업중에 자주 사용한다면 더 나은 방법이 있습니다. `Ctrl` + `C`로 선택을 복사하고, `Ctrl` + `V`로 클립보드에 붙여넣어 [`떠있는 선택(floating selection)`](./16-04-05-float.md)으로 새로운 레이어를 만듭니다. 이 새로운 레이어의 투명도를 조정하면 됩니다.

#### [그림 90.4.3.a111. 선택 영역의 복사 + 붙여넣기로 떠있는 선택 만들기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-03-layers.html#%EA%B7%B8%EB%A6%BC-9043a111-%EC%84%A0%ED%83%9D-%EC%98%81%EC%97%AD%EC%9D%98-%EB%B3%B5%EC%82%AC--%EB%B6%99%EC%97%AC%EB%84%A3%EA%B8%B0%EB%A1%9C-%EB%96%A0%EC%9E%88%EB%8A%94-%EC%84%A0%ED%83%9D-%EB%A7%8C%EB%93%A4%EA%B8%B0)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/df01454e-345e-43ad-af3b-eeb2001c8f4b"></video>

## 레이어 마스크 사용하기
use `Layer` → `Mask` → `Add Layer Mask` to add a layer mask to the layer with the selection, initializing it with the selection. Then use a brush with the desired opacity to paint the selection with black, i.e. paint it with transparency. Then Layer/Mask/Apply Layer Mask. See [15.2.1.4. Layer masks](./15-02-01-layers-dialogx-04-layer_mask.md)

[이미지 메뉴 바](./03-02-02-image-windowx-02-image-menu.md)의 `레이어` → `마스크` → `레이어 마스크 추가`을 클릭하면, `레이어 마스크 추가` 대화상자가 나옵니다. 이 대화상자에서 `선택`으로 초기화합니다. 그 다음에 `붓`을 사용해서 원하는 투명도로 `선택` 영역에 검은색(검은색으로 칠하면 투명이 됩니다)으로 칠합니다. 상세한 내용은 [15.2.1.4. 레이어 마스크](./15-02-01-layers-dialogx-04-layer_mask.md)를 확인해주세요.

#### 그림 90.4.50.a111. `레이어 마스크 추가` 대화상자 - `선택` (Windows) (우리말)
![90-04-50-add_layer_mask(windows)(ko)-focus-selection](https://github.com/wonder13662/gimp/assets/15767104/84a8bfde-b6f6-4472-b11c-f7bf3613f6de)

#### 영상 90.1.6.2.a101. 선택 영역에 `레이어 마스크 추가` 뒤에 마스크 칠하기 (Windows)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/b33bf497-251b-4cb7-828b-22c37908be97"></video>

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