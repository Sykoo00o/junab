'use client'

import { Inter } from "next/font/google";
import "@/public/assets/libs/tiny-slider/tiny-slider.css";
import "@/public/assets/libs/tobii/css/tobii.min.css";
import "@/public/assets/libs/choices.js/public/assets/styles/choices.min.css";
import "@/public/assets/libs/swiper/css/swiper.min.css";
import "@/public/assets/libs/@iconscout/unicons/css/line.css";
import "@/public/assets/libs/@mdi/font/css/materialdesignicons.min.css";
import "@/public/assets/css/tailwind.min.css";
import "@/public/assets/css/font.css";
import Script from "next/script";
import BackToTop from "@/components/BackToTop";
import ThemeSwitch from "@/components/ThemeSwitch";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState(false);

  return (
    <html
      lang="en"
      className={`${theme === false ? "dark" : "light"} scroll-smooth`}
      dir="ltr"
    >
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>

      <body className="dark:bg-slate-900">
        {children}

        {/* Adsense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4421482351262183"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        {/* Other Scripts */}
        <Script src="/assets/libs/tiny-slider/min/tiny-slider.js" />
        <Script src="/assets/libs/tobii/js/tobii.min.js" />
        <Script src="/assets/libs/choices.js/public/assets/scripts/choices.min.js" />
        <Script src="/assets/libs/swiper/js/swiper.min.js" />
        <Script src="/assets/js/easy_background.js" />
        <Script src="/assets/libs/feather-icons/feather.min.js" />
        <Script src="/assets/js/plugins.init.js" />
        <Script src="/assets/js/app.js" />

        <BackToTop />
        <ThemeSwitch setTheme={setTheme} theme={theme} />
      </body>
    </html>
  );
}
