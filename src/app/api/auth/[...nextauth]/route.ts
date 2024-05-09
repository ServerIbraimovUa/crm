import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
const { NEXTAUTH_SECRET, CLIENT_SECRET, CLIENT_ID } = process.env;
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: CLIENT_ID!,
            clientSecret: CLIENT_SECRET!,
        }),
    ],
    secret: NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
