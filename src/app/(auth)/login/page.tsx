'use client';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useAuth } from '@/firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const auth = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast({ title: "Signed in successfully!" });
      router.push('/dashboard');
    } catch (error: any) {
      if (error.code !== 'auth/popup-closed-by-user') {
        console.error("Error signing in with Google: ", error);
        toast({
          title: "Uh oh! Something went wrong.",
          description: error.message || "Could not sign in with Google.",
          variant: "destructive"
        });
      }
    }
  };
  
  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({ title: "Signed in successfully!" });
      router.push('/dashboard');
    } catch (error: any) {
      console.error("Error signing in with email: ", error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Invalid email or password. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleEmailSignIn} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input 
                id="password" 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
           <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
            <svg className="mr-2 h-4 w-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48 24.7135C48 22.9395 47.8545 21.2175 47.5455 19.5H24.4905V29.3595H37.899C37.3155 32.535 35.6355 35.19 32.8605 36.9645V42.846H40.239C45.222 38.3115 48 32.0625 48 24.7135Z" fill="#4285F4"/><path d="M24.4909 48.0001C31.2319 48.0001 36.8509 45.8356 40.2394 42.8461L32.8609 36.9646C30.5629 38.5006 27.7369 39.4381 24.4909 39.4381C18.2419 39.4381 12.8719 35.5996 11.0509 30.1246H3.49094V36.1486C6.86294 42.9256 15.0139 48.0001 24.4909 48.0001Z" fill="#34A853"/><path d="M11.0508 30.1245C10.5198 28.641 10.2228 27.0585 10.2228 25.437C10.2228 23.8155 10.5198 22.233 11.0508 20.7495V14.7255H3.49082C1.29182 19.233 0 24.081 0 29.4375C0 34.794 1.29182 39.642 3.49082 44.1495L11.0508 38.1255V30.1245Z" fill="#FBBC05"/><path d="M24.4909 11.4374C28.1899 11.4374 31.4389 12.7244 33.9199 15.0614L40.4489 8.53243C36.8419 5.25143 31.2319 3.00001 24.4909 3.00001C15.0139 3.00001 6.86294 8.07451 3.49094 14.8515L11.0509 20.8755C12.8719 15.4005 18.2419 11.4374 24.4909 11.4374Z" fill="#EA4335"/></svg>
            Login with Google
          </Button>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
