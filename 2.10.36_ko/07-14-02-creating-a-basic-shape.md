# 7.14.2. 기본 도형 그리기
GIMP(김프)는 그리기에 적합한 도구는 아닙니다. 그러나, 선택 도구를 사용하거나 [7.14.1. 직선 그리기](./07-14-01-drawing-a-straight-line.md)로 형태를 그릴 수 있습니다. 

## 1. 새로운 이미지 만들기
새로운 이미지를 [이미지 메뉴 바](./03-02-02-02-image-menu.md)의 [`파일` → `새 이미지`](./16-02-02-new.md) 메뉴를 선택합니다.

#### [그림 90.1.1.1.a101. `파일` → `새 이미지`](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-01-filex-01-new.html#%EA%B7%B8%EB%A6%BC-90111a101-%ED%8C%8C%EC%9D%BC--%EC%83%88-%EC%9D%B4%EB%AF%B8%EC%A7%80)
[![그림 90.1.1.1.a101. `파일` → `새 이미지`](https://github.com/wonder13662/gimp/assets/15767104/116f6c42-66d8-47ae-8877-9e49d80dc431)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-01-filex-01-new.html#%EA%B7%B8%EB%A6%BC-90111a101-%ED%8C%8C%EC%9D%BC--%EC%83%88-%EC%9D%B4%EB%AF%B8%EC%A7%80)

#### [영상 90.1.1.1.a111. 새 이미지 만들기](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-01-filex-01-new.html#%EC%98%81%EC%83%81-90111a111-%EC%83%88-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/028b4f82-b28c-4c2d-96b3-76ab15e9c09a"></video>

## 2. 전경색과 배경색 확인
그 다음, 도구 상자의 [전경색과 배경색](./14-01-03-color-and-indicator-areax-01-color_area.md)이 다른 것을 확인합니다.

#### [그림 90.3.4.a4. 도구상자의 '붓/무늬/그라디언트' - `색상(전경색/배경색)`](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-04-brush_n_pattern_n_gradient.html#%EA%B7%B8%EB%A6%BC-9034a4-%EB%8F%84%EA%B5%AC%EC%83%81%EC%9E%90%EC%9D%98-%EB%B6%93%EB%AC%B4%EB%8A%AC%EA%B7%B8%EB%9D%BC%EB%94%94%EC%96%B8%ED%8A%B8---%EC%83%89%EC%83%81%EC%A0%84%EA%B2%BD%EC%83%89%EB%B0%B0%EA%B2%BD%EC%83%89)
[![90-03-04-brush_pattern_gradient(windows)(ko)-focus-colors](https://github.com/wonder13662/gimp/assets/15767104/5c0772d5-07d5-404f-bb30-836be3943703)](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-04-brush_n_pattern_n_gradient.html#%EA%B7%B8%EB%A6%BC-9034a4-%EB%8F%84%EA%B5%AC%EC%83%81%EC%9E%90%EC%9D%98-%EB%B6%93%EB%AC%B4%EB%8A%AC%EA%B7%B8%EB%9D%BC%EB%94%94%EC%96%B8%ED%8A%B8---%EC%83%89%EC%83%81%EC%A0%84%EA%B2%BD%EC%83%89%EB%B0%B0%EA%B2%BD%EC%83%89)

## 3. 사각 선택으로 사각형 선택영역 만들기
사각형이나 삼각형, 타원 등의 기본 도형은 [선택 도구](./14-02-00-selection-tools.md)를 이용하면 쉽게 그릴 수 있습니다. 예를 들어 사각형의 경우, [사각 선택 도구](./14-02-02-rectangle-selection.md)를 선택하고 "사각 선택 만들기"처럼 마우스 왼쪽 버튼을 누른 채 원하는 지점으로 마우스 커서를 이동시켜 새로운 선택을 만듭니다.

<a id="90-04-01-03-a151"></a>

#### [영상 90.4.1.3.a151. 새로운 이미지에서 사각 선택하기 (Windows) (우리말)](./90-04-01-03-rectangle_select.md#90-04-01-03-a151)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/3bbc8add-a2a5-401b-bf15-0b580cd9cbfe"></video>

## 4. 선택영역을 색으로 칠하기
선택을 만든 뒤, 원하는 전경색으로 선택을 칠하거나 외곽 테두리를 그릴 수 있습니다. 색으로 칠하려면 먼저 전경색을 선택하고, [채우기 도구](./14-03-04-bucket-fill.md)로 선택 영역에 색상을 채워 넣습니다.

<a id="90-04-01-03-a152"></a>

#### [영상 90.4.1.3.a152. 사각 선택에 전경색 채우기 (Windows) (우리말)](./90-04-01-03-rectangle_select.md#90-04-01-03-a152)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/2e94a6c7-d961-4748-9d2b-0a8a369d1a8e"></video>

## 5. 선택영역을 따라 그리기
그리고 외곽 테두리를 그리려면, `편집` → `선택 영역 따라 그리기` 메뉴를 선택해서 외곽선을 그립니다.

<a id="90-04-01-03-a153"></a>

#### [영상 90.4.1.3.a153. 사각 선택에 선택 영역 따라그리기 (Windows) (우리말)](./90-04-01-03-rectangle_select.md#90-04-01-03-a153)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/d402e542-4a98-433b-bd86-dda9b6a0186c"></video>

그리고 그 뒤에 [이미지 메뉴 바](./03-02-02-02-image-menu.md)의 `선택` → `없음` 메뉴를 선택해서 선택을 없앱니다.

#### [그림 90.1.3.2.a101. `선택` → `없음`](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-03-selectx-02-none.html#%EA%B7%B8%EB%A6%BC-90132a101-%EC%84%A0%ED%83%9D--%EC%97%86%EC%9D%8C)
[![그림 90.1.3.2.a101. `선택` → `없음`](https://github.com/wonder13662/gimp/assets/15767104/bf711fb1-5309-4a8d-bdb0-a698aea8c0d7)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-03-selectx-02-none.html#%EA%B7%B8%EB%A6%BC-90132a101-%EC%84%A0%ED%83%9D--%EC%97%86%EC%9D%8C)

***

## 다른 페이지로 가기
[➡️ 다음: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[⬅️ 이전: 7.14.1. 직선 그리기](./07-14-01-drawing-a-straight-line.md)

[⬆️ 위: 7.14. 간단한 물체 그리기](./07-14-00-drawing-simple-objects.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-rectangular.html)
