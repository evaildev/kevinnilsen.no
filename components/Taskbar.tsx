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
                        bottom: '28px',
                        left: '0',
                        width: '200px',
                        zIndex: 10000
                    }}
                >
                    <div style={{
                        display: 'flex',
                        background: '#000080',
                        padding: '4px',
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)',
                        color: '#c0c0c0',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '24px'
                    }}>
                        Windows<span style={{ color: '#ffffff' }}>98</span>
                    </div>
                    <div style={{ marginLeft: '24px' }}>
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
                                onMouseEnter={(e) => (e.currentTarget.style.background = '#000080', e.currentTarget.style.color = '#ffffff')}
                                onMouseLeave={(e) => (e.currentTarget.style.background = '', e.currentTarget.style.color = '')}
                            >
                                <span>{w.icon}</span>
                                <span>{w.title.split(' - ')[0]}</span>
                            </div>
                        ))}
                        <hr style={{ margin: '4px 0', border: 'none', borderTop: '1px solid #808080' }} />
                        <div
                            style={{
                                padding: '4px 8px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = '#000080', e.currentTarget.style.color = '#ffffff')}
                            onMouseLeave={(e) => (e.currentTarget.style.background = '', e.currentTarget.style.color = '')}
                        >
                            <span>🔌</span>
                            <span>Shut Down...</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Taskbar */}
            <div className="taskbar" style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                height: '28px',
                background: '#c0c0c0',
                borderTop: '2px solid #ffffff',
                display: 'flex',
                alignItems: 'center',
                padding: '2px',
                zIndex: 9999,
                gap: '2px'
            }}>
                <button
                    className="start-button"
                    onClick={() => setShowStartMenu(!showStartMenu)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontWeight: 'bold',
                        fontSize: '11px',
                        padding: '2px 6px'
                    }}
                >
                    <span style={{ fontSize: '14px' }}>🪟</span>
                    <span>Start</span>
                </button>

                <div style={{
                    height: '100%',
                    width: '2px',
                    background: '#808080',
                    marginLeft: '4px',
                    marginRight: '4px'
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
                                minWidth: '100px',
                                maxWidth: '160px',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                fontSize: '11px',
                                background: w.isMinimized ? '' : '#ffffff',
                                border: w.isMinimized ? '' : '2px inset #808080'
                            }}
                        >
                            <span>{w.icon}</span>
                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {w.title.split(' - ')[0]}
                            </span>
                        </button>
                    ))}
                </div>

                {/* System tray */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '2px 8px',
                    border: '1px inset #808080',
                    fontSize: '11px',
                    background: '#c0c0c0',
                    marginLeft: 'auto'
                }}>
                    <span>🔊</span>
                    <span>{time}</span>
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
                        bottom: '28px',
                        zIndex: 9998
                    }}
                    onClick={() => setShowStartMenu(false)}
                />
            )}
        </>
    )
}
