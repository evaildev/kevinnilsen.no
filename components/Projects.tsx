'use client'
import Link from 'next/link'

export default function Projects() {
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
        <section id="projects">
            <div className="window" style={{ margin: '16px auto', maxWidth: '700px' }}>
                <div className="title-bar">
                    <div className="title-bar-text">📁 My Projects - Explorer</div>
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
                        <div role="menuitem" tabIndex={0} aria-haspopup="true">View</div>
                        <div role="menuitem" tabIndex={0} aria-haspopup="true">Help</div>
                    </div>

                    <div style={{ padding: '8px' }}>
                        <p style={{ marginBottom: '16px', fontWeight: 'bold' }}>
                            📂 C:\Projects\Selected Work
                        </p>

                        <ul className="tree-view" style={{ padding: '8px', background: '#ffffff', border: '1px inset' }}>
                            {projects.map((project) => (
                                <li key={project.name} style={{ marginBottom: '16px' }}>
                                    <details open>
                                        <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                                            {project.icon} {project.name}
                                        </summary>
                                        <div style={{ marginLeft: '20px', marginTop: '8px' }}>
                                            <p style={{ marginBottom: '8px', fontSize: '12px' }}>
                                                {project.description}
                                            </p>
                                            <div style={{ marginBottom: '8px' }}>
                                                <strong>Technologies:</strong>{' '}
                                                {project.tech.join(', ')}
                                            </div>
                                            {project.url && (
                                                <Link href={project.url} target="_blank">
                                                    <button>🌐 Open Website</button>
                                                </Link>
                                            )}
                                        </div>
                                    </details>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="status-bar">
                    <p className="status-bar-field">{projects.length} project(s)</p>
                    <p className="status-bar-field">Ready</p>
                </div>
            </div>
        </section>
    )
}
