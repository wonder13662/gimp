# 7.3.1. 퀵마스크 개요
GIMP(김프)에서의 선택을 보여주는 방법은 "행진하는 개미(marching ants)"라고 부르는 선택의 외곽선입니다. 

#### 영상 90.4.1.3.a131. 선택 외곽선 - 행진하는 개미(Marching ants)
![marching_ants](https://github.com/wonder13662/gimp/assets/15767104/ba34706e-68e9-4b1f-9c29-1f649109a9b3)

하지만, 선택의 외곽선말고도 선택을 보여주는 방법이 더 있습니다. GIMP(김프) 선택은 실제로는 이미지 전체를 덮는 그레이스케일 채널입니다. 이 채널은 0(선택안됨)부터 255(선택됨)까지 픽셀값을 가지고 있습니다. 선택의 외곽선은 절반만 선택(127)된 픽셀을 따라 그려집니다. 그러므로 선택의 외곽선이 보여주는 경계의 안쪽과 바깥쪽은 0부터 255까지 표현되는 선택의 연속성의 일부분만 보여줄 수 밖에 없습니다.

## 퀵마스크 모드로 바꾸기
퀵마스크는 GIMP(김프)에서 선택 영역의 구조를 상세히 보여주는 방식입니다. 퀵마스크를 사용하면 선택을 더 강력하게 제어할 수 있습니다. 이미지 창의 왼쪽 아래편 외곽의 작은 버튼(아래 그림의 5번 영역)을 클릭해서 퀵마스크를 켜거나 끌 수 있습니다. 이 버튼으로 퀵마스크 모드와 선택 외곽선(행진하는 개미) 모드로 전환할 수 있습니다.

#### [그림 90.5.5.a102. (5)퀵마스크 토글 버튼의 위치 (단일창)](https://wonder13662.github.io/gimp/2.10.36_ko/90-05-05-quickmast_toggle.html#%EA%B7%B8%EB%A6%BC-9055a102-5%ED%80%B5%EB%A7%88%EC%8A%A4%ED%81%AC-%ED%86%A0%EA%B8%80-%EB%B2%84%ED%8A%BC%EC%9D%98-%EC%9C%84%EC%B9%98-%EB%8B%A8%EC%9D%BC%EC%B0%BD)
[![그림 90.5.5.a102. (5)퀵마스크 토글 버튼의 위치 (단일창)](https://github.com/wonder13662/gimp/assets/15767104/64879a12-f3e5-47ad-94da-f47653824bc6)](https://wonder13662.github.io/gimp/2.10.36_ko/90-05-05-quickmast_toggle.html#%EA%B7%B8%EB%A6%BC-9055a102-5%ED%80%B5%EB%A7%88%EC%8A%A4%ED%81%AC-%ED%86%A0%EA%B8%80-%EB%B2%84%ED%8A%BC%EC%9D%98-%EC%9C%84%EC%B9%98-%EB%8B%A8%EC%9D%BC%EC%B0%BD)

#### [영상 90.5.5.a111. 퀵 마스크 토글하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-05-05-quickmast_toggle.html#%EC%98%81%EC%83%81-9055a111-%ED%80%B5-%EB%A7%88%EC%8A%A4%ED%81%AC-%ED%86%A0%EA%B8%80%ED%95%98%EA%B8%B0)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/74f2db78-a06e-48d8-bcc7-7c99e3d57180"></video>

[이미지 메뉴 바(Image Menu Bar)](./03-02-02-image-windowx-02-image-menu.md)의 `선택` → `퀵마스크 전환` 또는 단축키 Shift(⇧) + Q를 눌러 퀵마스크 모드와 선택 외곽선(행진하는 개미) 모드로 전환할 수 있습니다.

#### 그림 90.1.3.16.a101. `선택` → `퀵마스크 전환`
![90-01-03-select(1080)-focus-toggle_quick_mask](https://github.com/wonder13662/gimp/assets/15767104/33b44419-8d09-45e2-83ea-130e8c25397f)

#### 영상 90.1.3.16.a102. `선택` → `퀵마스크 전환`
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/0082b9cc-700f-4ecb-8e95-7e8d351c17ec"></video>

#### 영상 90.1.3.16.a103. 단축키 Shift(⇧) + Q로 퀵마스크 전환
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/f6f70ab6-dd6e-418d-b400-b77efe7dbf9e"></video>

## 퀵마스크의 반투명 덮개
퀵마스크 모드에서는 선택 영역이 반투명 덮개가 이미지 위에 덮인 것처럼 보여집니다. 이 덮개의 각 픽셀의 투명도가 각 픽셀의 선택된 정도(0부터 255까지)를 나타냅니다. 기본적으로 마스크(선택되지 않음)는 빨간색으로 보입니다. 하지만 이 색깔은 필요하다면 바꿀 수 있습니다. 픽셀이 선택된 정도가 낮아지면, 마스크는 더 불투명해집니다. 완전히 선택된 픽셀은 완전한 투명입니다. 아래 이미지에서 퀵마스크에서 표시된 부드러운 경계(픽셀의 선택된 정도가 다양함)와 실제로 부드러운 경계를 적용한 이미지 경계를 확인할 수 있습니다.

#### 그림 90.1.3.16.a111. 퀵마스크 덮개 - 부드러운 경계 사용
![90-01-03-selectx-16-toggle_quick_mask(mac)(ko)-quickmask_on(25%)](https://github.com/wonder13662/gimp/assets/15767104/aa409b0b-6d5d-4b0d-ba94-3c10f26183ec)

#### 그림 90.1.3.16.a112. 퀵마스크 덮개에 표시된 선택 영역만의 이미지(부드러운 경계)
![90-01-03-selectx-16-toggle_quick_mask(mac)(ko)-mask_applied(25%)](https://github.com/wonder13662/gimp/assets/15767104/adbd41f3-27f5-4222-a04c-d6baf0eb2106)

## 퀵마스크 수정하기
퀵마스크 모드에서의 이미지 수정은 이미지 자체가 아닌 선택 영역 채널에 영향을 미칩니다. 하얀색으로 칠하면 픽셀을 선택하게 되며, 검은색으로 칠하면 픽셀을 선택에서 제외합니다. 어떤 칠하기 도구라도 이렇게 사용할 수 있습니다. 심지어 "영역 채우기(Bucket fill)"와 그라디언트 도구도 같은 방식으로 사용할 수 있습니다. GIMP(김프) 고급 사용자들은 "선택 영역 칠하기"가 가장 쉽고 효과적으로 이미지의 선택영역을 제어하는 방법이라는 것을 알고 있습니다.

#### 영상 90.1.3.16.a113. 퀵마스크를 칠하기 도구로 수정하기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/44c82438-bb6a-426d-b9fd-453fcfb46906"></video>

## 퀵 마스크를 새로운 채널로 저장하기

> ℹ️ 작은 정보
>
> To save a QuickMask selection to a new channel; Make sure that there is a selection and that QuickMask mode is not active in the image window. Use `Select` → `Save to Channel` to create a new channel in the channel dialog called "SelectionMask copy" (repeating this command creates "..copy#1", "..copy#2" and so on...).

(TODO 퀵 마스크를 새로운 채널로 저장하는 예시 영상 필요)

## 퀵 마스크 잘라내고 붙이기

> ℹ️ 작은 정보
>
> In QuickMask mode, Cut and Paste act on the selection rather than the image. You can sometimes make use of this as the most convenient way of transferring a selection from one image to another.

(TODO 퀵 마스크를 복사해서 다른 이미지로 붙여넣는 얘시 영상 필요)

## 추가 정보: 선택영역 마스크
You can learn more on [Selection masks](./15-02-02-channel-dialogx-03-selection_masks.md) in the section dedicated to the channel dialog.

***

## 다른 페이지로 가기
[➡️ 다음: 7.3.2. 퀵마스크 속성](./07-03-02-properties.md)

[⬅️ 이전: 7.3. 퀵마스크](./07-03-00-the-quickmask.md)

[⬆️ 위: 7.3. 퀵마스크](./07-03-00-the-quickmask.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-image-window-quick-mask-button.html#gimp-image-window-quick-mask-overview)
