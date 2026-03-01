import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { syncUser } from "@/api/backend";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      authorization: {
        params: {
          scope: "read:user user:email repo write:repo_hook",
        },
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("signIn callback called with:", {
        user: user?.email,
        provider: account?.provider,
      });

      if (!account?.access_token) {
        console.error("No access token provided from GitHub provider");
        return false;
      }

      try {
        await syncUser({
          githubId: profile?.id?.toString() || "",
          email: user?.email || undefined,
          username: (profile as any)?.login || user?.name || "unknown",
          avatarUrl: user?.image || undefined,
          accessToken: account.access_token,
        });
      } catch (error) {
        console.error("Failed to sync user data with backend:", error);
      }

      return true;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
