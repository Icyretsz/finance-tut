import { useAuth } from '@clerk/nextjs';
import {Button} from "@/components/ui/button";

const SignOutButton = () => {
    const { signOut } = useAuth();

    const handleSignOut = async () => {
        await signOut();
        window.location.href = '/';
    };

    return (
        <Button onClick={handleSignOut}>Sign out</Button>
    );
};

export default SignOutButton;