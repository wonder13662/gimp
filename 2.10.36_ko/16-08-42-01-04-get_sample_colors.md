# 16.8.42.1.4. 표본 색상 가져오기(Get Sample Colors)

<a id="90-04-213-a141"></a>

#### [그림 90.4.213.a141. `표본 색상화` 대화상자 → `표본 색상 가져오기` (Windows) (우리말)](./90-04-0213-sample_colorize.md#90-04-213-a141)
<img width="815" height="559" alt="90-04-213-a141" src="https://github.com/user-attachments/assets/a88624fc-b04a-4cf0-8653-f5974f932a92" />

`표본 색상 가져오기(Get Sample Colors)` 버튼을 누르면, 예제 이미지의 미리보기의 색상이 아래의 그라디언트에 표시됩니다.

그리고 이 그라디언트 색상을 대상 이미지에 적용됩니다.

아래 예시 영상에서는 처음에 선택한 이미지의 색상 정보를 처리하기 위해 기다리는 시간이 길어지는 모습을 확인할 수 있습니다.

<a id="90-04-213-a142"></a>

#### [영상 90.4.213.a142. `표본 색상화` 대화상자 → `표본 색상 가져오기` (Windows) (우리말)](./90-04-0213-sample_colorize.md#90-04-213-a142)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/c5ca87bd-722f-4cb8-bba4-421bc4d248cb"></video>

<a id="16-08-42-01-04-s1"></a>

## 1. 표본 부드럽게 하기(Smooth Samples)

<a id="90-04-213-a143"></a>

#### [그림 90.4.213.a143. `표본 색상화` 대화상자 → `표본 색상 가져오기` → `표본 부드럽게 하기` (Windows) (우리말)](./90-04-0213-sample_colorize.md#90-04-213-a143)
<img width="815" height="559" alt="90-04-213-a143" src="https://github.com/user-attachments/assets/7a5fc1b7-22df-45f2-bda9-d6eb1e719f51" />

예제 이미지의 색상의 갯수가 적으면 색이 급격하게 변하게 됩니다.

이 경우에 `표본 부드럽게 하기(Smooth Samples)` 체크박스를 체크하면 색의 변화를 더 부드럽게 만들 수 있습니다.

<a id="16-08-42-01-04-s2"></a>

## 2. 하위색 사용하기(Use Subcolors)

<a id="90-04-213-a144"></a>

#### [그림 90.4.213.a144. `표본 색상화` 대화상자 → `표본 색상 가져오기` → `하위색 사용하기` (Windows) (우리말)](./90-04-0213-sample_colorize.md#90-04-213-a144)
<img width="815" height="559" alt="90-04-213-a144" src="https://github.com/user-attachments/assets/c7657c6d-c1ff-4b72-a133-47aab7ba5d3a" />

흑백 이미지는 각 픽셀이 밝기 정보만 가지고 있습니다.

반면, [RGB](./19-glossaryx-color_mode_rgb.md) 이미지는 각 픽셀이 세 개의 색상 채널에 대한 정보 및 밝기 정보를 가지고 있습니다.

그러므로 다른 색상이지만, 같은 밝기를 가질 수도 있습니다.

`하위색 사용하기(Use Subcolors)` 옵션을 켜면, 세 개의 색이 모두 섞여 같은 밝기를 가진 대상 이미지의 픽셀에 적용됩니다.

`하위색 사용하기(Use Subcolors)` 옵션을 끄면, 가장 높은 밝기를 가진 색이 대상 이미지의 픽셀에 적용됩니다.

<a comment="TODO 원문의 dominating이 가장 높은 밝기를 가진 것이라는 의미인지 확인해야 함"></a>

***

## 다른 페이지로 가기

[➡️ 다음: 16.8.42.1.5. 출력 레벨(Output Levels)](./16-08-42-01-05-output_levels.md)

[⬅️ 이전: 16.8.42.1.3. 색상 보여주기(Show color)](./16-08-42-01-03-show_colors.md)

[⬆️ 위: 16.8.42.1. 옵션(Options)](./16-08-42-01-00-options.md)

[⬆️ 위: 16.8.42. 표본 색상화…(Sample Colorize…)](./16-08-42-00-sample-colorize.md)

[⬆️ 위: 16.8. 색 메뉴(The colors menu)](./16-08-00-the-colors-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/plug-in-sample-colorize.html#idm33395)