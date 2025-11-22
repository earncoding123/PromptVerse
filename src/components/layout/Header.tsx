
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AlignJustify, LogOut, User as UserIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/Logo';
import { useAuth, useUser } from '@/firebase';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { signOut } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/prompts', label: 'Prompts' },
  { href: '/how-to', label: 'How-to' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function NavLink({ href, label }: { href:string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-primary',
        isActive ? 'text-primary' : 'text-muted-foreground'
      )}
    >
      {label}
    </Link>
  );
}

function UserMenu() {
    const { user, isUserLoading } = useUser();
    const auth = useAuth();
    const { toast } = useToast();
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            toast({ title: 'Signed out successfully.' });
            router.push('/');
        } catch (error: any) {
            toast({
                title: 'Uh oh! Something went wrong.',
                description: error.message,
                variant: 'destructive',
            });
        }
    };

    if (isUserLoading) {
        return <div className="h-8 w-24 animate-pulse rounded-md bg-muted" />;
    }

    if (!user) {
        return (
            <div className="flex items-center gap-2">
                <Button asChild variant="ghost" size="sm">
                    <Link href="/login">Log In</Link>
                </Button>
                <Button asChild size="sm">
                    <Link href="/signup">Sign Up</Link>
                </Button>
            </div>
        );
    }

    const userInitial = user.displayName?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || '?';

    return (
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
                        <AvatarFallback>{userInitial}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.displayName || 'Welcome'}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {user.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/dashboard/profile">
                        <UserIcon className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Desktop Header */}
        <div className="hidden md:flex flex-1 items-center justify-between">
          <div className="mr-4">
            <Logo />
          </div>
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
                {navLinks.map(link => (
                <NavLink key={link.href} {...link} />
                ))}
            </nav>
             <div className="w-px h-6 bg-border mx-2"></div>
            <UserMenu />
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex w-full items-center justify-between md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <AlignJustify className="h-6 w-6" />
                <span className="sr-only">Toggle Navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              </SheetHeader>
              <div className="p-6">
                <Logo />
              </div>
              <div className="mt-2 flex flex-col gap-4 p-6">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          
          <div className="flex flex-1 justify-center">
            <Logo />
          </div>

          <div className="w-[52px] flex justify-end"> {/* To balance the SheetTrigger button */}
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
