import About from "./sections/About/About";
import MainHome from "./sections/MainHome/HomeMainContent";

function Home() {
    return (
        <main className="homeSection">
            <MainHome />
            <About />
        </main>
    );
}

export default Home;