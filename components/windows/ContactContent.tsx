'use client'
import { useState } from 'react'

export default function ContactContent() {
    const [copied, setCopied] = useState(false)
    const email = 'hello@kevinnilsen.no'

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div style={{ padding: '16px' }}>
            <fieldset>
                <legend>Get in Touch</legend>
                <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
                    I'm always interested in new projects and opportunities.
                    Feel free to reach out if you'd like to work together.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        readOnly
                        style={{ flex: 1, minWidth: '180px' }}
                    />
                    <button onClick={handleCopy}>
                        {copied ? '✓ Copied!' : '📋 Copy'}
                    </button>
                </div>

                <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                    <a href={`mailto:${email}`}>
                        <button>✉️ New Email</button>
                    </a>
                </div>
            </fieldset>

            <div className="status-bar" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <p className="status-bar-field">1 contact(s)</p>
                <p className="status-bar-field">Online</p>
            </div>
        </div>
    )
}
