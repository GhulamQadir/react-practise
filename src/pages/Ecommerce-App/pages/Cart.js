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
            <div className="flex justify-around">

                <div style={{ width: "24%" }}><h3>Product</h3></div>
                <div><h3>Price</h3></div>
                <div><h3>Quantity</h3></div>

            </div>

            {cart.map((item, index) => {
                return (
                    <MediaControlCard key={index} product={item} />
                )
            })}
        </div>
    );
}
export default CartPage;