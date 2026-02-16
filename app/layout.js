'use client';

import { Inter } from "next/font/google";
import Script from "next/script";
import { useState } from "react";

// Global styles
import "@/public/assets/libs/tiny-slider/tiny-slider.css";
import "@/public/assets/libs/tobii/css/tobii.min.css";
import "@/public/assets/libs/choices.js/public/assets/styles/choices.min.css";
import "@/public/assets/libs/swiper/css/swiper.min.css";
import "@/public/assets/libs/@iconscout/unicons/css/line.css";
import "@/public/assets/libs/@mdi/font/css/materialdesignicons.min.css";
import "@/public/assets/css/tailwind.min.css";
import "@/public/assets/css/font.css";

// Components
import BackToTop from "@/components/BackToTop";
import ThemeSwitch from "@/components/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState(false);

  return (
    <html
      lang="en"
      dir="ltr"
      className={`${theme ? "light" : "dark"} scroll-smooth`}
    >
      <head>
        {/* Google AdSense verification */}
        <meta
          name="google-adsense-account"
          content="ca-pub-4421482351262183"
        />

        <link rel="icon" href="/favicon.png" />
      </head>

      <body className={`${inter.className} dark:bg-slate-900`}>
        {/* Google AdSense script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4421482351262183"
          crossOrigin="anonymous"
        />

        {children}

        {/* JS Libraries */}
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
