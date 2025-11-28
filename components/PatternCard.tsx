import React from 'react'
import styles from './PatternCard.module.css'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface PatternCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    className?: string
}

export default function PatternCard({ children, className, ...props }: PatternCardProps) {
    return (
        <div className={clsx(styles.card, className)} {...props}>
            <div className={styles.pattern} />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}
