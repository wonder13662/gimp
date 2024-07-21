# 13.3.8. Script-Fu 디버깅하기(Debugging Script-Fu)
Script-Fu API 함수인 `gimp-message`을 이용한 디버깅 방법을 소개합니다.

디버깅 구문은 스크립트 작성자가 스크립트가 예상한 대로 작동하는지 확인하는데 필요합니다. 이 디버깅 구문들은 나중에 본인을 포함한 스크립트 작성자들을 위해서도 최종 스크립트 결과물에 유지해두면 유용합니다.

하지만, 작업하는 도중에 이 모든 디버깅 메시지를 보게 된다면 매우 번거로울 것입니다. 도움이 되는 디버깅 메시지들을 좀 더 쉽게 제어하려면 스크립트를 어떻게 수정해야 할까요?

## 1. 조건부로 디버깅 메시지 출력하기
`Script-Fu`에서 함수(Function)를 사용해서 [전역 변수](https://ko.wikipedia.org/wiki/%EC%A0%84%EC%97%AD_%EB%B3%80%EC%88%98)를 선언할 수 있습니다. 전역 변수를 선언하면 스크립트 안의 모든 함수에서 전역 변수의 값을 읽어올 수 있습니다. 전역 변수를 사용해서 특정한 디버깅 메시지를 출력할지 말지를 확인할 수 있습니다.

```scheme
; 전역변수를 선언합니다.
; 여기서 debug의 값은 true(#t)입니다. 
; 값을 false(#f)로 바꿀수 있습니다.
(define debug #t)
```

> 🗒️ 참고
>
> `Scheme`에서 `True`, `False`의 `Boolean` 값은 각각 `#t`, `#f`로 나타냅니다. [관련 정보: 1.2.5 True and False](https://www.gnu.org/software/mit-scheme/documentation/stable/mit-scheme-ref/True-and-False.html)

스크립트에서 위 코드처럼 전역변수를 정의하고, "if true" 표현식을 사용하여 메시지 출력 여부를 제어할 수 있습니다.

```scheme
; 전역변수 debug가 true일 경우에만 아래 메시지를 출력합니다.
(if debug (gimp-message "This is a debug flag controlled message"))
```

## 2. 디버깅 메시지를 이용한 이진 검색으로 에러 찾기
에러를 찾아내는 또다른 유용한 방법은 메시지 구문으로 [이진 검색](https://namu.wiki/w/%EC%9D%B4%EC%A7%84%20%ED%83%90%EC%83%89)을 하는 것입니다. 이진 검색은 검색의 범위를 검색 단계마다 절반으로 줄여가며 원하는 값을 찾는 과정을 말합니다.

아래 프로시저는 이진 검색을 도와주는 메시지를 출력합니다.

```scheme
(define (here x)(gimp-message(string-append " >>> " (number->string x) " <<<")))
```

스크립트에서 `here 1`이라고 쓴다면, 위의 프로시저(`here`)를 호출하게 되어 메시지를 출력합니다.

```
>>> 1 <<<
```

에러가 발생한 뒤의 메시지는 출력되지 않기 때문에, 메시지의 위치를 확인해서 문제를 찾을 수 있습니다.

## 3. 에러가 발생하면 코드 실행 멈추기
문제가 발생하면 스크립트를 멈춰야 할 경우도 있습니다. `quit` 함수를 호출하면 강제로 스크립트의 실행을 멈출 수 있습니다.

```scheme
(define (err msg)(gimp-message(string-append " >>> " msg " <<<"))(quit))
```

스크립트에서 `err "로직에 문제가 있습니다"`라고 쓴다면, 위 프로시저를 호출하게 되어 아래와 같은 메시지를 출력하게 됩니다.

```scheme
 >>> 로직에 문제가 있습니다 <<<
```

## 4. 디버깅 메시지 출력수단 정하기
[15.5.4. 오류 콘솔](./15-05-04-error-console.md)로 디버깅 메시지를 확인할 수도 있지만, 터미널로도 디버깅 메시지 확인이 가능합니다. 다만 이 경우에는 터미널에서 GIMP(김프)를 실행해야 합니다.

`gimp-message-set-handler` 프로시저를 사용하여 디버깅 메시지 출력 장치를 선택할 수 있습니다. 0번은 [상태 표시 영역(Status Area)](./03-02-04-09-status-area.md), 1번은 콘솔(터미널), 2번은 [오류 콘솔(Error Console)](./15-05-04-error-console.md)입니다. 아래 예시코드는 콘솔(터미널) 출력으로 설정하고 있습니다.

```scheme
(gimp-message-set-handler 1)
```

<a id="90-04-27-a11"></a>

#### [그림 90.4.27.a11. 오류 콘솔 대화상자의 메시지 출력 모습](./90-04-0027-error_console.md#90-04-27-a11)
![90-04-27-a11](https://github.com/wonder13662/gimp/assets/15767104/0832a315-4a10-4414-97ca-57e94f997c52)

#### 그림 13.3.8.a12. 터미널의 메시지 출력 모습
![13-03-08-a12(50%)](https://github.com/wonder13662/gimp/assets/15767104/6c38292b-b413-4f15-8509-8c14068d2477)

<a id="90-05-09-a121"></a>

#### [그림 90.5.9.a121. `상태 표시 영역(Status Area)`의 메시지 출력 모습](./90-05-09-status_area.md#90-05-09-a121)
![90-05-09-a121](https://github.com/wonder13662/gimp/assets/15767104/0ea14a53-c8c4-4e3a-b03c-fb753a5e0b6b)

## 5. 예시 코드
아래 스크립트를 추가한 뒤에, [이미지 메뉴 바](./03-02-04-02-image-menu.md)의 `필터` → `Script-Fu` → `스크립트 새로 고침` 메뉴를 클릭해서 스크립트를 읽어들입니다. [이미지 메뉴 바](./03-02-04-02-image-menu.md)의 `Fu-Plugin` → `디버깅 예제` 메뉴를 선택하여, 아래 스크립트를 실행할 수 있습니다.

#### 파일 13.3.8.a1. debug.scm
[debug.scm.zip](https://github.com/wonder13662/gimp/files/15142046/debug.scm.zip)

```scheme
(define (script-fu-debug-examples)
  (let*
    (
      (msg "")(i 0)
    )

    (here 1)

    (if debug (gimp-message " 디버깅(Debugging) 메시지입니다 "))
    (if info (gimp-message " 정보(Info) 메시지입니다 "))

    (if info
      (gimp-message
        " 에러 메시지는 보통은 독에 있는 오류 콘솔로 출력됩니다 "
      )
    )

    (here 2)

    (if info
      (gimp-message
        " 안타깝게도 모든 메시지는 경고 접미사로 출력됩니다 "
      )
    )

    (if info
      (gimp-message
        (string-append
        " (gimp-message-set-handler 1) 프로시저는 모든 디버깅 메시지를 터미널로 보냅니다 "
        " 터미널을 선택해서 최상위로 두어야 메시지를 볼 수 있습니다 "
        )
      )
    )

    (here 3)

    (gimp-message-set-handler 1)

    (if info (gimp-message " 이 메시지는 터미널로 보내집니다"))

    (here 4)

    (gimp-message-set-handler 2)

    (if info
      (gimp-message
        " (gimp-message-set-handler 2) 프로시저는 모든 디버깅 메시지를 오류 콘솔로 보냅니다 "
      )
    )

    (if info (gimp-message " 이 메시지는 오류 콘솔로 보내집니다"))

    (if info
      (gimp-message
        " 오류 콘솔이 닫혀있으면, 에러 메시지는 상태 표시 영역으로 보내집니다 "        
      )
    )

    (if info
      (gimp-message
        " (gimp-message-set-handler 0) 프로시저는 모든 디버깅 메시지를 상태 표시 영역으로 보냅니다 "
      )
    )

    (gimp-message-set-handler 0)

     (if info (gimp-message " 이 메시지는 상태 표시 영역으로 보내집니다 "))

    (if info
      (gimp-message
         (string-append
           " 상태 표시 영역의 메시지가 너무 길어서 줄바꿈이 발생하면, 팝업 경고창이 나타납니다 "
         )         
      )
    )

    (gimp-message-set-handler 2)

    (if info
      (gimp-message
        (string-append
        " 루프 안에서 디버깅 메시지를 하나만 만들어, "
        " 매우 많은 경고가 발생하는 것을 막을 수 있습니다 "
        )        
      )
    )

    (here 5.1)

    (while (< i 10)
      (set! info (number->string i))
      (set! msg (string-append msg " 루프에서의 정보입니다 : " info "\n"))
      (set! i (+ i 1))
    )

    (if info (gimp-message msg))

    (if info
      (gimp-message
        (string-append
        " 조건이 맞으면 스크립트를 중단할 수 있습니다 "
        " (err msg) 프로시저로 스크립트를 중단시킬 수 있습니다 "
        )
      )
    )

    (if (not falseFlag) (err " 로직에 문제가 있습니다 "))

    (here 5.2)
  )
)


; 전역변수 및 전역함수를 선언합니다.
; debug and error macro
(define (err msg)(gimp-message(string-append " >>> " msg " <<<"))(quit))
(define (here x)(gimp-message(string-append " >>> " (number->string x) " <<<")))
; 메시지 표시 등급: debug는 모든 메시지를 표시합니다.
; debug의 값은 true(#t)입니다. 
; 값을 false(#f)로 바꿀수 있습니다.
(define debug #t)
; 메시지 표시 등급: info는 정보만을 표시합니다.
(define info #t)
; 에러 메시지 예제
(define falseFlag  #f)

(script-fu-register "script-fu-debug-examples"
 "디버깅 예제"
 "Script-Fu에서 디버깅 하기"
 "Mark Sweeney"
 "copyright 2023, Mark Sweeney, Under GNU GENERAL PUBLIC LICENSE Version 3"
 "2023"
 ""
)
(script-fu-menu-register "script-fu-debug-examples" "<Image>/Fu-Plugin")
```

***

## 다른 페이지로 가기

[➡️ 다음: 13.4. 스크립트 예제](./13-04-00-script_examples.md)

[⬅️ 이전: 13.3.7. 최종 스크립트 결과 확인하기(Your script and its working)](./13-03-07-your-script-and-its-working.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://developer.gimp.org/resource/script-fu/debug-script-fu/)