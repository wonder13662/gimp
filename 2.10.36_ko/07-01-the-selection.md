# 7.1. 선택
이미지에 작업을 할 때, 이미지의 일부만 작업을 해야 하는 경우가 있습니다. GIMP(김프)에서는 이미지의 일부를 선택해서 이미지의 일부만 작업을 할 수 있습니다. 각 이미지는 이미지와 연결된 선택을 가지고 있습니다. 항상은 아니지만 거의 대부분은 GIMP(김프) 명령은 이미지의 선택된 영역에만 동작합니다.

## 이미지의 일부분을 선택하기 어려운 이유

#### [그림 90.99.a143. 나무를 분리해 내려면?](https://wonder13662.github.io/gimp/2.10.36_ko/90-99-etc.html#%EA%B7%B8%EB%A6%BC-9099a143-%EB%82%98%EB%AC%B4%EB%A5%BC-%EB%B6%84%EB%A6%AC%ED%95%B4-%EB%82%B4%EB%A0%A4%EB%A9%B4)
[![fog-tree-example](https://github.com/wonder13662/gimp/assets/15767104/0af946f2-3d94-464d-80f9-7da3d4858916)](https://wonder13662.github.io/gimp/2.10.36_ko/90-99-etc.html#%EA%B7%B8%EB%A6%BC-9099a143-%EB%82%98%EB%AC%B4%EB%A5%BC-%EB%B6%84%EB%A6%AC%ED%95%B4-%EB%82%B4%EB%A0%A4%EB%A9%B4)

정확한 선택을 만드는 것이 작업의 핵심요소인 경우가 자주 있습니다. 그리고 이런 작업은 쉽지 않습니다. 예를 들어 위의 이미지를 배경에서 나무를 잘라내서 다른 이미지에 붙여넣기를 해야 한다고 생각해보겠습니다. 그렇게 하기 위해서는 나무만의 선택을 만들어야 합니다. 그러나 나무가 복잡한 모습이고, 나무의 여러 지점이 나무의 뒤에 있는 물체와 구분하기 어렵기 때문에 쉽지 않습니다.

## "선택(selection)"이란 무엇일까요?

#### [그림 90.3.3.a101. 선택(selection)은 점선으로 표시됩니다](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-02-tool_iconx-03-rectangle_select.html#%EA%B7%B8%EB%A6%BC-9033a101-%EC%84%A0%ED%83%9Dselection%EC%9D%80-%EC%A0%90%EC%84%A0%EC%9C%BC%EB%A1%9C-%ED%91%9C%EC%8B%9C%EB%90%A9%EB%8B%88%EB%8B%A4)
[![select-outline](https://github.com/wonder13662/gimp/assets/15767104/2c93d29c-8a0f-492b-8b82-75f14ce0809e)](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-02-tool_iconx-03-rectangle_select.html#%EA%B7%B8%EB%A6%BC-9033a101-%EC%84%A0%ED%83%9Dselection%EC%9D%80-%EC%A0%90%EC%84%A0%EC%9C%BC%EB%A1%9C-%ED%91%9C%EC%8B%9C%EB%90%A9%EB%8B%88%EB%8B%A4)

꼭 이해하고 넘어가야 할 개념이 있습니다. 보통 만드는 "선택"은 이미지의 일부분이 막혀있는 점선으로 보입니다. 하지만 이는 정확한 표현이 아닙니다. "선택"은 일종의 컨테이너입니다. 이 컨테이너는 선택된 이미지의 안쪽과 선택되지 않은 바깥쪽을 가지고 있습니다.

사실 "선택"은 채널처럼 구현이 되므로, 내부 구조는 이미지의 빨강, 녹색, 파랑, 알파 채널 등과 동일합니다. 따라서 "선택"은 이미지의 각 픽셀에 0(선택안됨)에서 255(안전히 선택됨)의 값을 가지게 됩니다. 이러한 특징은 0과 255 사이의 값을 가짐으로써 일부만 선택된 픽셀을 허용하게 됩니다. 이는 선택 영역과 비선택 영역의 부드러운 전환(smooth transition)이 사용되는 상황에서 확인할 수 있습니다.

위 이미지의 점선은 이미지의 영역을 절반 이상 선택(128 이상)과 절반 이하 선택(128미만)의 2개의 영역으로 나누는 외곽선입니다.

## 퀵마스크 모드로 "선택" 확인하기 

점선 외곽선으로 "선택"을 나타내는 것은 완전하지 않습니다. 점선 외곽선만으로는 선택된 영역인지, 선택되지 않은 영역인지 확인하기 어려울 때가 많습니다. "선택"을 확실하게 확인하고 싶다면, 이미지 창의 왼쪽 구석의 [퀵마스크 버튼](./07-03-00-the-quickmask.md)을 클릭하세요(아래 이미지의 반투명 녹색으로 깜빡이는 5번 영역입니다.).

#### [그림 90.5.5.a102. (5)퀵마스크 토글 버튼의 위치 (단일창)](https://wonder13662.github.io/gimp/2.10.36_ko/90-05-05-quickmast_toggle.html#%EA%B7%B8%EB%A6%BC-9055a102-5%ED%80%B5%EB%A7%88%EC%8A%A4%ED%81%AC-%ED%86%A0%EA%B8%80-%EB%B2%84%ED%8A%BC%EC%9D%98-%EC%9C%84%EC%B9%98-%EB%8B%A8%EC%9D%BC%EC%B0%BD)
![그림 90.5.5.a102. (5)퀵마스크 토글 버튼의 위치 (단일창)](https://github.com/wonder13662/gimp/assets/15767104/64879a12-f3e5-47ad-94da-f47653824bc6)

클릭하면, 이미지의 위의 반투명의 덮개(overlay)로 "선택" 영역이 보입니다. 선택된 영역은 퀵마스크의 영향을 받지 않습니다. 선택되지 않은 곳은 붉게 보입니다. 더 완전히 선택된 곳일수록 덜 붉게 보입니다. 아래 영상에서 퀵마스크 모드로 선택 영역을 확인하는 과정을 볼 수 있습니다.

#### [영상 90.5.5.a121. 퀵마스크 적용으로 선택영역 확인하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-05-05-quickmast_toggle.html#%EC%98%81%EC%83%81-9055a121-%ED%80%B5%EB%A7%88%EC%8A%A4%ED%81%AC-%EC%A0%81%EC%9A%A9%EC%9C%BC%EB%A1%9C-%EC%84%A0%ED%83%9D%EC%98%81%EC%97%AD-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/ecb7111d-e19d-4959-bd35-65dd55af06a0"></video>

[퀵마스크 개요](./07-03-01-overview.md)에서도 이야기하겠지만, 많은 기능이 퀵마스크 모드에서는 다르게 동작합니다.

***

## 다른 페이지로 가기
[➡️ 다음: 7.1.1. 페더링](./07-01-the-selectionx-01-feathering.md)

[⬅️ 이전: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-painting.html#gimp-concepts-selection)