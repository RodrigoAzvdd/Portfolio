import imgCard from '/src/imgs/profile4.jpeg';
import ImgCard from '../../../components/ImgCard'
import styles from './style.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function About() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className={styles.container}>
            <p className={`${styles.aboutTitle}`}>Sobre mim</p>
            <div className={styles.aboutInfo}>
                <div data-aos="zoom-in" className={styles.imgContent}>
                    <ImgCard url={imgCard} alt={"cardImg"} />
                </div>
                <div data-aos="zoom-in" className={styles.secondContentabout}>
                    <p className={styles.nameInfo}><span>&lt;</span> Rodrigo Azevedo <span>/&gt;</span></p>
                    <ul className={styles.InfoItems}>
                        <li className={styles.infoItem}><i className={`${styles.aboutIcon} bi bi-code-slash`}></i> Desenvolvedor Web desde 2022</li>
                        <li className={styles.infoItem}><i className={`${styles.aboutIcon} bi bi-pc-display`}></i> Cursando Ciência da Computação</li>
                        <li className={styles.infoItem}><i className={`${styles.aboutIcon} bi bi-braces`}></i> Interesse em Densenvolvimento Front End</li>
                        <li className={styles.infoItem}><i className={`${styles.aboutIcon} bi bi-search`}></i> Buscando uma oportunidade para atuar como desenvolvedor</li>
                    </ul>
                </div>
            </div>
            <div className={styles.skills}>
                <p className={styles.skillsTitle}>
                    Habilidades
                </p>
                <div className={styles.skillsContent}>
                    <div data-aos="fade-up" className={styles.iconCard}>
                        <i className={`devicon-react-original ${styles.icon} ${styles.icon1}`}></i>
                    </div>
                    <div data-aos="fade-down" className={styles.iconCard}>
                        <i className={`devicon-html5-plain ${styles.icon} ${styles.icon2}`}></i>
                    </div>
                    <div data-aos="fade-up" className={styles.iconCard}>
                        <i className={`devicon-css3-plain ${styles.icon} ${styles.icon3}`}></i>
                    </div>
                    <div data-aos="fade-down" className={styles.iconCard}>
                        <i className={`devicon-javascript-plain ${styles.icon} ${styles.icon4}`}></i>
                    </div>
                    <div data-aos="fade-up" className={styles.iconCard}>
                        <i className={`devicon-mysql-plain ${styles.icon} ${styles.icon5}`}></i>
                    </div>
                    <div data-aos="fade-down" className={styles.iconCard}>
                        <i className={`devicon-git-plain ${styles.icon} ${styles.icon6}`}></i>
                    </div>
                    <div data-aos="fade-up" className={styles.iconCard}>
                        <i className={`devicon-github-original ${styles.icon} ${styles.icon7}`}></i>
                    </div>
                    <div data-aos="fade-down" className={styles.iconCard}>
                        <i className={`devicon-sass-original ${styles.icon} ${styles.icon8}`}></i>
                    </div>
                    <div data-aos="fade-up" className={styles.iconCard}>
                        <i className={`devicon-java-plain ${styles.icon} ${styles.icon9}`}></i>
                    </div>
                    <div data-aos="fade-down" className={styles.iconCard}>
                        <i className={`devicon-bootstrap-plain ${styles.icon} ${styles.icon10}`}></i>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;