import React from "react";
import styles from "./BackgroundBeams.module.css";

export default function BackgroundBeams() {
    return (
        <div className={styles.beamsContainer}>
            <div className={styles.beam} style={{ "--delay": "0s", "--duration": "15s", "--tx": "10%", "--ty": "-10%" } as React.CSSProperties} />
            <div className={styles.beam} style={{ "--delay": "-5s", "--duration": "20s", "--tx": "-20%", "--ty": "15%" } as React.CSSProperties} />
            <div className={styles.beam} style={{ "--delay": "-2s", "--duration": "18s", "--tx": "15%", "--ty": "20%" } as React.CSSProperties} />
            <div className={styles.beam} style={{ "--delay": "-8s", "--duration": "25s", "--tx": "-10%", "--ty": "-20%" } as React.CSSProperties} />
        </div>
    );
}
