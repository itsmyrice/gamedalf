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
              name: "Gamedalf Acolyte",
              email: "acolyte@gamedalf.com",
              image:
                "https://images.unsplash.com/photo-1646009760881-fc1173d9d17a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            };
          },
        })
      : GithubProvider({
          clientId: process.env.GITHUB_CLIENT_ID,
          clientSecret: process.env.GITHUB_CLIENT_SECRET,
          redirectUri:
            process.env.NEXTAUTH_REDIRECT_URI ||
            "http://localhost:3000/api/auth/callback/github",
        }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
