import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Nandu Kannan M — Microsoft Fabric Data Engineer",
  description:
    "Microsoft Fabric Data Engineer @ TCS. DP-700 + PL-300 certified. Builds Lakehouses, PySpark pipelines, Power BI semantic models — and multi-agent AI systems on the side.",
  keywords: [
    "Microsoft Fabric",
    "Data Engineer",
    "DP-700",
    "PL-300",
    "PySpark",
    "Power BI",
    "Lakehouse",
    "OneLake",
    "Bengaluru",
    "Nandu Kannan",
  ],
  authors: [{ name: "Nandu Kannan M" }],
  openGraph: {
    title: "Nandu Kannan M — Microsoft Fabric Data Engineer",
    description:
      "DP-700 certified Fabric DE @ TCS. Alteryx → Fabric migration lead. AI agentic builder.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#05070d] text-slate-100 selection:bg-teal-400/30">
        {children}
      </body>
    </html>
  );
}
