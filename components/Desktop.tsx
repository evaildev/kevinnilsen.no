'use client'
import { useState, useCallback } from 'react'
import Window from './Window'
import Taskbar from './Taskbar'
import WelcomeContent from './windows/WelcomeContent'
import AboutContent from './windows/AboutContent'
import ProjectsContent from './windows/ProjectsContent'
import ContactContent from './windows/ContactContent'

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
        id: 'welcome',
        title: 'Welcome.exe',
        icon: '👋',
        isOpen: true,
        isMinimized: false,
        zIndex: 4,
        defaultPosition: { x: 80, y: 40 },
        defaultSize: { width: 450, height: 350 }
    },
    {
        id: 'projects',
        title: 'My Projects - Explorer',
        icon: '📁',
        isOpen: true,
        isMinimized: false,
        zIndex: 3,
        defaultPosition: { x: 150, y: 100 },
        defaultSize: { width: 550, height: 450 }
    },
    {
        id: 'about',
        title: 'About Me - Notepad',
        icon: '📝',
        isOpen: true,
        isMinimized: false,
        zIndex: 2,
        defaultPosition: { x: 220, y: 160 },
        defaultSize: { width: 500, height: 400 }
    },
    {
        id: 'contact',
        title: 'Contact - Outlook Express',
        icon: '📧',
        isOpen: true,
        isMinimized: false,
        zIndex: 1,
        defaultPosition: { x: 290, y: 220 },
        defaultSize: { width: 450, height: 380 }
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
            case 'welcome':
                return <WelcomeContent onOpenProjects={() => focusWindow('projects')} onOpenContact={() => focusWindow('contact')} />
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
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {windows.map(w => (
                    <div
                        key={w.id}
                        className="desktop-icon"
                        onDoubleClick={() => openWindow(w.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <span style={{ fontSize: '32px' }}>{w.icon}</span>
                        <span>{w.title.split(' - ')[0].replace('.exe', '')}</span>
                    </div>
                ))}
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
