# 7.5.2. 경로 속성
경로는 레이어나 채널처럼 이미지의 구성 요소입니다. 이미지가 GIMP(김프)의 고유한 파일 포맷인 `XCF`으로 저장되면, 이미지가 가지고 있던 경로도 이미지와 함께 저장됩니다.

<a id="07-05-02-s1"></a>

## 1. 경로 목록
[경로 대화상자](./15-02-03-paths-dialog.md)에서 이미지 안에서 작업했던 경로의 목록을 볼 수 있습니다.

<a id="90-04-05-a1"></a>

#### [그림 90.4.5.a1. 경로 대화상자](./90-04-05-paths.md#90-04-05-a1)
![90-04-05-a1](https://github.com/wonder13662/gimp/assets/15767104/65211e47-f3d5-48cc-ab61-7c57babfa5ed)

<a id="07-05-02-s2"></a>

## 2. 경로 복사
경로 대화상자의 팝업 메뉴를 사용해서 경로를 작업중인 이미지에서 다른 이미지로 복사해서 붙여 넣을 수 있습니다. 또는 경로 대화상자에서 아이콘을 드래그해서 대상 이미지 창으로 옮길 수도 있습니다.

<a id="90-04-05-a101"></a>

#### [영상 90.4.5.a101. 경로를 팝업 메뉴로 복사 + 붙여넣기로 다른 이미지로 복사](./90-04-05-paths.md#90-04-05-a101)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/7d23392f-30de-4885-a2bb-e8d5753564ab"></video>

<a id="90-04-05-a102"></a>

#### [영상 90.4.5.a102. 경로를 드래그해서 다른 이미지로 복사](./90-04-05-paths.md#90-04-05-a102)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/bb16c014-9cd0-4009-a337-de5a34e6be21"></video>

<a id="07-05-02-s3"></a>

## 3. 경로는 베지에 곡선
GIMP(김프)의 경로는 [베지에 곡선](./19-glossaryx-bezier-curves.md)입니다. 그러므로 경로는 [고정점](./19-glossaryx-path_anchor.md)과 [핸들(handle)](./19-glossaryx-path_handle.md)에 의해 정의됩니다.

<a id="07-05-02-s4"></a>

## 4. 경로의 고정점(Anchor) 또는 시작점(start point)
[고정점(anchor)](./19-glossaryx-path_anchor.md)은 경로가 지나가는 점입니다. [시작점(start point)](./19-glossaryx-path_start_point.md)이라고도 합니다.

<a id="90-03-02-35-a22"></a>

#### [그림 90.3.2.35.a22. 경로 속성 - 시작점(start point) 또는 고정점(anchor)](./90-03-02-35-paths.md#90-03-02-35-a22)
![90-03-02-35-a22](https://github.com/wonder13662/gimp/assets/15767104/edd6c798-eb98-4ce0-9d37-5caabfa56e09)

<a id="07-05-02-s5"></a>

## 5. 경로의 핸들(Handle)
[핸들(handle)](./19-glossaryx-path_handle.md)는 [고정점](./19-glossaryx-path_anchor.md)을 지나가는 경로의 방향을 결정합니다. 각 고정점에는 두개의 핸들(handle)가 있습니다. [끝점(end point)](./19-glossaryx-path_end_point.md)이라고도 합니다.

<a id="90-03-02-35-a23"></a>

#### [그림 90.3.2.35.a23. 경로 속성 - 끝점(end point)](./90-03-02-35-paths.md#90-03-02-35-a23)
![90-03-02-35-a23](https://github.com/wonder13662/gimp/assets/15767104/9165159d-a9ca-42a4-a64e-571c7c8aa0ab)

<a id="07-05-02-s6"></a>

## 6. 경로의 복잡도
경로는 매우 복잡해질 수 있습니다. [경로](./14-05-02-00-paths.md) 도구로 직접 경로를 만들면 수십개의 [고정점](./19-glossaryx-path_anchor.md)을 갖고 있는 정도일 것입니다. 그러나 [선택](./07-01-00-the-selection.md)을 경로로 바꾸거나, 글자를 경로로 바꾸면, 결과로 수백 혹은 수천개의 고정점이 될 수 있습니다.

<a id="90-04-05-a111"></a>

#### [영상 90.4.5.a111. 글자를 경로로 바꿈](./90-04-05-paths.md#90-04-05-a111)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/a990f9d9-6d50-48c3-87de-124661170a9e"></video>

<a id="07-05-02-s7"></a>

## 7. 컴포넌트
경로는 여러 개의 [컴포넌트](./19-glossaryx-path_component.md)를 가질 수 있습니다. "컴포넌트"란 [선분](./19-glossaryx-path_segment.md)에 의해 [고정점(anchor point)](./19-glossaryx-path_anchor.md)이 모두 연결된 형태입니다. 경로가 여러 개의 컴포넌트를 가질 수 있기 때문에 경로를 여러 개의 분리된 [선택](./07-01-00-the-selection.md)으로 바꿀 수 있습니다.

<a id="07-05-02-s8"></a>

## 8. 컴포넌트의 상태: 닫힘(closed)과 열림(open)
경로의 각 [컴포넌트](./19-glossaryx-path_component.md)는 열림(open) 상태이거나 닫힘(closed) 상태입니다.

<a id="90-04-05-a112"></a>

#### [그림 90.4.5.a112. 컴포넌트의 상태: 닫힘(closed)과 열림(open)](./90-04-05-paths.md#90-04-05-a112)
![90-04-05-a112](https://github.com/wonder13662/gimp/assets/15767104/960de051-aec1-4fce-9e82-bfe556923e82)

<a id="07-05-02-s8-01"></a>

### 8-1. 닫힘(closed)
"닫힘(closed)"은 [컴포넌트](./19-glossaryx-path_component.md)의 마지막 [고정점](./19-glossaryx-path_anchor.md)이 첫번째 고정점에 연결되어 있다는 뜻입니다.

<a id="07-05-02-s8-02"></a>

### 8-2. 열림(open)
"열림(open)"은 [컴포넌트](./19-glossaryx-path_component.md)의 마지막 [고정점](./19-glossaryx-path_anchor.md)이 첫번째 고정점에 연결되어 있지 않다는 뜻입니다. 경로를 [선택](./07-01-00-the-selection.md)으로 바꾸면, 자동으로 "열림(open)" 상태의 컴포넌트의 첫번째 고정점과 마지막 고정점을 직선으로 이어 "닫힘(closed)" 상태의 컴포넌트로 바꿉니다.

<a id="90-04-05-a113"></a>

#### [영상 90.4.5.a113. 경로를 선택으로 바꾸는 과정](./90-04-05-paths.md#90-04-05-a113)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/e6b16e2a-f5f4-4f6d-8506-ecad9c2ba385"></video>

<a id="07-05-02-s9"></a>

## 9. 경로 선분(Path segment) 또는 선분(line segment)
[경로 선분(Path segment)](./19-glossaryx-path_path_segment.md) 또는 [선분(line segment)](./19-glossaryx-path_line_segment.md)은 직선 혹은 곡선입니다. 경로의 모든 선분이 직선이면 ["다각형(polygonal)"]()이라고 합니다. 

[핸들(handle)](./19-glossaryx-path_handle.md)은 핸들의 길이가 0인 경우(초기값)은 [고정점](./19-glossaryx-path_anchor.md) 바로 위에 있습니다. 핸들의 길이가 0인 경우는 경로 선분(Path segment)는 직선입니다. 핸들를 드래그해서 고정점에서 떨어뜨리면 경로 선분(Path segment)는 곡선이 됩니다.

[관련 정보: 14.5.2.3.1. 편집 모드 - 디자인(Design Mode) - 1-2. 선분(Segment)](./14-05-02-03-01-design_mode.md#14-05-02-03-01-s1-02)

<a id="90-04-05-a114"></a>

#### [영상 90.4.5.a114. 경로 선분을 직선에서 곡선으로 바꾸기](./90-04-05-paths.md#90-04-05-a114)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/20584d2f-1e2a-4381-945a-d29434dfdbe5"></video>

<a id="07-05-02-s10"></a>

## 10. 경로는 매우 적은 리소스를 씁니다
경로의 좋은 점은 매우 적은 리소스를 사용한다는 점입니다. 이미지와 비교해보면 더욱 그렇습니다. 경로를 램에 저장할 때는 [고정점](./19-glossaryx-path_anchor.md)과 [핸들](./19-glossaryx-path_handle.md)의 좌표만 있으면 됩니다. 그러므로 시스템에 무리를 주지 않고 이미지 안에 수백개의 경로를 만드는 것도 가능합니다. 수천개의 [선분](./19-glossaryx-path_segment.md)를 가지는 경로도 전형적인 레이어나 채널과 비교해보면 최소한의 리소스만 사용합니다.

<a id="07-05-02-s11"></a>

## 11. 경로를 제어하려면?
경로는 [경로 도구](./14-05-02-00-paths.md)를 통해 만들거나 고칠 수 있습니다.

***

## 관련 정보

[14.5.2. 경로(Paths)](./14-05-02-00-paths.md)

***

## 다른 페이지로 가기
[➡️ 다음: 7.5.3. 경로와 선택](./07-05-03-paths-and-selections.md)

[⬅️ 이전: 7.5.1. 경로 만들기](./07-05-01-path-creation.md)

[⬆️ 위: 7.5. 경로](./07-05-00-paths.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-paths-properties.html)
