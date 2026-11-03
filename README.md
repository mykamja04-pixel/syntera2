# React + TypeScript + Tailwind CSS 프로젝트

Vite 기반의 최신 React 프론트엔드 개발 환경입니다.

## 🛠 기술 스택
- **Framework**: [React 19](https://react.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linter**: [Oxlint](https://oxc.rs/)
- **Path Alias**: `@/` -> `src/`

## 🚀 시작하기

### 개발 서버 실행
```bash
npm run dev
# 또는 Windows PowerShell 정책 이슈 시:
npm.cmd run dev
```

### 프로덕션 빌드 & 미리보기
```bash
# 타입 체크 및 빌드
npm run build

# 빌드 결과물 미리보기
npm run preview
```

### 린트 검사
```bash
npm run lint
```

## 📁 디렉터리 구조
```
├── src/
│   ├── assets/       # 이미지 및 정적 에셋
│   ├── App.tsx       # 메인 애플리케이션 컴포넌트
│   ├── index.css     # 전역 CSS (Tailwind v4 설정)
│   └── main.tsx      # React DOM 엔트리포인트
├── public/           # 공개 정적 파일
├── vite.config.ts    # Vite 및 플러그인 설정
├── tsconfig.json     # TypeScript 메인 설정
└── tsconfig.app.json # 애플리케이션 TypeScript 및 Path alias 설정
```
