'use client'

export default function AboutContent() {
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
        <div>
            <div role="menubar" style={{ borderBottom: '1px solid #808080', marginBottom: '8px' }}>
                <div role="menuitem" tabIndex={0} aria-haspopup="true" style={{ display: 'inline-block', padding: '2px 8px' }}>File</div>
                <div role="menuitem" tabIndex={0} aria-haspopup="true" style={{ display: 'inline-block', padding: '2px 8px' }}>Edit</div>
                <div role="menuitem" tabIndex={0} aria-haspopup="true" style={{ display: 'inline-block', padding: '2px 8px' }}>Help</div>
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
            <div className="status-bar" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <p className="status-bar-field">Ready</p>
                <p className="status-bar-field">Ln 1, Col 1</p>
            </div>
        </div>
    )
}
