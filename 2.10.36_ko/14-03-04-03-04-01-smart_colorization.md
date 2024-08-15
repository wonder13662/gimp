# 14.3.4.3.4.1. Smart Colorization

<a id="14-03-04-03-04-01-a1"></a>

#### 그림 14.3.4.3.4.1.a1. Smart Colorization 과정 예시 이미지
![14-03-04-03-04-01-a1](https://github.com/wonder13662/gimp/assets/15767104/48d385e3-a72a-4db4-b8e3-f47e03bca1d2)

## 1. `비슷한 색상 채우기`의 문제
[선화(line art)](https://en.wikipedia.org/wiki/Line_art)를 색으로 채운다는 개념은 매우 간단합니다. 검은색 펜으로 원과 비슷한 모양을 그리고, 골라둔 색을 원의 안쪽에 채우려고 합니다.

<a id="14-03-04-03-04-01-a12"></a>

#### 그림 14.3.4.3.4.1.a12. 선화(Line Art) 예시
![14-03-04-03-04-01-a12](https://github.com/wonder13662/gimp/assets/15767104/37a7d02f-53d0-4246-8bcc-94aab69e3cbc)

그렇다면 `도구 옵션` → `영역 채우기` → `영향을 받는 영역` → `비슷한 색상 채우기`를 사용해서 비슷한 색상 영역을 선택한 색으로 칠할 수 있습니다. 하지만 이 방법은 2가지 문제가 있습니다.

<a id="14-03-04-03-04-01-a11"></a>

#### 영상 14.3.4.3.4.1.a11. 비슷한 색으로 `영역 채우기`를 했을때의 2가지 문제
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/7d1a1d8d-0d5d-4841-882a-6e6ee76d7221"></video>

### 1-1. 문제: 채운 색상이 선화 바깥으로 삐져 나옴
[선화(line art)](https://en.wikipedia.org/wiki/Line_art)가 닫히지 않았다면, 색이 바깥으로 빠져나옵니다. 선이 1픽셀이라도 뚫려있다면, 이와 같은 문제가 있습니다. 그리고 이러한 원인을 찾는데 시간을 낭비하게 됩니다. 이러한 닫히지 않은 선화는 거친 스타일의 선을 쓰는 예술적인 선택일수도 있습니다.

### 1-2. 문제: 선화의 경계에 하얀 픽셀이 생김
닫혀있지 않은 선화에 대해 비슷한 색으로 `영역 채우기`를 하게되면, 선화 바로 옆의 경계는 보간법(interpolation) 또는 앨리어싱 등으로 인해 선화 주변의 하얀 픽셀이 생기는 좋지 않은 결과가 나옵니다. 

이를 해결하기 위해 다양한 다른 방법을 시도해볼 수 있습니다. 흐린 선택 도구를 사용하거나, 선택을 늘이거나 줄인 뒤에 비슷한 색으로 `영역 채우기`를 해 볼 수 있습니다. 때로는 직접 칠하는 것이 가장 나을 때도 있습니다.

## 2. 알고리즘
이 알고리즘은 기본적으로 2개의 단계를 갖고 있습니다. 그리고 아래의 연구 논문을 기반으로 하고 있습니다.

<a id="14-03-04-03-04-01-a21"></a>

#### 파일 14.3.4.3.4.1.a21. A Fast and Efficient Semi-guided Algorithm for Flat Coloring Line-arts
[vmv2018.pdf](https://github.com/wonder13662/gimp/files/15295222/vmv2018.pdf)

### 2-1. 닫힌 선화(line art)로 만들기
열신 선화를 닫기 위해서는 우선 연결되지 않은 선분의 끝을 찾아야 합니다. 그리고 직선이나 스플라인 곡선으로 선분의 끝을 연결합니다.

### 2-2. 색이 채워지지 않는 경계의 픽셀 지우기
만들어진 닫힌 영역에 색을 채울 때의 경계의 색이 채워지지 않은 픽셀들을 없애기 위해 선화의 픽셀을 약간 제거합니다.

`검출된 외곽선에 채우기(Fill by line art detection)`의 사용 모습은 아래와 같습니다.

<a id="90-03-02-21-a5-03-01"></a>

#### [영상 90.3.2.21.a5.3.1. `도구 옵션` → `영역 채우기` → `영향을 받는 영역` → `검출된 외곽선에 채우기`: 레이어 클릭 (Windows) (우리말)](./90-03-02-21-bucket_fill.md#90-03-02-21-a5-03-01)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/9e047014-0ab5-4851-8ed4-04287e5380cf"></video>

이 알고리즘에 대해 좀 더 상세히 알고싶다면, 위에 첨부한 [논문](./14-03-04-03-04-01-smart_colorization.md#14-03-04-03-04-01-a21)을 확인해주세요.

이 알고리즘을 실제로 GIMP(김프)에 적용한 Jehan은 GIMP 2.10 이전의 Smart Colorization을 개선하는 과정에 대해 [원문: Smart Colorization in GIMP](https://girinstud.io/news/2019/02/smart-colorization-in-gimp/)에서 설명하고 있습니다.

1. 넓은 너비의 붓의 스트로크로 그려진 직선에 대해 처리하지 못하는 문제를 해결
2. 기존 알고리즘의 퍼포먼스를 개선함

다만 이 내용은 다소 기술적인 내용이 많아 일반 사용자의 경우에는 이해의 어려움이 있습니다. 그리고 Jehan이 구현한 내용은 현재 소스코드에서는 확인이 되지 않습니다. 그러므로 작업 내역이나 알고리즘의 역사적인 내용 확인을 위해서는 직접 원문을 참고하시길 바립니다.

[comment]: <> (TODO 글 작성자로부터 저작권 허락을 받아야함)

***

## 다른 페이지로 가기

[➡️ 다음: 14.3.4.3.5. 색상이 비슷한 영역 찾기(Finding Similar Colors)](./14-03-04-03-05-finding_similar_colors.md)

[⬅️ 이전: 14.3.4.3.4. 영향을 받는 영역(Affected Area)](./14-03-04-03-04-00-affected_area.md)

[⬆️ 위: 14.3.4.3. 옵션(Options)](./14-03-04-03-00-options.md)

[⬆️ 위: 14.3.4. 영역 채우기(Bucket fill)](./14-03-04-00-bucket_fill.md)

[⬆️ 위: 14.3. 칠하기 도구(Paint tools)](./14-03-00-paint_tools.md)

[⬆️ 위: 14. 도구(Tools)](./14-00-tools.md)

[🏠 홈](./00-home.md)

[원문: Smart Colorization in GIMP](https://girinstud.io/news/2019/02/smart-colorization-in-gimp/)