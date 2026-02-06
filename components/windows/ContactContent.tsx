'use client'
import { useState } from 'react'

export default function ContactContent() {
    const [to, setTo] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [sent, setSent] = useState(false)

    const myEmail = 'hello@kevinnilsen.no'

    const handleSend = () => {
        const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
        window.open(mailtoLink, '_blank')
        setSent(true)
        setTimeout(() => setSent(false), 3000)
    }

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Toolbar */}
            <div role="menubar" style={{ borderBottom: '1px solid #808080', background: '#c0c0c0' }}>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>File</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>Edit</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>View</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>Insert</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>Format</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>Tools</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>Help</div>
            </div>

            {/* Action buttons */}
            <div style={{
                padding: '4px 8px',
                background: '#c0c0c0',
                borderBottom: '1px solid #808080',
                display: 'flex',
                gap: '4px'
            }}>
                <button onClick={handleSend} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>📤</span> Send
                </button>
                <button style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>✂️</span> Cut
                </button>
                <button style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>📋</span> Copy
                </button>
                <button style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>📎</span> Attach
                </button>
            </div>

            {/* Email fields */}
            <div style={{ background: '#c0c0c0', padding: '8px', borderBottom: '1px solid #808080' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                    <label style={{ width: '60px', fontWeight: 'bold' }}>To:</label>
                    <input
                        type="text"
                        value={myEmail}
                        readOnly
                        style={{ flex: 1, background: '#e0e0e0' }}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                    <label style={{ width: '60px', fontWeight: 'bold' }}>Cc:</label>
                    <input
                        type="text"
                        value=""
                        readOnly
                        style={{ flex: 1 }}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label style={{ width: '60px', fontWeight: 'bold' }}>Subject:</label>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Enter subject..."
                        style={{ flex: 1 }}
                    />
                </div>
            </div>

            {/* Message body */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here...

I'm always interested in new projects and opportunities.
Feel free to reach out if you'd like to work together!"
                    style={{
                        flex: 1,
                        resize: 'none',
                        padding: '8px',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '13px',
                        border: '2px inset #808080'
                    }}
                />
            </div>

            {/* Status bar */}
            <div className="status-bar">
                <p className="status-bar-field">{sent ? '✓ Opening mail client...' : 'Ready'}</p>
                <p className="status-bar-field">Characters: {message.length}</p>
            </div>
        </div>
    )
}
