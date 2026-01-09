'use client'
import { useEffect, useState } from 'react'
import styles from './TerminalPrompt.module.css'

interface TerminalPromptProps {
    text: string
    prompt?: string
    delay?: number
    speed?: number
    className?: string
}

export default function TerminalPrompt({
    text,
    prompt = '$',
    delay = 0,
    speed = 50,
    className = ''
}: TerminalPromptProps) {
    const [displayedText, setDisplayedText] = useState('')
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            let index = 0
            const interval = setInterval(() => {
                if (index <= text.length) {
                    setDisplayedText(text.slice(0, index))
                    index++
                } else {
                    clearInterval(interval)
                }
            }, speed)

            return () => clearInterval(interval)
        }, delay)

        return () => clearTimeout(timeout)
    }, [text, delay, speed])

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev)
        }, 500)

        return () => clearInterval(cursorInterval)
    }, [])

    return (
        <div className={`${styles.terminal} ${className}`}>
            <span className={styles.prompt}>{prompt}</span>
            <span className={styles.text}>{displayedText}</span>
            {showCursor && <span className={styles.cursor}>▋</span>}
        </div>
    )
}
