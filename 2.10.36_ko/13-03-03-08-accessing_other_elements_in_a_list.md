# 13.3.3.8. 리스트의 다른 요소 가져오기
리스트의 두번째, 세번째 또는 다른 요소는 어떻게 가져올까요?

## 1. 머리나 꼬리가 아닌 요소 가져오는 방법
리스트의 꼬리의 머리의 머리를 가져오는 함수는 `caadr`입니다. 그리고 리스트의 꼬리의 꼬리를 가져오는 함수는 `cddr`입니다. 이런 함수들의 기본적인 이름 규칙은 쉽습니다. `a`는 리스트의 머리(head)를 의미합니다. `d`는 리스트의 꼬리(tail)을 의미합니다.

```scheme
(car (cdr (car x) ) )
```

위의 중첩된 함수는 아래처럼 1개의 함수로 쓸 수 있습니다. 

```scheme
(cadar x)
```

## 2. 연습
리스트 요소 접근 함수를 연습해봅시다. 아래 스크립트를 작성해서 함수 `car`와 `cdr`의 변형된 버전을 사용해서 리스트의 다른 요소들에 접근해봅시다.

```scheme
(let* (
        (x '( (1 2 (3 4 5) 5) 7 8 (9 10) )
        )
      )
      ; place your car/cdr code here
)
```

<a id="90-04-97-a211"></a>

#### [그림 90.4.97.a211. `cadar` 함수 사용 (Windows) (우리말)](./90-04-97-script_fu_console.md#90-04-97-a211)
![90-04-97-a211](https://github.com/wonder13662/gimp/assets/15767104/7e67d382-1996-4bfd-aa3f-2a3283e0d839)

<a id="90-04-97-a212"></a>

#### [그림 90.4.97.a212. `cddr` 함수 사용 (Windows) (우리말)](./90-04-97-script_fu_console.md#90-04-97-a212)
![90-04-97-a212](https://github.com/wonder13662/gimp/assets/15767104/3b2b61a0-0251-459c-9d74-9e467c620566)

## 3. 주석(Comment)
`Scheme`에서 세미콜론(`;`)은 주석(Comment)의 시작을 표시합니다. 스크립트 인터프리터는 세미콜론(`;`) 주석의 같은 줄의 모든 내용을 무시합니다. 이를 이용해서 나중에 스크립트를 다시 확인할 때, 작업에 관련된 기억을 되살릴 수 있습니다.

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.5. 스크립트 개선하기(Giving our script some guts)](./13-03-05-giving-our-script-some-guts.md)

[⬅️ 이전: 13.3.3.7. `cdr` 함수](./13-03-03-07-the_cdr_function.md)

[⬆️ 위: 13.3.3. 더 많은 리스트(Lists, lists and more lists)](./13-03-03-00-lists-lists-and-more-lists.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-lists.html#idm9812)