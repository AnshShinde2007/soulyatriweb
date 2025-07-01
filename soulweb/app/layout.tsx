// app/layout.tsx
import "./globals.css"; // if you're using Tailwind CSS or global styles
import React from "react";

export const metadata = {
  title: "SoulYatri",
  description: "Mental health platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
