import ProductCard from "../../libraries/material-ui/ProductCard";
import DrawerAppBar from "../../libraries/material-ui/DrawerAppBar";
import axios from "axios";
import { useEffect, useState } from "react";

function CartHomePage() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(data => setData(data.data))
    }, [])
    console.log("data=>>", data)
    return (
        <>
            <DrawerAppBar />

            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                {data.map((item, index) => {
                    return <ProductCard product={item} key={index} />
                })}
            </div>
        </>
    )
}
export default CartHomePage;