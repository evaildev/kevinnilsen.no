import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TextScrambleProps {
    text: string
    className?: string
}

const CHARS = "-_~`!@#$%^&*()+=[]{}|;:,.<>?"

export default function TextScramble({ text, className }: TextScrambleProps) {
    const [displayText, setDisplayText] = useState(text)
    const [isScrambling, setIsScrambling] = useState(false)

    useEffect(() => {
        let interval: NodeJS.Timeout
        let iteration = 0

        const scramble = () => {
            setIsScrambling(true)
            interval = setInterval(() => {
                setDisplayText(prev =>
                    text
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index]
                            }
                            return CHARS[Math.floor(Math.random() * CHARS.length)]
                        })
                        .join("")
                )

                if (iteration >= text.length) {
                    clearInterval(interval)
                    setIsScrambling(false)
                }

                iteration += 1 / 3
            }, 30)
        }

        // Trigger on mount
        scramble()

        return () => clearInterval(interval)
    }, [text])

    return (
        <motion.span
            className={className}
            style={{ display: 'inline-block', fontFamily: 'monospace' }} // Monospace helps alignment
        >
            {displayText}
        </motion.span>
    )
}
