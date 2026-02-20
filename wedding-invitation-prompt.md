# 모바일 웨딩 초대장 - Claude Code 프로젝트 프롬프트

## 프로젝트 개요

모바일 최적화 웨딩 초대장 웹앱을 만들어줘. 여권(Passport) + 보딩패스(Boarding Pass) 컨셉의 청첩장이야. 카카오톡/문자로 링크를 공유하면 모바일 브라우저에서 바로 열리는 형태야.

## 기술 스택

- **프레임워크**: Next.js (App Router)
- **스타일링**: Tailwind CSS
- **애니메이션**: Framer Motion
- **배포**: Vercel
- **언어**: TypeScript

## 컬러 팔레트

```
메인 (세이지 그린): #B5BFA1
배경: #FFFFFF
텍스트 (진한 회색): #333333
텍스트 (검정, 이름용): #000000
포인트 (보딩패스): #6B8E7B
연한 배경: #F5F5F0
보더/구분선: #E0E0D8
```

## 폰트

- 한글 제목/이름: Noto Sans KR (Bold, Black)
- 영문 필기체: Playfair Display 또는 Great Vibes (Google Fonts)
- 영문 본문/라벨: Noto Sans (Regular, Medium)
- 보딩패스 코드: monospace 계열 (Courier, JetBrains Mono 등)

## 페이지 구조 (위에서 아래로 스크롤)

모바일 전용 레이아웃. max-width: 430px, 중앙 정렬. 각 섹션은 최소 100vh 또는 콘텐츠에 맞게.

---

### 섹션 1: 여권 표지 (첫 화면, 100vh)

첫 화면에 보이는 여권 표지 디자인.

- 여권 느낌의 외곽 테두리 (라운드 코너, 미세한 그림자)
- 중앙에 점선(접는 선) 세로로 표현
- **오른쪽 페이지 영역**:
  - "PASSPORT" (큰 볼드, serif)
  - "WEDDING INVITATION" (작은 글씨)
  - 세이지 그린(#B5BFA1) 컬러의 세계지도 실루엣 (SVG)
  - "TO THE MARRIAGE OF"
  - **"임영수 & 정평화"** (한글, 크고 굵게)
  - **"2026 . 03 . 07"**
- 하단에 아래로 스크롤 유도 화살표 애니메이션 (바운스)

---

### 섹션 2: D-Day 카운터

- 결혼식 날짜: **2026년 3월 7일 토요일 18:30** (한국시간 기준으로 계산하지 말고, 베트남 시간대 UTC+7 기준)
- "임영수 ♥ 정평화의 결혼식까지"
- **D-Day 카운터**: X일 X시간 X분 X초 (실시간 카운트다운, 1초마다 갱신)
- 결혼식 당일이면 "오늘 결혼합니다! 🎉" 표시
- 결혼식 지났으면 "We're Married! 🎉" 표시
- 깔끔한 카드 스타일, 각 단위(일/시간/분/초)를 별도 박스로

---

### 섹션 3: Wedding Reception (인사말 & 가족 소개)

여권 내지 느낌의 디자인.

- 왼쪽: "Wedding Reception" 필기체 (큰 글씨, 기울임)
- 오른쪽:
  - **신랑 부모님**: 임상돈 / 이필선
  - **신부 부모님**: 정권삼 / 오정자
  - 신랑 측 "의 장남" / 신부 측 "의 장녀"
  - **신랑: 임영수** / **신부: 정평화** (크고 굵게)
  - "두 사람의 앞날을 축복해 주세요."
  - **피로연 장소 | 시간**
  - D'Maris An Phu
  - 26.03.07 18:30

---

### 섹션 4: 보딩패스 (Boarding Pass)

실제 보딩패스 카드처럼 디자인. 카드형 레이아웃.

**왼쪽 stub (SAVE THE DATE)**:
- 세이지 그린 배경
- FLIGHT: OZ731 / 07MAR26
- FROM: SOUTH KOREA
- TO: D'MARIS AN PHU
- TIME: 18:30
- ADDRESS: Tòa nhà Cantavil Premier, 1 Song Hành Xa Lộ Hà Nội, P. Thủ Đức, Thành phố Hồ Chí Minh 70000

**오른쪽 메인 (BOARDING PASS)**:
- 상단: "BOARDING PASS" (크게) + "BUSINESS CLASS" (포인트 배지)
- Passenger: (빈 필드 - 장식용)
- 중앙:
  - 신랑/Groom: **임영수** & 신부/Bride: **정평화**
- 하단 정보 행:
  - BOARDING TIME: **18:30**
  - FROM | 출발지: **ICN** → TO | 도착지: **SGN** (화살표 포함)
- 왼쪽과 오른쪽 사이에 절취선(dashed border) 느낌

**모바일에서는 왼쪽 stub과 오른쪽 메인을 세로로 쌓아도 OK. 가로 스크롤은 하지 않도록.**

---

### 섹션 5: Wedding Airways 커버

- 상단 배너: 세이지 그린(#B5BFA1) 배경
  - 비행기 아이콘 (✈️ 또는 SVG) + **"WEDDING AIRWAYS"** (흰색 텍스트)
- 본문 (흰색 배경, 연한 세계지도 워터마크):
  - "Please join us for the wedding reception of"
  - **"임영수 & 정평화"** (한글, 크고 굵게)
  - "FLIGHT DATE | MARCH 7th, 2026"
- 하단: 세이지 그린 배경
  - "NAME OF PASSENGER:" 라벨 + 점선 (장식용)

---

### 섹션 6: 오시는 길 (지도 & 장소 안내)

- 제목: "오시는 길" 또는 "Location"
- **장소명**: D'Maris An Phu
- **주소**: Tòa nhà Cantavil Premier, 1 Song Hành Xa Lộ Hà Nội, P. Thủ Đức, Thành phố Hồ Chí Minh 70000
- **날짜/시간**: 2026년 3월 7일 토요일 오후 6시 30분
- **구글맵 임베드**: iframe으로 구글맵 embed (D'Maris An Phu 위치)
  - 좌표: 약 10.8031, 106.7471 (Cantavil Premier 기준, 정확한 좌표는 구글맵에서 확인)
  - fallback으로 구글맵 링크 버튼도 제공
- **버튼**: "구글맵에서 열기" (Google Maps 외부 링크), "주소 복사" (클립보드 복사)

---

### 섹션 7: 마음 전하실 곳 (축의금 계좌)

- 제목: "마음 전하실 곳"
- **탭 UI**: 신랑 측 | 신부 측 (탭 전환)

**신랑 측 탭:**

| 구분 | 은행 | 계좌번호 | 예금주 |
|------|------|----------|--------|
| 신랑 (KR) | 우리은행 | 1002-9316-59968 | 임영수 |
| 신랑 (VN) | WOORI VN | 100-250-043807 | 임영수 |
| 신랑 아버지 (KR) | 우리은행 | 1002-358-589813 | 임상돈 |
| 신랑 어머니 (KR) | 농협 | 924-12-259314 | 이필선 |

**신부 측 탭:**

| 구분 | 은행 | 계좌번호 | 예금주 |
|------|------|----------|--------|
| 신부 (KR) | 국민은행 | 392801-04-152184 | 정평화 |
| 신부 (VN) | WOORI VN | 100-700-214182 | 정평화 |
| 신부 아버지 (KR) | 국민은행 | 362702-04-007640 | 정권삼 |
| 신부 어머니 (KR) | 국민은행 | 362701-04-084264 | 오정자 |

- 각 계좌 옆에 **"복사"** 버튼 (클릭 시 계좌번호 클립보드 복사 + "복사완료!" 토스트)
- KR / VN 구분이 시각적으로 보이도록 (🇰🇷 🇻🇳 플래그 이모지 또는 라벨)
- 아코디언 UI도 OK (탭 내에서 각 계좌를 펼치고 접는 방식)

---

### 섹션 8: 푸터

- "Thank you for joining our journey ✈️"
- 또는 "임영수 & 정평화" + 날짜
- 심플하게 마무리

---

## 애니메이션 요구사항

- **Framer Motion** 사용
- 각 섹션: 스크롤 시 **fade-in + slide-up** (Intersection Observer 기반)
- 여권 표지: 첫 로딩 시 살짝 열리는 듯한 애니메이션
- D-Day 카운터: 숫자 변경 시 flip 또는 fade 효과
- 보딩패스: 스크롤 인 시 왼쪽에서 슬라이드
- 계좌 복사 버튼: 클릭 시 체크마크 변환 + 토스트
- 스크롤 유도 화살표: 무한 바운스

---

## 반응형 & 성능

- **모바일 퍼스트**: 기본 디자인이 모바일 (375px ~ 430px)
- 태블릿/데스크톱에서는 중앙에 모바일 프레임으로 표시 (max-width: 430px, margin: auto)
- 데스크톱 배경은 연한 패턴 또는 단색
- **이미지 최적화**: SVG 우선, 필요시 Next.js Image 컴포넌트
- **SEO**: 메타 태그 (og:title, og:description, og:image) 설정
  - title: "임영수 ♥ 정평화 결혼식에 초대합니다"
  - description: "2026년 3월 7일 토요일 오후 6시 30분 | D'Maris An Phu, Ho Chi Minh City"

---

## OG Image (카카오톡 공유용 미리보기)

카카오톡에서 링크 공유 시 표시될 미리보기 이미지가 필요해.
- 1200x630px 크기의 OG 이미지를 public 폴더에 포함
- 내용: "임영수 & 정평화 Wedding" + 날짜 + 세이지 그린 테마
- 간단한 SVG 또는 HTML → 이미지 변환으로 생성

---

## 폴더 구조 예시

```
wedding-invitation/
├── app/
│   ├── layout.tsx          # 글로벌 레이아웃, 폰트, 메타데이터
│   ├── page.tsx            # 메인 페이지 (모든 섹션 조합)
│   └── globals.css         # Tailwind + 커스텀 스타일
├── components/
│   ├── PassportCover.tsx   # 섹션 1: 여권 표지
│   ├── DdayCounter.tsx     # 섹션 2: D-Day 카운터
│   ├── WeddingReception.tsx # 섹션 3: 인사말 & 가족소개
│   ├── BoardingPass.tsx    # 섹션 4: 보딩패스
│   ├── WeddingAirways.tsx  # 섹션 5: Wedding Airways
│   ├── LocationMap.tsx     # 섹션 6: 오시는 길
│   ├── AccountInfo.tsx     # 섹션 7: 축의금 계좌
│   ├── Footer.tsx          # 섹션 8: 푸터
│   ├── ScrollAnimation.tsx # 스크롤 애니메이션 래퍼
│   └── WorldMapSvg.tsx     # 세계지도 SVG 컴포넌트
├── public/
│   └── og-image.png        # OG 미리보기 이미지
├── tailwind.config.ts
├── package.json
└── next.config.ts
```

---

## 참고사항

1. 외부 API 키가 필요 없도록 구글맵은 embed URL 방식으로 처리
2. 모든 텍스트는 하드코딩 (CMS 불필요)
3. 배포는 `vercel` CLI 또는 GitHub 연동으로 진행
4. HTTPS 필수 (Vercel 기본 제공)
5. 로딩 속도 최적화: 폰트 preload, 불필요한 JS 최소화
