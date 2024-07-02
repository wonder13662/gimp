# 14.5.2.3.5. 경로로부터 선택 영역 만들기(Create selection from path)

<a id="90-03-02-35-a101-03"></a>

#### [그림 90.3.2.35.a101.3. `도구 옵션` → `경로` → `경로로부터 선택 영역 만들기` (Windows) (우리말)](./90-03-02-35-paths.md#90-03-02-35-a101-03)
![90-03-02-35-a101-03](https://github.com/wonder13662/gimp/assets/15767104/132383ea-9811-4441-80d6-3537bad4d9df)

<a id="14-05-02-03-05-s1"></a>

## 1. 경로를 선택으로 만들기
`경로로부터 선택 영역 만들기(Create selection from path)` 버튼은 현재 상태의 경로를 기준으로 [선택](./07-01-00-the-selection.md)을 만듭니다.

이 선택은 [행진하는 개미(marching ants)](./19-glossaryx-marching_ants.md)라고 하는 움직이는 점선으로 표시됩니다.

<a id="90-03-02-35-a101-03-01"></a>

#### [영상 90.3.2.35.a101.3.1. `도구 옵션` → `경로` → `경로로부터 선택 영역 만들기`: 경로를 선택으로 만들기 (Windows) (우리말)](./90-03-02-35-paths.md#90-03-02-35-a101-03-01)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/b3b153ca-403e-4a4d-bdfb-458d2875bcc5"></video>

<a id="14-05-02-03-05-s2"></a>

## 2. 선택 만들기 이후 경로 수정하기
점선으로 표시되더라도 [경로](./07-05-00-paths.md)는 여전히 유효합니다. 활성화된 도구는 여전히 경로 도구이므로 선택을 변경하지 않고 경로를 수정할 수 있습니다. 

<a id="90-03-02-35-a101-03-02"></a>

#### [영상 90.3.2.35.a101.3.2. `도구 옵션` → `경로` → `경로로부터 선택 영역 만들기`: 선택 만들기 이후 경로 수정하기 (Windows) (우리말)](./90-03-02-35-paths.md#90-03-02-35-a101-03-02)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/07f32e0c-97c6-4c0b-8966-f593517e9652"></video>

<a id="14-05-02-03-05-s3"></a>

## 3. 경로 활성화하기
도구를 바꾸면, 경로는 보이지 않게 됩니다. 하지만 [경로 대화상자](./15-02-03-00-paths-dialog.md)에서 작업했던 경로를 다시 활성화시킬 수 있습니다.

<a id="90-03-02-35-a101-03-03"></a>

#### [영상 90.3.2.35.a101.3.3. `도구 옵션` → `경로` → `경로로부터 선택 영역 만들기`: 경로 활성화하기 (Windows) (우리말)](./90-03-02-35-paths.md#90-03-02-35-a101-03-03)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/1eae782e-4e51-4dec-b603-2a31393ee694"></video>

<a id="14-05-02-03-05-s4"></a>

## 4. 열린 경로를 선택으로 바꾸기
경로가 열려있는 상태에서 `경로로부터 선택 영역 만들기(Create selection from path)` 버튼을 누르면, GIMP(김프)가 연결되지 않은 [제어점](./19-glossaryx-path_control_point.md)들의 사이를 직선으로 그은 모양의 선택으로 만듭니다. 경로는 여전히 열려있는 상태를 유지한다는 점에 유의하세요.

<a id="90-03-02-35-a101-03-04"></a>

#### [영상 90.3.2.35.a101.3.4. `도구 옵션` → `경로` → `경로로부터 선택 영역 만들기`: 열린 경로를 선택으로 바꾸기 (Windows) (우리말)](./90-03-02-35-paths.md#90-03-02-35-a101-03-04)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/542c0135-b46d-456b-9d51-babe639f94f6"></video>

<a id="14-05-02-03-05-s5"></a>

## 5. 경로를 선택에 더하기, 빼기, 교차하기
버튼 위의 도움말 팝업에서 알려주듯이 특정 키를 눌러서 이미 있는 선택에 경로를 더하거나, 빼거나, 교차할 수 있습니다.

<a id="90-03-02-35-a101-03-05-01"></a>

#### [그림 90.3.2.35.a101.3.5.1. `도구 옵션` → `경로` → `경로로부터 선택 영역 만들기`: 버튼 팝업 도움말 (Windows) (우리말)](./90-03-02-35-paths.md#90-03-02-35-a101-03-05-01)
![90-03-02-35-a101-03-05-01](https://github.com/wonder13662/gimp/assets/15767104/b637a294-2d85-4b3e-b776-bcc66bad7bac)

<a id="14-05-02-03-05-s5-01"></a>

### 5-1. 경로를 선택에 더하기
Shift(⇧) 키를 누른 상태에서 버튼을 누르면, 선택에 새로운 선택을 추가합니다.

<a id="90-10-35-04-04-a1"></a>

#### [영상 90.10.35.4.4.a1. Shift(⇧): 경로를 선택에 더하기](./90-10-35-04-04-add_path_to_selection.md#90-10-35-04-04-a1)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/016f731b-2a32-4384-9a02-053c11b2d034"></video>

<a id="14-05-02-03-05-s5-02"></a>

### 5-2. 경로를 선택에 빼기
Ctrl(⌘) 키를 누른 상태에서 버튼을 누르면, 선택에서 경로 영역을 뺍니다.

<a id="90-10-35-02-06-a1"></a>

#### [영상 90.10.35.2.6.a1. Ctrl(⌘): 경로를 선택에서 빼기](./90-10-35-02-06-subtract_path_from_selection.md#90-10-35-02-06-a1)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/6fd2f3a5-86b3-40f3-884e-e22c0794c6a1"></video>

<a id="14-05-02-03-05-s5-03"></a>

### 5-3. 경로와 선택을 교차하기
Ctrl(⌘) + Shift(⇧) 키를 누르면, 선택과 교차한 경로 영역을 선택으로 만듭니다.

<a id="90-10-35-02-07-a1"></a>

#### [영상 90.10.35.2.7.a1. Ctrl(⌘) + Shift(⇧): 경로와 선택을 교차하기](./90-10-35-02-07-intersect_path_n_selection.md#90-10-35-02-07-a1)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/d07cc033-eae5-44ab-a4cf-dbdd23026c30"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 14.5.2.3.6. 경로 채우기(Fill path)](./14-05-02-03-06-fill_path.md)

[⬅️ 이전: 14.5.2.3.4. 다각형(Polygonal)](./14-05-02-03-04-polygonal.md)

[⬆️ 위: 14.5.2.3. 옵션(Options)](./14-05-02-03-00-options.md)

[⬆️ 위: 14.5.2. 경로(Paths)](./14-05-02-00-paths.md)

[⬆️ 위: 14.5. 그 밖의 도구들(Other)](./14-05-00-other.md)

[⬆️ 위: 14. 도구(Tools)](./14-00-tools.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-tool-path.html#idm16522)