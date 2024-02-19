# 7.1.1. 페더링(Feathering)

기본 설정 상태인 선택 도구(사각 선택 도구 등)로 선택하면 예리하게 선택됩니다. 점선 안쪽의 픽셀은 완전히 선택된 상태(255)이고, 점선 바깥쪽의 픽셀은 완전히 선택되지 않은 상태(0)입니다. 선택된 정도는 퀵마스크 모드를 켬으로써 확인할 수 있습니다. 사각 선택 도구로 선택한 경우라면, 똑같은 빨강색의 예리한 경계를 확인할 수 있습니다. 

## 가장자리 페더 적용해보기

#### [그림 90.4.1.3.a101. 도구상자의 사각 선택의 도구옵션 - 가장자리 페더 (windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-01-tool_optionsx-03-rectangle_select.html#%EA%B7%B8%EB%A6%BC-90413a101-%EB%8F%84%EA%B5%AC%EC%83%81%EC%9E%90%EC%9D%98-%EC%82%AC%EA%B0%81-%EC%84%A0%ED%83%9D%EC%9D%98-%EB%8F%84%EA%B5%AC%EC%98%B5%EC%85%98---%EA%B0%80%EC%9E%A5%EC%9E%90%EB%A6%AC-%ED%8E%98%EB%8D%94-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-03-03-rectangle_select-feather_edges-focus](https://github.com/wonder13662/gimp/assets/15767104/1a24855f-3c21-42de-8d18-9b7630121395)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-01-tool_optionsx-03-rectangle_select.html#%EA%B7%B8%EB%A6%BC-90413a101-%EB%8F%84%EA%B5%AC%EC%83%81%EC%9E%90%EC%9D%98-%EC%82%AC%EA%B0%81-%EC%84%A0%ED%83%9D%EC%9D%98-%EB%8F%84%EA%B5%AC%EC%98%B5%EC%85%98---%EA%B0%80%EC%9E%A5%EC%9E%90%EB%A6%AC-%ED%8E%98%EB%8D%94-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

도구옵션 "사각 선택(Rectangle Select)"의 "가장자리 페더(Feather edges)" 체크박스를 체크하면, 점진적인 선택을 사용할 수 있습니다. 이 체크박스를 끄면 예리한 선택을 사용할 수 있습니다. "가장자리 페더"의 "반경(Radius)"을 조정해서 점진적 선택의 범위를 설정할 수 있습니다.

위 설명을 사각 선택(Rectangle Select) 도구로 따라해보세요. 그리고 퀵마스크를 켜면 흐릿한 경계를 가진 사각형을 볼 수 있습니다. 아래 예시 이미지로 페더의 적용한 상태와 그렇지 않은 상태를 확인해보세요.

#### [그림 90.3.2.3.a102. 선택의 페더 적용 유무 비교](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-02-tool_iconx-03-rectangle_select.html#%EA%B7%B8%EB%A6%BC-90323a102-%EC%84%A0%ED%83%9D%EC%9D%98-%ED%8E%98%EB%8D%94-%EC%A0%81%EC%9A%A9-%EC%9C%A0%EB%AC%B4-%EB%B9%84%EA%B5%90)
[![90-04-01-tool_optionsx-03-rectangle_select-feather_comparison_animation](https://github.com/wonder13662/gimp/assets/15767104/654431dd-7223-489f-8f89-392116226b34)](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-02-tool_iconx-03-rectangle_select.html#%EA%B7%B8%EB%A6%BC-90323a102-%EC%84%A0%ED%83%9D%EC%9D%98-%ED%8E%98%EB%8D%94-%EC%A0%81%EC%9A%A9-%EC%9C%A0%EB%AC%B4-%EB%B9%84%EA%B5%90)

## 페더(Feather)는 언제 사용하나요?
페더는 이미지를 잘라내거나 붙일때 쓸 수 있습니다. 페더를 사용하면 붙인 객체가 부드럽고, 눈에 띄지 않게 주변 사물과 어울리게 해줍니다.

## 이미지 메뉴 바의 `선택` → `페더` 사용하기
언제든지 `선택`에 `페더`을 적용할 수 있습니다. 심지어 예리한 `선택`에도 `페더`을 적용할 수 있습니다. [이미지 메뉴 바](./03-02-02-image-windowx-02-image-menu.md)의 `선택` → `페더`를 클릭해서 `선택 영역 페더(Feather Selection)` 대화상자를 엽니다. 대화상자의 `선택 영역 페더 량(Feather selection by)`를 설정하고 `OK` 버튼을 누릅니다.

#### [그림 90.1.3.8.a101. `선택` → `페더`](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-03-selectx-08-feather.html#%EA%B7%B8%EB%A6%BC-90138a101-%EC%84%A0%ED%83%9D--%ED%8E%98%EB%8D%94)
[![90-01-03-select(1080)-focus-feather](https://github.com/wonder13662/gimp/assets/15767104/7773abad-3799-4a2d-98e1-971fd9b158fe)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-03-selectx-08-feather.html#%EA%B7%B8%EB%A6%BC-90138a101-%EC%84%A0%ED%83%9D--%ED%8E%98%EB%8D%94)

#### [그림 90.4.49.a101. `선택 영역 페더` 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-49-feather_selection.html#%EA%B7%B8%EB%A6%BC-90449a101-%EC%84%A0%ED%83%9D-%EC%98%81%EC%97%AD-%ED%8E%98%EB%8D%94-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-49-feather_selection(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/b468219f-1b07-4ded-97e5-d6df5278c41b)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-49-feather_selection.html#%EA%B7%B8%EB%A6%BC-90449a101-%EC%84%A0%ED%83%9D-%EC%98%81%EC%97%AD-%ED%8E%98%EB%8D%94-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

[다른 운영체제와 언어의 `선택 영역 페더` 대화상자 확인하기](./90-04-49-feather_selection.md)

#### [영상 90.1.3.8.a102. `선택` → `페더` 전체 과정](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-03-selectx-08-feather.html#%EC%98%81%EC%83%81-90138a102-%EC%84%A0%ED%83%9D--%ED%8E%98%EB%8D%94-%EC%A0%84%EC%B2%B4-%EA%B3%BC%EC%A0%95)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/442f2320-e848-4da9-9d18-c05634337d82"></video>

## 이미지 메뉴 바의 `선택` → `또렷하게` 사용하기
[이미지 메뉴 바](./03-02-02-image-windowx-02-image-menu.md)의 `선택` → `또렷하게`를 클릭해서 흐릿한 선택을 예리하고 또렷한 선택(0 또는 255)으로 바꿀 수 있습니다.

#### [그림 90.1.3.9.a101. `선택` → `또렷하게`](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-03-selectx-09-sharpen.html#%EA%B7%B8%EB%A6%BC-90139a101-%EC%84%A0%ED%83%9D--%EB%98%90%EB%A0%B7%ED%95%98%EA%B2%8C)
[![90-01-03-select(1080)-focus-sharpen](https://github.com/wonder13662/gimp/assets/15767104/55b640bc-7417-4b2a-90b2-f8aaba346979)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-03-selectx-09-sharpen.html#%EA%B7%B8%EB%A6%BC-90139a101-%EC%84%A0%ED%83%9D--%EB%98%90%EB%A0%B7%ED%95%98%EA%B2%8C)

#### [영상 90.1.3.9.a102. `선택` → `또렷하게` 전체 과정](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-03-selectx-09-sharpen.html#%EC%98%81%EC%83%81-90139a102-%EC%84%A0%ED%83%9D--%EB%98%90%EB%A0%B7%ED%95%98%EA%B2%8C-%EC%A0%84%EC%B2%B4-%EA%B3%BC%EC%A0%95)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/133bfb84-569f-4a68-9951-65a4e6b7dc9d"></video>

> 🗒️ 참고
>
> 기술적 설명: 페더링(Feathering)은 선택 채널에 특정 반경값에 [가우시안 블러](./17-03-03-gaussian-blur.md)를 적용한 것과 같습니다.

***

## 다른 페이지로 가기
[➡️ 다음: 7.1.2. 부분적으로 투명한 선택 만들기](./07-01-the-selectionx-02-making_a_selection_partially_transparent.md)

[⬅️ 이전: 7.1. 선택](./07-01-the-selection.md)

[⬆️ 위: 7.1. 선택](./07-01-the-selection.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-painting.html#gimp-concepts-selection-feathering)