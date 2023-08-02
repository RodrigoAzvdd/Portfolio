import { Link } from "react-router-dom";
import styles from "./style.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <Link className={styles.logoDiv} to={'/'}>
                <img className={styles.logo} src="src/assets/Rodrigo.png" alt="" />
            </Link>
            <nav>
                <Link className={styles.navLink} to={'/Portfolio/'}>Início</Link>
                <Link className={styles.navLink} to={'Portfolio/about'}>Sobre mim</Link>
                <Link className={styles.navLink} to={'Portfolio/contact'}>Contato</Link>
                <Link className={styles.navLink} to={'Portfolio/projects'}>Projetos</Link>
            </nav>
        </header>
    )
}