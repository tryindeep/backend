
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const { handlers } = NextAuth({
secret: "siglsdkjflksjlf",
  providers: [
    Credentials({
        name : "Gmail",
        credentials: {
            username: { label: "Username", type: "text" },
            password: { label: "Password", type: "password" }
        },
      async authorize(credentials) {
        const username = credentials?.username;
        const password = credentials?.password;
        console.log(username);
        console.log(password);
        const user = {
          id: "1",
          name: "Tridip",
          email: "Tridip@gmail.com"
        }
        if (user) return user
        return null
      }
    }),

    // GoogleProvider({
    //     clientId: "process.env.GOOGLE_CLIENT_ID",
    //     clientSecret: "process.env.GOOGLE_CLIENT_SECRET"
    // }),

    // GitHubProvider({
    //     clientId: "process.env.GITHUB_ID",
    //     clientSecret: "process.env.GITHUB_SECRET"
    //  })


  ]
})


export const GET = handlers.GET
export const POST = handlers.POST