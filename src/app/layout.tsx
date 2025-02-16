import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import Navbar from "@/components/Navbar";
import DarkModeProvider from "@/context/DarkModeContext";
import { Toaster } from "sonner";
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import ConditionalFooter from "./ConditionalFooter";
import Provider from "@/context/Provider";

export const metadata: Metadata = {
  title: "fardeen",
  description: "Fardeen Mansoori is a Full Stack Developer specializing in building impactful web applications from scratch. Explore his portfolio to see my projects and skills.",
  keywords: "Fardeen Mansoori, Full Stack Developer, Web Developer, Portfolio, JavaScript, TypeScript, React, Node.js, software engineer",
  authors: [{ name: "Fardeen Mansoori" }],
  openGraph: {
    title: "fardeen",
    description: "Explore the portfolio of Fardeen Mansoori, showcasing innovative web applications and development skills.",
    url: "https://fardeen.tech",
    siteName: "fardeen",
    images: [
      {
        url: "https://res.cloudinary.com/dl27j0qcm/image/upload/v1739721063/gradii-3840x2160_3_jqk2nt.png",
        width: 400,
        height: 200,
        alt: "fardeen",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <DarkModeProvider>
          <body className={`bg-white dark:bg-black`}>
            <Toaster position='bottom-right' />
            <Theme className="dark:!bg-black">
              <Navbar />
              {children}
              <Analytics />
              <ConditionalFooter />
            </Theme>
          </body>
        </DarkModeProvider>
      </Provider>
    </html>
  );
}