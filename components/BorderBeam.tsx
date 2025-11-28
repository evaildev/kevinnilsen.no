import styles from './BorderBeam.module.css'
import clsx from 'clsx'

interface BorderBeamProps {
    className?: string
    size?: number
    duration?: number
    borderWidth?: number
    colorFrom?: string
    colorTo?: string
    delay?: number
}

export default function BorderBeam({
    className,
    size = 200,
    duration = 15,
    borderWidth = 1.5,
    colorFrom = "#ffaa40",
    colorTo = "#9c40ff",
    delay = 0,
}: BorderBeamProps) {
    return (
        <div
            style={
                {
                    "--size": size,
                    "--duration": duration,
                    "--anchor": 90,
                    "--border-width": borderWidth,
                    "--color-from": colorFrom,
                    "--color-to": colorTo,
                    "--delay": delay,
                } as React.CSSProperties
            }
            className={clsx(styles.beam, className)}
        />
    )
}
