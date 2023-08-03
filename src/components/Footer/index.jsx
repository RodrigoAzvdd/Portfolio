import styles from "./style.module.css"

export default function Footer() {
    return (
        <footer>
            <div className={styles.copyright}>
                Feito com
                <a className={styles.aHeart} href="https://youtu.be/Hu5gJw8OanQ" target="_blank" rel="noreferrer">
                    <i className={`bi bi-heart-fill ${styles.heart}`}></i>
                </a>  © 2023 Rodrigo Azevedo
            </div>
        </footer>
    )
}
