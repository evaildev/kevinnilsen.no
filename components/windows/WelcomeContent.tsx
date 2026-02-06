'use client'

interface WelcomeContentProps {
    onOpenProjects: () => void
    onOpenContact: () => void
}

export default function WelcomeContent({ onOpenProjects, onOpenContact }: WelcomeContentProps) {
    return (
        <div style={{ textAlign: 'center', padding: '24px' }}>
            <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>👋 Hello, World!</h1>
            <p style={{ fontSize: '16px', marginBottom: '8px' }}>
                <strong>Kevin Nilsen</strong>
            </p>
            <p style={{ marginBottom: '16px', color: '#0000aa' }}>
                Full Stack Developer
            </p>
            <p style={{ marginBottom: '24px', lineHeight: '1.6' }}>
                Building immersive web experiences with modern detail.
            </p>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={onOpenProjects}>📁 View Projects</button>
                <button onClick={onOpenContact}>📧 Contact Me</button>
            </div>
        </div>
    )
}
