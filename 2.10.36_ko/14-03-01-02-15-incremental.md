# 14.3.1.2.15. 증분(Incremental)

<a id="90-03-02-23-a128-01"></a>

#### [그림 90.3.2.23.a128.1. `도구 옵션` → `그리기 붓` → `증분`](./90-03-02-23-paintbrush.md#90-03-02-23-a128-01)
![90-03-02-23-a128-01](https://github.com/wonder13662/gimp/assets/15767104/727f813f-d5a7-4c70-8251-80ffe4a313f5)

## 1. `증분(Incremental)`의 정의
`증분(Incremental)` 옵션을 활성화(체크)하면 마우스 포인터의 움직임에 따라 증분(Incremental) 효과를 줍니다.

## 2. 옵션 비활성화
이 옵션이 비활성화(기본값)되면 한번에 그리는 스트로크의 최대값이 [불투명도 슬라이더](./14-03-01-02-02-opacity.md)에서 정한 값이 됩니다. 만약 불투명도가 100 이하이고, 붓을 떼고 다시 그릴 때, 같은 자리를 그린다면, 불투명도가 증가합니다. 한번의 스트로크에 다시 칠하는 것은 아무런 효과가 없습니다.

<a id="90-03-02-23-a128-02"></a>

#### [영상 90.3.2.23.a128.2. `도구 옵션` → `그리기 붓` → `증분`: 끔](./90-03-02-23-paintbrush.md#90-03-02-23-a128-02)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/2202eaaf-e2f6-4776-8780-31e2019f4268"></video>

## 3. 옵션 활성화
이 옵션이 활성화되면 붓은 [불투명도 슬라이더](./14-03-01-02-02-opacity.md)의 값과 별개로 최대 불투명도로 칠하게 됩니다.

<a id="90-03-02-23-a128-03"></a>

#### [영상 90.3.2.23.a128.3. `도구 옵션` → `그리기 붓` → `증분`: 켬](./90-03-02-23-paintbrush.md#90-03-02-23-a128-03)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/57faff25-94a9-4d70-bc05-8363ff8de4a4"></video>

## 4. 옵션이 적용되는 도구들
이 옵션은 `비율(Rate)` 슬라이더가 있는 도구 - [에어브러시](./14-03-10-00-airbrush.md), [흐릿하게/선명하게](./14-03-15-blur-sharpen.md), [문지르기](./14-03-16-smudge.md)를 제외한 모든 칠하기 도구들에 적용됩니다. `비율(Rate)` 슬라이더가 있는 도구는 자동적으로 `증분(Incremental)` 효과를 가지고 있습니다.

***

## 다른 페이지로 가기

[➡️ 다음: 14.3.1.3. 칠하기 모드 예제(Paint Mode Examples)](./14-03-01-03-00-paint_mode_examples.md)

[⬅️ 이전: 14.3.1.2.14. 붓의 크기를 뷰에 고정하기(Lock brush size to view)](./14-03-01-02-14-lock_brush_size_to_view.md)

[⬆️ 위: 14.3.1.2. 도구 옵션(Tool Options)](./14-03-01-02-00-tool_options.md)

[⬆️ 위: 14.3.1. 일반적인 특징(Common features)](./14-03-01-00-common-features.md)

[⬆️ 위: 14.3. 칠하기 도구(Paint tools)](./14-03-00-paint-tools.md)

[⬆️ 위: 14. 도구(Tools)](./14-00-tools.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-tools-paint.html#)
