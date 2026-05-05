# Wedding Map

React(Vite) + TypeScript 기반의 모바일 우선 PWA 프로토타입입니다.

## 실행

```bash
npm install
npm run dev
```

## 검증

```bash
npm run lint
npm run build
```

## Cloudflare Pages

빌드 명령은 `npm run build`입니다.
출력 디렉터리는 `dist`입니다.

React SPA는 직접 URL 접근이나 새로고침 시 서버가 `index.html`을 반환해야 합니다.
이를 위해 `public/_redirects`에 다음 규칙을 둡니다.

```text
/* /index.html 200
```

Vite `base`는 Cloudflare Pages 루트 배포 기준인 `/`로 명시합니다.

## 구현 범위

- 예식일 온보딩과 `localStorage` 저장
- D-Day 기반 타임라인 및 체크리스트
- 태스크별 이유 아코디언
- 완료 상태 토글
- 공유용 read-only 대시보드
- PWA manifest와 홈 화면 아이콘
