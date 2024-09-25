# 13.3.6.3. 매개변수와 등록 함수 수정하기(Modifying the Parameters and the Regitration Function)
여백 공간의 크기를 사용자가 설정할 수 있도록 하기 위해서, 매개변수를 텍스트 박스 함수와 등록 함수에 추가하겠습니다. 

참고로 아래 코드에서 녹색으로 표시된 부분은 추가된 코드이며, 빨간색으로 표시된 부분은 삭제된 코드입니다.

```diff
;스크립트를 프로시저 데이터베이스(Procedure Database)에 등록
(script-fu-register
  …
  SF-COLOR       "Color"         '(0 0 0)     ;프롬프트의 사용자 입력 색상(color variable)
+ ;슬라이더(여백 공간)
+ SF-ADJUSTMENT  "Buffer amount" '(35 0 100 1 10 1 0)
)

…

;Text Box 함수 정의
- (define (script-fu-text-box inText inFont inFontSize inTextColor)
+ (define (script-fu-text-box inText inFont inFontSize inTextColor inBufferAmount)
  (let*
    (
      ;지역 변수를 선언합니다.
      ;새로운 이미지를 만듭니다.
      (theImageWidth  10)
      (theImageHeight 10)
      (theImage (car
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

+     ;여백 공간
+     (theBuffer)

      ;이미지에 새로운 레이어를 만듭니다.
      (theLayer
        (car
          (gimp-layer-new
            theImage
            theImageWidth
            theImageHeight
            RGB-IMAGE
            "layer 1"
            100
            LAYER-MODE-NORMAL
          )
        )
      )
    ) ;지역변수 끝
    …
  )
)
```

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.6.3.1. 작업중인 스크립트](./13-03-06-03-01-script_in_progress.md)

[⬅️ 이전: 13.3.6.2. 스크립트를 더 확장하기(Extending The Script a Little More)](./13-03-06-02-extending_the_script_a_little_more.md)

[⬆️ 위: 13.3.6. 텍스트 박스 스크립트 확장하기(Extending the text box script)](./13-03-06-00-extending-the-text-box-script.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-extending-text-box.html#idm10248)