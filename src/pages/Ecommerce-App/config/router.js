import { Routes, Route, BrowserRouter } from 'react-router-dom'
import EcommerceHomePage from '../pages/Home'

export default function EcommerceAppRouter() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<EcommerceHomePage />} />
            </Routes>
        </BrowserRouter>

    )
}