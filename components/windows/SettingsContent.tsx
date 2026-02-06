'use client'
import { useState } from 'react'

interface SettingsContentProps {
    onChangeWallpaper: (color: string) => void
    currentWallpaper: string
}

export default function SettingsContent({ onChangeWallpaper, currentWallpaper }: SettingsContentProps) {
    const [selectedTab, setSelectedTab] = useState<'background' | 'appearance'>('background')
    const [selectedColor, setSelectedColor] = useState(currentWallpaper)

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
    }

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', fontFamily: 'MS Sans Serif, Tahoma, sans-serif', fontSize: '11px' }}>
            {/* Tabs */}
            <div style={{ display: 'flex', padding: '8px 8px 0 8px', gap: '2px' }}>
                <button
                    onClick={() => setSelectedTab('background')}
                    style={{
                        padding: '4px 12px',
                        border: selectedTab === 'background' ? '2px outset' : '1px solid #808080',
                        borderBottom: selectedTab === 'background' ? 'none' : undefined,
                        background: selectedTab === 'background' ? '#c0c0c0' : '#a0a0a0',
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
                        border: selectedTab === 'appearance' ? '2px outset' : '1px solid #808080',
                        borderBottom: selectedTab === 'appearance' ? 'none' : undefined,
                        background: selectedTab === 'appearance' ? '#c0c0c0' : '#a0a0a0',
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
                background: '#c0c0c0',
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
                                    width: '30px',
                                    height: '25px',
                                    background: '#c0c0c0',
                                    border: '1px outset'
                                }} />
                            </div>
                        </fieldset>

                        {/* Wallpaper list */}
                        <fieldset>
                            <legend>Wallpaper</legend>
                            <div style={{
                                height: '120px',
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
                                            background: selectedColor === wp.color ? '#000080' : 'transparent',
                                            color: selectedColor === wp.color ? '#ffffff' : '#000000',
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
                        <fieldset>
                            <legend>Scheme</legend>
                            <select style={{ width: '100%', padding: '2px' }}>
                                <option>Windows Standard</option>
                                <option>High Contrast Black</option>
                                <option>High Contrast White</option>
                                <option>Maple</option>
                                <option>Plum</option>
                            </select>
                        </fieldset>
                        <p style={{ marginTop: '16px', color: '#808080' }}>
                            Note: Theme changes are not yet implemented.
                        </p>
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
