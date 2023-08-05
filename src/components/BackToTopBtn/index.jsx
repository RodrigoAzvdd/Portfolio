import styles from './style.module.css'

export default function BackToTopBtn() {

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <i onClick={backToTop} className={`bi bi-arrow-up-circle ${styles.icon}`}></i>
    )
}