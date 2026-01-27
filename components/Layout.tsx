import Navbar from './Navbar'
import Head from 'next/head'
import SmoothScroll from './SmoothScroll'
import ParticleField from './ParticleField'

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
            <SmoothScroll />
            {/* <ParticleField /> */}
            <Navbar />
            <main>{children}</main>
        </>
    )
}
