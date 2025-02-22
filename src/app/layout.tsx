"use client";

import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { LightNodeProvider } from "@waku/react";
import { Protocols } from "@waku/sdk";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LightNodeProvider
      options={{defaultBootstrap: true}}
      protocols={[Protocols.Filter, Protocols.LightPush]}
    >
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </LightNodeProvider>
  );
}
