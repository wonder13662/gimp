# 7.10. 그라디언트
#### 7.10.a101. 그라디언트 예제
![gradient-examples](https://github.com/wonder13662/gimp/assets/15767104/f629cd76-7e22-4d32-b534-d3aa233d3d44)

그라디언트는 선형적인 순서로 색깔들이 배치된 된 것입니다. 그라디언트는 [그라디언트 도구](./14-03-05-gradient.md) 또는 "그라디언트 채우기 도구(gradient fill tool)"을 사용해 선택 영역을 그라디언트의 색상으로 채웁니다. 선택 영역 안의 그라디언트의 색상을 조정하는 여러가지 방법이 있습니다.

## 그라디언트로 칠하기(Painting with a grandient)
GIMP(김프)의 기본적인 칠하기 도구는 그라디언트의 색상을 사용할 수 있습니다. 붓으로 칠하는 색상이 그라디언트 색상으로 나옵니다.

#### [영상 90.3.2.23.a112. 그리기 붓(Paintbrush)의 도구 옵션(Tool Options)의 `Color From Gradient` 적용하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-02-tool_iconx-23-paintbrush.html#%EC%98%81%EC%83%81-903223a112-%EA%B7%B8%EB%A6%AC%EA%B8%B0-%EB%B6%93paintbrush%EC%9D%98-%EB%8F%84%EA%B5%AC-%EC%98%B5%EC%85%98tool-options%EC%9D%98-color-from-gradient-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/6215e2ac-b807-4732-b106-e37b2c0c2c82"></video>

위 영상 관련 작업 내용은 [3.5.2.1. 그리기 붓과 `Color From Gradient` 사용하기](https://wonder13662.github.io/gimp/2.10.36_ko/03-05-02-examples.html#3521-%EA%B7%B8%EB%A6%AC%EA%B8%B0-%EB%B6%93%EA%B3%BC-color-from-gradient-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)을 참고해주세요.

## 그라디언트 맵 필터(The Gradient Map Filter)
이 필터는 [이미지 메뉴 바](./03-02-02-image-windowx-02-image-menu.md#32222-이미지-메뉴-바의-위치macos)의 `색` → `지도` → `그라디언트 맵` 메뉴에 있습니다. 

#### 그림 90.1.7.17.6.a1. `색` → `지도` → `그라디언트 맵` (Windows)
![90-01-07-colorsx-04-map(windows)(1080)-focus-gradient_map](https://github.com/wonder13662/gimp/assets/15767104/20931627-823c-41a7-b2d9-a35017e5f28f)

[다른 운영체제와 언어의 `색` → `지도` → `그라디언트 맵` 확인하기](./90-01-07-colorsx-17-mapx-06-gradient_map.md)

회색톤 이미지의 각 점을 회색톤 농도에 따라 현재 그라디언트의 색상으로 바꾸는 필터입니다. 농도가 0이면 가장 어두운 색으로 그라디언트의 가장 왼쪽 색으로 교체되고, 농도가 255면 가장 밝은 색으로 그라디언트의 가장 오른쪽 색상으로 교체됩니다. 

#### 영상 90.1.7.17.6.a3. `색` → `지도` → `그라디언트 맵` (Windows) - 이미지 색상 바꾸기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/8a25ac5e-ee10-4700-b1dc-92f336d9365b"></video>

이에 대한 자세한 내용은 [그라디언트 맵](./16-08-40-gradient-map.md)을 참고하세요.

## 그라디언트 대화상자 사용하기
GIMP(김프)를 설치하면, 기본으로 제공되는 많은 그라디언트가 있습니다. 그리고 직접 새로운 그라디언트를 만들거나 다운로드받아 그라디언트를 설치할 수도 있습니다. [그라디언트 대화상자](./15-03-05-gradient-dialog.md)를 이용해서 사용할 수 있는 그라디언트 목록을 확인할 수 있습니다. 그라디언트 대화상자를 탭에 추가해두거나, 필요할 때 띄울수도 있습니다.

#### 그림 90.4.19.a1. 그라디언트 대화상자
![그림 90.4.19.a1. 그라디언트 대화상자](https://github.com/wonder13662/gimp/assets/15767104/d1e99d30-8cd8-40b4-bbdf-b91c16439727)

## 지금 쓰고있는 그라디언트 확인하기
"지금 쓰고있는 그라디언트"는 도구상자의 "붓/무늬/그라디언트" 영역에 표시됩니다. "지금 쓰고있는 그라디언트"는 그라디언트와 관련된 동작에서 씁니다. 도구상자의 그라디언트 심볼을 클릭하면 [그라디언트 대화상자](./15-03-05-gradient-dialog.md)를 열 수 있습니다.

#### 그림 90.3.4.a2. 도구상자의 '붓/무늬/그라디언트' - `그라디언트`
![90-03-04-brush_pattern_gradient(windows)(ko)-focus-gradient](https://github.com/wonder13662/gimp/assets/15767104/f0f3242f-006c-417b-8d6b-82044636c631)

Many quickly examples of working with gradient (for more information see [Gradient Tool](./14-03-05-gradient.md))

## 예제 1: 선택에 그라디언트 적용하기
그라디언트를 선택합니다.

혼합 도구로 선택 내부의 한 점에서 다른 지점으로 클릭후 끌어놓기를 합니다.

그라디언트의 색상들이 마우스를 끌어놓기 한 방향에 수직으로, 그리고 끌어놓기 한 길이에 맞게 퍼져 적용됩니다.

## 예제 2: 그라디언트로 칠하기(Painting with a gradient)
You can also use a gradient with the Pencil, Paintbrush or Airbrush tools if you choose the dynamics `Color From Gradient`. In the next step choose a suitable gradient from `Color options` and in the `Fade options` set the gradients length and the style of the repeating. The chapter [14.3.2.6. Dynamics Options](./14-03-02-dynamicsx-06-dynamics_options.md)

The following example shows the impact on the Pencil tool. You see in the upper side of the figure the necessary settings and the lower side of the figure shows the resulting succession of the gradients colors.

## 예제 3: 같은 그라디언트로 다른 효과 만들기
네 가지의 화려한 색상을 이용한 그라디언트: 선형 그라디언트로 채우기, 그라디언트 모양으로 채우기, 그라이던트의 색으로 스트로크 칠하기, 퍼지 브러시로 스트로크를 칠하고, 그라디언트 맵 필터로 색칠하기.

A few useful things to know about GIMP's grandients:

## 전경색과 배경색을 이용하는 그라디언트
다음 리스트 중에 처음 네가지 그라디언트는 조금 특별합니다. 그것들은 설정된 색상이 아닌 도구 상자의 색상 영역에 있는 전경색과 배경색을 이용합니다. 여기서 사용되는 전경색은 색상 선택기를 통해 바꿀 수 있습니다. 이처럼 전경색과 배경색을 바꿈으로써, 서로 다른 두 가지색을 부드럽게 전환시키면서 그라디언트 할 수 있습니다.

### 1. 전경색을 배경색으로(RGB)
도구 상자의 전경색으로부터 배경색까지 `RGB` 모드로 그라디언트가 표현됩니다. 

### 2. 전경색을 배경색으로(HSV 시계반대방향)
전경색으로부터 색상환에서 시계반대 방향으로 전경색으로부터 360도에 있는 색까지의 색조를 표현합니다.

### 3. 전경색을 배경색으로(HSV 시계방향)
전경색으로부터 색상환에서 시계 방향으로 전경색으로부터 0도에 있는 색까지의 색조를 표현합니다.

### 4. 전경색에서 투명으로
선택된 색조가 점점 투명하게 표현됩니다.

## 그라디언트의 투명도 변화
그라디언트는 색상의 변화뿐만 아니라 투명도의 변화도 포함합니다. 어떤 그라디언트는 완전히 불투명하기도 하고, 투명하거나 일부가 투명한 그라디언트도 있습니다. 불투명하지 않은 그라디언트로 채우거나 칠할 경우, 레이어에 있는 이미지가 그라디언트 아래로 비쳐보일 수 있습니다.

## 커스텀 그라디언트 
You can create new custom gradient, using the [Gradient Editor](./14-03-05-gradientx-03-the_gradient_editor.md). You cannot modify the gradients that are supplied with GIMP, but you can duplicate them or create new ones, and then edit those.

## 그라디언트 파일의 위치
The gradients that are supplied with GIMP are stored in a system gradient folder. By default, gradients that you create are stored in a folder called `gradients` in your personal GIMP directory. Any gradient files (ending with the extension [`.ggr`](./19-glossaryx-ggr.md)) found in one of these folders, will automatically be loaded when you start GIMP. You can add more directories to the gradient search path, if you want to, in the Gradient tab of the [Data Folders](./12-01-25-data-folders.md) pages of the Preference dialog.

(TODO 기본 설정창의 이미지 추가하기)

## `.svg` 포맷 파일 불러오기
GIMP can aslo load gradient files in `.svg` format, used by many vector graphics programs. To make GIMP load an SVG gradient file, all you need to do is place it in the `gradients` folder of your personal GIMP directory, or any other folder in your gradient search path.

***

## 다른 페이지로 가기
[➡️ 다음: 7.11. 무늬](./07-11-patterns.md)

[⬅️ 이전: 7.9.2. 새 붓 빨리 만들기](./07-09-02-creating-a-brush-quickly.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-gradients.html)

***

## 관련 정보
[Gimp-Forum.net: The "look" of gradients](https://www.gimp-forum.net/Thread-The-look-of-gradients)
(TODO 내용 정리 필요)