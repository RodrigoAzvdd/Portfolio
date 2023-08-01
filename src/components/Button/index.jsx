import PropTypes from 'prop-types';
import styles from "./style.module.css"

Button.propTypes = {
    text: PropTypes.string
}

export default function Button({ text }) {
    return (
        <button className={styles.btn}>{text}</button>
    )
}