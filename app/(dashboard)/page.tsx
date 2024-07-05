"use client"
import {SignInButton, UserButton, SignedIn} from "@clerk/nextjs"
import  Link  from "next/link"
import {useEffect, useState} from "react";

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/hello')
            .then(response => response.json())
            .then(result => setData(result.message));
    }, []);
    return (
        <>
            <UserButton showName={true}/>
            <SignedIn>
            <div>
                {data ? `Message: ${data}` : 'Fetching data...'}
            </div>
            </SignedIn>
            <div className='bg-pink-300 inline-flex p-2 rounded-3xl'>
                <SignInButton>
                    <button>Sign in with Clerk</button>
                </SignInButton>
            </div>
        </>
    );
}
