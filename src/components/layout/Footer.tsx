import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Separator } from '@/components/ui/separator';
import Script from 'next/script';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = {
    'Company': [
      { href: '/about', label: 'About Us' },
      { href: '/contact', label: 'Contact' },
      { href: '/how-to', label: 'How It Works' },
    ],
    'Legal': [
      { href: '/terms', label: 'Terms of Service' },
      { href: '/privacy', label: 'Privacy Policy' },
    ],
  };

  return (
    <footer className="border-t bg-background">
       <section className="py-8 text-center">
        <div id="container-ad-before-footer-1" className="mb-4"></div>
        <div id="container-ad-before-footer-2" className="mb-4"></div>
        <div id="container-ad-before-footer-3"></div>
        <Script id="ad-loader-footer" strategy="lazyOnload">
          {`
            (function() {
              if (document.getElementById('container-ad-before-footer-1').children.length === 0) {
                var script1 = document.createElement('script');
                script1.async = true;
                script1.src = '//pl28066229.effectivegatecpm.com/7ab5c45246d3dee10fc1028c013d2eb8/invoke.js';
                document.getElementById('container-ad-before-footer-1').appendChild(script1);
              }
              if (document.getElementById('container-ad-before-footer-2').children.length === 0) {
                var script2 = document.createElement('script');
                script2.type = 'text/javascript';
                script2.src = '//pl28066421.effectivegatecpm.com/47/10/1f/47101fe246dc6cc189e86c4a9ac2689b.js';
                document.getElementById('container-ad-before-footer-2').appendChild(script2);
              }
              if (document.getElementById('container-ad-before-footer-3').children.length === 0) {
                var script3 = document.createElement('script');
                script3.type = 'text/javascript';
                script3.src = '//pl28066463.effectivegatecpm.com/5c/0a/e9/5c0ae9b6cca759e2967d0f3972682dc8.js';
                document.getElementById('container-ad-before-footer-3').appendChild(script3);
              }
            })();
          `}
        </Script>
      </section>

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-12 lg:col-span-4">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              The ultimate marketplace for high-quality AI prompts.
            </p>
          </div>
          <div className="md:col-span-12 lg:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-4 md:grid-cols-4 lg:justify-end">
            <div className="sm:col-start-3">
                <p className="font-semibold text-foreground">Company</p>
                <ul className="mt-4 space-y-2">
                  {sections['Company'].map(link => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">Legal</p>
              <ul className="mt-4 space-y-2">
                {sections['Legal'].map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} RealPrompt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
