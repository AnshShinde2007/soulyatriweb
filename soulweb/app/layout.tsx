// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Nav"; // adjust if your folder is different

export const metadata: Metadata = {
  title: "SoulYatri",
  description: "Mental health platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="pt-20">{children}</main>{" "}
        {/* pushes below fixed navbar */}
      </body>
    </html>
  );
}
