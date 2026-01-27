'use client'
import styles from './Hero.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.titleWrapper}>
                    <motion.h1
                        className={styles.title}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    >
                        Creative
                        <br />
                        <span className={styles.gradientText}>Developer</span>
                    </motion.h1>
                </div>

                <div className={styles.subtitleWrapper}>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    >
                        Kevin Nilsen — Full Stack Developer building immersive web experiences with modern detail.
                    </motion.p>
                </div>

                <motion.div
                    className={styles.actions}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <Link href="#projects" className={styles.primaryBtn}>
                        Latest Work
                    </Link>
                    <Link href="#contact" className={styles.secondaryBtn}>
                        Contact Me
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
