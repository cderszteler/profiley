import type {Metadata} from "next";
import "../styles/tailwind.css";
import React from "react";
import Footer from "@/components/Footer";
import getSession from "@/lib/auth";
import ServerSessionProvider from "@/components/ServerSessionProvider";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Profiley",
  description: "Create and share your own profile!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession()

  return (
    <html lang="en" className="h-full">
      <body className="bg-slate-50 dark:bg-slate-950 flex flex-col min-h-screen">
        <ServerSessionProvider session={session}>
          <Header/>
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer className="flex-shrink-0"/>
        </ServerSessionProvider>
      </body>
    </html>
  );
}