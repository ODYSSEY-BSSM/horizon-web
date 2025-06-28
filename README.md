# HORIZON-WEB

## TODO

- [ ] 기본 페이지 구현
  - [ ] 메인 페이지 레이아웃 설정
  - [ ] 라우팅 구조 설계
  - [ ] 컴포넌트 구조 설계
- [ ] 스타일링 설정
  - [ ] @odyssey-horizon/ui 라이브러리 세팅
  - [ ] 글로벌 스타일 설정
  - [ ] 테마 설정
- [ ] 상태 관리 설정
  - [ ] Zustand 스토어 설계
  - [ ] TanStack Query 설정
- [ ] 테스트 환경 구축
  - [ ] Vitest 설정
  - [ ] 테스트 코드 작성
- [ ] CI/CD 파이프라인 구축
  - [ ] GitHub Actions 설정
  - [ ] Vercel 배포 설정
- [ ] 패키지 매니저 설정
  - [ ] pnpm 8.0.0+ 설치 확인
  - [ ] Node.js 20.0.0+ 설치 확인
- [ ] 프로젝트 의존성 설치
  - [ ] `pnpm install` 실행
  - [ ] @odyssey-horizon/ui@1.0.0 패키지 접근 권한 확인
- [ ] 개발 도구 설정
  - [ ] husky 설정 (`pnpm prepare`)
  - [ ] Biome 설정 확인 (ESLint + Prettier 통합)
  - [ ] TypeScript 설정 확인
  - [ ] knip 설정 (사용하지 않는 코드 검사)
- [ ] 분석 도구 설정
  - [ ] Vercel Analytics 설정
  - [ ] Vercel Speed Insights 설정
- [ ] 테스트 환경 설정
  - [ ] Vitest + React Testing Library 설정
  - [ ] jsdom 환경 설정
  - [ ] TypeScript 네이티브 지원 확인
- [ ] SEO 설정
  - [ ] next-seo 기본 설정
- [ ] 상태 관리 설정
  - [ ] TanStack Query v5 설정 (캐싱, 에러 핸들링)
  - [ ] Zustand 스토어 설정
  - [ ] react-hot-toast 설정
- [ ] 스타일링 설정
  - [ ] @emotion/react, @emotion/styled 설정
  - [ ] framer-motion 설정
- [ ] 타입 검증 설정
  - [ ] Zod 스키마 설정
- [ ] 이미지 최적화
  - [ ] sharp 라이브러리 설정

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Available Scripts

프로젝트에서 사용할 수 있는 스크립트 명령어들입니다:

### 개발 관련

- `pnpm dev` - 개발 서버 실행
- `pnpm build` - 프로덕션용 빌드
- `pnpm start` - 프로덕션 서버 실행

### 코드 품질

- `pnpm lint` - Biome으로 코드 검사
- `pnpm lint:fix` - Biome으로 코드 자동 수정
- `pnpm format` - Biome으로 코드 포맷팅
- `pnpm format:check` - Biome으로 포맷팅 검사
- `pnpm type-check` - TypeScript 타입 체크
- `pnpm check:unused` - knip으로 사용하지 않는 코드 검사

### 테스트

- `pnpm test` - Vitest로 테스트 실행
- `pnpm test:watch` - 테스트 감시 모드로 실행
- `pnpm test:coverage` - 테스트 커버리지 리포트 생성
- `pnpm test:ui` - Vitest UI로 테스트 실행
- `pnpm test:ci` - CI 환경용 테스트 실행

### Git Hooks

- `pnpm prepare` - Husky 설치 (git hooks 설정)

## Configuration Files

프로젝트의 주요 설정 파일들입니다:

### 기본 설정

- `package.json` - 프로젝트 메타데이터 및 의존성 관리
- `.npmrc` - npm/pnpm 설정
- `.gitignore` - Git 제외 파일 설정

### TypeScript 설정

- `tsconfig.json` - TypeScript 컴파일러 설정
- `next-env.d.ts` - Next.js 타입 선언

### 코드 품질 설정

- `biome.json` - Biome 설정 (linting + formatting)
- `.husky/` - Git hooks 설정
- `knip.json` - 사용하지 않는 코드 검사 설정

### Next.js 설정

- `next.config.ts` - Next.js 프레임워크 설정

## Required Configuration Files

추가로 생성해야 할 설정 파일들입니다:

### 테스트 설정

- [ ] `vitest.config.ts` - Vitest 설정

  ```ts
  import { defineConfig } from 'vitest/config';
  import react from '@vitejs/plugin-react';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    test: {
      environment: 'jsdom',
      setupFiles: ['./vitest.setup.ts'],
      globals: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  });
  ```

- [ ] `vitest.setup.ts` - Vitest 설정 초기화
  ```ts
  import '@testing-library/jest-dom';
  ```

### 타입 설정

- [ ] `src/types/environment.d.ts` - 환경변수 타입 정의
- [ ] `src/types/global.d.ts` - 전역 타입 정의

### 스타일 설정

- [ ] `biome.json` - Biome 설정 (linting + formatting 통합)
  ```json
  {
    "$schema": "https://biomejs.dev/schemas/1.5.0/schema.json",
    "formatter": {
      "enabled": true,
      "indentStyle": "space",
      "indentWidth": 2,
      "lineWidth": 100
    },
    "linter": {
      "enabled": true,
      "rules": {
        "recommended": true
      }
    },
    "javascript": {
      "formatter": {
        "quoteStyle": "single",
        "trailingComma": "es5",
        "semicolons": "asNeeded"
      }
    }
  }
  ```
- [ ] `src/styles/theme.ts` - Emotion 테마 설정
- [ ] `src/styles/GlobalStyles.tsx` - 전역 스타일 설정

### 상태 관리

- [ ] `src/store/index.ts` - Zustand 스토어 설정
- [ ] `src/queries/index.ts` - TanStack Query v5 설정

### API & 유효성 검사

- [ ] `src/schemas/index.ts` - Zod 스키마 정의
- [ ] `src/lib/api.ts` - API 클라이언트 설정

### SEO & 분석

- [ ] `next-sitemap.config.js` - 사이트맵 설정
- [ ] `src/lib/analytics.ts` - Vercel Analytics 설정
- [ ] `src/lib/seo.ts` - next-seo 기본 설정

### 환경 설정

- [ ] `.env` - 환경 변수 (git에서 제외)
- [ ] `.env.example` - 환경 변수 예시
- [ ] `.env.test` - 테스트용 환경 변수

### Git 설정

- [ ] `.husky/pre-commit` - 커밋 전 검사 설정

  ```bash
  #!/bin/sh
  . "$(dirname "$0")/_/husky.sh"

  pnpm lint
  pnpm type-check
  pnpm check:unused
  ```

- [ ] `.husky/commit-msg` - 커밋 메시지 검사
- [ ] `.github/workflows/ci.yml` - GitHub Actions CI 설정

### VSCode 설정

- [ ] `.vscode/settings.json` - VSCode 설정
  ```json
  {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "biomejs.biome",
    "editor.codeActionsOnSave": {
      "quickfix.biome": "explicit",
      "source.organizeImports.biome": "explicit"
    }
  }
  ```
- [ ] `.vscode/extensions.json` - 추천 확장 프로그램
  ```json
  {
    "recommendations": [
      "biomejs.biome",
      "vitest.explorer",
      "ms-vscode.vscode-typescript-next"
    ]
  }
  ```
