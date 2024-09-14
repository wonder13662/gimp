# 12.1.2.1. 자원 소비량(System Resources)

<a id="90-02-01-a121"></a>

#### [그림 90.2.1.a121. `시스템 자원` → `자원 소비량` (Windows) (우리말)](./90-02-01-system-resource.md#90-02-01-a121)
![90-02-01-a121](https://github.com/wonder13662/gimp/assets/15767104/eb95aa6e-fa60-4eb7-afa9-5871d85f0f80)

<a id="90-02-01-a122"></a>

#### [그림 90.2.1.a122. `시스템 자원` → `자원 소비량` (Windows) (영어)](./90-02-01-system-resource.md#90-02-01-a122)
![90-02-01-a122](https://github.com/wonder13662/gimp/assets/15767104/18e1aa07-1684-488f-b1a9-da97ace27d24)

<a id="90-02-01-s1"></a>

## 1. 실행 취소 최소 횟수(Minimal number of undo levels)
GIMP(김프)에서는 메모리의 크기가 허락하는 한에서 대부분의 작업을 취소할 수 있습니다.

이미지의 작업 취소의 이력은 각 이미지의 [15.2.7. 실행취소 이력 대화상자](./15-02-07-00-undo-history-dialog.md)에서 확인할 수 있습니다.

`실행 취소 최소 횟수`는 [실행취소 이력 대화상자](./15-02-07-00-undo-history-dialog.md)에 표시될 최소한의 갯수를 의미합니다.

예를 들어, `실행 취소 최소 횟수`가 10으로 설정되어 있고, 사용자가 11번의 수정작업을 마쳤다면, 최초 1회의 수정작업은 [실행취소 이력 대화상자](./15-02-07-00-undo-history-dialog.md)에 표시되지 않고, 그 이후의 10회의 수정작업만 표시됩니다.

[관련 정보: 15.2.7.2. 실행취소 이력 대화상자 사용하기(Using the Undo History Dialog)](./15-02-07-02-00-using_the_undo_history_dialog.md)

<a id="90-02-01-s2"></a>

## 2. 실행 취소 최대 메모리(Maximum undo memory)
각 이미지의 실행 취소에 할당된 메모리 양입니다.

`실행 취소 최대 메모리`의 메모리 양보다 더 큰 메모리를 사용하면, 오래된 실행 취소 기록부터 지워집니다.

단, 실행 취소 기록의 전체 갯수가 [실행 취소 최소 횟수](./12-01-02-01-resource_consumption.md#90-02-01-s1)보다 적은 개수라면 삭제되지 않습니다.

[관련 정보: 15.2.7.2. 실행취소 이력 대화상자 사용하기(Using the Undo History Dialog)](./15-02-07-02-00-using_the_undo_history_dialog.md)

<a id="90-02-01-s3"></a>

## 3. 타일 캐쉬 크기(Tile cache size)
GIMP(김프) 이미지 데이터에 할당된 시스템 메모리의 양입니다. 

`타일 캐쉬 크기`의 메모리 양보다 더 큰 메모리를 사용하면, [디스크 스왑(페이징)](https://en.wikipedia.org/wiki/Memory_paging)으로 대신하게 됩니다.

이 경우, 일부 시스템에서는 순간적인 멈춤 현상이 있을 수도 있습니다.

더 자세한 사항은 [12.4. 타일 캐쉬 설정하는 방법](./12-04-how-to-set-your-tile-cache.md)을 참고하세요.

<a id="90-02-01-s4"></a>

## 4. 새 이미지 최대 크기(Maximum new image size)
여기서 설정한 값보다 큰 이미지를 생성하려고 할 경우, 확인창이 뜹니다.

이 확인창으로 실수로 큰 이미지를 만들어서 GIMP(김프)가 종료되거나 굉장히 느려지는 것을 막습니다.

<a id="90-04-85-a101"></a>

#### [그림 90.4.85.a101. `이미지 크기 확인` 대화상자 (Windows) (우리말)](./90-04-0085-confirm_image_size.md#90-04-85-a101)
![90-04-85-a101](https://github.com/wonder13662/gimp/assets/15767104/b15f3278-3ecc-462e-b769-a181411a2a76)

[다른 운영체제와 언어의 `이미지 크기 확인` 대화상자 확인하기](./90-04-0085-confirm_image_size.md#90-04-85-a102)

<a id="90-02-01-s5"></a>

## 5. 스왑 압축(Swap compression)
`스왑 압축` 드롭 다운 리스트에서 타일 데이터를 [스왑 폴더](./12-01-24-folders.md#12-01-24-s1-02)에 저장하는 `스왑 압축` 방식을 선택할 수 있습니다.

`스왑 압축` 방식은 입력과 출력을 최소화해서 스왑 크기를 줄이고, 속도를 높일 수 있습니다.

선택할 수 있는 값은 `Best perfermance` - (Default), `Balanced`, `Best compression` 그리고 `None`이 있습니다.

`None`은 압축을 사용하지 않습니다.

<a id="90-02-01-a131"></a>

#### [그림 90.2.1.a131. `시스템 자원` → `자원 소비량` → `스왑 압축` (Windows) (우리말)](./90-02-01-system-resource.md#90-02-01-a131)
![90-02-01-a131-focus-swap_compression](https://github.com/wonder13662/gimp/assets/15767104/0f179d28-f160-4e33-81da-c569051d579c)

[다른 운영체제와 언어의 `시스템 자원` → `자원 소비량` → `스왑 압축` 확인하기](./90-02-01-system-resource.md#90-02-01-a132)

<a id="90-02-01-s6"></a>

## 6. 사용하는 스레드 수(Number of threads to use)
`사용하는 스레드 수`는 이미지를 처리하는 데 여러 개의 코어를 쓰도록 해줍니다.

모든 기능이 여러 개의 스레드를 동시에 사용하는 것은 아닙니다.

하지만, GEGL 작업을 처리하는데 여러 개의 스레드를 동시에 사용합니다.

그리고 GIMP(김프) 핵심 기능에서도 여러 개의 스레드를 동시에 사용합니다.

예를 들어서, 화면에서 페인팅을 분리하는 과정에 쓰입니다.

<a comment="TODO 사용하는 스레드 수의 설명이 좀 더 명확해져야 한다"></a>

***

## 다른 페이지로 가기

[➡️ 다음: 12.1.2.2. 네트워크 접근(Network Access)](./12-01-02-02-network_access.md)

[⬅️ 이전: 12.1.2. 시스템 자원(System Resources)](./12-01-02-00-system-resources.md)

[⬆️ 위: 12.1.2. 시스템 자원(System Resources)](./12-01-02-00-system-resources.md)

[⬆️ 위: 12.1. 기본설정 대화상자](./12-01-00-preference-dialog.md)

[⬆️ 위: 12. 나만의 GIMP(김프) 만들기](./12-00-enrich-my-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-pimping.html#gimp-prefs-system-resources)