import type {Metadata} from "next";
import "../styles/tailwind.css";
import React from "react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Profiley",
  description: "Create and share your own profile!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-slate-50 dark:bg-slate-950 flex flex-col min-h-screen">
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer className="flex-shrink-0"/>
      </body>
    </html>
  );
}