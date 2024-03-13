# 8.3.9. 레이어 모드(Legacy) - 번(Burn)
## 1. 이미지 예시
#### 그림 8.3.9.a11. 레이어 모드(Legacy) - 번(Burn)
![08-03-09-layer_mode_legacy-burn](https://github.com/wonder13662/gimp/assets/15767104/a65bf57f-cf3a-479e-a849-b2befb5c917b)

## 2. 방정식과 예시
#### 그림 8.3.9.a21. 레이어 모드(Legacy) - 번(Burn): 방정식
![08-03-09-layer_mode_legacy-burn-equation](https://github.com/wonder13662/gimp/assets/15767104/797c4e25-cd89-4a61-aff4-4b3cebc918a3)

아래 예시 이미지의 색상 정보를 확인해보면, 위 방정식이 적용된 것을 확인할 수 있습니다.

#### 그림 8.3.9.a22. 각 레이어별 RGB 값
![08-03-09-layer_mode_legacy-burn-color_example-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/dbfd0143-6bf5-450d-a458-cdbe9bb00044)

#### 표 8.3.9.a23. 레이어별 RGB 값

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|227.0|53.0|**28.0**|
|녹색(Green)|113.0|61.0|**0.0**|
|청색(Blue)|113.0|123.0|**0.0**|

```
결과 값 RGB(Red)
= max(255 - ((256 x (255 - 53.0)) / (227.0 + 1)), 0)
= max(255 - ((256 x 202) / 228), 0)
= max(255 - (51712 / 228), 0)
= max(255 - 226.8070175439, 0)
= max(28.1929824561, 0)
= 28.1929824561
= 28.0

결과 값 RGB(Green)
= max(255 - ((256 x (255 - 61.0)) / (113.0 + 1)), 0)
= max(255 - ((256 x 194) / 114) , 0)
= max(255 - (49664 / 114), 0)
= max(255 - 435.649122807, 0)
= max(-180.649122807, 0)
= 0.0

결과 값 RGB(Blue)
= max(255 - ((256 x (255 - 123.0)) / (113.0 + 1)), 0)
= max(255 - ((256 x 132) / 114), 0)
= max(255 - (33792 / 114), 0)
= max(255 - 296.4210526316, 0)
= max(-41.4210526316, 0)
= 0.0
```

***

## 다른 페이지로 가기
[➡️ 다음: ?]()

[⬅️ 이전: 8.3.8. 레이어 모드(Legacy) - 곱하기(Multiply)](./08-03-legacy-layer-modesx-08-darken_layer_mode-multiply.md)

[⬆️ 위: 8.3. 레거시 레이어 모드](./08-03-legacy-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-layer-modes-legacy.html)