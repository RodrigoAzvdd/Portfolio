import { Link } from "react-router-dom";
import Button from '../../components/Button'

function ErrorPage() {
    return (
        <section className="projectContainer">
            <h1>ERRO</h1>
            <Link to={'/Portfolio'}>
                <Button text={'Início'} />
            </Link>
        </section>
    );
}

export default ErrorPage;