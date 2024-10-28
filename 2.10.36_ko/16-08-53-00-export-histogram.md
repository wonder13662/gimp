# 16.8.53. 히스토그램 내보내기(Export Histogram)

<a id="90-01-07-19-04-a101"></a>

#### [그림 90.1.7.19.4.a101. `이미지 메뉴 바` → `색` → `정보` → `히스토그램 내보내기` (Windows)](./90-01-07-19-04-export_histogram.md#90-01-07-19-04-a101)
<img width="516" height="266" alt="90-01-07-19-04-a101" src="https://github.com/user-attachments/assets/cbad7c1c-56d2-40b1-bad4-d1592dabec02" />

<a id="16-08-53-s1"></a>

## 1. 기능 설명
`히스토그램 내보내기(Export Histogram)` 명령으로 선택된 이미지 영역의 히스토그램을 텍스트 파일로 내보낼 수 있습니다.

이 텍스트 파일은 `CSV(Comma Separated Values)` 형식이므로 다른 스프레드시트 어플리케이션에서 사용할 수 있습니다.

참고로 이미지의 완전히 투명한 부분은 집계하지 않습니다.

<a id="16-08-53-s2"></a>

## 2. 내보낸 파일의 정보 설명

<a id="16-08-53-s2-01"></a>

### 2-1. 행(Row)

<a id="90-04-224-a131-01"></a>

#### [그림 90.4.224.a131.1. `python-fu-histogram-export` 대화상자: CSV 파일 내용 → 행](./90-04-0224-python_fu_histogram_export.md#90-04-224-a131-01)
<img width="652" height="85" alt="90-04-224-a131-01" src="https://github.com/user-attachments/assets/ec16f3f7-75fd-4f2c-b570-d141193c2ad5" />

CSV 파일의 첫번째 행은 제목 행입니다.

<a id="16-08-53-s2-02"></a>

### 2-2. 양동이(Bucket)

<a id="90-04-224-a131-02"></a>

#### [그림 90.4.224.a131.2. `python-fu-histogram-export` 대화상자: CSV 파일 내용 → 색상 채널 별 양동이(Bucket)의 픽셀 갯수](./90-04-0224-python_fu_histogram_export.md#90-04-224-a131-02)
<img width="652" height="85" alt="90-04-224-a131-02" src="https://github.com/user-attachments/assets/e5826a93-80ca-41fd-961e-26af656196c9" />

CSV 파일의 두번째 행 이후부터의 각 행의 칸은 "양동이(Bucket)"을 나타냅니다.

각 픽셀은 색상 채널별 0부터 255까지의 값을 가질 수 있습니다.

하나의 양동이(Bucket)에 포함될 수 있는 픽셀의 색상 채널의 값의 범위는 `python-fu-histogram-export` 대화상자 → `양동이 크기(Bucket Size)`에 따라 달라집니다.

<a id="16-08-53-s2-03"></a>

### 2-3. 범위 시작(Range Start)

<a id="90-04-224-a131-03"></a>

#### [그림 90.4.224.a131.3. `python-fu-histogram-export` 대화상자: CSV 파일 내용 → 범위 시작](./90-04-0224-python_fu_histogram_export.md#90-04-224-a131-03)
<img width="652" height="85" alt="90-04-224-a131-03" src="https://github.com/user-attachments/assets/8e116e23-85ce-49b1-a06a-29104a2f8a1c" />

행의 첫번째 열은 `범위 시작(Range Start)`이며 각 양동이(Bucket)의 시작값을 나타냅니다.

<a id="16-08-53-s2-04"></a>

### 2-4. 각 채널별 값

<a id="90-04-224-a131-02"></a>

#### [그림 90.4.224.a131.2. `python-fu-histogram-export` 대화상자: CSV 파일 내용 → 색상 채널 별 양동이(Bucket)의 픽셀 갯수](./90-04-0224-python_fu_histogram_export.md#90-04-224-a131-02)
<img width="652" height="85" alt="90-04-224-a131-02" src="https://github.com/user-attachments/assets/e5826a93-80ca-41fd-961e-26af656196c9" />

`범위 시작(Range Start)` 열의 다음 열들은 [출력 형식](./16-08-53-01-04-output_format.md)에 따른 각 색상 채널별 값(여기서는 픽셀의 갯수)을 표시합니다.

색상 채널은 [이미지 타입](./05-01-image-types.md)에 따라 달라집니다.

<a id="16-08-53-s2-05"></a>

### 2-5. 예시

<a id="90-04-224-a111"></a>

#### [그림 90.4.224.a111. `python-fu-histogram-export` 대화상자: 예시 이미지](./90-04-0224-python_fu_histogram_export.md#90-04-224-a111)
<img width="160" height="360" alt="90-04-224-a111" src="https://github.com/user-attachments/assets/b82dc57a-188e-4efe-9c74-bf1d66ee8983" />

<a id="90-04-224-a121"></a>

#### [그림 90.4.224.a121. `python-fu-histogram-export` 대화상자: 예시 이미지를 내보내기](./90-04-0224-python_fu_histogram_export.md#90-04-224-a121)
<img width="340" height="350" alt="90-04-224-a121" src="https://github.com/user-attachments/assets/4d7659b8-14fa-47a9-a4c8-86991b273666" />

예시 이미지에서 히스토그램을 추출한 결과를 살펴보겠습니다.

여기서는 [출력 형식](./16-08-53-01-04-output_format.md)을 "픽셀 갯수(Pixel Count)"를 사용합니다.

그리고 "양동이 크기(Bucket Size)"는 8입니다.

<a id="90-04-224-a131"></a>

#### [그림 90.4.224.a131. `python-fu-histogram-export` 대화상자: CSV 파일 내용](./90-04-0224-python_fu_histogram_export.md#90-04-224-a131)
<img width="652" height="694" alt="90-04-224-a131" src="https://github.com/user-attachments/assets/bb476808-2a5e-4822-ae74-d757688c99e7" />

마지막 행인 `RGB(64, 0, 0)`은 64이상 74미만의 값을 가지는 모든 픽셀을 가지고 있습니다.

`RGB(64, 0, 0)`의 Red(빨간 색상 채널)에는 값이 6400이며, 이것은 "6400개의 픽셀이 64 이상 72 미만의 빨간 색상 채널의 값을 가지고 있다"는 의미입니다.

<a id="16-08-53-s3"></a>

### 3. 명령 활성화하기: `이미지 메뉴 바` → `색` → `정보` → `히스토그램 내보내기`

<a id="90-01-07-19-04-a111"></a>

#### [영상 90.1.7.19.4.a111. `이미지 메뉴 바` → `색` → `정보` → `히스토그램 내보내기` (Windows) (우리말)](./90-01-07-19-04-export_histogram.md#90-01-07-19-04-a111)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/60862b68-8fd4-479a-8ac2-8b17bc92d048"></video>

***

## 하위 페이지

[16.8.53.1. 옵션(Options)](./16-08-53-01-00-options.md)

[16.8.53.1.1. 히스토그램 파일(Histogram File)](./16-08-53-01-01-histogram_file.md)

[16.8.53.1.2. 양동이 크기(Bucket Size)](./16-08-53-01-02-bucket_size.md)

[16.8.53.1.3. 표본 평균(Sample Average)](./16-08-53-01-03-sample_average.md)

[16.8.53.1.4. 출력 형식(Output Format)](./16-08-53-01-04-output_format.md)

***

## 다른 페이지로 가기

[➡️ 다음: 16.8.53.1. 옵션(Options)](./16-08-53-01-00-options.md)

[⬅️ 이전: 16.8.52. 색상 큐브 분석(Colorcube Analysis)](./16-08-52-colorcube-analysis.md)

[⬆️ 위: 16.8. 색 메뉴(The colors menu)](./16-08-00-the-colors-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/python-fu-histogram-export.html)