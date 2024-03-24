'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function PostsLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();

    const backToHome = () => {
        router.push('/');
    };

    return (
        <div className="w-full flex flex-col justify-center">
            <button className="p-4 bg-blue-400 rounded mt-10 mx-auto" onClick={backToHome}>
                Back to Home
            </button>
            <div className="flex flex-col align-middle justify-center text-center">{children}</div>
        </div>
    );
}
