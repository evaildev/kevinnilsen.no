'use client'
import { useState, useEffect } from 'react'

export default function Taskbar() {
    const [time, setTime] = useState('')

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            setTime(now.toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' }))
        }
        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="taskbar">
            <button className="start-button">
                <span style={{ fontSize: '14px' }}>🪟</span>
                <span>Start</span>
            </button>
            <div className="taskbar-time">{time}</div>
        </div>
    )
}
