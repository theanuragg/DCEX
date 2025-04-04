import GoogleProvider from "next-auth/providers/google";
import { generateKeyPair } from "@solana/web3.js";
import { Session, Account, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import prisma from "../db";
import secrets from "secrets.js-grempe";
import type { NextAuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";

export interface AuthSession extends Session {
  user: {
    email: string;
    name: string;
    uuid: string;
  };
}

export interface AuthUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  uuid: string;
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
    session(params: { session: Session; token: JWT }): AuthSession {
      const { session, token } = params;
      
      if (session?.user && token?.uuid) {
        return {
          ...session,
          user: {
            ...session.user,
            uuid: token.uuid as string,
          },
        } as AuthSession;
      }
      
      return session as AuthSession;
    },
    async jwt(params: { token: JWT; account: Account | null; user: User | AdapterUser }): Promise<JWT> {
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
    async signIn(params: { user: User | AdapterUser; account: Account | null }): Promise<boolean> {
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

        const keypair = await generateKeyPair();
        const publicKey = keypair.publicKey;

        const privateKeyArrayBuffer = await window.crypto.subtle.exportKey("raw", keypair.privateKey);
        const privateKey = Buffer.from(privateKeyArrayBuffer); 

        const shares = secrets.share(privateKey.toString("hex"), 3, 2);

        await prisma.user.create({
          data: {
            username: email,
            provider: "Google",
            sub: account.providerAccountId,
            solwallet: {
              create: {
                publickey: publicKey.toString(),
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