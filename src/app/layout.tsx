import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import SideNavigation from "@/components/common/navigation/SideNavigation";

// shadcn/ui
import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Todo",
  description: "Todo Supabase",
  openGraph: {
    title: "Todo",
    description: "Todo Supabase",
    images: [{ url: "/thumbnail.png" }],
  },
  other: {
    "naver-site-verification": "208df0f5372346689bf8272c2e8b5ebec7c42cee",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${roboto.variable}  antialiased`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
