'use client'
import styles from './Contact.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
    const [copied, setCopied] = useState(false)
    const email = 'hello@kevinnilsen.no'

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.heading}>Get in Touch</h2>
                    <p className={styles.subheading}>
                        I'm always interested in new projects and opportunities.
                        Feel free to reach out if you'd like to work together.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={styles.emailWrapper}>
                        <Link href={`mailto:${email}`} className={styles.email}>
                            {email}
                        </Link>
                        <button
                            onClick={handleCopy}
                            className={styles.copyButton}
                            title="Copy to clipboard"
                        >
                            {copied ? '✓ Copied' : 'Copy'}
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
