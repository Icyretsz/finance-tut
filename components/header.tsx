import React from 'react';
import HeaderLogo from '@/components/header-logo'
import Navigation from '@/components/navigation'
import {SignedOut, SignInButton, UserButton, ClerkLoaded, ClerkLoading, SignedIn} from "@clerk/nextjs";
import {Button} from '@/components/ui/button'
import {Loader2} from "lucide-react";
import {currentUser} from "@clerk/nextjs/server";
import WelcomeMsg from "@/components/welcome-msg"

const Header = async () => {
    const user = await currentUser();
    return (
        <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36">
            <div className="max-w-screen-2xl mx-auto">
                <div className="w-full flex items-center justify-between mb-14">
                    <div className="flex items-center lg:gap-x-16">
                        <HeaderLogo/>
                        <Navigation/>
                    </div>
                    <ClerkLoaded>
                        <UserButton
                            appearance={{
                                elements: {
                                    userButtonAvatarBox: "size-10",
                                },
                            }}
                        />
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className="animate-spin text-slate-400"></Loader2>
                    </ClerkLoading>
                    <SignedOut>
                        <div>
                            <SignInButton>
                                <Button variant="outline"
                                >Sign-in</Button>
                            </SignInButton>
                        </div>
                    </SignedOut>
                </div>
                <WelcomeMsg/>
            </div>
        </header>
    );
};

export default Header;

