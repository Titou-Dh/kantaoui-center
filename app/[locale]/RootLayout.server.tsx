"use client";
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';
import Footer from '@/components/Footer';
import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import "@/styles/globals.css";
import clsx from 'clsx';

export const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/logo.png",
    },
};

type RootLayoutProps = {
    children: React.ReactNode;
    params: { locale: string };
    messages: AbstractIntlMessages;
}

// Ensure RootLayout is an async function
export default function RootLayout({
    children,
    params: { locale },
    messages,
}: RootLayoutProps) {
    // Fetch messages for the current locale
    // const messages = await getMessages({locale});

    return (
        <html suppressHydrationWarning lang={locale}>

            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.jpg" />
                <title>{siteConfig.name}</title>
                <meta name="description" content={siteConfig.description} />
            </head>
            <body
                className={clsx(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <NextIntlClientProvider
                    messages={messages}
                    locale={locale}
                >
                    <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
                        <div className="relative">
                            <Navbar />
                            <main className="w-full">{children}</main>
                            <Footer />
                        </div>
                    </Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
