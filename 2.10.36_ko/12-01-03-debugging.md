# 12.1.3. 디버깅(Debugging)

⚠️ 주의: `기본 설정` → `디버깅` 메뉴는 Windows에는 없습니다.

<a id="90-02-11-a1"></a>

#### [그림 90.2.11.a1. `기본 설정` → `디버깅` (Mac) (우리말)](./90-02-11-debugging.md#90-02-11-a1)
![90-02-11-a1(50%)](https://github.com/wonder13662/gimp/assets/15767104/5258e2b0-c5cc-49e1-8acd-0ce2902b4af9)

[다른 운영체제와 언어의 `기본 설정` → `디버깅` 확인하기](./90-02-11-debugging.md#90-02-11-a2)

## 1. 디버깅 정책(Debug Policy)
`디버깅 정책(Debug Policy)`은 GIMP(김프)에 문제가 생겼을 때, 어떻게 해야 할지 결정합니다. 4가지 선택 사항이 있습니다.

### 1-1. 경고, 치명적 오류, 치명적 종료 디버깅(Debug warnings, critical errors and crashes)
이 옵션은 가장 디버깅을 적극적으로 합니다. 특정 버그를 찾는데 사용합니다. GIMP(김프)의 충돌, 에러, 경고의 상황에 디버깅을 시작합니다.

### 1-2. 치명적 오류와 치명적 종료시 디버깅(Debug critical errors and crashes)
GIMP(김프)의 충돌, 치명적인 에러의 상황에 디버깅을 시작합니다.

### 1-3. 치명적 종료시에만 디버깅(Debug crashes only)
GIMP(김프)의 충돌 상황에만 디버깅을 시작합니다.

### 1-4. GIMP 디버깅 안함(Never debug GIMP)
어떤 상황에서도 디버깅을 하지 않습니다.

효과적인 디버깅은 `gdb` 또는 `lldb`이 설치되었을 때만 가능합니다.

***

## 다른 페이지로 가기

[➡️ 다음: 12.1.4. 색상 관리(Color Management)](./12-01-04-color-management.md)

[⬅️ 이전: 12.1.2.4. 문서 이력(Document History)](./12-01-02-04-document_history.md)

[⬆️ 위: 12.1. 기본설정 대화상자](./12-01-00-preference-dialog.md)

[⬆️ 위: 12. 나만의 GIMP(김프) 만들기](./12-00-enrich-my-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-pimping.html#gimp-prefs-debugging)
