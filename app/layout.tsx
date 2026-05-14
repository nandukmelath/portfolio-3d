import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  axes: ["opsz", "SOFT"],
});

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
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0a] text-zinc-200 selection:bg-zinc-200 selection:text-zinc-950">
        {children}
      </body>
    </html>
  );
}
