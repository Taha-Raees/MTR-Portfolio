// src/layouts/RootLayout.js

import { Inter } from "next/font/google";
import "./globals.css";
import { GA_TRACKING_ID } from '../lib/gtag';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MTR Portfolio",
  description: "Muhammad Taha Raees portfolio showcasing my projects and my education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
