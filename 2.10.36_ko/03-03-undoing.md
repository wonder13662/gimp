# 3.3. 실행 취소하기

GIMP에서 이미지에 작업한 대부분의 일은 취소할 수 있습니다. 가장 최근에 한 작업을 취소하려면 이미지 메뉴에서 `편집` → `실행 취소`를 선택하거나 단축키 Ctrl + `z`(Windows) or ⌘ + `z`(Mac)을 사용합니다.

#### [그림 90.1.2.1.a101. `편집` - `실행 취소`](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-02-editx-01-undo.html#%EA%B7%B8%EB%A6%BC-90121a101-%ED%8E%B8%EC%A7%91---%EC%8B%A4%ED%96%89-%EC%B7%A8%EC%86%8C)
[![`편집` → `실행 취소`](https://github.com/wonder13662/gimp/assets/15767104/36cf9d75-c1b8-435c-980a-e553994883b7)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-02-editx-01-undo.html#%EA%B7%B8%EB%A6%BC-90121a101-%ED%8E%B8%EC%A7%91---%EC%8B%A4%ED%96%89-%EC%B7%A8%EC%86%8C)

실행 취소 또한 취소할 수 있는데, 이것은 실행 취소를 한 다음에 이미지 메뉴에서 `편집` → `재실행`을 선택하거나 단축키 Ctrl + `y`(Windows) or ⌘ + `y`(Mac)를 누르면 됩니다.

#### [그림 90.1.2.2.a101. `편집` - `재실행`](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-02-editx-02-redo.html#%EA%B7%B8%EB%A6%BC-90122a101-%ED%8E%B8%EC%A7%91---%EC%9E%AC%EC%8B%A4%ED%96%89)
[![90-00-image_menu_bar-edit(w1080)-focus-redo](https://github.com/wonder13662/gimp/assets/15767104/519863ec-8348-4b05-b52f-bd74788e09de)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-02-editx-02-redo.html#%EA%B7%B8%EB%A6%BC-90122a101-%ED%8E%B8%EC%A7%91---%EC%9E%AC%EC%8B%A4%ED%96%89)

실행 취소와 재실행은 종종 특정 작업의 효과를 확인하기 위해 사용됩니다. 이는 대체로 빠르고, 추가적인 리소스도 필요하지 않고, 실행취소 이력에 어떠한 영향도 주지 않기 때문에 여러번 반복해도 괜찮습니다.

> ⚠️ 경고
>
> 하나 혹은 여러 개의 작업을 실행취소한 다음에, 실행취소나 재실행 이외의 다른 작업을 하면 더 이상 실행취소했던 작업들을 재실행할 수 없습니다. 이러한 문제를 피하려면 이미지를 복사한 뒤, 복사한 이미지에 먼저 테스트를 해보면 됩니다(실행 취소 이력은 복사되지 않기 때문에 원본에 직접 테스트를 하지 마세요).

한번에 많은 과정을 실행 취소하거나 재실행을 자주한다면, 실행 취소 이력 대화상자를 이용하면 편리합니다.

#### [그림 90.1.10.2.10.a101. `창` → `실행취소 이력` (Windows)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-10-windowsx-02-dockable_dialogsx-10-undo_history.html#%EA%B7%B8%EB%A6%BC-90110210a101-%EC%B0%BD--%EC%8B%A4%ED%96%89%EC%B7%A8%EC%86%8C-%EC%9D%B4%EB%A0%A5-windows)
[![그림 90.1.10.2.10.a101. `창` → `실행취소 이력` (Windows)](https://github.com/wonder13662/gimp/assets/15767104/69de469c-0fd6-48bb-ad05-afe85d91740b)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-10-windowsx-02-dockable_dialogsx-10-undo_history.html#%EA%B7%B8%EB%A6%BC-90110210a101-%EC%B0%BD--%EC%8B%A4%ED%96%89%EC%B7%A8%EC%86%8C-%EC%9D%B4%EB%A0%A5-windows)

[다른 운영체제와 언어의 '실행취소 이력` (Windows)' 메뉴 확인하기](./90-01-10-windowsx-02-dockable_dialogsx-10-undo_history.md)

#### [그림 90.4.10.a1. 실행취소 이력 대화상자](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-10-undo_history.html#%EA%B7%B8%EB%A6%BC-90410a1-%EC%8B%A4%ED%96%89%EC%B7%A8%EC%86%8C-%EC%9D%B4%EB%A0%A5-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90)
[![실행취소 이력 대화상자](https://github.com/wonder13662/gimp/assets/15767104/351ada2a-1b19-4105-803c-abeff657ee07)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-10-undo_history.html#%EA%B7%B8%EB%A6%BC-90410a1-%EC%8B%A4%ED%96%89%EC%B7%A8%EC%86%8C-%EC%9D%B4%EB%A0%A5-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90)

⚠️ 주의: 우리말 버전의 경우, 도킹가능한 대화에서는 `실행취소 이력`, 독의 대화상자에서는 `실행 취소 기록`로 부르고 있습니다. 향후, 하나의 이름으로 맞출 필요가 있습니다.

이 대화 상자에는 실행 취소 이력의 각 포인트마다 개략적인 미리보기가 있어 클릭해서 해당 포인트로 실행 취소하거나 재실행할 수 있습니다.

실행취소는 이미지에만 실행할 수 있습니다. "실행 취소 기록"은 이미지를 구성하는 정보입니다. GIMP는 "실행취소"를 하기 위해 일정량의 메모리를 할당합니다. "기본 설정(Preferences)"의 [12.1.2. 시스템 자원(System Resource)](./12-01-02-system-resources.md)에서 "실행취소"를 하기 위한 메모리 할당량을 늘이거나 줄일 수 있습니다.

#### [90.2.1.a110. 시스템 리소스 - 실행취소 최소횟수, 실행취소 최대메모리 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-02-01-system-resource.html#9021a110-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EB%A6%AC%EC%86%8C%EC%8A%A4---%EC%8B%A4%ED%96%89%EC%B7%A8%EC%86%8C-%EC%B5%9C%EC%86%8C%ED%9A%9F%EC%88%98-%EC%8B%A4%ED%96%89%EC%B7%A8%EC%86%8C-%EC%B5%9C%EB%8C%80%EB%A9%94%EB%AA%A8%EB%A6%AC-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-02-01-system-resource(우리말)(windows)(compact)-focus-resource_consumption](https://github.com/wonder13662/gimp/assets/15767104/d606c417-ba0b-48a4-a6bf-fcc373517866)](https://wonder13662.github.io/gimp/2.10.36_ko/90-02-01-system-resource.html#9021a110-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EB%A6%AC%EC%86%8C%EC%8A%A4---%EC%8B%A4%ED%96%89%EC%B7%A8%EC%86%8C-%EC%B5%9C%EC%86%8C%ED%9A%9F%EC%88%98-%EC%8B%A4%ED%96%89%EC%B7%A8%EC%86%8C-%EC%B5%9C%EB%8C%80%EB%A9%94%EB%AA%A8%EB%A6%AC-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

[다른 운영체제와 언어의 '실행취소 최소횟수, 실행취소 최대메모리' 확인하기](./90-02-01-system-resource.md)

### `시스템 자원(System Resource)` → `자원소비량(Resource Consumption)` → `실행 취소 최소 횟수(Minimal number of undo levels)`
GIMP가 메모리와 상관없이 관리해야 할 실행취소 최소 횟수를 지정합니다.

### `시스템 자원(System Resource)` → `자원소비량(Resource Consumption)` → `실행 취소 최대 메모리(Maximum undo memory)`
실행 취소에 쓰인 메모리가 "실행 취소 최대 메모리"를 넘어서면 "실행취소 이력(Undo History)"에서 가장 오래된 아이템을 지웁니다.

> 🗒️ 참고
>
> "실행 취소 기록"이 이미지를 구성하는 정보이기는 하지만, GIMP 고유 포맷인 `.xcf` 파일로 저장하더라도 "실행 취소 기록"은 저장되지 않습니다. 따라서 저장한 이미지를 다시 열면 "실행 취소 기록"은 비어있게 됩니다.

GIMP의 실행 취소 기능으로 아주 작은 실행 취소 메모리만으로 많은 과정들을 저장해둘 수 있습니다. 예를 들어 레이어의 보기전환과 같은 몇몇 작업들은 압축되어, 단지 하나의 포인트 만을 기억해둠으로써 여러번 해당 과정을 반복할 수 있습니다. 이와는 반대로 필터와 같이 상당히 큰 실행 취소 메모리를 쓰는 작업들도 있습니다. 대부분의 필터들은 플러그인 형식으로 구현되므로 GIMP 코어는 필터 적용 전후의 자세한 변화 내용을 확인할 수 없습니다. 따라서 필터 적용 전후의 모든 내용을 기록하므로 많은 메모리를 쓰게 됩니다. 이러한 작업들은 "실행 취소 기록"에 겨우 몇 번만 기록할 수 있습니다.

## 3.3.1. 실행 취소를 할 수 없는 것들
이미지를 수정하는 대부분의 작업들은 취소를 할 수 있습니다. 반면, 이미지를 파일로 저장하거나 복사하거나, 이미지의 일부를 클립보드로 복사하는 작업처럼, 이미지 수정과 관련이 없는 작업들은 취소를 할 수 없습니다. 그리고 확대해서 보기와 같은 이미지에 어떠한 변화도 없는 작업도 취소할 수 없습니다. 예외적으로 퀵마스크 전환은 이미지 수정은 아니지만, 실행 취소가 가능합니다.

### 이미지를 수정하지만 취소할 수 없는 작업들
### 3.3.1.1. 이미지 닫기
"실행 취소 기록"이 이미지를 구성하는 정보이지만, 이미지가 닫히고 이미지의 모든 리소스가 해제되면, "실행 취소 기록"은 사라집니다. 그러므로 마지막으로 저장한 이후로 이미지가 바뀌었다면, GIMP는 이미지를 정말 닫을 것인지 사용자에게 반드시 확인합니다.

#### [그림 90.1.1.20.a101. `파일(File)` → `이미지 닫기(Close View)` 메뉴의 위치](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-01-filex-20-close_view.html#%EA%B7%B8%EB%A6%BC-901120a101-%ED%8C%8C%EC%9D%BCfile--%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%8B%AB%EA%B8%B0close-view-%EB%A9%94%EB%89%B4%EC%9D%98-%EC%9C%84%EC%B9%98)
[![90-01-01-file-export_as(w1080)-focus-close_view](https://github.com/wonder13662/gimp/assets/15767104/1bda99cb-780b-42b8-b770-44e3b761c9ea)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-01-filex-20-close_view.html#%EA%B7%B8%EB%A6%BC-901120a101-%ED%8C%8C%EC%9D%BCfile--%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%8B%AB%EA%B8%B0close-view-%EB%A9%94%EB%89%B4%EC%9D%98-%EC%9C%84%EC%B9%98)

#### 영상 90.1.1.10.a102. 바뀐 이미지의 "이미지 닫기(Close View)"의 실행여부 확인
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/00f55691-d4a1-42d3-90a4-f3c8c75f50b3"></video>

### 3.3.1.2. 이미지 원래대로 만들기
"원래대로" 라는 것은 이미지를 파일로부터 다시 읽어들이는 것을 말합니다. GIMP에서 이 메뉴를 실행시키면, 현재 이미지를 닫고 새로 이미지를 엽니다. 따라서 "실행 취소 기록"은 모두 사라지게 됩니다. 그리고 이미지가 바뀌었다면 "원래대로"를 실행하기 전에 항상 실행 여부를 확인합니다. 

#### [그림 90.1.1.10.a101. `파일(File)` → `원래대로(Revert)` 메뉴의 위치](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-01-filex-10-revert.html#%EA%B7%B8%EB%A6%BC-901110a101-%ED%8C%8C%EC%9D%BCfile--%EC%9B%90%EB%9E%98%EB%8C%80%EB%A1%9Crevert-%EB%A9%94%EB%89%B4%EC%9D%98-%EC%9C%84%EC%B9%98)
[![90-01-01-file-export_as(w1080)-focus-revert](https://github.com/wonder13662/gimp/assets/15767104/b7170e9a-6879-4bfc-9712-e188bf1dadec)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-01-filex-10-revert.html#%EA%B7%B8%EB%A6%BC-901110a101-%ED%8C%8C%EC%9D%BCfile--%EC%9B%90%EB%9E%98%EB%8C%80%EB%A1%9Crevert-%EB%A9%94%EB%89%B4%EC%9D%98-%EC%9C%84%EC%B9%98)

#### 영상 3.3.1.22 바뀐 이미지의 "원래대로(Revert)"의 실행여부 확인
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/260e4946-a74b-40bc-9125-c9f9c184862c"></video>

### 3.3.1.3. 동작의 "일부분"
어떤 도구들은 해당 도구를 사용하기 위해 복잡한 편집과정들 거쳐야 합니다. 이런 경우 그 각각의 과정들에 대해서는 실행 취소를 할 수 없고, 오직 전체 과정에 대한 실행 취소만 할 수 있습니다. 예를 들어 "가위 선택 영역 도구(scissors select)" 도구는 이미지 위의 여러 지점을 찍어 폐쇄된 경로를 만들고, 그 내부를 클릭해서 선택을 만듭니다. 이 상태에서 실행 취소를 하면 바로 직전에 한 클릭이 아닌 "가위 선택 영역 도구(scissors select)"를 시작한 처음 지점으로 돌아갑니다.

#### 영상 3.3.1.31 "가위 선택 영역 도구(scissors select)"의 실행 취소
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/4d945d9f-f551-4056-be54-7189b72dbf77"></video>

플러그인이나 스크립트로 실행된 필터나 다른 작업들 역시 GIMP에서 직접 실행된 작업들처럼 실행 취소를 할 수 있습니다. 단, 해당 플러그인이나 필터에서 김프의 실행 취소 기능을 정확히 사용했을 때만 가능합니다. 그렇지 않으면 GIMP의 실행 취소 기능과 충돌을 일으켜 해당 작업뿐만 아니라 그 전의 작업들마저도 취소할 수 없는 일이 발생될 수 있습니다. GIMP에 포함되어 배포되는 플러그인이나 스크립트를 제외한 다른 경로로 설치한 플러그인이나 스크립트의 경우에 이런 문제가 발생할 수 있습니다. 또한 코드가 정확하더라도 해당 플러그인이 동작하는 중간에 취소를 하는 경우, 실행 취소 이력에 문제가 생길 수도 있습니다. 따라서 순차적으로 진행되는 과정 중간에 종료하지 않는 것이 이러한 문제를 피하는 최선의 방법입니다.

***

## 다른 페이지로 가기
[➡️ 다음: 3.4.1. 목적](./03-04-01-intention.md)

[⬅️ 이전: 3.2.3. 대화상자(Dialog)와 도킹(docking)](./03-02-03-dialogs-and-docking.md)

[⬆️ 위: 3. GIMP(김프)의 첫번째 단계](./03-00-first-step-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-undo.html)