# 9.1.2. 텍스트 레이어 관리(Managing Text Layer)
다른 레이어들처럼 텍스트 레이어도 다양한 변경 작업을 할 수 있습니다. 하지만 이렇게 변경을 하게 되면, 텍스트 레이어의 기능을 잃어버리게 됩니다.

텍스트 레이어에는 눈에 보이는 픽셀 외에 텍스트 편집기에서의 텍스트 표현에 관한 정보를 포함하고 있습니다. 이 정보는 텍스트 도구를 사용할 때 호출되는 텍스트 편집기에서 볼 수 있습니다. 텍스트 편집기에서 텍스트를 고치자마자 변경된 값이 레이어에 적용됩니다.

## 1. 텍스트 레이어 변형하기
텍스트 레이어를 만든 후, 텍스트 도구가 아닌 회전시키기와 같은 작업을 합니다. 

#### 영상 90.4.66.a105. 텍스트 레이어를 변형하여 `텍스트 편집 확인` 대화상자 띄우기 (Windows) (우리말)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/5607b421-5301-4cf7-9505-3fb0516b8850"></video>

## 2. 텍스트 편집 확인 대화상자 띄우기
그 다음에 다시 텍스트 도구로 텍스트를 수정하면 텍스트 도구는 텍스트 편집 확인 대화상자를 띄웁니다. 여기서 3가지 선택을 할 수 있습니다.

#### 그림 90.4.66.a101. `텍스트 편집 확인` 대화상자 (Windows) (우리말)
![90-04-66-a101-dialog_confirm_text_editing(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/d82593ac-48e6-4939-a096-e4be7ab09f71)

### 2-1. 새 레이어 만들기
텍스트 레이어를 변형한 이미지 레이어는 그대로 두고, 이전 텍스트 레이어를 새로운 텍스트 레이어로 복사합니다.

#### 영상 90.4.66.a106. `텍스트 편집 확인` 대화상자 → `새 레이어 만들기` (Windows) (우리말)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/58174c32-aca6-40fb-8a43-6365dce7cb08"></video>

### 2-2. 편집
텍스트 레이어를 변형한 이미지 레이어를 버리고, 이전 텍스트 레이어를 되살립니다.

#### 영상 90.4.66.a107. `텍스트 편집 확인` 대화상자 → `편집` (Windows) (우리말)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/27bac218-9775-4b41-a01a-d74ca0464d37"></video>

### 2-3. 취소
텍스트 레이어를 변형한 이미지 레이어를 그대로 둡니다.

#### 영상 90.4.66.a108. `텍스트 편집 확인` 대화상자 → `취소` (Windows) (우리말)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/581eb616-4bd8-4fa1-873e-9dab1cd96320"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 9.1.3. 텍스트 도구 상자(Text Toolbox)](./09-01-03-text_toolbox.md)

[⬅️ 이전: 9.1.1. 텍스트 영역(Text Area)](./09-01-01-text_area.md)

[⬆️ 위: 9.1. 텍스트 관리(Text management)](./09-01-text-management.md)

[⬆️ 위: 9. 텍스트 관리(Text management)](./09-00-text-management.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-image-text-management.html#managing-text-layer)
