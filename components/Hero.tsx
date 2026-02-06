'use client'

export default function Hero() {
    return (
        <div className="window" style={{ margin: '16px auto', maxWidth: '600px' }}>
            <div className="title-bar">
                <div className="title-bar-text">Welcome.exe</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div className="window-body">
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
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                        <a href="#projects"><button>📁 View Projects</button></a>
                        <a href="#contact"><button>📧 Contact Me</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
