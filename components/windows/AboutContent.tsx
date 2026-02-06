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
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div role="menubar" style={{ borderBottom: '1px solid #808080', background: '#c0c0c0' }}>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>File</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>Edit</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>Format</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>Help</div>
            </div>
            <div style={{
                flex: 1,
                padding: '8px',
                background: '#ffffff',
                fontFamily: 'Courier New, monospace',
                fontSize: '13px',
                overflow: 'auto',
                lineHeight: '1.6'
            }}>
                <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
                    {`=====================================
        KEVIN_NILSEN.TXT
=====================================

Hello, World!

My name is Kevin Nilsen.
I am a Full Stack Developer.

Building immersive web experiences 
with modern detail.

-------------------------------------
ABOUT ME
-------------------------------------

I specialize in creating high-performance 
web applications with a focus on user 
experience and modern design.

With expertise across the full stack, 
I build solutions that are both 
technically robust and visually appealing.

-------------------------------------
SKILLS & TECHNOLOGIES
-------------------------------------

`}
                    {skills.map((skill, i) => `  [${i + 1 < 10 ? '0' : ''}${i + 1}] ${skill}`).join('\n')}
                    {`

-------------------------------------
CONTACT
-------------------------------------

Email: hello@kevinnilsen.no

=====================================
        EOF
=====================================`}
                </pre>
            </div>
            <div className="status-bar">
                <p className="status-bar-field">kevin_nilsen.txt</p>
                <p className="status-bar-field">100%</p>
                <p className="status-bar-field">Ln 1, Col 1</p>
            </div>
        </div>
    )
}
