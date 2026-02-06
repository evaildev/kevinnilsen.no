'use client'

export default function About() {
    const skills = [
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'Express',
        'Python',
        'PostgreSQL',
        'REST API',
        'Git',
        'CSS/HTML',
        'Framer Motion',
        'Design Systems'
    ]

    return (
        <section id="about">
            <div className="window" style={{ margin: '16px auto', maxWidth: '600px' }}>
                <div className="title-bar">
                    <div className="title-bar-text">About Me - Notepad</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">
                    <div role="menubar">
                        <div role="menuitem" tabIndex={0} aria-haspopup="true">File</div>
                        <div role="menuitem" tabIndex={0} aria-haspopup="true">Edit</div>
                        <div role="menuitem" tabIndex={0} aria-haspopup="true">Help</div>
                    </div>
                    <div style={{ padding: '8px' }}>
                        <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
                            I specialize in creating high-performance web applications
                            with a focus on user experience and modern design.
                        </p>
                        <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
                            With expertise across the full stack, I build solutions
                            that are both technically robust and visually appealing.
                        </p>

                        <fieldset style={{ marginTop: '16px' }}>
                            <legend>💾 Skills & Technologies</legend>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', padding: '8px' }}>
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        style={{
                                            padding: '2px 6px',
                                            background: '#000080',
                                            color: '#ffffff',
                                            fontSize: '11px'
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div className="status-bar">
                    <p className="status-bar-field">Ready</p>
                    <p className="status-bar-field">Ln 1, Col 1</p>
                </div>
            </div>
        </section>
    )
}
