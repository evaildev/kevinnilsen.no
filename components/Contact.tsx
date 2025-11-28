import styles from './Contact.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <motion.h2
                className={styles.heading}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Get in Touch
            </motion.h2>
            <motion.p
                className={styles.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                I'm always interested in new projects and opportunities.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <Link href="mailto:hello@kevinnilsen.no" className={styles.email}>
                    hello@kevinnilsen.no
                </Link>
            </motion.div>
        </section>
    )
}
