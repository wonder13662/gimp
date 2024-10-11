# 16.8.10.2.4.2. 입력 레벨을 조정하는 방법

<a id="16-08-10-02-04-02-s1"></a>

## 1. 세 개의 삼각형이 있는 슬라이더

<a id="90-04-202-a143"></a>

#### [그림 90.4.202.a143. `레벨` 대화상자 → `채널` → `입력 레벨` → `세 개의 삼각형이 있는 슬라이더` (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a143)
<img width="382" height="570" alt="90-04-202-a143" src="https://github.com/user-attachments/assets/050ffe1d-3856-4999-8f38-456fdd073eef" />

슬라이더의 삼각형을 왼쪽으로 움직이면 이미지의 색조가 강해지고, 불투명도가 증가해 이미지가 밝아집니다.

반대로 슬라이더의 삼각형을 오른쪽으로 움직이면 이미지의 색조가 약해지고, 불투명도가 감소해 이미지가 어두워집니다.

<a id="16-08-10-02-04-02-s1-01"></a>

### 1-1. 슬라이더 왼쪽의 검은색 삼각형

<a id="90-04-202-a143-01"></a>

#### [그림 90.4.202.a143.1. `레벨` 대화상자 → `채널` → `입력 레벨` → `세 개의 삼각형이 있는 슬라이더` → `슬라이더 왼쪽의 검은색 삼각형` (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a143-01)
<img width="382" height="570" alt="90-04-202-a143-01" src="https://github.com/user-attachments/assets/a25b819a-485b-474c-829d-ec13e0cf11ac" />

검은색 삼각형은 이미지의 [블랙 포인트(Black point)](./19-glossaryx-black_point.md)를 결정합니다.

검은색 삼각형의 위치와 같거나 왼쪽에 위치한 픽셀은 [색상 채널](./19-glossaryx-channel.md)은 검은색, [알파 채널](./19-glossaryx-alpha_channel.md)은 투명이 됩니다.

<a id="90-04-202-a143-01-01"></a>

#### [영상 90.4.202.a143.1.1. `레벨` 대화상자 → `채널` → `입력 레벨` → `세 개의 삼각형이 있는 슬라이더` → `슬라이더 왼쪽의 검은색 삼각형` (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a143-01-01)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/2c08ec75-ff33-4940-8a2c-4ab224de42a8"></video>

<a id="16-08-10-02-04-02-s1-02"></a>

### 1-2. 슬라이더 가운데의 회색 삼각형

<a id="90-04-202-a143-02"></a>

#### [그림 90.4.202.a143.2. `레벨` 대화상자 → `채널` → `입력 레벨` → `세 개의 삼각형이 있는 슬라이더` → `슬라이더 가운데의 회색 삼각형` (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a143-02)
<img width="382" height="570" alt="90-04-202-a143-02" src="https://github.com/user-attachments/assets/99e9ea14-0bd6-41b8-aef6-efbac8f358e9" />

회색 삼각형은 중간톤을 결정합니다.

회색 삼각형을 왼쪽(검은색)으로 움직이면 색상 채널은 색조가 강해지고 밝아지며, 알파 채널은 더 불투명하게 되어 이미지가 밝아집니다.

반대로 회색 삼각형을 오른쪽(하얀색)으로 움직이면 색상 채널은 색조가 약해고 어두워지며, 알파 채널은 더 투명하게 되어 이미지가 어두워집니다.

<a id="90-04-202-a143-02-01"></a>

#### [영상 90.4.202.a143.2.1. `레벨` 대화상자 → `채널` → `입력 레벨` → `세 개의 삼각형이 있는 슬라이더` → `슬라이더 가운데의 회색 삼각형` (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a143-02-01)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/93554f0a-054d-4473-b5c9-5bf3361f3cce"></video>

<a id="16-08-10-02-04-02-s1-03"></a>

### 1-3. 슬라이더 오른쪽의 하얀색 삼각형

<a id="90-04-202-a143-03"></a>

#### [그림 90.4.202.a143.3. `레벨` 대화상자 → `채널` → `입력 레벨` → `세 개의 삼각형이 있는 슬라이더` → `슬라이더 오른쪽의 하얀색 삼각형` (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a143-03)
<img width="382" height="570" alt="90-04-202-a143-03" src="https://github.com/user-attachments/assets/bcf5cc5d-6e2e-48a3-9e85-04ab632a5874" />

하얀색 삼각형은 [화이트 포인트(White point)](./19-glossaryx-white_point.md)를 결정합니다.

하얀색 삼각형의 위치와 같거나 오른쪽에 위치한 픽셀은 [색상 채널](./19-glossaryx-channel.md)은 하얀색, [알파 채널](./19-glossaryx-alpha_channel.md)은 불투명이 됩니다.

<a id="90-04-202-a143-03-01"></a>

#### [영상 90.4.202.a143.3.1. `레벨` 대화상자 → `채널` → `입력 레벨` → `세 개의 삼각형이 있는 슬라이더` → `슬라이더 오른쪽의 하얀색 삼각형` (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a143-03-01)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/b0d742b3-cc86-4334-94a1-016bf7eef29a"></video>

<a id="16-08-10-02-04-02-s2"></a>

## 2. 두 개의 스포이드

<a id="16-08-10-02-04-02-s2-01"></a>

### 2-1. 왼쪽 스포이드

<a id="90-04-202-a144-01"></a>

#### [그림 90.4.202.a144.1. `레벨` 대화상자 → `채널` → `입력 레벨` → `두 개의 스포이드` → `왼쪽 스포이드` (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a144-01)
<img width="382" height="570" alt="90-04-202-a144-01" src="https://github.com/user-attachments/assets/0f984553-98c8-4aaa-8597-063697134a16" />

왼쪽 스포이드 버튼을 클릭하면, 마우스 포인터가 스포이드 모양으로 바뀝니다.

그 뒤에 이미지 위를 클릭하면, [블랙 포인트(Black Point)](./19-glossaryx-black_point.md)가 결정됩니다.

<a id="90-04-202-a144-01-01"></a>

#### [영상 90.4.202.a144.1.1. `레벨` 대화상자 → `채널` → `입력 레벨` → `두 개의 스포이드` → `왼쪽 스포이드` (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a144-01-01)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/6820a1ec-ea34-43a6-958a-00c3e19ad0d5"></video>

<a id="16-08-10-02-04-02-s2-02"></a>

### 2-2. 오른쪽 스포이드

<a id="90-04-202-a144-02"></a>

#### [그림 90.4.202.a144.2. `레벨` 대화상자 → `채널` → `입력 레벨` → `두 개의 스포이드` → `오른쪽 스포이드` (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a144-02)
<img width="382" height="570" alt="90-04-202-a144-02" src="https://github.com/user-attachments/assets/72d516ee-da54-410a-98ca-3aae63bd1552" />

오른쪽 스포이드 버튼을 클릭하면, 마우스 포인터가 스포이드 모양으로 바뀝니다.

그 뒤에 이미지 위를 클릭하면, [화이트 포인트(White Point)](./19-glossaryx-white_point.md)가 결정됩니다.

<a id="90-04-202-a144-02-01"></a>

#### [영상 90.4.202.a144.2.1. `레벨` 대화상자 → `채널` → `입력 레벨` → `두 개의 스포이드` → `오른쪽 스포이드` (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a144-02-01)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/d5606eaf-e2d3-40bf-888e-da14a361ba4d"></video>

<a id="16-08-10-02-04-02-s3"></a>

## 3. 입력창에 값을 직접 입력하기

<a id="90-04-202-a145"></a>

#### [그림 90.4.202.a145. `레벨` 대화상자 → `채널` → `입력 레벨` → `입력창` (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a145)
<img width="382" height="570" alt="90-04-202-a145" src="https://github.com/user-attachments/assets/8466739d-c2f1-4733-bd25-1f7da16a49d0" />

입력창에 값을 직접 입력할 수도 있습니다.

<a id="90-04-202-a145-01"></a>

#### [영상 90.4.202.a145.1. `레벨` 대화상자 → `채널` → `입력 레벨` → `입력창` (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a145-01)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/6a01e60f-29a8-46e5-83b0-c5f075aede1f"></video>

<a id="16-08-10-02-04-02-s4"></a>

## 4. 입력값 고정하기(Clamp input)

<a id="90-04-202-a146"></a>

#### [그림 90.4.202.a146. `레벨` 대화상자 → `채널` → `입력 레벨` → `입력값 고정하기` (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a146)
<img width="382" height="570" alt="90-04-202-a146" src="https://github.com/user-attachments/assets/8158f3fb-3346-452b-84b9-f4ba8bcf0fe0" />

`입력값 고정하기(Clamp input)` 항목은 [원문]()에서도 설명되어 있지 않습니다.

[Gimp-Forum.net](https://www.gimp-forum.net/Thread-levels-clamp-input-output-question?highlight=clamp+input)에서 검색해본 내용으로는 레벨에서 처리한 입력값을 에러가 발생하지 않도록 입력 범위를 고정하는 역할을 하는 것으로 설명하고 있습니다.

추후 정확한 내용이 나오면 업데이트가 될 예정입니다.

<a comment="TODO 관련 내용 업데이트 필요"></a>