# 16.8.17. 화이트 밸런스(White Balance)

<a id="90-01-07-14-02-a101"></a>

#### [그림 90.1.7.14.2.a101. `이미지 메뉴 바` → `색` → `자동` → `화이트 밸런스` (Windows)](./90-01-07-14-02-white_balance.md#90-01-07-14-02-a101)
<img width="556" height="299" alt="90-01-07-14-02-a101" src="https://github.com/user-attachments/assets/af9c572d-9031-414d-8813-fd808f769785" />

`화이트 밸런스(White Balance)` 명령은 빨강, 녹색, 파랑 채널을 각각 개별적으로 늘려서 [활성화 레이어](./19-glossaryx-active_layer.md)의 색상을 자동으로 조절해줍니다.

이 명령은 이미지에서 0.05%를 차지하는 빨강, 녹색, 파랑 채널의 양쪽 끝의 픽셀을 제거합니다.

그리고 남은 범위의 픽셀들을 가능한 만큼 확장합니다.

그 결과, [대비 증가…(Stretch Contrast…)](./16-08-18-00-stretch-contrast.md)와 비교해봤을 때, 드물게 나타나는 히스토그램의 바깥쪽 경계의 픽셀의 색상은 히스토그램을 확장할 때 쓰인 최소 또는 최대 값에 영향을 주지 않습니다.

하지만 [대비 증가…(Stretch Contrast…)](./16-08-18-00-stretch-contrast.md)처럼 결과 이미지의 [색상(Hue)](./19-glossaryx-hue.md)이 이동하여 변할 수 있습니다.

이 명령은 하얀색과 검은색이 많지 않은 이미지에 순수한 하얀색과 검은색을 추가하므로 사진을 보정하는데 좋습니다.

<a id="16-08-17-s1"></a>

## 1. 명령 활성화하기: `이미지 메뉴 바` → `색` → `자동` → `화이트 밸런스`

<a id="90-01-07-14-02-a111"></a>

#### [영상 90.1.7.14.2.a111. `이미지 메뉴 바` → `색` → `자동` → `화이트 밸런스` (Windows)](./90-01-07-14-02-white_balance.md#90-01-07-14-02-a111)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/b8b796e7-18bc-4eb6-84df-f1c9b6b4c2f1"></video>

<a id="16-08-17-s2"></a>

## 2. 예제

`화이트 밸런스(White Balance)` 명령을 적용한 뒤의 히스토그램을 확인해보면, 히스토그램의 양쪽 끝의 픽셀의 컬럼이 더 높아진 모습을 확인할 수 있습니다.

<a id="90-01-07-14-02-a201"></a>

#### [그림 90.1.7.14.2.a201. `이미지 메뉴 바` → `색` → `자동` → `화이트 밸런스`: 예제 - 원본/결과 이미지 (Windows) (우리말)](./90-01-07-14-02-white_balance.md#90-01-07-14-02-a201)
<img width="640" height="232" alt="90-01-07-14-02-a201" src="https://github.com/user-attachments/assets/01431fba-d1de-4c31-8b49-a94077aaafb4" />

<a id="90-01-07-14-02-a211"></a>

#### [그림 90.1.7.14.2.a211. `이미지 메뉴 바` → `색` → `자동` → `화이트 밸런스`: 예제 - 원본/결과 이미지 - 히스토그램 (Windows) (우리말)](./90-01-07-14-02-white_balance.md#90-01-07-14-02-a211)
<img width="800" height="478" alt="90-01-07-14-02-a211" src="https://github.com/user-attachments/assets/a29b9a2e-7772-4a64-96b7-1cf320c81972" />

***

## 다른 페이지로 가기

[➡️ 다음: 16.8.18. 대비 증가…(Stretch Contrast…)](./16-08-18-00-stretch-contrast.md)

[⬅️ 이전: 16.8.16. 평준화(Equalize)](./16-08-16-equalize.md)

[⬆️ 위: 16.8. 색 메뉴(The colors menu)](./16-08-00-the-colors-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-layer-white-balance.html)