# 8.2.5.3. 빼기(Subtract)
#### 그림 8.2.5.3.a30. 빼기(Subtract)
![08-02-05-layer_mode-inversion-03-subtract](https://github.com/wonder13662/gimp/assets/15767104/99cc7034-cb9b-4d83-acdb-4e8366e45d69)

#### 8.2.5.3.a31. 빼기(Subtract) 모드의 방정식
```
RGB 결과값 = max(아래쪽 레이어 RGB 값 - 위쪽 레이어 RGB 값, 0)
```

⚠️ 주의: 위 방정식의 `max`은 두개의 값 중 더 큰 값을 돌려줍니다.

`빼기(Subtract)` 모드는 아래쪽 레이어의 픽셀 값에서 위쪽 레이어의 픽셀 값을 뺍니다. 결과 이미지는 보통 더 어두워집니다. 결과 값이 음수인 경우에는 0(검은색)으로 설정됩니다.

***

## 다른 페이지로 가기

[➡️ 다음: 8.2.5.4. 질감 드러내기(Grain extract)](./08-02-05-inversion-layer-modesx-04-grain_extract.md)

[⬅️ 이전: 8.2.5.2. 제외(Exclusion)](./08-02-05-inversion-layer-modesx-02-exclusion.md)

[⬆️ 위: 8.2.5. 레이어 모드-반전(Inversion)](./08-02-05-inversion-layer-modes.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-inversion.html)