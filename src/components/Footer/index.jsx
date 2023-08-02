import styles from "./style.module.css"

export default function Footer() {
    return (
        <footer>
            <div className={styles.copyright}>
                Feito com <i className={`bi bi-heart-fill ${styles.heart}`}></i> | © 2023 Rodrigo Azevedo
            </div>
        </footer>
    )
}
