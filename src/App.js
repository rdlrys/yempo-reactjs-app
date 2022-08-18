import React, { useState } from "react"

import './App.css'

import ComponentZero from "./components/ComponentZero"
import LeftNav from "./components/LeftNav"

const App = () => {

    const [lastNames, setLastNames] = useState([]);
    return (
        <div className="app-main">
            <LeftNav lastNames={lastNames}/>
            <ComponentZero setLastNames={setLastNames}/>
        </div>
    )
}

export default App