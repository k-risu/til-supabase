# SEO

## 섬네일

- /public 폴더에 배치합니다. (thumbnail.png)

## 아이콘

- /src/app 폴더에 배치합니다. (icon.ico)

## 메타데이터 설정하기

### 1. 기본 메타데이터 설정

- http://localhost:3000
- /src/app/layout.tsx

```tsx
export const metadata: Metadata = {
  title: "Todo",
  description: "Todo Supabase",
  openGraph: {
    title: "Todo",
    description: "Todo Supabase",
    images: [{ url: "/thumbnail.png" }],
  },
};
```

### 2. 페이지별 메타데이터 설정

- /src/app/(with-side)/layout.tsx

```tsx
export const metadata: Metadata = {
  title: "Blog",
  description: "Blog Supabase",
  openGraph: {
    title: "Blog",
    description: "Blog Supabase",
    images: [{ url: "/thumbnail.png" }],
  },
};
```

### 3. 동적 페이지 메타데이터 설정

- next-15 깃허브 (deploy) 부분 참조

# Vercel Deoploy

- https://vercel.com/login?next=%2Fdashboard
- 환경변수 등록 주의
  - `SITE_URL 은 로그인 이후 이동할 주소 이므로 주의하기`
  - `https://til-supabase-kappa.vercel.app`

# 배포 에러 처리

```js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Prettier 플러그인 추가
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      prettier: eslintPluginPrettier, //  Prettier 플러그인 추가
    },
    rules: {
      ...eslintConfigPrettier.rules, //  Prettier와 충돌하는 ESLint 규칙 비활성화
      "prettier/prettier": ["off", { endOfLine: "auto" }], //  Prettier 스타일을 강제 적용 (오류 발생 시 ESLint에서 표시)
      "@typescript-eslint/no-unused-vars": "off", //  기존 TypeScript 규칙 유지
      "@typescript-eslint/no-explicit-any": "off", //  any 타입 사용 허용
      "react-hooks/exhaustive-deps": "off",
    },
  },
];

export default eslintConfig;
```

# 구글 로그인 후 Redirec 처리

- https://cloud.google.com/developers?hl=ko
- `콘솔`로 이동
- `프로젝트` 선택
- `API 및 서비스` > `OAuth 동의` 화면 > `클라이언트` > `목록 중 해당 프로젝트` 선택
- 승인된 리디렉션 URL 항목에 추가 (`https://til-supabase-fawn.vercel.app`)

# 네이버 서치 어드바이저 등록하기

- https://searchadvisor.naver.com/
- 웹마스터 도구 (https://searchadvisor.naver.com/console/board)
- `사이트 소유확인 > HTML 태그 복사` 으로 이동

```html
<meta
  name="naver-site-verification"
  content="208df0f5372346689bf8272c2e8b5ebec7c42cee"
/>
```

- /src/app/layout.tsx

```tsx
export const metadata: Metadata = {
  title: "Todo",
  description: "Todo Supabase",
  openGraph: {
    title: "Todo",
    description: "Todo Supabase",
    images: [{ url: "/thumbnail.png" }],
  },
  other: {
    "naver-site-verification": "208df0f5372346689bf8272c2e8b5ebec7c42cee",
  },
};
```

- `소유권 확인` 성공시 다음 실행
- `웹마스터도구 > 요약 > 검증 > robots.txt` (https://searchadvisor.naver.com/console/summary)

## public/robots.txt 파일 생성

```txt
# *
User-agent: *
Allow: /

# Host
Host: https://til-supabase-fawn.vercel.app

# Sitemaps
Sitemap: https://til-supabase-fawn.vercel.app/sitemap.xml
```

## /public/sitemap.xml 파일 생성

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<sitemap><loc>https://til-supabase-fawn.vercel.app/sitemap-0.xml</loc></sitemap>
</sitemapindex>
```

## /public/sitemap-0.xml 파일 생성

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
<url><loc>https://til-supabase-fawn.vercel.app</loc><lastmod>2023-09-11T23:52:17.732Z</lastmod><changefreq>todos</changefreq><priority>0.7</priority></url>
<url><loc>https://til-supabase-fawn.vercel.app/blog</loc><lastmod>2023-09-11T23:52:17.732Z</lastmod><changefreq>blog</changefreq><priority>0.7</priority></url>
<url><loc>https://til-supabase-fawn.vercel.app/todos</loc><lastmod>2023-09-11T23:52:17.732Z</lastmod><changefreq>todos</changefreq><priority>0.7</priority></url>
</urlset>
```
