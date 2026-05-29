import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const { handlers,auth } = NextAuth({
    providers: [
            CredentialsProvider({
                name : "Log in with email",
                credentials: {
                    username: { label: "Username", type: "text" },
                    password: { label: "Password", type: "password" }
                },
            async authorize(credentials) {
                const username = credentials?.username;
                const password = credentials?.password;
                console.log(username);
                console.log(password);
                // hi db
                const user = {
                id: "1",
                name: "Tridip",
                email: "Tridip@gmail.com"
                }
                if (user) return user
                return null
            }
        })
    ]
})


export const { GET, POST } = handlers
export { auth } 