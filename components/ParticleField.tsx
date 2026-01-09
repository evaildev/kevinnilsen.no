'use client'
import { useEffect, useRef } from 'react'
import styles from './ParticleField.module.css'

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
}

export default function ParticleField() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mouseRef = useRef({ x: 0, y: 0 })
    const particlesRef = useRef<Particle[]>([])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const initParticles = () => {
            particlesRef.current = []
            // Reduce particle count significantly for minimal look
            const particleCount = Math.floor((canvas.width * canvas.height) / 40000)

            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    radius: Math.random() * 1.5 + 0.5
                })
            }
        }

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initParticles()
        }
        resize()
        window.addEventListener('resize', resize)

        // Mouse tracking
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY }
        }
        window.addEventListener('mousemove', handleMouseMove)

        const draw = () => {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.1)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            const particles = particlesRef.current
            const mouse = mouseRef.current

            particles.forEach((particle, i) => {
                // Update position
                particle.x += particle.vx
                particle.y += particle.vy

                // Subtle mouse interaction
                const dx = mouse.x - particle.x
                const dy = mouse.y - particle.y
                const distance = Math.sqrt(dx * dx + dy * dy)

                if (distance < 100) {
                    const force = (100 - distance) / 100
                    particle.vx += (dx / distance) * force * 0.05
                    particle.vy += (dy / distance) * force * 0.05
                }

                // Damping
                particle.vx *= 0.98
                particle.vy *= 0.98

                // Boundary check
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

                particle.x = Math.max(0, Math.min(canvas.width, particle.x))
                particle.y = Math.max(0, Math.min(canvas.height, particle.y))

                // Draw particle - subtle white/gray
                ctx.fillStyle = 'rgba(161, 161, 170, 0.4)'
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
                ctx.fill()

                // Draw connections - very subtle
                particles.slice(i + 1).forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x
                    const dy = particle.y - otherParticle.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 100) {
                        const opacity = (1 - distance / 100) * 0.15
                        ctx.strokeStyle = `rgba(161, 161, 170, ${opacity})`
                        ctx.lineWidth = 0.5
                        ctx.beginPath()
                        ctx.moveTo(particle.x, particle.y)
                        ctx.lineTo(otherParticle.x, otherParticle.y)
                        ctx.stroke()
                    }
                })
            })
        }

        const animate = () => {
            draw()
            requestAnimationFrame(animate)
        }
        animate()

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return <canvas ref={canvasRef} className={styles.canvas} />
}
