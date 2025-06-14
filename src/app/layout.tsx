// Next.js 15 - src/app/layout.tsx
import { ReactNode } from 'react';
import { VIEWPORT, METADATA } from '@/configs';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { LanguageProvider } from '@/providers/LanguageProvider';
import { Web3Provider } from '@/providers/Web3Provider';
import { FontProvider } from '@/providers/FontProvider';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

export const viewport = VIEWPORT;
export const metadata = METADATA;

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang='en'>
            <body>
                <ThemeProvider>
                    <LanguageProvider />
                    <FontProvider>
                        <Web3Provider>
                            <main>{children}</main>
                            <Toaster />
                        </Web3Provider>
                    </FontProvider>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
