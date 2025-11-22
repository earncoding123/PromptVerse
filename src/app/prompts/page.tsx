

'use client';

import React, { useMemo, useState } from 'react';
import { prompts } from '@/lib/prompts';
import { PromptCard } from '@/components/prompts/PromptCard';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PromptsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('newest');

  const categories = useMemo(() => {
    const allCategories = prompts.map(p => p.category);
    return ['All', ...Array.from(new Set(allCategories))];
  }, []);

  const filteredPrompts = useMemo(() => {
    let filtered = prompts;

    if (searchTerm) {
      filtered = filtered.filter(
        p =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (category !== 'All') {
      filtered = filtered.filter(p => p.category === category);
    }
    
    if (sort === 'newest') {
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (sort === 'oldest') {
        filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }


    return filtered;
  }, [searchTerm, category, sort]);
  
  return (
    <div className="container mx-auto py-8 md:py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary">Explore Prompts</h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Browse our collection of high-quality AI prompts.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <div className="relative sm:col-span-2 md:col-span-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
                type="text"
                placeholder="Search prompts..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10"
            />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(cat => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {filteredPrompts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPrompts.map((item, i) => (
              <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                  <PromptCard prompt={item} />
              </motion.div>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
            <h3 className="text-xl font-semibold">No Prompts Found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
