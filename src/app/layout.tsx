import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
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
      <body className={`${bebasNeue.variable} ${inter.variable} font-body antialiased bg-background-dark text-white`}>
        {children}
      </body>
    </html>
  );
}
