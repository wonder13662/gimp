# 8.1. 레이어 소개
## 1. 레이어의 개념
레이어는 쌓아놓은 슬라이드 더미로 생각할 수 있습니다. 레이어를 사용해서 이미지의 다른 부분에 영향을 미치지 않고 수정할 수 있습니다. 레이어는 서로 위에 쌓일 수 있습니다. 가장 아래의 레이어는 이미지의 배경이 됩니다. 이미지의 전경에 위치한 레이어는 배경보다 위쪽에 있게 됩니다.

#### 그림 8.1.a1. 이미지의 레이어들
![layers_overview](https://github.com/wonder13662/gimp/assets/15767104/21268812-0bff-4a6e-b431-f630dcb2d2e2)

#### 그림 8.1.a2. 결과 이미지
![layers_example](https://github.com/wonder13662/gimp/assets/15767104/c898cb64-8208-4d31-bf08-b214d9d88b00)

## 2. 몇 개의 레이어까지 쓸 수 있나요?
이미지에서 쓸 수 있는 레이어의 개수는 시스템의 메모리가 허용하는 범위 안에서는 제한이 없습니다. GIMP(김프) 고급 사용자들은 수십 개의 레이어를 이미지에 쓰는 일이 자주 있습니다. 작업을 좀 더 쉽게 하기 위해 레이어를 그룹으로 묶을 수 있습니다. 그리고 레이어를 제어하는 기능도 많이 있습니다.

## 3. 레이어 대화상자
이미지의 레이어의 구성은 [레이어 대화상자](./15-02-01-layers-dialog.md)에서 확인할 수 있습니다. [레이어 대화상자](./15-02-01-layers-dialog.md)는 GIMP(김프)의 도구상자 다음으로 중요한 대화상자입니다. 어떻게 동작하는지 좀 더 알고 싶다면, [레이어 대화상자](./15-02-01-layers-dialog.md)를 확인해주세요. 하지만 몇 가지 동작들은 레이어가 보여지는 속성을 이번 장에서 실습하면서 확인해보겠습니다.

## 4. 활성화된 drawable
열려있는 이미지는 항상 활성화(active)된 [`drawable`](./19-glossaryx-drawable.md)을 가지고 있습니다. `drawable`이란 GIMP(김프)의 개념입니다. `drawable`은 레이어, 채널, 레이어 마스크 그리고 선택 마스크를 가리킵니다. 기본적으로 그리기 도구로 칠할 수 있는 것이라면 어떤 것이라도 `drawable`입니다. 레이어가 활성화 상태이면 [레이어 대화상자](./15-02-01-layers-dialog.md)에서 하이라이트 표시가 됩니다. 그리고 이미지 창의 하단의 [상태 표시 영역](https://wonder13662.github.io/gimp/2.10.36_ko/03-02-02-image-windowx-09-status-area.html#%EA%B7%B8%EB%A6%BC-9059a111-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B0%BD-%EC%95%84%EB%9E%98%EC%9D%98-%EC%83%81%ED%83%9C-%ED%91%9C%EC%8B%9C-%EC%98%81%EC%97%AD)에 활성화된 레이어의 이름이 표시됩니다. 만약 그렇지 않다면, 레이어를 직접 클릭해서 활성화시킬 수 있습니다. 아무런 레이어도 하이라이트되지 않는다면, 활성화된 `drawable`이 레이어가 아닌 다른 것(채널, 레이어 마스크 등)이라는 뜻입니다.

### 그림 8.1.a3. 활성화된 drawable 레이어가 레이어 대화상자의 하이라이트와 상태 표시 영역에 표시
![08-01-layer_highlighted(windows)(en)-focus](https://github.com/wonder13662/gimp/assets/15767104/4bee9406-fe84-4143-9d8f-cc8f0ce53d1e)

## 5. 레이어 메뉴
[이미지 메뉴 바](./03-02-02-image-windowx-02-image-menu.md)의 `레이어` 메뉴에는 이미지의 활성화된 레이어를 수정할 수 있는 기능들이 있습니다. [레이어 대화상자](./15-02-01-layers-dialog.md)의 오른쪽 클릭 팝업 메뉴를 통해 같은 기능들을 쓸 수 있습니다.

#### [그림 90.1.6.a1. `레이어`](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-06-layer.html#%EA%B7%B8%EB%A6%BC-9016a1-%EB%A0%88%EC%9D%B4%EC%96%B4) 
[![90.1.6. 레이어(Layer)](https://github.com/wonder13662/gimp/assets/15767104/3f4bfc3c-ecba-45b9-bca5-c4ffcc4a28bf)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-06-layer.html#%EA%B7%B8%EB%A6%BC-9016a1-%EB%A0%88%EC%9D%B4%EC%96%B4) 

#### [그림 90.4.3.1.a11. 레이어 대화상자의 오른쪽 클릭으로 여는 팝업(컨텍스트) 메뉴](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-03-layersx-01-context_menu.html#%EA%B7%B8%EB%A6%BC-90431a11-%EB%A0%88%EC%9D%B4%EC%96%B4-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90%EC%9D%98-%EC%98%A4%EB%A5%B8%EC%AA%BD-%ED%81%B4%EB%A6%AD%EC%9C%BC%EB%A1%9C-%EC%97%AC%EB%8A%94-%ED%8C%9D%EC%97%85%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-%EB%A9%94%EB%89%B4)
[![90-04-03-layers-context_menu](https://github.com/wonder13662/gimp/assets/15767104/8af04c42-4bdb-42f1-a95e-7f870b07b11b)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-03-layersx-01-context_menu.html#%EA%B7%B8%EB%A6%BC-90431a11-%EB%A0%88%EC%9D%B4%EC%96%B4-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90%EC%9D%98-%EC%98%A4%EB%A5%B8%EC%AA%BD-%ED%81%B4%EB%A6%AD%EC%9C%BC%EB%A1%9C-%EC%97%AC%EB%8A%94-%ED%8C%9D%EC%97%85%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-%EB%A9%94%EB%89%B4)

***

## 다른 페이지로 가기
[➡️ 다음: 8.1.1. 레이어 속성](./08-01-introduction-to-layersx-01-layer_properties.md)

[⬅️ 이전: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-image-combining.html)
