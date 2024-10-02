# 16.7.50.3. 경계선의 움직임(Edge Behavior)

<a id="90-04-195-a131"></a>

#### [그림 90.4.195.a131. `오프셋` 대화상자 → `경계선의 움직임` (Windows) (우리말)](./90-04-0195-offset.md#90-04-195-a131)
<img width="372" height="482" alt="90-04-195-a131" src="https://github.com/user-attachments/assets/6a662ace-2b07-4c51-ade5-a2bb9a1a6436" />

`경계선의 움직임(Edge Behavior)`에서 [레이어](./19-glossaryx-layer.md)가 이동해서 남은 빈공간이 비었을 때 어떻게 처리할지 결정합니다.

<a id="16-07-50-03-s1"></a>

## 1. 감싸기(Wrap around)
남은 빈공간이 [레이어](./19-glossaryx-layer.md)가 [캔버스](./19-glossaryx-canvas.md)의 바깥으로 나간 부분으로 채워집니다.

그러므로 잃어버리는 이미지 정보가 없게 됩니다.

<a id="90-04-195-a131-01"></a>

#### 영상 90.4.195.a131.1. `오프셋` 대화상자 → `경계선의 움직임` → `감싸기` (Windows) (우리말)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/92f901cf-08f8-45a0-96e7-420f421e0e3a"></video>

<a id="16-07-50-03-s2"></a>

## 2. 배경색으로 채우기(Fill the background color)
남은 빈공간이 [배경색](./19-glossaryx-background_color.md)으로 채워집니다.

<a id="90-04-195-a131-02"></a>

#### [영상 90.4.195.a131.2. `오프셋` 대화상자 → `경계선의 움직임` → `배경색으로 채우기` (Windows) (우리말)](./90-04-0195-offset.md#90-04-195-a131-02)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/8ff6b0ef-6b91-4271-8b9b-e72ce8ffdd52"></video>

<a id="16-07-50-03-s3"></a>

## 3. 투명 만들기(Make transparent)
남은 빈공간이 투명이 됩니다.

[레이어](./19-glossaryx-layer.md)가 [알파 채널](./19-glossaryx-alpha_channel.md)을 가지고 있지 않다면, `투명 만들기(Make transparent)` 옵션은 비활성 상태가 됩니다.

<a id="90-04-195-a131-03"></a>

#### [영상 90.4.195.a131.3. `오프셋` 대화상자 → `경계선의 움직임` → `투명 만들기` (Windows) (우리말)](./90-04-0195-offset.md#90-04-195-a131-03)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/bd8dc277-6789-4f42-8998-a4ff647d0f70"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 16.7.50.4. 입력 타입(Input Type)](./16-07-50-02-04-input_type.md)

[⬅️ 이전: 16.7.50.2.2. 오프셋(Offset)](./16-07-50-02-02-offset.md)

[⬆️ 위: 16.7.50.2. 오프셋 옵션(Offset Options)](./16-07-50-02-00-offset_options.md)

[⬆️ 위: 16.7.50. 오프셋(Offset)](./16-07-50-00-offset.md)

[⬆️ 위: 16.7. 레이어 메뉴(The "Layer" menu)](./16-07-00-the-layer-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-layer-offset.html#idm30140)