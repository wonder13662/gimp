# 3.4.2. 이미지의 크기 바꾸기 (화면용)
디지털 카메라 등으로 찍은 큰 이미지를 웹페이지에 표시하거나 게시판, 전자메일 등으로 보내려면 크기를 조정하는 것이 좋습니다.

#### 그림 3.17. 크기 조정을 위한 예제 이미지
<img width="480" alt="그림 3.17. 크기 조정을 위한 예제 이미지" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/be4bb3a2-8965-42db-8b73-de0ea526f242">

GIMP는 이미지를 보기 좋은 크기로 엽니다. 따라서 열려고 하는 이미지가 예제 이미지처럼 정말 거대하다면 보기 좋게 축소된 형태로 열립니다. 이미지 창 하단에 있는 상태 표시줄에 표시된 확대/축소 비율은 화면 표시 상의 확대/축소 비율입니다. 실제 이미지가 줄어든 것은 아닙니다. 제목 표시줄에는 모드도 표시됩니다. RGB로 되어 있으면 정상입니다. 

#### 그림 3.4.2.1. 화면 표시 상의 확대/축소 비율과 RGB 모드
<img width="1280" alt="그림 3.4.2.1 화면 표시 상의 확대/축소 비율" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/e9973caf-e8ae-4fbc-9814-9b9d13e6f982">

만약 인덱스(Indexed)나 그레이스케일(grayscale)로 되어 있다면 [3.4.7. 모드 바꾸기](03-04-07-change-the-mode.md)를 참고하세요.

이미지 메뉴(Image Menu)의 `이미지(I)` → `이미지 크기조정(S)...` 메뉴를 선택하여 "크기 조정" 대화상자를 엽니다. `이미지 크기조정(S)...`의 오른쪽의 `...`은 메뉴를 클릭하면 대화상자가 열린다는 것을 의미합니다.

#### 그림 3.4.2.2. 이미지 메뉴(Image Menu)의 `이미지` → `이미지 크기 조정` 메뉴
<img width="480" alt="이미지 메뉴(Image Menu)의 `이미지` → `이미지 크기 조정` 메뉴" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/3ff41d8f-1d2e-461f-9eda-f9d18a330ec0">

#### 그림 3.4.2.3. "크기 조정" 대화상자
<img width="720" alt="그림 3.4.2.3. '크기 조정' 대화상자" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/a25470f0-e776-42ef-a9f6-ded56d18b18d">

"크기 조정" 대화상자의 위쪽의 `이미지 크기(Image Size)`에 `너비(Width)`와 `높이(Height)` 항목이 있습니다. 화면에 표시된 단위는 픽셀이며, [단위 메뉴](./03-02-02-image-windowx-07-units-menu.md#32272-단위-메뉴의-단위-변경)에서 원하는 단위로 변경할 수 있습니다. 참고로 각각의 장치들(스마트폰, 모니터, TV 등)은 서로 다른 픽셀 크기를 가지고 있기 때문에, 같은 이미지라도 약간씩 다른 크기로 보일 수 있습니다. 아래 있는 `X축 해상도(X resolution)`, `Y축 해상도(Y resolution)`는 모니터나 모바일 기기에서 이미지를 보는데 영향을 미치지 않고, 인쇄와 관련된 항목입니다.

너비를 `너비(Width)`에 입력합니다. 정확한 너비를 모른다면, 목적에 맞는 너비를 입력합니다. 다음과 같은 기준으로 나눌 수 있습니다.

- 모바일 폰: 320px
- 넷북: 1024px
- 와이드 스크린 PC 화면: 1440px
- HD 스크린: 1920px

온라인으로 보여줘야 할 이미지라면 600px에서 800px 사이의 너비가 적절합니다.

이미지의 너비나 높이를 바꾸면, 이미지의 원래 배율에 맞춰 다른 부분이 자동으로 바뀝니다. 예를 들어 너비를 바꾸면 높이도 같이 바뀝니다. 

#### 영상 3.4.2.4. 이미지 너비나 높이 변경시, 배율에 맞춰 다른 부분도 바뀜
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/6314855c-937d-49b6-a60f-c21520351012"></video>

#### 영상 3.4.2.5. 이미지 크기 변경
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/b72a1800-9efa-4bff-8ac5-7197b2161196"></video>

원래 배율을 무시하고 각각 바꾸려면 [3.4.5. 이미지 잘라내기](./03-04-05-crop-an-image.md)를 참고하세요.

***

## 다른 페이지로 가기
[다음: 3.4.3. 이미지의 크기 바꾸기 (인쇄용)](./03-04-03-change-the-size-of-an-Image-for-print.md)

[이전: 3.4.1. 목적](./03-04-01-intention.md)

[부모: 3.4. 자주하는 편집 작업](./03-04-00-common-tasks.md)

[최상위](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-tutorial-quickie-scale.html)