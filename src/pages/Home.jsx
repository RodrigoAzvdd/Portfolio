import Button from "../components/Button";
import { Link } from "react-router-dom"

function Home() {
    return (
        <main className="homeSection">
            <div className="firstContent">
                <p className="heading-title">OLÁ, SOU RODRIGO AZEVEDO!</p>
                <p className="heading-subtitle">Desenvolvedor Frontend apaixonado por criar experiências web incríveis.</p>
                <Link to={'/projects'}>
                    <Button text={"Projetos"} />
                </Link>
                <p>
                    <img className="arrow" src="src/assets/chevron-double-down.svg" alt="" />
                </p>
            </div>
        </main>
    );
}

export default Home;