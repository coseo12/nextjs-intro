import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import "@/styles/_reset.css";
import "@/styles/_globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const myFonts = localFont({
  src: [
    {
      path: "../assets/fonts/Pretendard-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-ExtraLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <main className={myFonts.className}>
      <Component {...pageProps} />
    </main>
  );
}
