import { motion } from 'framer-motion'
import styles from './BentoCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

interface BentoCardProps {
    title: string
    desc: string
    image?: string
    link?: string
    className?: string
    large?: boolean
}

export default function BentoCard({ title, desc, image, link, className, large }: BentoCardProps) {
    const Content = (
        <motion.div
            className={clsx(styles.card, className, large && styles.large)}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
        >
            {image && (
                <div className={styles.imageWrapper}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className={styles.image}
                        style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.overlay} />
                </div>
            )}
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.desc}>{desc}</p>
            </div>
        </motion.div>
    )

    if (link) {
        return (
            <Link href={link} target="_blank" className={styles.linkWrapper}>
                {Content}
            </Link>
        )
    }

    return Content
}
