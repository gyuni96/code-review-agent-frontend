# Project-Specific Rules

이 프로젝트에서 Gemini CLI가 작업을 수행할 때 반드시 지켜야 할 기술적 규칙입니다.

## 1. Technical Stack

- **Framework**: Next.js 15+ (App Router 필수)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS 4 (Utility-first)
- **Data Fetching**: TanStack Query (v5+) & Axios
- **State Management**: Zustand
- **Validation**: Zod (Type Safety 확보용)
- **Components**: Functional Components with Arrow Functions

## 2. Coding Conventions

- **Separation of Concerns**: UI(Component)와 Logic(Hook, Helper)을 명확히 분리하여 작성.
- **Client Components**: 필요한 경우에만 `"use client"` 지시어를 상단에 추가.
- **Data Fetching**:
  - Server side: RSC를 통한 직접 호출 권장.
  - Client side: TanStack Query & Axios 조합 사용.
- **Validation**: API 응답 및 Form 데이터는 Zod 스키마를 통해 검증.
- **Naming**: 컴포넌트는 PascalCase, 일반 함수 및 변수는 camelCase 사용.
- **File Structure**:
  - `src/components/`: UI 컴포넌트 관리.
  - `src/hooks/`: 비즈니스 로직 및 전역 상태(Custom Hooks) 관리.
  - `src/schemas/`: Zod 스키마 정의 파일 관리.
  - `src/api/`: Axios 인스턴스 및 API 호출 함수 관리.

## 3. Git & Commits

- **Commit Style**: Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`) 사용.
- **Branching**: `main` 브랜치로 직접 푸시하지 말고, 기능별 브랜치 사용 권장.
