'use client'
import NewAccountSheet from "@/features/accounts/components/new-account-sheet"
import { useState, useEffect } from 'react';


const SheetProvider = () => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <>
            <NewAccountSheet/>
        </>
    );
};

export default SheetProvider;