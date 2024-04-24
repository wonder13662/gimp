# 13.3.3.3. `cons` 함수로 리스트 만들기
리스트를 만들 때, 자주 사용하게 될 함수는 `cons` 함수입니다. `cons` 함수는 두번째 인자로 리스트를 값으로 받습니다. [이전 장](./13-03-03-02-how_to_think_of_lists.md)에서 "리스트는 `머리(head)`와 `꼬리(tail)`로 구성되어 있다"고 이야기 했습니다. `cons` 함수는 리스트의 머리(haed)에 요소를 하나 추가합니다.

## 1. `cons` 함수로 리스트 선언
`cons` 함수는 아래처럼 리스트를 만듭니다.

```scheme
(cons 1 '(2 3 4) )
```

<a id="90-04-97-a177"></a>

#### [그림 90.4.97.a177. `cons` 함수로 리스트 선언 (Windows) (우리말)](./90-04-97-script_fu_console.md#90-04-97-a177)
![90-04-97-a177](https://github.com/wonder13662/gimp/assets/15767104/36c009c7-e3cc-422f-849a-43325acad8eb)

결과는 리스트 `(1 2 3 4)` 입니다.

## 2. `cons` 함수로 요소 1개인 리스트 선언

`cons` 함수로 요소 1개로만 리스트를 만들 수 있습니다.

```scheme
(cons 1 () )
```

<a id="90-04-97-a178"></a>

#### [그림 90.4.97.a178. `cons` 함수로 요소 1개인 리스트 선언 (Windows) (우리말)](./90-04-97-script_fu_console.md#90-04-97-a178)
![90-04-97-a178](https://github.com/wonder13662/gimp/assets/15767104/1a55eb82-5c91-42fd-afe0-9c741a079ee9)

또한 [리터럴](https://ko.wikipedia.org/wiki/%EB%A6%AC%ED%84%B0%EB%9F%B4) 값의 위치에 사전에 만들어 둔 변수들을 사용할 수 있습니다.

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.3.4. `list` 함수로 리스트 정의하기](./13-03-03-04-defining_a_list_using_the_list_function.md)

[⬅️ 이전: 13.3.3.2. 리스트의 구조 이해하기](./13-03-03-02-how_to_think_of_lists.md)

[⬆️ 위: 13.3.3. 더 많은 리스트(Lists, lists and more lists)](./13-03-03-00-lists-lists-and-more-lists.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-lists.html#idm9765)