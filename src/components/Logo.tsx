
import Link from 'next/link';
import { Bot } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Bot className="h-6 w-6 text-primary" />
      <span className="text-xl font-bold tracking-tight text-foreground">
        RealPrompt
      </span>
    </Link>
  );
}
