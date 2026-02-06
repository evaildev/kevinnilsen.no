'use client'
import { useState, useRef, useEffect, ReactNode } from 'react'

interface WindowProps {
    id: string
    title: string
    icon?: string
    children: ReactNode
    defaultPosition?: { x: number; y: number }
    defaultSize?: { width: number; height: number }
    isOpen: boolean
    onClose: () => void
    onFocus: () => void
    zIndex: number
    isMinimized: boolean
    onMinimize: () => void
}

export default function Window({
    id,
    title,
    icon = '📁',
    children,
    defaultPosition = { x: 100, y: 50 },
    defaultSize = { width: 500, height: 400 },
    isOpen,
    onClose,
    onFocus,
    zIndex,
    isMinimized,
    onMinimize
}: WindowProps) {
    const [position, setPosition] = useState(defaultPosition)
    const [size, setSize] = useState(defaultSize)
    const [isMaximized, setIsMaximized] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    const [isResizing, setIsResizing] = useState(false)
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
    const [prevState, setPrevState] = useState({ position: defaultPosition, size: defaultSize })
    const windowRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging && !isMaximized) {
                setPosition({
                    x: e.clientX - dragOffset.x,
                    y: Math.max(0, e.clientY - dragOffset.y)
                })
            }
            if (isResizing) {
                const newWidth = Math.max(300, e.clientX - position.x)
                const newHeight = Math.max(200, e.clientY - position.y)
                setSize({ width: newWidth, height: newHeight })
            }
        }

        const handleMouseUp = () => {
            setIsDragging(false)
            setIsResizing(false)
        }

        if (isDragging || isResizing) {
            document.addEventListener('mousemove', handleMouseMove)
            document.addEventListener('mouseup', handleMouseUp)
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [isDragging, isResizing, dragOffset, position, isMaximized])

    const handleMouseDown = (e: React.MouseEvent) => {
        if (isMaximized) return
        onFocus()
        setIsDragging(true)
        setDragOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        })
    }

    const handleMaximize = () => {
        if (isMaximized) {
            setPosition(prevState.position)
            setSize(prevState.size)
        } else {
            setPrevState({ position, size })
            setPosition({ x: 0, y: 0 })
            setSize({ width: window.innerWidth, height: window.innerHeight - 28 })
        }
        setIsMaximized(!isMaximized)
    }

    const handleResizeStart = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        onFocus()
        setIsResizing(true)
    }

    if (!isOpen || isMinimized) return null

    return (
        <div
            ref={windowRef}
            className="window"
            style={{
                position: 'fixed',
                left: position.x,
                top: position.y,
                width: size.width,
                height: size.height,
                zIndex,
                display: 'flex',
                flexDirection: 'column'
            }}
            onMouseDown={onFocus}
        >
            <div
                className="title-bar"
                onMouseDown={handleMouseDown}
                onDoubleClick={handleMaximize}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
                <div className="title-bar-text">
                    {icon} {title}
                </div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize" onClick={onMinimize}></button>
                    <button aria-label="Maximize" onClick={handleMaximize}></button>
                    <button aria-label="Close" onClick={onClose}></button>
                </div>
            </div>
            <div className="window-body" style={{ flex: 1, overflow: 'auto' }}>
                {children}
            </div>
            {!isMaximized && (
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: 16,
                        height: 16,
                        cursor: 'nwse-resize'
                    }}
                    onMouseDown={handleResizeStart}
                />
            )}
        </div>
    )
}
