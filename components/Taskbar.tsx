'use client'
import { useState, useEffect } from 'react'

interface WindowInfo {
    id: string
    title: string
    icon: string
    isOpen: boolean
    isMinimized: boolean
}

interface TaskbarProps {
    windows: WindowInfo[]
    onWindowClick: (id: string) => void
}

export default function Taskbar({ windows, onWindowClick }: TaskbarProps) {
    const [time, setTime] = useState('')
    const [showStartMenu, setShowStartMenu] = useState(false)

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            setTime(now.toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' }))
        }
        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])

    const openWindows = windows.filter(w => w.isOpen)

    return (
        <>
            {/* Start Menu */}
            {showStartMenu && (
                <div
                    className="window"
                    style={{
                        position: 'fixed',
                        bottom: '30px',
                        left: '2px',
                        width: '200px',
                        zIndex: 10000,
                        padding: 0
                    }}
                >
                    {/* Kevin98 branding sidebar */}
                    <div style={{
                        display: 'flex',
                        position: 'relative'
                    }}>
                        <div style={{
                            background: 'linear-gradient(to bottom, #000080, #1084d0)',
                            padding: '8px 4px',
                            writingMode: 'vertical-rl',
                            transform: 'rotate(180deg)',
                            color: '#c0c0c0',
                            fontWeight: 'bold',
                            fontSize: '20px',
                            letterSpacing: '1px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}>
                            <span style={{ color: '#ffffff' }}>Kevin</span>
                            <span style={{ color: '#ff0000' }}>98</span>
                        </div>

                        {/* Menu items */}
                        <div style={{ flex: 1, background: '#c0c0c0' }}>
                            <div style={{ padding: '4px 0' }}>
                                {/* Programs */}
                                <div
                                    style={{
                                        padding: '4px 8px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = '#000080'; e.currentTarget.style.color = '#ffffff' }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '' }}
                                >
                                    <span>📁</span>
                                    <span>Programs</span>
                                    <span style={{ marginLeft: 'auto' }}>▶</span>
                                </div>

                                {/* Documents */}
                                <div
                                    style={{
                                        padding: '4px 8px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = '#000080'; e.currentTarget.style.color = '#ffffff' }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '' }}
                                >
                                    <span>📄</span>
                                    <span>Documents</span>
                                    <span style={{ marginLeft: 'auto' }}>▶</span>
                                </div>

                                <hr style={{ margin: '4px 8px', border: 'none', borderTop: '1px solid #808080', borderBottom: '1px solid #ffffff' }} />

                                {/* App shortcuts */}
                                {windows.map(w => (
                                    <div
                                        key={w.id}
                                        style={{
                                            padding: '4px 8px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        }}
                                        onClick={() => {
                                            onWindowClick(w.id)
                                            setShowStartMenu(false)
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = '#000080'; e.currentTarget.style.color = '#ffffff' }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '' }}
                                    >
                                        <span>{w.icon}</span>
                                        <span>{w.title.split(' - ')[0]}</span>
                                    </div>
                                ))}

                                <hr style={{ margin: '4px 8px', border: 'none', borderTop: '1px solid #808080', borderBottom: '1px solid #ffffff' }} />

                                {/* Settings */}
                                <div
                                    style={{
                                        padding: '4px 8px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = '#000080'; e.currentTarget.style.color = '#ffffff' }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '' }}
                                >
                                    <span>⚙️</span>
                                    <span>Settings</span>
                                    <span style={{ marginLeft: 'auto' }}>▶</span>
                                </div>

                                {/* Find */}
                                <div
                                    style={{
                                        padding: '4px 8px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = '#000080'; e.currentTarget.style.color = '#ffffff' }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '' }}
                                >
                                    <span>🔍</span>
                                    <span>Find</span>
                                    <span style={{ marginLeft: 'auto' }}>▶</span>
                                </div>

                                {/* Help */}
                                <div
                                    style={{
                                        padding: '4px 8px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = '#000080'; e.currentTarget.style.color = '#ffffff' }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '' }}
                                >
                                    <span>❓</span>
                                    <span>Help</span>
                                </div>

                                {/* Run */}
                                <div
                                    style={{
                                        padding: '4px 8px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = '#000080'; e.currentTarget.style.color = '#ffffff' }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '' }}
                                >
                                    <span>▶️</span>
                                    <span>Run...</span>
                                </div>

                                <hr style={{ margin: '4px 8px', border: 'none', borderTop: '1px solid #808080', borderBottom: '1px solid #ffffff' }} />

                                {/* Shut Down */}
                                <div
                                    style={{
                                        padding: '4px 8px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = '#000080'; e.currentTarget.style.color = '#ffffff' }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '' }}
                                >
                                    <span>🔌</span>
                                    <span>Shut Down...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Taskbar */}
            <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                height: '30px',
                background: '#c0c0c0',
                borderTop: '2px solid #dfdfdf',
                display: 'flex',
                alignItems: 'center',
                padding: '2px',
                zIndex: 9999,
                gap: '2px'
            }}>
                {/* Start Button */}
                <button
                    onClick={() => setShowStartMenu(!showStartMenu)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontWeight: 'bold',
                        fontSize: '11px',
                        padding: '2px 6px',
                        height: '24px',
                        border: showStartMenu ? '2px inset' : undefined
                    }}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
                        <rect x="0" y="0" width="7" height="7" fill="#ff0000" />
                        <rect x="8" y="0" width="7" height="7" fill="#00ff00" />
                        <rect x="0" y="8" width="7" height="7" fill="#0000ff" />
                        <rect x="8" y="8" width="7" height="7" fill="#ffff00" />
                    </svg>
                    <span>Start</span>
                </button>

                {/* Quick Launch separator */}
                <div style={{
                    height: '22px',
                    width: '2px',
                    background: '#808080',
                    marginLeft: '2px',
                    marginRight: '2px',
                    borderRight: '1px solid #ffffff'
                }} />

                {/* Open windows */}
                <div style={{ display: 'flex', gap: '2px', flex: 1, overflow: 'hidden' }}>
                    {openWindows.map(w => (
                        <button
                            key={w.id}
                            onClick={() => onWindowClick(w.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                padding: '2px 8px',
                                height: '24px',
                                minWidth: '140px',
                                maxWidth: '180px',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                fontSize: '11px',
                                fontWeight: w.isMinimized ? 'normal' : 'bold',
                                border: w.isMinimized ? undefined : '2px inset'
                            }}
                        >
                            <span style={{ flexShrink: 0 }}>{w.icon}</span>
                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {w.title.split(' - ')[0]}
                            </span>
                        </button>
                    ))}
                </div>

                {/* System Tray separator */}
                <div style={{
                    height: '22px',
                    width: '2px',
                    background: '#808080',
                    marginLeft: '2px',
                    marginRight: '2px',
                    borderRight: '1px solid #ffffff'
                }} />

                {/* System tray */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '2px 8px',
                    height: '24px',
                    border: '1px inset #808080',
                    fontSize: '11px',
                    background: '#c0c0c0'
                }}>
                    <span style={{ fontSize: '12px' }}>🔊</span>
                    <span style={{ fontSize: '12px' }}>🌐</span>
                    <span style={{ fontFamily: 'Segoe UI, Tahoma, sans-serif' }}>{time}</span>
                </div>
            </div>

            {/* Click outside to close menu */}
            {showStartMenu && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: '30px',
                        zIndex: 9998
                    }}
                    onClick={() => setShowStartMenu(false)}
                />
            )}
        </>
    )
}
