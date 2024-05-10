# 7.6. 붓

## 붓 픽스맵
[픽스맵](./19-glossaryx-pixmap.md)은 픽셀의 색상값을 2차원 배열에 저장해서 이미지를 보여주는 방식을 말합니다. 붓은 칠을 하기 위한 픽스맵이거나 여러 픽스맵의 집합입니다. 붓 픽스맵은 이미지에 붓을 한번 칠했을 때의 이미지에 남는 자국을 나타냅니다.

붓 픽스맵에는 `붓 간격(brush spacing)`이라는 중요한 속성이 있습니다. `붓 간격`은 연속된 붓 자국 사이의 거리를 나타냅니다. 각각의 붓은 `붓 간격`에 대한 기본값이 있습니다. `붓 간격`은 붓 대화상자에서 `간격(spacing)`을 조정해서 바꿀 수 있습니다.

<a id="90-04-15-a121"></a>

#### [그림 90.4.15.a121. 붓 대화상자 - 간격](./90-04-15-brushes.md#90-04-15-a121)
![90-04-15-a121](https://github.com/wonder13662/gimp/assets/15767104/0d9d484a-d99e-4ef6-a9d6-700c4dfe0808)

<a id="90-04-52-a101-1"></a>

#### [그림 90.4.52.a101. `이미지를 붓으로 내보내기` 대화상자 (Windows) (우리말)](./90-04-52-export_image_as_brush.md#90-04-52-a101)
![90-04-52-a101](https://github.com/wonder13662/gimp/assets/15767104/7f5a1766-b93a-438a-9092-0f99e5e169f6)

[다른 운영체제와 언어의 `이미지를 붓으로 내보내기` 대화상자 확인하기](./90-04-52-export_image_as_brush.md#90-04-52-a102)

## GIMP(김프)의 그리기 도구
GIMP(김프)에는 `그리기 도구(paint tool)`가 있습니다. 채색 작업만이 아닌 지우기, 복사하기, 문지르기, 밝게하기, 어둡게하기 등의 작업까지 할 수 있습니다. 잉크 도구를 제외한 모든 `그리기 도구`는 같은 붓을 사용합니다.

아래 이미지에서 밝게 표시된 도구들이 붓 대화상자의 붓을 사용합니다.

<a id="90-01-08-02-a3"></a>

#### [그림 90.1.8.2.a3. 도구 - 칠하기 도구 (Windows) - 붓 대화상자를 사용하는 그리기 도구](./90-01-08-02-00-paint_tools.md#90-01-08-02-a3)
![90-01-08-toolsx-02-paint_tools(windows)(1080)-highlight_paingtool_with_brush](https://github.com/wonder13662/gimp/assets/15767104/575ab6ad-1299-4594-b2d8-3dbeb9537763)

<a id="90-03-a121"></a>

#### [그림 90.3.a121. 붓 대화상자를 사용하는 도구상자 아이콘](./90-03-00-toolbox.md#90-03-a121)
![90-03-a121](https://github.com/wonder13662/gimp/assets/15767104/3d227356-1a44-4a9b-95be-7912d864e348)

<a id="90-04-15-a131"></a>

#### [그림 90.4.15.a131. 붓 대화상자 (Windows) (우리말)](./90-04-15-brushes.md#90-04-15-a131)
![90-04-15-a131](https://github.com/wonder13662/gimp/assets/15767104/1c2606df-09ba-415e-94cd-f00dae3bf670)

[다른 운영체제와 언어의 `붓` 대화상자 확인하기](./90-04-15-brushes.md#90-04-15-a132)

## 붓 긋기(Brush stroke)
마우스 버튼을 누른채로 마우스 포인터를 이미지 위로 움직이면 "붓 긋기"를 할 수 있습니다. 그려진 길을 따라 일정한 간격으로 붓자국이 남습니다. 여기에는 붓과 그리기 도구의 설정이 영향을 미칩니다.

<a id="90-03-02-23-a113"></a>

#### [영상 90.3.2.23.a113. 그리기 붓(Paintbrush)의 붓 긋기(Brush stroke)](./90-03-02-23-paintbrush.md#90-03-02-23-a113)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/f71f220a-c5e6-4262-afa0-f1dd7e1e2fde"></video>

붓의 간격의 경우에는 붓의 기본 간격 설정이 기본값으로 영향을 미칩니다.

<a id="90-04-52-a101-2"></a>

#### [그림 90.4.52.a101. `이미지를 붓으로 내보내기` 대화상자 (Windows) (우리말)](./90-04-52-export_image_as_brush.md#90-04-52-a101)
![90-04-52-a101](https://github.com/wonder13662/gimp/assets/15767104/7f5a1766-b93a-438a-9092-0f99e5e169f6)

[다른 운영체제와 언어의 `이미지를 붓으로 내보내기` 대화상자 확인하기](./90-04-52-export_image_as_brush.md#90-04-52-a102)

그 외에도 붓 도구옵션의 간격 설정, 붓 대화상자의 간격 설정이 바뀌면 기본값보다 우선횡렬가 높게 적용됩니다.

## 붓 선택하기
붓은 [붓 대화상자](./15-03-02-brushes-dialog.md)에서 아이콘을 클릭해서 선택할 수 있습니다.

<a id="90-04-15-a141"></a>

#### [영상 90.4.15.a141. 붓 대화상자 (Windows) (우리말) - 붓 선택하기](./90-04-15-brushes.md#90-04-15-a141)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/93612d28-ed12-4590-bafe-f64469f081a3"></video>

## 지금 쓰고 있는 붓 확인하기
GIMP(김프)에서 지금 쓰고 있는 붓은 도구상자의 붓/무늬/그라디언트 영역과 도구 옵션의 `붓` 항목에서 확인할 수 있습니다. 

<a id="90-04-15-a142"></a>

#### [그림 90.4.15.a142. 지금 쓰고 있는 붓 확인하기](./90-04-15-brushes.md#90-04-15-a142)
![90-04-15-a142](https://github.com/wonder13662/gimp/assets/15767104/d520907a-0666-465c-95d7-fc302fb7b947)

## 붓 대화상자 활성화하기
도구상자의 붓/무늬/그라디언트 영역의 붓 모양을 클릭하면 [붓 대화상자](./15-03-02-brushes-dialog.md)를 활성화할 수 있습니다.

<a id="90-04-15-a143"></a>

#### [영상 90.4.15.a143. 붓 대화상자 활성화하기 - 도구상자의 붓/무늬/그라디언트 영역의 붓 클릭](./90-04-15-brushes.md#90-04-15-a143)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/16c8b4fc-f86f-4f08-aa58-fd37dd7fccc1"></video>

## 기본 붓과 붓 추가하기
GIMP(김프)를 처음 설치하면, 기본 붓이 함께 설치되어 있습니다. 그리고 직접 새로운 붓을 만들수도 있고, 다운로드받아 추가할 수도 있습니다.

## 붓의 종류 알아보기
GIMP(김프)에서 다양한 종류의 붓을 사용할 수 있습니다. 모든 붓은 같은 방식으로 씁니다. 아래에서 사용가능한 붓의 종류를 확인해보세요.

[7.6.1. 일반 붓(Ordinary brushes)](./07-06-01-ordinary_brush.md)

[7.6.2. 색상 붓(Color brushes)](./07-06-02-color_brush.md)

[7.6.3. 클립보드 붓(Clipboard Brush)](./07-06-03-clipboard_brush.md)

[7.6.4. 이미지 호스(image hose)/이미지 파이프(image pipe)](./07-06-04-gih_brush.md)

[7.6.5. 파라매트릭 붓(parametric brush)](./07-06-05-paramatric_brush.md)

[7.6.6. MyPaint 붓](./07-06-06-mypaint_brush.md)

***

## 다른 페이지로 가기
[➡️ 다음: 7.6.1. 일반 붓(Ordinary brushes)](./07-06-01-ordinary_brush.md)

[⬅️ 이전: 7.5.7. 경로와 SVG 파일](./07-05-07-paths-and-svg-files.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-brushes.html)
