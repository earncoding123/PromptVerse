'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { prompts } from '@/lib/prompts';
import type { Prompt } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth, useUser } from '@/firebase';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { Logo } from '@/components/Logo';
import { Separator } from '@/components/ui/separator';
import { PromptCard } from '@/components/prompts/PromptCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Head from 'next/head';
import { RelativeTime } from '@/components/prompts/RelativeTime';
import { CopyButton } from '@/components/prompts/CopyButton';

interface PromptPageProps {
  params: {
    slug: string;
  };
}

const getPromptBySlug = (slug: string): Prompt | undefined => {
  return prompts.find(p => p.slug === slug);
};

export default function PromptPage({ params }: PromptPageProps) {
  const { slug } = params;
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const { toast } = useToast();
  const [showAuthModal, setShowAuthModal] = React.useState(false);

  const prompt = getPromptBySlug(slug);

  if (!prompt) {
    notFound();
  }
  
  const relatedPrompts = prompts.filter(p => p.id !== prompt.id).slice(0, 6);

  const handleCopy = () => {
    if (!user && !isUserLoading) {
      setShowAuthModal(true);
    } else if (user) {
      navigator.clipboard.writeText(prompt.content);
      toast({
        title: 'Copied to clipboard!',
        description: 'You can now paste the prompt in your AI tool.',
      });
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setShowAuthModal(false);
      toast({ title: "Signed in successfully!" });
    } catch (error: any) {
      if (error.code !== 'auth/popup-closed-by-user') {
        console.error("Error signing in with Google: ", error);
        toast({
          title: "Uh oh! Something went wrong.",
          description: error.message || "Could not sign in with Google.",
          variant: "destructive"
        });
      }
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: prompt.title,
    description: prompt.description,
    author: {
      '@type': 'Person',
      name: prompt.createdBy.name,
    },
    datePublished: prompt.createdAt,
    keywords: prompt.tags.join(', '),
  };
  
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Prompts',
        item: 'https://promptverse.com/prompts',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: prompt.title,
        item: `https://promptverse.com/prompts/${prompt.slug}`,
      },
    ],
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </Head>
      <div className="container mx-auto max-w-5xl py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="aspect-[4/3] w-full">
                <Image
                src={prompt.coverImage}
                alt={prompt.title}
                width={800}
                height={600}
                className="w-full h-full rounded-lg object-cover shadow-lg"
                priority
                data-ai-hint="prompt cover"
                />
            </div>
          </div>

          <div className="lg:col-span-2">
            <Badge variant="secondary" className="mb-2">{prompt.category}</Badge>
            <h1 className="mb-2 font-headline text-2xl font-bold sm:text-3xl md:text-4xl">
              {prompt.title}
            </h1>
            <p className="mb-4 text-base text-muted-foreground sm:text-lg">
              {prompt.description}
            </p>
            <div className='text-xs text-muted-foreground mb-4'>
                Published <RelativeTime date={prompt.createdAt} /> by {prompt.createdBy.name}
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {prompt.tags.map(tag => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>

            <Card className="bg-card">
              <CardContent className="p-4 sm:p-6">
                <h2 className="mb-4 text-xl font-semibold">Prompt Content</h2>
                <div className="relative">
                  <pre className="whitespace-pre-wrap break-words rounded-md bg-background p-4 font-code text-sm text-foreground">
                    <code>{prompt.content}</code>
                  </pre>
                  <div className="absolute right-2 top-2">
                     <CopyButton onCopy={handleCopy} textToCopy={prompt.content} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="py-12 sm:py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center font-headline text-3xl font-bold">
            You Might Also Like
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-screen-lg"
          >
            <CarouselContent>
              {relatedPrompts.map((relatedPrompt) => (
                <CarouselItem key={relatedPrompt.id} className="sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <PromptCard prompt={relatedPrompt} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:inline-flex" />
            <CarouselNext className="hidden sm:inline-flex" />
          </Carousel>
        </div>
      </div>
      
       <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
        <DialogContent className="max-w-md">
          <DialogHeader className="items-center text-center">
            <Logo />
            <DialogTitle className="text-2xl pt-4">Unlock Full Access</DialogTitle>
            <DialogDescription>
              Join our community to copy and use this prompt.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
             <Button variant="outline" onClick={handleGoogleSignIn}>
                <svg className="mr-2 h-4 w-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48 24.7135C48 22.9395 47.8545 21.2175 47.5455 19.5H24.4905V29.3595H37.899C37.3155 32.535 35.6355 35.19 32.8605 36.9645V42.846H40.239C45.222 38.3115 48 32.0625 48 24.7135Z" fill="#4285F4"/><path d="M24.4909 48.0001C31.2319 48.0001 36.8509 45.8356 40.2394 42.8461L32.8609 36.9646C30.5629 38.5006 27.7369 39.4381 24.4909 39.4381C18.2419 39.4381 12.8719 35.5996 11.0509 30.1246H3.49094V36.1486C6.86294 42.9256 15.0139 48.0001 24.4909 48.0001Z" fill="#34A853"/><path d="M11.0508 30.1245C10.5198 28.641 10.2228 27.0585 10.2228 25.437C10.2228 23.8155 10.5198 22.233 11.0508 20.7495V14.7255H3.49082C1.29182 19.233 0 24.081 0 29.4375C0 34.794 1.29182 39.642 3.49082 44.1495L11.0508 38.1255V30.1245Z" fill="#FBBC05"/><path d="M24.4909 11.4374C28.1899 11.4374 31.4389 12.7244 33.9199 15.0614L40.4489 8.53243C36.8419 5.25143 31.2319 3.00001 24.4909 3.00001C15.0139 3.00001 6.86294 8.07451 3.49094 14.8515L11.0509 20.8755C12.8719 15.4005 18.2419 11.4374 24.4909 11.4374Z" fill="#EA4335"/></svg>
                Continue with Google
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  OR
                </span>
              </div>
            </div>
            <Button asChild>
              <Link href="/signup">Continue with Email</Link>
            </Button>
          </div>
           <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline underline-offset-4 hover:text-primary"
            >
              Log In
            </Link>
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}
