'use client'
import styles from './Projects.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Projects() {
    const projects = [
        {
            name: 'levpluss.no',
            description: 'Video learning platform built with TypeScript',
            tech: ['TypeScript', 'React', 'Next.js'],
            url: 'https://levpluss.no',
            icon: 'M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z',
            gradient: 'linear-gradient(135deg, #FF4D4D, #F9CB28)',
            color: '#FF4D4D'
        },
        {
            name: 'HCQ Haircuts',
            description: 'Queue management system with Qmatic API integration',
            tech: ['Node.js', 'REST API', 'PostgreSQL'],
            url: null,
            icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
            gradient: 'linear-gradient(135deg, #00C6FF, #0072FF)',
            color: '#00C6FF'
        },
        {
            name: 'TekCom',
            description: 'B2B e-commerce platform for wholesale distribution',
            tech: ['React', 'Node.js', 'Express'],
            url: null,
            icon: 'M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM20 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6',
            gradient: 'linear-gradient(135deg, #A855F7, #EC4899)',
            color: '#A855F7'
        }
    ]

    return (
        <section id="projects" className={styles.section}>
            <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className={styles.heading}>
                    <span className={styles.prompt}>$ ls -la ~/projects/</span>
                    <br />
                    <span className={styles.headingText}>Featured Work</span>
                </h2>
                <div className={styles.headingUnderline} />
            </motion.div>

            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        className={styles.projectWrapper}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className={styles.projectCard}>
                            {/* Terminal window header */}
                            <div className={styles.cardHeader}>
                                <div className={styles.windowControls}>
                                    <span className={styles.control} style={{ background: '#ff5f56' }}></span>
                                    <span className={styles.control} style={{ background: '#ffbd2e' }}></span>
                                    <span className={styles.control} style={{ background: '#27c93f' }}></span>
                                </div>
                                <span className={styles.fileName}>{project.name}.project</span>
                            </div>

                            {/* Card body */}
                            <div className={styles.cardBody}>
                                <div className={styles.iconWrapper}>
                                    <div className={styles.icon} style={{ background: project.gradient }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d={project.icon} />
                                        </svg>
                                    </div>
                                </div>

                                <h3 className={styles.projectName}>
                                    <span className={styles.bracket}>{'{'}</span>
                                    {project.name}
                                    <span className={styles.bracket}>{'}'}</span>
                                </h3>

                                <p className={styles.description}>
                                    <span className={styles.comment}>// </span>
                                    {project.description}
                                </p>

                                <div className={styles.techStack}>
                                    <span className={styles.techLabel}>tech_stack:</span>
                                    <div className={styles.techList}>
                                        {project.tech.map((tech, i) => (
                                            <span key={tech} className={styles.tech}>
                                                "{tech}"{i < project.tech.length - 1 ? ',' : ''}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.cardFooter}>
                                    {project.url ? (
                                        <Link href={project.url} target="_blank" className={styles.link}>
                                            <span>$ open</span>
                                            <span className={styles.arrow}>→</span>
                                        </Link>
                                    ) : (
                                        <span className={styles.linkDisabled}>
                                            # Private Repository
                                        </span>
                                    )}
                                </div>

                                {/* Loading bar effect */}
                                <div className={styles.loadingBar} style={{ background: project.color }} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
