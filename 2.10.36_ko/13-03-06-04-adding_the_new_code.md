# 13.3.6.4. 새 코드 추가하기(Adding the New Code)
코드를 두 군데 더 추가해보겠습니다. 이미지의 크기를 조정하기 바로 전의 지점과 스크립트의 맨 마지막 지점입니다. 맨 마지막 지점은 이미지와 레이어, 텍스트 레이어를 반환값으로 돌려줍니다.

## 1. 이미지 크기 조정 및 텍스트 위치 옮기기

텍스트의 높이와 너비를 얻은 뒤에, 이 값들을 사용자가 지정한 여유 공간 값에 따라 조정해야 합니다.

`Buffer amount`에 사용자가 입력한 값에 대해 별도의 체크는 하지 않을 것입니다. `Buffer amount`는 슬라이더이고, 최대값과 최소값 제한이 되어 있어서 사용자 입력으로 에러를 일으킬 수 없기 때문입니다.

```scheme
(set! theBuffer (* theImageHeight (/ inBufferAmount 100) ) )

(set! theImageHeight (+ theImageHeight theBuffer theBuffer) )
(set! theImageWidth  (+ theImageWidth  theBuffer theBuffer) )
```

여유공간(Buffer) 값을 텍스트의 높이를 기준으로 설정합니다. 그리고 여유공간(Buffer) 값의 2배의 값을 이미지의 높이와 너비에 더해줍니다. 2배의 값을 더해주는 이유는 텍스트의 양쪽 면에 여유공간을 주어야 하기 때문입니다.

여유공간을 이미지에 추가하여 이미지의 크기를 조정했습니다. 이제 텍스트를 이미지의 중간으로 옮겨야 합니다.

그렇게 하려면, 텍스트의 (x, y) 좌표를 여유공간(Buffer) 값만큼씩 옮겨야 합니다.

레이어와 이미지의 크기를 조정한 뒤의 지점에 아래 코드를 추가합니다.

```scheme
(gimp-layer-set-offsets theText theBuffer theBuffer)
```

텍스트 레이어가 떠있는 선택(Floating selection)이므로 텍스트 레이어로 바꾸어 줍니다.

```scheme
(gimp-floating-sel-to-layer theText)
```

작업을 저장하고, [이미지 메뉴 바](./03-02-04-02-image-menu.md)의 `필터` → `Script-Fu` → `스크립트 새로고침` 메뉴를 선택해서 스크립트를 갱신합니다. 

## 2. 이미지, 레이어, 텍스트 레이어를 반환값으로 돌려주기
이제 남은 일은 이미지, 레이어, 텍스트 레이어를 반환값으로 돌려주는 것입니다. 아래 코드를 추가하도록 하겠습니다.

```scheme
(list theImage theLayer theText)
```

이 코드는 함수의 마지막 줄입니다. 이 코드는 다른 스크립트가 TextBox 스크립트를 사용할 수 있게 해줍니다.

다른 스크립트에서 TextBox 스크립트를 사용하려면, 아래 코드처럼 작성하면 됩니다.

```scheme
(set! theResult 
  (script-fu-text-box
    "Some text"
    "Charter" "30"
    '(0 0 0)
    "35"
  )
)
(gimp-image-flatten (car theResult))
```

축하합니다! 드디어 TextBox 스크립트를 완성했습니다! 최종 스크립트는 아래 영상처럼 동작합니다.

#### 영상 13.3.6.4.a1. 최종 스크립트 확인하기
<video controls="controls" width="640" height="360"  src="https://github.com/wonder13662/gimp/assets/15767104/e907c457-27b4-472c-ae59-f3432f00c4b4"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.7. 최종 스크립트 결과 확인하기(Your script and its working)](./13-03-07-your-script-and-its-working.md)

[⬅️ 이전: 13.3.6.3. 매개변수와 등록 함수 수정하기(Modifying the Parameters and the Regitration Function)](./13-03-06-03-00-modifying_the_parameters_and_the_regitration_function.md)

[⬆️ 위: 13.3.6. 텍스트 박스 스크립트 확장하기(Extending the text box script)](./13-03-06-00-extending-the-text-box-script.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-extending-text-box.html#idm10255)