'use client'
import { useState, useCallback, createContext, useContext } from 'react'
import Window from './Window'
import Taskbar from './Taskbar'
import AboutContent from './windows/AboutContent'
import ProjectsContent from './windows/ProjectsContent'
import ContactContent from './windows/ContactContent'
import SettingsContent, { Theme, themes } from './windows/SettingsContent'

// Theme Context
interface ThemeContextType {
    theme: Theme
}

export const ThemeContext = createContext<ThemeContextType>({ theme: themes[0] })
export const useTheme = () => useContext(ThemeContext)

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
        icon: '📝',
        isOpen: true,
        isMinimized: false,
        zIndex: 3,
        defaultPosition: { x: 80, y: 40 },
        defaultSize: { width: 500, height: 450 }
    },
    {
        id: 'projects',
        title: 'My Projects',
        icon: '📁',
        isOpen: true,
        isMinimized: false,
        zIndex: 2,
        defaultPosition: { x: 180, y: 100 },
        defaultSize: { width: 500, height: 400 }
    },
    {
        id: 'contact',
        title: 'New Message',
        icon: '📧',
        isOpen: true,
        isMinimized: false,
        zIndex: 1,
        defaultPosition: { x: 280, y: 160 },
        defaultSize: { width: 450, height: 380 }
    },
    {
        id: 'settings',
        title: 'Display Properties',
        icon: '🖥️',
        isOpen: false,
        isMinimized: false,
        zIndex: 0,
        defaultPosition: { x: 150, y: 80 },
        defaultSize: { width: 400, height: 420 }
    }
]

export default function Desktop() {
    const [windows, setWindows] = useState<WindowState[]>(initialWindows)
    const [maxZIndex, setMaxZIndex] = useState(5)
    const [wallpaperColor, setWallpaperColor] = useState('#008080')
    const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0])

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

    const handleChangeWallpaper = (color: string) => {
        setWallpaperColor(color)
    }

    const handleChangeTheme = (theme: Theme) => {
        setCurrentTheme(theme)
    }

    const renderWindowContent = (id: string) => {
        switch (id) {
            case 'about':
                return <AboutContent />
            case 'projects':
                return <ProjectsContent />
            case 'contact':
                return <ContactContent />
            case 'settings':
                return (
                    <SettingsContent
                        onChangeWallpaper={handleChangeWallpaper}
                        currentWallpaper={wallpaperColor}
                        onChangeTheme={handleChangeTheme}
                        currentTheme={currentTheme}
                    />
                )
            default:
                return null
        }
    }

    // Desktop icons (excluding settings)
    const desktopWindows = windows.filter(w => w.id !== 'settings')

    return (
        <ThemeContext.Provider value={{ theme: currentTheme }}>
            {/* Apply theme CSS variables */}
            <style jsx global>{`
                .window {
                    background: ${currentTheme.windowBg} !important;
                }
                .title-bar {
                    background: ${currentTheme.titleBarBg} !important;
                }
                .title-bar-text {
                    color: ${currentTheme.titleBarText} !important;
                }
                button {
                    background: ${currentTheme.buttonFace};
                    border-color: ${currentTheme.buttonHighlight} ${currentTheme.buttonShadow} ${currentTheme.buttonShadow} ${currentTheme.buttonHighlight};
                    color: ${currentTheme.windowText};
                }
                .status-bar {
                    background: ${currentTheme.windowBg};
                }
                .status-bar-field {
                    color: ${currentTheme.windowText};
                }
                fieldset {
                    border-color: ${currentTheme.buttonShadow};
                    color: ${currentTheme.windowText};
                }
                input, textarea, select {
                    background: #ffffff;
                    color: #000000;
                    border-color: ${currentTheme.buttonShadow};
                }
            `}</style>

            <div style={{
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                position: 'relative',
                background: wallpaperColor
            }}>
                {/* Desktop Icons */}
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {desktopWindows.map(w => (
                        <div
                            key={w.id}
                            className="desktop-icon"
                            onDoubleClick={() => openWindow(w.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <span style={{ fontSize: '32px' }}>{w.icon}</span>
                            <span>
                                {w.id === 'contact' ? 'E-mail' : w.title.split(' - ')[0]}
                            </span>
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
                    onOpenSettings={() => openWindow('settings')}
                    theme={currentTheme}
                />
            </div>
        </ThemeContext.Provider>
    )
}
