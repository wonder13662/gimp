# 14.4.11. 핸들 변형(Handle transform)

<a id="90-03-02-18-a2"></a>

#### [그림 90.3.2.18.a2. `도구상자` → `핸들 변형`](./90-03-02-18-handle_transform.md#90-03-02-18-a2)
![90-03-02-18-a2](https://github.com/wonder13662/gimp/assets/15767104/70cd5526-e74c-41a2-8c9a-439ef3725b4d)

`핸들 변형(Handle transform)` 도구는 캔버스에 핸들을 추가해서 대상을 이동, 회전, 기울이기, 원근법을 적용할 수 있습니다.

<a id="14-04-11-s1"></a>

## 1. 핸들(Handle)
핸들은 1개에서 4개까지 사용할 수 있습니다. 그리고 핸들의 숫자에 따라서 기능이 달라집니다. 핸들 변형은 선택 또는 전체 레이어에 적용됩니다.

<a id="14-04-11-s1-01"></a>

### 1-1. 핸들 갯수에 따라 마우스 포인터의 아이콘 모양이 달라집니다

활성화된 핸들은 다른 핸들에 비해 커집니다. 마우스 포인터가 핸들 위로 가면, 활성화된 기능(액션)을 나타내는 작은 아이콘으로 변합니다.

<a id="90-03-02-18-a11-01"></a>

#### [영상 90.3.2.18.a11.1. 핸들 1개(이동): 마우스 포인터가 핸들 위에서의 아이콘 바뀜 (Windows) (우리말)](./90-03-02-18-handle_transform.md#90-03-02-18-a11-01)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/824854c1-dd0b-42d6-ae9c-465f5d44d2a5"></video>

[핸들 갯수에 따른 마우스 포인터의 아이콘 모양 확인하기](./90-03-02-18-handle_transform.md#90-03-02-18-a11-02)

<a id="14-04-11-s1-02"></a>

### 1-2. 핸들 클릭, 드래그로 대상 변경하기

핸들을 클릭, 드래그하면, 대상이 변형됩니다. 그리고 다른 핸들은 그 위치에 그대로 있습니다.

<a id="90-03-02-18-a12"></a>

#### [영상 90.3.2.18.a12. 핸들 4개(원근법과 크기 조정): 클릭, 드래그하는 핸들만 위치가 바뀜 (Windows) (우리말)](./90-03-02-18-handle_transform.md#90-03-02-18-a12)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/9e211127-16de-4b11-955c-7589e345c983"></video>

<a id="14-04-11-s2"></a>

## 2. 이동(Move)
핸들이 1개 선택되었을 때는 이동(Move)입니다.

<a id="90-03-02-18-a13-01"></a>

#### [영상 90.3.2.18.a13-01. 핸들 1개(이동) (Windows) (우리말)](./90-03-02-18-handle_transform.md#90-03-02-18-a13-01)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/dc9043b2-d15c-410d-b927-993920f89f61"></video>

<a id="14-04-11-s3"></a>

## 3. 회전과 크기 조정(Rotate and Scale)
핸들이 2개 선택되었을 때는 회전과 크기 조정(종횡비 유지)입니다.

<a id="14-04-11-s3-01"></a>

### 3-1. 회전
대상을 회전시킬 때는 클릭, 드래그하지 않은 핸들을 중심으로 회전합니다.

<a id="90-03-02-18-a13-02-01"></a>

#### [영상 90.3.2.18.a13.2.1. 핸들 2개(회전과 크기 조정): 회전 (Windows) (우리말)](./90-03-02-18-handle_transform.md#90-03-02-18-a13-02-01)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/9c8d4a9c-7e92-4bf2-8b6e-ee0e07d43e37"></video>

<a id="14-04-11-s3-02"></a>

### 3-2. 크기 조정
대상을 크기 조정할 때는 대상의 종횡비(Aspect ratio)를 유지한 채로 크기 조정을 합니다.

<a id="90-03-02-18-a13-02-02"></a>

#### [영상 90.3.2.18.a13.2.2. 핸들 2개(회전과 크기 조정): 크기 조정 (Windows) (우리말)](./90-03-02-18-handle_transform.md#90-03-02-18-a13-02-02)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/a245e1b8-b2f1-4528-9e5d-40ce149208ff"></video>

<a id="14-04-11-s4"></a>

## 4. 기울이기와 크기 조정(Shear and Scale)
핸들이 3개 선택되었을 때는 기울이기와 크기 조정(종횡비 유지하지 않음)입니다.

<a id="14-04-11-s4-01"></a>

### 4-1. 기울이기

<a id="90-03-02-18-a13-03-01"></a>

#### [영상 90.3.2.18.a13.3.1. 핸들 3개(기울이기와 크기 조정): 기울이기 (Windows) (우리말)](./90-03-02-18-handle_transform.md#90-03-02-18-a13-03-01)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/5d3aa839-0f9d-472f-89a6-689601b3052d"></video>

<a id="14-04-11-s4-02"></a>

### 4-2. 크기 조정
대상을 크기 조정할 때는 대상의 종횡비(Aspect ratio)를 유지하지 않고 크기 조정을 합니다. 하지만 3개의 핸들의 거리의 비율을 동일하게 유지하면서 거리를 줄이거나 늘이면 대상의 종횡비(Aspect ratio)를 유지시킬 수 있습니다.

<a id="90-03-02-18-a13-03-02"></a>

#### [영상 90.3.2.18.a13.3.2. 핸들 3개(기울이기와 크기 조정): 크기 조정 (Windows) (우리말)](./90-03-02-18-handle_transform.md#90-03-02-18-a13-03-02)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/b431a350-c15d-48c4-ad97-fde886ed1720"></video>

<a id="14-04-11-s5"></a>

## 5. 원근법과 크기 조정(Perspective and Scale)

<a id="14-04-11-s5-01"></a>

### 5-1. 원근법

<a id="90-03-02-18-a13-04-01"></a>

#### [영상 90.3.2.18.a13.4.1. 핸들 4개(원근법과 크기 조정): 원근법 (Windows) (우리말)](./90-03-02-18-handle_transform.md#90-03-02-18-a13-04-01)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/a455be31-75b5-468f-88b6-43667805d274"></video>

<a id="14-04-11-s5-02"></a>

### 5-2. 크기 조정
대상을 크기 조정할 때는 대상의 종횡비(Aspect ratio)를 유지하지 않고 크기 조정을 합니다. 하지만 4개의 핸들의 거리의 비율을 동일하게 유지하면서 거리를 줄이거나 늘이면 대상의 종횡비(Aspect ratio)를 유지시킬 수 있습니다.

<a id="90-03-02-18-a13-04-02"></a>

#### [영상 90.3.2.18.a13.4.2. 핸들 4개(원근법과 크기 조정): 크기 조정 (Windows) (우리말)](./90-03-02-18-handle_transform.md#90-03-02-18-a13-04-02)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/a1c0812d-486e-4e02-847a-4ed410227feb"></video>

***

## 하위 페이지

[14.4.11.1. 도구 활성화하기(Activating the tools)](./14-04-11-01-activating_the_tool.md)

[14.4.11.2. 동작 변경키(Key modifiers)](./14-04-11-02-key_modifiers.md)

[14.4.11.3. 옵션(Options)](./14-04-11-03-options.md)

[14.4.11.4. 핸들 변형 대화상자(Handle transform dialog)](./14-04-11-04-handle_transform_dialog.md)

***

## 다른 페이지로 가기

[➡️ 다음: 14.4.11.1. 도구 활성화하기(Activating the tools)](./14-04-11-01-activating_the_tool.md)

[⬅️ 이전: 14.4.10.4. 통합 변형 대화상자(Unified transform dialog)](./14-04-10-04-unified_transform_dialog.md)

[⬆️ 위: 14.4. 변형 도구(Transform tools)](./14-04-00-transform-tools.md)

[⬆️ 위: 14. 도구(Tools)](./14-00-tools.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-tool-handle-transform.html)