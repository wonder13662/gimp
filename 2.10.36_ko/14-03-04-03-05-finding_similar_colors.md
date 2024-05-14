# 14.3.4.3.5. 색상이 비슷한 영역 찾기(Finding Similar Colors)

<a id="90-03-02-21-a7"></a>

#### [그림 90.3.2.21.a7. `도구 옵션` → `영역 채우기` → `색상이 비슷한 영역 찾기` (Windows) (우리말)](./90-03-02-21-bucket_fill.md#90-03-02-21-a7)
![90-03-02-21-a7](https://github.com/wonder13662/gimp/assets/15767104/3d1263aa-4780-4d69-9ff1-96b4f90deb33)

`도구 옵션` → `영역 채우기` → `색상이 비슷한 영역 찾기`는 `도구 옵션` → `영역 채우기` → `영향을 받는 영역` → `영향을 받는 영역` → `비슷한 색상 채우기`을 체크해야 나타납니다.

<a id="90-03-02-21-a7-01"></a>

#### [그림 90.3.2.21.a7.1. `도구 옵션` → `영역 채우기` → `색상이 비슷한 영역 찾기`: `비슷한 색상으로 채우기` 선택 토글 (Windows) (우리말)](./90-03-02-21-bucket_fill.md#90-03-02-21-a7-01)
![90-03-02-21-a7-01](https://github.com/wonder13662/gimp/assets/15767104/825d9d15-0e68-4cb5-bd7c-48bf7467f1be)

## 1. 투명한 영역 채우기(Fill transparent areas)
불투명도가 낮은 영역을 채웁니다. 아래 첨부한 영상에서 `투명한 영역 채우기(Fill transparent areas)` 옵션을 껐을 때, 아무것도 채워지지 않지만, 옵션을 켜면 전경색이 채워지는 것을 확인할 수 있습니다.

<a id="90-03-02-21-a7-02"></a>

#### [영상 90.3.2.21.a7.2. `도구 옵션` → `영역 채우기` → `색상이 비슷한 영역 찾기` → `투명한 영역 채우기` (Windows) (우리말)](./90-03-02-21-bucket_fill.md#90-03-02-21-a7-02)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/0682e1d2-4c0f-4dee-8a17-c63a87b96335"></video>

## 2. 표본 합치기(Sample merged)
이미지 창에서 보이는 모든 레이어에서 표본을 추출하여 합칩니다. 따라서 색상에 대한 임계값을 활성화된 레이어 외의 다른 보이는 모든 레이어에 적용합니다. 아래 첨부한 영상에서 `표본 합치기(Sample merged)` 옵션을 껐을 때는 가장 위의 레이어의 전체가 색으로 채워지지만, 옵션을 켰을 때는 임계값의 범위 안에 들어간 아래의 다른 레이어들의 색상들의 범위에만 색이 채워지는 것을 확인할 수 있습니다.

<a id="90-03-02-21-a7-03"></a>

#### [영상 90.3.2.21.a7.3. `도구 옵션` → `영역 채우기` → `색상이 비슷한 영역 찾기` → `표본 합치기` (Windows) (우리말)](./90-03-02-21-bucket_fill.md#90-03-02-21-a7-03)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/ba7b1866-e94c-4103-b326-2e7fd2a05d1a"></video>

## 3. 대각선 이웃(Diagonal neighbors)
[14.2.5.4. 도구 옵션(Tool Options) - 6. 대각선 이웃(Diagonal Neighbors)](./14-02-05-04-tool_options.md#14-02-05-04-s6)을 참고해주세요.

## 4. 부드럽게 하기(Antialiasing)
[19.용어집 - 안티-앨리어싱(Anti-Aliasing)](./19-glossaryx-antialiasing.md)을 참고해주세요.

## 5. 임계값(Threshold)
`임계값(Threshold)` 슬라이더는 색을 채우는 경계를 구분하는 색의 가중치를 측정하는 단계를 설정합니다. 이 값이 높으면 더 많은 이미지의 색상의 범위가 선택한 색으로 채워집니다. 반대로, 낮은 값을 설정하면, 더 좁은 범위로 선택한 색을 채웁니다.

(TODO 예시 영상 추가 필요 - RGB 그라디언트에서 시연하는 것이 좋을 듯)

## 6. 다른 방식으로 채우기(Fill by)
With the `Fill by` option you can choose which component of the image GIMP shall use to calculate the similarity and to determine the borders of filling.

The components you can choose from are `Composite`, `Red`, `Green`, `Blue`, `Alpha`, `HSV Hue`, `HSV Saturation`, `HSV Value`, `LCh Lightness`, `LCh Chroma`, `LCh Hue`

### 6-1. 원본

|항목|값|
|---|---|
|빨강|RGB(255,0,0)|
|초록|RGB(0,255,0)|
|파랑|RGB(0,0,255)|
|전경색|RGB(255,0,255)|
|임계값(Threshold)|15|

(TODO 원본 이미지)

### 6-2. 다른 방식으로 채우기(Fill by): 합성(Composite)
이미지의 빨강, 초록, 파랑 영역을 클릭하면 임계값의 범위만큼 각각의 색상의 영역에 색이 채워집니다.

(TODO 예시 영상)

### 6-3. 다른 방식으로 채우기(Fill by): 빨강(Red) - 빨간 영역 클릭
이미지의 빨강 영역을 클릭하면, 임계값의 범위만큼 빨강의 영역에 색이 채워집니다.

(TODO 예시 영상)

### 6-4. 다른 방식으로 채우기(Fill by): 빨강(Red) - 녹색 영역 클릭
이미지의 녹색 영역을 클릭하면, 초록, 파랑 영역 전부와 임계값의 범위만큼의 빨강의 일부 영역에 색이 채워집니다. 이는 채널 중의 빨간색 채널을 기반으로 픽셀의 색상값을 판단했기 때문입니다. 빨간색 채널에서는 초록과 파랑의 색상값이 모두 0입니다. 그러므로 이 영역의 색상들은 모두 색이 채워지게 됩니다. 빨간색의 어두운 영역의 일부도 임계값의 범위에 들어가서 색이 채워지게 됩니다.

(TODO 예시 영상)

***

## 다른 페이지로 가기

[➡️ 다음: 14.3.4.3.6. 외곽선 감지 옵션("Line Art Detection" option)](./14-03-04-03-06-line_art_detection_options.md)

[⬅️ 이전: 14.3.4.3.4. 영향을 받는 영역(Affected Area)](./14-03-04-03-04-00-affected_area.md)

[⬆️ 위: 14.3.4.3. 옵션(Options)](./14-03-04-03-00-options.md)

[⬆️ 위: 14.3.4. 영역 채우기(Bucket fill)](./14-03-04-00-bucket-fill.md)

[⬆️ 위: 14.3. 칠하기 도구(Paint tools)](./14-03-00-paint-tools.md)

[⬆️ 위: 14. 도구(Tools)](./14-00-tools.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-tool-bucket-fill.html#idm12556)
