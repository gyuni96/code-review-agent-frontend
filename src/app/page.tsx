"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <h1 className="text-4xl font-bold">AI Code Review Agent</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          자동으로 PR을 분석하고 리뷰를 제공하는 서비스입니다.
        </p>

        {session ? (
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <p className="text-xl font-medium">안녕하세요, {session.user?.name}님!</p>
            <Link
              href="/dashboard"
              className="rounded-full bg-blue-500 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-600"
            >
              대시보드로 이동
            </Link>
          </div>
        ) : (
          <button
            onClick={() => signIn("github")}
            className="rounded-full bg-black px-6 py-2 font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black"
          >
            GitHub으로 로그인
          </button>
        )}
      </main>
    </div>
  );
}
