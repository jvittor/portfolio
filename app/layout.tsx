import type { Metadata } from "next";
import { Inter, Jura } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import '@fortawesome/fontawesome-free/css/all.min.css';


// Importação da fonte Jura
const inter = Inter({ subsets: ["latin"] });
const jura = Jura({ subsets: ["latin"] });

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
      <body className={`${inter.className} ${jura.className}`}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
