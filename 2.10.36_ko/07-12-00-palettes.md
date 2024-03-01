# 7.12. 팔레트
팔레트는 색상들의 모음입니다.

## 1. 팔레트의 사용 목적
GIMP(김프)에서는 팔레트는 주로 두가지 용도로 씁니다.

- 팔레트 내의 제한된 색상으로만 칠을 할 수 있습니다.
- 인덱스 모드의 이미지의 색상표를 만들 수 있습니다. 인덱스 모드의 이미지는 최대 256개의 색상을 사용합니다. 256개의 색상은 어떤 색이든 될 수 있습니다. 인덱스 모드의 이미지의 색상표는 GIMP(김프)에서 "인덱스 팔레트(indexed palette)"라고 합니다.

## 2. 팔레트가 자주 쓰이나요?
실제로 위에서 말한 두가지 용도는 GIMP(김프)에서 자주 쓰이지는 않습니다. 하지만 여전히 고급 사용자라면 팔레트 기능을 이해하고 있어야 합니다. 고급 사용자가 아니라도 GIF 파일을 작업할 때는 팔레트 기능을 이해하고 있어야 합니다.

#### 그림 90.4.20.a1. 팔레트 대화상자
![그림 90.4.20.a1. 팔레트 대화상자](https://github.com/wonder13662/gimp/assets/15767104/1f14c961-9eaa-4209-8d9f-1cd3ee9c393e)

## 3. 팔레트 대화상자
GIMP(김프)를 설치하면, 수십 개의 팔레트가 기본적으로 함께 설치됩니다. 그리고 직접 새로운 팔레트를 만들 수 있습니다. 기본 제공되는 팔레트 중에 "웹" 팔레트처럼 유용한 것들도 있습니다. 이 팔레트는 웹에서 안전하게 쓸 수 있는 색상들만 모아 놓았습니다. [팔레트 대화상자](./15-03-06-palettes-dialog.md)에서 사용 가능한 팔레트들을 확인할 수 있습니다. 또한 새로운 팔레트를 팔레트 대화상자에서 만들 수 있습니다.

## 4. 팔레트 편집기
#### 그림 90.4.60.a101. `팔레트 편집기` 대화상자 (Windows) (우리말)
![90-04-60-palette_editor(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/f294ef6c-443d-4e55-8a64-de2283ca5ba5)

### 4-1. 팔레트 편집기 열기
`팔레트` 대화상자의 팔레트를 더블 클릭을 하면 [`팔레트 편집기`](./15-03-06-palettes-dialogx-04-palette_editor.md)를 열 수 있습니다. [`팔레트 편집기`](./15-03-06-palettes-dialogx-04-palette_editor.md)는 선택한 팔레트의 색상을 보여줍니다.

#### 영상 90.4.60.a105. `팔레트` 대화상자에서 `팔레트 편집기` 대화상자 열기 (Windows) (우리말)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/8f8431a6-e746-4dc2-bb05-7ed2e4adc1e4"></video>

### 4-2. 팔레트 편집기의 색으로 전경색(Foreground color) 바꾸기
[`팔레트 편집기`](./15-03-06-palettes-dialogx-04-palette_editor.md)의 색상을 클릭하면 도구 상자의 전경색을 바꿀 수 있습니다.

#### 그림 90.3.4.a5. 도구상자의 '붓/무늬/그라디언트' - `색상(전경색)`
![90-03-04-brush_pattern_gradient(windows)(ko)-focus-fg](https://github.com/wonder13662/gimp/assets/15767104/f1ae8ae0-2e40-437c-924d-e961c58438b4)

#### 영상 90.4.60.a106. `팔레트 편집기` 대화상자에서 전경색 바꾸기 (Windows) (우리말)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/ca43d56d-6833-41fe-a46b-b5107ba50a35"></video>

### 4-3. 팔레트 편집기의 색으로 배경색(Background color) 바꾸기
Ctrl(⌘) 키를 누른 채로 [`팔레트 편집기`](./15-03-06-palettes-dialogx-04-palette_editor.md)의 색상을 클릭하면 도구 상자의 배경색을 바꿀 수 있습니다.

#### 그림 90.3.4.a6. 도구상자의 '붓/무늬/그라디언트' - `색상(배경색)`
![90-03-04-brush_pattern_gradient(windows)(ko)-focus-bg](https://github.com/wonder13662/gimp/assets/15767104/2fcabec2-7760-4394-b1cd-8d93cb643d2e)

#### 영상 90.4.60.a107. `팔레트 편집기` 대화상자에서 배경색 바꾸기 (Windows) (우리말)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/5c521c2d-36df-4f9f-91c2-7d6d30c8d3b4"></video>

### 4-4. 팔레트 편집기로 팔레트의 색상을 수정하기
직접 만든 커스텀 팔레트라면 `팔레트 편집기`에서 팔레트의 색상을 바꿀 수 있습니다. GIMP(김프)에서 기본 제공되는 팔레트의 색상은 바꿀 수 없습니다. 하지만 기본 제공되는 팔레트는 복제해서 복사본 팔레트의 색상을 바꿀 수 있습니다. 아래 영상에서 기본 제공 팔레트를 복제해서 복사한 팔레트의 색상을 바꾸는 과정을 확인할 수 있습니다.

#### 7.12.a1. 팔레트 편집기에서 커스텀 팔레트의 색상 변경
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/8e8bcd5a-ff60-4416-a1f3-36ecbeab0085"></video>

## 5. 팔레트 파일이 저장되는 위치
[`팔레트 편집기`](./15-03-06-palettes-dialogx-04-palette_editor.md)로 새로운 팔레트를 만들면, GIMP(김프)를 종료하자마자 사용자의 GIMP(김프)의 팔레트 폴더에 자동으로 저장됩니다. 이 폴더에 있는 팔레트 파일이라면 GIMP(김프)를 시작할 때 팔레트 대화상자에 로드됩니다. `기본 설정` → `폴더` → `팔레트`에서 팔레트 파일을 불러올 수 있는 폴더를 추가할 수 있습니다.

#### 그림 90.2.9.4.a1. `기본 설정` → `폴더` → `팔레트` (Windows) (우리말)
![90-02-09-04-preference-folders-palettes(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/83e174ab-9286-40de-b1a7-8fafdfa2e8c1)

## 6. 팔레트 파일 확장자 - `.gpl`
GIMP(김프)의 팔레트 파일은 [`.gpl`](./19-glossaryx-gpl.md)이라는 확장자를 가집니다. `.gpl` 파일은 ASCII 형식의 매우 단순한 파일입니다. 다른 출처의 `.gpl` 파일을 받았다면, GIMP(김프)에서 쓸 수 있도록 바꾸는 것은 그리 어렵지 않습니다. `.gpl` 파일을 열어 직접 확인해보세요. 예제로 기본 설치되어 있는 팔레트인 `Blues.gpl`의 앞부분 내용을 보면 아래와 같습니다.

### 6-1. `Blues.gpl`의 앞부분 내용
```
GIMP Palette
Name: Blues
#
# For them rainy days ... by Daniel Egnor
#
  0   0   0	grey0
  0   0   0	grey0
  0   0   4
  0   0  12
  0   0  16
  0   0  24
  0   0  32
  0   0  36
  0   0  44
...
```

위의 내용 중, GIMP(김프)에서 첫번째와 세번째 색상을 선택해서 색상 정보를 `Blues.gpl`와 비교해보면 아래와 같습니다.

첫번째 색상의 경우, 색상의 RGB 정보(0,0,0)와 색상의 메타(태그) 정보인 "grey0"가 같은 것을 확인할 수 있습니다.
### 6-2. `Blues.gpl`의 첫번째 색상 정보
```
  0   0   0	grey0
```

#### 7.12.a2. Blues 팔레트의 첫번째 색상 선택과 색상 정보
![07-12-gql_explanation-01(windows)(ko)-focus](https://github.com/wonder13662/gimp/assets/15767104/bd789f69-680a-44a1-92b2-aa27508037c5)

세번째 색상의 경우, 색상의 RGB 정보(0,0,4)가 같고 색상의 메타(태그) 정보가 없으므로 "untitled"로 표시된 것을 확인할 수 있습니다.
### 6-3. `Blues.gpl`의 세번째 색상 정보
```
  0   0   4
```

#### 7.12.a3. Blues 팔레트의 세번째 색상 선택과 색상 정보
![07-12-gql_explanation-03(windows)(ko)-focus](https://github.com/wonder13662/gimp/assets/15767104/1de2439b-72b7-446d-81e5-3b1a459434d4)

***

## 하위 페이지

[7.12.1. 색상표](./07-12-01-colormap.md)

***

## 다른 페이지로 가기
[➡️ 다음: 7.12.1. 색상표](./07-12-01-colormap.md)

[⬅️ 이전: 7.11. 무늬(Pattern)](./07-11-patterns.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-palettes.html)