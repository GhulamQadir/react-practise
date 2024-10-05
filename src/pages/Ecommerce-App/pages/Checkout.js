import { useContext, useEffect } from "react";
import CartContext from "../context";
import DrawerAppBar from "../material-ui/DrawerAppBar";

function CheckoutPage() {
    const { cart, setCart } = useContext(CartContext)


    useEffect(() => {
        const getCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(getCart)
    }, [])

    return (
        <>
            <DrawerAppBar />
            <h1>Checkout Page</h1>
        </>
    )
}
export default CheckoutPage;