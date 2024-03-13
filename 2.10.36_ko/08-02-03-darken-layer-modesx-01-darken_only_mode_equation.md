# 8.2.3.1. 어두운 색만(Darken only) 모드 방정식
어두운 색만(Darken only) 모드는 아래와 같은 방정식을 갖습니다.

#### 그림 8.2.3.1.a1. 어두운 색만(Darken only) 모드 방정식
![layer_mode-darken-01-darken_only-equation](https://github.com/wonder13662/gimp/assets/15767104/89116205-49c1-444b-942d-afc891c45ba9)

#### 8.2.3.1.a2. 어두운 색만(Darken only) 모드 방정식 해석
```
픽셀의 `어두운 색만(Darken only)` 모드의 RGB 색상값 = min(위쪽 레이어의 RGB 값, 아래쪽 레이어의 RGB 값)
```

⚠️ 주의: 위 방정식의 `min`은 두개의 값 중 더 작은 값을 돌려줍니다.

그럼 실제 사례를 살펴보겠습니다.

## 1. 첫번째 예제
#### 그림 8.2.3.1.a101. 어두운 색만(Darken only) 모드 예제
![layer_mode-darken-01-darken_only-color_example-01(50%)](https://github.com/wonder13662/gimp/assets/15767104/87c56e73-b94d-4303-94e1-870619e5c079)

### 1-1. 어두운 색만(Darken only) 모드의 RGB 값 구하기
#### 그림 8.2.3.1.a111. 각 레이어별 RGB 값
![layer_mode-darken-01-darken_only-color_example-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/29f37554-28ac-4c7b-b367-6cdadbce3c3f)

#### 표 8.2.3.1.a112. 레이어별 RGB 값 방정식 계산

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|RGB(Red)|**249.0**|255.0|**249.0**|
|RGB(Green)|251.0|**0.0**|**0.0**|
|RGB(Blue)|**10.0**|255.0|**10.0**|

```
결과 값 RGB(Red)
= min(249.0, 255.0)
= 249.0

결과 값 RGB(Green)
= min(251.0, 0.0)
= 0.0

결과 값 RGB(Blue)
= min(10.0, 255.0)
= 10.0
```

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

## 2. 두번째 예제
#### 그림 8.2.3.1.a201. 어두운 색만(Darken only) 모드 예제
![layer_mode-darken-01-darken_only-color_example-02(50%)](https://github.com/wonder13662/gimp/assets/15767104/0e5ef339-dfe8-48f6-b478-97f3bd763e0b)

### 2-1. 어두운 색만(Darken only) 모드의 RGB 값 구하기
#### 그림 8.2.3.1.a211. 각 레이어별 RGB 값
![layer_mode-darken-01-darken_only-color_example-02-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/5d9a5090-6bd5-48f7-b5fa-628d4f14ee69)

#### 표 8.2.3.1.a212. 레이어별 RGB 값 방정식 계산

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|RGB(Red)|227.0|**53.0**|**53.0**|
|RGB(Green)|113.0|**61.0**|**61.0**|
|RGB(Blue)|**113.0**|123.0|**113.0**|

```
결과 값 RGB(Red)
= min(227.0, 53.0)
= 53.0

결과 값 RGB(Green)
= min(113.0, 61.0)
= 61.0

결과 값 RGB(Blue)
= min(113.0, 123.0)
= 113.0
```

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

## 3. 세번째 예제 - 아래쪽 레이어가 검은색
#### 그림 8.2.3.1.a301. 어두운 색만(Darken only) 모드 예제
![layer_mode-darken-01-darken_only-color_example-03-black(50%)](https://github.com/wonder13662/gimp/assets/15767104/7d0593fb-7f77-4c32-b330-adbd6f553c53)

### 3-1. 어두운 색만(Darken only) 모드의 RGB 값 구하기
#### 그림 8.2.3.1.a311. 각 레이어별 RGB 값
![layer_mode-darken-01-darken_only-color_example-03-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/5902e4e8-a91a-45a2-b3ca-b6cbef0bf8bf)

#### 표 8.2.3.1.a312. 레이어별 RGB 값 방정식 계산

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|RGB(Red)|227.0|**0.0**|**0.0**|
|RGB(Green)|113.0|**0.0**|**0.0**|
|RGB(Blue)|113.0|**0.0**|**0.0**|

```
결과 값 RGB(Red)
= min(227.0, 0.0)
= 0.0

결과 값 RGB(Green)
= min(113.0, 0.0)
= 0.0

결과 값 RGB(Blue)
= min(113.0, 0.0)
= 0.0
```

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

## 4. 네번째 예제 - 아래쪽 레이어가 하얀색
#### 그림 8.2.3.1.a401. 어두운 색만(Darken only) 모드 예제
![layer_mode-darken-01-darken_only-color_example-04-white(50%)](https://github.com/wonder13662/gimp/assets/15767104/131f7904-77b2-45e2-97a4-5d0afe74c1e3)

### 4-1. 어두운 색만(Darken only) 모드의 RGB 값 구하기
#### 그림 8.2.3.1.a411. 각 레이어별 RGB 값
![layer_mode-darken-01-darken_only-color_example-04-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/0b84267b-3c4d-4d92-be3a-5bd24b4448ba)

#### 표 8.2.3.1.a412. 레이어별 RGB 값 방정식 계산

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|RGB(Red)|**227.0**|255.0|**227.0**|
|RGB(Green)|**113.0**|255.0|**113.0**|
|RGB(Blue)|**113.0**|255.0|**113.0**|

```
결과 값 RGB(Red)
= min(227.0, 255.0)
= 227.0

결과 값 RGB(Green)
= min(113.0, 255.0)
= 113.0

결과 값 RGB(Blue)
= min(113.0, 255.0)
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
