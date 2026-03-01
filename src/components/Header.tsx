"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <header className="border-b border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">AI Code Review Agent</h1>
        {session && (
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <button
              onClick={() => signOut()}
              className="rounded-full bg-red-500 px-6 py-2 font-medium text-white transition-colors hover:bg-red-600"
            >
              로그아웃
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
