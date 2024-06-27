# 15.2.2. 채널 대화상자(Channel dialog)

<a id="90-04-04-a1"></a>

#### [그림 90.4.4.a1. 채널 대화상자](./90-04-04-channels.md#90-04-04-a1)
<img width="974" height="421" alt="90-04-04-a1" src="https://github.com/wonder13662/gimp/assets/15767104/2e6f5e2a-39aa-40eb-9698-6825faeeb692" />

`채널 대화상자(Channel dialog)`는 채널을 제어합니다. 채널에는 두가지 용도가 있습니다.

<a id="15-02-02-s1"></a>

## 1. 색 채널(Color channel)

<a id="90-04-04-a11-01"></a>

#### [그림 90.4.4.a11.1. `채널 대화상자` → `색 채널` (Windows) (우리말)](./90-04-04-channels.md#90-04-04-a11-01)
<img width="262" height="290" alt="90-04-04-a11-01" src="https://github.com/wonder13662/gimp/assets/15767104/2952ed6f-0587-4db7-858f-b33f7fd0ed9d" />

첫번째 채널은 `색 채널(Color channel)`이며, 채널 대화상자의 위쪽 영역입니다.

색 채널은 특정 레이어가 아닌 이미지 전체에 적용됩니다.

<a id="15-02-02-s1-01"></a>

### 1-1. RGB 이미지(RGB Image)

기본적으로 자연색의 범위를 표현하기 위해서는 세 개의 원색(Primary Color)이 필요합니다.

다른 그래픽 소프트웨어들처럼, GIMP(김프)는 원색으로 빨강, 초록, 파랑을 사용합니다.

원색 채널들은 이미지의 각 픽셀의 빨간색, 초록색, 파란색 값을 나타냅니다.

원색 채널 이름 옆의 미리보기는 각 채널을 그레이스케일 이미지로 나타낸 것입니다.

흰색은 원색의 100%를 나타내며, 검은색은 0%를 나타냅니다.

<a id="15-02-02-s1-02"></a>

### 1-2. 흑백 이미지(Grayscale Image)

<a id="90-04-04-a11-01-01"></a>

#### [그림 90.4.4.a11.1.1. `채널 대화상자` → `색 채널`: 그레이스케일 이미지 (Windows) (우리말)](./90-04-04-channels.md#90-04-04-a11-01-01)
<img width="262" height="224" alt="90-04-04-a11-01-01" src="https://github.com/wonder13662/gimp/assets/15767104/0572db8a-e913-47b3-a76b-7994981a12c1" />

그레이스케일 이미지일 경우, 원색 채널은 회색(Gray) 하나입니다.

<a id="15-02-02-s1-03"></a>

### 1-3. 인덱스 모드 이미지(Indexed Image)

<a id="90-04-04-a11-01-02"></a>

#### [그림 90.4.4.a11.1.2. `채널 대화상자` → `색 채널`: 인덱스 모드 이미지 (Windows) (우리말)](./90-04-04-channels.md#90-04-04-a11-01-02)
<img width="251" height="228" alt="90-04-04-a11-01-02" src="https://github.com/wonder13662/gimp/assets/15767104/590ea2a2-16be-4e31-9415-e4b4b2b0cd08" />

고정된 색상 갯수의 인덱스 모드 이미지일 경우, 원색 채널은 인덱스(Indexed) 하나입니다.

<a id="15-02-02-s2-03"></a>

### 1-3. 알파 채널(Alpha Channel)

<a id="90-04-04-a11-01-03"></a>

#### [그림 90.4.4.a11.1.3. `채널 대화상자` → `색 채널`: 알파 채널 (Windows) (우리말)](./90-04-04-channels.md#90-04-04-a11-01-03)
<img width="262" height="290" alt="90-04-04-a11-01-03" src="https://github.com/wonder13662/gimp/assets/15767104/6068f469-4ef1-431d-9c48-28a571729b60" />

알파 채널은 선택적으로 사용할 수 있습니다. 알파 채널은 이미지의 각 픽셀의 투명도 값을 보여줍니다.

알파 채널에 대해서는 [19.용어집 - 알파 채널(Alpha Channel)](./19-glossaryx-alpha_channel.md)을 참고해주세요.

알파 채널의 미리보기는 그레이스케일 이미지로 투명도를 보여줍니다. 

흰색은 불투명하며, 실제로 보여지는 픽셀입니다.

검은색은 투명하며, 실제로 보여지지 않는 픽셀입니다.

투명도가 없는 이미지를 만들었다면, 이미지의 알파 채널도 없습니다.

하지만 [레이어 대화상자의 컨텍스트 메뉴 - 알파 채널 추가하기](./15-02-01-03-the_layer_dialog_context_menu.md#15-02-01-03-s24)를 통해 알파 채널을 이미지에 추가할 수 있습니다.

또한, 이미지에 1개 이상의 레이어를 가지고 있다면, GIMP(김프)는 자동으로 알파 채널을 추가합니다.

[관련 정보: 8.1.1.2. 알파 채널(Alpha Channel)](./08-01-01-02-alpha_channel.md)

<a id="15-02-02-s1-02"></a>

## 2. 선택 마스크(Selection Mask)

<a id="90-04-04-a11-02"></a>

#### [그림 90.4.4.a11.2. `채널 대화상자` → `선택 마스크` (Windows) (우리말)](./90-04-04-channels.md#90-04-04-a11-02)
<img width="262" height="290" alt="90-04-04-a11-02" src="https://github.com/wonder13662/gimp/assets/15767104/427771fd-fa51-452a-8225-ecf6a7e44f8a" />

두번째 채널은 [선택 마스크](./15-02-02-03-00-selection_masks.md)이며, 채널 대화상자의 아래쪽 영역입니다.

## 3. 이미지의 채널들

<a id="90-04-04-a111"></a>

#### [그림 90.4.4.a111. 이미지의 색상채널](./90-04-04-channels.md#90-04-04-a111)
<img width="700" height="186" alt="90-04-04-a111" src="https://github.com/wonder13662/gimp/assets/15767104/c389ac5e-ee72-45c9-8702-09f6108e6f67" />

위 예시 이미지의 가장 오른쪽의 "모든 채널"은 세 개의 색 채널(빨강, 초록, 파랑)으로 나눠집니다. 그리고 알파 채널은 투명한 부분을 나타냅니다.

가장 오른쪽의 "모든 채널"에서 투명한 부분("알파 채널"의 검은색 부분)은 회색 격자무늬(Checkerboard)로 표시됩니다.

실제 이미지("모든 채널")에서 하얀색으로 보이는 픽셀은 색 채널의 미리보기에서 하얀색으로 나타납니다.

실제 이미지("모든 채널")에서 검은색으로 보이는 픽셀은 색 채널의 미리보기에서 검은색으로 나타납니다.

빨간색 글씨("RED")는 빨강 채널에서 보이지만, 초록, 파랑 채널에서는 보이지 않습니다.

마찬가지로 초록("GREEN"), 파랑("BLUE") 글씨도 오직 자신의 색 채널에서만 볼 수 있고, 다른 색 채널에서 보이지 않습니다. 

***

## 하위 페이지

[15.2.2.1. 대화상자 활성화하기(Activate the dialog)](./15-02-02-01-activate_the_dialog.md)

[15.2.2.2. 채널 대화상자 사용하기(Using the Channel Dialog)](./15-02-02-02-00-using_the_channel_dialog.md)

[15.2.2.2.1. 개요(Overview)](./15-02-02-02-01-overview.md)

[15.2.2.2.2. 채널 잠그기 속성(Channel Lock Attributes)](./15-02-02-02-02-channel_lock_attributes.md)

[15.2.2.2.3. 채널 속성(Channel Attributes)](./15-02-02-02-03-channel_attributes.md)

[15.2.2.2.4. 채널 관리하기(Managing Channels)](./15-02-02-02-04-managing_channels.md)

[15.2.2.2.5. 채널 컨택스트 메뉴(Channel Context Menu)](./15-02-02-02-05-channles_context_menu.md)

[15.2.2.3. 선택 마스크(Selection Masks)](./15-02-02-03-00-selection_masks.md)

[15.2.2.3.1. 선택 마스크 사용하기(Using Selection Masks)](./15-02-02-03-01-using_selection_masks.md)

[15.2.2.4. 퀵 마스크(Quick Mask)](./15-02-02-04-00-quick_mask.md)

[15.2.2.4.1. 대화상자 활성화하기(Activate the dialog)](./15-02-02-04-01-activate_the_dialog.md)

[15.2.2.4.2. 퀵 마스크 만들기(Creating a quick mask)](./15-02-02-04-02-creating_a_quick_mask.md)

[15.2.2.4.3. 그라디언트와 함께 퀵마스크 사용하기(Using quick mask with a gradient)](./15-02-02-04-03-using_quick_mask_with_a_gradient.md)

[15.2.2.4.4. 사용법(Usage)](./15-02-02-04-04-usage.md)

***

## 다른 페이지로 가기

[➡️ 다음: 15.2.2.1. 대화상자 활성화하기(Activate the dialog)](./15-02-02-01-activate_the_dialog.md)

[⬅️ 이전: 15.2.1.4.2. 레이어 마스크 예제(Layer Mask Example)](./15-02-01-04-02-layer_mask_example.md)

[⬆️ 위: 15.2. 이미지 구조 관련 대화상자(Image structure related dialogs)](./15-02-00-image-structure-related-dialogs.md)

[⬆️ 위: 15. 대화상자(Dialogs)](./15-00-dialogs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-channel-dialog.html)


