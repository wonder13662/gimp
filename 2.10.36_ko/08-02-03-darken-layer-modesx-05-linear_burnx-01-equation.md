# 8.2.3.5.1. 선형적 번(Linear burn) 모드 방정식
`선형적 번(Linear burn)` 모드는 아래와 같은 방정식을 갖습니다.

#### 8.2.3.5.1.a1. 선형적 번(Linear burn) 모드 방정식 해석
```
최종 결과 RGB 값 = max((아래쪽 레이어의 RGB 값 + 위쪽 레이어의 RGB 값) - 255, 0)
```

그럼 실제 사례를 살펴보겠습니다.

## 1. 첫번째 예제
#### 그림 8.2.3.5.1.a101. 선형적 번(Linear burn) 모드 예제
![08-02-03-03-layer_mode-darken-05-linear_burn-color_example-01(50%)](https://github.com/wonder13662/gimp/assets/15767104/e0e7912f-047b-459a-aa79-b916483a5c58)

#### 그림 8.2.3.5.1.a102. 각 레이어별 RGB 값
![08-02-03-03-layer_mode-darken-05-linear_burn-color_example-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/325ef3b1-6ee9-478d-9c60-609fb715330a)

#### 표 8.2.3.5.1.a103. 레이어별 RGB 값

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|249.0|255.0|**249.0**|
|녹색(Green)|251.0|0.0|**0.0**|
|청색(Blue)|10.0|255.0|**10.0**|

```
결과 값 RGB(Red)
= max((249.0 + 255.0) - 255, 0)
= max(249, 0)
= 249

결과 값 RGB(Green)
= max((251.0 + 0.0) - 255, 0)
= max(-4, 0)
= 0

결과 값 RGB(Blue)
= max((10.0 + 255.0) - 255, 0)
= max(10.0, 0)
= 10.0
```

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

## 2. 두번째 예제
#### 그림 8.2.3.5.1.a201. 선형적 번(Linear burn) 모드 예제
![08-02-03-layer_mode-darken-05-linear_burn-color_example-02(50%)](https://github.com/wonder13662/gimp/assets/15767104/ab2610cd-062f-42a5-ad3a-0bdf5a542029)

#### 그림 8.2.3.5.1.a202. 각 레이어별 RGB 값
![08-02-03-layer_mode-darken-05-linear_burn-color_example-02-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/100394a8-ce5f-4ea4-87cf-c22ff0d0cec0)

#### 표 8.2.3.5.1.a203. 레이어별 RGB 값

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|227.0|53.0|**25.0**|
|녹색(Green)|113.0|61.0|**0.0**|
|청색(Blue)|113.0|123.0|**0.0**|

```
결과 값 RGB(Red)
= max((227.0 + 53.0) - 255, 0)
= max(25, 0)
= 25.0

결과 값 RGB(Green)
= max((113.0 + 61.0) - 255, 0)
= max(-81, 0)
= 0.0

결과 값 RGB(Blue)
= max((113.0 + 123.0) - 255, 0)
= max(-19.0, 0)
= 0.0
```

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

## 3. 세번째 예제 - 아래쪽 레이어가 검은색
#### 그림 8.2.3.5.1.a301. 선형적 번(Linear burn) 모드 예제
![08-02-03-layer_mode-darken-05-linear_burn-color_example-03-black(50%)](https://github.com/wonder13662/gimp/assets/15767104/d008ccfc-19fb-4924-aaf6-e3ae6532c1bd)

#### 그림 8.2.3.5.1.a302. 각 레이어별 RGB 값
![08-02-03-layer_mode-darken-05-linear_burn-color_example-03-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/9747f71d-accc-4ff3-9d7e-3824278f402d)

#### 표 8.2.3.5.1.a303. 레이어별 RGB 값

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|227.0|0.0|**0.0**|
|녹색(Green)|113.0|0.0|**0.0**|
|청색(Blue)|113.0|0.0|**0.0**|

```
결과 값 RGB(Red)
= max((227.0 + 0.0) - 255, 0)
= max(-28, 0)
= 0.0

결과 값 RGB(Green)
= max((113.0 + 0.0) - 255, 0)
= max(-142, 0)
= 0.0

결과 값 RGB(Blue)
= max((113.0 + 0.0) - 255, 0)
= max(-142.0, 0)
= 0.0
```

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

## 4. 네번째 예제 - 아래쪽 레이어가 하얀색
#### 그림 8.2.3.5.1.a401. 선형적 번(Linear burn) 모드 예제
![08-02-03-layer_mode-darken-05-linear_burn-color_example-04-white(50%)](https://github.com/wonder13662/gimp/assets/15767104/5ff039b2-e44f-4ab6-8d91-516160471fac)

#### 그림 8.2.3.5.1.a402. 각 레이어별 RGB 값
![08-02-03-layer_mode-darken-05-linear_burn-color_example-03-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/3f9e3336-0e64-4a60-925f-d9288863f59b)

#### 표 8.2.3.5.1.a303. 레이어별 RGB 값

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|227.0|255.0|**227.0**|
|녹색(Green)|113.0|255.0|**113.0**|
|청색(Blue)|113.0|255.0|**113.0**|

```
결과 값 RGB(Red)
= max((227.0 + 255.0) - 255, 0)
= max(227.0, 0)
= 227.0

결과 값 RGB(Green)
= max((113.0 + 255.0) - 255, 0)
= max(113.0, 0)
= 113.0

결과 값 RGB(Blue)
= max((113.0 + 255.0) - 255, 0)
= max(113.0, 0)
= 113.0
```

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

***

## 다른 페이지로 가기
[⬆️ 위: 8.2.3. 레이어 모드-어두움(Darken)](./08-02-03-darken-layer-modes.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-lighten.html)
