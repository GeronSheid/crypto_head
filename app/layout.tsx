import Header from "@/components/Header/ui/Header";
import cn from "classnames";
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import './styles/globals.scss';

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
        <Header/>
        {children}
      </body>
    </html>
  );
}
