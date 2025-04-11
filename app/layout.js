import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_Component/navbar";
import Footer from "./_Component/footer";
import Logo from '@/public/logo/logo.webp';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Personal Yoga Classes – Online & Offline | Certified Yoga Instructor",
  description:
    "Join personalized yoga classes with a certified instructor. Available both online and offline. Improve flexibility, strength, and mindfulness at your convenience.",
  keywords: [
    "Yoga Classes",
    "Online Yoga",
    "Offline Yoga",
    "Personal Yoga Instructor",
    "Yoga Trainer",
    "Home Yoga Sessions",
    "Live Yoga Online",
    "Yoga for Beginners",
    "Advanced Yoga",
    "Private Yoga Sessions"
  ],
  openGraph: {
    title: "Personal Yoga Classes – Online & Offline",
    description:
      "Transform your health with online and offline yoga classes tailored to your needs. Book your personal yoga trainer today.",
    url: "https://yogawithakhu.vercel.app", // replace with your actual Vercel URL
    type: "website",
    images: [
      {
        url: "https://yogawithakhu.vercel.app/logo/logo.webp", // replace with your actual image path
        width: 1200,
        height: 630,
        alt: "Personal Yoga Class – Online and Offline"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Yoga Classes – Online & Offline",
    description:
      "Get fit and find inner peace with personal yoga sessions – available online and offline. Schedule your class today.",
    images: ["https://yogawithakhu.vercel.app/logo/logo.webp"]
  },
  metadataBase: new URL("https://yogawithakhu.vercel.app"), // base Vercel URL
  alternates: {
    canonical: "https://yogawithakhu.vercel.app", // canonical link for SEO
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
