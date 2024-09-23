import ProductCard from "../../../libraries/material-ui/ProductCard";
import DrawerAppBar from "../../../libraries/material-ui/DrawerAppBar";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import BasicModal from "../../../libraries/material-ui/Modal";
import { useSearchParams } from "react-router-dom";
import CartContext from "../context";


function EcommerceHomePage() {

    const { cart, setCart } = useContext(CartContext)
    const [data, setData] = useState([])
    const [openModal, setOpen] = useState(false)
    const [prodDetails, setProdDetails] = useState({})
    let [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get('category')


    useEffect(() => {
        if (!category || category === "all")
            axios('https://fakestoreapi.com/products')
                .then(data => setData(data.data))
                .catch((error) => console.log(error))
    }, [searchParams])

    useEffect(() => {
        if (category && category !== "all") {
            axios(`https://fakestoreapi.com/products/category/${category}`)
                .then(data => setData(data.data))
                .catch((error) => console.log(error))
        }
    }, [searchParams])

    const viewDetails = (id) => {
        axios(`https://fakestoreapi.com/products/${id}`)
            .then(data => {
                setProdDetails(data.data)
                setOpen(true)
            })
            .catch((error) => console.log(error))
    }


    useEffect(() => {
        const getCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(getCart)
    }, [])


    return (
        <>
            <DrawerAppBar />

            <BasicModal prodDetails={prodDetails} openModal={openModal} closeModal={() => setOpen(false)} />
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                {data.map((item, index) => {
                    return <ProductCard viewDetails={viewDetails} product={item} key={index} />
                })}
            </div>
        </>
    )
}
export default EcommerceHomePage;