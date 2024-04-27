# 13.3.5.1. 새 이미지 만들기(Creating a New Image)
이전 장까지 빈 함수를 만들고, GIMP(김프)에 이 함수를 등록했습니다. 

이번 장에서는 스크립트에 새로운 이미지를 만들고, 사용자가 텍스트를 입력하고, 이미지를 텍스트에 맞게 크기를 조정하는 기능을 추가해보도록 하겠습니다.

변수에 새로운 값을 설정하는 방법, 함수를 정의하는 방법, 리스트의 요소에 접근해서 값을 가져오는 방법을 배우면, 나머지는 쉽습니다. [프로시저 브라우저](./16-12-08-the-procedure-browser.md)를 열고, GIMP(김프)의 프로시저 데이터 베이스와 친숙해져야 합니다.

## 1. 새 이미지 만들기
새 이미지를 만드는 것부터 시작해봅시다.

변수 `theImage`를 만듭니다. 변수 `theImage`는 GIMP(김프)의 자체 함수인 `gimp-image-new`의 호출 결과를 저장합니다.

[프로시저 브라우저](./16-12-08-the-procedure-browser.md)에서 `gimp-image-new`를 살펴보면 3개의 매개변수를 갖는 것을 확인할 수 있습니다. 매개변수는 이미지의 너비, 높이, 그리고 이미지의 타입입니다.

<a id="90-04-98-a121-01"></a>

#### [그림 90.4.98.a121.1. `프로시저 브라우저` 대화상자 - `gimp-image-new` (Windows) (우리말)](./90-04-98-procedure_browser.md#90-04-98-a121-01)
![90-04-98-a121-01](https://github.com/wonder13662/gimp/assets/15767104/ddc6ea1a-0ddf-4409-88bd-d81837fb9be1)

텍스트에 이미지를 크기를 조정하는 것은 나중에 할 예정입니다. 그러므로 지금은 10x10 픽셀 크기의 `RGB` 이미지를 만들도록 하겠습니다. 그리고 스크립트에서 이미지의 너비와 높이를 변수에 저장해서 너비와 높이를 수정할 것입니다.

```scheme
(define (script-fu-text-box inText inFont inFontSize inTextColor)
  (let*
    (
      ;지역 변수를 선언합니다.
      ;새로운 이미지를 만듭니다.
      (theImageWidth  10)
      (theImageHeight 10)
      (theImage
        (car
          (gimp-image-new
            theImageWidth
            theImageHeight
            RGB
          )
        )
      )
      ;텍스트를 저장하는 변수입니다.
      ;텍스트는 나중에 만들 것입니다.
      (theText)
    )
  )
)
```

> 🗒️ 참고
>
> `gimp-image-new` 함수의 세번째 매개변수에 `RGB` 값을 전달해서 새로 만드는 이미지의 타입을 `RGB`로 설정합니다. 이 값을 `RGB`가 아닌 `0`으로 설정할 수 있습니다.

스크립트에서 `gimp-image-new` 함수의 반환값의 첫번째 요소의 값을 가져오는 것을 볼 수 있습니다. 이상해 보일 수도 있지만, [프로시저 브라우저](./16-12-08-the-procedure-browser.md)에서 `gimp-image-new` 함수의 설명을 확인해보면, 반환값은 이미지의 `ID`, 1개 뿐입니다. 하지만 모든 GIMP(김프) 함수는 1개의 값을 반환하더라도 실제로는 반환값으로 1개의 요소를 가진 리스트를 돌려줍니다. 그러므로 리스트에서 머리(head) - 첫번째 요소를 가져와야 합니다.

<a id="90-04-98-a121-02"></a>

#### [그림 90.4.98.a121.2. `프로시저 브라우저` 대화상자 - `gimp-image-new`: 반환값 (Windows) (우리말)](./90-04-98-procedure_browser.md#90-04-98-a121-02)
![90-04-98-a121-02](https://github.com/wonder13662/gimp/assets/15767104/94ebba38-d458-4ed9-a64f-421755082ce2)

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.5.1.1. 작업중인 스크립트](./13-03-05-01-01-script_in_progress.md)

[⬅️ 이전: 13.3.5. 스크립트 개선하기(Giving our script some guts)](./13-03-05-00-giving-our-script-some-guts.md)

[⬆️ 위: 13.3.5. 스크립트 개선하기(Giving our script some guts)](./13-03-05-00-giving-our-script-some-guts.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-script.html#idm10166)