'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useUser } from "@/firebase";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProfilePage() {
    const { user, isUserLoading } = useUser();

    // Deriving values directly, with fallbacks for loading state.
    const displayName = user?.displayName || '';
    const userEmail = user?.email || '';

    return (
        <div>
            <h1 className="text-3xl font-bold tracking-tight mb-6">My Profile</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your account's profile information and email address.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 max-w-sm">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        {isUserLoading ? (
                            <Skeleton className="h-10 w-full" />
                        ) : (
                            <Input id="name" defaultValue={displayName} />
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        {isUserLoading ? (
                            <Skeleton className="h-10 w-full" />
                        ) : (
                            <Input id="email" type="email" defaultValue={userEmail} disabled />
                        )}
                    </div>
                    <Button disabled={isUserLoading}>Save Changes</Button>
                </CardContent>
            </Card>
        </div>
    )
}
