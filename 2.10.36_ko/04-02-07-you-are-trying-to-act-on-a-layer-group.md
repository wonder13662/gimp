# 4.2.7. 레이어 그룹에서 작업을 하려는 경우

#### [그림 90.4.3.2.a41. 레이어 그룹 선택](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-03-layersx-02-layer_group.html#%EA%B7%B8%EB%A6%BC-90432a41-%EB%A0%88%EC%9D%B4%EC%96%B4-%EA%B7%B8%EB%A3%B9-%EC%84%A0%ED%83%9D)
[![그림 90.4.3.a14. 레이어 그룹 선택](https://github.com/wonder13662/gimp/assets/15767104/69c1509d-c8a3-4680-8987-4298afc51f90)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-03-layersx-02-layer_group.html#%EA%B7%B8%EB%A6%BC-90432a41-%EB%A0%88%EC%9D%B4%EC%96%B4-%EA%B7%B8%EB%A3%B9-%EC%84%A0%ED%83%9D)

레이어 대화상자 안에서 레이어 그룹이 선택된 모습

## 4.2.7.1. 문제 확인
[레이어 대화상자](./15-02-01-layers-dialog.md)에서 [레이어 그룹](./08-05-layer-groups.md)이 활성화되었는지 확인해보세요. 레이어 그룹의 이름의 왼쪽에는 '+' 또는 '-' 기호가 있습니다. 레이어 그룹 위에서는 대부분의 기능이 동작하지 않습니다. 이 경우, "레이어 그룹을 칠할 수 없습니다(Cannot paint on layer groups.)" 에러 메시지가 보여집니다.

#### [영상 90.4.3.2.a51. 레이어 그룹에 직접 작업시, 에러 메시지 노출](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-03-layersx-02-layer_group.html#%EC%98%81%EC%83%81-90432a51-%EB%A0%88%EC%9D%B4%EC%96%B4-%EA%B7%B8%EB%A3%B9%EC%97%90-%EC%A7%81%EC%A0%91-%EC%9E%91%EC%97%85%EC%8B%9C-%EC%97%90%EB%9F%AC-%EB%A9%94%EC%8B%9C%EC%A7%80-%EB%85%B8%EC%B6%9C)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/99cbfad6-a162-444c-b4e7-2a0c721952b1"></video>

## 4.2.7.2. 해결방법
문제를 해결하기 위해서는 레이어 그룹이 아닌 레이어를 활성화시켜야 합니다. 레이어 그룹에 '+' 기호가 보인다면, 레이어 그룹이 접혀있는 상태입니다. '+' 기호를 클릭해서 레이어 그룹을 펼치세요. 레이어 그룹 안의 각각의 레이어들을 확인할 수 있습니다. 이 중 작업해야 할 레이어를 선택하여 작업을 진행하면 됩니다.

#### [영상 90.4.3.2.a61. 레이어 그룹 안의 레이어를 선택하여 작업](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-03-layersx-02-layer_group.html#%EC%98%81%EC%83%81-90432a61-%EB%A0%88%EC%9D%B4%EC%96%B4-%EA%B7%B8%EB%A3%B9-%EC%95%88%EC%9D%98-%EB%A0%88%EC%9D%B4%EC%96%B4%EB%A5%BC-%EC%84%A0%ED%83%9D%ED%95%98%EC%97%AC-%EC%9E%91%EC%97%85)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/aedf4dd2-d140-46d2-949c-ccf748a77bfd"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 4.2.8. 인덱스 모드에서의 이미지](./04-02-08-the-image-is-in-indexed-color-mode.md)

[⬅️ 이전: 4.2.6. 레이어 바깥쪽에서 작업을 하려는 경우](./04-02-06-you-are-trying-to-act-outside-the-layer.md)

[⬆️ 위: 4.2. GIMP(김프)가 멈추었을 때의 원인](./04-02-00-common-causes-of-gimp-non-responsiveness.md)

[⬆️ 위: 4. 문제 해결하기](./04-00-what-to-do-if-you-are-stuck.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-stuck-layer-group.html)
