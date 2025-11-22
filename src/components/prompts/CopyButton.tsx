'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

interface CopyButtonProps {
  textToCopy: string;
  onCopy: (text: string) => void;
}

export function CopyButton({ textToCopy, onCopy }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handlePress = () => {
    onCopy(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Button onClick={handlePress} aria-label="Copy prompt text" variant="secondary" size="sm">
      {isCopied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
      {isCopied ? 'Copied' : 'Copy'}
    </Button>
  );
}
