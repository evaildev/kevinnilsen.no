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

        const initParticles = () => {
            particlesRef.current = []
            const particleCount = Math.floor((canvas.width * canvas.height) / 15000)

            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 2 + 1
                })
            }
        }

        initParticles()

        const draw = () => {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.1)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            const particles = particlesRef.current
            const mouse = mouseRef.current

            particles.forEach((particle, i) => {
                // Update position
                particle.x += particle.vx
                particle.y += particle.vy

                // Mouse interaction
                const dx = mouse.x - particle.x
                const dy = mouse.y - particle.y
                const distance = Math.sqrt(dx * dx + dy * dy)

                if (distance < 150) {
                    const force = (150 - distance) / 150
                    particle.vx += (dx / distance) * force * 0.1
                    particle.vy += (dy / distance) * force * 0.1
                }

                // Damping
                particle.vx *= 0.99
                particle.vy *= 0.99

                // Boundary check
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

                particle.x = Math.max(0, Math.min(canvas.width, particle.x))
                particle.y = Math.max(0, Math.min(canvas.height, particle.y))

                // Draw particle
                ctx.fillStyle = '#00ffff'
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
                ctx.fill()

                // Draw connections
                particles.slice(i + 1).forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x
                    const dy = particle.y - otherParticle.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 120) {
                        const opacity = (1 - distance / 120) * 0.5
                        ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`
                        ctx.lineWidth = 1
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
