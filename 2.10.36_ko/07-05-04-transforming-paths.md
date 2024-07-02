# 7.5.4. 경로 변형하기

<a id="07-05-04-s1"></a>

## 1. 변형도구 대화상자의 `변형(Transform)` 항목에서 경로 선택하기
각각의 변형 도구(회전, 크기조정, 원근 등)은 레이어, 선택 또는 경로에 사용하도록 설정할 수 있습니다. 도구상자에서 변형 도구를 선택하고, 도구옵션 대화상자 안의 "변형(Transform)" 항목에서 레이어, 선택, 또는 경로를 선택합니다. 이렇게 하면 이미지의 다른 요소들을 건드리지 않고 경로의 모양을 바꿀 수 있습니다.

<a id="90-04-01-13-a111"></a>

#### [그림 90.4.1.13.a111. 도구상자 - 크기 조정 대화상자 - 변형: 레이어](./90-04-01-13-scale.md#90-04-01-13-a111)
![90-04-01-tool_optionsx-13-scale-transform-layer(windows)(ko)-focus](https://github.com/wonder13662/gimp/assets/15767104/be00285d-1d38-4ca3-9420-7544ef8a521d)

<a id="90-04-01-13-a112"></a>

#### [그림 90.4.1.13.a112. 도구상자 - 크기 조정 대화상자 - 변형: 선택](./90-04-01-13-scale.md#90-04-01-13-a112)
![90-04-01-tool_optionsx-13-scale-transform-selection(windows)(ko)-focus](https://github.com/wonder13662/gimp/assets/15767104/67e09044-cedb-4dc8-ab82-3dfb2755baa6)

<a id="90-04-01-13-a113"></a>

#### [그림 90.4.1.13.a113. 도구상자 - 크기 조정 대화상자 - 변형: 경로](./90-04-01-13-scale.md#90-04-01-13-a113)
![90-04-01-tool_optionsx-13-scale-transform-path(windows)(ko)-focus](https://github.com/wonder13662/gimp/assets/15767104/32d8964d-41e1-4138-ac68-9deef5290d96)

<a id="07-05-04-s2"></a>

## 2. 경로 대화상자 안의 활성화된 경로
변형 도구의 기본값으로 경로를 바꿀 수 있도록 설정되었다면, 변형 도구는 이미지 안의 활성화된 경로에 대해서만 동작합니다. 활성화된 경로는 [경로 대화상자](./15-02-03-00-paths-dialog.md)에서 강조되어 표시됩니다. 

<a id="90-04-05-a131"></a>

#### [그림 90.4.5.a131. 경로 대화상자에서 선택한 경로 활성화](./90-04-05-paths.md#90-04-05-a131)
![90-04-05-a131](https://github.com/wonder13662/gimp/assets/15767104/b91197b4-1118-48b6-9e03-2d144814fcac)

<a id="07-05-04-s3"></a>

## 3. `변형 잠금(transform lock)`을 사용해 경로, 레이어 그리고 채널을 함께 변형하기
경로 대화상자의 [`변형 잠금(transform lock)`](./15-02-03-00-paths-dialog.md) 버튼을 사용해서 변형 작업을 여러 개의 경로에 적용할 수 있습니다. 경로 대화상자의 `변형 잠금(transform lock)` 버튼은 각 경로의 왼쪽 두번째 사각형입니다. 경로뿐만 아니라 레이어와 채널도 `변형 잠금`을 사용할 수 있습니다. `변형 잠금`된 대상을 변형했다면, 함께 `변형 잠금`된 모든 대상들이 같은 방식으로 변형됩니다. 예를 들어, 레이어와 경로가 같은 정도로 크기 조정을 하고 싶다면, 레이어와 경로의 `변형 잠금(transform lock)` 버튼을 클릭해서 "체인" 아이콘이 레이어 대화상자에 나타나도록 합니다. 경로에도 경로 대화상자 안에서 `변형 잠금(transform lock)` 버튼을 클릭합니다. 그리고 크기 조정 도구로 레이어와 경로 그리고 그 외에 `변형 잠금(transform lock)`한 다른 대상들도 함께 변형합니다.

참고로 `변형 잠금(transform lock)` 버튼은 `연결 고리(Linkage)` 버튼으로도 불립니다.

<a id="90-04-03-06-a11"></a>

#### [그림 90.4.3.6.a11. 선택한 레이어를 변형 잠금](./90-04-03-06-linkage.md#90-04-03-06-a11)
![dialog-layers-transform_lock(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/195adc60-f1b4-476e-b5d4-2e1efafc0965)

<a id="90-04-05-a132"></a>

#### [그림 90.4.5.a132. 선택한 경로를 변형 잠금](./90-04-05-paths.md#90-04-05-a132)
![90-04-05-a132](https://github.com/wonder13662/gimp/assets/15767104/92523d8d-77eb-4c22-99bf-d54f6080a5d7)

<a id="90-04-05-a133"></a>

#### [영상 90.4.5.a133. 변형 잠금한 경로와 레이어가 함께 변형](./90-04-05-paths.md#90-04-05-a133)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/0ddac041-8166-4152-920e-4c68426d2e29"></video>

[관련 정보: 8.1.1.6. 다른 레이어와 연결(Linkage to other layers)](./08-01-01-06-linkage_to_other_layers.md)

[관련 정보: 15.2.1.2.2.2. 레이어 연결(Chain Layer)](./15-02-01-02-02-02-chain_layers.md)

***

## 다른 페이지로 가기

[➡️ 다음: 7.5.5. 경로따라 그리기](./07-05-05-stroking-a-path.md)

[⬅️ 이전: 7.5.3. 경로와 선택](./07-05-03-paths-and-selections.md)

[⬆️ 위: 7.5. 경로](./07-05-00-paths.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-paths-transforming.html)
