import ProductCard from "../material-ui/ProductCard";
import DrawerAppBar from "../material-ui/DrawerAppBar";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import BasicModal from "../material-ui/Modal";
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

    const handleClick = () => {
        setState({ ...state, open: true, snackBarMessage: "Product added to cart" });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const addToCart = (product) => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || []
        let indexOfProduct = cartData.findIndex(item => item.id === product.id)
        if (indexOfProduct !== -1) {
            cartData.splice(indexOfProduct, 1, { ...product, quantity: cartData[indexOfProduct].quantity + 1 })
            localStorage.setItem('cart', JSON.stringify(cartData))
            setCart(cartData)
        } else {
            cartData.push({ ...product, quantity: 1 })
            localStorage.setItem('cart', JSON.stringify(cartData))
            setCart(cartData)
            handleClick()
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