# 3.4.5. 이미지 잘라내기
#### 그림 3.27.1. 잘라내기 예제 이미지(원본)
<img width="720" alt="그림 3.27.1. 잘라내기 예제 이미지(원본)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/e2ea082e-a011-4b21-b7c0-b65965981f1b">

#### 그림 3.27.2. 잘라내기 예제 이미지(잘라내기 한 이미지)
<img width="360" alt="그림 3.27.2. 잘라내기 예제 이미지(잘라내기 한 이미지)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/88feb64b-a30e-467d-9ad9-d1ea63ab99bd">

불필요한 여백을 제거해서 원하는 크기로 맞추거나 대상을 강조하는 등의 이유로 이미지의 일정 부분을 잘라내 버리는 경우에 사용합니다.

# 3.4.5.1. 이미지 잘라내기 메뉴 사용하기
이런 경우를 위한 잘라내기 도구를 사용하려면 도구 상자에 있는 아이콘을 누르거나, 이미지 창의 메뉴 모음에서 `도구` → `변형 도구` → `잘라내기`를 선택합니다. 그러면 마우스 커서가 사각형 모양으로 바뀌면서 이미지를 잘라낼 수 있게 됩니다.

#### 그림 90.1.8.3.3.a101. `도구` → `변형 도구` → `잘라내기` (Windows)
![그림 90.1.8.3.3.a101. `도구` → `변형 도구` → `잘라내기` (Windows)](https://github.com/wonder13662/gimp/assets/15767104/df066931-8457-4197-befd-95356b2212cf)

[다른 운영체제와 언어의 `잘라내기 메뉴` 확인하기]()

#### 그림 3.4.5.1.2. 도구 상자(Toolbox)의 잘라내기 메뉴 위치
<img width="324" alt="그림 3.4.5.2. 도구 상자(Toolbox)의 잘라내기 메뉴 위치" src="https://github.com/wonder13662/gimp/assets/15767104/8e9db3fb-d8b3-418b-9ea4-74bef33aef62">

#### 영상 3.4.5.1.3. 잘라내기 직접 해보기(이미지 메뉴 바의 잘라내기 메뉴)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/746c7197-2b70-4ae7-a9ef-134ea29961f5"></video>

#### 영상 3.4.5.1.4. 잘라내기 직접 해보기(도구 상자(Toolbox)의 잘라내기 메뉴)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/050c3adf-ee08-4376-a5f0-802e8974e265"></video>

잘라내는 영역의 한쪽 끝을 클릭하고 대각선 방향으로 끌어 놓습니다. 이때 만들어지는 사각형은 나중에 조정이 가능합니다.

# 3.4.5.2. 이미지 잘라내기 영역 조정하기
클릭 및 드래그 동작이 완료되면 캔버스에 이미지 잘라내기 영역의 사각형이 표시됩니다. 이 사각형 위로 마우스 커서를 옮기면 커서가 바뀝니다. 바뀐 마우스 커서로 이 사각형의 꼭짓점이나 변을 드래그하여 이 사각형을 조정할 수 있습니다.

#### 그림 3.4.5.2.1. 이미지 잘라내기 영역 조정할 때 함께 연동되어 표시되는 값들
<img width="720" alt="그림 3.4.5.2.1. 이미지 잘라내기 영역 조정할 때 함께 연동되어 표시되는 값들" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/6aec1edb-2fd8-4a66-b2b2-be41480e1858">

#### 영상 3.4.5.2.2. 이미지 잘라내기 영역 조정할 때 함께 연동되어 표시되는 값들
<video controls="controls" width="1080" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/f71b6061-3536-4119-8e2e-6361407988df"></video>

위 그림과 영상처럼 이미지 잘라내기 영역의 크기가 조정되면 치수 및 비율이 [3.2.2.9. 상태 표시 영역 (Status Area)](./03-02-02-image-windowx-09-status-area.md)에 표시됩니다. 사각형 내부를 두 번 클릭하거나 `Enter` 키를 눌러 이미지 잘라내기 작업을 완료할 수 있습니다. 이미지 잘라내기 작업에 대한 자세한 내용은 [14.4.4. 이미지 잘라내기](./14-04-04-crop.md)를 확인해 주세요.

# 3.4.5.3. 이미지 잘라내기 도구 옵션
가로, 세로 비율, 예를 들어 정사각형으로 이미지를 자르려면 이미지 잘라내기 [12.1.7. 도구 옵션(Tool Options)](./12-01-07-tool-options.md)에서 비율을 설정할 수 있습니다. 도구 옵션이 보이지 않는다면, 이미지 메뉴 바(Image menu bar)의 `창(Windows)` → `도킹가능한 대화(Dockable Dialogs)` → `도구 옵션(Tool Options)`으로 도구 옵션을 불러올 수 있습니다. 

#### 그림 3.4.5.3.a1. 이미지 메뉴 바(Image menu bar)의 도구 옵션(Tool Options) 메뉴 (Windows)
<img width="1080" alt="그림 3.4.5.3.a1. 이미지 메뉴 바(Image menu bar)의 도구 옵션(Tool Options) 메뉴 (Windows)" src="https://github.com/wonder13662/gimp/assets/15767104/b5d990a0-b382-402d-8de9-d9d3293bb095">

#### 그림 3.4.5.3.a2. 이미지 메뉴 바(Image menu bar)의 도구 옵션(Tool Options) 메뉴 (Mac)
<img width="1080" alt="그림 3.4.5.3.a2. 이미지 메뉴 바(Image menu bar)의 도구 옵션(Tool Options) 메뉴 (Mac)" src="https://github.com/wonder13662/gimp/assets/15767104/7b9a6eda-355a-4fe1-8d56-d7359b00ff77">

도구 옵션의 `고정(Fixed)`의 `종횡비(Aspect ratio)`로 설정되어 있는지 확인해 주세요. 바로 아래의 입력창에 `1:1`과 같은 종횡비(Aspect ratio)를 입력할 수 있습니다.

#### 그림 3.4.5.3.a3. 이미지 잘라내기 도구 옵션(종횡비 고정)
<img width="480" alt="그림 3.4.5.2.1. 이미지 잘라내기 도구 옵션(종횡비 고정)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/ff65ca3f-a784-4ba2-a7bd-63bf0ee086c0">

(TODO Windows 대화상자 추가 필요)

종횡비 비율을 가로모드(landscape)에서 세로모드(portrait)로 바꿀 수 있습니다. 종횡비 비율(aspect ratio)를 설정한 다음에, 이미지 잘라내기 영역 사각형의 구석을 드래그하면 새로운 종횡비 비율이 적용됩니다. 그리고 새로 드래그할 때마다 새로운 종횡비 비율을 유지합니다.

#### 그림 3.4.5.3.a4. 이미지 잘라내기 도구 옵션(가로(landscape)모드, 세로(portrait)모드)
<img width="480" alt="그림 3.4.5.2.2. 이미지 잘라내기 도구 옵션(가로(landscape)모드, 세로(portrait)모드)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/0ec391d0-69d1-489a-808c-935ed4c8739a">

(TODO Windows 대화상자 추가 필요)

#### 영상 3.4.5.3.a5. 새로운 종횡비 비율 적용 및 유지(가로모드에서 세로모드로 바꾸기)
<video controls="controls" width="1080" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/2710d68c-fe1f-4792-9c8d-63c6ce8e539c"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 3.4.6. 이미지 정보 확인하기](./03-04-06-find-info-about-your-image.md)

[⬅️ 이전: 3.4.4. 이미지 압축하기](./03-04-04-compressing-images.md)

[⬆️ 위: 3.4. 자주하는 편집 작업](./03-04-00-common-tasks.md)

[🏠 홈](./00-home.md)
