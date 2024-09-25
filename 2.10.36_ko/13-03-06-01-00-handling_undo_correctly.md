# 13.3.6.1. 실행취소 다루기(Handling Undo Correctly)
스크립트를 만들 때, 스크립트를 쓰는 사용자들에게 실수를 실행취소 할 수 있는 방법을 제공해야 할 경우가 있습니다. 

GIMP(김프)의 `gimp-image-undo-group-start` 함수와 `gimp-image-undo-group-end` 함수를 스크립트 코드 주변에 넣어서 이것을 가능하게 할 수 있습니다.

⚠️ 주의: 원문에서는 `gimp-undo-push-group-start`와 `gimp-undo-push-group-end`을 사용하는 것으로 안내하고 있습니다. 하지만 이 두 함수는 Deprecated(더 이상 사용되지 않음) 상태입니다. `gimp-image-undo-group-start`와 `gimp-image-undo-group-end`을 대신 사용해야 합니다.

이 두 함수는 GIMP(김프)에게 이미지 수정의 각 실행 단계를 언제 기록을 시작하고 멈출지 알려줍니다. 

그래서 이 실행기록을 통해서 실행 취소를 할 수 있습니다.

사용자가 완전히 새로운 이미지를 만드는 것이라면, 이 두 함수를 쓰는 것은 합리적이지 않습니다. 

왜냐하면 이미 있는 이미지를 바꾸는 것이 아니기 때문입니다.

하지만, 이미 있는 이미지를 수정하는 스크립트라면, 각 실행 단계를 기록해서 취소하는 것이 필요할 수 있습니다. 

이 두 함수로 얻은 스크립트의 실행 단계의 기록를 취소하는 것은 문제없이 작동합니다.

<a comment="TODO 위 두 함수로 실제로 사용자가 할 수 있는 작업이 무엇인지 확인하여 추가해야 합니다."></a>

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.6.1.1. 작업중인 스크립트](./13-03-06-01-01-script_in_progress.md)

[⬅️ 이전: 13.3.6. 텍스트 박스 스크립트 확장하기(Extending the text box script)](./13-03-06-00-extending-the-text-box-script.md)

[⬆️ 위: 13.3.6. 텍스트 박스 스크립트 확장하기(Extending the text box script)](./13-03-06-00-extending-the-text-box-script.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-extending-text-box.html#idm10232)