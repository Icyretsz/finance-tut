import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import React from 'react';
import AccountForm from '@/features/accounts/components/account-form'
import {useCreateAccount} from "@/features/accounts/api/use-create-account"
import {useNewAccount} from "@/features/accounts/hooks/use-new-account";
import {insertAccountSchema} from "@/db/schema";
import {z} from "zod";

const formSchema = insertAccountSchema.pick({
    name: true
})

type FormValues = z.input<typeof formSchema>

const NewAccountSheet = () => {
    const {isOpen, onClose} = useNewAccount()

    const mutation = useCreateAccount()

    const onSubmit = (values: FormValues) => {
        mutation.mutate(values)
    }

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>
                        New Account
                    </SheetTitle>
                    <SheetDescription>
                        Create a new account to track your transactions.
                    </SheetDescription>
                </SheetHeader>
                <AccountForm onSubmit={onSubmit} disabled={false}/>
            </SheetContent>
        </Sheet>
    );
};

export default NewAccountSheet;