import styles from './About.module.css'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.heading}>About Me</h2>
                    <p className={styles.text}>
                        I am a passionate Full Stack Developer with a keen eye for design.
                        I specialize in building modern, responsive, and user-friendly web applications.
                        My goal is to create digital experiences that leave a lasting impression.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h3 className={styles.heading} style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Skills</h3>
                    <div className={styles.skills}>
                        {['TypeScript', 'React', 'Next.js', 'Node.js', 'Framer Motion', 'Design Systems'].map((skill, index) => (
                            <motion.span
                                key={skill}
                                className={styles.skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                                whileHover={{ scale: 1.1, borderColor: '#ff8700', color: '#ff8700' }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
