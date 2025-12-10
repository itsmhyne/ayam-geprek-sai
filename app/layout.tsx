import type { Metadata } from "next";
import { Great_Vibes, Inter, Roboto } from "next/font/google";
import "./globals.css";
import HeaderWebsite from "@/components/website/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/website/AppSidebar";
import Footer from "@/components/website/Footer";

const robotoSans = Inter({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: "500",
});

const spaceMono = Roboto({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: "400",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ayam Geprek Sa'i - PT. Ukhuwah Berkah Semesta",
  description: "Kenikmatan dalam Kesederhanaan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${robotoSans.className} ${spaceMono.className} ${greatVibes.variable} antialiased`}
      >
        <SidebarProvider className="flex gap-[2%] flex-wrap content-start">
          <div className="w-full h-[5%]">
            <HeaderWebsite />
          </div>
          <div className="w-1/4 h-3/4 z-50 lg:hidden">
            <AppSidebar />
          </div>
          <div className="grow h-3/4 w-full">{children}</div>
          <div className="w-full h-[5%]">
            <Footer />
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}

// Author : M. Hamdan Yusuf 😎
