# 8.5.11. 레이어 그룹 마스크(Layer Group Mask)
GIMP(김프) 2.10 이후로 레이어 그룹에 마스크를 쓸 수 있게 되었습니다. 레이어 그룹 마스크는 아래 조건들을 따르는 한에서는 보통의 레이어 마스크와 비슷하게 동작합니다.

## 레이어 그룹의 마스크의 조건들
1. 레이어 그룹의 마스크의 크기는 항상 자식 레이어의 크기를 모두 합친 것과 같습니다.
2. 레이어 그룹의 크기가 작아지면, 마스크는 새로운 크기에 맞게 잘립니다. 새로운 크기의 경계의 바깥의 마스크 영역은 모두 버려집니다.
3. 레이어 그룹의 크기가 커지면, 마스크는 늘어난 크기의 영역에 검은색(투명)으로 채웁니다.

아래 영상에서 레이어 그룹에서 레이어를 빼낼 때마다 레이어 그룹의 마스크의 크기가 작아지는 것을 확인할 수 있습니다.

#### [영상 90.4.3.2.a191. 레이어 그룹의 경계가 줄어들어 레이어 그룹 마스크의 크기가 작아짐](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-03-layersx-02-layer_group.html#%EC%98%81%EC%83%81-90432a191-%EB%A0%88%EC%9D%B4%EC%96%B4-%EA%B7%B8%EB%A3%B9%EC%9D%98-%EA%B2%BD%EA%B3%84%EA%B0%80-%EC%A4%84%EC%96%B4%EB%93%A4%EC%96%B4-%EB%A0%88%EC%9D%B4%EC%96%B4-%EA%B7%B8%EB%A3%B9-%EB%A7%88%EC%8A%A4%ED%81%AC%EC%9D%98-%ED%81%AC%EA%B8%B0%EA%B0%80-%EC%9E%91%EC%95%84%EC%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/bc97311e-27d2-4342-b28b-be81e1dfc6f2"></video>

아래 영상에서 레이어 그룹에서 레이어를 넣을 때마다 레이어 그룹의 마스크의 크기가 커지는 것을 확인할 수 있습니다.

#### [영상 90.4.3.2.a192. 레이어 그룹의 경계가 늘어나서 레이어 그룹 마스크의 크기가 커짐](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-03-layersx-02-layer_group.html#%EC%98%81%EC%83%81-90432a192-%EB%A0%88%EC%9D%B4%EC%96%B4-%EA%B7%B8%EB%A3%B9%EC%9D%98-%EA%B2%BD%EA%B3%84%EA%B0%80-%EB%8A%98%EC%96%B4%EB%82%98%EC%84%9C-%EB%A0%88%EC%9D%B4%EC%96%B4-%EA%B7%B8%EB%A3%B9-%EB%A7%88%EC%8A%A4%ED%81%AC%EC%9D%98-%ED%81%AC%EA%B8%B0%EA%B0%80-%EC%BB%A4%EC%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/dafb7205-1a89-4fe4-a0e0-719c42ee5cd9"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 8.5.12. 레이어 찾기(Finding a layer)](./08-05-layer-groupsx-12-finding_a_layer.md)

[⬅️ 이전: 8.5.10. 불투명도(Opacity)](./08-05-layer-groupsx-10-opacity.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-layer-groups.html)
