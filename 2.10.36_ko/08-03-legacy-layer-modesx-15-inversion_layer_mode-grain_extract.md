# 8.3.15. 레이어 모드(Legacy) - 질감 드러내기(Grain extract)
## 1. 이미지 예시
#### 그림 8.3.15.a11. 레이어 모드(Legacy) - 질감 드러내기(Grain extract)
![08-03-15-layer_mode_legacy-grain_extract](https://github.com/wonder13662/gimp/assets/15767104/961b7562-a7ad-45d1-8c1b-0a1386f2c36c)

`레이어 모드(Legacy) - 질감 드러내기(Grain extract)` 모드를 사용하면 보통은 이미지는 어두워집니다. 

## 2. 방정식과 예시
`레이어 모드(Legacy) - 질감 드러내기(Grain extract)` 모드는 아래쪽 레이어의 픽셀 값에서 위쪽 레이어의 픽셀 값을 뺀 값을 가져갑니다. 결과값이 음수인 경우는 0으로 조정됩니다.

#### 그림 8.3.15.a21. 레이어 모드(Legacy) - 질감 드러내기(Grain extract): 방정식
![08-03-15-layer_mode_legacy-grain_extract-equation](https://github.com/wonder13662/gimp/assets/15767104/a689a84f-7e71-4014-b60b-4a5131cccf0e)

아래 예시 이미지의 색상 정보를 확인해보면, 위 방정식이 적용된 것을 확인할 수 있습니다.

#### 그림 8.3.15.a22. 각 레이어별 RGB 값
![08-03-15-layer_mode_legacy-grain_extract-color_example-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/5dfd2725-fb24-4d12-bbd3-44efcda1aa1e)

#### 표 8.3.8.a23. 레이어별 RGB 값

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|227.0|53.0|**0.0**|
|녹색(Green)|113.0|61.0|**76.0**|
|청색(Blue)|113.0|123.0|**138.0**|

```
결과 값 RGB(Red)
= max(53.0 - 227.0 + 128, 0)
= max(-46, 0)
= 0.0

결과 값 RGB(Green)
= max(61.0 - 113.0 + 128, 0)
= max(76, 0)
= 76.0

결과 값 RGB(Blue)
= max(123.0 - 113.0 + 128, 0)
= max(138, 0)
= 138
```

***

## 다른 페이지로 가기
[➡️ 다음: ?]()

[⬅️ 이전: 8.3.14. 레이어 모드(Legacy) - 빼기(Subtract)](./08-03-legacy-layer-modesx-14-inversion_layer_mode-subtract.md)

[⬆️ 위: 8.3. 레거시 레이어 모드](./08-03-legacy-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-layer-modes-legacy.html)