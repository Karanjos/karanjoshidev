import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Karan Joshi - Personal Website";
const description =
  "Personal website of Karan Joshi - Software Engineer | Web Developer | Full Stack Developer | Software Developer Engineer | React Developer | Node Developer | JavaScript Developer | TypeScript Developer";
const url = "https://karanjoshi.vercel.app";
const keywords = [
  "Frontend Developer",
  "Full Stack Developer",
  "React Developer",
  "Next.js Developer",
];

export const metadata: Metadata = {
  title,
  description,
  keywords,
  creator: "Karan Joshi",
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: title,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
