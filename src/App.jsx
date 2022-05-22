import React from 'react'
import Home from './Pages/Home/Home'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar/Navbar'
import { Provider } from 'react-redux'
import store from './store';
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
    const [searchedTerm, setSearchTerm] = useState([])

    const onSearchSelect = (articles) => {
        setSearchTerm(articles)
    }

    return (
        <Provider store={store}>
            <Navbar onSearchSelect={onSearchSelect} />
            <div>
                <Home searchedTerm={searchedTerm} />
            </div>
        </Provider>
    )
}

export default App