# 16.7.2.2.5. 합성 모드(Composite mode)

<a id="90-04-64-a171"></a>

#### [그림 90.4.64.a171. `새 레이어` 대화상자 → `새 레이어 만들기` → `합성 모드` (Windows) (우리말)](./90-04-0064-new_layer.md#90-04-64-a171)
<img width="542" height="531" alt="90-04-64-a171" src="https://github.com/user-attachments/assets/cac04e96-4ed1-400e-8b2e-48bac9eade43" />

<a id="16-07-02-02-05-s1"></a>

## 1. 레이어 모드
`레이어 모드`는 `블렌드(혼합) 모드`라고도 합니다.

`레이어 모드`는 위쪽 레이어와 아래쪽 레이어의 색을 합치는 방식을 결정합니다.

<a id="16-07-02-02-05-s2"></a>

## 2. 레이어의 합성 모드
레이어의 `합성 모드(Composite mode)`는 위쪽 레이어와 아래쪽 레이어의 알파 값이 합쳐지는 방식을 결정합니다.

아래쪽 레이어가 위쪽 레이어에 대해 합쳐집니다.

<a id="16-07-02-02-05-s3"></a>

## 3. 레이어의 합성 대상 영역
위쪽 레이어와 아래쪽 레이어가 합쳐지는 대상 영역은 아래와 같습니다.

1. 아래쪽 레이어의 불투명한 영역
2. 위쪽 레이어의 불투명한 영역

레이어의 `블렌드(혼합) 모드`는 두 레이어의 불투명한 영역의 색이 합쳐지는 방식을 결정합니다.

두 레이어의 불투명한 영역 중에 서로 겹치지 않는 부분에 대해서는 색을 합치는 과정이 일어나지 않으므로 원래의 색이 유지됩니다.

<a id="16-07-02-02-05-s4"></a>

## 4. 레이어의 합성 모드: 드롭다운 목록

<a id="90-04-64-a172"></a>

#### [그림 90.4.64.a172. `새 레이어` 대화상자 → `새 레이어 만들기` → `합성 모드`: 드롭다운 목록 (Windows) (우리말)](./90-04-0064-new_layer.md#90-04-64-a172)
<img width="253" height="204" alt="90-04-64-a172" src="https://github.com/user-attachments/assets/be0a168e-6854-42fd-8837-b344ba1cff07" />

레이어의 `합성 모드(Composite mode)`는 두 레이어의 불투명한 영역 중에 어떤 부분이 유지되고 어떤 부분이 버려지는지 결정합니다.

아래 예제에서는 초록색 원을 가진 레이어가 위쪽 레이어(Active layer)이며, 빨간색 원을 가진 레이어가 아래쪽 레이어(Backdrop layer)입니다.

<a id="16-07-02-02-05-s4-01"></a>

### 4-1. 합집합(Union)

<a id="90-04-64-a173-01"></a>

#### [그림 90.4.64.a173.1. `합성 모드`: 합집합 (Windows) (우리말)](./90-04-0064-new_layer.md#90-04-64-a173-01)
<img width="320" height="320" alt="90-04-64-a173-01" src="https://github.com/user-attachments/assets/d2f16b09-1b25-4d33-af47-d52eeae567a2" />

위쪽 레이어와 아래쪽 레이어의 불투명한 부분을 모두 유지합니다.

<a id="16-07-02-02-05-s4-02"></a>

### 4-2. 아래쪽 레이어에 맞춰 자르기(Clip to backdrop)

<a id="90-04-64-a173-02"></a>

#### [그림 90.4.64.a173.2. `합성 모드`: 아래쪽 레이어에 맞춰 자르기 (Windows) (우리말)](./90-04-0064-new_layer.md#90-04-64-a173-02)
<img width="320" height="320" alt="90-04-64-a173-02" src="https://github.com/user-attachments/assets/644bf41d-fc0f-4e3f-be77-0a52238705de" />

아래쪽 레이어의 불투명한 영역만 유지합니다.

위쪽 레이어와 아래쪽 레이어가 겹친 부분은 유지합니다.

그 외의 나머지 영역을 버립니다.

<a id="16-07-02-02-05-s4-03"></a>

### 4-3. 위쪽 레이어에 맞춰 자르기(Clip to layer)

<a id="90-04-64-a173-03"></a>

#### [그림 90.4.64.a173.3. `합성 모드`: 위쪽 레이어에 맞춰 자르기 (Windows) (우리말)](./90-04-0064-new_layer.md#90-04-64-a173-03)
<img width="320" height="320" alt="90-04-64-a173-03" src="https://github.com/user-attachments/assets/14aabb9e-d347-49fb-bf1f-8520acccae0c" />

위쪽 레이어의 불투명한 영역만 유지합니다.

위쪽 레이어와 아래쪽 레이어가 겹친 부분은 유지합니다.

그 외의 나머지 영역을 버립니다.

<a id="16-07-02-02-05-s4-04"></a>

### 4-4. 교집합(Intersection)

<a id="90-04-64-a173-04"></a>

#### [그림 90.4.64.a173.4. `합성 모드`: 교집합 (Windows) (우리말)](./90-04-0064-new_layer.md#90-04-64-a173-04)
<img width="320" height="320" alt="90-04-64-a173-04" src="https://github.com/user-attachments/assets/c1df3d2a-870c-401b-b70a-6553e370edc5" />

위쪽 레이어와 아래쪽 레이어가 겹친 부분만 유지합니다.

그 외의 나머지 영역을 버립니다.

<a id="16-07-02-02-05-s4-05"></a>

### 4-5. 자동(Auto)
"Auto" mode is not a separate composite mode, but rather corresponds to one of the other composite mode, depending on the layer's blend mode.

`자동(Auto)` 모드는 별도의 `합성 모드(Composite mode)`가 아닙니다.

`자동(Auto)` 모드는 선택된 레이어 모드에 따라 아래 `합성 모드(Composite mode)` 중 하나를 선택하게 됩니다.

- [합집합(Union)](./16-07-02-02-05-composite_mode.md#16-07-02-02-05-s4-01)
- [아래쪽 레이어에 맞춰 자르기(Clip to backdrop)](./16-07-02-02-05-composite_mode.md#16-07-02-02-05-s4-02)
- [위쪽 레이어에 맞춰 자르기(Clip to layer)](./16-07-02-02-05-composite_mode.md#16-07-02-02-05-s4-03)
- [교집합(Intersection)](./16-07-02-02-05-composite_mode.md#16-07-02-02-05-s4-04)

예를 들어, 레이어 모드의 `보통(Normal)`, `분해(Dissolve)`, `합치기(Merge)`는 [합집합(Union)](./16-07-02-02-05-composite_mode.md#16-07-02-02-05-s4-01)이 선택되며, 다른 레이어 모드에서는 [아래쪽 레이어에 맞춰 자르기(Clip to backdrop)](./16-07-02-02-05-composite_mode.md#16-07-02-02-05-s4-02)가 선택됩니다.

***

## 관련 정보

[15.2.1.3. 레이어 대화상자 컨텍스트 메뉴(The Layer dialog context menu) - 4. 합성 모드 서브메뉴(Composite Mode submenu)](./15-02-01-03-the_layer_dialog_context_menu.md#15-02-01-03-s4)

***

## 다른 페이지로 가기

[➡️ 다음: 16.7.2.2.6. 불투명도(Opacity)](./16-07-02-02-06-opacity.md)

[⬅️ 이전: 16.7.2.2.4. 혼합 영역, 합성 공간(Blend space, Composite space)](./16-07-02-02-04-blend_space_n_composite_space.md)

[⬆️ 위: 16.7.2.2. 새 레이어 대화상자 설명(Description of the "New Layer" Dialog)](./16-07-02-02-00-description_of_the_new_layer_dialog.md)

[⬆️ 위: 16.7.2. 새 레이어(New layer)](./16-07-02-00-new_layer.md)

[⬆️ 위: 16.7. 레이어 메뉴(The "Layer" menu)](./16-07-00-the-layer-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-layer-new.html#gimp-new-layer-dialog)