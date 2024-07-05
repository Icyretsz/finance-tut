"use client"
import React from 'react';
import { useUser } from "@clerk/nextjs"

const WelcomeMsg = () => {
    const { user, isLoaded } = useUser();

    return (
        <div>
            <h2 className="text-white text-3xl font-medium">Welcome back{isLoaded ? ", " : ""}{user?.fullName} 👋</h2>
            <p className="text-white py-2">This is your Financial Overview Report</p>
        </div>
    );
};

export default WelcomeMsg;