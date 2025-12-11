import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import StarsClient from "@/components/StarsClient";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Asjad Reza — Portfolio",
  description:
    "Asjad Reza — Full-stack developer. Portfolio showcasing web projects, experience, and contact details.",
  keywords: [
    "Asjad Reza",
    "Asjad Reza portfolio",
    "Asjad Reza developer",
    "software engineer",
    "web developer",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Asjad Reza", url: "https://asjadreza.dev" }],
  metadataBase: new URL("https://asjadreza.dev"),
  alternates: { canonical: "https://asjadreza.dev" },
  openGraph: {
    title: "Asjad Reza — Portfolio",
    description:
      "Asjad Reza — Full-stack developer. Portfolio showcasing web projects, experience, and contact details.",
    url: "https://asjadreza.dev",
    siteName: "Asjad Reza",
    type: "website",
    images: [
      {
        url: "https://asjadreza.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Asjad Reza — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asjad Reza — Portfolio",
    description:
      "Asjad Reza — Full-stack developer. Portfolio showcasing web projects, experience, and contact details.",
    images: ["https://asjadreza.dev/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}`}
      >
        <StarsClient />
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="dark"        
          closeOnClick
          pauseOnHover
          draggable
        />
      </body>
    </html>
  );
}
