import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  Appbar  from "./Components/Appbar";
import { Providers } from "./provider";
import { ThemeProvider } from "./Components/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <ThemeProvider attribute="class" defaultTheme="dark">
        <Providers>
          <Appbar />
          {children}
        </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}