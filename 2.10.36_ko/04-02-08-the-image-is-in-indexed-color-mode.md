# 4.2.8. 인덱스 모드에서의 이미지

## 4.2.8.1. 문제 확인
GIMP는 세가자의 컬러 모드를 사용합니다.[RGB(A), 그레이스케일 그리고 인덱스](./19-glossaryx-color-model.md)입니다. 인덱스 컬러 모드는 색상표(Colormap)을 사용합니다. 색상표에는 이미지에서 사용하는 모든 색상이 모여있습니다. 하지만 [색상 추출(color picker)](./14-05-03-color-picker.md) 도구로 RGB 색상을 선택할 수 있습니다.다시 말해, 인덱스의 색상표와는 다른 색으로도 칠하려고 한다면, 잘못된 색을 칠하게 될 수 있습니다.

## 4.2.8.2. 해결방법
가능한한 RGB 모드로 색을 칠하세요. 이미지 메뉴 바의 [모드(Mode)](./16-06-03-mode.md) 메뉴를 클릭해서 다른 컬러 모드를 선택하고 시험해볼 수 있습니다. 인덱스 모드로 작업해야 한다면 [색상표 대화상자](./15-02-04-colormap-dialog.md)에서 색깔을 고를 수 있습니다.

#### 그림 4.2.8.1.a1. 이미지 메뉴 바의 모드(Mode) 메뉴 위치
<img width="480" alt="그림 4.2.8.1.a1. 이미지 메뉴 바의 모드(Mode) 메뉴 위치" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/06ef5a31-51c6-498f-b884-37871b04781b">

#### 그림 4.2.8.1.a2. 이미지 메뉴 바의 색상표(Colormap) 대화상자 메뉴 위치
<img width="480" alt="그림 4.2.8.1.a2. 이미지 메뉴 바의 색상표(Colormap) 대화상자 메뉴 위치" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/67090b33-5b61-4315-8174-8cb1e09f5ba5">

#### 그림 4.2.8.1.a3. 색상표(Colormap) 대화상자
<img width="480" alt="그림 4.2.8.1.a3. 색상표(Colormap) 대화상자" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/f58cf8ea-5dfe-4f24-b8d0-864e8eb83bbf">

#### 영상 4.2.8.1.a4. 색상모드를 인덱스로 바꿔 색상표(Colormap) 대화상자 만들기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/e1b86121-19a0-4830-b091-c3a2db7e6d72"></video>

***

## 다른 페이지로 가기

[다음: 4.2.9. 붓, 지우개 또는 다른 도구로 작업한 효과가 보이지 않는 경우](./04-02-09-no-visible-effect-when-trying-to-use-a-brush-eraser-or-other-tool.md)

[이전: 4.2.7. 레이어 그룹에서 작업을 하려는 경우](./04-02-07-you-are-trying-to-act-on-a-layer-group.md)

[위: 4.2. GIMP(김프)가 멈추었을 때의 원인](./04-02-00-common-causes-of-gimp-non-responsiveness.md)

[최상위](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-stuck-indexed-mode.html)