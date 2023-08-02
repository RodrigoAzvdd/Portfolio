import Button from "../components/Button";
import { Link } from "react-router-dom"
import ImgCard from "../components/ImgCard";
import SkillCard from "../components/SkillCard";


function Home() {
    return (
        <main className="homeSection">
            <section className="firstContent">
                <p className="heading-title">OLÁ, SOU RODRIGO AZEVEDO!</p>
                <p className="heading-subtitle">Desenvolvedor Frontend apaixonado por criar experiências web incríveis.</p>
                <Link to={'projects'}>
                    <Button text={"Projetos"} />
                </Link>
                <p>
                    <img className="arrow" src="src/imgs/chevron-double-down.svg" alt="" />
                </p>
            </section>
            <section className="aboutSection">
                <p className="aboutTitle">Sobre mim</p>
                <div className="aboutInfo">
                    <ImgCard url={"src/imgs/steamProfile.PNG"} alt={"cardImg"} />
                    <div className="secondContentabout">
                        <p className="nameInfo">Rodrigo Azevedo</p>
                        <ul className="InfoItems">
                            <li className="infoItem"><i className="bi bi-code-slash aboutIcon"></i> Desenvolvedor Web desde 2022</li>
                            <li className="infoItem"><i className="bi bi-pc-display aboutIcon"></i> Cursando Ciência da Computação</li>
                            <li className="infoItem"><i className="bi bi-braces aboutIcon"></i> Interesse em Densenvolvimento Front End</li>
                            <li className="infoItem"><i className="bi bi-search aboutIcon"></i> Buscando uma oportunidade para atuar como desenvolvedor</li>
                        </ul>
                    </div>
                </div>
                <div className="skills">
                    <p className="skillsTitle">
                        Habilidades
                    </p>
                    <div className="skillsContent">
                        <SkillCard text={"HTML"} />
                        <SkillCard text={"CSS"} />
                        <SkillCard text={"Javascript"} />
                        <SkillCard text={"React"} />
                        <SkillCard text={"Java"} />
                        <SkillCard text={"GIT"} />
                        <SkillCard text={"BootStrap"} />
                        <SkillCard text={"MySQL"} />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;