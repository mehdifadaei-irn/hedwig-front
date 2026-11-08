import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const vazirmatn = localFont({
  src: [
    { path: "../../public/fonts/Vazirmatn-Thin.ttf", weight: "100" },
    { path: "../../public/fonts/Vazirmatn-ExtraLight.ttf", weight: "200" },
    { path: "../../public/fonts/Vazirmatn-Light.ttf", weight: "300" },
    { path: "../../public/fonts/Vazirmatn-Regular.ttf", weight: "400" },
    { path: "../../public/fonts/Vazirmatn-Medium.ttf", weight: "500" },
    { path: "../../public/fonts/Vazirmatn-SemiBold.ttf", weight: "600" },
    { path: "../../public/fonts/Vazirmatn-Bold.ttf", weight: "700" },
    { path: "../../public/fonts/Vazirmatn-ExtraBold.ttf", weight: "800" },
    { path: "../../public/fonts/Vazirmatn-Black.ttf", weight: "900" },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
});

const SITE_URL = "https://hedwig.com"; // Replace with your domain

export const metadata: Metadata = {
  title: {
    default: "هدویگ | پت شاپ آنلاین و خرید لوازم حیوانات خانگی",
    template: "%s | هدویگ",
  },

  description:
    "در پت شاپ آنلاین هدویگ، انواع غذای سگ و گربه، تشویقی، اسباب بازی، لوازم بهداشتی و اکسسوری حیوانات خانگی را با تنوع بالا مشاهده و خریداری کنید.",

  applicationName: "هدویگ",

  keywords: [
    "هدویگ",
    "Hedwig",
    "پت شاپ",
    "پت شاپ آنلاین",
    "خرید لوازم حیوانات خانگی",
    "فروشگاه حیوانات خانگی",
    "خرید غذای سگ",
    "خرید غذای گربه",
    "غذای خشک سگ",
    "غذای خشک گربه",
    "تشویقی سگ و گربه",
    "اسباب بازی حیوانات خانگی",
    "لوازم بهداشتی حیوانات",
    "لوازم سگ و گربه",
    "pet shop",
    "pet supplies",
  ],

  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "هدویگ",
    title: "هدویگ | پت شاپ آنلاین",
    description:
      "هر آنچه حیوان خانگی شما نیاز دارد، از غذا و تشویقی تا اسباب بازی و لوازم نگهداری، در فروشگاه آنلاین هدویگ پیدا کنید.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "shopping",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
