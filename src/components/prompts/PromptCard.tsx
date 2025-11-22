import Image from 'next/image';
import Link from 'next/link';
import type { Prompt } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface PromptCardProps {
  prompt: Prompt;
}

export function PromptCard({ prompt }: PromptCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-card border">
      <CardHeader className="p-0">
        <Link href={`/prompts/${prompt.slug}`} className="block overflow-hidden">
          <Image
            src={prompt.coverImage}
            alt={prompt.title}
            width={600}
            height={400}
            data-ai-hint="cover image"
            className="aspect-[3/2] w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <div className="mb-2 flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-xs">
              {prompt.category}
          </Badge>
        </div>
        <h3 className="mb-2 font-headline text-lg font-semibold leading-snug">
          <Link href={`/prompts/${prompt.slug}`} className="hover:text-primary">
            {prompt.title}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {prompt.description}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <Button asChild size="sm" variant="ghost" className="text-primary hover:text-primary w-full justify-center">
          <Link href={`/prompts/${prompt.slug}`}>
            View Prompt <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
