'use client'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import GlitchText from './GlitchText'

export default function Navbar() {
    return (
        <motion.nav
            className={styles.navbar}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.bracket}>{'<'}</span>
                    <GlitchText text="KN" />
                    <span className={styles.bracket}>{'/>'}</span>
                </Link>

                <div className={styles.status}>
                    <div className={styles.statusIndicator}>
                        <span className={styles.statusDot}></span>
                        <span className={styles.statusText}>ONLINE</span>
                    </div>
                </div>

                <div className={styles.links}>
                    <Link href="#projects" className={styles.link}>
                        <span className={styles.linkIcon}>#</span>projects
                    </Link>
                    <Link href="#about" className={styles.link}>
                        <span className={styles.linkIcon}>#</span>about
                    </Link>
                    <Link href="#contact" className={styles.link}>
                        <span className={styles.linkIcon}>#</span>contact
                    </Link>
                </div>
            </div>
        </motion.nav>
    )
}
