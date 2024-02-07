# 4.2.10. 이동, 회전 또는 다른 변형 도구로 작업한 효과가 보이지 않는 경우

## 4.2.10.1. 문제
레이어를 움직이거나 변형하려고 했지만, 바뀌지 않았습니다. 경고 메시지가 노출됩니다.

#### [그림 90.4.1.1.a101. 도구 옵션의 이동(Move) 또는 변형(Trnasform) 할 때의 노출되는 경고 메시지](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-01-tool_optionsx-01-move.html#%EA%B7%B8%EB%A6%BC-90411a101-%EB%8F%84%EA%B5%AC-%EC%98%B5%EC%85%98%EC%9D%98-%EC%9D%B4%EB%8F%99move-%EB%98%90%EB%8A%94-%EB%B3%80%ED%98%95trnasform-%ED%95%A0-%EB%95%8C%EC%9D%98-%EB%85%B8%EC%B6%9C%EB%90%98%EB%8A%94-%EA%B2%BD%EA%B3%A0-%EB%A9%94%EC%8B%9C%EC%A7%80)
[<img width="266" alt="그림 4.2.10.1.a1. 도구 옵션의 이동(Move) 또는 변형(Trnasform) 할 때의 노출되는 경고 메시지" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/c0ca0467-1da6-4edc-808d-198b41211fe5">](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-01-tool_optionsx-01-move.html#%EA%B7%B8%EB%A6%BC-90411a101-%EB%8F%84%EA%B5%AC-%EC%98%B5%EC%85%98%EC%9D%98-%EC%9D%B4%EB%8F%99move-%EB%98%90%EB%8A%94-%EB%B3%80%ED%98%95trnasform-%ED%95%A0-%EB%95%8C%EC%9D%98-%EB%85%B8%EC%B6%9C%EB%90%98%EB%8A%94-%EA%B2%BD%EA%B3%A0-%EB%A9%94%EC%8B%9C%EC%A7%80)

#### [영상 90.4.1.1.a102. 도구 옵션의 이동(Move) 할 때의 상태표시 영역의 메시지 노출](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-01-tool_optionsx-01-move.html#%EC%98%81%EC%83%81-90411a102-%EB%8F%84%EA%B5%AC-%EC%98%B5%EC%85%98%EC%9D%98-%EC%9D%B4%EB%8F%99move-%ED%95%A0-%EB%95%8C%EC%9D%98-%EC%83%81%ED%83%9C%ED%91%9C%EC%8B%9C-%EC%98%81%EC%97%AD%EC%9D%98-%EB%A9%94%EC%8B%9C%EC%A7%80-%EB%85%B8%EC%B6%9C)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/007f9e27-8fe1-4d38-9ea9-8ef9bd141bf6"></video>

레이어를 이동(Move)하려고 할 때, 위의 도구 옵션이 선택(Selection), 경로(Path)이면 경고 메시지를 노출합니다.(TODO 경고 메시지의 오타가 있어 제보 필요)

#### [영상 90.4.1.1.a103. 도구 옵션의 변형(Trnasform) 할 때의 상태표시 영역의 메시지 노출](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-01-tool_optionsx-01-move.html#%EC%98%81%EC%83%81-90411a103-%EB%8F%84%EA%B5%AC-%EC%98%B5%EC%85%98%EC%9D%98-%EB%B3%80%ED%98%95trnasform-%ED%95%A0-%EB%95%8C%EC%9D%98-%EC%83%81%ED%83%9C%ED%91%9C%EC%8B%9C-%EC%98%81%EC%97%AD%EC%9D%98-%EB%A9%94%EC%8B%9C%EC%A7%80-%EB%85%B8%EC%B6%9C)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/7540938e-e81f-49c9-ae78-5c5633cd9ccc"></video>

레이어를 변형(Transform)하려고 할 때, 위의 도구 옵션이 선택(Selection), 경로(Path)이면 경고 메시지를 노출합니다.

## 4.2.10.2. 해결방법
[이미지 창(Image window)의 상태표시 영역](./03-02-02-image-window.md)의 메시지를 확인해보세요. 그 다음에 [도구 옵션](./14-01-04-tool-options.md)의 **선택(Selection)** 또는 **경로(Path)** 가 선택되어 있지 않은지 확인해주세요. 이 버튼들은 [변형 도구의 도구 옵션](./14-04-00-transform-tools.md)의 위쪽에 있습니다.

#### [그림 90.4.1.1.a111. 레이어를 이동(Move)시킬 수 없는 도구 옵션의 이동(Move)의 선택(Selection), 경로(Path) 버튼](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-01-tool_optionsx-01-move.html#%EA%B7%B8%EB%A6%BC-90411a111-%EB%A0%88%EC%9D%B4%EC%96%B4%EB%A5%BC-%EC%9D%B4%EB%8F%99move%EC%8B%9C%ED%82%AC-%EC%88%98-%EC%97%86%EB%8A%94-%EB%8F%84%EA%B5%AC-%EC%98%B5%EC%85%98%EC%9D%98-%EC%9D%B4%EB%8F%99move%EC%9D%98-%EC%84%A0%ED%83%9Dselection-%EA%B2%BD%EB%A1%9Cpath-%EB%B2%84%ED%8A%BC)
[<img width="480" alt="그림 4.2.10.2.a3. 도구 옵션의 이동(Move)의 버튼들" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/c8da0432-a439-4bbf-9413-6033a3fbee2a">](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-01-tool_optionsx-01-move.html#%EA%B7%B8%EB%A6%BC-90411a111-%EB%A0%88%EC%9D%B4%EC%96%B4%EB%A5%BC-%EC%9D%B4%EB%8F%99move%EC%8B%9C%ED%82%AC-%EC%88%98-%EC%97%86%EB%8A%94-%EB%8F%84%EA%B5%AC-%EC%98%B5%EC%85%98%EC%9D%98-%EC%9D%B4%EB%8F%99move%EC%9D%98-%EC%84%A0%ED%83%9Dselection-%EA%B2%BD%EB%A1%9Cpath-%EB%B2%84%ED%8A%BC)

레이어를 이동(Move)하려고 할 때, 위의 도구 옵션 설정이면 레이어는 이동하지 않습니다. 도구 옵션 설정에서 레이어(Layer)를 선택해주세요.

#### [그림 90.4.1.1.a112. 레이어를 이동(Move)시킬 수 있는 도구 옵션의 이동(Move)의 레이어(Layer) 버튼](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-01-tool_optionsx-01-move.html#%EA%B7%B8%EB%A6%BC-90411a112-%EB%A0%88%EC%9D%B4%EC%96%B4%EB%A5%BC-%EC%9D%B4%EB%8F%99move%EC%8B%9C%ED%82%AC-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%8F%84%EA%B5%AC-%EC%98%B5%EC%85%98%EC%9D%98-%EC%9D%B4%EB%8F%99move%EC%9D%98-%EB%A0%88%EC%9D%B4%EC%96%B4layer-%EB%B2%84%ED%8A%BC)
[<img width="480" alt="그림 4.2.10.2.a2. 레이어를 이동(Move)시킬 수 있는 도구 옵션의 이동(Move)의 레이어(Layer) 버튼" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/02f6d531-bff5-4724-b3f2-3d4da76ab636">](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-01-tool_optionsx-01-move.html#%EA%B7%B8%EB%A6%BC-90411a112-%EB%A0%88%EC%9D%B4%EC%96%B4%EB%A5%BC-%EC%9D%B4%EB%8F%99move%EC%8B%9C%ED%82%AC-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%8F%84%EA%B5%AC-%EC%98%B5%EC%85%98%EC%9D%98-%EC%9D%B4%EB%8F%99move%EC%9D%98-%EB%A0%88%EC%9D%B4%EC%96%B4layer-%EB%B2%84%ED%8A%BC)

도구 옵션 설정에서 레이어(Layer)를 선택하면 레이어를 이동시킬 수 있습니다.

#### [그림 90.4.1.1.a113. 레이어를 변형(Transform)시킬 수 없는 도구 옵션의 변형](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-01-tool_optionsx-01-move.html#%EA%B7%B8%EB%A6%BC-90411a113-%EB%A0%88%EC%9D%B4%EC%96%B4%EB%A5%BC-%EB%B3%80%ED%98%95transform%EC%8B%9C%ED%82%AC-%EC%88%98-%EC%97%86%EB%8A%94-%EB%8F%84%EA%B5%AC-%EC%98%B5%EC%85%98%EC%9D%98-%EB%B3%80%ED%98%95trnasform%EC%9D%98-%EB%B2%84%ED%8A%BC%EB%93%A4)(Trnasform)의 버튼들
[<img width="480" alt="그림 4.2.10.2.a4. 도구 옵션의 변형(Trnasform)의 버튼들" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/ceed67ee-3638-4b51-b26f-924406d53ed8">](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-01-tool_optionsx-01-move.html#%EA%B7%B8%EB%A6%BC-90411a113-%EB%A0%88%EC%9D%B4%EC%96%B4%EB%A5%BC-%EB%B3%80%ED%98%95transform%EC%8B%9C%ED%82%AC-%EC%88%98-%EC%97%86%EB%8A%94-%EB%8F%84%EA%B5%AC-%EC%98%B5%EC%85%98%EC%9D%98-%EB%B3%80%ED%98%95trnasform%EC%9D%98-%EB%B2%84%ED%8A%BC%EB%93%A4)

레이어를 변형(Transform)하려고 할 때, 위의 도구 옵션 설정이면 레이어는 변형하지 않습니다. 도구 옵션 설정에서 레이어(Layer)를 선택해주세요.

#### [그림 90.4.1.1.a114. 레이어를 변형(Transform)시킬 수 있는 도구 옵션의 이동(Move)의 레이어(Layer) 버튼](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-01-tool_optionsx-01-move.html#%EA%B7%B8%EB%A6%BC-90411a114-%EB%A0%88%EC%9D%B4%EC%96%B4%EB%A5%BC-%EB%B3%80%ED%98%95transform%EC%8B%9C%ED%82%AC-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%8F%84%EA%B5%AC-%EC%98%B5%EC%85%98%EC%9D%98-%EC%9D%B4%EB%8F%99move%EC%9D%98-%EB%A0%88%EC%9D%B4%EC%96%B4layer-%EB%B2%84%ED%8A%BC)
[<img width="480" alt="그림 4.2.10.2.a4. 레이어를 변형(Transform)시킬 수 있는 도구 옵션의 이동(Move)의 레이어(Layer) 버튼" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/ffbf9207-7664-4158-a993-338cc33e9075">](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-01-tool_optionsx-01-move.html#%EA%B7%B8%EB%A6%BC-90411a114-%EB%A0%88%EC%9D%B4%EC%96%B4%EB%A5%BC-%EB%B3%80%ED%98%95transform%EC%8B%9C%ED%82%AC-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%8F%84%EA%B5%AC-%EC%98%B5%EC%85%98%EC%9D%98-%EC%9D%B4%EB%8F%99move%EC%9D%98-%EB%A0%88%EC%9D%B4%EC%96%B4layer-%EB%B2%84%ED%8A%BC)

도구 옵션 설정에서 레이어(Layer)를 선택하면 레이어를 변형시킬 수 있습니다.

***

## 다른 페이지로 가기

[➡️ 다음: 4.2.11. 지우개와 붓이 작동하지 않습니다](./04-02-11-eraser-and-brushes-no-longer-work.md)

[⬅️ 이전: 4.2.9. 붓, 지우개 또는 다른 도구로 작업한 효과가 보이지 않는 경우](./04-02-09-no-visible-effect-when-trying-to-use-a-brush-eraser-or-other-tool.md)

[⬆️ 위: 4.2. GIMP(김프)가 멈추었을 때의 원인](./04-02-00-common-causes-of-gimp-non-responsiveness.md)

[⬆️ 위: 4. 문제 해결하기](./04-00-what-to-do-if-you-are-stuck.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-stuck-tool-transform.html)
