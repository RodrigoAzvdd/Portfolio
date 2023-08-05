import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTopBtn from "../components/BackToTopBtn";

function RootLayout() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="container">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            {showBackToTop ? <BackToTopBtn /> : null}
        </div>
    );
}

export default RootLayout;
