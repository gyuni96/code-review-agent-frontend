# AI Code Review Agent - Frontend

This is the frontend application for the AI Code Review Agent, an AI-powered service that automatically analyzes Pull Requests and provides reviews.

## Project Overview

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) with GitHub Provider
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Runtime**: Node.js / pnpm

The application provides a web interface for users to sign in via GitHub and manage their code review settings. It requests specific GitHub scopes (`repo`, `write:repo_hook`) to enable automated PR analysis and webhook management.

## Getting Started

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### Commands

| Command      | Description                                              |
| :----------- | :------------------------------------------------------- |
| `pnpm dev`   | Starts the development server at `http://localhost:3000` |
| `pnpm build` | Builds the application for production                    |
| `pnpm start` | Starts the production server                             |
| `pnpm lint`  | Runs ESLint for code quality checks                      |

## Project Structure

- `src/app/`: Next.js App Router directory.
  - `api/auth/[...nextauth]/`: NextAuth.js configuration and API routes.
  - `dashboard/`: User dashboard (protected area).
  - `layout.tsx`: Root layout with font and provider setup.
  - `page.tsx`: Landing page with login/logout logic.
- `src/components/`: Reusable React components.
  - `providers.tsx`: Context providers (SessionProvider).
- `public/`: Static assets.

## Development Conventions

- **Component Pattern**: Use the Next.js App Router. Prefer Server Components for data fetching and Client Components (`"use client"`) for interactivity.
- **Authentication**: Use `useSession()` hook in client components and `getServerSession()` in server components/API routes.
- **Styling**: Use Tailwind CSS 4 utility classes. Global styles are defined in `src/app/globals.css`.
- **Type Safety**: Maintain strict TypeScript typing for all components and API interactions.
- **Git Flow**: Do not commit sensitive information like `.env` files (already ignored by `.gitignore`).

## Gemini Configuration

이 프로젝트의 Gemini 전용 설정 파일들입니다. 작업을 수행하기 전 반드시 참고하세요:

- **`.gemini/rules.md`**: 기술적 코딩 규칙 및 컨벤션.
- **`.gemini/prompts/`**: 커밋 메시지, PR 설명 등 작업별 프롬프트 템플릿 저장소.
- **`.gemini/skills/`**: 특정 작업을 위한 에이전트 스킬 (Vercel 베스트 프랙티스 등).
