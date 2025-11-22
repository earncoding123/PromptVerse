
import Link from 'next/link';
import { prompts } from '@/lib/prompts';
import { PromptCard } from '@/components/prompts/PromptCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import React from 'react';

export default function Home() {
  const featuredPrompts = prompts.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b py-20 md:py-32">
         <div 
          className="absolute left-1/2 top-0 -z-10 h-full w-full -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(124,58,237,0.15)_0%,rgba(255,255,255,0)_100%)]"
        />
        <div className="container relative z-20">
          <div className="mx-auto max-w-3xl text-center">
             <div className="mb-4 flex justify-center">
                <Link href="/prompts" className="inline-flex items-center gap-x-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary transition-colors hover:bg-primary/20">
                    <Sparkles className="h-4 w-4" />
                    <span className="font-medium">Explore the new prompt library</span>
                    <ArrowRight className="h-4 w-4" />
                </Link>
             </div>
            <h1 className="mb-4 font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Unleash Your Creativity with RealPrompt
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Discover and share the best AI prompts for art, writing, marketing, and more. Your next masterpiece starts here.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/prompts">
                  Explore Prompts <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/how-to">How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Prompts Section */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Prompts
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPrompts.map(prompt => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/prompts">View All Prompts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
