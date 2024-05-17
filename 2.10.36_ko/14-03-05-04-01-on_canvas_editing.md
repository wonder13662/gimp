# 14.3.5.4.1. 캔버스에서 수정하기(On-canvas editing)
[그라디언트 편집 대화상자](./15-03-05-gradient-dialog.md)의 모든 기능을 캔버스에서도 사용할 수 있습니다.

<a id="14-03-05-04-01-s1"></a>

## 1. 그라디언트 그리기 및 수정하기
그라디언트 대화상자에서 그라디언트를 선택할 수 있습니다. 캔버스 위에서 클릭, 드래그하면, 
선이 그어지면서 그라디언트가 보여집니다. 이 그라디언트 선을 움직여서 그라디언트를 수정할 수 있습니다.

<a id="14-03-05-04-01-s2"></a>

## 2. 커스텀 그라디언트(Custom Gradient)
그라디언트를 수정하자마자, GIMP(김프)는 `커스텀 그라디언트(Custom Gradient)`를 만듭니다. `커스텀 그라디언트(Custom Gradient)`는 선택한 그라디언트의 복사본입니다. `커스텀 그라디언트(Custom Gradient)`가 활성화된 그라디언트가 됩니다.

[관련 정보: 14.3.5.4.4. 커스텀 그라디언트(Custom Gradient)](./14-03-05-04-04-custom_gradient.md)

<a id="14-03-05-04-01-s3"></a>

## 3. `시작 끝점(Start endpoint)`과 `종단 끝점(End endpoint)`
그라디언트의 양쪽 끝에 `시작 끝점(Start endpoint)`과 `종단 끝점(End endpoint)`이 있습니다.

`시작 끝점(Start endpoint)`과 `종단 끝점(End endpoint)` 중 하나를 클릭, 드래그해서 원하는 곳으로 옮깁니다. 이 때 마우스 포인터에 이동 십자(moving cross)가 추가됩니다.

<a id="14-03-05-04-01-s4"></a>

## 4. 선택한 `끝점(endpoint)`의 대화상자
선택한 `끝점(endpoint)`을 옮기는 동시에 선택한 `끝점(endpoint)`의 데이터를 보여주는 작은 대화상자가 생깁니다. 

1. 선택한 `끝점(endpoint)`의 위치
2. 선택한 `끝점(endpoint)`의 색

참고로, `끝점(endpoint)`만 옮긴 것이라면, [커스텀 그라디언트](./14-03-05-04-04-custom_gradient.md)는 아직 만들어지지 않습니다.

<a id="14-03-05-04-01-s5"></a>

## 5. 색 멈춤점(Color Stop)
`색 멈춤점(Color Stop)`을 새로 만들거나 지울 수 있습니다. 또는 선택해서 옮기는 것도 가능합니다. 이 `색 멈춤점(Color Stop)`에 색을 지정해서 `색 멈춤점(Color Stop)` 사이의 마디(segment)에 색을 섞거나 칠할 수 있습니다. `색 멈춤점(Color Stop)`은 `중점(midpoint)`에서 만들 수 있습니다.

그라디언트 선을 보면, 작은 사각형이 여러개 있습니다.

이 사각형을 `색 멈춤점(Color Stop)`이라고 합니다. `색 멈춤점(Color Stop)`은 그라디언트 선을 마디(Segment)로 나눕니다. 마디(Segment)는 각각 수정할 수 있습니다.

`색 멈춤점(Color Stop)`을 클릭, 드래그해서 움직입니다. 활성화된 `색 멈춤점(Color Stop)`은 노란색으로 표시됩니다.

`색 멈춤점(Color Stop)`을 움직이자마자, [커스텀 그라디언트(Custom Gradient)](./14-03-05-04-04-custom_gradient.md)가 만들어집니다. `색 멈춤점(Color Stop)`의 데이터 대화상자에는 `색 멈춤점(Color Stop)`을 지울 수 있는 버튼이 있습니다.

<a id="14-03-05-04-01-s6"></a>

## 6. 중점(Midpoint)
그라디언트 선 위에 마우스 포인터를 옮기면, `중점(Midpoint)`이 나타납니다. 이 `중점(Midpoint)`을 클릭하면, `중점(Midpoint)` 대화상자가 나타납니다. 이 대화상자에는 2개 버튼이 있습니다.

1. 새로운 `색 멈춤점(Color Stop)`을 `중점(Midpoint)`에 만들기
2. `중점(Midpoint)`을 마디(Segment)의 중심으로 옮기기

<a id="14-03-05-04-01-s7"></a>

## 7. 중점(Midpoint) → 혼합 모드(Blending Mode)
두 개의 `색 멈춤점(Color Stop)` 사이의 `혼합 모드(Blending Mode)`를 `중점(Midpoint)` 대화상자의 `혼합(Blending)` 드롭다운 목록에서 선택할 수 있습니다. `혼합(Blending)` 드롭다운 목록의 `Step` 옵션은 `중점(Midpoint)`을 기준으로 두 색이 혼합되지 않고, 명확하게 나뉩니다.

<a id="14-03-05-04-01-s8"></a>

## 8. 색 멈춤점(Color Stop)과 중점(Midpoint)의 위치
`색 멈춤점(Color Stop)`과 `중점(Midpoint)`의 대화상자의 위치(Position)은 그라디언트 선 위에서의 위치를 백분율로 나타냅니다. 0은 `시작 끝점(Start endpoint)`의 위치이고, 100은 `종단 끝점(End endpoint)`의 위치입니다.

<a id="14-03-05-04-01-s9"></a>

## 9. 색 바꾸기(Changing color)
`시작 끝점(Start endpoint)`, `종단 끝점(End endpoint)`, `색 멈춤점(Color Stop)`의 대화상자에서 색 버튼 옆에 드롭다운 목록이 있습니다. 기본값은 `고정(Fixed)`입니다. `고정(Fixed)`은 색 선택이 전경색과 배경색이 아닌 독립적으로 색을 선택할 수 있다는 뜻입니다. `고정(Fixed)`이 선택된 상태에서 색 버튼을 클릭하면 [색 선택 대화상자]()를 열 수 있습니다.

***

## 다른 페이지로 가기

[➡️ 다음: 14.3.5.4.2. 동작 변경키(Key modifiers)](./14-03-05-04-02-key_modifiers.md)

[⬅️ 이전: 14.3.5.4. 그라디언트 고치기(Editing Gradient)](./14-03-05-04-00-editing_gradient.md)

[⬆️ 위: 14.3.5.4. 그라디언트 고치기(Editing Gradient)](./14-03-05-04-00-editing_gradient.md)

[⬆️ 위: 14.3.5. 그라디언트(Gradient)](./14-03-05-00-gradient.md)

[⬆️ 위: 14.3. 칠하기 도구(Paint tools)](./14-03-00-paint-tools.md)

[⬆️ 위: 14. 도구(Tools)](./14-00-tools.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-tool-gradient.html#idm12974)
