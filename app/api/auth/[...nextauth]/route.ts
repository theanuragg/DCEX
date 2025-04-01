import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ], 
  callbacks: {
    async signIn({user, email, account, profile, }) {
      if (account?.providers === "google"){
        const email = user.email
         if(email!){
          return false
         }
         else{
          return true
         }
      }
    }
  }
};

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
