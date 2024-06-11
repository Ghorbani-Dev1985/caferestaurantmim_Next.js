"use client"
import "@/Styles/globals.css";
import Header from "@/UI/Header";
import PreFooter from "@/UI/PreFooter";
import Footer from "@/UI/Footer";
import {ShabnamFD} from '../../Constants/LocalFonts'
import {Shabnam} from '../../Constants/LocalFonts'
import AuthProvider from "src/Context/AuthContext";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import { ReactNode } from "react";
export default function RootLayout({ children } : {children : ReactNode}) {
  return (
    <html lang="fa" dir="rtl" className={`${ShabnamFD.variable} ${Shabnam.variable} font-sans`}>
      <head>
       <meta name="description" content="پیش غذا سوپ قارچ و مرغ 80,000 تومان فیله مرغ،قارچ،پیاز،سیر،خامه،شیر،نشاسته،جعفری،لیموترش نان سیر 150,000 تومان خمیر پیتزا،پنیر میکس،سس سیر،تخمه آفتابگردان،جعفری ساطوری،سس آیولی فرنچ فرایز 95,000 تومان سیب زمینی مزه دار شده،سس فرانسوی مخصوص وایت فرایز 180,000 تومان سیب زمینی مزه دار شده،سس قارچ،سس دیپ پنیر،پودر پنیر پارمسان مزرعه سیب زمینی 190,000 تومان سیب زمینی سرخ شده،ژامبون [&hellip;]"/>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
      />
       <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');
          `,
        }}
      />
      </head>
      <body>
        <AuthProvider>
        <NextUIProvider>
        <Toaster />
        <Header />
        {children}
        <PreFooter />
        <Footer />
        </NextUIProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
