import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useState } from "react";
import { CSSTransition } from 'react-transition-group';

export default function HambNav() {
    const [showLinks, setShowLinks] = useState(false);

    const handleClick = () => {
        setShowLinks(currentState => !currentState)
    }

    return (
        <nav className={styles.hamNav}>
            <i
                className={`bi bi-list ${styles.hamIcon}`}
                onClick={() => setShowLinks(currentState => !currentState)}
            />
            <CSSTransition
                in={showLinks}
                timeout={300}
                classNames={{
                    enter: styles.linksEnter,
                    enterActive: styles.linksEnterActive,
                    exit: styles.linksExit,
                    exitActive: styles.linksExitActive,
                }}
                unmountOnExit
            >
                <div className={`${styles.links} ${styles.linksOpen}`}>
                    <Link onClick={handleClick} className={styles.navLink} to={'/Portfolio'}>Início</Link>
                    <Link onClick={handleClick} className={styles.navLink} to={'projects'}>Projetos</Link>
                </div>
            </CSSTransition>
        </nav>
    )
}
