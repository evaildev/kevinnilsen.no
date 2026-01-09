'use client'
import { useEffect, useState } from 'react'
import styles from './GlitchText.module.css'

interface GlitchTextProps {
    text: string
    className?: string
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
    const [isGlitching, setIsGlitching] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.95) {
                setIsGlitching(true)
                setTimeout(() => setIsGlitching(false), 100)
            }
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <span className={`${styles.glitch} ${isGlitching ? styles.active : ''} ${className}`} data-text={text}>
            {text}
        </span>
    )
}
