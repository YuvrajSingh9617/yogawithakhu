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
  title: "Personal Yoga Classes in Salt Lake, Kolkata – Online & Offline | Certified Yoga Instructor",
  description:
    "Join personalized yoga classes in Salt Lake, Kolkata with a certified instructor. Available both online and offline. Enhance your flexibility, strength, and mindfulness with sessions at your convenience.",
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
    "Private Yoga Sessions",
    "Yoga in Salt Lake Kolkata",
    "Kolkata Yoga Instructor",
    "Personal Yoga Trainer Salt Lake"
  ],
  openGraph: {
    title: "Personal Yoga Classes in Salt Lake, Kolkata – Online & Offline",
    description:
      "Transform your health with yoga classes in Salt Lake, Kolkata — available online and offline. Tailored personal yoga sessions by a certified trainer. Book now!",
    url: "https://yogawithakhu.vercel.app",
    type: "website",
    images: [
      {
        url: "https://yogawithakhu.vercel.app/logo/logo.webp",
        width: 1200,
        height: 630,
        alt: "Yoga with Akhu – Personal Yoga Class in Salt Lake Kolkata"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Yoga Classes in Salt Lake, Kolkata – Online & Offline",
    description:
      "Get fit and find inner peace with personal yoga sessions in Salt Lake, Kolkata – available online and offline. Schedule your class today.",
    images: ["https://yogawithakhu.vercel.app/logo/logo.webp"]
  },
  metadataBase: new URL("https://yogawithakhu.vercel.app"), // base Vercel URL
  alternates: {
    canonical: "https://yogawithakhu.vercel.app",
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
