import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar  from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sineca",
  description: "meustrabalhos.txt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <header>
          
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
