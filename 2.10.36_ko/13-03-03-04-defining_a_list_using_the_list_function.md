# 13.3.3.4. `list` 함수로 리스트 정의하기
리스트를 리터럴 값들 또는 이전에 선언한 변수들로 정의하려면, `list` 함수를 사용합니다.

```scheme
(list 5 4 3 a b c)
```

`list` 함수를 사용하면, 변수 `a`, `b`, `c`의 값을 가져와 리스트를 반환합니다.

```scheme
(let*   (
          (a 1)
          (b 2)
          (c 3)
        )

        (list 5 4 3 a b c)
)
```

이 코드는 리스트 `(5 4 3 1 2 3)`를 만듭니다.

<a id="90-04-97-a181"></a>

#### [그림 90.4.97.a181. `list` 함수로 리스트 정의하기 (Windows) (우리말)](./90-04-97-script_fu_console.md#90-04-97-a181)
![90-04-97-a181](https://github.com/wonder13662/gimp/assets/15767104/2689293a-9fc8-477f-838a-316a7331ba2e)

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.3.5. 리스트의 값 가져오기](./13-03-03-05-accessing_values_in_a_list.md)

[⬅️ 이전: 13.3.3.3. `cons` 함수로 리스트 만들기](./13-03-03-03-creating_lists_through_concatenation.md)

[⬆️ 위: 13.3.3. 더 많은 리스트(Lists, lists and more lists)](./13-03-03-00-lists-lists-and-more-lists.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-lists.html#idm9774)