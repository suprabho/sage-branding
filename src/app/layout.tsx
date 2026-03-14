import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sage — Brand Showcase",
  description: "Design system explorations for Sage, your personalized AI parenting partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts loaded via link tags */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600;1,9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600&family=Space+Mono:wght@400;700&family=Inter+Tight:wght@400;500;600;700&family=Archivo:ital,wdth,wght@0,62..125,400..700;1,62..125,400..700&family=Lexend+Deca:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        data-theme="morning-light"
        className="antialiased"
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
