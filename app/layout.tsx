import cn from "classnames";
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import './styles/globals.scss';
import { Header } from "@/components/Header";

const ss3 = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CryptoBrains",
  description: "Crypto Brains Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(ss3.className)}>
        <div className="wrapper">
          <Header/>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
