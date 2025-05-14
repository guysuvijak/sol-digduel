'use client';
import { useRef, ReactNode, createContext, useContext, useEffect } from 'react';
import { useLanguageStore } from '@/stores/languageStore';
import {
    Geist,
    Geist_Mono,
    Noto_Sans_Thai,
    Noto_Sans_JP,
    Noto_Sans_KR,
    Noto_Sans_SC,
    Be_Vietnam_Pro
} from 'next/font/google';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
    display: 'swap'
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
    display: 'swap'
});

const notoSansThai = Noto_Sans_Thai({
    variable: '--font-thai',
    weight: ['400', '500', '600', '700'],
    subsets: ['thai'],
    display: 'swap'
});

const notoSansJP = Noto_Sans_JP({
    variable: '--font-japanese',
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap'
});

const notoSansKR = Noto_Sans_KR({
    variable: '--font-korean',
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap'
});

const notoSansSC = Noto_Sans_SC({
    variable: '--font-chinese',
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap'
});

const beVietnamPro = Be_Vietnam_Pro({
    variable: '--font-vietnamese',
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap'
});

const FontContext = createContext<{ fontClass: string }>({ fontClass: '' });

export const useFontContext = () => useContext(FontContext);

export const FontProvider = ({ children }: { children: ReactNode }) => {
    const { lang } = useLanguageStore();
    const previousFontClassRef = useRef<string | null>(null);

    const getFontClassForLocale = () => {
        switch (lang) {
            case 'th':
                return `${geistSans.variable} ${geistMono.variable} ${notoSansThai.variable} font-thai`;
            case 'jp':
                return `${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} font-japanese`;
            case 'ko':
                return `${geistSans.variable} ${geistMono.variable} ${notoSansKR.variable} font-korean`;
            case 'zh':
                return `${geistSans.variable} ${geistMono.variable} ${notoSansSC.variable} font-chinese`;
            case 'vi':
                return `${geistSans.variable} ${geistMono.variable} ${beVietnamPro.variable} font-vietnamese`;
            default:
                return `${geistSans.variable} ${geistMono.variable} font-sans`;
        }
    };

    const fontClass = getFontClassForLocale();

    useEffect(() => {
        if (typeof document !== 'undefined') {
            const htmlElement = document.documentElement;

            if (previousFontClassRef.current) {
                const prevClasses = previousFontClassRef.current
                    .split(' ')
                    .filter((cls) => cls.trim() !== '');
                htmlElement.classList.remove(...prevClasses);
            }

            const newClasses = fontClass
                .split(' ')
                .filter((cls) => cls.trim() !== '');
            htmlElement.classList.add(...newClasses);

            if (!htmlElement.classList.contains('antialiased')) {
                htmlElement.classList.add('antialiased');
            }

            previousFontClassRef.current = fontClass;
        }
    }, [fontClass]);

    return (
        <FontContext.Provider value={{ fontClass }}>
            {children}
        </FontContext.Provider>
    );
};

export const allFonts = [
    geistSans.variable,
    geistMono.variable,
    notoSansThai.variable,
    notoSansJP.variable,
    notoSansKR.variable,
    notoSansSC.variable,
    beVietnamPro.variable
];
