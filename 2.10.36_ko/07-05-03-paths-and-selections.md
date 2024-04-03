# 7.5.3. 경로와 선택
GIMP(김프)는 이미지의 선택을 경로로 바꿀 수 있습니다. 또한 경로를 선택으로 바꿀 수 있습니다. 선택이 어떻게 동작하는지 확인하려면 [선택](./07-01-00-the-selection.md) 항목을 참고해주세요.

선택을 경로로 바꾸면, 경로는 선택의 외곽선(행진하는 개미(marching ants))을 가깝게 따라갑니다. 그러나 선택은 선택의 정도가 0부터 255까지 픽셀 단위로 저장되어 관리되지만, 경로는 이 정보가 없습니다. 그러므로 선택의 [페더링](./07-01-01-feathering.md)의 결과인 부드러운 경계같은 정보는 경로로 변경되면 사라지게 됩니다.

<a id="90-04-05-a121"></a>

#### [그림 90.4.5.a121. 부드러운 경계를 갖는 선택](./90-04-05-paths.md#90-04-05-a121)
![90-04-05-a121](https://github.com/wonder13662/gimp/assets/15767104/53619a1a-7d3d-461f-b079-ebfc874480b4)

<a id="90-04-05-a122"></a>

#### [영상 90.4.5.a122. 부드러운 경계를 갖는 선택을 경로로 바꿈](./90-04-05-paths.md#90-04-05-a122)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/5c8e5d62-e929-426e-b1b9-0a6f83bdc2c4"></video>

경로가 다시 선택으로 바뀌면, 결과로 나온 선택은 예리한 선택 경계(0 또는 255)를 가집니다. [이미지 메뉴 바(Image Menu Bar)](./03-02-02-02-image-menu.md)에서 `선택` → `또렷하게`를 사용한 것과 비슷한 결과를 얻게 됩니다.

<a id="90-04-05-a123"></a>

#### [그림 90.4.5.a123. 경로에서 선택으로 바꾸어 부드러운 경계 정보가 사라지고 또렷한 경계를 갖는 선택](./90-04-05-paths.md#90-04-05-a123)
![90-04-05-a123](https://github.com/wonder13662/gimp/assets/15767104/c5f8f5cf-ebea-4913-9f8c-8dc8b45145bc)

<a id="90-04-05-a124"></a>

#### [영상 90.4.5.a124. 경로에서 선택으로 바꿈](./90-04-05-paths.md#90-04-05-a124)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/ad3948e7-653e-4ffd-a23e-828080206444"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 7.5.4. 경로 변형하기](./07-05-04-transforming-paths.md)

[⬅️ 이전: 7.5.2. 경로 속성](./07-05-02-path-properties.md)

[⬆️ 위: 7.5. 경로](./07-05-00-paths.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-paths-and-selections.html)