// Next.js 15 - src/config/metadata.ts
import type { Viewport, Metadata } from 'next';

export const VIEWPORT: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#000000'
};

export const METADATA: Metadata = {
    manifest: '/manifest.json',
    title: 'DigDUEL | Classic Game with Web3',
    description:
        'DigDUEL blends classic Minesweeper mechanics with Web3 innovation. Compete on Solana, outplay your rivals, and earn digital rewards!',
    openGraph: {
        title: 'DigDUEL',
        description:
            'DigDUEL blends classic Minesweeper mechanics with Web3 innovation. Compete on Solana, outplay your rivals, and earn digital rewards!',
        url: 'https://digduel.vercel.app/',
        siteName: 'DigDUEL',
        images: [
            {
                url: 'https://digduel.vercel.app/metadata/manifest.webp',
                width: 1200,
                height: 630
            }
        ]
    },
    keywords: [
        'DigDUEL',
        'Web3 game',
        'Minesweeper battle',
        'Solana game',
        'Blockchain gaming',
        'strategy game',
        'multiplayer minesweeper',
        'play to earn',
        'Next.js game',
        'Tauri app',
        'Solana dApp',
        'Meteorviix'
    ],
    authors: [
        { name: 'DigDUEL' },
        {
            name: 'DigDUEL',
            url: 'https://digduel.vercel.app/'
        }
    ],
    icons: [
        { rel: 'apple-touch-icon', url: 'icon/icon-128x128.png' },
        { rel: 'icon', url: 'icon/icon-128x128.png' }
    ],
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'DigDUEL'
    },
    applicationName: 'DigDUEL',
    formatDetection: {
        telephone: false
    }
};
