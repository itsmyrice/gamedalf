import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    process.env.VERCEL_ENV === "preview"
      ? CredentialsProvider({
          name: "Credentials",
          credentials: {
            username: {
              label: "Username",
              type: "text",
              placeholder: "newfishes",
            },
            password: { label: "Password", type: "password" },
          },
          async authorize() {
            return {
              id: 1,
              name: "New Fishes",
              email: "new@fishes.com",
              image:
                "https://avatars.githubusercontent.com/u/41701911?s=200&v=4",
            };
          },
        })
      : GithubProvider({
          clientId: process.env.GITHUB_CLIENT_ID,
          clientSecret: process.env.GITHUB_CLIENT_SECRET,
          redirectUri: process.env.NEXTAUTH_REDIRECT_URI || "http://localhost:3000/api/auth/callback/github",
        }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);