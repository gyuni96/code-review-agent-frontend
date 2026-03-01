import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      id?: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    accessToken?: string;
  }

  interface Profile {
    id: string;
    name: string;
    email: string;
    image: string;
  }
}
