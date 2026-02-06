'use client'
import { useState } from 'react'

export interface Theme {
    name: string
    windowBg: string
    windowBorder: string
    titleBarBg: string
    titleBarText: string
    buttonFace: string
    buttonHighlight: string
    buttonShadow: string
    windowText: string
    highlightBg: string
    highlightText: string
}

export const themes: Theme[] = [
    {
        name: 'Windows Standard',
        windowBg: '#c0c0c0',
        windowBorder: '#808080',
        titleBarBg: '#000080',
        titleBarText: '#ffffff',
        buttonFace: '#c0c0c0',
        buttonHighlight: '#ffffff',
        buttonShadow: '#808080',
        windowText: '#000000',
        highlightBg: '#000080',
        highlightText: '#ffffff'
    },
    {
        name: 'High Contrast Black',
        windowBg: '#000000',
        windowBorder: '#ffffff',
        titleBarBg: '#800080',
        titleBarText: '#ffffff',
        buttonFace: '#000000',
        buttonHighlight: '#ffffff',
        buttonShadow: '#808080',
        windowText: '#ffffff',
        highlightBg: '#800080',
        highlightText: '#ffffff'
    },
    {
        name: 'Maple',
        windowBg: '#d4c5a9',
        windowBorder: '#8b7355',
        titleBarBg: '#8b4513',
        titleBarText: '#ffffff',
        buttonFace: '#d4c5a9',
        buttonHighlight: '#f5f5dc',
        buttonShadow: '#8b7355',
        windowText: '#000000',
        highlightBg: '#8b4513',
        highlightText: '#ffffff'
    },
    {
        name: 'Plum',
        windowBg: '#c9b8cd',
        windowBorder: '#6b4c6e',
        titleBarBg: '#4a0e4e',
        titleBarText: '#ffffff',
        buttonFace: '#c9b8cd',
        buttonHighlight: '#e8d8eb',
        buttonShadow: '#6b4c6e',
        windowText: '#000000',
        highlightBg: '#4a0e4e',
        highlightText: '#ffffff'
    },
    {
        name: 'Rainy Day',
        windowBg: '#b8c8d8',
        windowBorder: '#5a6a7a',
        titleBarBg: '#2c3e50',
        titleBarText: '#ffffff',
        buttonFace: '#b8c8d8',
        buttonHighlight: '#d8e8f8',
        buttonShadow: '#5a6a7a',
        windowText: '#000000',
        highlightBg: '#2c3e50',
        highlightText: '#ffffff'
    },
    {
        name: 'Rose',
        windowBg: '#e8c8d0',
        windowBorder: '#a05a6e',
        titleBarBg: '#8b0040',
        titleBarText: '#ffffff',
        buttonFace: '#e8c8d0',
        buttonHighlight: '#ffd8e8',
        buttonShadow: '#a05a6e',
        windowText: '#000000',
        highlightBg: '#8b0040',
        highlightText: '#ffffff'
    }
]

interface SettingsContentProps {
    onChangeWallpaper: (color: string) => void
    currentWallpaper: string
    onChangeTheme: (theme: Theme) => void
    currentTheme: Theme
}

export default function SettingsContent({
    onChangeWallpaper,
    currentWallpaper,
    onChangeTheme,
    currentTheme
}: SettingsContentProps) {
    const [selectedTab, setSelectedTab] = useState<'background' | 'appearance'>('background')
    const [selectedColor, setSelectedColor] = useState(currentWallpaper)
    const [selectedTheme, setSelectedTheme] = useState(currentTheme)

    const wallpapers = [
        { name: 'Teal (Default)', color: '#008080' },
        { name: 'Forest', color: '#254117' },
        { name: 'Ocean', color: '#1f4e79' },
        { name: 'Sunset', color: '#8b4513' },
        { name: 'Night', color: '#1a1a2e' },
        { name: 'Classic Blue', color: '#000080' },
        { name: 'Purple', color: '#4a0e4e' },
        { name: 'Dark Gray', color: '#333333' }
    ]

    const handleApply = () => {
        onChangeWallpaper(selectedColor)
        onChangeTheme(selectedTheme)
    }

    return (
        <div style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'MS Sans Serif, Tahoma, sans-serif',
            fontSize: '11px'
        }}>
            {/* Tabs */}
            <div style={{ display: 'flex', padding: '8px 8px 0 8px', gap: '2px' }}>
                <button
                    onClick={() => setSelectedTab('background')}
                    style={{
                        padding: '4px 12px',
                        borderBottom: selectedTab === 'background' ? 'none' : undefined,
                        background: selectedTab === 'background' ? currentTheme.windowBg : currentTheme.buttonShadow,
                        marginBottom: selectedTab === 'background' ? '-1px' : '0',
                        zIndex: selectedTab === 'background' ? 1 : 0
                    }}
                >
                    Background
                </button>
                <button
                    onClick={() => setSelectedTab('appearance')}
                    style={{
                        padding: '4px 12px',
                        borderBottom: selectedTab === 'appearance' ? 'none' : undefined,
                        background: selectedTab === 'appearance' ? currentTheme.windowBg : currentTheme.buttonShadow,
                        marginBottom: selectedTab === 'appearance' ? '-1px' : '0',
                        zIndex: selectedTab === 'appearance' ? 1 : 0
                    }}
                >
                    Appearance
                </button>
            </div>

            {/* Tab content */}
            <div style={{
                flex: 1,
                margin: '0 8px 8px 8px',
                padding: '16px',
                border: '2px inset',
                overflow: 'auto'
            }}>
                {selectedTab === 'background' && (
                    <div>
                        {/* Preview */}
                        <fieldset style={{ marginBottom: '16px' }}>
                            <legend>Preview</legend>
                            <div style={{
                                width: '120px',
                                height: '90px',
                                background: selectedColor,
                                border: '2px inset',
                                margin: '8px auto',
                                position: 'relative'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '10px',
                                    left: '10px',
                                    width: '40px',
                                    height: '30px',
                                    background: selectedTheme.windowBg,
                                    border: '1px solid ' + selectedTheme.windowBorder
                                }}>
                                    <div style={{
                                        height: '10px',
                                        background: selectedTheme.titleBarBg
                                    }} />
                                </div>
                            </div>
                        </fieldset>

                        {/* Wallpaper list */}
                        <fieldset>
                            <legend>Wallpaper</legend>
                            <div style={{
                                height: '100px',
                                overflow: 'auto',
                                background: '#ffffff',
                                border: '2px inset',
                                padding: '2px'
                            }}>
                                {wallpapers.map(wp => (
                                    <div
                                        key={wp.color}
                                        onClick={() => setSelectedColor(wp.color)}
                                        style={{
                                            padding: '2px 4px',
                                            cursor: 'pointer',
                                            background: selectedColor === wp.color ? currentTheme.highlightBg : 'transparent',
                                            color: selectedColor === wp.color ? currentTheme.highlightText : currentTheme.windowText,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        }}
                                    >
                                        <div style={{
                                            width: '16px',
                                            height: '16px',
                                            background: wp.color,
                                            border: '1px solid #808080'
                                        }} />
                                        {wp.name}
                                    </div>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                )}

                {selectedTab === 'appearance' && (
                    <div>
                        {/* Theme Preview */}
                        <fieldset style={{ marginBottom: '16px' }}>
                            <legend>Preview</legend>
                            <div style={{
                                padding: '16px',
                                background: '#808080',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <div style={{
                                    width: '140px',
                                    background: selectedTheme.windowBg,
                                    border: `2px solid ${selectedTheme.windowBorder}`,
                                    boxShadow: `inset 1px 1px 0 ${selectedTheme.buttonHighlight}`
                                }}>
                                    <div style={{
                                        background: selectedTheme.titleBarBg,
                                        color: selectedTheme.titleBarText,
                                        padding: '2px 4px',
                                        fontSize: '10px',
                                        fontWeight: 'bold'
                                    }}>
                                        Active Window
                                    </div>
                                    <div style={{ padding: '8px', color: selectedTheme.windowText }}>
                                        <p style={{ fontSize: '10px', marginBottom: '8px' }}>Window text</p>
                                        <button style={{
                                            fontSize: '10px',
                                            background: selectedTheme.buttonFace,
                                            border: `1px outset ${selectedTheme.buttonHighlight}`
                                        }}>
                                            OK
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        {/* Scheme selector */}
                        <fieldset>
                            <legend>Scheme</legend>
                            <div style={{
                                height: '100px',
                                overflow: 'auto',
                                background: '#ffffff',
                                border: '2px inset',
                                padding: '2px'
                            }}>
                                {themes.map(theme => (
                                    <div
                                        key={theme.name}
                                        onClick={() => setSelectedTheme(theme)}
                                        style={{
                                            padding: '2px 4px',
                                            cursor: 'pointer',
                                            background: selectedTheme.name === theme.name ? currentTheme.highlightBg : 'transparent',
                                            color: selectedTheme.name === theme.name ? currentTheme.highlightText : '#000000',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        }}
                                    >
                                        <div style={{
                                            width: '16px',
                                            height: '16px',
                                            background: theme.titleBarBg,
                                            border: '1px solid #808080'
                                        }} />
                                        {theme.name}
                                    </div>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                )}
            </div>

            {/* Buttons */}
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '4px',
                padding: '0 8px 8px 8px'
            }}>
                <button onClick={handleApply} style={{ width: '75px' }}>OK</button>
                <button style={{ width: '75px' }}>Cancel</button>
                <button onClick={handleApply} style={{ width: '75px' }}>Apply</button>
            </div>
        </div>
    )
}
