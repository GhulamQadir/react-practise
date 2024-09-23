import { useContext, useEffect } from "react";
import CartContext from "../context";
import MediaControlCard from "../../../libraries/material-ui/cartPageProductCard";

function CartPage() {
    const { cart, setCart } = useContext(CartContext)
    useEffect(() => {
        const getCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(getCart)
    }, [])
    return (
        <div>
            <h1>Cart Page</h1>

            {cart.map((item, index) => {
                return (
                    <MediaControlCard key={index} product={item} />
                )
            })}
        </div>
    );
}
export default CartPage;