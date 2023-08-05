import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import Projects from './pages/Projects'

const router = createBrowserRouter([
    {
        path: '/Portfolio',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/projects',
                element: <Projects />
            }
        ]
    }
])

export default router