import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Craig Ripken Basketball | Elevate Your Game",
  description: "Elite basketball training with Coach Craig Ripken. Personal coaching, group clinics, and online programs for serious athletes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${lexend.variable} font-display antialiased bg-background-dark text-white`}>
        {children}
      </body>
    </html>
  );
}
