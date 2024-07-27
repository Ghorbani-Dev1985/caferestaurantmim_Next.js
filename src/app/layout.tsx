import "../../public/styles/globals.css";
import { ShabnamFont } from "@/utils/font";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { NextUIProvider, Spinner } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import { ReactNode, Suspense } from "react";
import { Metadata } from "next";
import ReactQueryProvider from "./Providers";
import Header from "src/common/Header/Header";
import PreFooter from "src/common/Footer/PreFooter";
import Footer from "src/common/Footer/Footer";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "کافه و رستوران میم | Cafe Restaurant mim",
  description:
    "کافه و رستوران میم با محیطی زیبا در خیابان لاکانی رشت آماده پذیرایی شما عزیزان می باشد ، امیدواریم لحظات خوبی را کنار هم داشته باشیم",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={ShabnamFont.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/images/icon/icon-32x32.webp"
          type="image/webp"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/images/icon/icon-192x192.webp"
          type="image/webp"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="/images/icon/icon-180x180.webp"
          type="image/webp"
        />
        <GoogleTagManager
          gtmId={`GTM-${process.env.NEXT_PUBLIC_GOOGLETAGMANAGER_ID}`}
        />
        <GoogleAnalytics
          gaId={`GTM-${process.env.NEXT_PUBLIC_GOOGLEANALYTICS_ID}`}
        />
      </head>
      <body>
        <ReactQueryProvider>
          <NextUIProvider>
          <NextTopLoader
              color="#c58c3d"
              initialPosition={0.08}
              crawlSpeed={200}
              height={4}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
            />
            <Toaster />
            <Header />
            <main className="flex flex-col items-center justify-center my-7">
              {children}
            </main>
            <PreFooter />
            <Footer />
          </NextUIProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
