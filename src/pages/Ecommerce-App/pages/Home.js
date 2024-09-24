import ProductCard from "../../../libraries/material-ui/ProductCard";
import DrawerAppBar from "../../../libraries/material-ui/DrawerAppBar";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import BasicModal from "../../../libraries/material-ui/Modal";
import { useSearchParams } from "react-router-dom";
import CartContext from "../context";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';


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


    const [state, setState] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'right',
        snackBarMessage: "Product added to cart!"
    });
    const { open, snackBarMessage, vertical, horizontal } = state;

    const handleClick = (message) => {
        setState({ ...state, open: true, snackBarMessage: message });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const addToCart = (product) => {
        console.log("home s chal rha ha")
        let prodMatched = false
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === product.id) {
                prodMatched = true
                handleClick("Product already added to cart!")
            }
        }
        if (prodMatched === false) {
            const cartData = JSON.parse(localStorage.getItem('cart')) || []
            cartData.push({ ...product, quantity: 1 })
            localStorage.setItem('cart', JSON.stringify(cartData))
            setCart(cartData)
            console.log("product added to cart")
            handleClick("Product added to cart!")
        }
    }


    return (
        <>
            <DrawerAppBar />
            <Snackbar anchorOrigin={{ vertical, horizontal }}
                open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackBarMessage}
                </Alert>
            </Snackbar>
            <BasicModal addToCart={addToCart} prodDetails={prodDetails} openModal={openModal} closeModal={() => setOpen(false)} />
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                {data.map((item, index) => {
                    return <ProductCard addToCart={addToCart} viewDetails={viewDetails} product={item} key={index} />
                })}
            </div>
        </>
    )
}
export default EcommerceHomePage;