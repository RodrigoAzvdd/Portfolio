import { Outlet } from "react-router-dom"
import Header from "../components/Header"

function RootLayout() {
    return (
        <div className="container">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout