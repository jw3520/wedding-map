# Wedding Map

React(Vite) + TypeScript 기반의 모바일 우선 PWA 프로토타입입니다.

## 실행

```bash
npm install
npm run dev
```

개발 서버는 `/index.dev.html`을 사용합니다.
루트 `index.html`은 Cloudflare Pages 루트 정적 배포와 호환되도록 빌드된
`/assets/index.js`를 직접 로드합니다.

## 검증

```bash
npm run lint
npm run build
```

## Cloudflare Pages

Cloudflare Pages는 `donnaga`와 같은 root 정적 배포 방식을 사용합니다.
빌드 명령은 비워둘 수 있습니다.
출력 디렉터리는 `.`입니다.

Cloudflare Pages가 repo 루트의 `index.html`을 그대로 서빙하면 Vite 개발용
`/src/main.tsx`가 브라우저에 전달됩니다.
이 경우 배포 환경에서 다음 오류가 발생합니다.

```text
Failed to load module script: Expected a JavaScript-or-Wasm module script...
```

Pages 설정 파일인 `wrangler.toml`에 `pages_build_output_dir = "."`를 명시해
루트 정적 파일을 배포하도록 고정합니다.

루트에는 정적 번들(`assets/index.js`, `assets/index.css`, `manifest.webmanifest`,
`_redirects`, `_headers`)이 커밋되어 있습니다.

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
