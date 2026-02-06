'use client'
import Link from 'next/link'

export default function ProjectsContent() {
    const projects = [
        {
            name: 'levpluss.no',
            description: 'A modern video learning platform built for scale. Features responsive design, seamless video streaming, and an intuitive user interface.',
            tech: ['TypeScript', 'Next.js', 'Tailwind'],
            url: 'https://levpluss.no',
            icon: '🎬',
            size: '2.4 MB',
            type: 'Web Application'
        },
        {
            name: 'HCQ Haircuts',
            description: 'Intelligent queue management system integrated with Qmatic API. Streamlines customer flow and simplifies booking management.',
            tech: ['Node.js', 'PostgreSQL', 'API'],
            url: null,
            icon: '💈',
            size: '1.8 MB',
            type: 'Queue System'
        },
        {
            name: 'TekCom',
            description: 'Enterprise B2B e-commerce solution. Custom-built for wholesale distribution with advanced inventory and ordering systems.',
            tech: ['React', 'Express', 'Redis'],
            url: null,
            icon: '🛒',
            size: '3.1 MB',
            type: 'E-Commerce'
        }
    ]

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Menu bar */}
            <div role="menubar" style={{ borderBottom: '1px solid #808080', background: '#c0c0c0' }}>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>File</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>Edit</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>View</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>Go</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>Favorites</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>Help</div>
            </div>

            {/* Toolbar */}
            <div style={{
                padding: '4px 8px',
                background: '#c0c0c0',
                borderBottom: '1px solid #808080',
                display: 'flex',
                gap: '4px'
            }}>
                <button style={{ padding: '2px 6px' }}>⬅️ Back</button>
                <button style={{ padding: '2px 6px' }}>➡️ Forward</button>
                <button style={{ padding: '2px 6px' }}>⬆️ Up</button>
                <div style={{ width: '1px', background: '#808080', margin: '0 4px' }} />
                <button style={{ padding: '2px 6px' }}>✂️ Cut</button>
                <button style={{ padding: '2px 6px' }}>📋 Copy</button>
                <button style={{ padding: '2px 6px' }}>📄 Paste</button>
            </div>

            {/* Address bar */}
            <div style={{
                padding: '4px 8px',
                background: '#c0c0c0',
                borderBottom: '1px solid #808080',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                <label style={{ fontWeight: 'bold' }}>Address:</label>
                <div style={{
                    flex: 1,
                    background: '#ffffff',
                    border: '2px inset #808080',
                    padding: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    <span>📁</span>
                    <span>C:\Projects\Selected Work</span>
                </div>
            </div>

            {/* Content area */}
            <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
                {/* Folder tree sidebar */}
                <div style={{
                    width: '150px',
                    background: '#ffffff',
                    borderRight: '2px inset #808080',
                    padding: '4px',
                    overflow: 'auto',
                    fontSize: '11px'
                }}>
                    <div style={{ padding: '2px' }}>📁 Desktop</div>
                    <div style={{ padding: '2px', marginLeft: '12px' }}>📁 My Computer</div>
                    <div style={{ padding: '2px', marginLeft: '24px' }}>💾 C:</div>
                    <div style={{ padding: '2px', marginLeft: '36px', background: '#000080', color: '#ffffff' }}>📂 Projects</div>
                    <div style={{ padding: '2px', marginLeft: '24px' }}>💿 D:</div>
                    <div style={{ padding: '2px', marginLeft: '12px' }}>🌐 Network</div>
                    <div style={{ padding: '2px', marginLeft: '12px' }}>🗑️ Recycle Bin</div>
                </div>

                {/* File list */}
                <div style={{
                    flex: 1,
                    background: '#ffffff',
                    padding: '8px',
                    overflow: 'auto'
                }}>
                    {/* List header */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr 80px',
                        borderBottom: '1px solid #808080',
                        paddingBottom: '4px',
                        marginBottom: '4px',
                        fontSize: '11px',
                        fontWeight: 'bold'
                    }}>
                        <span>Name</span>
                        <span>Type</span>
                        <span>Size</span>
                    </div>

                    {/* Project items */}
                    {projects.map((project, idx) => (
                        <div
                            key={project.name}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '2fr 1fr 80px',
                                padding: '2px',
                                fontSize: '11px',
                                cursor: 'pointer',
                                borderBottom: '1px dotted #e0e0e0'
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = '#000080'; e.currentTarget.style.color = '#ffffff' }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '' }}
                            onDoubleClick={() => project.url && window.open(project.url, '_blank')}
                            title={project.description}
                        >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span>{project.icon}</span>
                                {project.name}
                            </span>
                            <span>{project.type}</span>
                            <span>{project.size}</span>
                        </div>
                    ))}

                    {/* Technologies folder */}
                    <div style={{ marginTop: '16px', padding: '8px', background: '#f0f0f0', border: '1px solid #808080' }}>
                        <p style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '11px' }}>📋 Technologies Used:</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                            {['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Express', 'Redis', 'Tailwind'].map(tech => (
                                <span key={tech} style={{
                                    padding: '2px 6px',
                                    background: '#000080',
                                    color: '#ffffff',
                                    fontSize: '10px'
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Status bar */}
            <div className="status-bar">
                <p className="status-bar-field">{projects.length} object(s)</p>
                <p className="status-bar-field">7.3 MB</p>
                <p className="status-bar-field">My Computer</p>
            </div>
        </div>
    )
}
