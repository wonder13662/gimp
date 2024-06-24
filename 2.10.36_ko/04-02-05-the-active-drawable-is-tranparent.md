# 4.2.5. 활성화된 drawable이 투명한 경우

<a id="04-02-05-s1"></a>

## 1. 문제 확인
레이어의 불투명도(Opacity)가 0이라면, 그리는 것을 아무것도 볼 수 없습니다. [레이어 대화상자](./15-02-01-00-layers-dialog.md)의 위쪽의 `불투명(Opacity)` 슬라이더의 값이 슬라이더의 값이 0 또는 매우 낮은 값이 아닌지 확인해 보세요. 

<a id="90-04-03-04-a11"></a>

#### [그림 90.4.3.4.a11. 레이어의 불투명도가 0인 경우](./90-04-03-04-opacity.md#90-04-03-04-a11)
![90-04-03-04-a11](https://github.com/wonder13662/gimp/assets/15767104/edc97312-5242-453e-b074-065aa1d7976f)

레이어 대화상자에서 활성화된 레이어의 불투명도가 0인 경우

<a id="90-04-03-04-a21"></a>

#### [영상 90.4.3.4.a21. 레이어 불투명도 0인 상태에서 붓 그리기](./90-04-03-04-opacity.md#90-04-03-04-a21)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/3932b264-e15c-4bd4-af86-fd59bcd8b6ec"></video>

불투명도 0인 상태에서 붓 그리기는 문제없이 성공합니다.

<a id="04-02-05-s2"></a>

## 2. 해결방법
불투명도 슬라이더의 값을 더 높은 값으로 설정합니다.

<a id="90-04-03-04-a31"></a>

#### [영상 90.4.3.4.a31. 레이어 불투명도 0에서 100으로 바꾸기](./90-04-03-04-opacity.md#90-04-03-04-a31)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/cc78826d-d01b-42c9-bac9-d74b9554cef4"></video>

***

## 관련 정보

[8.1.1.8. 불투명도(Opacity)](./08-01-01-08-opacity.md)

[15.2.1.2.3.2. 불투명도(Opacity)](./15-02-01-02-03-02-opacity.md)

***

## 다른 페이지로 가기

[➡️ 다음: 4.2.6. 레이어 바깥쪽에서 작업을 하려는 경우](./04-02-06-you-are-trying-to-act-outside-the-layer.md)

[⬅️ 이전: 4.2.4. 활성화된 drawable이 보이지 않는 경우](./04-02-04-the-active-drawable-is-not-visible.md)

[⬆️ 위: 4.2. GIMP(김프)가 멈추었을 때의 원인](./04-02-00-common-causes-of-gimp-non-responsiveness.md)

[⬆️ 위: 4. 문제 해결하기](./04-00-what-to-do-if-you-are-stuck.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-stuck-drawable-transparent.html)