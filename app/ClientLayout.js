'use client';

import { useState } from "react";
import Script from "next/script";
import BackToTop from "@/components/BackToTop";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function ClientLayout({ children }) {
  const [theme, setTheme] = useState(false);

  return (
    <div className={`${theme ? "light" : "dark"} scroll-smooth`}>

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

    </div>
  );
}
