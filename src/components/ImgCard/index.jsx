import PropTypes from 'prop-types';
import styles from "./style.module.css"

ImgCard.propTypes = {
    url: PropTypes.string,
    alt: PropTypes.string
}

export default function ImgCard({url, alt}) {
    return (
        <img className={styles.img} src={url} alt={alt} />
    )
}