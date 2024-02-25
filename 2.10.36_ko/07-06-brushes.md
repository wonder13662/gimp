# 7.6. 붓

## 붓 픽스맵
[픽스맵](./19-glossaryx-pixmap.md)은 픽셀의 색상값을 2차원 배열에 저장해서 이미지를 보여주는 방식을 말합니다. 붓은 칠을 하기 위한 픽스맵이거나 여러 픽스맵의 집합입니다. 붓 픽스맵은 이미지에 붓을 한번 칠했을 때의 이미지에 남는 자국을 나타냅니다.

붓 픽스맵에는 `붓 간격(brush spacing)`이라는 중요한 속성이 있습니다. `붓 간격`은 연속된 붓 자국 사이의 거리를 나타냅니다. 각각의 붓은 `붓 간격`에 대한 기본값이 있습니다. `붓 간격`은 붓 대화상자에서 `간격(spacing)`을 조정해서 바꿀 수 있습니다.

#### [그림 90.4.15.a121. 붓 대화상자 - 간격](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EA%B7%B8%EB%A6%BC-90415a121-%EB%B6%93-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EA%B0%84%EA%B2%A9)
[![90-04-15-brushes(w1080)-focus-spacing](https://github.com/wonder13662/gimp/assets/15767104/0d9d484a-d99e-4ef6-a9d6-700c4dfe0808)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EA%B7%B8%EB%A6%BC-90415a121-%EB%B6%93-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EA%B0%84%EA%B2%A9)

#### [그림 90.4.52.a101. `이미지를 붓으로 내보내기` 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-52-export_image_as_brush.html#%EA%B7%B8%EB%A6%BC-90452a101-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-%EB%B6%93%EC%9C%BC%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-52-export_image_as_brush(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/7f5a1766-b93a-438a-9092-0f99e5e169f6)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-52-export_image_as_brush.html#%EA%B7%B8%EB%A6%BC-90452a101-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-%EB%B6%93%EC%9C%BC%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

## GIMP(김프)의 칠하기 도구
GIMP(김프)에는 `칠하기 도구(paint tool)`가 있습니다. 채색 작업만이 아닌 지우기, 복사하기, 문지르기, 밝게하기, 어둡게하기 등의 작업까지 할 수 있습니다. 잉크 도구를 제외한 모든 `칠하기 도구`는 같은 붓을 사용합니다.

아래 이미지에서 밝게 표시된 도구들이 붓 대화상자의 붓을 사용합니다.

#### [그림 90.1.8.2.a3. 도구 - 칠하기 도구 (Windows) - 붓 대화상자를 사용하는 칠하기 도구](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-08-toolsx-02-paint_tools.html)
[![90-01-08-toolsx-02-paint_tools(windows)(1080)-highlight_paingtool_with_brush](https://github.com/wonder13662/gimp/assets/15767104/575ab6ad-1299-4594-b2d8-3dbeb9537763)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-08-toolsx-02-paint_tools.html)

#### [그림 90.3.a121. 붓 대화상자를 사용하는 도구상자 아이콘](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-00-toolbox.html#%EA%B7%B8%EB%A6%BC-903a121-%EB%B6%93-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%8F%84%EA%B5%AC%EC%83%81%EC%9E%90-%EC%95%84%EC%9D%B4%EC%BD%98)
[![toolbox-no_tool_group(ko)(windows)-highlight-painting_tool_with_brush](https://github.com/wonder13662/gimp/assets/15767104/635881f0-263f-4d76-8160-08b88c515945)](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-00-toolbox.html#%EA%B7%B8%EB%A6%BC-903a121-%EB%B6%93-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%8F%84%EA%B5%AC%EC%83%81%EC%9E%90-%EC%95%84%EC%9D%B4%EC%BD%98)

#### [그림 90.4.15.a131. 붓 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EA%B7%B8%EB%A6%BC-90415a131-%EB%B6%93-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-15-brushes(windows)(ko)(slim)](https://github.com/wonder13662/gimp/assets/15767104/1c2606df-09ba-415e-94cd-f00dae3bf670)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EA%B7%B8%EB%A6%BC-90415a131-%EB%B6%93-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

## 붓 긋기(Brush stroke)
마우스 버튼을 누른채로 마우스 포인터를 이미지 위로 움직이면 "붓 긋기"를 할 수 있습니다. 그려진 길을 따라 일정한 간격으로 붓자국이 남습니다. 여기에는 붓과 칠하기 도구의 설정이 영향을 미칩니다.

#### [영상 90.3.2.23.a113. 그리기 붓(Paintbrush)의 붓 긋기(Brush stroke)](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-02-tool_iconx-23-paintbrush.html#%EC%98%81%EC%83%81-903223a113-%EA%B7%B8%EB%A6%AC%EA%B8%B0-%EB%B6%93paintbrush%EC%9D%98-%EB%B6%93-%EA%B8%8B%EA%B8%B0brush-stroke)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/f71f220a-c5e6-4262-afa0-f1dd7e1e2fde"></video>

붓의 간격의 경우에는 붓의 기본 간격 설정이 기본값으로 영향을 미칩니다.

#### [그림 90.4.52.a101. `이미지를 붓으로 내보내기` 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-52-export_image_as_brush.html#%EA%B7%B8%EB%A6%BC-90452a101-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-%EB%B6%93%EC%9C%BC%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-52-export_image_as_brush(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/7f5a1766-b93a-438a-9092-0f99e5e169f6)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-52-export_image_as_brush.html#%EA%B7%B8%EB%A6%BC-90452a101-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-%EB%B6%93%EC%9C%BC%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

그 외에도 붓 도구옵션의 간격 설정, 붓 대화상자의 간격 설정이 바뀌면 기본값보다 우선순위가 높게 적용됩니다.

## 붓 선택하기
붓은 [붓 대화상자](./15-03-02-brushes-dialog.md)에서 아이콘을 클릭해서 선택할 수 있습니다.

#### [영상 90.4.15.a141. 붓 대화상자 (Windows) (우리말) - 붓 선택하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a141-%EB%B6%93-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EB%B6%93-%EC%84%A0%ED%83%9D%ED%95%98%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/93612d28-ed12-4590-bafe-f64469f081a3"></video>

## 지금 쓰고 있는 붓 확인하기
GIMP(김프)에서 지금 쓰고 있는 붓은 도구상자의 붓/무늬/그라디언트 영역과 도구 옵션의 `붓` 항목에서 확인할 수 있습니다. 

#### [그림 90.4.15.a142. 지금 쓰고 있는 붓 확인하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EA%B7%B8%EB%A6%BC-90415a142-%EC%A7%80%EA%B8%88-%EC%93%B0%EA%B3%A0-%EC%9E%88%EB%8A%94-%EB%B6%93-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0)
[![90-03-02-23-paint_brush(windows)(ko)-current_brush](https://github.com/wonder13662/gimp/assets/15767104/d520907a-0666-465c-95d7-fc302fb7b947)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EA%B7%B8%EB%A6%BC-90415a142-%EC%A7%80%EA%B8%88-%EC%93%B0%EA%B3%A0-%EC%9E%88%EB%8A%94-%EB%B6%93-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0)

## 붓 대화상자 활성화하기
도구상자의 붓/무늬/그라디언트 영역의 붓 모양을 클릭하면 [붓 대화상자](./15-03-02-brushes-dialog.md)를 활성화할 수 있습니다.

#### [영상 90.4.15.a143. 붓 대화상자 활성화하기 - 도구상자의 붓/무늬/그라디언트 영역의 붓 클릭](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a143-%EB%B6%93-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-%ED%99%9C%EC%84%B1%ED%99%94%ED%95%98%EA%B8%B0---%EB%8F%84%EA%B5%AC%EC%83%81%EC%9E%90%EC%9D%98-%EB%B6%93%EB%AC%B4%EB%8A%AC%EA%B7%B8%EB%9D%BC%EB%94%94%EC%96%B8%ED%8A%B8-%EC%98%81%EC%97%AD%EC%9D%98-%EB%B6%93-%ED%81%B4%EB%A6%AD)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/16c8b4fc-f86f-4f08-aa58-fd37dd7fccc1"></video>

## 기본 붓과 붓 추가하기
GIMP(김프)를 처음 설치하면, 기본 붓이 함께 설치되어 있습니다. 그리고 직접 새로운 붓을 만들수도 있고, 다운로드받아 추가할 수도 있습니다.

## 붓의 종류 알아보기
GIMP(김프)에서 다양한 종류의 붓을 사용할 수 있습니다. 모든 붓은 같은 방식으로 씁니다. 아래에서 사용가능한 붓의 종류를 확인해보세요.

### 일반 붓(Ordinary brushes)
GIMP(김프)에서의 붓은 대부분 `일반 붓`입니다. `일반 붓`은 그레이스케일(grayscale) [픽스맵](./19-glossaryx-pixmap.md)입니다. 붓으로 이미지 위에 그려진 곳에 픽스맵의 자국이 보입니다.

[comment]: <> (TODO 다음 문장을 재현하지 못함. 추가 조사 필요!)
[comment]: <> (When you paint using them, the current foreground color \(as shown in the Color Area of the Toolbox\) is substituted for black)

### 일반 붓 만들기
`일반 붓`을 만들려면, 작은 크기의 흑백 이미지를 준비합니다. 

#### [그림 90.4.15.a151. 일반붓 만들기 - 흑백 이미지](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EA%B7%B8%EB%A6%BC-90415a151-%EC%9D%BC%EB%B0%98%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---%ED%9D%91%EB%B0%B1-%EC%9D%B4%EB%AF%B8%EC%A7%80)
[![ordinary_brush-pixmap](https://github.com/wonder13662/gimp/assets/15767104/4c9eb9f3-b404-4804-8d58-07a490da11ac)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EA%B7%B8%EB%A6%BC-90415a151-%EC%9D%BC%EB%B0%98%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---%ED%9D%91%EB%B0%B1-%EC%9D%B4%EB%AF%B8%EC%A7%80)

이 이미지를 `.gbr` 확장자로 저장합니다. 

#### [영상 90.4.15.a152. 일반붓 만들기 - 흑백 이미지를 `.gbr` 파일로 내보내기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a152-%EC%9D%BC%EB%B0%98%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---%ED%9D%91%EB%B0%B1-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-gbr-%ED%8C%8C%EC%9D%BC%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/88fa3ae4-6970-4ed4-a1ed-32aa26eb56db"></video>

#### [그림 90.4.52.a101. `이미지를 붓으로 내보내기` 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-52-export_image_as_brush.html#%EA%B7%B8%EB%A6%BC-90452a101-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-%EB%B6%93%EC%9C%BC%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-52-export_image_as_brush(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/7f5a1766-b93a-438a-9092-0f99e5e169f6)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-52-export_image_as_brush.html#%EA%B7%B8%EB%A6%BC-90452a101-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-%EB%B6%93%EC%9C%BC%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

`.gbr` 파일을 `기본 설정` → `폴더` → `붓`에 선택된 "붓 폴더" 경로로 옮깁니다. 저장한 파일은 `Refresh brushes` 버튼을 눌러서 새로 추가한 `일반 붓`을 붓 대화상자에 띄웁니다.

#### [그림 90.2.9.1.a111. `기본 설정` → `폴더` → `붓` (windows) (우리말) - 선택된 붓 폴더](https://wonder13662.github.io/gimp/2.10.36_ko/90-02-09-foldersx-01-brushes.html#%EA%B7%B8%EB%A6%BC-90291a111-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95--%ED%8F%B4%EB%8D%94--%EB%B6%93-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%84%A0%ED%83%9D%EB%90%9C-%EB%B6%93-%ED%8F%B4%EB%8D%94)
[![90-02-09-foldersx-01-brushes(windows)(ko)-focus-selected_folder](https://github.com/wonder13662/gimp/assets/15767104/a9032345-5c9e-4bf3-b184-34a6de4bc5b9)](https://wonder13662.github.io/gimp/2.10.36_ko/90-02-09-foldersx-01-brushes.html#%EA%B7%B8%EB%A6%BC-90291a111-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95--%ED%8F%B4%EB%8D%94--%EB%B6%93-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%84%A0%ED%83%9D%EB%90%9C-%EB%B6%93-%ED%8F%B4%EB%8D%94)

#### [영상 90.2.9.1.a112. `기본 설정` → `폴더` → `붓` (windows) (우리말) - 선택된 붓 폴더를 파일탐색기로 열기](https://wonder13662.github.io/gimp/2.10.36_ko/90-02-09-foldersx-01-brushes.html#%EC%98%81%EC%83%81-90291a112-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95--%ED%8F%B4%EB%8D%94--%EB%B6%93-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%84%A0%ED%83%9D%EB%90%9C-%EB%B6%93-%ED%8F%B4%EB%8D%94%EB%A5%BC-%ED%8C%8C%EC%9D%BC%ED%83%90%EC%83%89%EA%B8%B0%EB%A1%9C-%EC%97%B4%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/e16a09ae-d1fe-46a9-915c-4eb28bc95558"></video>

#### [영상 90.4.15.a153. 일반붓 만들기 - `.gbr` 파일을 불러오기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a153-%EC%9D%BC%EB%B0%98%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---gbr-%ED%8C%8C%EC%9D%BC%EC%9D%84-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/40fdc204-f9d5-4cce-b7dd-289c00a9cbf3"></video>

이제 새로 만든 붓으로 칠해보겠습니다. 여러가지 색상을 바꿔가며 칠할 수도 있습니다.

#### [영상 90.4.15.a154. 일반붓 만들기 - 새로운 일반붓으로 칠해보기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a154-%EC%9D%BC%EB%B0%98%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---%EC%83%88%EB%A1%9C%EC%9A%B4-%EC%9D%BC%EB%B0%98%EB%B6%93%EC%9C%BC%EB%A1%9C-%EC%B9%A0%ED%95%B4%EB%B3%B4%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/c4e5e43b-c351-43d1-9e24-a61d786a6e55"></video>

### 색상 붓(Color brushes)
이 항목의 붓들은 붓 도구 대화상자에 색상 이미지로 표현됩니다. 이러한 붓으로 칠하면, 전경색이 아닌 붓 도구 대화상자에 나타낸 색으로 칠해집니다. 그 외의 동작은 일반 붓과 같습니다.

[comment]: <> (TODO 색상 붓 채색 영상 추가하기)

### 색상 붓 만들기
색상 붓을 만들기 위해서 우선 작은 RGBA 이미지를 준비합니다. 새 이미지를 열고, 고급 설정의 색상 모드(Color space)를 `RGB`로 합니다. 그리고 Fill with를 투명(Transparent)로 설정합니다.

#### [그림 90.4.37.a111. `새 이미지 만들기` 대화상자 (Windows) (우리말) - 색상붓을 만들기 위한 설정](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-37-create_a_new_image.html#%EA%B7%B8%EB%A6%BC-90437a111-%EC%83%88-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%83%89%EC%83%81%EB%B6%93%EC%9D%84-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EC%9C%84%ED%95%9C-%EC%84%A4%EC%A0%95)
[![90-04-37-create_a_new_image(windows)(ko)-color_brush_setting-focus](https://github.com/wonder13662/gimp/assets/15767104/17dfd4b8-7373-4a92-838a-a853c07f1b44)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-37-create_a_new_image.html#%EA%B7%B8%EB%A6%BC-90437a111-%EC%83%88-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%83%89%EC%83%81%EB%B6%93%EC%9D%84-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EC%9C%84%ED%95%9C-%EC%84%A4%EC%A0%95)

이미지를 그리고, 작업한 이미지의 모든 속성을 `.xcf` 파일로 저장합니다.

#### [그림 90.4.15.a161. 색상붓 만들기 - RGBA 이미지](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EA%B7%B8%EB%A6%BC-90415a161-%EC%83%89%EC%83%81%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---rgba-%EC%9D%B4%EB%AF%B8%EC%A7%80)
[![color_brush](https://github.com/wonder13662/gimp/assets/15767104/31d1859a-794e-4674-9142-0c331d2f9de0)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EA%B7%B8%EB%A6%BC-90415a161-%EC%83%89%EC%83%81%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---rgba-%EC%9D%B4%EB%AF%B8%EC%A7%80)

그리고 그 다음에 `.gbr` 파일로 내보냅니다.

#### [영상 90.4.15.a162. 색상붓 만들기 - RGBA 이미지를 `.gbr` 파일로 내보내기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a162-%EC%83%89%EC%83%81%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---rgba-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-gbr-%ED%8C%8C%EC%9D%BC%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/dc1297a0-7e4b-47a3-b60a-21f90d9da2fe"></video>

`.gbr` 파일을 옮길 `기본 설정` → `폴더` → `붓`에 선택된 "붓 폴더" 경로를 파일 탐색기로 엽니다.

#### [그림 90.2.9.1.a111. `기본 설정` → `폴더` → `붓` (windows) (우리말) - 선택된 붓 폴더](https://wonder13662.github.io/gimp/2.10.36_ko/90-02-09-foldersx-01-brushes.html#%EA%B7%B8%EB%A6%BC-90291a111-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95--%ED%8F%B4%EB%8D%94--%EB%B6%93-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%84%A0%ED%83%9D%EB%90%9C-%EB%B6%93-%ED%8F%B4%EB%8D%94)
[![90-02-09-foldersx-01-brushes(windows)(ko)-focus-selected_folder](https://github.com/wonder13662/gimp/assets/15767104/a9032345-5c9e-4bf3-b184-34a6de4bc5b9)](https://wonder13662.github.io/gimp/2.10.36_ko/90-02-09-foldersx-01-brushes.html#%EA%B7%B8%EB%A6%BC-90291a111-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95--%ED%8F%B4%EB%8D%94--%EB%B6%93-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%84%A0%ED%83%9D%EB%90%9C-%EB%B6%93-%ED%8F%B4%EB%8D%94)

#### [영상 90.2.9.1.a112. `기본 설정` → `폴더` → `붓` (windows) (우리말) - 선택된 붓 폴더를 파일탐색기로 열기](https://wonder13662.github.io/gimp/2.10.36_ko/90-02-09-foldersx-01-brushes.html#%EC%98%81%EC%83%81-90291a112-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95--%ED%8F%B4%EB%8D%94--%EB%B6%93-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%84%A0%ED%83%9D%EB%90%9C-%EB%B6%93-%ED%8F%B4%EB%8D%94%EB%A5%BC-%ED%8C%8C%EC%9D%BC%ED%83%90%EC%83%89%EA%B8%B0%EB%A1%9C-%EC%97%B4%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/e16a09ae-d1fe-46a9-915c-4eb28bc95558"></video>

`.gbr` 파일을 `기본 설정` → `폴더` → `붓`에 선택된 "붓 폴더" 경로로 옮깁니다. 새로 저장한 파일은 `Refresh brushes` 버튼을 눌러서 새로 추가한 `색상 붓`을 붓 대화상자에 띄웁니다.

#### [영상 90.4.15.a163. 색상붓 만들기 - `.gbr` 파일을 불러오기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a163-%EC%83%89%EC%83%81%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---gbr-%ED%8C%8C%EC%9D%BC%EC%9D%84-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/012bc61a-d955-42d3-99fa-d4b9297cfefa"></video>

이제 새로 만든 붓으로 칠해보겠습니다. 전경색과는 상관없이 색상 붓의 자국이 가지고 있는 색상만이 표시됩니다.

#### [영상 90.4.15.a164. 색상붓 만들기 - 색상붓으로 칠하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a164-%EC%83%89%EC%83%81%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---%EC%83%89%EC%83%81%EB%B6%93%EC%9C%BC%EB%A1%9C-%EC%B9%A0%ED%95%98%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/7162b436-f9c5-4b27-a706-9a7d8e59f383"></video>

### 클립보드 마스크, 클립보드 이미지
선택을 복사하거나 잘라넣기를 하면, 선택의 내용은 클립보드로 복사가 되며, 붓 대화상자의 첫번째(클립보드 마스크)와 두번째(클립보드 이미지) 칸에 표시가 됩니다.

#### [그림 90.4.15.a171. 클립보드 마스크, 클립보드 이미지 만들기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EA%B7%B8%EB%A6%BC-90415a171-%ED%81%B4%EB%A6%BD%EB%B3%B4%EB%93%9C-%EB%A7%88%EC%8A%A4%ED%81%AC-%ED%81%B4%EB%A6%BD%EB%B3%B4%EB%93%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0)
[![90-04-15-brushes(windows)(ko)-clipboard_mask_n_clipboard_image](https://github.com/wonder13662/gimp/assets/15767104/302a8b30-c573-4bc4-b512-08e93d821f87)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EA%B7%B8%EB%A6%BC-90415a171-%ED%81%B4%EB%A6%BD%EB%B3%B4%EB%93%9C-%EB%A7%88%EC%8A%A4%ED%81%AC-%ED%81%B4%EB%A6%BD%EB%B3%B4%EB%93%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0)

#### [영상 90.4.15.a172. 클립보드 마스크, 클립보드 이미지 만들기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a172-%ED%81%B4%EB%A6%BD%EB%B3%B4%EB%93%9C-%EB%A7%88%EC%8A%A4%ED%81%AC-%ED%81%B4%EB%A6%BD%EB%B3%B4%EB%93%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/eb75db8d-7c74-40a2-a398-26c67299874c"></video>

클립보드 마스크는 `일반 붓`이므로 전경색에 따라 칠하는 자국의 색이 달라집니다.

#### [영상 90.4.15.a173. 클립보드 마스크 칠하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a173-%ED%81%B4%EB%A6%BD%EB%B3%B4%EB%93%9C-%EB%A7%88%EC%8A%A4%ED%81%AC-%EC%B9%A0%ED%95%98%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/7e116df4-d25e-48bc-8465-16d10da6b676"></video>

클립보드 이미지는 `색상 붓`이므로 전경색이 변하더라도 영향을 받지 않습니다.

#### [영상 90.4.15.a174. 클립보드 이미지 칠하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a174-%ED%81%B4%EB%A6%BD%EB%B3%B4%EB%93%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B9%A0%ED%95%98%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/ff7726fb-79f6-46ff-a98a-10b13f4763a1"></video>

### 이미지 호스(image hose)/이미지 파이프(image pipe)
이 종류의 붓은 이미지에 칠할 때, 여러가지 자국을 남길 수 있습니다. 이미지 호스와 이미지 파이프는 `붓 대화상자`의 붓 이미지의 오른쪽 아래에 빨간 삼각형 표시가 있습니다. 

#### [그림 90.4.15.a181. 붓 대화상자의 이미지 호스 붓(오른쪽 아래의 빨간 삼각형 표시)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EA%B7%B8%EB%A6%BC-90415a181-%EB%B6%93-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90%EC%9D%98-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%98%B8%EC%8A%A4-%EB%B6%93%EC%98%A4%EB%A5%B8%EC%AA%BD-%EC%95%84%EB%9E%98%EC%9D%98-%EB%B9%A8%EA%B0%84-%EC%82%BC%EA%B0%81%ED%98%95-%ED%91%9C%EC%8B%9C)
![90-04-15-brushes(windows)(en)(slim)-highlight-image_hose_brush](https://github.com/wonder13662/gimp/assets/15767104/d0f12bea-887e-4f2f-93f8-f6cfa4117e58)

붓을 그을 때마다 자국이 달라지기 때문에 움직이는 붓(animated brush)이라고 부르기도 합니다. 아래 영상을 보시면, 매번 붓으로 그릴 때마다 자국의 모양이 달라지는 것을 확인할 수 있습니다.

#### [영상 90.4.15.a182. 붓 대화상자의 이미지 호스 붓으로 칠하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EA%B7%B8%EB%A6%BC-90415a181-%EB%B6%93-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90%EC%9D%98-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%98%B8%EC%8A%A4-%EB%B6%93%EC%98%A4%EB%A5%B8%EC%AA%BD-%EC%95%84%EB%9E%98%EC%9D%98-%EB%B9%A8%EA%B0%84-%EC%82%BC%EA%B0%81%ED%98%95-%ED%91%9C%EC%8B%9C)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/b02ace8a-6100-4f26-997e-302d3420912d"></video>

원칙적으로는 `이미지 호스 붓`은 펜 태블릿을 사용하는 경우에 압력, 각도에 따라 모영을 바꾸면 매우 복잡해질 수 있습니다. 하지만 GIMP(김프)에서 자체적으로 제공하는 `이미지 호스 붓`은 상대적으로 간단하고 쓸모가 많습니다.

움직이는 붓(animated brush)을 만드는 예는 움직이는 붓에서 찾아볼 수 있습니다. 

[comment]: <> (TODO 페이지 링크 연동하기)

### 파라매트릭 붓(parametric brush)
이 붓은 붓 편집기로 만듭니다. 붓 편집기는 간단한 인터페이스로 다양한 모양의 붓을 만들 수 있는 프로그램입니다. 파라매트릭 붓의 주요한 특징은 크기조정이 가능하다는 점입니다. `기본 설정 대화상자`에서 키 압력이나 마우스 휠의 움직에 따라 파라메트릭 붓의 크기를 조정할 수 있도록 설정할 수 있습니다.

#### [그림 90.4.53.a101. `붓 편집기` 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-53-brush_editor.html#%EA%B7%B8%EB%A6%BC-90453a101-%EB%B6%93-%ED%8E%B8%EC%A7%91%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-53-brush_editor(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/4693b288-1d33-4d6d-a3bd-c59094824432)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-53-brush_editor.html#%EA%B7%B8%EB%A6%BC-90453a101-%EB%B6%93-%ED%8E%B8%EC%A7%91%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

[다른 운영체제와 언어의 `붓 편집기` 대화상자 확인하기](./90-04-53-brush_editor.md)

[comment]: <> (TODO `기본 설정 대화상자`의 파라메트릭 붓 크기 조정 이미지 추가. 혹은 영상? - 실제로 제어가 쉽지 않음)

### MyPaint 붓
GIMP(김프) 2.10부터 MyPaint 붓을 쓸 수 있습니다. 좀 더 자세한 정보는 [MyPaint 붓](./14-03-08-mypaint-brush.md)를 참고해주세요.

***

## 다른 페이지로 가기
[➡️ 다음: 7.7. 새 붓 추가하기](./07-07-adding-new-brushes.md)

[⬅️ 이전: 7.5.7. 경로와 SVG 파일](./07-05-07-paths-and-svg-files.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-brushes.html)
