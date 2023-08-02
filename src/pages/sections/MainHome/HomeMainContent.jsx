import { Link } from "react-router-dom";
import styles from './style.module.css'

export default function HomeMainContent() {
    return (
        <section className={styles.firstContent}>
            <p className={styles.headingTitle}>OLÁ, SOU RODRIGO AZEVEDO!</p>
            <p className={styles.headingSubtitle}>Desenvolvedor <span className={styles.purpleText}>Frontend</span> apaixonado por criar <span className={styles.purpleText}>experiências</span> web incríveis.</p>
            <Link to={'projects'}>
                <button className={styles.btn}>Projetos</button>
            </Link>
            <i className={`bi bi-caret-down-fill ${styles.arrow} ${styles.rotateAnimation}`}></i>
        </section>
    )
}