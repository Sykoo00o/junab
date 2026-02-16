import { Inter } from "next/font/google";
import Script from "next/script":

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
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  other: {
    "google-adsense-account": "ca-pub-4421482351262183",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <body className={`${inter.className} dark:bg-slate-900`}>

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4421482351262183"
          crossOrigin="anonymous"
        />

        <ClientLayout>
          {children}
        </ClientLayout>

      </body>
    </html>
  );
}
