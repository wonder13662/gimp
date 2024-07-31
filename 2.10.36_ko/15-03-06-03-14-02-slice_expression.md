# 15.3.6.3.14.2. 슬라이스 표현식(Slice Expression)

<a id="90-04-145-a112"></a>

#### [그림 90.4.145.a112. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식` (Windows) (우리말)](./90-04-0145-python_fu_palette_sort.md#90-04-145-a112)
<img width="347" height="503" alt="90-04-145-a112" src="https://github.com/user-attachments/assets/9c753828-655e-4429-a63b-7519124475b4" />

`슬라이스 표현식(Slice Expression)` 옵션은 [선택들](./15-03-06-03-14-01-selections.md) 옵션에서 `Slice/Array`을 선택해야 사용할 수 있습니다.

슬라이스 표현식은 다음과 같은 형식으로 작성합니다.
```
START?:NROWS?,ROWLENGTH
```

아래의 원본 팔레트를 기준으로 슬라이스 표현식을 적용해 보겠습니다.

<a id="90-04-145-a121"></a>

#### [그림 90.4.145.a121. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: 원본 팔레트](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121)
<img width="306" height="40" alt="90-04-145-a121" src="https://github.com/user-attachments/assets/851ba9db-c358-4bb3-a5a8-0b8cfba5d909" />

<a id="90-04-145-a120"></a>

#### [파일 90.4.145.a120. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: 원본 팔레트](./90-04-0145-python_fu_palette_sort.md#90-04-145-a120)
[palette_sort_src.gpl.zip](https://github.com/user-attachments/files/16401910/palette_sort_src.gpl.zip)

아래 예시에서의 정렬 규칙은 간단히 말해 어두운 색이 왼쪽으로 밝은 색이 오른쪽으로 이동합니다.

<a id="15-03-06-03-14-02-s1"></a>

## 1. START
`START`는 정렬이 시작되는 색상의 번호입니다.

색상의 번호는 왼쪽 위부터 0부터 시작하여 오른쪽으로 1씩 증가합니다.

<a id="15-03-06-03-14-02-s1-01"></a>

### 1-1. `0:1,3`
첫번째 색상부터 정렬이 시작됩니다.

행은 1개만 정렬합니다.

각 행은 색상을 3개씩 가집니다.

<a id="90-04-145-a121"></a>

#### [그림 90.4.145.a121. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: 원본 팔레트](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121)
<img width="306" height="40" alt="90-04-145-a121" src="https://github.com/user-attachments/assets/851ba9db-c358-4bb3-a5a8-0b8cfba5d909" />

<a id="90-04-145-a121-01-01"></a>

#### [그림 90.4.145.a121.1.1. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: START - `0:1,3`](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121-01-01)
<img width="306" height="40" alt="90-04-145-a121-01-01" src="https://github.com/user-attachments/assets/5f2f3587-3338-451a-9c57-604ebf3ce099" />

<a id="15-03-06-03-14-02-s1-02"></a>

### 1-2. `1:1,3`
두번째 색상부터 정렬이 시작됩니다.

행은 1개만 정렬합니다.

각 행은 색상을 3개씩 가집니다.

<a id="90-04-145-a121"></a>

#### [그림 90.4.145.a121. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: 원본 팔레트](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121)
<img width="306" height="40" alt="90-04-145-a121" src="https://github.com/user-attachments/assets/851ba9db-c358-4bb3-a5a8-0b8cfba5d909" />

<a id="90-04-145-a121-01-02"></a>

#### [그림 90.4.145.a121.1.2. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: START - `1:1,3`](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121-01-02)
<img width="306" height="40" alt="90-04-145-a121-01-02" src="https://github.com/user-attachments/assets/6a1ca668-ef63-4166-b165-a045e5d36209" />

<a id="15-03-06-03-14-02-s1-03"></a>

### 1-3. `2:1,3`
세번째 색상부터 정렬이 시작됩니다.

행은 1개만 정렬합니다.

각 행은 색상을 3개씩 가집니다.

<a id="90-04-145-a121"></a>

#### [그림 90.4.145.a121. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: 원본 팔레트](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121)
<img width="306" height="40" alt="90-04-145-a121" src="https://github.com/user-attachments/assets/851ba9db-c358-4bb3-a5a8-0b8cfba5d909" />

<a id="90-04-145-a121-01-03"></a>

#### [그림 90.4.145.a121.1.3. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: START - `2:1,3`](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121-01-03)
<img width="306" height="40" alt="90-04-145-a121-01-03" src="https://github.com/user-attachments/assets/1614af91-8c4a-4a7d-8cf8-0dc12c64d2f8" />

<a id="15-03-06-03-14-02-s1-04"></a>

### 1-4. `3:1,3`
네번째 색상부터 정렬이 시작됩니다.

행은 1개만 정렬합니다.

각 행은 색상을 3개씩 가집니다.

<a id="90-04-145-a121"></a>

#### [그림 90.4.145.a121. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: 원본 팔레트](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121)
<img width="306" height="40" alt="90-04-145-a121" src="https://github.com/user-attachments/assets/851ba9db-c358-4bb3-a5a8-0b8cfba5d909" />

<a id="90-04-145-a121-01-04"></a>

#### [그림 90.4.145.a121.1.4. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: START - `3:1,3`](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121-01-04)
<img width="306" height="40" alt="90-04-145-a121-01-04" src="https://github.com/user-attachments/assets/a66cccb5-dda3-4a47-9ec6-32ef7d6bebea" />

<a id="15-03-06-03-14-02-s2"></a>

## 2. NROWS
`NROWS`는 정렬의 대상이 되는 행의 갯수입니다.

정렬은 각 행 안에서만 개별적으로 이루어집니다.

<a id="15-03-06-03-14-02-s2-01"></a>

## 2-1. `0:1,2`
첫번째 색상부터 정렬이 시작됩니다.

행은 1개만 정렬합니다.

각 행은 색상을 2개씩 가집니다.

<a id="90-04-145-a121"></a>

#### [그림 90.4.145.a121. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: 원본 팔레트](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121)
<img width="306" height="40" alt="90-04-145-a121" src="https://github.com/user-attachments/assets/851ba9db-c358-4bb3-a5a8-0b8cfba5d909" />

<a id="90-04-145-a121-02-01"></a>

#### [그림 90.4.145.a121.2.1. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: NROWS - `0:1,2`](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121-02-01)
<img width="306" height="40" alt="90-04-145-a121-02-01" src="https://github.com/user-attachments/assets/1e106649-4798-4ece-9d86-4a0e0eafa62c" />

<a id="15-03-06-03-14-02-s2-02"></a>

## 2-2. `0:2,2`
첫번째 색상부터 정렬이 시작됩니다.

행은 2개만 정렬합니다.

각 행은 색상을 2개씩 가집니다.

<a id="90-04-145-a121"></a>

#### [그림 90.4.145.a121. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: 원본 팔레트](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121)
<img width="306" height="40" alt="90-04-145-a121" src="https://github.com/user-attachments/assets/851ba9db-c358-4bb3-a5a8-0b8cfba5d909" />

<a id="90-04-145-a121-02-02"></a>

#### [그림 90.4.145.a121.2.2. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: NROWS - `0:2,2`](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121-02-02)
<img width="306" height="40" alt="90-04-145-a121-02-02" src="https://github.com/user-attachments/assets/4535b846-5aed-4c04-9151-6808e931a6e1" />

<a id="15-03-06-03-14-02-s2-03"></a>

## 2-3. `0:3,2`
첫번째 색상부터 정렬이 시작됩니다.

행은 3개만 정렬합니다.

각 행은 색상을 2개씩 가집니다.

<a id="90-04-145-a121"></a>

#### [그림 90.4.145.a121. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: 원본 팔레트](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121)
<img width="306" height="40" alt="90-04-145-a121" src="https://github.com/user-attachments/assets/851ba9db-c358-4bb3-a5a8-0b8cfba5d909" />

<a id="90-04-145-a121-02-03"></a>

#### [그림 90.4.145.a121.2.3. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: NROWS - `0:3,2`](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121-02-03)
<img width="306" height="40" alt="90-04-145-a121-02-03" src="https://github.com/user-attachments/assets/87c9c436-6b57-4725-85fb-80d8acc91ee4" />

<a id="15-03-06-03-14-02-s3"></a>

## 3. ROWLENGTH
`ROWLENGTH`는 하나의 행(ROW)이 갖는 색상의 갯수를 의미합니다.

<a id="15-03-06-03-14-02-s3-01"></a>

## 3-1. `0:1,4`
첫번째 색상부터 정렬이 시작됩니다.

행은 1개만 정렬합니다.

각 행은 색상을 4개씩 가집니다.

<a id="90-04-145-a121"></a>

#### [그림 90.4.145.a121. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: 원본 팔레트](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121)
<img width="306" height="40" alt="90-04-145-a121" src="https://github.com/user-attachments/assets/851ba9db-c358-4bb3-a5a8-0b8cfba5d909" />

<a id="90-04-145-a121-03-01"></a>

#### [그림 90.4.145.a121.3.1. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: ROWLENGTH - `0:1,4`](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121-03-01)
<img width="306" height="40" alt="90-04-145-a121-03-01" src="https://github.com/user-attachments/assets/cb96d90f-08c7-43ac-ad67-afb6bb1ce49b" />

<a id="15-03-06-03-14-02-s3-02"></a>

## 3-2. `0:1,5`
첫번째 색상부터 정렬이 시작됩니다.

행은 1개만 정렬합니다.

각 행은 색상을 5개씩 가집니다.

<a id="90-04-145-a121"></a>

#### [그림 90.4.145.a121. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: 원본 팔레트](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121)
<img width="306" height="40" alt="90-04-145-a121" src="https://github.com/user-attachments/assets/851ba9db-c358-4bb3-a5a8-0b8cfba5d909" />

<a id="90-04-145-a121-03-02"></a>

#### [그림 90.4.145.a121.3.2. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: ROWLENGTH - `0:1,5`](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121-03-02)
<img width="306" height="40" alt="90-04-145-a121-03-02" src="https://github.com/user-attachments/assets/8eadc038-acf6-4546-bcda-d65df0e9b7be" />

<a id="15-03-06-03-14-02-s3-03"></a>

## 3-3. `0:1,6`
첫번째 색상부터 정렬이 시작됩니다.

행은 1개만 정렬합니다.

각 행은 색상을 6개씩 가집니다.

<a id="90-04-145-a121"></a>

#### [그림 90.4.145.a121. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: 원본 팔레트](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121)
<img width="306" height="40" alt="90-04-145-a121" src="https://github.com/user-attachments/assets/851ba9db-c358-4bb3-a5a8-0b8cfba5d909" />

<a id="90-04-145-a121-03-03"></a>

#### [그림 90.4.145.a121.3.3. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: ROWLENGTH - `0:1,6`](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121-03-03)
<img width="306" height="40" alt="90-04-145-a121-03-03" src="https://github.com/user-attachments/assets/89771272-5fb7-4336-97a1-2bd9785e6977" />

<a id="15-03-06-03-14-02-s4"></a>

## 4. 빈값
팔레트의 모든 아이템을 선택하여 정렬합니다.

<a id="90-04-145-a121"></a>

#### [그림 90.4.145.a121. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: 원본 팔레트](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121)
<img width="306" height="40" alt="90-04-145-a121" src="https://github.com/user-attachments/assets/851ba9db-c358-4bb3-a5a8-0b8cfba5d909" />

<a id="90-04-145-a121-04"></a>

#### [그림 90.4.145.a121.4. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: 빈값](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121-04)
<img width="306" height="40" alt="90-04-145-a121-04" src="https://github.com/user-attachments/assets/9f2cfd9d-446c-430c-b965-69561732b2d0" />

<a id="15-03-06-03-14-02-s5"></a>

## 5. `:4,` 또는 `:4`
첫번째 색상부터 정렬이 시작됩니다.

팔레트의 모든 색상에서 4개의 행(Row)을 만듭니다.

각 행은 색상을 전체 색상수에서 행의 갯수로 나눈만큼 갯수씩 가집니다.

<a id="90-04-145-a121-05"></a>

#### [그림 90.4.145.a121.5. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: `:4,` 또는 `:4`](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121-05)
<img width="379" height="167" alt="90-04-145-a121-05" src="https://github.com/user-attachments/assets/97bb0fdf-de56-4119-8157-c737519863d6" />

<a id="15-03-06-03-14-02-s6"></a>

## 6. `:1,4`
첫번째 색상부터 정렬이 시작됩니다.

1개의 행(Row)을 만듭니다.

각 행은 색상을 4개씩 가집니다.

<a id="90-04-145-a121"></a>

#### [그림 90.4.145.a121. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: 원본 팔레트](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121)
<img width="306" height="40" alt="90-04-145-a121" src="https://github.com/user-attachments/assets/851ba9db-c358-4bb3-a5a8-0b8cfba5d909" />

<a id="90-04-145-a121-06"></a>

#### [그림 90.4.145.a121.6. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: `:1,4`](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121-06)
<img width="306" height="40" alt="90-04-145-a121-06" src="https://github.com/user-attachments/assets/45a30c12-8412-4632-a83f-b4c97a0450c0" />

<a id="15-03-06-03-14-02-s7"></a>

## 7. `:,4`
첫번째 색상부터 정렬이 시작됩니다.

모든 색상의 갯수를 각 행이 가지는 색상 갯수를 나눈 몫만큼의 개수의 행(Row)을 만듭니다.

각 행은 색상을 4개씩 가집니다.

<a id="90-04-145-a121-07"></a>

#### [그림 90.4.145.a121.7. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: `:,4`](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121-07)
<img width="379" height="167" alt="90-04-145-a121-07" src="https://github.com/user-attachments/assets/bf12a5b8-17c5-44e5-92eb-2f7a95e46aa7" />

<a id="15-03-06-03-14-02-s8"></a>

## 8. `:2,3`
첫번째 색상부터 정렬이 시작됩니다.

2개의 행(Row)을 만듭니다.

각 행은 색상을 3개씩 가집니다.

<a id="90-04-145-a121-08"></a>

#### [그림 90.4.145.a121.8. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: `:2,3`](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121-08)
<img width="379" height="167" alt="90-04-145-a121-08" src="https://github.com/user-attachments/assets/d23f8d68-cf5e-47f2-b87d-ea5016799ea0" />

<a id="15-03-06-03-14-02-s9"></a>

## 9. `4:`
위의 표현식은 실제로 작동하지 않습니다. 아래와 같은 실패 메시지를 노출합니다.

<a id="90-04-145-a112-08-01"></a>

#### [그림 90.4.145.a112.8. `Python-fu: 팔레트 정렬` 대화상자 → `4:`: 실패 메시지 대화상자 (Windows) (우리말)](./90-04-0145-python_fu_palette_sort.md#90-04-145-a112-08-01)
<img width="386" height="215" alt="90-04-145-a112-08-01" src="https://github.com/user-attachments/assets/27eafdce-8199-4ddb-93b3-331163c8f760" />

<a id="15-03-06-03-14-02-s10"></a>

## 10. `4:,4`
다섯번째 색상부터 정렬이 시작됩니다.

모든 색상의 갯수를 각 행이 가지는 색상 갯수를 나눈 몫만큼의 개수의 행(Row)을 만듭니다.

각 행은 색상을 4개씩 가집니다.

아래 예시에서는 다섯번째 색상부터 여덟번째 색상까지가 범위이므로 정렬 대상이 되는 모든 색상의 갯수는 4개가 됩니다.

<a id="90-04-145-a121"></a>

#### [그림 90.4.145.a121. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: 원본 팔레트](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121)
<img width="306" height="40" alt="90-04-145-a121" src="https://github.com/user-attachments/assets/851ba9db-c358-4bb3-a5a8-0b8cfba5d909" />

<a id="90-04-145-a121-09"></a>

#### [그림 90.4.145.a121.9. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: `4:,4`](./90-04-0145-python_fu_palette_sort.md#90-04-145-a121-09)
<img width="306" height="40" alt="90-04-145-a121-09" src="https://github.com/user-attachments/assets/75f098f3-9d41-42e8-a699-ea3ea6653a17" />

***

## 다른 페이지로 가기

[➡️ 다음: 15.3.6.3.14.3. 채널 정렬(Channel to Sort)](./15-03-06-03-14-03-channel_to_sort.md)

[⬅️ 이전: 15.3.6.3.14.1. 선택들(Selections)](./15-03-06-03-14-01-selections.md)

[⬆️ 위: 15.3.6.3.14. 팔레트 정렬(Sort Palette)](./15-03-06-03-14-00-sort_palette.md)

[⬆️ 위: 15.3.6.3. 팔레트 컨텍스트 메뉴(The Palettes context menu)](./15-03-06-03-00-the_palettes_context_menu.md)

[⬆️ 위: 15.3.6. 팔레트 대화상자(Palettes dialog)](./15-03-06-00-palettes_dialog.md)

[⬆️ 위: 15.3. 이미지 콘텐츠 관련 대화상자(Image content related dialogs)](./15-03-00-image-content-related-dialogs.md)

[⬆️ 위: 15. 대화상자(Dialogs)](./15-00-dialogs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-palette-dialog.html#gimp-concepts-palettes-menu)