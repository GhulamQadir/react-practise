import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactStars from 'react-stars'
import './index.css'
import CartContext from '../../pages/Ecommerce-App/context';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useState, useContext } from 'react'


export default function ProductCard({ product, viewDetails }) {
    const { id, title, image, price, rating } = product

    const { cart, setCart } = useContext(CartContext)
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

    const addToCart = () => {
        let prodMatched = false
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === product.id) {
                prodMatched = true
                handleClick("Product already added to cart!")
            }
        }
        if (prodMatched === false) {
            const cartData = JSON.parse(localStorage.getItem('cart')) || []
            cartData.push(product)
            localStorage.setItem('cart', JSON.stringify(cartData))
            setCart(cartData)
            console.log("product added to cart")
            handleClick("Product added to cart!")
        }
    }
    return (
        <>
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
            <Card sx={{ width: 350, marginTop: 10 }} >
                <div>
                    <img src={image} style={{ height: 240, width: "100%", objectFit: "contain" }} />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {title.slice(0, 25)}...
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        RS {price}
                    </Typography>
                    <ReactStars
                        count={5}
                        size={24}
                        value={rating.rate}
                        color2={'#ffd700'} />
                </CardContent>
                <CardActions>
                    <Button onClick={addToCart} className='addToCartBtn' size="medium">Add to Cart</Button>
                    <Button onClick={() => viewDetails(id)} className='viewBtn' size="medium">View Details</Button>
                </CardActions>

            </Card>
        </>);
}
