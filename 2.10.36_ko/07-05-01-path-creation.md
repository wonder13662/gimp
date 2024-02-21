# 7.5.1. 경로 만들기
경로 그리기를 해봅시다. 경로의 외곽선은 나중에 수정할 수 있습니다([경로](./14-05-02-paths.md) 도구를 참고해주세요). 

## 경로 도구 선택하기
경로 도구를 선택합니다. 아래 방법 중 하나를 선택해주세요.

### 1. 이미지 메뉴바의 `도구` → `경로` 선택
#### [그림 90.1.8.4.a101. `도구` → `경로`](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-08-toolsx-04-paths.html#%EA%B7%B8%EB%A6%BC-90184a101-%EB%8F%84%EA%B5%AC--%EA%B2%BD%EB%A1%9C)
[![90-01-08-tools(1080)-focus-paths](https://github.com/wonder13662/gimp/assets/15767104/724c198c-17ce-441b-ad81-56b4e9155759)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-08-toolsx-04-paths.html#%EA%B7%B8%EB%A6%BC-90184a101-%EB%8F%84%EA%B5%AC--%EA%B2%BD%EB%A1%9C)

### 2. 도구 상자에서 `경로` 선택
#### [그림 90.3.2.35.a2. 도구상자 - 경로](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-02-tool_iconx-35-paths.html#%EA%B7%B8%EB%A6%BC-903235a2-%EB%8F%84%EA%B5%AC%EC%83%81%EC%9E%90---%EA%B2%BD%EB%A1%9C)
[![그림 90.3.2.35.a2. 도구상자 - 경로](https://github.com/wonder13662/gimp/assets/15767104/577e558a-9a9e-4376-9fde-a49781286f10)](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-02-tool_iconx-35-paths.html#%EA%B7%B8%EB%A6%BC-903235a2-%EB%8F%84%EA%B5%AC%EC%83%81%EC%9E%90---%EA%B2%BD%EB%A1%9C)

### 3. 단축키 `B` 클릭
#### [영상 90.3.2.35.a3. 단축키로 도구상자 - 경로 열기](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-02-tool_iconx-35-paths.html#%EC%98%81%EC%83%81-903235a3-%EB%8B%A8%EC%B6%95%ED%82%A4%EB%A1%9C-%EB%8F%84%EA%B5%AC%EC%83%81%EC%9E%90---%EA%B2%BD%EB%A1%9C-%EC%97%B4%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/8434cfe3-b8c1-428c-b563-7f20dc7e6d38"></video>

## 마우스 커서 바뀌는 모습 확인하기
경로 도구가 선택되면, 마우스 커서가 곡선 아이콘이 옆이 있는 십자선(cross hair)으로 바뀝니다. 실제 모양은 [마우스 포인터 모드 설정](./12-01-18-image-window.md)에 따라 다릅니다. 

#### 그림 90.3.2.35.a4. 경로 선택하면 마우스 커서의 아이콘이 곡선 아이콘으로 바뀜
![90-03-02-35-paths-cross_hair_animation](https://github.com/wonder13662/gimp/assets/15767104/ed6d4fbd-604c-4310-be1e-1d3b7a6a1092)

경로 대화상자의 `편집모드`의 `디자인`이 선택되어 있어야 합니다.

#### 그림 90.3.2.35.a5. 경로 대화상자의 편집모드 - 디자인
![90-03-35-paths(w1080)-focus-edit_design](https://github.com/wonder13662/gimp/assets/15767104/c820622b-61fa-4991-9a1f-8d3d7efc8234)

## 경로에 새로운 점(Point) 추가하기
이미지에 왼쪽 마우스 클릭을 하면 경로의 첫번째 점이 생깁니다. 마우스를 새로운 지점으로 옮겨서 왼쪽 마우스 클릭을 하면 또다른 점이 생기며, 직전에 만든 점과 연결됩니다. 

점을 추가하는 동안에는 마우스 커서는 곡선 아이콘 옆에 작은 `+` 표시를 가지고 있습니다. 이 표시는 클릭하면 새로운 점을 추가한다는 의미입니다.

아래 영상에서 마우스 커서가 추가한 점에 가까이 갔을 때는 점을 이동시키는 `십자 화살표`가 표시되며, 점에서 떨어졌을 때는 새로운 점을 추가하는 `+`가 표시되는 것을 확인할 수 있습니다.
#### 그림 90.3.2.35.a6. 경로의 점을 추가할 때 마우스 커서의 `+` 아이콘
![90-03-02-35-mouse_cursor-add_icon(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/69e85afe-9002-4a92-b1ae-5b74a265c8ba)

## 경로 옮기기
When the mouse cursor is close to one of the path points, the "+" changes into a cross with arrows; like the move tool. You can then move the existing path point.

## 경로 닫기
To close your path, go with the mouse on top of the point you want to connect to, and then Ctrl + click that point. When you are done designing your path, you can click Enter. This will turn the path into a Selection. 

## 경로 고치기
You can also keep adding more points, or start changing the curves of the path.

To edit the curves of your path, move the mouse cursor close to a line segment, left-click and drag the line segment. Two events occur.

- The line segment bends and curves as it is pulled.
- Each line segment has two start points and end points marked by little square rectangles, these are called handles. A "direction line" now projects from each start point for the line segment that was moved. This direction line usually has a different color than the lines of the path.

The curved line segment leaves an end point in the same direction that the "direction line" leaves the start point. The length of this line controls how far the line segment projects along the "direction line" before curving towards the other path point.

The handle at the end of each "direction line" can be dragged to change the direction and length of the curve. The handles on the other end, where they connect to the path, can be used to move the position of that path point.

The path is comprised of two components with both straight and curved segments. Black squares are anchor points, the open circle indicates the selected anchor, and the two open squares are the handles associated with the selected anchor.

***

## 다른 페이지로 가기
[➡️ 다음: 7.5.2. 경로 속성](./07-05-02-path-properties.md)

[⬅️ 이전: 7.5. 경로](./07-05-00-paths.md)

[⬆️ 위: 7.5. 경로](./07-05-00-paths.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-paths.html#gimp-using-paths-creating)