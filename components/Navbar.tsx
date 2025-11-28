import styles from './Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.logo}>
                KEVIN NILSEN
            </Link>
            <div className={styles.links}>
                <Link href="#projects" className={styles.link}>Projects</Link>
                <Link href="#about" className={styles.link}>About</Link>
                <Link href="#contact" className={styles.link}>Contact</Link>
            </div>
        </nav>
    )
}
