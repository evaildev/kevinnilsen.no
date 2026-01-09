'use client'
import { useEffect, useRef } from 'react'
import styles from './MatrixRain.module.css'

export default function MatrixRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        // Matrix characters
        const chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const charArray = chars.split('')

        const fontSize = 14
        const columns = canvas.width / fontSize
        const drops: number[] = []

        // Initialize drops
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100
        }

        const draw = () => {
            // Semi-transparent black to create fade effect
            ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Set text style
            ctx.fillStyle = '#00ff00'
            ctx.font = `${fontSize}px monospace`

            for (let i = 0; i < drops.length; i++) {
                // Random character
                const char = charArray[Math.floor(Math.random() * charArray.length)]
                const x = i * fontSize
                const y = drops[i] * fontSize

                // Gradient effect - brighter at the bottom
                const alpha = Math.min(1, (drops[i] * fontSize) / canvas.height + 0.3)
                ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`

                ctx.fillText(char, x, y)

                // Reset drop to top randomly
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0
                }

                drops[i]++
            }
        }

        const interval = setInterval(draw, 33) // ~30fps

        return () => {
            clearInterval(interval)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return <canvas ref={canvasRef} className={styles.canvas} />
}
