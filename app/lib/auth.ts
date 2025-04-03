import GoogleProvider from "next-auth/providers/google";
import { Keypair } from "@solana/web3.js";
import { Session } from "next-auth";
import prisma from "../db";
import secrets from "secrets.js-grempe";
import type { NextAuthOptions } from "next-auth";

export interface AuthSession extends Session {
  user: {
    email: string;
    name: string;
    uuid: string;
  };
}

export const Authconfig: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    session(params: any): any {
      const { session, token } = params;
      
      if (session?.user && token?.uuid) {
        return {
          ...session,
          user: {
            ...session.user,
            uuid: token.uuid
          }
        };
      }
      
      return session;
    },
    async jwt(params: any): Promise<any> {
      const { token, account } = params;
      
      if (account?.providerAccountId) {
        const user = await prisma.user.findFirst({
          where: {
            sub: account.providerAccountId,
          },
        });
        if (user) {
          token.uuid = user.id;
        }
      }
      
      return token;
    },
    async signIn(params: any): Promise<boolean> {
      const { user, account } = params;
      
      if (!user?.email || !account?.provider) {
        return false;
      }
      
      if (account.provider === "google") {
        const email = user.email;
        const userDb = await prisma.user.findFirst({
          where: {
            username: email,
          },
        });
        if (userDb) {
          return true;
        }

        const keypair = Keypair.generate();
        const publicKey = keypair.publicKey.toBase58();
        const privateKey = Buffer.from(keypair.secretKey).toString("hex");

        const shares = secrets.share(privateKey, 3, 2);

        await prisma.user.create({
          data: {
            username: email,
            provider: "Google",
            sub: account.providerAccountId,
            solwallet: {
              create: {
                publickey: publicKey,
                share1: shares[0],
                share2: shares[1],
                share3: shares[2],
              },
            },
            inrWallet: {
              create: {
                balance: 0,
              },
            },
          },
        });
        return true;
      }
      return false;
    },
  },
};