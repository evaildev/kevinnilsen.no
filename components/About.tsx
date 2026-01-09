'use client'
import styles from './About.module.css'
import { motion } from 'framer-motion'

export default function About() {
    const skills = [
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'Express',
        'Python',
        'PostgreSQL',
        'REST API',
        'Git',
        'CSS/HTML',
        'Framer Motion',
        'Design Systems'
    ]

    return (
        <section id="about" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.heading}>
                        <span className={styles.prompt}>$ cat ~/.profile</span>
                        <br />
                        <span className={styles.headingText}>About Developer</span>
                    </h2>
                    <div className={styles.headingUnderline} />
                </motion.div>

                <div className={styles.content}>
                    {/* Code editor style bio */}
                    <motion.div
                        className={styles.bioSection}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.editorHeader}>
                            <div className={styles.windowControls}>
                                <span className={styles.control} style={{ background: '#ff5f56' }}></span>
                                <span className={styles.control} style={{ background: '#ffbd2e' }}></span>
                                <span className={styles.control} style={{ background: '#27c93f' }}></span>
                            </div>
                            <span className={styles.fileName}>developer.profile.ts</span>
                        </div>

                        <div className={styles.editorBody}>
                            <div className={styles.codeBlock}>
                                <div className={styles.lineNumber}>1</div>
                                <div className={styles.codeLine}>
                                    <span className={styles.keyword}>const</span> <span className={styles.variable}>developer</span> = {'{'}
                                </div>
                            </div>
                            <div className={styles.codeBlock}>
                                <div className={styles.lineNumber}>2</div>
                                <div className={styles.codeLine}>
                                    &nbsp;&nbsp;<span className={styles.property}>name:</span> <span className={styles.string}>"Kevin Nilsen"</span>,
                                </div>
                            </div>
                            <div className={styles.codeBlock}>
                                <div className={styles.lineNumber}>3</div>
                                <div className={styles.codeLine}>
                                    &nbsp;&nbsp;<span className={styles.property}>role:</span> <span className={styles.string}>"Full Stack Developer"</span>,
                                </div>
                            </div>
                            <div className={styles.codeBlock}>
                                <div className={styles.lineNumber}>4</div>
                                <div className={styles.codeLine}>
                                    &nbsp;&nbsp;<span className={styles.property}>passion:</span> <span className={styles.string}>"Building modern web experiences"</span>,
                                </div>
                            </div>
                            <div className={styles.codeBlock}>
                                <div className={styles.lineNumber}>5</div>
                                <div className={styles.codeLine}>
                                    &nbsp;&nbsp;<span className={styles.property}>focus:</span> <span className={styles.string}>"Performance & User Experience"</span>
                                </div>
                            </div>
                            <div className={styles.codeBlock}>
                                <div className={styles.lineNumber}>6</div>
                                <div className={styles.codeLine}>
                                    {'}'}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills section */}
                    <motion.div
                        className={styles.skillsSection}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className={styles.editorHeader}>
                            <div className={styles.windowControls}>
                                <span className={styles.control} style={{ background: '#ff5f56' }}></span>
                                <span className={styles.control} style={{ background: '#ffbd2e' }}></span>
                                <span className={styles.control} style={{ background: '#27c93f' }}></span>
                            </div>
                            <span className={styles.fileName}>skills.json</span>
                        </div>

                        <div className={styles.editorBody}>
                            <div className={styles.codeBlock}>
                                <div className={styles.lineNumber}>1</div>
                                <div className={styles.codeLine}>
                                    <span className={styles.bracket}>{'{'}</span>
                                </div>
                            </div>
                            <div className={styles.codeBlock}>
                                <div className={styles.lineNumber}>2</div>
                                <div className={styles.codeLine}>
                                    &nbsp;&nbsp;<span className={styles.property}>"stack"</span>: [
                                </div>
                            </div>
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    className={styles.codeBlock}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.4 + (index * 0.05) }}
                                >
                                    <div className={styles.lineNumber}>{index + 3}</div>
                                    <div className={styles.codeLine}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className={styles.skillTag}>
                                            "{skill}"{index < skills.length - 1 ? ',' : ''}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                            <div className={styles.codeBlock}>
                                <div className={styles.lineNumber}>{skills.length + 3}</div>
                                <div className={styles.codeLine}>
                                    &nbsp;&nbsp;]
                                </div>
                            </div>
                            <div className={styles.codeBlock}>
                                <div className={styles.lineNumber}>{skills.length + 4}</div>
                                <div className={styles.codeLine}>
                                    <span className={styles.bracket}>{'}'}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
