# 7.5.1. 경로 만들기
경로 그리기를 해봅시다. 경로의 외곽선은 나중에 수정할 수 있습니다([경로](./14-05-02-paths.md) 도구를 참고해주세요). 

## 경로 도구 선택하기
경로 도구를 선택합니다. 아래 방법 중 하나를 선택해주세요.

### 1. 이미지 메뉴바의 `도구` → `경로` 선택
#### 그림 90.1.8.4.a101. `도구` → `경로`
![90-01-08-tools(1080)-focus-paths](https://github.com/wonder13662/gimp/assets/15767104/724c198c-17ce-441b-ad81-56b4e9155759)

### 2. 도구 상자에서 `경로` 선택
#### 그림 90.3.2.35.a2. 도구상자 - 경로
![그림 90.3.2.35.a2. 도구상자 - 경로](https://github.com/wonder13662/gimp/assets/15767104/577e558a-9a9e-4376-9fde-a49781286f10)zebu80

### 3. 단축키 `B` 클릭
#### 영상 90.3.2.35.a2. 단축키로 도구상자 - 경로 열기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/8434cfe3-b8c1-428c-b563-7f20dc7e6d38"></video>

## 마우스 커서 바뀌는 모습 확인하기

When the Paths tool is selected, the mouse cursor changes into a crosshair with a curve by default. The actual shape depends on your [mouse pointer mode setting](./12-01-18-image-window.md). Make sure that the Paths `Edit Mode` in Tool Options is set to `Design`.

## 경로의 점(Point) 추가하기

Left click in the image to create the first point of the path. Move the mouse to a new point and left click to create another point linked to the previous point. Although you can create as many points as you desire, you only need two points to learn about Paths.

While adding points, the mouse cursor has a little "+" next to the curve, which indicates that clicking will add a new point.

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