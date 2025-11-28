import styles from './Projects.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SpotlightCard from './SpotlightCard'
import PatternCard from './PatternCard'

export default function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <motion.h2
                className={styles.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Projects
            </motion.h2>
            <div className={styles.grid}>
                {/* Levpluss.no */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <PatternCard>
                        <SpotlightCard className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.icon} style={{ background: 'linear-gradient(135deg, #FF4D4D, #F9CB28)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z" />
                                    </svg>
                                </div>
                                <h3 className={styles.cardTitle}>levpluss.no</h3>
                            </div>
                            <p className={styles.cardDesc}>
                                Video learning platform. A modern web application built with TypeScript featuring responsive design and interactive elements.
                            </p>
                            <div className={styles.cardFooter}>
                                <Link href="https://levpluss.no" target="_blank" className={styles.cardLink}>
                                    Visit Website
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.arrow}>
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </SpotlightCard>
                    </PatternCard>
                </motion.div>

                {/* HCQ Haircuts */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <PatternCard>
                        <SpotlightCard className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.icon} style={{ background: 'linear-gradient(135deg, #00C6FF, #0072FF)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>
                                <h3 className={styles.cardTitle}>HCQ Haircuts</h3>
                            </div>
                            <p className={styles.cardDesc}>
                                Queue management system with API from Qmatic. Streamlines customer flow and booking management.
                            </p>
                            <div className={styles.cardFooter}>
                                <span className={styles.cardLink} style={{ opacity: 0.5, cursor: 'default' }}>
                                    Internal Tool
                                </span>
                            </div>
                        </SpotlightCard>
                    </PatternCard>
                </motion.div>
            </div>
        </section>
    )
}
