import type { Viewport, Metadata } from 'next';

export const VIEWPORT: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#000000'
};

export const METADATA: Metadata = {
    manifest: '/manifest.json',
    title: 'DigDUEL',
    description:
        'DigDUEL: Outsmart rivals in this Minesweeper battle on Solana. Master the grid and claim rewards!',
    openGraph: {
        title: 'DigDUEL',
        description:
            'DigDUEL: Outsmart rivals in this Minesweeper battle on Solana. Master the grid and claim rewards!',
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
    keywords: ['DigDUEL', 'Minesweeper', 'game-website', 'meteorviix'],
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
