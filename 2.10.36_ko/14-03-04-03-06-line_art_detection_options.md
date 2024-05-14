# 14.3.4.3.6. 선화 감지 옵션("Line Art Detection" option)

<a id="90-03-02-21-a8-01"></a>

#### [그림 90.3.2.21.a8.1. `도구 옵션` → `영역 채우기` → `선화 감지` (Windows) (우리말)](./90-03-02-21-bucket_fill.md#90-03-02-21-a8-01)
![90-03-02-21-a8-01](https://github.com/wonder13662/gimp/assets/15767104/20dd26a7-110f-4192-b2fe-a9a280f911c1)

`선화 감지(Line Art Detection)` 옵션은 `도구 옵션` → `영향을 받는 영역` → `선화 감지로 채우기` 옵션이 체크되어야 보입니다.

<a id="90-03-02-21-a8-02"></a>

#### [그림 90.3.2.21.a8.2. `도구 옵션` → `영역 채우기` → `선화 감지`: `선화 감지로 채우기` 선택 토글 (Windows) (우리말)](./90-03-02-21-bucket_fill.md#90-03-02-21-a8-02)
![90-03-02-21-a8-02](https://github.com/wonder13662/gimp/assets/15767104/5d969812-1cbf-4712-b473-f6459312f16a)

## 1. 원본(Source)
기본값으로 선화 계산에 대한 정보는 `모든 보이는 레이어(All visible layers)`에서 가져옵니다. 또한 다른 원본 대상을 선택할 수도 있습니다.

<a id="90-03-02-21-a8-03"></a>

#### [그림 90.3.2.21.a8.3. `도구 옵션` → `영역 채우기` → `선화 감지` → `원본` (Windows) (우리말)](./90-03-02-21-bucket_fill.md#90-03-02-21-a8-03)
![90-03-02-21-a8-03](https://github.com/wonder13662/gimp/assets/15767104/473ef575-2a51-4eca-ab53-76eba9f2ec81)

## 2. 투명한 영역 채우기(Fill transparent areas)
이 옵션을 선택하면 완전히 투명한 영역만 색을 채웁니다.

아래 영상을 확인해보면, 이 옵션이 체크되어 있지 않은 상태에서는 불투명한 영역은 채워지지만, 투명한 영역은 선화 영역이 아닌 레이어 전체가 채워지는 현상을 확인할 수 있습니다. 이 옵션이 체크된 상태에서는 투명한 영역의 선화 영역이 채워지는 것을 확인할 수 있습니다.

<a id="90-03-02-21-a8-04"></a>

#### [영상 90.3.2.21.a8.4. `도구 옵션` → `영역 채우기` → `선화 감지` → `투명한 영역 채우기` (Windows) (우리말)](./90-03-02-21-bucket_fill.md#90-03-02-21-a8-04)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/a19dd719-63fb-404e-bad5-6eedd16b09d6"></video>

## 3. 가장자리 페더(Feather edges)
이 옵션을 선택하면 채운 색의 가장자리를 부드럽게 합니다.

(TODO 비교 이미지 추가 - 높은 값과 낮은 값)

## 4. 최대 확대 크기(Maximum growing size)
이 슬라이더는 선화 아래의 늘어나는 픽셀의 최대 갯수를 설정합니다. 이 슬라이더의 값을 높이면, 채우는 색의 넓이가 넓어지므로 선화의 선이 얇아집니다.

(TODO 비교 이미지 추가 - 높은 값과 낮은 값)

## 5. 선화 감지 임계값(Line art detection threshold)
이 슬라이더는 외곽선을 감지하는 임계값(Threshold)을 설정합니다. 값이 높을수록 더 많은 픽셀을 감지합니다.

(TODO 비교 이미지 추가 - 높은 값과 낮은 값)

## 6. 최대 간격 길이(Maximum gap length)
선화 안에서의 닫을 수 있는 픽셀 단위의 최대 간격의 값을 설정합니다.

(TODO 비교 이미지 추가 - 높은 값과 낮은 값)

***

## 다른 페이지로 가기

[➡️ 다음: 14.3.4.4. 흐릿한 경계가 있는 선택 채우기(Fill a feathered selection)](./14-03-04-04-fill_a_feathered_selection.md)

[⬅️ 이전: 14.3.4.3.5. 색상이 비슷한 영역 찾기(Finding Similar Colors)](./14-03-04-03-05-finding_similar_colors.md)

[⬆️ 위: 14.3.4.3. 옵션(Options)](./14-03-04-03-00-options.md)

[⬆️ 위: 14.3.4. 영역 채우기(Bucket fill)](./14-03-04-00-bucket-fill.md)

[⬆️ 위: 14.3. 칠하기 도구(Paint tools)](./14-03-00-paint-tools.md)

[⬆️ 위: 14. 도구(Tools)](./14-00-tools.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-tool-bucket-fill.html#idm12556)
