'use client'
import { useState, useCallback } from 'react'
import Window from './Window'
import Taskbar from './Taskbar'
import AboutContent from './windows/AboutContent'
import ProjectsContent from './windows/ProjectsContent'
import ContactContent from './windows/ContactContent'

// Windows 98 style icons (using common Win98 icon representations)
const ICONS = {
    notepad: '📝',
    folder: '📁',
    folderOpen: '📂',
    mail: '✉️',
    computer: '💻',
    start: '🖥️'
}

interface WindowState {
    id: string
    title: string
    icon: string
    isOpen: boolean
    isMinimized: boolean
    zIndex: number
    defaultPosition: { x: number; y: number }
    defaultSize: { width: number; height: number }
}

const initialWindows: WindowState[] = [
    {
        id: 'about',
        title: 'kevin_nilsen.txt - Notepad',
        icon: ICONS.notepad,
        isOpen: true,
        isMinimized: false,
        zIndex: 3,
        defaultPosition: { x: 80, y: 40 },
        defaultSize: { width: 500, height: 450 }
    },
    {
        id: 'projects',
        title: 'My Projects',
        icon: ICONS.folder,
        isOpen: true,
        isMinimized: false,
        zIndex: 2,
        defaultPosition: { x: 180, y: 100 },
        defaultSize: { width: 550, height: 450 }
    },
    {
        id: 'contact',
        title: 'New Message',
        icon: ICONS.mail,
        isOpen: true,
        isMinimized: false,
        zIndex: 1,
        defaultPosition: { x: 280, y: 160 },
        defaultSize: { width: 500, height: 420 }
    }
]

export default function Desktop() {
    const [windows, setWindows] = useState<WindowState[]>(initialWindows)
    const [maxZIndex, setMaxZIndex] = useState(5)

    const focusWindow = useCallback((id: string) => {
        setMaxZIndex(prev => prev + 1)
        setWindows(prev => prev.map(w =>
            w.id === id ? { ...w, zIndex: maxZIndex + 1, isMinimized: false } : w
        ))
    }, [maxZIndex])

    const closeWindow = useCallback((id: string) => {
        setWindows(prev => prev.map(w =>
            w.id === id ? { ...w, isOpen: false } : w
        ))
    }, [])

    const minimizeWindow = useCallback((id: string) => {
        setWindows(prev => prev.map(w =>
            w.id === id ? { ...w, isMinimized: true } : w
        ))
    }, [])

    const openWindow = useCallback((id: string) => {
        setMaxZIndex(prev => prev + 1)
        setWindows(prev => prev.map(w =>
            w.id === id ? { ...w, isOpen: true, isMinimized: false, zIndex: maxZIndex + 1 } : w
        ))
    }, [maxZIndex])

    const renderWindowContent = (id: string) => {
        switch (id) {
            case 'about':
                return <AboutContent />
            case 'projects':
                return <ProjectsContent />
            case 'contact':
                return <ContactContent />
            default:
                return null
        }
    }

    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
            {/* Desktop Icons */}
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {windows.map(w => (
                    <div
                        key={w.id}
                        className="desktop-icon"
                        onDoubleClick={() => openWindow(w.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <span style={{ fontSize: '32px' }}>{w.icon}</span>
                        <span>{w.title.split(' - ')[0]}</span>
                    </div>
                ))}

                {/* My Computer icon */}
                <div className="desktop-icon" style={{ cursor: 'pointer' }}>
                    <span style={{ fontSize: '32px' }}>{ICONS.computer}</span>
                    <span>My Computer</span>
                </div>
            </div>

            {/* Windows */}
            {windows.map(w => (
                <Window
                    key={w.id}
                    id={w.id}
                    title={w.title}
                    icon={w.icon}
                    isOpen={w.isOpen}
                    isMinimized={w.isMinimized}
                    zIndex={w.zIndex}
                    defaultPosition={w.defaultPosition}
                    defaultSize={w.defaultSize}
                    onClose={() => closeWindow(w.id)}
                    onFocus={() => focusWindow(w.id)}
                    onMinimize={() => minimizeWindow(w.id)}
                >
                    {renderWindowContent(w.id)}
                </Window>
            ))}

            {/* Taskbar */}
            <Taskbar
                windows={windows}
                onWindowClick={focusWindow}
            />
        </div>
    )
}
