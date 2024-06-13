import "weather-icons/css/weather-icons.min.css";
import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { BookMarkedIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ThemeProvider } from "next-themes";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const metadata: Metadata = {
  title: "Weather",
  description: "Weather app with Next.js and OpenWeather API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 border-b z-50 bg-background/90 backdrop-blur">
            <div className="container max-w-screen-lg flex items-center h-14">
              <div className="flex gap-2 ml-auto">
                <ModeToggle />
                <Button className="font-semibold" asChild>
                  <Link href="https://github.com/oktay/weather" target="_blank">
                    <BookMarkedIcon size={18} className="mr-2" />
                    Source Code
                  </Link>
                </Button>
              </div>
            </div>
          </header>
          <main className="py-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
