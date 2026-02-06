'use client'
import { useState } from 'react'

export default function Contact() {
    const [copied, setCopied] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    const email = 'hello@kevinnilsen.no'

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setShowDialog(true)
        setTimeout(() => {
            setCopied(false)
            setShowDialog(false)
        }, 2000)
    }

    return (
        <section id="contact">
            <div className="window" style={{ margin: '16px auto', maxWidth: '500px' }}>
                <div className="title-bar">
                    <div className="title-bar-text">📧 Contact - Outlook Express</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">
                    <div style={{ padding: '16px' }}>
                        <fieldset>
                            <legend>Get in Touch</legend>
                            <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
                                I'm always interested in new projects and opportunities.
                                Feel free to reach out if you'd like to work together.
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="text"
                                    id="email"
                                    value={email}
                                    readOnly
                                    style={{ flex: 1 }}
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
                    </div>
                </div>
                <div className="status-bar">
                    <p className="status-bar-field">1 contact(s)</p>
                    <p className="status-bar-field">Online</p>
                </div>
            </div>

            {/* Success Dialog */}
            {showDialog && (
                <div
                    className="window"
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 2000,
                        minWidth: '250px'
                    }}
                >
                    <div className="title-bar">
                        <div className="title-bar-text">Information</div>
                        <div className="title-bar-controls">
                            <button aria-label="Close" onClick={() => setShowDialog(false)}></button>
                        </div>
                    </div>
                    <div className="window-body" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px' }}>
                        <span style={{ fontSize: '32px' }}>ℹ️</span>
                        <p>Email address copied to clipboard!</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                        <button onClick={() => setShowDialog(false)} style={{ width: '80px' }}>OK</button>
                    </div>
                </div>
            )}
        </section>
    )
}
