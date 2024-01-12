# 4.2.7. 레이어 그룹에서 작업을 하려는 경우

#### 그림 4.6. 레이어 그룹 선택
<img width="222" alt="그림 4.6. 레이어 그룹 선택" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/b3ec520c-c895-400a-948c-2eeeb8e18422">

레이어 대화상자 안에서 레이어 그룹이 선택된 모습

## 4.2.7.1. 문제 확인
[레이어 대화상자](./15-02-01-layers-dialog.md)에서 [레이어 그룹](./08-05-layer-groups.md)이 활성화되었는지 확인해보세요. 레이어 그룹의 이름의 왼쪽에는 '+' 또는 '-' 기호가 있습니다. 레이어 그룹 위에서는 대부분의 기능이 동작하지 않습니다. 이 경우, "레이어 그룹을 칠할 수 없습니다(Cannot paint on layer groups.)" 에러 메시지가 보여집니다.

#### 영상 4.2.7.1.a1. 레이어 그룹에 직접 작업시, 에러 메시지 노출
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/99cbfad6-a162-444c-b4e7-2a0c721952b1"></video>

## 4.2.6.2. 해결방법
문제를 해결하기 위해서는 레이어 그룹이 아닌 레이어를 활성화시켜야 합니다. 레이어 그룹에 '+' 기호가 보인다면, 레이어 그룹이 접혀있는 상태입니다. '+' 기호를 클릭해서 레이어 그룹을 펼치세요. 레이어 그룹 안의 각각의 레이어들을 확인할 수 있습니다. 이 중 작업해야 할 레이어를 선택하여 작업을 진행하면 됩니다.

#### 영상 4.2.6.2.a1. 레이어 그룹 안의 레이어를 선택하여 작업
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/aedf4dd2-d140-46d2-949c-ccf748a77bfd"></video>

***

## 다른 페이지로 가기

[다음: 4.2.8. 인덱스 모드에서의 이미지](./04-02-08-the-image-is-in-indexed-color-mode.md)

[이전: 4.2.6. 레이어 바깥쪽에서 작업을 하려는 경우](./04-02-06-you-are-trying-to-act-outside-the-layer.md)

[부모: 4.2. GIMP(김프)가 멈추었을 때의 원인](./04-02-00-common-causes-of-gimp-non-responsiveness.md)

[최상위](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-stuck-layer-group.html)
