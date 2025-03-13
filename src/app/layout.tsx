import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HeartGuard",
  description: "Health News & Articles Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        {/* Added pt-[64px] and md:pt-[80px] for proper spacing */}
        <div className="pt-[64px] md:pt-[80px]">
          <main className="container mx-auto p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
