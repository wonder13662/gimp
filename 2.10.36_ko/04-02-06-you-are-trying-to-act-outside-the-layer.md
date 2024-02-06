# 4.2.6. 레이어 바깥쪽에서 작업을 하려는 경우

## 4.2.6.1. 문제 확인
GIMP에서 레이어는 이미지와 같은 크기를 갖지 않을수도 있습니다. 이미지보다 작을수도 클 수도 있습니다. 레이어의 바깥쪽에 칠을 하려고 한다면, 아무것도 칠해지지 않습니다. 이런 문제라면, 검은색과 노란색 점선의 사각형의 안쪽이 아닌 바깥쪽에서 작업하고 있는지 확인해야 합니다.

#### 영상 90.4.3.a151. 레이어 바깥쪽에서 붓 그리기 실패
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/5a35814d-80fd-4b66-9294-916bcb160cb7"></video>

레이어 영역 바깥에서의 붓 그리기는 실패합니다. 레이어 영역 안에서의 붓 그리기는 성공합니다.

## 4.2.6.2. 해결방법
문제를 해결하기 위해서는 레이어를 크게 만들어야 합니다. `레이어(Layer)` 메뉴에서 3가지 명령으로 레이어를 크게 만들 수 있습니다.

### 4.2.6.2.1. `레이어(Layer)` → `레이어를 이미지 크기로(Layer to Image Size)`
레이어의 경계를 이미지와 같은 크기로 맞춰줍니다

#### 그림 90.1.6.12.a101. `레이어(Layer)` → `레이어를 이미지 크기로(Layer to Image Size)`
![그림 90.1.6.12.a101. `레이어(Layer)` → `레이어를 이미지 크기로(Layer to Image Size)`](https://github.com/wonder13662/gimp/assets/15767104/9a9a8ecc-0fed-4853-8f8e-b33d33d4ab1f)

#### 영상 90.1.6.12.a102. '레이어를 이미지 크기로(Layer to Image Size)' 사용하기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/38ec687e-8280-457b-90ea-deb1c6f1722e"></video>

레이어의 경계 바깥쪽에서 붓 그리기가 실패하는 것을 확인한 뒤에 '레이어를 이미지 크기로(Layer to Image Size)'를 사용합니다. 사용한 이후에는 레이어에 붓 그리기가 성공합니다.

### 4.2.6.2.2. `레이어(Layer)` → `레이어 경계 크기(Layer Boundary Size)`
이 명령을 실행하면 대화상자가 열립니다. 이 대화상자에서 레이어의 경계 크기를 조정할 수 있습니다. 주의할 점은 경계(boundary)만 늘어날 뿐, 레이어의 이미지 정보가 함께 늘어나지는 않습니다.

#### [그림 90.1.6.11.a101. `레이어` → `레이어 경계 크기`](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-06-layerx-11-layer_boundary_size.html#%EA%B7%B8%EB%A6%BC-901611a101-%EB%A0%88%EC%9D%B4%EC%96%B4--%EB%A0%88%EC%9D%B4%EC%96%B4-%EA%B2%BD%EA%B3%84-%ED%81%AC%EA%B8%B0)
[![그림 90.1.6.11.a101. `레이어` → `레이어 경계 크기`](https://github.com/wonder13662/gimp/assets/15767104/8bc87bfb-5f7b-43f1-bd21-458ad1fadd75)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-06-layerx-11-layer_boundary_size.html#%EA%B7%B8%EB%A6%BC-901611a101-%EB%A0%88%EC%9D%B4%EC%96%B4--%EB%A0%88%EC%9D%B4%EC%96%B4-%EA%B2%BD%EA%B3%84-%ED%81%AC%EA%B8%B0)

#### [그림 90.4.35.a101. `레이어 경계 크기` 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-35-layer_to_boundary_size.html#%EA%B7%B8%EB%A6%BC-90435a101-%EB%A0%88%EC%9D%B4%EC%96%B4-%EA%B2%BD%EA%B3%84-%ED%81%AC%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-35-layer_to_boundary_size(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/e85a3f18-db98-44a4-9a2e-b1be86828c4d)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-35-layer_to_boundary_size.html#%EA%B7%B8%EB%A6%BC-90435a101-%EB%A0%88%EC%9D%B4%EC%96%B4-%EA%B2%BD%EA%B3%84-%ED%81%AC%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

[다른 운영체제와 언어의 `레이어 경계 크기` 대화상자 확인하기](./90-04-35-layer_to_boundary_size.md)

#### [영상 90.1.6.11.a102. '레이어 경계 크기(Layer Boundary Size)' 사용하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-06-layerx-11-layer_boundary_size.html#%EC%98%81%EC%83%81-901611a102-%EB%A0%88%EC%9D%B4%EC%96%B4-%EA%B2%BD%EA%B3%84-%ED%81%AC%EA%B8%B0layer-boundary-size-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/c9c8062e-5035-49db-8ddf-5272b6a17b9a"></video>

### 4.2.6.2.3. `레이어(Layer)` → `레이어 크기 조정(Scale Layer)`
이 명령을 실행하면 대화상자가 열립니다. 이 대화상자에서 레이어의 크기를 조정할 수 있습니다. 레이어의 이미지 정보도 함께 늘어납니다.

#### [그림 90.1.6.13.a101. `레이어` → `레이어 크기 조정`](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-06-layerx-13-scale_layer.html#%EA%B7%B8%EB%A6%BC-901613a101-%EB%A0%88%EC%9D%B4%EC%96%B4--%EB%A0%88%EC%9D%B4%EC%96%B4-%ED%81%AC%EA%B8%B0-%EC%A1%B0%EC%A0%95)
[![그림 90.1.6.13.a101. `레이어` → `레이어 크기 조정`](https://github.com/wonder13662/gimp/assets/15767104/7a1b1caf-66a5-4806-b202-5dcffa19a8e8)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-06-layerx-13-scale_layer.html#%EA%B7%B8%EB%A6%BC-901613a101-%EB%A0%88%EC%9D%B4%EC%96%B4--%EB%A0%88%EC%9D%B4%EC%96%B4-%ED%81%AC%EA%B8%B0-%EC%A1%B0%EC%A0%95)

#### [그림 90.4.36.a101. `레이어 크기 조정` 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-36-scale_layer.html#%EA%B7%B8%EB%A6%BC-90436a101-%EB%A0%88%EC%9D%B4%EC%96%B4-%ED%81%AC%EA%B8%B0-%EC%A1%B0%EC%A0%95-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-36-scale_layer(ko)](https://github.com/wonder13662/gimp/assets/15767104/2425d28c-3011-4c27-afed-728c962aff00)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-36-scale_layer.html#%EA%B7%B8%EB%A6%BC-90436a101-%EB%A0%88%EC%9D%B4%EC%96%B4-%ED%81%AC%EA%B8%B0-%EC%A1%B0%EC%A0%95-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

[다른 운영체제와 언어의 `레이어 크기 조정` 대화상자 확인하기](./90-04-36-scale_layer.md)

#### [영상 90.1.6.13.a102. '레이어 크기 조정(Scale Layer)' 사용하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-06-layerx-13-scale_layer.html#%EC%98%81%EC%83%81-901613a102-%EB%A0%88%EC%9D%B4%EC%96%B4-%ED%81%AC%EA%B8%B0-%EC%A1%B0%EC%A0%95scale-layer-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/8fe93a42-c805-4b1a-8b15-2d1765da17f4"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 4.2.7. 레이어 그룹에서 작업을 하려는 경우](./04-02-07-you-are-trying-to-act-on-a-layer-group.md)

[⬅️ 이전: 4.2.5. 활성화된 drawable이 투명한 경우](./04-02-05-the-active-drawable-is-tranparent.md)

[⬆️ 위: 4.2. GIMP(김프)가 멈추었을 때의 원인](./04-02-00-common-causes-of-gimp-non-responsiveness.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-stuck-outside-layer.html)
