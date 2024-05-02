# 14.2.3.5. 타원 그리기(Draw ellipse)

<a id="14-02-03-05-s1"></a>

## 1. 타원 선택 도구와 채우기 도구로 원이나 타원 그리기
`타원 선택` 도구는 이미지에 원이나 타원을 그리는 데도 쓸 수 있습니다. 타원 선택을 만들고, [14.3.4. 채우기 도구(Bucket fill)](./14-03-04-bucket-fill.md)로 색을 채우면 됩니다.

<a id="90-03-02-04-a11-01"></a>

#### [영상 90.3.2.4.a11.1. `도구상자` → `타원 선택`: 타원 선택 도구와 채우기 도구로 원이나 타원 그리기](./90-03-02-04-ellipse_select.md#90-03-02-04-a11)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/9235f139-37f0-4e81-bf30-d5db22e825ed"></video>

<a id="14-02-03-05-s2"></a>

## 2. 타원 선택 도구로 원 또는 타원의 선 긋기

<a id="14-02-03-05-s2-01"></a>

### 2-1. 선택 영역 따라 그리기(Stroke selection)
타원형 외곽선을 그리는 가장 쉬운 방법은, 타원 선택을 만들고 [16.3.20. 선택 영역 따라 그리기](./16-03-20-stroke-selection.md)를 하는 것 입니다. 하지만 이 방법은 [안티-앨리어싱(Anti-Aliasing)](./19-glossaryx-antialiasing.md)의 품질이 좋지 않습니다. [2-4. 타원 외곽선 비교하기](./14-02-03-05-draw_ellipse.md#14-02-03-05-s2-04)에서 확인해볼 수 있습니다.

<a id="90-03-02-04-a12-01"></a>

#### [영상 90.3.2.4.a12.1. `도구상자` → `타원 선택`: 선택 영역 따라 그리기](./90-03-02-04-ellipse_select.md#90-03-02-04-a12-01)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/328b5e65-be46-48ad-9e93-36d86988e617"></video>

<a id="14-02-03-05-s2-02"></a>

### 2-2. 두개의 타원 선택으로 선 긋기
더 높은 품질의 외곽선을 얻으려면, 다른 크기의 두개의 타원 선택을 만들어 작은 타원 선택을 큰 타원 선택에서 뺍니다. 하지만 이 방법은 다소 번거롭습니다.

<a id="90-03-02-04-a13-01"></a>

#### [영상 90.3.2.4.a13.1. `도구상자` → `타원 선택`: 두개의 타원 선택으로 선 긋기](./90-03-02-04-ellipse_select.md#90-03-02-04-a13-01)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/2f46fc8f-66db-42a5-8196-0d233da0caa2"></video>

<a id="14-02-03-05-s2-03"></a>

### 2-3. `선택` → `테두리...`로 선 긋기
[이미지 메뉴 바](./03-02-02-02-image-menu.md)의 `선택` → `테두리...` 메뉴로 타원 선택을 채워넣을 수 있도록 바꿔서 선을 그립니다.

<a id="90-03-02-04-a14-01"></a>

#### [영상 90.3.2.4.a14.1. `도구상자` → `타원 선택`: `선택` → `테두리...`로 선 긋기](./90-03-02-04-ellipse_select.md#90-03-02-04-a14-01)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/d632d953-e941-40d1-b3b3-b7419d920c02"></video>

<a id="14-02-03-05-s2-04"></a>

### 2-4. 타원 외곽선 비교하기
`선택 영역 따라 그리기`의 결과물이 좋지 않고, 나머지는 [안티-앨리어싱(Anti-Aliasing)](./19-glossaryx-antialiasing.md)의 효과로 부드럽게 결과물이 나온 것을 확인할 수 있습니다.

<a id="90-03-02-04-a12-02"></a>

#### [그림 90.3.2.4.a12.2. 타원 외곽선: 선택 영역 따라 그리기](./90-03-02-04-ellipse_select.md#90-03-02-04-a12-02)
![90-03-02-04-a12-02](https://github.com/wonder13662/gimp/assets/15767104/20d9a71c-8dd3-47cc-91fc-2570dadce81a)

<a id="90-03-02-04-a13-02"></a>

#### [그림 90.3.2.4.a13.2. 타원 외곽선: 두개의 타원 선택으로 선 긋기](./90-03-02-04-ellipse_select.md#90-03-02-04-a13-02)
![90-03-02-04-a13-02](https://github.com/wonder13662/gimp/assets/15767104/85859b05-0590-4766-b3b0-2d87e05f59e9)

<a id="90-03-02-04-a14-02"></a>

#### [그림 90.3.2.4.a14.2. 타원 외곽선: `선택` → `테두리...`로 선 긋기](./90-03-02-04-ellipse_select.md#90-03-02-04-a14-02)
![90-03-02-04-a14-02](https://github.com/wonder13662/gimp/assets/15767104/986e6c06-4399-4bec-a26c-70899447c39a)

***

## 다른 페이지로 가기

[➡️ 다음: 14.2.4. 자유 선택 도구(올가미) - Free selection (lasso)](./14-02-04-free-selection-lasso.md)

[⬅️ 이전: 14.2.3.4. 도구 옵션(Tool Options)](./14-02-03-04-tool_options.md)

[⬆️ 위: 14.2.3. 타원 선택 도구(Ellipse selection)](./14-02-03-00-ellipse-selection.md)

[⬆️ 위: 14.2. 선택 도구(Selection tools)](./14-02-00-selection-tools.md)

[⬆️ 위: 14. 도구(Tools)](./14-00-tools.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-tools.html#gimp-tool-options-dialog)