import styles from './style.module.css'
import propTypes from "prop-types"

export default function ProjectCard({ position, img, title, description, tec, code, url }) {

    ProjectCard.propTypes = {
        tec: propTypes.array,
        description: propTypes.string,
        position: propTypes.string,
        img: propTypes.string,
        title: propTypes.string,
        code: propTypes.string,
        url: propTypes.string
    }

    return (
        <div key={code} className={position == "right" ? styles.cardOnRight : styles.cardOnLeft}>
            <img className={styles.imgCard} src={img} alt="" />
            <div className={styles.infoCard}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescrition}>{description}</p>
                <div className={styles.tecDiv}>
                    {tec.map(element => (
                        <span key={element} className={styles.tecName}>{element}</span>
                    ))}
                </div>
                <div className={styles.viewOptions}>
                    <a href={url} target='_blank' rel="noreferrer"><i className={`bi bi-eye ${styles.eyeIcon}`}></i></a>
                    <a href={code} target='_blank' rel="noreferrer"><i className={`bi bi-code-slash ${styles.codeIcon}`}></i></a>
                </div>
            </div>
        </div>
    )
}