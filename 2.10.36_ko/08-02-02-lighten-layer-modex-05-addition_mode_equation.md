# 8.2.2.3. 더하기(Addition) 모드 방정식
더하기(Addition) 모드는 아래와 같은 방정식을 갖습니다.

(TODO 여기의 내용은 Legacy로 이동해야 합니다. 최신 Addition은 Legacy Addition과 다르게 동작합니다. 최신 Addition은 정확한 방정식을 알 수 없는 상태입니다.)

#### 8.2.2.3.a1. 더하기(Addition) 모드 방정식
![layer_mode-lighten-05-addition-equation](https://github.com/wonder13662/gimp/assets/15767104/2c067664-64b2-4887-b6fe-97e2202997f5)

위 방정식을 쉽게 풀어쓰면 아래와 같습니다. 방정식에서 `M`은 "아래쪽 레이어의 RGB 값", `I`는 "위쪽 레이어의 RGB 값"입니다.

#### 8.2.2.3.a2. RGB 색상값의 0부터 255인 경우의 더하기(Addition) 모드 방정식
```
픽셀의 `더하기(Addition)` 모드의 RGB 색상값 = min((아래쪽 레이어의 RGB 값 + 위쪽 레이어의 RGB 값), 255)
```

⚠️ 주의: 위 방정식의 `min`은 두개의 값중 더 작은 값을 돌려줍니다.

그럼 실제 사례를 살펴보겠습니다.

## 1. 첫번째 예제

#### 8.2.2.3.a11. 더하기(Addition) 모드 예제
![layer_mode-lighten-05-addition_color_examples-01](https://github.com/wonder13662/gimp/assets/15767104/01043b35-f9fe-492b-89fd-5cd57b7263e7)

#### 그림 8.2.2.a101. 레이어 모드: 예제1 - 위쪽 레이어 색상 정보
![layer_mode-lighten-color_example-01-top_layer-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/0b3c8936-39be-48f0-8bda-30c266deec0c)

#### 그림 8.2.2.a102. 레이어 모드: 예제1 - 아래쪽 레이어 색상 정보
![layer_mode-lighten-color_example-01-bottom_layer-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/11159a29-09e1-4ed3-96ed-a57b0ba715d6)

#### 그림 8.2.2.3.a12. 결과 이미지의 색상 정보
![layer_mode-lighten-05-addition-color_example-01-result(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/193d1981-1d19-4d38-9a80-638c5c2216ed)

### 1-1. 더하기(Addition) 모드의 RGB의 Red 값 구하기
- 위쪽 레이어의 RGB(Red): 249
- 아래쪽 레이어의 RGB(Red): 255
- 최종 결과 RGB(Red): 255

```
최종 결과 RGB(Red)
= min((255 + 249), 255)
= min(504, 255)
= 255
```

### 1-2. 더하기(Addition) 모드의 RGB의 Green 값 구하기
- 위쪽 레이어의 RGB(Green): 251
- 아래쪽 레이어의 RGB(Green): 0
- 최종 결과 RGB(Green): 251

```
최종 결과 RGB(Green)
= min((0 + 251), 255)
= min(251, 255)
= 251
```

### 1-3. 더하기(Addition) 모드의 RGB의 Blue 값 구하기
- 위쪽 레이어의 RGB(Green): 10
- 아래쪽 레이어의 RGB(Green): 255
- 최종 결과 RGB(Green): 255

```
최종 결과 RGB(Blue)
= min((255 + 10), 255)
= min(265, 255)
= 255
```

위 3가지 방정식 계산을 통해 더하기(Addition) 모드 방정식이 올바르게 사용되었음을 확인할 수 있습니다.

## 2. 두번째 예제
#### 8.2.2.3.a21. 더하기(Addition) 모드 예제
![layer_mode-lighten-05-addition_color_examples-02](https://github.com/wonder13662/gimp/assets/15767104/710aee03-3fc6-431d-9f89-ebbee61eca18)

#### 그림 8.2.2.a103. 레이어 모드: 예제2 - 위쪽 레이어 색상 정보
![layer_mode-lighten-color_example-02-top_layer-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/cac56536-eb1e-4feb-93d3-7cc86c150196)

#### 그림 8.2.2.a104. 레이어 모드: 예제2 - 아래쪽 레이어 색상 정보
![layer_mode-lighten-color_example-02-bottom_layer-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/8aa80214-9dd0-4af6-8edb-cdfd7f3c1be9)

#### 그림 8.2.2.3.a22. 결과 이미지의 색상 정보
![layer_mode-lighten-05-addition-color_example-02-result(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/fef06563-f6a1-4b1a-9b65-4741cfeccef4)

### 2-1. 더하기(Addition) 모드의 RGB의 Red 값 구하기
- 위쪽 레이어의 RGB(Red): 227
- 아래쪽 레이어의 RGB(Red): 53
- 최종 결과 RGB(Red): 232 (TODO 계산 값과 다름!)

```
최종 결과 RGB(Red)
= min((53 + 227), 255)
= min(280, 255)
= 255
```

### 2-2. 더하기(Addition) 모드의 RGB의 Green 값 구하기
- 위쪽 레이어의 RGB(Green): 113
- 아래쪽 레이어의 RGB(Green): 61
- 최종 결과 RGB(Green): 127 (TODO 계산 값과 다름!)

```
최종 결과 RGB(Green)
= min((61 + 113), 255)
= min(174, 255)
= 174
```

### 2-3. 더하기(Addition) 모드의 RGB의 Blue 값 구하기
- 위쪽 레이어의 RGB(Green): 113
- 아래쪽 레이어의 RGB(Green): 123
- 최종 결과 RGB(Green): 162 (TODO 계산 값과 다름!)

```
최종 결과 RGB(Blue)
= min((123 + 113), 255)
= min(236, 255)
= 236
```

위 3가지 방정식 계산을 통해 더하기(Addition) 모드 방정식이 올바르게 사용되었음을 확인할 수 있습니다.

***

## 다른 페이지로 가기

[⬆️ 위: 8.2.2. 레이어 모드-Lighten](./08-02-02-lighten-layer-mode.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-lighten.html)

***

## 관련 정보
[Gimp-forum.net: Layer Mode: Addition equation is working differently to official guide](https://www.gimp-forum.net/Thread-Layer-Mode-Addition-equation-is-working-differently-to-official-guide?pid=38377#pid38377)
