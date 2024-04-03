# 8.3.5. 레이어 모드(Legacy) - 닷지(Dodge)
## 1. 이미지 예시
#### 그림 8.3.5.a11. 레이어 모드(Legacy) - 닷지(Dodge)
![08-03-05-layer_mode_legacy-dodge](https://github.com/wonder13662/gimp/assets/15767104/49d9d0a1-03e4-4f36-8430-c9f44f2f1d31)

`레이어 모드(Legacy) - 닷지(Dodge)` 모드는 이미지를 밝게 만듭니다. 일부 색상은 반전되기도 합니다. 이 모드는 사진 보정에서 이미지의 어두운 영역의 노출값을 증가시킬 때 사용됩니다. 이를 이용해서 그림자 속의 숨어있던 부분들이 드러납니다. 하지만 그레이스케일 이미지에서는 `레이어 모드(Legacy) - 닷지(Dodge)` 모드보다는 칠하기 도구의 `닷지(Dodge)/번(Burn)`의 `닷지(Dodge)`를 사용하는 편이 좋습니다.

<a id="90-03-02-34-a2"></a>

#### [그림 90.3.2.34.a2. 도구상자 - '닷지/번'](./90-03-02-34-dodge_burn.md#90-03-02-34-a2)
![90-03-02-34-a2](https://github.com/wonder13662/gimp/assets/15767104/f602486b-595d-4b15-ba4c-826982b153ce)

## 2. 방정식과 예시
#### 그림 8.3.5.a21. 레이어 모드(Legacy) - 닷지(Dodge): 방정식
![08-03-05-layer_mode_legacy-dodge-equation](https://github.com/wonder13662/gimp/assets/15767104/15a5222b-4e8e-4a26-bca0-faacc69e0eb1)

아래 예시 이미지의 색상 정보를 확인해보면, 위 방정식이 적용된 것을 확인할 수 있습니다.

#### 그림 8.3.5.a22. 각 레이어별 RGB 값
![08-03-05-layer_mode_legacy-dodge-color_example-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/20c40ba8-aa1e-470a-b418-dd60a24d1f5c)

#### 표 8.3.6.a23. 레이어별 RGB 값

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|227.0|53.0|**255.0**|
|녹색(Green)|113.0|61.0|**110.0**|
|청색(Blue)|113.0|123.0|**221.0**|

```
결과 값 RGB(Red)
= min((256 x 53.0) / ((255 - 227.0) + 1), 255)
= min(13568 / 29, 255)
= min(467.8620689655, 255)
= 255.0

결과 값 RGB(Green)
= min((256 x 61.0) / ((255 - 113.0) + 1), 255)
= min(15616 / 143, 255)
= min(109.2027972028, 255)
= min(110.0, 255)
= 110.0

결과 값 RGB(Blue)
= min((256 x 123.0) / ((255 - 113.0) + 1), 255)
= min(31488 / 143, 255)
= min(220.1958041958, 255)
= min(221.0, 255)
= 221.0
```

***

## 다른 페이지로 가기
[➡️ 다음: 8.3.6. 레이어 모드(Legacy) - 더하기(Addition)](./08-03-06-lighten_layer_mode-addition.md)

[⬅️ 이전: 8.3.4. 레이어 모드(Legacy) - 화면(Screen)](./08-03-04-lighten_layer_mode-screen.md)

[⬆️ 위: 8.3. 레거시 레이어 모드](./08-03-00-legacy-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-layer-modes-legacy.html)