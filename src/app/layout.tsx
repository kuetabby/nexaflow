import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ScrollToTop from "@/components/sections/scrollToTop";
import ThemeSwitch from "@/components/sections/themeSwitch";
import Loading from "@/components/ui/loading";

export const metadata: Metadata = {
  title: "NexaFlow - Creative Portfolio Showcase Template",
  description: "NexaFlow - Creative Portfolio Showcase Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Loading />
        <Header />
        {children}
        <Footer />
        <ThemeSwitch />
        <ScrollToTop />
      </body>
    </html>
  );
}
