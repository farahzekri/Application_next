import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth/signin', 
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async redirect({  baseUrl }) {
      console.log("Redirecting to:", baseUrl + "/user/edit-profile");
      return baseUrl + "/user/edit-profile";
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token; 
      }
      return token;
    },
    async session({ session, token }) {
      console.log("Token reçu dans session callback:", token.accessToken);
      session.accessToken = token.accessToken;
      return session;
    },
  },
});