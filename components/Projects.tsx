'use client'
import styles from './Projects.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Projects() {
    const projects = [
        {
            name: 'levpluss.no',
            description: 'Video learning platform built with TypeScript featuring responsive design and interactive elements.',
            tech: ['TypeScript', 'React', 'Next.js'],
            url: 'https://levpluss.no',
            gradient: 'linear-gradient(135deg, #FF4D4D, #F9CB28)'
        },
        {
            name: 'HCQ Haircuts',
            description: 'Queue management system with Qmatic API integration for streamlining customer flow and booking management.',
            tech: ['Node.js', 'REST API', 'PostgreSQL'],
            url: null,
            gradient: 'linear-gradient(135deg, #00C6FF, #0072FF)'
        },
        {
            name: 'TekCom',
            description: 'B2B e-commerce platform for wholesale distribution with streamlined ordering system for retail partners.',
            tech: ['React', 'Node.js', 'Express'],
            url: null,
            gradient: 'linear-gradient(135deg, #A855F7, #EC4899)'
        }
    ]

    return (
        <section id="projects" className={styles.section}>
            <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className={styles.heading}>Featured Projects</h2>
                <p className={styles.subheading}>A selection of recent work</p>
            </motion.div>

            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        className={styles.card}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className={styles.iconWrapper} style={{ background: project.gradient }}></div>

                        <h3 className={styles.projectName}>{project.name}</h3>
                        <p className={styles.description}>{project.description}</p>

                        <div className={styles.techStack}>
                            {project.tech.map((tech) => (
                                <span key={tech} className={styles.tech}>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {project.url ? (
                            <Link href={project.url} target="_blank" className={styles.link}>
                                View Project →
                            </Link>
                        ) : (
                            <span className={styles.linkDisabled}>
                                Private Project
                            </span>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
