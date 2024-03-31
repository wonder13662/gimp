# 8.3.14. 레이어 모드(Legacy) - 빼기(Subtract)
## 1. 이미지 예시
#### 그림 8.3.14.a11. 레이어 모드(Legacy) - 빼기(Subtract)
![08-03-14-layer_mode_legacy-subtract](https://github.com/wonder13662/gimp/assets/15767104/3c43c065-12e8-4463-8795-c19850b58526)

`레이어 모드(Legacy) - 빼기(Subtract)` 모드를 적용하면 보통 이미지는 어두워집니다.

## 2. 방정식과 예시
`레이어 모드(Legacy) - 빼기(Subtract)` 모드는 아래쪽 레이어의 픽셀 값에서 위쪽 레이어의 픽셀 값을 뺀 결과를 가져갑니다. 음수값을 갖게 되는 픽셀 값은 0으로 조정됩니다.

#### 그림 8.3.14.a21. 레이어 모드(Legacy) - 빼기(Subtract): 방정식
![08-03-14-layer_mode_legacy-subtract-equation](https://github.com/wonder13662/gimp/assets/15767104/7f6194a4-5dc6-407b-bf60-23c149db26ef)

아래 예시 이미지의 색상 정보를 확인해보면, 위 방정식이 적용된 것을 확인할 수 있습니다.

#### 그림 8.3.14.a22. 각 레이어별 RGB 값
![08-03-14-layer_mode_legacy-subtract-color_example-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/2d178b48-af6b-4c7d-9e56-03d1e4ef6df0)

#### 표 8.3.8.a23. 레이어별 RGB 값

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|227.0|53.0|**0.0**|
|녹색(Green)|113.0|61.0|**0.0**|
|청색(Blue)|113.0|123.0|**10.0**|

```
결과 값 RGB(Red)
= max((53.0 - 227.0), 0)
= max(-174, 0)
= 0.0

결과 값 RGB(Green)
= max((61.0 - 113.0), 0)
= max(-52, 0)
= 0.0

결과 값 RGB(Blue)
= max((123.0 - 113.0), 0)
= max(10, 0)
= 10.0
```

***

## 다른 페이지로 가기
[➡️ 다음: 8.3.15. 레이어 모드(Legacy) - 질감 드러내기(Grain extract)](./08-03-15-inversion_layer_mode-grain_extract.md)

[⬅️ 이전: 8.3.13. 레이어 모드(Legacy) - 차이점(Difference)](./08-03-13-inversion_layer_mode-difference.md)

[⬆️ 위: 8.3. 레거시 레이어 모드](./08-03-00-legacy-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-layer-modes-legacy.html)