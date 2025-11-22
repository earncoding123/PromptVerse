
import { MetadataRoute } from 'next'
import { prompts } from '@/lib/prompts';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://promptverse.com';

  const promptUrls = prompts.map((prompt) => ({
    url: `${siteUrl}/prompts/${prompt.slug}`,
    lastModified: new Date(prompt.createdAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const staticUrls = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteUrl}/prompts`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${siteUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${siteUrl}/how-to`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/login`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${siteUrl}/signup`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
  ];

  return [
    ...staticUrls,
    ...promptUrls,
  ];
}
