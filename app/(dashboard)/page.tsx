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
            <SignedIn>
            <div>
                {data ? `Message: ${data}` : 'Fetching data...'}
            </div>
            </SignedIn>

        </>
    );
}
