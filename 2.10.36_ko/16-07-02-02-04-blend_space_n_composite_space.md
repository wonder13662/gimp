# 16.7.2.2.4. 혼합 영역, 합성 공간(Blend space, Composite space)

<a id="90-04-64-a151"></a>

#### [그림 90.4.64.a151. `새 레이어` 대화상자 → `새 레이어 만들기` → `혼합 영역` (Windows) (우리말)](./90-04-0064-new_layer.md#90-04-64-a151)
<img width="542" height="531" alt="90-04-64-a151" src="https://github.com/user-attachments/assets/40cb84f2-f2bd-42dc-baa4-8dcf95a90bf6" />

<a id="90-04-64-a161"></a>

#### [그림 90.4.64.a161. `새 레이어` 대화상자 → `새 레이어 만들기` → `합성 공간` (Windows) (우리말)](./90-04-0064-new_layer.md#90-04-64-a161)
<img width="542" height="531" alt="90-04-64-a161" src="https://github.com/user-attachments/assets/fee4c286-f2e2-42a7-a2c9-40d0ef08bab2" />

<a id="16-07-02-02-04-s1"></a>

## 1. 용어 정의

<a id="16-07-02-02-04-s1-01"></a>

## 1-1. 블랜딩(혼합)
[블렌딩(혼합)](./19-glossaryx-blending.md)은 위쪽 레이어와 아래쪽 레이어의 색상이 섞이는 방식을 말합니다.

<a id="16-07-02-02-04-s1-02"></a>

## 1-2. 합성
[합성](./19-glossaryx-compositing.md)은 위쪽 레이어와 아래쪽 레이어의 각 픽셀의 투명도가 합쳐지는 방식을 말합니다.

<a id="16-07-02-02-04-s1-03"></a>

## 1-3. 색 공간
[색 공간(Color space)](./19-glossaryx-color_space.md)은 위쪽 레이어와 아래쪽 레이어의 [블렌딩(혼합)](./19-glossaryx-blending.md)과 [합성](./19-glossaryx-compositing.md) 과정에서 사용됩니다.

<a id="16-07-02-02-04-s2"></a>

## 2. 레이어 모드에 따른 혼합 영역, 합성공간의 활성/비활성 상태 변경

선택한 [레이어 모드](./16-07-02-02-03-mode.md)에 따라서 [블렌딩(혼합)](./19-glossaryx-blending.md) 또는 [합성](./19-glossaryx-compositing.md)은 비활성화될 수도 있습니다.

아래 영상을 확인해보면, 레이어 모드의 `보통(Normal)`, `분해(Dissolve)`, `색상 지우기(Color Erase)`를 선택할 때마다 [블렌딩(혼합)](./19-glossaryx-blending.md) 또는 [합성](./19-glossaryx-compositing.md)의 활성, 비활성 상태가 달라지는 것을 확인할 수 있습니다.

<a id="90-04-64-a144"></a>

#### [영상 90.4.64.a144. `새 레이어` 대화상자 → `새 레이어 만들기` → `모드`: 혼합 영역, 합성 공간이 모드에 따라 활성/비활성 변경 (Windows) (우리말)](./90-04-0064-new_layer.md#90-04-64-a144)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/3016613d-5bf1-4b22-8fe8-3534b46f71ed"></video>

<a id="16-07-02-02-04-s3"></a>

## 3. 혼합 영역, 합성공간의 드롭다운 목록

<a id="90-04-64-a152"></a>

#### [그림 90.4.64.a152. `새 레이어` 대화상자 → `새 레이어 만들기` → `혼합 영역`: 드롭다운 목록 (Windows) (우리말)](./90-04-0064-new_layer.md#90-04-64-a152)
<img width="239" height="166" alt="90-04-64-a152" src="https://github.com/user-attachments/assets/88d00267-b8a8-4b09-9a45-c3fa38d0d3a0" />

<a id="90-04-64-a162"></a>

#### [그림 90.4.64.a162. `새 레이어` 대화상자 → `새 레이어 만들기` → `합성 공간`: 드롭다운 목록 (Windows) (우리말)](./90-04-0064-new_layer.md#90-04-64-a162)
<img width="239" height="166" alt="90-04-64-a162" src="https://github.com/user-attachments/assets/88d00267-b8a8-4b09-9a45-c3fa38d0d3a0" />

[블렌딩(혼합)](./19-glossaryx-blending.md) 또는 [합성](./19-glossaryx-compositing.md)이 활성화되면 기본값은 `자동(Auto)`입니다.

모든 선택가능한 값은 아래와 같습니다.

|우리말|영어|
|자동|Auto|
|RGB(선형)|RGB(linear)|
|RGB(가시영역)|RGB(perceptual)|

<a id="16-07-02-02-04-s3-01"></a>

### 3-1. 자동(Auto)
`자동(Auto)`은 선택된 레이어 모드에 따라서 역할이 달라집니다.

어떤 경우에는 `RGB(선형)`으로 작동하며, 그렇지 않은 경우에는 `RGB(가시영역)`으로 작동합니다.

<a id="16-07-02-02-04-s3-02"></a>

### 3-2. RGB(선형), RGB(가시영역)
`RGB(선형)`, `RGB(가시영역)` 인코딩에 대한 자세한 내용은 아래 링크를 참고해주세요.

- [16.6.7.3. 이미지 정밀도와 채널 인코딩 선택하기(Choosing the image precision and channel encoding)](./16-06-07-03-choosing_the_image_precision_and_channel_encoding.md)

- [19. 용어집 - 채널 인코딩(Channel encoding)](./19-glossaryx-channel_encoding.md)

<a id="16-07-02-02-04-s4"></a>

## 4. 레이어 모드에 따른 혼합 영역, 합성공간의 값 초기화
레이어 모드를 바꿀 때마다, `혼합 영역(Blend space)`과 `합성공간(Composite space)`은 항상 `자동(Auto)`으로 초기화됩니다.

`자동(Auto)`으로 초기화되어야 내부적으로 각 모드에 적절한 기본값으로 설정할 수 있기 때문입니다.

***

## 관련 정보

[15.2.1.3. 레이어 대화상자 컨텍스트 메뉴(The Layer dialog context menu) - 2. 블렌딩 공간 서브메뉴(Blend Space submenu)](./15-02-01-03-the_layer_dialog_context_menu.md#15-02-01-03-s2)

***

## 다른 페이지로 가기

[➡️ 다음: 16.7.2.2.5. 합성 모드(Composite mode)](./16-07-02-02-05-composite_mode.md)

[⬅️ 이전: 16.7.2.2.3. 레이어 모드(Mode)](./16-07-02-02-03-mode.md)

[⬆️ 위: 16.7.2.2. 새 레이어 대화상자 설명(Description of the "New Layer" Dialog)](./16-07-02-02-00-description_of_the_new_layer_dialog.md)

[⬆️ 위: 16.7.2. 새 레이어(New layer)](./16-07-02-00-new_layer.md)

[⬆️ 위: 16.7. 레이어 메뉴(The "Layer" menu)](./16-07-00-the-layer-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-layer-new.html#gimp-new-layer-dialog)