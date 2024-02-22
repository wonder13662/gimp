# 7.5.3. 경로와 선택
GIMP(김프)는 이미지의 선택을 경로로 바꿀 수 있습니다. 또한 경로를 선택으로 바꿀 수 있습니다. 선택이 어떻게 동작하는지 확인하려면 [선택](./07-01-the-selection.md) 항목을 참고해주세요.

선택을 경로로 바꾸면, 경로는 선택의 외곽선(행진하는 개미(marching ants))을 가깝게 따라갑니다. 그러나 선택은 선택의 정도가 0부터 255까지 픽셀 단위로 저장되어 관리되지만, 경로는 이 정보가 없습니다. 그러므로 선택의 [페더링](./07-01-the-selectionx-01-feathering.md)의 결과인 부드러운 경계같은 정보는 경로로 변경되면 사라지게 됩니다.

#### [그림 90.4.5.a121. 부드러운 경계를 갖는 선택](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-05-paths.html#%EA%B7%B8%EB%A6%BC-9045a121-%EB%B6%80%EB%93%9C%EB%9F%AC%EC%9A%B4-%EA%B2%BD%EA%B3%84%EB%A5%BC-%EA%B0%96%EB%8A%94-%EC%84%A0%ED%83%9D)
[![90-04-05-paths-selection_with_feather](https://github.com/wonder13662/gimp/assets/15767104/53619a1a-7d3d-461f-b079-ebfc874480b4)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-05-paths.html#%EA%B7%B8%EB%A6%BC-9045a121-%EB%B6%80%EB%93%9C%EB%9F%AC%EC%9A%B4-%EA%B2%BD%EA%B3%84%EB%A5%BC-%EA%B0%96%EB%8A%94-%EC%84%A0%ED%83%9D)

#### [영상 90.4.5.a122. 부드러운 경계를 갖는 선택을 경로로 바꿈](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-05-paths.html#%EC%98%81%EC%83%81-9045a122-%EB%B6%80%EB%93%9C%EB%9F%AC%EC%9A%B4-%EA%B2%BD%EA%B3%84%EB%A5%BC-%EA%B0%96%EB%8A%94-%EC%84%A0%ED%83%9D%EC%9D%84-%EA%B2%BD%EB%A1%9C%EB%A1%9C-%EB%B0%94%EA%BF%88)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/5c8e5d62-e929-426e-b1b9-0a6f83bdc2c4"></video>

경로가 다시 선택으로 바뀌면, 결과로 나온 선택은 예리한 선택 경계(0 또는 255)를 가집니다. [이미지 메뉴 바(Image Menu Bar)](./03-02-02-image-windowx-02-image-menu.md)에서 `선택` → `또렷하게`를 사용한 것과 비슷한 결과를 얻게 됩니다.

#### [그림 90.4.5.a123. 경로에서 선택으로 바꾸어 부드러운 경계 정보가 사라지고 또렷한 경계를 갖는 선택](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-05-paths.html#%EA%B7%B8%EB%A6%BC-9045a123-%EA%B2%BD%EB%A1%9C%EC%97%90%EC%84%9C-%EC%84%A0%ED%83%9D%EC%9C%BC%EB%A1%9C-%EB%B0%94%EA%BE%B8%EC%96%B4-%EB%B6%80%EB%93%9C%EB%9F%AC%EC%9A%B4-%EA%B2%BD%EA%B3%84-%EC%A0%95%EB%B3%B4%EA%B0%80-%EC%82%AC%EB%9D%BC%EC%A7%80%EA%B3%A0-%EB%98%90%EB%A0%B7%ED%95%9C-%EA%B2%BD%EA%B3%84%EB%A5%BC-%EA%B0%96%EB%8A%94-%EC%84%A0%ED%83%9D)
[![90-04-05-paths-selection_from_path](https://github.com/wonder13662/gimp/assets/15767104/c5f8f5cf-ebea-4913-9f8c-8dc8b45145bc)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-05-paths.html#%EA%B7%B8%EB%A6%BC-9045a123-%EA%B2%BD%EB%A1%9C%EC%97%90%EC%84%9C-%EC%84%A0%ED%83%9D%EC%9C%BC%EB%A1%9C-%EB%B0%94%EA%BE%B8%EC%96%B4-%EB%B6%80%EB%93%9C%EB%9F%AC%EC%9A%B4-%EA%B2%BD%EA%B3%84-%EC%A0%95%EB%B3%B4%EA%B0%80-%EC%82%AC%EB%9D%BC%EC%A7%80%EA%B3%A0-%EB%98%90%EB%A0%B7%ED%95%9C-%EA%B2%BD%EA%B3%84%EB%A5%BC-%EA%B0%96%EB%8A%94-%EC%84%A0%ED%83%9D)

#### [영상 90.4.5.a124. 경로에서 선택으로 바꿈](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-05-paths.html#%EC%98%81%EC%83%81-9045a124-%EA%B2%BD%EB%A1%9C%EC%97%90%EC%84%9C-%EC%84%A0%ED%83%9D%EC%9C%BC%EB%A1%9C-%EB%B0%94%EA%BF%88)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/ad3948e7-653e-4ffd-a23e-828080206444"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 7.5.4. 경로 변형하기](./07-05-04-transforming-paths.md)

[⬅️ 이전: 7.5.2. 경로 속성](./07-05-02-path-properties.md)

[⬆️ 위: 7.5. 경로](./07-05-00-paths.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-paths-and-selections.html)