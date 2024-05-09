# 14.2.8.4. 전경 추출 정제하기(Refining Foreground Extraction)
많은 이미지에서 전경과 배경을 구분하는 것은 어려울 수 있습니다. 선택 영역을 정제하면 정확한 전경을 추출할 수 있습니다. 전경을 그릴 때, 미리보기 모드를 자주 전환합니다. `전경 그리기(Draw background)` 모드로 전환해서 잘못 그려진 배경 영역을 지웁니다. 그리고 `그레이스케일(Grayscale)`과 `색(Color)` 미리보기 모드를 전환해서 결과를 확인해봅니다.

## 1. 잘못 그린 전경 영역 수정하기
실수로 배경 영역 위로 전경을 그렸습니다. 배경의 부분이 전경에 포함되었습니다. `배경 그리기(Draw background)` 옵션을 체크합니다. 배경 픽셀 위의 잘못 그린 선택에 그립니다. 배경 픽셀 위의 잘못 그린 선택이 전경 선택에서 제거 되었습니다.

<a id="90-01-08-01-04-a113"></a>

#### [영상 90.1.8.1.4.a113. 잘못 그린 전경 영역 수정하기](./90-01-08-01-04-foreground_select.md#90-01-08-01-04-a113)
<video controls="controls" width="720"  src="https://github.com/wonder13662/gimp/assets/15767104/18679c4a-27e5-43b7-ac18-02abc3fdbd93"></video>

## 2. 잘못 그린 배경 영역 수정하기
전경의 일부분이 선택되지 않았습니다. `알 수 없는 부분 그리기(Draw unknown)` 옵션을 체크합니다. 그 다음에 선택되지 않은 픽셀을 붓으로 그려서 선택합니다. 

<a id="90-01-08-01-04-a114"></a>

#### [영상 90.1.8.1.4.a114. 잘못 그린 배경 영역 수정하기](./90-01-08-01-04-foreground_select.md#90-01-08-01-04-a114)
<video controls="controls" width="720"  src="https://github.com/wonder13662/gimp/assets/15767104/64cc459b-c993-4d6e-acaf-f1a3da13bef8"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 14.3. 그리기 도구(Paint tools)](./14-03-00-paint-tools.md)

[⬅️ 이전: 14.2.8.3. 도구 옵션(Options)](./14-02-08-03-options.md)

[⬆️ 위: 14.2.8. 전경 선택(Foreground select)](./14-02-08-00-foreground-select.md)

[⬆️ 위: 14.2. 선택 도구(Selection tools)](./14-02-00-selection-tools.md)

[⬆️ 위: 14. 도구(Tools)](./14-00-tools.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-tool-foreground-select.html#idm11666)
