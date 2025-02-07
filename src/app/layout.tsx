import type { Metadata } from "next";
import { Geist, Inter, Lexend } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const interFont = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["400"],
});

const lexand = Lexend({
	variable: "--font-lexand",
	subsets: ["latin"],
	weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Deshboard",
  icons: "/capital.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${lexand.variable} antialiased bg-gray-100`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
