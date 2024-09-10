# 16.6.7.4.3. 선형 조명과 지각 범위 감마(sRGB) 채널 인코딩(Choosing between Linear light and Perceptual gamma (sRGB) channel encoding)

<a id="16-06-07-04-03-s1"></a>

## 1. 8비트 정밀도 + 선형 조명 = 포스터라이즈
8비트 정밀도에서 선형 조명(Linear light) 채널 인코딩을 선택하면, 그림자가 끔찍하게 "포스터라이징" 되어 계단처럼 보이게 됩니다.

그러므로 8비트보다 높은 비트를 선택하지 않는다면, 선형 조명(Linear light) 채널 인코딩을 사용해서는 안됩니다.

<a id="16-06-07-04-03-s2"></a>

## 2. 색상 교정(Soft Proofing)
[색상 교정(Soft Proofing)](./19-glossaryx-soft_proofing.md)을 할 때, 선형 조명(Linear Light) 채널 인코딩이라면, [색역](./19-glossaryx-gamut.md) 검사는 정확한 결과를 돌려주지 못합니다.

그러므로 선형 조명(Linear Light) 채널 인코딩을 사용하려면, 16비트 이상의 정말도를 사용해야 합니다.

<a id="16-06-07-04-03-s3"></a>

## 3. 선형 조명(Linear Light) 채널 인코딩과 작업과정
8비트 이미지 수정과 [색상 교정(Soft Proofing)](./19-glossaryx-soft_proofing.md)에 좋지 않은 결과를 가져온다는 점만 제외하면, 사용자 측면에서의 선형 조명(Linear Light) 채널 인코딩은 작업 과정에 큰 영향을 미치지 않습니다.

<a id="16-06-07-04-03-s4"></a>

## 4. 채널 인코딩이 작업 흐름에 영향을 주는 경우
[고급 색상 옵션 보여주기](./12-01-04-06-filter_dialogs.md)의 "Gamma hack"을 사용한 결과에 대해 "채널 인코딩"이 영향을 줄 수 있습니다.