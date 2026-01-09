'use client'
import styles from './Hero.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className={styles.title}>
                        Kevin Nilsen
                    </h1>
                    <p className={styles.subtitle}>
                        Full Stack Developer building high-performance web applications with modern technologies
                    </p>
                    <div className={styles.actions}>
                        <Link href="#projects" className={styles.primaryBtn}>
                            View Projects
                        </Link>
                        <Link href="#contact" className={styles.secondaryBtn}>
                            Get in Touch
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
