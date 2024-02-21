# 7.3.1. 퀵마스크 개요
GIMP(김프)에서의 선택을 보여주는 방법은 "행진하는 개미(marching ants)"라고 부르는 선택의 외곽선입니다. 

#### 영상 90.4.1.3.a131. 선택 외곽선 - 행진하는 개미(Marching ants)
![marching_ants](https://github.com/wonder13662/gimp/assets/15767104/ba34706e-68e9-4b1f-9c29-1f649109a9b3)

하지만, 선택의 외곽선말고도 선택을 보여주는 방법이 더 있습니다. GIMP(김프) 선택은 실제로는 이미지 전체를 덮는 그레이스케일 채널입니다. 이 채널은 0(선택안됨)부터 255(선택됨)까지 픽셀값을 가지고 있습니다. 선택의 외곽선은 절반만 선택(127)된 픽셀을 따라 그려집니다. 그러므로 선택의 외곽선이 보여주는 경계의 안쪽과 바깥쪽은 0부터 255까지 표현되는 선택의 연속성의 일부분만 보여줄 수 밖에 없습니다.

## 퀵마스크 모드로 바꾸기

The QuickMask is GIMP's way of showing the full structure of the selection. QuickMask also provides the ability to interact with selection in new, and substantially more powerful, ways. Click the small outlined button at the lower left of the image window to toggle QuickMask on and off. The button switches between QuickMask mode, and marching ants mode.

(TODO 퀵마스크 위치 이미지 넣기)

(TODO 퀵마스크 토글 영상 넣기)

You can also use `Select` → `Toggle QuickMask`, or Shift + Q, to toggle between QuickMask and marching ants mode.

(TODO 이미지 메뉴 바에서 `Select` → `Toggle QuickMask`의 이미지 넣기)

(TODO 이미지 메뉴 바에서 `Select` → `Toggle QuickMask`로 퀵마스크 토글 영상 넣기)

(TODO 단축키 Shift + Q로 퀵마스크 토글 영상 넣기)

## 퀵마스크의 반투명 덮개
In QuickMask mode, the selection is shown as a translucent screen overlying the image, whose transparency at each pixel indicates the degree to which that pixel is selected. By default the mask is shown in red, but you change this if another mask color is more convenient. The less a pixel is selected, the more it is obscured by the mask. Fully selected pixels are shown completely clear.

(TODO 선택의 정도의 변화가 퀵마스크로 나타난 이미지 첨부 필요)

## 퀵마스크 수정하기
In QuickMask mode, many image manipulations act an the selection channel rather than image itself. This includes, in particular, paint tools. Painting with white selects pixels, and painting with black unselect pixels. You can use any of the paint tools, as well as the bucket fill and gradient fill tools, in this way. Advanced users of GIMP learn that "painting the selection" is the easiest and most effective way to delicately manipulate the image.

(TODO 페인팅 도구로 퀵마스크 수정하는 예시 영상 필요)

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
