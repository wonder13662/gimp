# 13.3.4.3. 가장 필요한 것들(The Bare Essentials)
모든 `Script-Fu` 스크립트는 최소한 1개의 함수를 정의합니다. 이 1개의 함수가 메인 함수(Main function)입니다. 모든 스크립트는 반드시 `절차 데이터베이스(Procedural database)`에 등록되어야 합니다. 그래야만 GIMP(김프)안에서 스크립트를 접근할 수 있습니다. 

먼저 메인 함수를 정의하도록 하겠습니다.

```scheme
(define (script-fu-text-box inText inFont inFontSize inTextColor))
```

여기서 `script-fu-text-box`이라고 하는 새로운 함수를 정의했습니다. 이 함수는 4개의 인자를 갖습니다. 각 인자는 사용자가 입력한 텍스트, 글꼴, 글꼴의 크기, 텍스트의 색깔에 해당합니다. 현재 이 함수는 비어있으므로 아무것도 하지 않습니다.

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.4.3.1. 작업중인 스크립트](./13-03-04-03-01-script_in_progress.md)

[⬅️ 이전: 13.3.4.2. 스크립트 수정하고 저장하기(Editing And Storing Your Scripts)](./13-03-04-02-editing_and_storing_your_scripts.md)

[⬆️ 위: 13.3.4. 첫번째 Script-Fu 스크립트(Your first Script-Fu script)](./13-03-04-00-your-first-script-fu-script.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-first-script.html#idm9844)