import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import NavBar from "./NavBar";
import AnimatedDiv from "./components/AnimatedDiv";
import FlareCursor from "./components/FlareCursor";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FilmFlicker",
  description:
    "Discover and explore movies effortlessly with FilmFlicker. Your go-to platform for cinematic wonders.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`p-5 max-w-[1280px] mx-auto ${inter.className}`}>
        <AnimatedDiv>
          <FlareCursor />
          <NextTopLoader color="violet" />
          <ThemeProvider attribute="class" defaultTheme="dark">
            <NavBar />
            {children}
          </ThemeProvider>
          <Toaster />
        </AnimatedDiv>
      </body>
    </html>
  );
}

// color={"linear-gradient(26deg,#45caff 41%,#f41bff 47%)"}
