"use client";

import React, { useState } from "react";
import Image from "next/image";

/* ✅ Word by Word Animation (SEO Friendly) */
function AnimatedText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block opacity-0 animate-wordReveal"
          style={{ animationDelay: `${delay + i * 0.05}s` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}

export default function BDGWinPage() {
  const [isDownloading, setIsDownloading] = useState(false);

  // Function to handle APK download
  const handleDownloadAPK = () => {
    setIsDownloading(true);
    
    try {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = '/app-debug.apk';
      link.download = 'bdg-win-app.apk';
      link.setAttribute('type', 'application/vnd.android.package-archive');
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success message
      alert('✅ BDG Win APK download started! Please check your downloads folder.');
    } catch (error) {
      console.error('Download error:', error);
      alert('❌ Download failed. Please try again or contact support.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      {/* ✅ JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is BDG Win?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "BDG Win (Big Daddy Game Win) is a trusted gaming platform in India where users can play games and win real money. It's available online nationwide and offline in Goa casinos."
                }
              },
              {
                "@type": "Question",
                "name": "How to download BDG Win App?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Visit official BDG Win website, click download icon to get APK file. Enable unknown sources in Android settings, then install the app."
                }
              },
              {
                "@type": "Question",
                "name": "What is BDG Win referral code?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Official BDG Win referral code is 56871568759. Use this code during registration to get bonus."
                }
              },
              {
                "@type": "Question",
                "name": "How to login BDG Win?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Visit BDG Win website at https://bdgby.com/#/login, enter phone number and password."
                }
              }
            ]
          })
        }}
      />
      
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "BDG Win App",
      "operatingSystem": "Android",
      "applicationCategory": "GameApplication",
      "description":
        "Official BDG Win App download page. Get BDG Game APK, login guide, bonuses. Play & win real money.",
      "url": "https://www.bdggamelink.in/bdg-win",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "4207",
        "bestRating": "5",
        "worstRating": "1"
      }
    })
  }}
/>


      <main className="relative min-h-screen bg-black text-white font-sans leading-relaxed overflow-hidden">
        {/* ✅ Fixed Background */}
        <div className="fixed inset-0 z-0">
          <Image
            src="/Bdgwin-background.jpg"
            alt="BDG Win Gaming Platform Background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            quality={90}
          />
          {/* Dark overlay directly on image */}
          <div className="absolute inset-0 bg-black/20" />
          {/* Gold gradient overlay */}
          <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-yellow-400/20 via-transparent to-purple-600/20" />
        </div>

        {/* ✅ All content wrapped with relative positioning */}
        <div className="relative z-10">
          {/* ✅ TOP NAVBAR */}
          <div className="w-full bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 border-b border-white/10 backdrop-blur-lg sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
              {/* Left: Header Logo */}
              <div className="flex items-center">
                <Image
                  src="/BDG-Win.png"
                  alt="BDG Win Header Logo"
                  width={140}
                  height={40}
                  priority
                  className="object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.35)]"
                />
              </div>

              {/* Right: Buttons */}
              <div className="flex items-center gap-3">
                {/* ✅ Login Button with URL */}
                <a
                  href="https://bdgby.com/#/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full border border-yellow-400 text-yellow-400 text-sm font-semibold hover:bg-yellow-400 hover:text-black transition"
                >
                  Log in
                </a>

                {/* ✅ Register Button with URL */}
                <a
                  href="https://bdgwind.cc//#/register?invitationCode=56871568759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 text-black text-sm font-bold hover:opacity-90 transition shadow-md hover:shadow-yellow-500/40"
                >
                  Register
                </a>
              </div>
            </div>
          </div>

          {/* ✅ HERO HEADER */}
          <header className="text-center px-5 py-14">
            {/* Background overlay for hero section */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90 -z-10" />
            
            {/* Center Logo */}
            <div className="flex justify-center mb-6 relative z-10">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-2xl bg-yellow-400/20" />
                <Image
                  src="/bdg-logo.jpg"
                  alt="BDG Win gaming platform logo"
                  width={200}
                  height={200}
                  priority
                  className="relative rounded-full shadow-lg border border-yellow-400/40"
                />
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-yellow-400 relative z-10">
              <AnimatedText text="BDG Win" delay={0.1} />
            </h1>

            <p className="max-w-xl mx-auto mb-6 text-white/80 text-base md:text-lg relative z-10">
              <AnimatedText
                text="BDG Win is the most trusted gaming platform in India. It is also available offline in Goa and launched its online platform in 2023."
                delay={0.3}
              />
            </p>

            <h3 className="text-yellow-300 font-semibold mb-6 text-lg relative z-10">
              <AnimatedText text="Register Now & Get Sign Up Reward 🎁" delay={0.6} />
            </h3>

            <nav className="flex flex-wrap justify-center gap-4 mb-8 relative z-10">
              {/* ✅ Register Now Button with URL */}
              <a
                href="https://bdgwind.cc//#/register?invitationCode=56871568759"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black px-7 py-3 rounded-lg font-bold shadow hover:scale-[1.02] transition"
              >
                Register Now
              </a>
              
              {/* ✅ Download App Button - Triggers APK download */}
              <button
                onClick={handleDownloadAPK}
                disabled={isDownloading}
                className={`bg-neutral-800/70 border border-white/10 text-white px-7 py-3 rounded-lg hover:bg-neutral-700 transition backdrop-blur cursor-pointer flex items-center gap-2 ${
                  isDownloading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isDownloading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Downloading...
                  </>
                ) : (
                  'Download App'
                )}
              </button>
            </nav>

            <div className="bg-neutral-900/60 border border-yellow-400/20 rounded-xl max-w-xl mx-auto p-4 backdrop-blur-md shadow-lg relative z-10">
              <p className="text-sm text-white/80">BDG Win Gift Code (Daily New Code)</p>
              <p className="mt-1 font-bold text-yellow-300 break-all">
                2414C8FC5F63B5E691785BD0FEB7CE85
              </p>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <a
                href="https://t.me/ManagerBDG_7"
                className="inline-block bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 rounded-lg font-semibold shadow transition hover:shadow-sky-500/40 relative z-10"
              >
                Telegram Support
              </a>
              
              {/* ✅ Alternative Download Button */}
              <button
                onClick={handleDownloadAPK}
                disabled={isDownloading}
                className={`inline-block bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-lg font-semibold shadow transition hover:shadow-green-500/40 relative z-10 ${
                  isDownloading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isDownloading ? 'Downloading APK...' : 'Download APK File'}
              </button>
            </div>
          </header>

          {/* ✅ CONTENT SECTION */}
          <section className="max-w-5xl mx-auto px-5 py-12 relative">
            {/* Content overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 -z-10" />
            
            <article className="space-y-5 text-white/85 text-[15px] md:text-[16px] relative z-10">
              <p>
                <AnimatedText
                  text="Are you thinking of starting with BDG Win, a gaming platform where you can play games and get rewards? If so, you're in the right place."
                  delay={0.1}
                />
              </p>

              <p>
                <AnimatedText
                  text="Here we'll share all you need to know about the platform from signup to withdrawing your earnings. So no need to look back."
                  delay={0.2}
                />
              </p>

              <p>
                <AnimatedText
                  text="You also have to invest some money in the beginning and add some of your data like mobile numbers and bank details. So it's important to first learn all about the platform and then play safely. It is most trusted platform as it is backed by BDG Game."
                  delay={0.3}
                />
              </p>

              <h2 className="text-center text-black bg-gradient-to-r from-yellow-300 to-yellow-500 py-3 rounded-xl font-extrabold text-xl mt-10 shadow hover:scale-[1.01] transition">
                What Is BDG Win?
              </h2>

              <p>
                BDG Win Game is a gaming platform where you can have fun and earn real
                money. The best part is it offers various games, from classics to new
                favorites so no way to get bored.
              </p>

              <p>
                With its user-friendly interface and seamless accessibility, BDG Win
                becomes a better option compared to other similar platforms.
              </p>

              <p>
                In addition to its games library, BDG Win also offers refer and earn
                programs, where users can invite friends to join the platform and earn
                rewards for successful referrals.
              </p>

              <p>
                Besides all this, it is a safe and secure platform making it a perfect
                choice to cash out real money.
              </p>

              <h2 className="text-center text-black bg-gradient-to-r from-yellow-300 to-yellow-500 py-3 rounded-xl font-extrabold text-xl mt-10 shadow hover:scale-[1.01] transition">
                How To Sign Up On BDG Win?
              </h2>

              <ol className="list-decimal pl-6 space-y-1">
                <li>Visit the official BDG Win Website.</li>
                <li>Click anywhere on the home page to redirect login page.</li>
                <li>Click on the register button below the login button.</li>
                <li>
                  Fill in phone number, password and invitation code{" "}
                  <strong className="text-yellow-300">56871568759</strong>.
                </li>
                <li>Tick mark on privacy agreement.</li>
                <li>Click Register.</li>
              </ol>

              <div className="mt-4 p-4 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-lg">
                <p className="font-bold text-yellow-300 text-center">
                  ⚡ Quick Registration:{" "}
                  <a 
                    href="https://bdgwind.cc//#/register?invitationCode=56871568759" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-yellow-200"
                  >
                    Click here to register instantly with code 56871568759
                  </a>
                </p>
              </div>

              <h2 className="text-center text-black bg-gradient-to-r from-yellow-300 to-yellow-500 py-3 rounded-xl font-extrabold text-xl mt-10 shadow hover:scale-[1.01] transition">
                How To Log In On BDG Win?
              </h2>

              <ol className="list-decimal pl-6 space-y-1">
                <li>Visit the BDG Win website.</li>
                <li>Click anywhere to open login page.</li>
                <li>Enter phone number and password.</li>
                <li>Click Login.</li>
              </ol>

              <div className="mt-4 p-4 bg-gradient-to-r from-blue-400/10 to-blue-600/10 border border-blue-400/30 rounded-lg">
                <p className="font-bold text-blue-300 text-center">
                  🔑 Direct Login:{" "}
                  <a 
                    href="https://bdgby.com/#/login" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-200"
                  >
                    Click here to login to your BDG Win account
                  </a>
                </p>
              </div>

              <h2 className="text-center text-black bg-gradient-to-r from-yellow-300 to-yellow-500 py-3 rounded-xl font-extrabold text-xl mt-10 shadow hover:scale-[1.01] transition">
                How To Download The BDG Win App?
              </h2>

              <ol className="list-decimal pl-6 space-y-1">
                <li>Visit the official BDG Win website.</li>
                <li>Click the download icon.</li>
                <li>APK file will download automatically.</li>
              </ol>

              <div className="mt-4 p-4 bg-gradient-to-r from-green-400/10 to-green-600/10 border border-green-400/30 rounded-lg">
                <p className="font-bold text-green-300 text-center">
                  📥 Direct APK Download:{" "}
                  <button 
                    onClick={handleDownloadAPK}
                    disabled={isDownloading}
                    className={`underline hover:text-green-200 ${isDownloading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    {isDownloading ? 'Downloading...' : 'Click here to download BDG Win APK (app-debug.apk)'}
                  </button>
                </p>
              </div>

              <h2 className="text-center text-black bg-gradient-to-r from-yellow-300 to-yellow-500 py-3 rounded-xl font-extrabold text-xl mt-10 shadow hover:scale-[1.01] transition">
                How To Install BDG Win App?
              </h2>

              <ol className="list-decimal pl-6 space-y-1">
                <li>Enable install from unknown sources in Android settings.</li>
                <li>Locate the downloaded APK file in your downloads.</li>
                <li>Tap Install and wait for installation to complete.</li>
                <li>Open the app and login with your credentials.</li>
              </ol>

              <h2 className="text-center text-black bg-gradient-to-r from-yellow-300 to-yellow-500 py-3 rounded-xl font-extrabold text-xl mt-10 shadow hover:scale-[1.01] transition">
                How To Play Games And Win Rewards?
              </h2>

              <ol className="list-decimal pl-6 space-y-1">
                <li>Login to your BDG Win account.</li>
                <li>Select any game category.</li>
                <li>Place your betting amount.</li>
                <li>Play and predict outcome.</li>
                <li>Winning amount credits instantly.</li>
                <li>Minimum withdrawal is ₹110.</li>
              </ol>

              <h2 className="text-center text-black bg-gradient-to-r from-yellow-300 to-yellow-500 py-3 rounded-xl font-extrabold text-xl mt-10 shadow hover:scale-[1.01] transition">
                How To Refer And Earn Commission?
              </h2>

              <ol className="list-decimal pl-6 space-y-1">
                <li>Login to BDG Win.</li>
                <li>Open Promotion tab.</li>
                <li>Copy referral link or code.</li>
                <li>Share on WhatsApp, Facebook, YouTube.</li>
                <li>Earn commission on every successful referral.</li>
              </ol>

              <h2 className="text-center text-black bg-gradient-to-r from-yellow-300 to-yellow-500 py-3 rounded-xl font-extrabold text-xl mt-10 shadow hover:scale-[1.01] transition">
                How To Withdraw Money?
              </h2>

              <ol className="list-decimal pl-6 space-y-1">
                <li>Go to Wallet.</li>
                <li>Click Withdraw.</li>
                <li>Add bank account.</li>
                <li>Enter amount (minimum ₹110).</li>
                <li>Money transfers within hours.</li>
              </ol>

              <h2 className="text-center text-black bg-gradient-to-r from-yellow-300 to-yellow-500 py-3 rounded-xl font-extrabold text-xl mt-10 shadow hover:scale-[1.01] transition">
                How To Deposit Money?
              </h2>

              <ol className="list-decimal pl-6 space-y-1">
                <li>Open Wallet.</li>
                <li>Click Deposit.</li>
                <li>Select UPI.</li>
                <li>Complete payment.</li>
              </ol>

              <h2 className="text-center text-black bg-gradient-to-r from-yellow-300 to-yellow-500 py-3 rounded-xl font-extrabold text-xl mt-10 shadow hover:scale-[1.01] transition">
                Conclusion
              </h2>

              <p>
                This is everything you need to know before starting BDG Win. From signup
                to withdrawal, the process is straightforward.
              </p>

              <p>Get yourself registered, play responsibly and share your experience.</p>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <a
                  href="https://bdgby.com/#/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-4 rounded-xl font-bold text-center hover:scale-[1.02] transition shadow-lg"
                >
                  🔐 BDG Win Login
                </a>
                
                <a
                  href="https://bdgwind.cc//#/register?invitationCode=56871568759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-4 rounded-xl font-bold text-center hover:scale-[1.02] transition shadow-lg"
                >
                  🎁 Register Now
                </a>
                
                <button
                  onClick={handleDownloadAPK}
                  disabled={isDownloading}
                  className={`bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-4 rounded-xl font-bold text-center hover:scale-[1.02] transition shadow-lg ${
                    isDownloading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  {isDownloading ? '📥 Downloading...' : '📱 Download APK'}
                </button>
              </div>

              <p className="mt-10 text-lg text-center">
                ⭐ Average rating: <strong className="text-yellow-300">4.7 / 5</strong>{" "}
                (4207 votes)
              </p>
            </article>
          </section>

          {/* ✅ FOOTER */}
          <footer className="border-t border-white/10 bg-black/80 py-8 px-4 mt-12">
            <div className="max-w-5xl mx-auto text-center">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
                <a
                  href="https://bdgby.com/#/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition"
                >
                  BDG Win Login
                </a>
                
                <a
                  href="https://bdgwind.cc//#/register?invitationCode=56871568759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:opacity-90 transition"
                >
                  Register with Code 56871568759
                </a>
                
                <button
                  onClick={handleDownloadAPK}
                  disabled={isDownloading}
                  className={`px-6 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white hover:opacity-90 transition ${
                    isDownloading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  {isDownloading ? 'Downloading...' : 'Download APK File'}
                </button>
              </div>
              
              <p className="text-white/60 text-sm">
                © 2025 BDG Win. All rights reserved. | 
                <a href="#privacy" className="hover:text-yellow-400 ml-2">Privacy Policy</a> | 
                <a href="#terms" className="hover:text-yellow-400 ml-2">Terms & Conditions</a> | 
                <a href="#contact" className="hover:text-yellow-400 ml-2">Contact Support</a>
              </p>
              <p className="text-white/40 text-xs mt-4">
                Disclaimer: BDG Win is for entertainment purposes only. Play responsibly. Must be 18+ to participate.
              </p>
            </div>
          </footer>
        </div>

        {/* ✅ Animation styles */}
        <style jsx>{`
          @keyframes wordReveal {
            0% {
              opacity: 0;
              transform: translateY(8px);
              filter: blur(4px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          .animate-wordReveal {
            animation: wordReveal 0.5s ease forwards;
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </main>
    </>
  );
}