
import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster"
import { FirebaseClientProvider } from '@/firebase';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://promptverse.com'),
  title: {
    default: 'RealPrompt - The Ultimate AI Prompt Marketplace',
    template: '%s | RealPrompt',
  },
  description: 'Discover, share, and sell high-quality AI prompts for art, writing, marketing, and more. Unleash your creativity with RealPrompt, the ultimate marketplace for Midjourney, DALL-E, and ChatGPT prompts.',
  keywords: ['AI prompts', 'prompt marketplace', 'Midjourney prompts', 'ChatGPT prompts', 'DALL-E prompts', 'prompt engineering'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Source+Code+Pro&display=swap" rel="stylesheet" />
        
        <link rel="icon" href="https://i.postimg.cc/g0wGZ60v/Whats-App-Image-2025-11-12-at-3-55-37-PM.jpg" type="image/png" />
        <link rel="shortcut icon" href="https://i.postimg.cc/g0wGZ60v/Whats-App-Image-2025-11-12-at-3-55-37-PM.jpg" />
        <link rel="apple-touch-icon" href="https://i.postimg.cc/g0wGZ60v/Whats-App-Image-2025-11-12-at-3-55-37-PM.jpg" />
        
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-152E61H6PK" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-152E61H6PK');
          `}
        </Script>
      </head>
      <body className="font-body antialiased">
        <FirebaseClientProvider>
          <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            <div className="flex flex-1">
              <main className="flex-1">{children}</main>
            </div>
            <Footer />
          </div>
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
