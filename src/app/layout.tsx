import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tonmoy",
  description: "Tonmoy's portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
