# 14.2.3.5. 타원 그리기(Draw ellipse)

## 1. 타원 선택 도구와 채우기 도구로 원이나 타원 그리기
This tool is also used for rendering a circle or ellipse on an image. To render a filled ellipse, create an ellipcial selection, and then fill it using the [14.3.4. 채우기 도구(Bucket fill)](./14-03-04-bucket-fill.md). 

## 2. 타원 선택 도구로 원 또는 타원의 선 긋기
### 2-1. 선택 영역 따라 그리기(Stroke selection)
To create an elliptical outline, the simplest and most flexible approach is to create an elliptical selection and then [16.3.20. 선택 영역 따라 그리기](./16-03-20-stroke-selection.md) it. However, the quality of anti-aliasing with this approach is rather crude. 

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