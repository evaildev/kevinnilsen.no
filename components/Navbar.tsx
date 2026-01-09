'use client'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
                    KN
                </Link>

                <div className={styles.links}>
                    <Link href="#projects" className={styles.link}>
                        Projects
                    </Link>
                    <Link href="#about" className={styles.link}>
                        About
                    </Link>
                    <Link href="#contact" className={styles.link}>
                        Contact
                    </Link>
                </div>
            </div>
        </motion.nav>
    )
}
