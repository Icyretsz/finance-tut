import Link from "next/link"
import Image from "next/image"

import React from 'react';

const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className="items-center hidden lg:flex">
                <Image src="/logo.svg" width={60} height={60} alt="logo" ></Image>
                <p className="font-semibold text-2xl ml-2.5 text-white">
                    Finance
                </p>
            </div>
        </Link>
    );
};

export default HeaderLogo;