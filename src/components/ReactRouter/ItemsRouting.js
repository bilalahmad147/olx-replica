import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../../App'


function ItemsRouting() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<App />} />
            </Routes>
        </Router>
    )
}

export default ItemsRouting
