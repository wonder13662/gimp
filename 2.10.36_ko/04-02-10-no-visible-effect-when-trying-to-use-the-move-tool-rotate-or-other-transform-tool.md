# 4.2.10. 이동, 회전 또는 다른 변형 도구로 작업한 효과가 보이지 않는 경우

## 4.2.10.1. 문제
레이어를 움직이거나 변형하려고 했지만, 바뀌지 않았습니다. 경고 메시지가 노출됩니다.

<a id="90-04-01-01-a101"></a>

#### [그림 90.4.1.1.a101. 도구 옵션의 이동(Move) 또는 변형(Trnasform) 할 때의 노출되는 경고 메시지](./90-04-0001-001-move.md#90-04-01-01-a101)
![90-04-01-01-a101](https://github.com/wonder13662/gimp/assets/15767104/c0ca0467-1da6-4edc-808d-198b41211fe5)

<a id="90-04-01-01-a102"></a>

#### [영상 90.4.1.1.a102. 도구 옵션의 이동(Move) 할 때의 상태표시 영역의 메시지 노출](./90-04-0001-001-move.md#90-04-01-01-a102)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/007f9e27-8fe1-4d38-9ea9-8ef9bd141bf6"></video>

레이어를 이동(Move)하려고 할 때, 위의 도구 옵션이 선택(Selection), 경로(Path)이면 경고 메시지를 노출합니다.(TODO 경고 메시지의 오타가 있어 제보 필요)

<a id="90-04-01-01-a103"></a>

#### [영상 90.4.1.1.a103. 도구 옵션의 변형(Trnasform) 할 때의 상태표시 영역의 메시지 노출](./90-04-0001-001-move.md#90-04-01-01-a103)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/7540938e-e81f-49c9-ae78-5c5633cd9ccc"></video>

레이어를 변형(Transform)하려고 할 때, 위의 도구 옵션이 선택(Selection), 경로(Path)이면 경고 메시지를 노출합니다.

## 4.2.10.2. 해결방법
[이미지 창(Image window)의 상태표시 영역](./03-02-04-00-image_window.md)의 메시지를 확인해보세요. 그 다음에 [도구 옵션](./14-01-04-00-tool-options.md)의 **선택(Selection)** 또는 **경로(Path)** 가 선택되어 있지 않은지 확인해주세요. 이 버튼들은 [변형 도구의 도구 옵션](./14-04-00-transform-tools.md)의 위쪽에 있습니다.

<a id="90-04-01-01-a111"></a>

#### [그림 90.4.1.1.a111. 레이어를 이동(Move)시킬 수 없는 도구 옵션의 이동(Move)의 선택(Selection), 경로(Path) 버튼](./90-04-0001-001-move.md#90-04-01-01-a111)
![90-04-01-01-a111](https://github.com/wonder13662/gimp/assets/15767104/c8da0432-a439-4bbf-9413-6033a3fbee2a)

레이어를 이동(Move)하려고 할 때, 위의 도구 옵션 설정이면 레이어는 이동하지 않습니다. 도구 옵션 설정에서 레이어(Layer)를 선택해주세요.

<a id="90-04-01-01-a112"></a>

#### [그림 90.4.1.1.a112. 레이어를 이동(Move)시킬 수 있는 도구 옵션의 이동(Move)의 레이어(Layer) 버튼](./90-04-0001-001-move.md#90-04-01-01-a112)
![90-04-01-01-a112](https://github.com/wonder13662/gimp/assets/15767104/02f6d531-bff5-4724-b3f2-3d4da76ab636)

도구 옵션 설정에서 레이어(Layer)를 선택하면 레이어를 이동시킬 수 있습니다.

<a id="90-04-01-01-a113"></a>

#### [그림 90.4.1.1.a113. 레이어를 변형(Transform)시킬 수 없는 도구 옵션의 변형(Trnasform)의 버튼들](./90-04-0001-001-move.md#90-04-01-01-a113)
![90-04-01-01-a113](https://github.com/wonder13662/gimp/assets/15767104/ceed67ee-3638-4b51-b26f-924406d53ed8)

레이어를 변형(Transform)하려고 할 때, 위의 도구 옵션 설정이면 레이어는 변형하지 않습니다. 도구 옵션 설정에서 레이어(Layer)를 선택해주세요.

<a id="90-04-01-01-a114"></a>

#### [그림 90.4.1.1.a114. 레이어를 변형(Transform)시킬 수 있는 도구 옵션의 이동(Move)의 레이어(Layer) 버튼](./90-04-0001-001-move.md#90-04-01-01-a114)
![90-04-01-01-a114](https://github.com/wonder13662/gimp/assets/15767104/ffbf9207-7664-4158-a993-338cc33e9075)

도구 옵션 설정에서 레이어(Layer)를 선택하면 레이어를 변형시킬 수 있습니다.

***

## 다른 페이지로 가기

[➡️ 다음: 4.2.11. 지우개와 붓이 작동하지 않습니다](./04-02-11-eraser-and-brushes-no-longer-work.md)

[⬅️ 이전: 4.2.9. 붓, 지우개 또는 다른 도구로 작업한 효과가 보이지 않는 경우](./04-02-09-no-visible-effect-when-trying-to-use-a-brush-eraser-or-other-tool.md)

[⬆️ 위: 4.2. GIMP(김프)가 멈추었을 때의 원인](./04-02-00-common-causes-of-gimp-non-responsiveness.md)

[⬆️ 위: 4. 문제 해결하기](./04-00-what-to-do-if-you-are-stuck.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-stuck-tool-transform.html)
