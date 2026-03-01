"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useRepositories } from "@/hooks/useRepositories";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const { data: repos, isLoading, error } = useRepositories();

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/");
    }
  }, [status]);

  if (status === "loading" || isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg font-medium">데이터를 불러오는 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-4xl p-8">
        <p className="text-red-500">에러가 발생했습니다: {(error as Error).message}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-8">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">내 레포지토리</h1>
          <p className="mt-1 text-zinc-500">{session?.user?.name}님의 GitHub 저장소 목록입니다.</p>
        </div>
      </header>

      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        {!repos || repos.length === 0 ? (
          <div className="p-8 text-center text-zinc-500">불러온 저장소가 없습니다.</div>
        ) : (
          <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {repos.map((repo) => (
              <li
                key={repo.id}
                className="group flex items-center justify-between p-5 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {repo.full_name}
                    </p>
                    {repo.isActive && (
                      <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                        Active
                      </span>
                    )}
                  </div>
                  {repo.description && (
                    <p className="line-clamp-1 text-sm text-zinc-500">{repo.description}</p>
                  )}
                </div>
                <button
                  className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-all focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:outline-none ${
                    repo.isActive
                      ? "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100"
                      : "bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black"
                  }`}
                >
                  {repo.isActive ? "비활성화" : "활성화"}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
