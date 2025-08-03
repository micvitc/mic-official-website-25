import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import ConditionalNavbar from "@/components/ConditionalNavbar";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
});

export const metadata: Metadata = {
  title: "Microsoft Innovation Club | VIT Chennai - Official Website",
  description: "Welcome to the official website of the Microsoft Innovation Club at VIT Chennai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pressStart2P.variable} antialiased`}>
        {children}
        <ConditionalNavbar />
      </body>
    </html>
  );
}