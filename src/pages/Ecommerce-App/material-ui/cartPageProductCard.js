import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './index.css'
import CartContext from '../context';
import { useContext, useState } from 'react';
import { IconTrash } from '@tabler/icons-react';

export default function MediaControlCard({ product, index }) {
    const { image, title, price, quantity } = product
    const { setCart } = useContext(CartContext)

    const updateQuantity = (operator) => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || []

        if (operator === "+") {
            cartData.splice(index, 1, { ...product, quantity: quantity + 1 })
            localStorage.setItem("cart", JSON.stringify(cartData))
            setCart(cartData)
        } else {
            cartData.splice(index, 1, { ...product, quantity: quantity - 1 })
            localStorage.setItem("cart", JSON.stringify(cartData))
            setCart(cartData)
        }
    }

    const deleteProduct = () => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || []
        cartData.splice(index, 1)
        localStorage.setItem("cart", JSON.stringify(cartData))
        setCart(cartData)
    }



    return (
        <Card sx={{ display: 'flex', justifyContent: "space-around" }} className="card">
            <Box sx={{ display: 'flex', alignItems: "center", width: "50%" }} className="imageBox">
                <img src={image} style={{ height: 70, width: 70 }} />
                <Box sx={{ alignItems: "center", marginLeft: "10px" }}>
                    <Typography component="div" variant="string">
                        {title}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
                <Typography component="div" variant="string" sx={{ verticalAlign: "middle" }}>
                    RS {price * quantity}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: "center" }}>
                <IconButton onClick={() => updateQuantity("+")} aria-label="increase" size='small' sx={{ height: "25px", width: "25px", borderRadius: "50%", border: "1px solid purple", marginRight: "10px" }}>
                    <AddIcon />
                </IconButton>
                <p className='mx-2'>{quantity}</p>
                <IconButton onClick={() => { quantity > 1 && updateQuantity("-") }} aria-label="increase" size='small' sx={{ height: "25px", width: "25px", borderRadius: "50%", border: "1px solid purple" }}>
                    <RemoveIcon />
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex', alignItems: "center" }}>
                <IconButton onClick={deleteProduct} aria-label="increase" size='small' sx={{ height: "25px", width: "25px", borderRadius: "50%", border: "1px solid purple" }}>
                    <IconTrash stroke={2} />
                </IconButton>
            </Box>
        </Card>
    );
}
