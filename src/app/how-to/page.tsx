
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Download, Edit } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Discover Prompts",
    description: "Browse our extensive marketplace of high-quality AI prompts. Use categories and tags to find the perfect prompt for your project, whether it's for art, writing, or development.",
  },
  {
    icon: Download,
    title: "2. Use Your Prompts",
    description: "Access all prompts for free. Simply copy the prompt content with a single click and paste it into your favorite AI tool (like Midjourney, DALL-E, or ChatGPT).",
  },
  {
    icon: Edit,
    title: "3. Become a Creator",
    description: "Have a knack for prompt engineering? Sign up to share your own prompts on our marketplace and contribute to the community.",
  },
];

export default function HowToPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 md:py-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">How It Works</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          A simple guide to get started with RealPrompt.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.title} className="flex flex-col text-center items-center">
            <CardHeader className="flex flex-col items-center justify-center gap-4">
              <div className="rounded-full bg-primary/10 p-4 border border-primary/20">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
