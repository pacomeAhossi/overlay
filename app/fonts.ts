import localFont from "next/font/local";

export const inter = localFont({
  src: [
    {
      path: "../public/fonts/inter/web/InterVariable.woff2",
      weight: "300 400 500 700 900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});
