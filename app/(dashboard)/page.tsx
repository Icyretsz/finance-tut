"use client"
import {SignInButton, UserButton, SignedIn} from "@clerk/nextjs"
import {useGetAccounts} from "@/features/accounts/api/use-get-accounts"
import NewAccountSheet from "@/features/accounts/components/new-account-sheet"
export default function Home() {
const accounts = useGetAccounts()


    return (
        <>
            <SignedIn>
                {accounts.data?.map((account) => {
                    return <div key={account.id}>{account.name}</div>
                })}
            </SignedIn>
        </>
    );
}
