# 7.6. 붓

## 붓 픽스맵
[픽스맵](./19-glossaryx-pixmap.md)은 픽셀의 색상값을 2차원 배열에 저장해서 이미지를 보여주는 방식을 말합니다. 붓은 칠을 하기 위한 픽스맵이거나 여러 픽스맵의 집합입니다. 붓 픽스맵은 이미지에 붓을 한번 칠했을 때의 이미지에 남는 자국을 나타냅니다.

붓 픽스맵에는 `붓 간격(brush spacing)`이라는 중요한 속성이 있습니다. `붓 간격`은 연속된 붓 자국 사이의 거리를 나타냅니다. 각각의 붓은 `붓 간격`에 대한 기본값이 있습니다. `붓 간격`은 붓 대화상자에서 `간격(spacing)`을 조정해서 바꿀 수 있습니다.

#### 그림 90.4.15.a121. 붓 대화상자 - 간격
![90-04-15-brushes(w1080)-focus-spacing](https://github.com/wonder13662/gimp/assets/15767104/0d9d484a-d99e-4ef6-a9d6-700c4dfe0808)

(TODO 픽스맵의 붓 간격 정보입력 이미지 또는 영상 추가)

## GIMP(김프)의 칠하기 도구
GIMP(김프)에는 10개의 `칠하기 도구(paint tool)`가 있습니다. 채색 작업만이 아닌 지우기, 복사하기, 문지르기, 밝게하기, 어둡게하기 등의 작업까지 할 수 있습니다. 잉크 도구를 제외한 모든 `칠하기 도구`는 같은 붓을 사용합니다.

#### 그림 90.4.15.a131. 붓 대화상자 (Windows) (우리말)
![90-04-15-brushes(windows)(ko)(slim)](https://github.com/wonder13662/gimp/assets/15767104/1c2606df-09ba-415e-94cd-f00dae3bf670)

## 붓 긋기(Brush stroke)
마우스 버튼을 누른채로 마우스 포인터를 이미지 위로 움직이면 "붓 긋기"를 할 수 있습니다. 그려진 길을 따라 일정한 간격으로 붓자국이 남습니다. 여기에는 붓과 칠하기 도구의 설정이 영향을 미칩니다.

#### 영상 90.3.2.23.a113. 그리기 붓(Paintbrush)의 붓 긋기(Brush stroke)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/f71f220a-c5e6-4262-afa0-f1dd7e1e2fde"></video>

## 붓 선택하기
붓은 [붓 대화상자](./15-03-02-brushes-dialog.md)에서 아이콘을 클릭해서 선택할 수 있습니다.

#### 영상 90.4.15.a141. 붓 대화상자 (Windows) (우리말) - 붓 선택하기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/93612d28-ed12-4590-bafe-f64469f081a3"></video>

## 지금 쓰고 있는 붓 확인하기
GIMP(김프)에서 지금 쓰고 있는 붓은 도구상자의 붓/무늬/그라디언트 영역과 도구 옵션의 `붓` 항목에서 확인할 수 있습니다. 

#### 그림 90.4.15.a142. 지금 쓰고 있는 붓 확인하기
![90-03-02-23-paint_brush(windows)(ko)-current_brush](https://github.com/wonder13662/gimp/assets/15767104/d520907a-0666-465c-95d7-fc302fb7b947)

## 붓 대화상자 활성화하기
도구상자의 붓/무늬/그라디언트 영역의 붓 모양을 클릭하면 [붓 대화상자](./15-03-02-brushes-dialog.md)를 활성화할 수 있습니다.

#### 그림 90.4.15.a143. 붓 대화상자 활성화하기 - 도구상자의 붓/무늬/그라디언트 영역의 붓 클릭
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/16c8b4fc-f86f-4f08-aa58-fd37dd7fccc1"></video>

## 기본 붓과 붓 추가하기
GIMP(김프)를 처음 설치하면, 기본 붓이 함께 설치되어 있습니다. 그리고 직접 새로운 붓을 만들수도 있고, 다운로드받아 추가할 수도 있습니다.

## 붓의 종류 알아보기
GIMP(김프)에서 다양한 종류의 붓을 사용할 수 있습니다. 모든 붓은 같은 방식으로 씁니다. 아래에서 사용가능한 붓의 종류를 확인해보세요.

### 일반 붓(Ordinary brushes)
GIMP(김프)에서의 붓은 대부분 `일반 붓`입니다. `일반 붓`은 그레이스케일(grayscale) [픽스맵](./19-glossaryx-pixmap.md)입니다. 붓으로 이미지 위에 그려진 곳에 픽스맵의 자국이 보입니다.

(TODO 다음 문장을 재현하지 못함. 추가 조사 필요!)
When you paint using them, the current foreground color (as shown in the Color Area of the Toolbox) is substituted for black

### 일반 붓 만들기
`일반 붓`을 만들려면, 작은 회색 이미지를 준비합니다. 이 이미지를 `.gbr` 확장자로 저장합니다. 

(TODO gbr 파일 만드는 과정 영상추가)

`.gbr` 파일을 `기본 설정` → `폴더` → `붓`에 선택된 폴더 경로로 옮깁니다.

#### 90.2.9.1.a111. `기본 설정` → `폴더` → `붓` (windows) (우리말) - 선택된 붓 폴더
![90-02-09-foldersx-01-brushes(windows)(ko)-focus-selected_folder](https://github.com/wonder13662/gimp/assets/15767104/a9032345-5c9e-4bf3-b184-34a6de4bc5b9)

저장한 파일은 `Refresh brushes` 버튼을 눌러서 새로 추가한 `일반 붓`을 붓 대화상자에 띄웁니다.

(TODO 붓 대화상자에 띄우기 영상 추가하기)

### 색상 붓(Color brushes)
이 항목의 붓들은 붓 도구 대화상자에 색상 이미지로 표현됩니다. 이러한 붓으로 칠하면, 전경색이 아닌 붓 도구 대화상자에 나타낸 색으로 칠해집니다. 그 외의 동작은 일반 붓과 같습니다.

(TODO 색상 붓 채색 영상 추가하기)

### 색상 붓 만들기
To create such a brush: Create a small RGBA image. For this, open New Image, select RGB for image type and Transparent for fill type. Draw your image and first save it as an `.xcf` file to keep its properties. Then save it in `.gbr` format. Click on the Refresh button in Brush Dialog to get your brush without it being necessary to restart GIMP.

(TODO `.gbr` 추가하는 과정 영상 추가하기)

> ℹ️ 작은 정보
>
> 선택을 복사하거나 잘라넣기를 하면, 선택의 내용은 클립보드로 복사가 되며, 붓 대화상자의 첫번째 칸에 표시가 됩니다. 이를 붓처럼 칠하기 등의 작업에 이용할 수도 있습니다. (TODO 이 부분 이해가 잘 안간다. 파악 필요)

### 이미지 호스(image hose)/이미지 파이프(image pipe)
Brushes in this category can make more than one kind of mark on an image. They are indicated by small red triangles at the lower right corner of the brush symbol in the Brushes dialog. They are sometimes called "animated brush" because the marks changes as you trace out a brushstroke. In principle, image hose brushes can be very sophiscated, especially if you use a tablet, changing shape as a function of pressure, angle, etc. These possibilities have never really been exploited, however; and the ones supplied with GIMP are relatively simple (but still quite useful).

움직이는 붓(animated brush)을 만드는 예는 움직이는 붓에서 찾아볼 수 있습니다. (TODO 페이지 링크 연동하기)

### 파라매트릭 붓(parametric brush)
이 붓은 붓 편집기로 만듭니다. 붓 편집기는 간단한 인터페이스로 다양한 모양의 붓을 만들 수 있는 프로그램입니다. 파라매트릭 붓의 주요한 특징은 크기조정이 가능하다는 점입니다. `기본 설정 대화상자`에서 키 압력이나 마우스 휠의 움직에 따라 파라메트릭 붓의 크기를 조정할 수 있도록 설정할 수 있씁니다.

(TODO 붓 편집기 이미지 추가)
(TODO `기본 설정 대화상자`의 파라메트릭 붓 크기 조정 이미지 추가. 혹은 영상?)

### MyPaint 붓
GIMP-2.10 can use MyPaint brushes. Please refer to [MyPaint 붓](./14-03-08-mypaint-brush.md) for more information.

***

## 다른 페이지로 가기
[➡️ 다음: 7.7. 새 붓 추가하기](./07-07-adding-new-brushes.md)

[⬅️ 이전: 7.5.7. 경로와 SVG 파일](./07-05-07-paths-and-svg-files.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-brushes.html)
