import About from "./sections/About";
import Contact from "./sections/Contact";
import MainHome from "./sections/MainHome";

function Home() {
    return (
        <main className="homeSection">
            <MainHome />
            <About />
            <Contact />
        </main>
    );
}

export default Home;