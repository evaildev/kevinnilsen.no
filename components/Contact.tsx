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
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.heading}>
                        <span className={styles.prompt}>$ ./connect.sh</span>
                        <br />
                        <span className={styles.headingText}>Get In Touch</span>
                    </h2>
                    <div className={styles.headingUnderline} />
                </motion.div>

                <motion.div
                    className={styles.terminal}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.terminalHeader}>
                        <div className={styles.windowControls}>
                            <span className={styles.control} style={{ background: '#ff5f56' }}></span>
                            <span className={styles.control} style={{ background: '#ffbd2e' }}></span>
                            <span className={styles.control} style={{ background: '#27c93f' }}></span>
                        </div>
                        <span className={styles.fileName}>contact.terminal</span>
                    </div>

                    <div className={styles.terminalBody}>
                        <div className={styles.output}>
                            <div className={styles.line}>
                                <span className={styles.comment}># Initializing connection...</span>
                            </div>
                            <div className={styles.line}>
                                <span className={styles.success}>✓</span> Status: Available for new projects
                            </div>
                            <div className={styles.line}>
                                <span className={styles.success}>✓</span> Response Time: {'<'} 24 hours
                            </div>
                            <div className={styles.line}>
                                <span className={styles.success}>✓</span> Currently: Open to opportunities
                            </div>
                            <div className={styles.separator}></div>

                            <p className={styles.message}>
                                Whether you have a project in mind, want to collaborate,
                                or just want to say hi, feel free to reach out!
                            </p>

                            <div className={styles.emailSection}>
                                <div className={styles.emailLabel}>
                                    <span className={styles.prompt}>$</span> echo $EMAIL
                                </div>
                                <div className={styles.emailWrapper}>
                                    <Link href={`mailto:${email}`} className={styles.email}>
                                        {email}
                                    </Link>
                                    <button
                                        onClick={handleCopy}
                                        className={styles.copyButton}
                                        title="Copy to clipboard"
                                    >
                                        {copied ? (
                                            <span className={styles.copied}>✓ Copied!</span>
                                        ) : (
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* ASCII Art */}
                        <motion.div
                            className={styles.ascii}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.3 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <pre>{`
    ┌─────────────────┐
    │  LET'S BUILD    │
    │   SOMETHING     │
    │    AMAZING!     │
    └─────────────────┘
                            `}</pre>
                        </motion.div>

                        {/* Blinking cursor */}
                        <div className={styles.cursor}>
                            <span className={styles.prompt}>$</span>
                            <span className={styles.blink}>▋</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
