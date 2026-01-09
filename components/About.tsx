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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.heading}>About</h2>
                    <p className={styles.subheading}>Full Stack Developer passionate about building modern web experiences</p>
                </motion.div>

                <div className={styles.content}>
                    <motion.div
                        className={styles.bioSection}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <p className={styles.bio}>
                            I specialize in creating high-performance web applications with a focus on user experience and modern design.
                            With expertise across the full stack, I build solutions that are both technically robust and visually appealing.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.skillsSection}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className={styles.skillsHeading}>Skills & Technologies</h3>
                        <div className={styles.skillsGrid}>
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    className={styles.skill}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
