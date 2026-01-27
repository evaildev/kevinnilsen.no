'use client'
import styles from './Projects.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Projects() {
    const projects = [
        {
            name: 'levpluss.no',
            description: 'A modern video learning platform built for scale. Features responsive design, seamless video streaming, and an intuitive user interface.',
            tech: ['TypeScript', 'Next.js', 'Tailwind'],
            url: 'https://levpluss.no',
            color: '#FF4D4D'
        },
        {
            name: 'HCQ Haircuts',
            description: 'Intelligent queue management system integrated with Qmatic API. Streamlines customer flow and simplifies booking management.',
            tech: ['Node.js', 'PostgreSQL', 'API'],
            url: null,
            color: '#00C6FF'
        },
        {
            name: 'TekCom',
            description: 'Enterprise B2B e-commerce solution. Custom-built for wholesale distribution with advanced inventory and ordering systems.',
            tech: ['React', 'Express', 'Redis'],
            url: null,
            color: '#A855F7'
        }
    ]

    return (
        <section id="projects" className={styles.section}>
            <div className={styles.header}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Selected Work
                </motion.h2>
                <motion.p
                    className={styles.subheading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    A collection of digital products and experiences.
                </motion.p>
            </div>

            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        className={styles.card}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <div className={styles.imageWrapper}>
                            {/* Placeholder for project image */}
                            <div
                                className={styles.placeholderImage}
                                style={{
                                    background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`
                                }}
                            />
                        </div>

                        <div className={styles.content}>
                            <h3 className={styles.projectName}>{project.name}</h3>
                            <p className={styles.description}>{project.description}</p>

                            <div className={styles.techStack}>
                                {project.tech.map((tech) => (
                                    <span key={tech} className={styles.tech}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className={styles.linkGroup}>
                                {project.url && (
                                    <Link href={project.url} target="_blank" className={styles.link}>
                                        View Live
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
