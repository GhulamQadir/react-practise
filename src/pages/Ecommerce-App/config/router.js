import { Routes, Route, BrowserRouter } from 'react-router-dom'
import EcommerceHomePage from '../pages/Home'
import CartPage from '../pages/Cart'

export default function EcommerceAppRouter() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<EcommerceHomePage />} />
                <Route path='/cart' element={<CartPage />} />
            </Routes>
        </BrowserRouter>

    )
}