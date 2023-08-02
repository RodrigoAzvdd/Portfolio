import PropTypes from 'prop-types';
import styles from "./style.module.css"

SkillCard.propTypes = {
    text: PropTypes.string
}

export default function SkillCard({ text }) {
    return (
        <div className={styles.cardContainer}>
            <p className={styles.skill}>{text}</p>
        </div>
    )
}