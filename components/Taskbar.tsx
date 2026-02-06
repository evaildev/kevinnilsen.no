'use client'
import { useState, useEffect } from 'react'
import { Theme } from './windows/SettingsContent'

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
    onOpenSettings: () => void
    theme: Theme
}

export default function Taskbar({ windows, onWindowClick, onOpenSettings, theme }: TaskbarProps) {
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
                        width: '180px',
                        zIndex: 10000,
                        padding: 0,
                        background: theme.windowBg
                    }}
                >
                    <div style={{ display: 'flex', position: 'relative' }}>
                        {/* Kevin98 branding sidebar */}
                        <div style={{
                            background: `linear-gradient(to bottom, ${theme.titleBarBg}, #1084d0)`,
                            padding: '8px 4px',
                            writingMode: 'vertical-rl',
                            transform: 'rotate(180deg)',
                            color: '#c0c0c0',
                            fontWeight: 'bold',
                            fontSize: '18px',
                            letterSpacing: '1px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}>
                            <span style={{ color: '#ffffff' }}>Kevin</span>
                            <span style={{ color: '#ff0000' }}>98</span>
                        </div>

                        {/* Menu items */}
                        <div style={{ flex: 1, background: theme.windowBg, fontSize: '11px' }}>
                            <div style={{ padding: '4px 0' }}>
                                {/* App shortcuts - excluding settings */}
                                {windows.filter(w => w.id !== 'settings').map(w => (
                                    <div
                                        key={w.id}
                                        style={{
                                            padding: '4px 8px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            color: theme.windowText
                                        }}
                                        onClick={() => {
                                            onWindowClick(w.id)
                                            setShowStartMenu(false)
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = theme.highlightBg
                                            e.currentTarget.style.color = theme.highlightText
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = ''
                                            e.currentTarget.style.color = theme.windowText
                                        }}
                                    >
                                        <span>{w.icon}</span>
                                        <span>{w.id === 'contact' ? 'E-mail' : w.title.split(' - ')[0]}</span>
                                    </div>
                                ))}

                                <hr style={{ margin: '4px 8px', border: 'none', borderTop: `1px solid ${theme.buttonShadow}`, borderBottom: `1px solid ${theme.buttonHighlight}` }} />

                                {/* Settings */}
                                <div
                                    style={{
                                        padding: '4px 8px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        color: theme.windowText
                                    }}
                                    onClick={() => {
                                        onOpenSettings()
                                        setShowStartMenu(false)
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = theme.highlightBg
                                        e.currentTarget.style.color = theme.highlightText
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = ''
                                        e.currentTarget.style.color = theme.windowText
                                    }}
                                >
                                    <span>⚙️</span>
                                    <span>Settings</span>
                                </div>

                                <hr style={{ margin: '4px 8px', border: 'none', borderTop: `1px solid ${theme.buttonShadow}`, borderBottom: `1px solid ${theme.buttonHighlight}` }} />

                                {/* Shut Down */}
                                <div
                                    style={{
                                        padding: '4px 8px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        color: theme.windowText
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = theme.highlightBg
                                        e.currentTarget.style.color = theme.highlightText
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = ''
                                        e.currentTarget.style.color = theme.windowText
                                    }}
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
                background: theme.windowBg,
                borderTop: `2px solid ${theme.buttonHighlight}`,
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
                        border: showStartMenu ? '2px inset' : undefined,
                        background: theme.buttonFace,
                        color: theme.windowText
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

                {/* Separator */}
                <div style={{
                    height: '22px',
                    width: '2px',
                    background: theme.buttonShadow,
                    marginLeft: '2px',
                    marginRight: '2px',
                    borderRight: `1px solid ${theme.buttonHighlight}`
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
                                minWidth: '120px',
                                maxWidth: '160px',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                fontSize: '11px',
                                fontWeight: w.isMinimized ? 'normal' : 'bold',
                                border: w.isMinimized ? undefined : '2px inset',
                                background: theme.buttonFace,
                                color: theme.windowText
                            }}
                        >
                            <span style={{ flexShrink: 0 }}>{w.icon}</span>
                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {w.id === 'contact' ? 'New Message' : w.title.split(' - ')[0]}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Separator */}
                <div style={{
                    height: '22px',
                    width: '2px',
                    background: theme.buttonShadow,
                    marginLeft: '2px',
                    marginRight: '2px',
                    borderRight: `1px solid ${theme.buttonHighlight}`
                }} />

                {/* System tray */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '2px 8px',
                    height: '24px',
                    border: `1px inset ${theme.buttonShadow}`,
                    fontSize: '11px',
                    background: theme.windowBg,
                    color: theme.windowText
                }}>
                    <span style={{ fontSize: '12px' }}>🔊</span>
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
                        bottom: '30px',
                        zIndex: 9998
                    }}
                    onClick={() => setShowStartMenu(false)}
                />
            )}
        </>
    )
}
