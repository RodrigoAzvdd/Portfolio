import { createContext } from "react";
import PropTypes from 'prop-types'

export const ThemeContext = createContext({})

ThemeContextProvider.propTypes = {
    children: PropTypes.node
}

export function ThemeContextProvider({ children }) {

    // ...

    const values = {
        // ...
    }

    return (
        <ThemeContext.Provider value={values}>
            { children }
        </ThemeContext.Provider>    
    )
}