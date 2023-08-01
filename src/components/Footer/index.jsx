import styles from "./style.module.css"

export default function Footer() {
    return (
        <footer>
            <div className={styles.socialMedias}>
                <a href="https://www.linkedin.com/in/rodrigoazvd" target="_blank" className={styles.socialMediaLogo} rel="noreferrer">
                    <i className={`bi bi-linkedin ${styles.linkedinLogo}`}></i>
                </a>
                <a href="https://www.github.com/RodrigoAzvdd" target="_blank" className={styles.socialMediaLogo} rel="noreferrer">
                    <i className={`bi bi-github ${styles.githubLogo}`}></i>
                </a>
                <a href="https://www.github.com/RodrigoAzvdd" target="_blank" className={styles.socialMediaLogo} rel="noreferrer">
                    <i className={`bi bi-instagram ${styles.instagramLogo}`}></i>
                </a>
            </div>
            <div className={styles.copyright}>
                Feito com <i className={`bi bi-heart-fill ${styles.heart}`}></i> | © 2023 Rodrigo Azevedo
            </div>
        </footer>
    )
}
