'use client'
import { useState } from 'react'

export default function ContactContent() {
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
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', fontFamily: 'MS Sans Serif, Tahoma, sans-serif' }}>
            {/* Menu bar */}
            <div role="menubar" style={{ borderBottom: '1px solid #808080', background: '#c0c0c0' }}>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>File</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>Edit</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>View</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>Insert</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>Format</div>
                <div role="menuitem" tabIndex={0} style={{ display: 'inline-block', padding: '2px 8px' }}>Help</div>
            </div>

            {/* Toolbar */}
            <div style={{
                padding: '2px 4px',
                background: '#c0c0c0',
                borderBottom: '1px solid #808080',
                display: 'flex',
                gap: '2px'
            }}>
                <button onClick={handleSend} style={{ fontSize: '11px' }}>Send</button>
                <button style={{ fontSize: '11px' }}>Cut</button>
                <button style={{ fontSize: '11px' }}>Copy</button>
                <button style={{ fontSize: '11px' }}>Paste</button>
            </div>

            {/* Email fields */}
            <div style={{ background: '#c0c0c0', padding: '4px 8px', borderBottom: '1px solid #808080' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2px', fontSize: '11px' }}>
                    <label style={{ width: '50px' }}>To:</label>
                    <input
                        type="text"
                        value={myEmail}
                        readOnly
                        style={{ flex: 1, fontSize: '11px' }}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2px', fontSize: '11px' }}>
                    <label style={{ width: '50px' }}>Cc:</label>
                    <input
                        type="text"
                        value=""
                        readOnly
                        style={{ flex: 1, fontSize: '11px' }}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', fontSize: '11px' }}>
                    <label style={{ width: '50px' }}>Subject:</label>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Enter subject..."
                        style={{ flex: 1, fontSize: '11px' }}
                    />
                </div>
            </div>

            {/* Message body */}
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                style={{
                    flex: 1,
                    resize: 'none',
                    padding: '4px',
                    fontSize: '11px',
                    fontFamily: 'MS Sans Serif, Tahoma, sans-serif',
                    border: 'none',
                    outline: 'none'
                }}
            />

            {/* Status bar */}
            <div className="status-bar">
                <p className="status-bar-field">{sent ? 'Opening mail client...' : 'Ready'}</p>
            </div>
        </div>
    )
}
