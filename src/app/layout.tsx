import type {Metadata} from "next";
import "../styles/tailwind.css";
import React from "react";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
