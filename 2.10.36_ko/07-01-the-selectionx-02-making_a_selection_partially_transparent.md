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

#### [그림 90.4.50.a111. `레이어 마스크 추가` 대화상자 - `선택` (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-50-add_layer_mask.html#%EA%B7%B8%EB%A6%BC-90450a111-%EB%A0%88%EC%9D%B4%EC%96%B4-%EB%A7%88%EC%8A%A4%ED%81%AC-%EC%B6%94%EA%B0%80-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%84%A0%ED%83%9D-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-50-add_layer_mask(windows)(ko)-focus-selection](https://github.com/wonder13662/gimp/assets/15767104/84a8bfde-b6f6-4472-b11c-f7bf3613f6de)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-50-add_layer_mask.html#%EA%B7%B8%EB%A6%BC-90450a111-%EB%A0%88%EC%9D%B4%EC%96%B4-%EB%A7%88%EC%8A%A4%ED%81%AC-%EC%B6%94%EA%B0%80-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%84%A0%ED%83%9D-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

#### [영상 90.1.6.8.a102. 선택 영역에 `레이어 마스크 추가` 뒤에 마스크 칠하기 (Windows)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-06-layerx-08-mask.html#%EC%98%81%EC%83%81-90168a102-%EC%84%A0%ED%83%9D-%EC%98%81%EC%97%AD%EC%97%90-%EB%A0%88%EC%9D%B4%EC%96%B4-%EB%A7%88%EC%8A%A4%ED%81%AC-%EC%B6%94%EA%B0%80-%EB%92%A4%EC%97%90-%EB%A7%88%EC%8A%A4%ED%81%AC-%EC%B9%A0%ED%95%98%EA%B8%B0-windows)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/b33bf497-251b-4cb7-828b-22c37908be97"></video>

## 이미지 배경을 투명으로 만들기
### 1. 알패 채널 추가
이미지의 단색의 배경색을 투명으로 만들려면, 알파 채널을 추가하세요. 

#### 영상 7.1.2.a101. 알파 채널 추가
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/0769da7a-654a-4185-bf7d-396e69346085"></video>

### 2. 배경 영역 선택
그리고 [퍼지 선택(Fuzzy selection)](./14-02-05-fuzzy-selection-magic-wand.md)을 사용해서 이미지 안의 배경 영역을 선택하세요.

#### [그림 90.3.2.8.a2. 도구상자 - 퍼지 선택](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-02-tool_iconx-08-fuzzy_select.html#%EA%B7%B8%EB%A6%BC-90328a2-%EB%8F%84%EA%B5%AC%EC%83%81%EC%9E%90---%ED%8D%BC%EC%A7%80-%EC%84%A0%ED%83%9D)
[![그림 90.3.2.8.a2. 도구상자 - 퍼지 선택](https://github.com/wonder13662/gimp/assets/15767104/9f2fad3e-18f9-43ea-a3ba-a9cb736bc1d5)](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-02-tool_iconx-08-fuzzy_select.html#%EA%B7%B8%EB%A6%BC-90328a2-%EB%8F%84%EA%B5%AC%EC%83%81%EC%9E%90---%ED%8D%BC%EC%A7%80-%EC%84%A0%ED%83%9D)

#### 영상 7.1.2.a102. 이미지 안의 배경 영역 선택
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/5bdf065c-08c3-4e6d-b7db-b32c8d9f36aa"></video>

### 3. 배경색 선택
그 다음에 [색상 추출(Color Picker)](./14-05-03-color-picker.md) 도구를 사용해서 배경색을 선택합니다. 선택한 배경색은 도구상자의 전경색이 됩니다. 

#### [그림 90.3.2.37.a2. 도구상자 - 색상 추출](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-02-tool_iconx-37-color_picker.html#%EA%B7%B8%EB%A6%BC-903237a2-%EB%8F%84%EA%B5%AC%EC%83%81%EC%9E%90---%EC%83%89%EC%83%81-%EC%B6%94%EC%B6%9C)
[![그림 90.3.2.37.a2. 도구상자 - 색상 추출](https://github.com/wonder13662/gimp/assets/15767104/92807e43-d7d2-49ab-89cb-e4e343aa5fd7)](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-02-tool_iconx-37-color_picker.html#%EA%B7%B8%EB%A6%BC-903237a2-%EB%8F%84%EA%B5%AC%EC%83%81%EC%9E%90---%EC%83%89%EC%83%81-%EC%B6%94%EC%B6%9C)

#### 영상 7.1.2.a103. 배경의 색상 추출
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/72becdd4-4f2a-477d-94da-c8bc2fef893e"></video>

### 4. 색상 지우기로 투명하게 만들기
[영역 채우기(Bucket Fill)](./14-03-04-bucket-fill.md) 도구를 사용해서 선택한 색으로 채웁니다. "영역 채우기"의 모드를 `색상 지우기(Color Erase)`로 설정합니다. `색상 지우기(Color Erase)`는 선택된 색상의 픽셀을 지웁니다. 그 외의 다른 픽셀들은 부분적으로 지워지고, 색상이 바뀝니다.

#### [그림 90.3.2.21.a2. 도구상자 - 영역 채우기](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-02-tool_iconx-21-bucket_fill.html#%EA%B7%B8%EB%A6%BC-903221a2-%EB%8F%84%EA%B5%AC%EC%83%81%EC%9E%90---%EC%98%81%EC%97%AD-%EC%B1%84%EC%9A%B0%EA%B8%B0)
![그림 90.3.2.21.a2. 도구상자 - 영역 채우기](https://github.com/wonder13662/gimp/assets/15767104/0550285d-2807-4201-87b2-77b5e8cd8278)

#### 영상 7.1.2.a104. 색상 지우기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/57683b6c-4c5f-4637-b22e-4c3582fbf8d2"></video>

## 지우기
가장 간단한 방법은 [이미지 메뉴 바](./03-02-02-image-windowx-02-image-menu.md)의 `편집` → `지우기`를 클릭하는 것입니다. 지우면 선택 영역이 완전한 투명이 됩니다. 아래 영상으로 알파 채널이 없는 경우와 있는 경우의 지우기 결과를 확인해보세요.

⚠️ 주의: 알파 채널이 없는 상태에서 지우기를 하면, 지운 부분이 배경색으로 채워집니다.

#### [그림 90.1.2.13.a101. `편집` → `지우기`](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-02-editx-13-clear.html#%EA%B7%B8%EB%A6%BC-901213a101-%ED%8E%B8%EC%A7%91--%EC%A7%80%EC%9A%B0%EA%B8%B0)
[![90-00-image_menu_bar-edit(w1080)-focus-clear](https://github.com/wonder13662/gimp/assets/15767104/194a7e4a-e39b-42bf-9921-222a15ed6166)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-02-editx-13-clear.html#%EA%B7%B8%EB%A6%BC-901213a101-%ED%8E%B8%EC%A7%91--%EC%A7%80%EC%9A%B0%EA%B8%B0)

#### [영상 90.1.2.13.a102. 알파 채널없이 선택 영역 지우기](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-02-editx-13-clear.html#%EC%98%81%EC%83%81-901213a102-%EC%95%8C%ED%8C%8C-%EC%B1%84%EB%84%90%EC%97%86%EC%9D%B4-%EC%84%A0%ED%83%9D-%EC%98%81%EC%97%AD-%EC%A7%80%EC%9A%B0%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/5842da0e-e8a3-439f-b2fa-275e268841e7"></video>

#### [영상 90.1.2.13.a103. 알파 채널을 추가한 뒤 선택 영역 지우기](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-02-editx-13-clear.html#%EC%98%81%EC%83%81-901213a103-%EC%95%8C%ED%8C%8C-%EC%B1%84%EB%84%90%EC%9D%84-%EC%B6%94%EA%B0%80%ED%95%9C-%EB%92%A4-%EC%84%A0%ED%83%9D-%EC%98%81%EC%97%AD-%EC%A7%80%EC%9A%B0%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/1964123e-fecc-47b3-acca-8cb10f36673d"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 7.2. 선택 만들기와 사용하기](./07-02-00-creating-and-using-selections.md)

[⬅️ 이전: 7.1.1. 페더링](./07-01-the-selectionx-01-feathering.md)

[⬆️ 위: 7.1. 선택](./07-01-the-selection.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-painting.html#gimp-concepts-selection-transparent)