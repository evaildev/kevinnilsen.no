import styles from './Hero.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import TextScramble from './TextScramble'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className={styles.title}>
                        <TextScramble text="Kevin Nilsen" />
                    </h1>
                    <p className={styles.subtitle}>
                        Full Stack Developer.<br />
                        Building high-performance web applications.
                    </p>
                    <div className={styles.actions}>
                        <Link href="#projects" className={styles.cta}>
                            View Work
                        </Link>
                        <Link href="#contact" className={styles.secondaryCta}>
                            Contact
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Technical Grid Overlay */}
            <div className={styles.gridOverlay} />
        </section>
    )
}
