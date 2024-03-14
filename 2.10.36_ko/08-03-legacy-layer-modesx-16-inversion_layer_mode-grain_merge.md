# 8.3.16. 레이어 모드(Legacy) - 질감 합치기(Grain merge)
## 1. 이미지 예시
#### 그림 8.3.16.a11. 레이어 모드(Legacy) - 질감 합치기(Grain merge)
![08-03-16-layer_mode_legacy-grain_merge](https://github.com/wonder13662/gimp/assets/15767104/c64fadcf-8090-4021-ba02-9bfdd04efa83)

## 2. 방정식과 예시
#### 그림 8.3.16.a21. 레이어 모드(Legacy) - 질감 합치기(Grain merge): 방정식
![08-03-16-layer_mode_legacy-grain_merge-equation](https://github.com/wonder13662/gimp/assets/15767104/3beb7342-b36f-461d-a113-1e8014f5ab68)

아래 예시 이미지의 색상 정보를 확인해보면, 위 방정식이 적용된 것을 확인할 수 있습니다.

#### 그림 8.3.16.a22. 각 레이어별 RGB 값
![08-03-16-layer_mode_legacy-grain_merge-color_example-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/7974a576-5ca4-471b-8c68-389f40f69d6f)

#### 표 8.3.8.a23. 레이어별 RGB 값

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|227.0|53.0|**152.0**|
|녹색(Green)|113.0|61.0|**46.0**|
|청색(Blue)|113.0|123.0|**108.0**|

```
결과 값 RGB(Red)
= 53.0 + 227.0 - 128
= 152.0

결과 값 RGB(Green)
= 61.0 + 113.0 - 128
= 46.0

결과 값 RGB(Blue)
= 123.0 + 113.0 - 128
= 108.0
```

***

## 다른 페이지로 가기
[➡️ 다음: 8.3.17. 레이어 모드(Legacy) - 나누기(Divide)](./08-03-legacy-layer-modesx-17-inversion_layer_mode-divide.md)

[⬅️ 이전: 8.3.15. 레이어 모드(Legacy) - 질감 드러내기(Grain extract)](./08-03-legacy-layer-modesx-15-inversion_layer_mode-grain_extract.md)

[⬆️ 위: 8.3. 레거시 레이어 모드](./08-03-legacy-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-layer-modes-legacy.html)