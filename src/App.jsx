import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [isOn, setIsOn] = React.useState(true)
    
    function toggleDarkMode(){
        setIsOn(prev => !prev)
    }
    
    return (
        <div className="container">
            <Navbar
                darkMode={isOn}
                toggleDarkMode={toggleDarkMode}
             />
            <Main 
                darkMode={isOn}
            />
        </div>
    )
}