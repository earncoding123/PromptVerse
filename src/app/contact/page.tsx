
'use client';

import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useUser } from "@/firebase";

export default function ContactPage() {
  const { toast } = useToast();
  const { user } = useUser();
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      const nameParts = user.displayName?.split(' ') || [];
      setFirstName(nameParts[0] || '');
      setLastName(nameParts.slice(1).join(' ') || '');
      setEmail(user.email || '');
    }
  }, [user]);

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      toast({
        variant: "destructive",
        title: "Configuration Error",
        description: "Email service is not configured correctly. Please contact the administrator.",
      });
      return;
    }
    
    if (!form.current) return;

    setIsLoading(true);

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description: "Thank you for contacting us. We'll get back to you shortly.",
          });
          form.current?.reset();
          if (!user) {
            setFirstName('');
            setLastName('');
            setEmail('');
          }
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem sending your message. Please try again later.",
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container mx-auto max-w-3xl py-12 md:py-20">
      <div className="mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Contact Us</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>
        <Card>
          <CardContent className="p-6 sm:p-8">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="first-name">First name</Label>
                  <div className="mt-2.5">
                    <Input type="text" name="first_name" id="first-name" autoComplete="given-name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="last-name">Last name</Label>
                  <div className="mt-2.5">
                    <Input type="text" name="last_name" id="last-name" autoComplete="family-name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="email">Your Email</Label>
                  <div className="mt-2.5">
                    <Input type="email" name="user_email" id="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <div className="mt-2.5">
                    <Textarea name="message" id="message" rows={4} required />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : 'Send message'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
