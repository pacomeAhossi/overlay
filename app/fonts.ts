import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// export const satoshi = localFont({
//   src: [
//     {
//       path: "../public/fonts/Satoshi-Variable.woff2",
//       weight: "300 400 500 700 900",
//       style: "normal",
//     },
//   ],
//   variable: "--font-satoshi",
//   display: "swap",
// });
