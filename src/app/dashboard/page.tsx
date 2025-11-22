'use client';

import { prompts } from '@/lib/prompts';
import { PromptCard } from '@/components/prompts/PromptCard';

export default function DashboardPage() {
    const userPrompts = prompts.slice(0, 3); // Mock data

    return (
        <div>
            <h1 className="text-3xl font-bold tracking-tight mb-6">My Collection</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {userPrompts.map(prompt => (
                    <PromptCard key={prompt.id} prompt={prompt} />
                ))}
            </div>
             {userPrompts.length === 0 && (
                <div className="text-center py-12 border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">You haven't collected any prompts yet.</p>
                </div>
            )}
        </div>
    )
}
