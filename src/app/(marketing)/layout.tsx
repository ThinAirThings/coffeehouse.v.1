import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Theme } from '@radix-ui/themes';
import { Box, VStack } from '@/styled-system/jsx';
import { Header } from '@/src/app/(marketing)/(components)/Header/Header';
import { Footer } from './(components)/Footer/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Coffeehouse | Research',
    description: 'Coffeehouse. We help research teams form and get funded.',
}

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} antialiased `}>
                <Theme appearance='dark' panelBackground='solid' accentColor="orange" radius="small" className="relative">
                    <VStack justify={'top'} alignItems='center' height='full' width='screen' gap={0}>
                        <Header/>
                        <Box w='full' h='68px'></Box>
                        {children}
                        <Footer/>
                    </VStack>
                </Theme>
            </body>
        </html>
    )
}