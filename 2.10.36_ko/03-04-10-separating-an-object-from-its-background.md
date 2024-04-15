# 3.4.10. 원하는 개체만 선택하여 분리하기
#### 그림 3.39. 배경과 함께 있는 개체
<img width="480" alt="그림 3.39. 배경과 함께 있는 개체" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/5da7466a-2291-40d0-82a1-2d407e1cd0a6">

때때로 개체를 배경에서 분리해야 할 경우가 있습니다. 단색의 배경 위에 개체를 올리고 싶거나, 배경을 투명하게 두고 다른 배경 위에 쓰고 싶은 경우 입니다. 그러기 위해서는 GIMP의 선택 도구로 개체의 선택 영역을 그려야 합니다. 그러므로 적절한 선택 도구를 고르는 것이 중요합니다. 배경분리를 위한 선택 작업을 할 수 있는 선택 도구들은 아래와 같습니다.

### 3.4.10.0.1. 자유 선택 도구(올가미)
자유 선택 도구로 경계를 직접 임의로 그리거나 직선을 그릴 수 있습니다. 자유 선택 도구는 비교적 단순한 형태를 선택할 때 사용합니다. 상세한 내용은 [14.2.4. 자유 선택 도구(올가미)](./14-02-04-free-selection-lasso.md)를 참고해주세요.

<a id="90-03-02-05-a2"></a>

#### [그림 90.3.2.5.a2. 도구상자 - 자유 선택 도구(올가미)](./90-03-02-05-free_select.md#90-03-02-05-a2)
![90-03-02-05-a2](https://github.com/wonder13662/gimp/assets/15767104/f0d4efd4-aee4-4af4-a282-a4d2756369fa)

<a id="90-01-08-01-03-a101"></a>

#### [그림 90.1.8.1.3.a101. `도구` → `선택도구` → `자유 선택` (Windows)](./90-01-08-01-03-free_select.md#90-01-08-01-03-a101)
![90-01-08-01-03-a101](https://github.com/wonder13662/gimp/assets/15767104/0e52854b-a1bb-44b9-80e5-5fbf63bb586c)

[다른 운영체제와 언어의 `도구` → `선택도구` → `자유 선택` 확인하기](./90-01-08-01-03-free_select.md#90-01-08-01-03-a102)

<a id="90-03-02-05-a101"></a>

#### [영상 90.3.2.5.a101. 자유 선택 도구(올가미) 사용하기 - 자유롭게 그리기](./90-03-02-05-free_select.md#90-03-02-05-a101)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/fa4089d6-4cff-4b95-9a37-b38ce28e642a"></video>

<a id="90-03-02-05-a102"></a>

#### [영상 90.3.2.5.a102. 자유 선택 도구(올가미) 사용하기 - 직선으로 그리기](./90-03-02-05-free_select.md#90-03-02-05-a102)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/65c479b4-d623-434a-a094-f5b8283e9e1a"></video>

### 3.4.10.0.2. 똑똑한 가위(Intelligent Scissors Select Tool)
사용자가 경계를 자유롭게 선택하고, 개체 주변의 경계를 자동으로 인식하는 알고리즘으로 선택영역을 만듭니다. 개체가 배경과 명백하게 구분되면서 경계가 복잡한 경우에 사용합니다. 상세한 내용은 [14.2.7. 똑똑한 가위](./14-02-07-intelligent-scissors.md)를 참고해주세요. 

<a id="90-03-02-06-a2"></a>

#### [그림 90.3.2.6.a2. 도구상자 - 똑똑한 가위](./90-03-02-06-scissors_select.md#90-03-02-06-a2)
![90-03-02-06-a2](https://github.com/wonder13662/gimp/assets/15767104/5c84b429-415b-40b7-a348-b803a667fd08)

<a id="90-01-08-01-07-a101"></a>

#### [그림 90.1.8.1.7.a101. `도구` → `선택 도구` → `똑똑한 가위` (Windows)](./90-01-08-01-07-intelligent_scissors.md#90-01-08-01-07-a101)
![90-01-08-01-07-a101](https://github.com/wonder13662/gimp/assets/15767104/c0186fc5-3219-4061-8885-751f87493a9a)

[다른 운영체제와 언어의 `도구` → `선택 도구` → `똑똑한 가위` 확인하기](./90-01-08-01-07-intelligent_scissors.md#90-01-08-01-07-a102)

<a id="90-01-08-01-07-a103"></a>

#### [영상 90.1.8.1.7.a103. 똑똑한 가위 선택 사용](./90-01-08-01-07-intelligent_scissors.md#90-01-08-01-07-a103)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/207b3a3a-7d36-4e60-a49a-d9c3d9e23e86"></video>

### 3.4.10.0.3. 전경 선택(The "Foreground Select Tool")
선택 영역을 전경색(Foreground color) 혹은 배경색(Background color)로 나타내고, 선택영역을 정교하게 개선합니다. 상세한 내용은 [14.2.8. 물체 선택 도구](./14-02-08-foreground-select.md)을 참고해주세요. (TODO 번역한 내용이 매끄럽지 않은 것 같다. 혹은 맞지 않을 수도 있다. 상세 내용을 번역한 뒤에 다시 고쳐보자)

<a id="90-03-02-07-a2"></a>

#### [그림 90.3.2.7.a2. 도구상자 - 전경 선택](./90-03-02-07-foreground_select.md#90-03-02-07-a2)
![90-03-02-07-a2](https://github.com/wonder13662/gimp/assets/15767104/05285a09-156c-43d6-839f-60da3269ea21)

<a id="90-01-08-01-04-a101"></a>

#### [그림 90.1.8.1.4.a101.`도구` → `선택도구` → `전경 선택` (Windows)](./90-01-08-01-04-foreground_select.md#90-01-08-01-04-a101)
![90-01-08-01-04-a101](https://github.com/wonder13662/gimp/assets/15767104/7c56969f-2f81-4f34-93c9-0259b5e6da5e)

[다른 운영체제와 언어의 `도구` → `선택도구` → `전경 선택` 확인하기](./90-01-08-01-04-foreground_select.md#90-01-08-01-04-a102)

<a id="90-01-08-01-04-a111"></a>

#### [영상 90.1.8.1.4.a111. 전경 선택 사용](./90-01-08-01-04-foreground_select.md#90-01-08-01-04-a111)
<video controls="controls" width="1080" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/1e7277a6-5d44-4ce8-a74d-e163c8faa259"></video>

## 3.4.10.1. 개체를 선택 영역으로 선택한 뒤
개체를 선택 영역으로 선택한 뒤에, 이미지 메뉴 바(Image Menu Bar)의 `선택(Select)` → `반전(Invert)` 메뉴를 선택합니다. 그러면 개체 대신에 배경이 선택됩니다. 선택된 배경으로 여러가지 작업을 해볼 수 있습니다.

<a id="90-01-03-03-a101"></a>

#### [그림 90.1.3.3.a101. `선택` → `반전`](./90-01-03-03-invert.md#90-01-03-03-a101)
![90-01-03-03-a101](https://github.com/wonder13662/gimp/assets/15767104/7de10abb-638d-4d04-8436-7368cf694769)

### 3.4.10.1.2. 배경을 단일 색상으로 채우기
도구상자의 전경색 미리보기를 클릭하여 원하는 색상을 선택합니다. 그리고 [14.3.4. 채우기 도구](./14-03-04-bucket-fill.md)를 이용하여 배경을 선택한 색상으로 채웁니다.

<a id="90-03-02-21-a2"></a>

#### [그림 90.3.2.21.a2. 도구상자 - 영역 채우기](./90-03-02-21-bucket_fill.md#90-03-02-21-a2)
![90-03-02-21-a2](https://github.com/wonder13662/gimp/assets/15767104/0550285d-2807-4201-87b2-77b5e8cd8278)

#### 그림 3.43. 배경을 단일 색상으로 채운 결과
<img width="480" alt="그림 3.43. 배경을 단일 색상으로 채운 결과" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/3305f968-92e1-456e-abb8-49225b96e0f6">

#### 영상 3.4.10.1.2.2. 배경을 단일 색상으로 채우는 과정
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/c89116d8-2ce7-462a-9043-01fb9a07ec3a"></video>

### 3.4.10.1.2. 선택한 개체의 색상은 유지하면서 배경만 흑백으로 만들기
[이미지 메뉴 바(Image Menu Bar)](./03-02-02-02-image-menu.md)의 `색(Colors)` → `무채화(Desaturate)` 메뉴를 선택합니다. 무채화 대화상자에서 모드를 변경하면서 가장 좋은 모드를 선택한 다음 "확인" 버튼을 누릅니다.

<a id="90-01-07-16-a1"></a>

#### [그림 90.1.7.16.a1. `색` → `무채화` (Windows)](./90-01-07-16-desaturate.md#90-01-07-16-a1)
![90-01-07-16-a1](https://github.com/wonder13662/gimp/assets/15767104/a35c267e-bebe-406d-9d05-2301280d1ae8)

[다른 운영체제와 언어의 `색` → `무채화` 확인하기](./90-01-07-16-desaturate.md#90-01-07-16-a2)

#### 그림 3.44. 배경을 흑백으로 만든 결과
<img width="480" alt="그림 3.44. 배경을 흑백으로 만든 결과" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/97ab65f1-e0bd-41fc-9e06-3c5ac9eeb7bb">

#### 영상 3.4.10.1.2.2. 배경을 흑백으로 만드는 과정
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/85aced40-32f1-4c7c-b678-646b5d5f54b3"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 3.5.1. 목적](./03-05-01-intention.md)

[⬅️ 이전: 3.4.9. 이미지 회전하기](./03-04-09-rotate-an-image.md)

[⬆️ 위: 3.4. 자주하는 편집 작업](./03-04-00-common-tasks.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-tutorial-quickie-separate.html)
