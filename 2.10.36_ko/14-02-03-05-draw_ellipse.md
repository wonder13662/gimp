# 14.2.3.5. 타원 그리기(Draw ellipse)

## 1. 타원 선택 도구와 채우기 도구로 원이나 타원 그리기
`타원 선택` 도구는 이미지에 원이나 타원을 그리는 데도 쓸 수 있습니다. 타원 선택을 만들고, [14.3.4. 채우기 도구(Bucket fill)](./14-03-04-bucket-fill.md)로 색을 채우면 됩니다.

<a id="90-03-02-04-a11"></a>

#### [영상 90.3.2.4.a11. `도구상자` → `타원 선택`: 타원 선택 도구와 채우기 도구로 원이나 타원 그리기](./90-03-02-04-ellipse_select.md#90-03-02-04-a11)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/9235f139-37f0-4e81-bf30-d5db22e825ed"></video>

## 2. 타원 선택 도구로 원 또는 타원의 선 긋기
### 2-1. 선택 영역 따라 그리기(Stroke selection)
타원형 외곽선을 그리는 가장 쉬운 방법은, 타원 선택을 만들고 [16.3.20. 선택 영역 따라 그리기](./16-03-20-stroke-selection.md)를 하는 것 입니다. 하지만 이 방법은 [안티-앨리어싱(Anti-Aliasing)](./19-glossaryx-antialiasing.md)의 품질이 좋지 않습니다.

<a id="90-03-02-04-a12"></a>

#### [영상 90.3.2.4.a12. `도구상자` → `타원 선택`: 선택 영역 따라 그리기](./90-03-02-04-ellipse_select.md#90-03-02-04-a12)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/f02c8f80-ff6f-465b-bdb2-50ac30aa719f"></video>

### 2-2. 두개의 타원 선택으로 선 긋기
A higher quality outline can be obtained by creating two elliptical selections with different sizes, subtracting the inner one from the outer one; however this is not always easy to get right. 

### 2-3. `선택` → `테두리...`로 선 긋기
The command `선택` → `테두리...` makes it easy.


***

## 다른 페이지로 가기

[➡️ 다음: ?]()

[⬅️ 이전: ?]()

[⬆️ 위: 14.2.3. 타원 선택 도구(Ellipse selection)](./14-02-03-00-ellipse-selection.md)

[⬆️ 위: 14.2. 선택 도구(Selection tools)](./14-02-00-selection-tools.md)

[⬆️ 위: 14. 도구(Tools)](./14-00-tools.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-tools.html#gimp-tool-options-dialog)