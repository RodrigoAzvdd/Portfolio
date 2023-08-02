import { Link } from "react-router-dom";
import styles from "./style.module.css"
import rodrigoImage from '/src/imgs/Rodrigo.svg';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link className={styles.logoDiv} to={'/Portfolio'}>
                <img className={styles.logo} src={rodrigoImage} alt="logo" />
            </Link>
            <nav>
                <Link className={styles.navLink} to={'/Portfolio'}>Início</Link>
                <Link className={styles.navLink} to={'projects'}>Projetos</Link>
            </nav>
        </header>
    )
}