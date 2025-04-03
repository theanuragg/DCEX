import NextAuth from "next-auth";
import { Authconfig } from "@/app/lib/auth";

const handler = NextAuth(Authconfig)


export { handler as GET, handler as POST };
