# 16.7.2.2.4. 혼합 영역, 합성 공간(Blend spapce, Composite space)

<a id="90-04-64-a151"></a>

#### [그림 90.4.64.a151. `새 레이어` 대화상자 → `새 레이어 만들기` → `혼합 영역` (Windows) (우리말)](./90-04-0064-new_layer.md#90-04-64-a151)
<img width="542" height="531" alt="90-04-64-a151" src="https://github.com/user-attachments/assets/40cb84f2-f2bd-42dc-baa4-8dcf95a90bf6" />

<a id="90-04-64-a161"></a>

#### [그림 90.4.64.a161. `새 레이어` 대화상자 → `새 레이어 만들기` → `합성 공간` (Windows) (우리말)](./90-04-0064-new_layer.md#90-04-64-a161)
<img width="542" height="531" alt="90-04-64-a161" src="https://github.com/user-attachments/assets/fee4c286-f2e2-42a7-a2c9-40d0ef08bab2" />

<a id="90-04-64-a162"></a>

#### [그림 90.4.64.a162. `새 레이어` 대화상자 → `새 레이어 만들기` → `합성 공간`: 드롭다운 목록 (Windows) (우리말)](./90-04-0064-new_layer.md#90-04-64-a162)
<img width="239" height="166" alt="90-04-64-a162" src="https://github.com/user-attachments/assets/88d00267-b8a8-4b09-9a45-c3fa38d0d3a0" />

The color space used for blending or compositing the layer with the layers below it.

[블렌딩(혼합)](./19-glossaryx-blending.md) determines how the colors of the upper and lower layer are mixed together, and [합성](./19-glossaryx-compositing.md) how the upper and lower layer are merged together with respect to the transparency of each pixel.

Depending on the [레이어 모드](./16-07-02-02-03-mode.md) one or both of these settings may be disabled.

It is only enabled for layer modes where setting this has any effect.

When enabled, the default is "Auto".

The other choices are "RGB(Linear)" and "RGB(perceptual)".

Note that what "Auto" translate to, depends on the chosen layer mode.

It is not the same for all modes.

Some use linear, others use perceptual.

The linear and perceptual encodings are described in [16.6.7.3. 이미지 정밀도와 채널 인코딩 선택하기(Choosing the image precision and channel encoding)](./16-06-07-03-choosing_the_image_precision_and_channel_encoding.md) and in the [19. 용어집 - 채널 인코딩(Channel encoding)](./19-glossaryx-channel_encoding.md)

---

When changing the layer mode, both "Blend space" and "Composite space" are always reset to "Auto" to make sure the settings make sense for that particular layer mode.

***

## 관련 정보

[15.2.1.3. 레이어 대화상자 컨텍스트 메뉴(The Layer dialog context menu) - 2. 블렌딩 공간 서브메뉴(Blend Space submenu)](./15-02-01-03-the_layer_dialog_context_menu.md#15-02-01-03-s2)