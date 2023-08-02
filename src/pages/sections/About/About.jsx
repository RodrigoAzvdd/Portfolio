import SkillCard from '../../../components/SkillCard';
import imgCard from '/src/imgs/profile.png';
import ImgCard from '../../../components/ImgCard'
import styles from './style.module.css'

function About() {
    return (
        <section className={styles.aboutSection}>
            <p className={styles.aboutTitle}>Sobre mim</p>
            <div className={styles.aboutInfo}>
                <ImgCard url={imgCard} alt={"cardImg"} />
                <div className={styles.secondContentabout}>
                    <p className={styles.nameInfo}>Rodrigo Azevedo</p>
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
                    <SkillCard text={"HTML"} />
                    <SkillCard text={"CSS"} />
                    <SkillCard text={"SASS"} />
                    <SkillCard text={"Javascript"} />
                    <SkillCard text={"React"} />
                    <SkillCard text={"Java"} />
                    <SkillCard text={"BootStrap"} />
                    <SkillCard text={"MySQL"} />
                    <SkillCard text={"GIT"} />
                    <SkillCard text={"Github"} />
                </div>
            </div>
        </section>
    );
}

export default About;