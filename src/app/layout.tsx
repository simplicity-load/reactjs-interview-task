import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const openSans = localFont({
  src: "./fonts/OpenSans.ttf",
  variable: "--font-open-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Notes App",
  description: "Add, save and categorize notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable}`}>{children}</body>
    </html>
  );
}
