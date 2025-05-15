// Next.js 15 - src/providers/Web3Provider.tsx
'use client';
import dynamic from 'next/dynamic';
import { ReactNode, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const SolanaProvider = dynamic(() => import('@/providers/SolanaProvider'), {
    ssr: false
});

const Web3Provider = ({ children }: { children: ReactNode }) => {
    const { theme } = useTheme();
    const [isTauri, setIsTauri] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const checkTauri = () =>
            typeof window !== 'undefined' && 'TAURI' in window;
        setIsTauri(checkTauri());
        document.documentElement.setAttribute('data-theme', theme || 'dark');
    }, [theme]);

    if (!isClient || isTauri) {
        return <>{children}</>;
    }

    return <SolanaProvider>{children}</SolanaProvider>;
};

export { Web3Provider };
