# 14.2.8.2.1. 선택 만들기(Create Selection)
`전경 선택` 도구의 사용법을 이해하기 위해서 배경과 명확히 구분되는 대상으로 시작해보겠습니다.

<a id="14-02-08-02-01-s1"></a>

## 1. 선택을 자유롭게 곡선으로 그리기
`전경 선택` 도구의 동작 방식은 [14.2.4. 자유 선택 도구(올가미) - Free selection (lasso)](./14-02-04-00-free-selection-lasso.md)와 비슷합니다. 

우선, 추출하고 싶은 대상을 대략적으로 선택합니다. 자유롭게 윤곽선을 그리기 위해서는 마우스 버튼을 클릭, 드래그를 한 채 마우스 포인터를 움직이면 됩니다.

<a id="90-01-08-01-04-a101-02"></a>

#### [영상 90.1.8.1.4.a101.2.`도구` → `선택도구` → `전경 선택`: 선택을 자유롭게 곡선으로 그리기 (Windows) (우리말)](./90-01-08-01-04-foreground_select.md#90-01-08-01-04-a101-02)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/5b6b55e9-21fd-4018-a3e1-1ec3d68fb2c5"></video>

<a id="14-02-08-02-01-s2"></a>

## 2. 선택을 직선으로 그리기
선택을 할 때 직선을 사용하기 위해서는 직선을 그릴 시작점과 끝점 사이에 클릭을 한 뒤에 버튼을 놓습니다.

<a id="90-01-08-01-04-a101-03"></a>

#### [영상 90.1.8.1.4.a101.3.`도구` → `선택도구` → `전경 선택`: 선택을 직선으로 그리기 (Windows) (우리말)](./90-01-08-01-04-foreground_select.md#90-01-08-01-04-a101-03)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/40302bc8-123e-44f1-9556-2f35467de20a"></video>

<a id="14-02-08-02-01-s3"></a>

## 3. 선택을 곡선과 직선을 함께 그리기

곡선과 직선을 섞어서 선택을 그릴 수도 있습니다.

<a id="90-01-08-01-04-a101-04"></a>

#### [영상 90.1.8.1.4.a101.4.`도구` → `선택도구` → `전경 선택`: 선택을 곡선과 직선을 함께 그리기 (Windows) (우리말)](./90-01-08-01-04-foreground_select.md#90-01-08-01-04-a101-04)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/267ab44e-b68b-4e30-aba5-e281941ecb0f"></video>

<a id="14-02-08-02-01-s4"></a>

## 4. `전경 선택` 도구의 대화상자
`전경 선택` 도구로 선택을 그리기를 시작하자마자, 작은 대화상자가 나타납니다.

<a id="90-04-109-a101"></a>

#### [그림 90.4.109.a101. `전경 선택` 대화상자 (Windows) (우리말)](./90-04-0109-foreground_select.md#90-04-109-a101)
![90-04-109-a101](https://github.com/wonder13662/gimp/assets/15767104/1cfe2f58-293d-411e-84d6-6a2ac35c8d1f)

[다른 운영체제와 언어의 `전경 선택` 대화상자 확인하기](./90-04-0109-foreground_select.md#90-04-109-a102)

선택을 완료하기 전까지는 `x` 닫기 버튼만 활성화됩니다. `x` 닫기 버튼은 선택을 취소하고 원본 이미지로 되돌립니다. ESC 키를 눌러도 같은 동작을 합니다.

<a id="90-04-109-a101-01"></a>

#### [영상 90.4.109.a101.1. `전경 선택` 대화상자: `x` 닫기 버튼 (Windows) (우리말)](./90-04-0109-foreground_select.md#90-04-109-a101-01)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/7b898d09-94c8-45e3-b326-d739b8b6fb92"></video>

<a id="90-04-109-a101-02"></a>

#### [영상 90.4.109.a101.2. `전경 선택` 대화상자: ESC 키 (Windows) (우리말)](./90-04-0109-foreground_select.md#90-04-109-a101-02)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/6ac85b70-5fb6-41ee-8a83-ad3eb4b49384"></video>

`전경 선택` 도구의 대화상자의 나머지 옵션에 대해서는 [14.2.8.2.2. 마스크 만들기 - 4. 전경 선택 대화상자 옵션 설명](./14-02-08-02-02-create_mask.md#14-02-08-02-02-s4)을 참고해주세요.

<a id="14-02-08-02-01-s5"></a>

## 5. 선택 닫기
처음 선택을 완료하기 위해서는 선택을 닫혀있는 상태(Closed)로 만들어야 합니다. 마우스 포인터가 선택의 시작점 위로 올라가면, 시작점이 노란색으로 바뀝니다. 선택을 닫기 위해서, 노란색의 시작점을 클릭합니다. 또는 끝점을 더블 클릭해서 선택을 닫을 수도 있습니다. 단 더블 클릭을 한 경우에는, 시작점과 끝점이 직선으로 연결된다는 점을 주의하세요.

<a id="90-01-08-01-04-a101-05"></a>

#### [영상 90.1.8.1.4.a101.5.`도구` → `선택도구` → `전경 선택`: 선택 닫기(시작점 클릭) (Windows) (우리말)](./90-01-08-01-04-foreground_select.md#90-01-08-01-04-a101-05)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/736102e5-898a-470f-97de-ab8dae36d5d2"></video>

<a id="90-01-08-01-04-a101-06"></a>

#### [영상 90.1.8.1.4.a101.6.`도구` → `선택도구` → `전경 선택`: 선택 닫기(끝점 더블 클릭) (Windows) (우리말)](./90-01-08-01-04-foreground_select.md#90-01-08-01-04-a101-06)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/13386b0c-e80f-4c33-92b9-ad931169c4b0"></video>

<a id="14-02-08-02-01-s6"></a>

## 6. 주의 사항
`전경 선택` 도구를 사용하면, 이미지의 크기에 따라 많은 메모리가 필요합니다. 더 큰 이미지에서 `전경 선택` 도구를 사용하면 GIMP(김프)가 느려지거나 멈출수도 있습니다.

이 문제를 개선하는 한가지 방법은 `도구 옵션` → `전경 선택` → `엔진`에서 `Matting Levin` 대신에 `Matting Global`을 사용하는 것입니다. `도구 옵션` → `전경 선택` → `엔진` → `레벨(Downsample)`의 값을 높여 더 많은 메모리를 사용해서 느린 계산 과정을 더 빠르게 만들 수 있습니다. 이 두가지 선택 모두 정확도를 낮추는 단점을 가지고 있습니다.

<a id="90-04-01-07-a2"></a>

#### [영상 90.4.1.7.a2. `도구옵션` → `전경 선택` → `엔진`: 드롭다운 목록 (Mac)](./90-04-0001-007-foreground_select.md#90-04-01-07-a2)
![90-04-01-07-a2](https://github.com/wonder13662/gimp/assets/15767104/f4c3f71f-696e-4071-9227-803b25d2a357)

[관련 정보: Downsample](./19-glossaryx-downsample.md)

***

## 다른 페이지로 가기

[➡️ 다음: 14.2.8.2.2. 마스크 만들기(Create Mask)](./14-02-08-02-02-create_mask.md)

[⬅️ 이전: 14.2.8.2. 사용법(Direction for use)](./14-02-08-02-00-directions_for_use.md)

[⬆️ 위: 14.2.8.2. 사용법(Direction for use)](./14-02-08-02-00-directions_for_use.md)

[⬆️ 위: 14.2.8. 전경 선택(Foreground select)](./14-02-08-00-foreground-select.md)

[⬆️ 위: 14.2. 선택 도구(Selection tools)](./14-02-00-selection-tools.md)

[⬆️ 위: 14. 도구(Tools)](./14-00-tools.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-tool-foreground-select.html#tool-fg-select-usage)