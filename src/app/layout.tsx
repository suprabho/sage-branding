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
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600;1,9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600&family=Sora:wght@400;600;700&family=DM+Sans:wght@400;500;600&family=Besley:ital,wght@0,400;0,700;1,400;1,700&family=Nunito:wght@400;600;700&display=swap"
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
