import type { Metadata } from "next";
import { Archivo_Black, Roboto_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const archivo = Archivo_Black({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-archivo',
  display: 'swap',
});

const roboto = Roboto_Mono({ 
  subsets: ["latin"],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "RKENA | Georgian MMA",
  description: "The premier brutalist MMA promotion in Georgia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${roboto.variable} font-sans bg-rkena-black text-rkena-light overflow-x-hidden`}>
        <NavBar />
        <main className="min-h-screen pt-20">
           {children}
        </main>
      </body>
    </html>
  );
}
