
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 md:py-20">
       <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary">About RealPrompt</h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Empowering creativity through high-quality AI prompts.
        </p>
      </div>
      
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              In the rapidly evolving world of artificial intelligence, the quality of input determines the quality of output. A well-crafted prompt is the key to unlocking the full potential of AI models like GPT, DALL-E, and Midjourney. We envision a world where creativity is amplified by AI, and RealPrompt is the catalyst for that revolution.
            </p>
            <p className="mt-4">
              We believe that prompt engineering is an art form. Our platform is designed to celebrate the artists—the prompt creators—and provide them with a space to showcase their skills and earn from their expertise.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>For Creators</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                Whether you're an artist generating stunning visuals, a writer crafting compelling narratives, or a developer building innovative applications, RealPrompt offers a diverse library of prompts to kickstart your next project. Browse our curated categories, find inspiration, and save time with ready-to-use prompts.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>For Prompt Engineers</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                 Are you skilled at crafting the perfect prompt? Join our community of creators and start sharing your prompts on our marketplace. We provide the tools you need to publish your work and reach a global audience of AI enthusiasts.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/10 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle>Join Our Community</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground">
            <p>
              RealPrompt is more than just a marketplace; it's a community. We invite you to explore, create, and be part of the future of AI-driven creativity.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
