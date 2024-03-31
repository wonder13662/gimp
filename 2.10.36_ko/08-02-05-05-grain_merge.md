# 8.2.5.5. 질감 합치기(Grain merge)
#### 그림 8.2.5.5.a50. 질감 합치기(Grain merge)
![08-02-05-layer_mode-inversion-05-grain_merge](https://github.com/wonder13662/gimp/assets/15767104/a25eb580-cb91-40bc-8230-c659500ec32f)

`질감 합치기(Grain merge)` 모드는 질감 레이어를 현재 레이어에 합칩니다. 보통은 [질감 드러내기(Grain extract)](./08-02-05-04-grain_extract.md) 모드의 결과로 만들어진 결과인 질감 레이어입니다. `질감 합치기(Grain merge)` 모드는 [질감 드러내기(Grain extract)](./08-02-05-04-grain_extract.md) 모드의 과정의 반대입니다. 위쪽 레이어의 픽셀 값에서 아래쪽 레이어의 픽셀 값을 뺀 뒤에 픽셀값의 최대치의 절반을 뺍니다. 음수인 경우에는 0인 검은색으로 고정합니다.

#### 8.2.5.5.a51. 질감 합치기(Grain merge) 모드의 방정식
```
RGB 결과값 = max((위쪽 레이어 RGB 값 - 아래쪽 레이어 RGB 값 - 128), 0)
```

`질감 합치기(Grain merge)` 모드는 오래된 빈티지 사진 이미지를 만드는 데도 유용합니다. 아래 영상을 확인해보시면, [질감 드러내기(Grain extract)](./08-02-05-04-grain_extract.md) 모드의 결과물을 다른 이미지에 합쳐(merge) 빈티지 사진 이미지를 만드는 과정을 확인할 수 있습니다.

#### 영상 8.2.5.5.a52. 질감 합치기(Grain merge) 모드: 빈티지 이미지 만들기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/69d83c1d-786a-48f6-8577-a129b6a653d2"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 8.2.5.6. 나누기(Divide)](./08-02-05-06-divide.md)

[⬅️ 이전: 8.2.5.4. 질감 드러내기(Grain extract)](./08-02-05-04-grain_extract.md)

[⬆️ 위: 8.2.5. 레이어 모드-반전(Inversion)](./08-02-05-00-inversion-layer-modes.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-inversion.html)