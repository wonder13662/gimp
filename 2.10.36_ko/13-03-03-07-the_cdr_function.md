# 13.3.3.7. `cdr` 함수
`cdr` 함수는 리스트의 첫번째 요소를 제외한 나머지(리스트의 꼬리(tail))를 돌려줍니다. 리스트의 요소가 하나 밖에 없다면, 빈 리스트를 돌려줍니다.

## 1. `cdr` 함수를 요소가 2개 이상인 리스트에 사용
```scheme
(cdr '("first" 2 "third"))
```

위 스크립트는 아래 결과를 돌려줍니다.

```scheme
(2 "third")
```

<a id="90-04-97-a201"></a>

#### [그림 90.4.97.a201. `cdr` 함수를 요소가 2개 이상인 리스트에 사용 (Windows) (우리말)](./90-04-97-script_fu_console.md#90-04-97-a201)
![90-04-97-a201](https://github.com/wonder13662/gimp/assets/15767104/6f3e7dcf-2ed2-490d-bae1-79c00f3b7321)

## 2. `cdr` 함수를 요소가 1개인 리스트에 사용
```scheme
(cdr '("one and only"))
```

위 스크립트는 아래 결과를 돌려줍니다.

```scheme
()
```

<a id="90-04-97-a202"></a>

#### [그림 90.4.97.a202. `cdr` 함수를 요소가 1개인 리스트에 사용 (Windows) (우리말)](./90-04-97-script_fu_console.md#90-04-97-a202)
![90-04-97-a202](https://github.com/wonder13662/gimp/assets/15767104/31ad9066-ce42-4e84-8c85-d2c6c622cb51)

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.3.8. 리스트의 다른 요소 가져오기](./13-03-03-08-accessing_other_elements_in_a_list.md)

[⬅️ 이전: 13.3.3.6. `car` 함수](./13-03-03-06-the_car_function.md)

[⬆️ 위: 13.3.3. 더 많은 리스트(Lists, lists and more lists)](./13-03-03-00-lists-lists-and-more-lists.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-lists.html#idm9800)