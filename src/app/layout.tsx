import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BDG Win APK Download 2025 | BDG Game App - Play & Win Real Money",
  description: "🎮 Download BDG Win App (APK 2025) - India's #1 gaming platform. Play games, win real money with ₹999 signup bonus. Instant withdrawal, 24/7 support. Safe & legal in India.",
  
  // ✅ Critical for ASO & SEO
  keywords: [
    "BDG Win",
    "BDG Win APK",
    "BDG Win App",
    "BDG Game",
    "Big Daddy Game",
    "BDG Win Download",
    "BDG Win Login",
    "BDG Win Registration",
    "Win Real Money",
    "Gaming App India",
    "Online Casino India",
    "BDG Win 2025",
    "BDG Win Latest Version",
    "BDG Win Bonus",
    "BDG Win Referral Code",
    "BDG Win Withdrawal"
  ],
  
  // ✅ Open Graph for Social Sharing
  openGraph: {
    title: "🎮 BDG Win APK Download 2025 | Play & Earn ₹10,000+ Daily",
    description: "Download BDG Win App - India's most trusted gaming platform. Register with code 56871568759 for ₹999 bonus! Instant withdrawal, 24/7 support.",
    url: "https://bdgwin.in",
    siteName: "BDG Win Official",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/bdg-win-og-image.jpg", // Create this 1200x630px image
        width: 1200,
        height: 630,
        alt: "BDG Win - Play Games & Win Real Money",
      },
    ],
  },
  
  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "BDG Win APK Download 2025 | Win Real Money",
    description: "🎮 Download BDG Win App - Get ₹999 bonus! Play & withdraw instantly. #BDGWin #GamingApp",
    images: ["/bdg-win-twitter-card.jpg"], // Create 1200x600px
    creator: "@bdgwin_official",
  },
  
  // ✅ App Store Optimization (ASO) Elements
  authors: [{ name: "BDG Win Team" }],
  creator: "BDG Win Gaming Platform",
  publisher: "BDG Win",
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: false,
    url: true,
  },
  
  // ✅ Mobile Optimization
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  
  // ✅ Theme Color for Mobile Browsers
  themeColor: "#fbbf24", // Yellow-400 color
  
  // ✅ Apple Specific
  appleWebApp: {
    capable: true,
    title: "BDG Win",
    statusBarStyle: "black-translucent",
  },
  
  // ✅ Additional Meta Tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // ✅ Verification Tags (Add when you get these)
 
  
  // ✅ Structured Data (Also add in page)

  
  // ✅ App Links for Deep Linking
  appLinks: {
    
    android: {
      package: "com.big.daddy.game.bdg.win",
      url: "https://big-daddy-game-bdg-win.en.softonic.com/android",
    },
    web: {
      url: "https://www.bdggamelink.in/bdg-win",
      should_fallback: true,
    },
  },
  
  // ✅ Category (Important for ASO)
  category: "entertainment",
  
  // ✅ Additional Metadata
  manifest: "/manifest.json", // Create PWA manifest
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
