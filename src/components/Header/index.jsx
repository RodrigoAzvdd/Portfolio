import { Link } from "react-router-dom";
import styles from "./style.module.css"
import rodrigoImage from '/src/imgs/Rodrigo.svg';
import { useEffect, useState } from "react";
import HambNav from "../HambNav";

export default function Header() {

    const [isMobile, setIsMobile] = useState(false);

    const checkWindowSize = () => {
        const isMobileDevice = window.innerWidth <= 580;
        setIsMobile(isMobileDevice);
    };

    useEffect(() => {
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);
        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    return (
        <header className={styles.header}>
            <Link className={styles.logoDiv} to={'/Portfolio'}>
                <img className={styles.logo} src={rodrigoImage} alt="logo" />
            </Link>
            {
                isMobile ?
                    <HambNav />
                    :
                    <nav>
                        <Link className={styles.navLink} to={'/Portfolio'}>Início</Link>
                        <Link className={styles.navLink} to={'projects'}>Projetos</Link>
                    </nav>
            }
        </header>
    )
}