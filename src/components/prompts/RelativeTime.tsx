
'use client';

import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

interface RelativeTimeProps {
  date: string;
}

export function RelativeTime({ date }: RelativeTimeProps) {
  const [relativeTime, setRelativeTime] = useState('');

  useEffect(() => {
    // This effect runs only on the client, after hydration
    setRelativeTime(formatDistanceToNow(new Date(date), { addSuffix: true }));
  }, [date]);

  // Render nothing on the server and during the initial client render
  if (!relativeTime) {
    return null; 
  }

  // Render the relative time once it's calculated on the client
  return <>{relativeTime}</>;
}
