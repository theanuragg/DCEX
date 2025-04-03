import GoogleProvider from "next-auth/providers/google";
import { Keypair } from "@solana/web3.js";
import { Session } from "next-auth";
import prisma from "../db";
import secrets from "secrets.js-grempe";

export interface AuthSession extends Session {
  user: {
    email: string;
    name: string;
    uuid: string;
  };
}

export const authconfig = {
  secret: process.env.NEXTAUTH_SECRET,
  Provider: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    session: ({
      session,
      token,
    }: {
      session: AuthSession;
      token: { uuid?: string };
    }): AuthSession => {
      const newSession: AuthSession = session;
      if (newSession.user && token.uuid) {
        newSession.user.uuid = token.uuid ?? "";
      }
      return newSession;
    },
    async jwt({
      token,
      account,
    }: {
      token: { uuid?: string };
      account: { providersAccoundId?: string };
    }) {
      const user = await prisma.user.findFirst({
        where: {
          sub: account?.providersAccoundId ?? "",
        },
      });
      if (user) {
        token.uuid = user.id;
      }
      return token;
    },
    async signIn({ user, account }: { user: { email: string }; account: { provider?: string; providersAccoundId?: string } }) {
      if (account?.provider === "google") {
        const email = user.email;
        if (!email) {
          return false;
        }
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
            sub: account.providersAccoundId,
            solwallet: {
              create: {
                publickey: publicKey,
                share1: shares[0], 
                share2: shares[1], 
                share3: shares[2], 
              },
            },
            inrWallet:{
                create:{
                    balance: 0
                }
            }
          },
        });
        return true
      }
      return false
    },
  },
};
