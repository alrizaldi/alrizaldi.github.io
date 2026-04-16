import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Rizaldi Akbar - Full Stack Developer",
  description:
    "Personal portfolio and blog of Rizaldi Akbar, a full stack developer passionate about building elegant solutions with clean code.",
  authors: [{ name: "Rizaldi Akbar" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Rizaldi Akbar - Full Stack Developer",
    description: "Personal portfolio and blog of Rizaldi Akbar",
    type: "website",
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
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
