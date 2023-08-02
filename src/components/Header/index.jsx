import { Link } from "react-router-dom";
import styles from "./style.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <Link className={styles.logoDiv} to={'/Portfolio'}>
                <img className={styles.logo} src="src/imgs/Rodrigo.png" alt="logo" />
            </Link>
            <nav>
                <Link className={styles.navLink} to={'/Portfolio'}>Início</Link>
                <Link className={styles.navLink} to={'about'}>Sobre mim</Link>
                <Link className={styles.navLink} to={'contact'}>Contato</Link>
                <Link className={styles.navLink} to={'projects'}>Projetos</Link>
            </nav>
        </header>
    )
}