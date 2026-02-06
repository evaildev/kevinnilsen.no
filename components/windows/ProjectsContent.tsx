'use client'
import Link from 'next/link'

export default function ProjectsContent() {
    const projects = [
        {
            name: 'levpluss.no',
            description: 'A modern video learning platform built for scale. Features responsive design, seamless video streaming, and an intuitive user interface.',
            tech: ['TypeScript', 'Next.js', 'Tailwind'],
            url: 'https://levpluss.no',
            icon: '🎬'
        },
        {
            name: 'HCQ Haircuts',
            description: 'Intelligent queue management system integrated with Qmatic API. Streamlines customer flow and simplifies booking management.',
            tech: ['Node.js', 'PostgreSQL', 'API'],
            url: null,
            icon: '💈'
        },
        {
            name: 'TekCom',
            description: 'Enterprise B2B e-commerce solution. Custom-built for wholesale distribution with advanced inventory and ordering systems.',
            tech: ['React', 'Express', 'Redis'],
            url: null,
            icon: '🛒'
        }
    ]

    return (
        <div>
            <div role="menubar" style={{ borderBottom: '1px solid #808080', background: '#c0c0c0' }}>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>File</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>Edit</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>View</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>Help</div>
            </div>

            <div style={{ padding: '8px' }}>
                <p style={{ marginBottom: '12px', fontWeight: 'bold' }}>
                    📂 C:\Projects\Selected Work
                </p>

                <div style={{ padding: '8px', background: '#ffffff', border: '2px inset #808080' }}>
                    {projects.map((project) => (
                        <details key={project.name} open style={{ marginBottom: '12px' }}>
                            <summary style={{ cursor: 'pointer', fontWeight: 'bold', padding: '4px' }}>
                                {project.icon} {project.name}
                            </summary>
                            <div style={{ marginLeft: '20px', marginTop: '8px', paddingBottom: '8px', borderBottom: '1px dotted #ccc' }}>
                                <p style={{ marginBottom: '8px', fontSize: '12px' }}>
                                    {project.description}
                                </p>
                                <div style={{ marginBottom: '8px', fontSize: '11px' }}>
                                    <strong>Technologies:</strong> {project.tech.join(', ')}
                                </div>
                                {project.url && (
                                    <Link href={project.url} target="_blank">
                                        <button>🌐 Open Website</button>
                                    </Link>
                                )}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
            <div className="status-bar" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <p className="status-bar-field">{projects.length} project(s)</p>
                <p className="status-bar-field">Ready</p>
            </div>
        </div>
    )
}
