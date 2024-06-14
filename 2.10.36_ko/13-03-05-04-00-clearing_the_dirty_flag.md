# 13.3.5.4. 더티 플래그 지우기(Clearing the Dirty Flag)
저장하지 않고 새로 만든 이미지를 닫으려고 하면, GIMP(김프)가 이미지를 닫기 전에 저장할 것인지 물어보는 대화상자를 띄웁니다. `변화 저장하기` 대화상자는 이미지가 더티(dirty) 또는 저장되지 않았을 때 띄웁니다.

<a id="90-04-106-a101"></a>

#### [그림 90.4.106.a101. `변화 저장하기` 대화상자 (Windows) (우리말)](./90-04-106-save_the_change.md#90-04-106-a101)
![90-04-106-a101](https://github.com/wonder13662/gimp/assets/15767104/35aaa961-74eb-40c4-9b76-ba2c5b756437)

[다른 운영체제와 언어의 `변화 저장하기` 대화상자 확인하기](./90-04-106-save_the_change.md#90-04-106-a102)

우리의 스크립트의 경우에는, 단순히 테스트를 위해서 실행하고 결과 이미지에 아무런 수정도 하지 않았는데 저장여부를 물어보는 `변화 저장하기` 대화상자를 확인하는 것은 귀찮은 일입니다. 스크립트로 재실행해서 쉽게 같은 결과를 얻을 수 있기 때문에 이런 더티 플래그(dirty flag) - 이미지가 변경되어 저장되지 않음을 나타내는 상태를 지우는 것이 합리적입니다.

아래 GIMP(김프)의 `gimp-image-clean-all` 함수를 사용하여 이미지를 보여준 뒤의 더티 플래그(dirty flag)를 지울 수 있습니다.

```scheme
(gimp-image-clean-all theImage)
```

`gimp-image-clean-all` 함수는 더티 카운트(dirty count)를 0으로 만들어서 이미지를 변화가 없는 깨끗한 상태로 만듭니다.

이 구문을 추가할지 말지 여부는 필수가 아닌 개인의 선택입니다. 새로운 이미지를 만들고 결과가 크게 중요하지 않을 때는 `gimp-image-clean-all` 함수를 호출하는 것이 좋습니다. 스크립트가 복잡하고 이미 작업하던 이미지에서 사용하는 것이라면, `gimp-image-clean-all` 함수를 호출하는 것이 적절하지 않습니다.

아래 영상에서 작업한 결과를 확인하실 수 있습니다.

#### 영상 13.3.5.4.a1. 작업한 스크립트 확인하기
<video controls="controls" width="640" height="360"  src="https://github.com/wonder13662/gimp/assets/15767104/fa4f4c1d-8b8f-4c2a-bb6e-bef6885a3913"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.6. 텍스트 박스 스크립트 확장하기(Extending the text box script)](./13-03-06-00-extending-the-text-box-script.md)

[⬅️ 이전: 13.3.5.3. 텍스트 추가하기(Adding the Text)](./13-03-05-03-00-adding_the_text.md)

[⬆️ 위: 13.3.5. 스크립트 개선하기(Giving our script some guts)](./13-03-05-00-giving-our-script-some-guts.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-script.html#idm10221)