import { Routes, Route, BrowserRouter } from 'react-router-dom'
import EcommerceHomePage from '../pages/Home'
import CheckoutPage from '../pages/Checkout'

export default function EcommerceAppRouter() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<EcommerceHomePage />} />
                <Route path='/checkout' element={<CheckoutPage />} />
            </Routes>
        </BrowserRouter>

    )
}