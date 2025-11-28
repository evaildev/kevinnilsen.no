import Navbar from './Navbar'
import Head from 'next/head'
import SmoothScroll from './SmoothScroll'
import ShootingStars from './ShootingStars'
import BackgroundBeams from './BackgroundBeams'
import styles from './Layout.module.css'

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>Kevin Nilsen | Portfolio</title>
                <meta name="description" content="Portfolio of Kevin Nilsen" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <SmoothScroll />
            <div className="stars" />
            <BackgroundBeams />
            <ShootingStars />
            <Navbar />
            <main>{children}</main>
        </>
    )
}
