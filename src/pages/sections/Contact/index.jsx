import styles from './style.module.css'

export default function Contact() {
    return (
        <>
            <section className={styles.container}>
                <hr />
                <p className={styles.title}>Contato</p>
                <div className={styles.socialMedias}>
                    <a href="https://www.linkedin.com/in/rodrigoazvd" target="_blank" className={`${styles.socialMediaLogo} ${styles.linkedin}`} rel="noreferrer">
                        <i className={`bi bi-linkedin ${styles.linkedinLogo}`}></i>
                        <p className={styles.mediaName}>LinkedIn/RodrigoAzevedo</p>
                    </a>
                    <a className={`${styles.socialMediaLogo} ${styles.email}`}>
                        <i className={`bi bi-envelope ${styles.emailLogo}`}></i>
                        <p className={styles.mediaName}>Rodrigo.azvd750@gmail.com</p>
                    </a>
                    <a href="https://www.github.com/RodrigoAzvdd" target="_blank" className={`${styles.socialMediaLogo} ${styles.github}`} rel="noreferrer">
                        <i className={`bi bi-github ${styles.githubLogo}`}></i>
                        <p className={styles.mediaName}>Github/RodrigoAzvdd</p>
                    </a>
                </div>
            </section>
        </>
    )
}