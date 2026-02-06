'use client'
import Head from 'next/head'
import Taskbar from './Taskbar'

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>Kevin Nilsen | Full Stack Developer</title>
                <meta name="description" content="Portfolio of Kevin Nilsen - Full Stack Developer specializing in modern web applications" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main style={{ paddingBottom: '44px' }}>
                {children}
            </main>
            <Taskbar />
        </>
    )
}
