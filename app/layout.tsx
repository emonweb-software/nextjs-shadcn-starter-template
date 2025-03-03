import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import "./globals.css";

const geistSans = localFont({
  src: "../public/assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../public/assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SEO_TITLE || "Default Title",
  description: process.env.NEXT_PUBLIC_SEO_DESCRIPTION || "Default Description",
  keywords: process.env.NEXT_PUBLIC_SEO_KEYWORDS || "default,keywords",
  openGraph: {
    title: process.env.NEXT_PUBLIC_SEO_TITLE || "Default OG Title",
    description:
      process.env.NEXT_PUBLIC_SEO_DESCRIPTION || "Default OG Description",
    images: process.env.NEXT_PUBLIC_OG_IMAGE
      ? [process.env.NEXT_PUBLIC_OG_IMAGE]
      : [],
    type: "website",
    url: process.env.NEXT_PUBLIC_OG_URL || "https://default.url",
  },
  twitter: {
    card: "summary_large_image",
    title: process.env.NEXT_PUBLIC_SEO_TITLE || "Default Twitter Title",
    description:
      process.env.NEXT_PUBLIC_SEO_DESCRIPTION || "Default Twitter Description",
    images: process.env.NEXT_PUBLIC_SEO_TWITTER_IMAGE
      ? [process.env.NEXT_PUBLIC_SEO_TWITTER_IMAGE]
      : [],
    creator: process.env.NEXT_PUBLIC_SEO_TWITTER_CREATOR || "@defaultcreator",
  },
  icons: {
    icon: [
      {
        url: "/assets/favicon.ico",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "/assets/apple-icon.png",
        sizes: "180x180",
      },
    ],
    shortcut: "/assets/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<React.ReactElement> {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale}>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <NextThemesProvider
            disableTransitionOnChange
            enableSystem
            attribute="class"
            defaultTheme="system">
            {children}
          </NextThemesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
