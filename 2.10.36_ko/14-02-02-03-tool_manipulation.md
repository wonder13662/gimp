# 14.2.2.3. 도구 조작(Tool manipulation)

<a id="14-02-02-03-s1"></a>

## 1. 이미지 위에 사각 선택 영역 그리기
사각 선택 도구가 활성화되고, 마우스 포인터가 이미지 위에 올라가면, 다음과 같이 보입니다.

#### 그림 14.2.2.3.a101. 사각 선택 도구의 마우스 포인터 기본 모양
![14-02-02-03-a101](https://github.com/wonder13662/gimp/assets/15767104/82e850d5-47b6-49b5-bd55-1d0168cf487a)

이미지 위에 마우스 포인터를 클릭해서 드래그, 드랍으로 사각형 모양을 그릴 수 있습니다. 마우스 버튼을 놓으면, 선택 영역에 점선(행진하는 개미) 외곽선이 생깁니다.

<a id="90-04-01-03-a131"></a>

#### [영상 90.4.1.3.a131. 선택 외곽선 - 행진하는 개미(Marching ants)](./90-04-01-03-rectangle_select.md#90-04-01-03-a131)
![90-04-01-03-a131](https://github.com/wonder13662/gimp/assets/15767104/ba34706e-68e9-4b1f-9c29-1f649109a9b3)

<a id="14-02-02-03-s2"></a>

## 2. 선택 영역 바깥의 마우스 포인터
마우스 포인터가 선택 영역의 바깥에 있으면 마우스 포인터의 기본 모양이 됩니다. 이 상태는 이전에 그린 선택 영역을 지우고, 새로운 선택 영역을 그립니다. 다만 선택 모드가 [교체하기](./14-02-01-02-options.md#14-02-01-02-s1-01)가 아닌 [더하기](./14-02-01-02-options.md#14-02-01-02-s1-02), [빼기](./14-02-01-02-options.md#14-02-01-02-s1-03), [교차하기](./14-02-01-02-options.md#14-02-01-02-s1-04)의 다른 모드이면 이에 맞는 마우스 포인터 모양을 가집니다.

#### 그림 14.2.2.3.a101. 사각 선택 도구의 마우스 포인터 기본 모양
![14-02-02-03-a101](https://github.com/wonder13662/gimp/assets/15767104/82e850d5-47b6-49b5-bd55-1d0168cf487a)

<a id="14-02-02-03-s3"></a>

## 3. 선택 영역 위의 마우스 포인터의 변화

#### 그림 14.2.2.3.a111. 선택 영역 위의 마우스 포인터들
![14-02-02-03-a111](https://github.com/wonder13662/gimp/assets/15767104/fd41ee4d-d9c4-4d8f-aae7-2497738a040d)

선택 영역의 주변에 마우스 포인터가 올라가면, 위 그림처럼 위치에 따라 다양한 모양으로 바뀝니다. 마우스 포인터가 선택 영역의 네 귀퉁이와 모서리에 올라가면 선택 영역의 핸들이 보여집니다. 이 핸들로 선택 영역의 크기를 조정할 수 있습니다.

<a id="90-03-02-03-a111"></a>

#### [영상 90.3.2.3.a111. 선택의 `핸들 모드` - 핸들로 크기 바꾸기](./90-03-02-03-rectangle_select.md#90-03-02-03-a111)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/37be8e66-b382-4ae5-ace4-0cbccc31686a"></video>

### 3-1. 선택 영역의 모서리(코너) 위의 마우스 포인터
마우스 포인터가 선택 영역의 모서리(코너)에 올라가면, 모양이 아래의 이미지와 같이 바뀝니다. 마우스 포인터의 모양이 바뀐 상태에서 클릭, 드래그하면, 선택 영역의 크기를 늘이거나 줄일 수 있습니다.

#### 그림 14.2.2.3.a111.11. 선택 영역 위의 마우스 포인터들 - 사각형의 구석
![14-02-02-03-a111-01-corner](https://github.com/wonder13662/gimp/assets/15767104/8ff0ffef-bbb8-4cae-9f8d-90bd74a7c61d)

#### 영상 14.2.2.3.a111.12. 선택 영역 위의 마우스 포인터들 - 사각형의 구석
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/1326c39f-6b59-4f91-a36c-36eb3dba1803"></video>

### 3-2. 선택 영역의 옆면의 변 위의 마우스 포인터
마우스 포인터가 선택 영역의 옆면의 변의 위로 가면 모양이 아래와 같이 바뀝니다. 마우스 포인터의 모양이 바뀐 상태에서 클릭, 드래그하면, 선택 영역의 크기를 늘이거나 줄일 수 있습니다.

#### 그림 14.2.2.3.a111.21. 선택 영역 위의 마우스 포인터들 - 사각형의 변
![14-02-02-03-a111-02-medium](https://github.com/wonder13662/gimp/assets/15767104/40b3cd96-0e61-42a9-adaa-2b3ccebe8b50)

#### 영상 14.2.2.3.a111.22. 선택 영역 위의 마우스 포인터들 - 사각형의 변
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/c3bba721-6347-454c-b3d4-73c72fa9dc7e"></video>

### 3-3. 선택 영역의 안쪽의 마우스 포인터
선택 영역 안쪽에 마우스 포인터를 옮긴다면, 아래 이미지처럼 마우스 포인터가 보이게 됩니다. 여기서 클릭, 드래그를 하면 선택 영역을 옮길 수 있습니다.

#### 그림 14.2.2.3.a111.31. 선택 영역 안의 마우스 포인터
![14-02-02-03-a111-31](https://github.com/wonder13662/gimp/assets/15767104/b8ea46a4-20f9-498b-9187-c57f96f75479)

#### 영상 14.2.2.3.a111.32. 선택 영역 안의 마우스 포인터 - 선택 영역 옮기기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/ce7362e2-1fe1-4385-a31e-06c7fc60705a"></video>

선택 영역 자체가 아닌 선택 영역 안쪽의 콘텐츠를 옮기는 방법에 대해서는 [14.2.1.1. 동작 변경키(Key modifiers) - 5. 선택 영역 옮기기](./14-02-01-01-key_modifiers.md#14-02-01-01-s5)를 참고해주세요.

<a id="14-02-02-03-s4"></a>

## 4. 선택 영역의 하이라이트 사용하기
사각 선택 도구의 도구 옵션 대화상자의 강조(Highlight) 옵션을 체크하면, 선택 영역의 바깥이 어두워져서 구분하기기 더 쉽습니다.

<a id="90-04-01-03-a161"></a>

#### [그림 90.4.1.3.a161. 사각 선택 - 도구 옵션 - 강조 (Windows) (우리말)](./90-04-01-03-rectangle_select.md#90-04-01-03-a161)
![90-04-01-03-a161](https://github.com/wonder13662/gimp/assets/15767104/6f510a86-552c-4099-8b63-47816bf0afe1)

<a id="90-04-01-03-a162"></a>

#### [영상 90.4.1.3.a162. 사각 선택 - 도구 옵션 - 강조 (Windows) (우리말)](./90-04-01-03-rectangle_select.md#90-04-01-03-a162)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/ce2e0413-333d-488b-accb-56e01f2af887"></video>

<a id="14-02-02-03-s5"></a>

## 5. 키보드 사용하기
키보드의 화살표 키를 이용해서 선택 영역을 조정할 수 있습니다. [관련 정보: 7.2.1.1.1. 선택 외곽선을 옮기거나 크기 바꾸기](./07-02-01-01-01-moving_and_resizing_the_selection_outline.md)

화살표키를 눌렀을 때의 기본 이동값은 1 픽셀입니다.

<a id="90-03-02-03-a121"></a>

#### [영상 90.3.2.3.a121. 선택 `핸들 모드`로 키보드로 1픽셀씩 이동 (Windows)](./90-03-02-03-rectangle_select.md#90-03-02-03-a121)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/90dc823b-7564-44a3-93d8-64485e706c73"></video>

<a id="90-03-02-03-a125"></a>

#### [영상 90.3.2.3.a125. 선택 `핸들 모드`로 키보드로 1픽셀씩 크기 바꿈 (Windows)](./90-03-02-03-rectangle_select.md#90-03-02-03-a125)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/9d48e2c8-c9d7-4faa-bcf1-c2d8978a7d65"></video>

화살표키 + Shift(⇧)를 누르면 이동값은 25픽셀입니다.

<a id="90-03-02-03-a123"></a>

#### [영상 90.3.2.3.a123. 선택 `핸들 모드`로 키보드로 25픽셀씩 이동 (Windows)](./90-03-02-03-rectangle_select.md#90-03-02-03-a123)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/9aa7785b-b9cc-49ba-822f-c5df04fa2a43"></video>

<a id="90-03-02-03-a127"></a>

#### [영상 90.3.2.3.a127. 선택 `핸들 모드`로 키보드로 25픽셀씩 크기 바꿈 (Windows)](./90-03-02-03-rectangle_select.md#90-03-02-03-a127)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/42a2469d-1b1c-4085-a4e8-0fe082c4bddc"></video>

<a id="14-02-02-03-s6"></a>

## 6. 선택 영역의 편집 모드와 이동 모드
선택을 만들고 수정한 뒤에, 편집 모드(핸들 모드)를 끝내고 이동 모드(점선 모드)로 바꿉니다. 선택 영역을 한번 클릭하거나, 엔터키를 누르면 편집 모드(핸들 모드)가 종료됩니다. 또는 선택 도구가 아닌 다른 도구(칠하기 붓 등)을 선택하면 됩니다.

[관련 정보: 7.2.1. 선택 옮기기와 크기 조정하기 - 2-1. 핸들 모드에서 점선 모드로 바꾸기](./07-02-01-00-moving-or-resizing-a-selection.md#07-02-01-s2-01)

<a id="90-03-02-03-a113"></a>

#### [영상 90.3.2.3.a113. 선택을 `핸들 모드`에서 `점선 모드`로 변경](./90-03-02-03-rectangle_select.md#90-03-02-03-a113)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/144097b9-643e-4bfc-8154-212931839d49"></video>

***

## 관련 정보

[7.2.1. 선택 옮기기와 크기 조정하기](./07-02-01-00-moving-or-resizing-a-selection.md)

***

## 다른 페이지로 가기

[➡️ 다음: 14.2.2.4. 도구 옵션(Tool Options)](./14-02-02-04-tool_options.md)

[⬅️ 이전: 14.2.2.2. 동작 변경키(Key modifiers)](./14-02-02-02-key_modifiers.md)

[⬆️ 위: 14.2.2. 사각 선택 도구(Rectangle selection)](./14-02-02-00-rectangle-selection.md)

[⬆️ 위: 14.2. 선택 도구(Selection tools)](./14-02-00-selection-tools.md)

[⬆️ 위: 14. 도구(Tools)](./14-00-tools.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-tool-rect-select.html)