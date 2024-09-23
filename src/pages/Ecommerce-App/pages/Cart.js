import { useContext, useEffect } from "react";
import CartContext from "../context";
import MediaControlCard from "../../../libraries/material-ui/cartPageProductCard";

function CartPage() {
    const { cart, setCart } = useContext(CartContext)
    useEffect(() => {
        const getCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(getCart)
    }, [])
    console.log(cart)
    return (
        <div>
            {cart.map((item, index) => {
                const { image, title, description, price, rating } = item
                return (
                    // <div>
                    //     <img src={image} />
                    // </div>
                    <MediaControlCard product={item} />
                )
            })}
            <h1>Cart Page</h1>
        </div>
    );
}
export default CartPage;