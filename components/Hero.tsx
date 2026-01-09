import styles from './Hero.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import GlitchText from './GlitchText'
import TerminalPrompt from './TerminalPrompt'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                {/* Boot sequence animation */}
                <motion.div
                    className={styles.bootSequence}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className={styles.bootLine}>{'>'} INITIALIZING SYSTEM...</div>
                    <div className={styles.bootLine}>{'>'} LOADING DEVELOPER_PROFILE...</div>
                    <div className={styles.bootLine}>{'>'} STATUS: ONLINE</div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className={styles.mainContent}
                >
                    <div className={styles.terminalWindow}>
                        <div className={styles.terminalHeader}>
                            <div className={styles.terminalControls}>
                                <span className={styles.control} style={{ background: '#ff5f56' }}></span>
                                <span className={styles.control} style={{ background: '#ffbd2e' }}></span>
                                <span className={styles.control} style={{ background: '#27c93f' }}></span>
                            </div>
                            <span className={styles.terminalTitle}>developer@portfolio:~</span>
                        </div>

                        <div className={styles.terminalBody}>
                            <h1 className={styles.title}>
                                <span className={styles.prompt}>$ whoami</span>
                                <br />
                                <GlitchText text="KEVIN NILSEN" className={styles.name} />
                            </h1>

                            <div className={styles.subtitle}>
                                <TerminalPrompt
                                    text="Full Stack Developer | Building high-performance web applications"
                                    prompt=">"
                                    delay={1000}
                                    speed={30}
                                />
                            </div>

                            <div className={styles.techStack}>
                                <div className={styles.techLine}>
                                    <span className={styles.techKey}>stack:</span>
                                    <span className={styles.techValue}>[TypeScript, React, Node.js, PostgreSQL]</span>
                                </div>
                                <div className={styles.techLine}>
                                    <span className={styles.techKey}>specialization:</span>
                                    <span className={styles.techValue}>"Modern Web Applications"</span>
                                </div>
                            </div>

                            <div className={styles.actions}>
                                <Link href="#projects" className={styles.cta}>
                                    <span className={styles.ctaIcon}>./</span>
                                    view-projects.sh
                                    <span className={styles.ctaArrow}>→</span>
                                </Link>
                                <Link href="#contact" className={styles.secondaryCta}>
                                    <span className={styles.ctaIcon}>./</span>
                                    contact.sh
                                    <span className={styles.ctaArrow}>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* ASCII Art decoration */}
                    <motion.div
                        className={styles.asciiArt}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ duration: 1, delay: 2 }}
                    >
                        <pre>{`
    ╔══════════════════════╗
    ║   CODE  •  CREATE   ║
    ║      •  DEPLOY  •   ║
    ╚══════════════════════╝
                        `}</pre>
                    </motion.div>
                </motion.div>
            </div>

            {/* Animated grid overlay */}
            <div className={styles.gridOverlay} />
        </section>
    )
}
