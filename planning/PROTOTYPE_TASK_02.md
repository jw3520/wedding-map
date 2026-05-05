# Codex Task 02: Refine UI/UX & Fix Cloudflare Deployment

## 1. Goal (작업 목표)
현재 구현된 프로토타입의 UI가 다소 투박합니다. 주 사용자인 2030 예비 신부들이 선호할 만한 **유려하고 감성적인 디자인**으로 전면 개편합니다. (참고 레퍼런스: `donnaga` 프로젝트의 스타일링)
추가로, 현재 Cloudflare Pages에 배포 시 **빈 화면(Blank Screen)이 뜨는 문제**를 원인 분석하고 수정합니다.

## 2. Design & Styling Guide (donnaga 상세 분석)
- **Color Palette (컬러 팔레트):**
  - 앱 배경(Background): `#dfe5e8` (차분하고 깔끔한 라이트 그레이)
  - 패널/카드(Panel/Card): `#ffffff` (화이트)
  - 텍스트(Text): `#1f2328` (어두운 차콜/블랙)
  - 포인트 컬러(Point Color): `#4db6ac` (민트/민트그린) 및 파스텔톤 컬러(예: 연보라/블루 톤의 플로팅 버튼 등)
- **Typography (타이포그래피):**
  - 폰트 패밀리: `"Noto Sans KR", "Apple SD Gothic Neo", sans-serif`
  - 텍스트가 빽빽하지 않도록 줄간격과 여백 확보.
- **Components & Layout (컴포넌트 및 형태):**
  - **모바일 뷰포트 레이아웃:** 앱 전체를 `max-width: 480px`로 중앙 정렬하고 꽉 찬 모바일 앱 느낌 제공.
  - **카드(Card):** 목록의 각 항목들은 넉넉한 안쪽 여백(`padding`)과 둥근 모서리(`border-radius: 16px` 이상)를 가진 하얀색 카드로 분리.
  - **그림자(Shadow):** `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);` 같이 아주 부드럽고 넓게 퍼지는 그림자 적용.
  - **하단 탭 바 (Bottom Navigation):** 모바일 앱처럼 하단에 고정된 내비게이션 바(얇고 심플한 아이콘 위주) 배치.
  - **플로팅 액션 버튼 (FAB):** 우측 하단에 그라데이션이나 파스텔톤 색상이 들어간 부드러운 원형 추가 버튼 배치.

## 3. Cloudflare Pages 배포 이슈 (Blank Screen)
- **증상:** 로컬에서는 잘 작동하지만, Cloudflare에 배포하면 하얀 빈 화면만 출력됨.
- **예상 원인 및 해결 방향:**
  1. React SPA 라우팅 문제 (새로고침 시 404 에러로 인한 빈 화면). -> `public/_redirects` 파일을 생성하여 `/* /index.html 200` 내용 추가.
  2. Vite 빌드 시 `base` 경로 설정 문제. `vite.config.ts`의 `base` 값이 잘못되었는지 확인.
  3. 빌드된 JS/CSS 파일 경로 로드 실패(MIME type 오류 등). 브라우저 콘솔 에러를 방지하도록 빌드 설정 점검.

## 4. Execution Instructions for Codex
1. 위 디자인 가이드에 맞춰 `App.tsx`, 컴포넌트, 그리고 CSS를 전면 개편하여 트렌디한 모바일 PWA UI를 완성하세요.
2. Cloudflare Pages 빈 화면 이슈를 해결하기 위한 설정 파일(예: `public/_redirects`, `vite.config.ts` 등)을 추가/수정하세요.
3. 코드 수정 후 자체적으로 빌드(`npm run build`) 및 로컬 프리뷰(`npm run preview` 등)를 실행하여 에러가 없는지, 빈 화면 문제가 해결될 수 있는 구조인지 검증하세요.
