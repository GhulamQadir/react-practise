import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CartContext from '../context';
import { Box, Button } from '@mui/material';
import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconTrash } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export default function CartListItems({ closeDrawer }) {
    const { cart, setCart } = useContext(CartContext)

    const updateQuantity = (product, operator, index) => {
        const { quantity } = product
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
        console.log("quantity=>>", quantity)
    }

    const deleteProduct = (index) => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || []
        cartData.splice(index, 1)
        localStorage.setItem("cart", JSON.stringify(cartData))
        setCart(cartData)
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {cart.map((item, index) => {
                const { title, image, price, quantity } = item
                return <div key={index}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src={image} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={title}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{ color: 'text.primary', display: 'inline' }}
                                    >
                                        RS {price * quantity}
                                    </Typography>
                                    <Box style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{ color: 'text.primary' }}
                                        >
                                            Qty:
                                        </Typography>
                                        <IconButton onClick={() => updateQuantity(item, "+", index)} aria-label="increase" size='small' sx={{ height: "25px", width: "25px", borderRadius: "50%", border: "1px solid purple", marginRight: "10px" }}>
                                            <AddIcon />
                                        </IconButton>
                                        <p className='mx-2'>{quantity}</p>
                                        <IconButton onClick={() => { quantity > 1 && updateQuantity(item, "-", index) }} aria-label="increase" size='small' sx={{ height: "25px", width: "25px", borderRadius: "50%", border: "1px solid purple" }}>
                                            <RemoveIcon />
                                        </IconButton>
                                        <IconButton onClick={() => deleteProduct(index)} aria-label="increase" size='small' sx={{ height: "25px", width: "25px", borderRadius: "50%", border: "1px solid purple" }}>
                                            <IconTrash stroke={2} />
                                        </IconButton>
                                    </Box>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </div>
            })}{cart.length &&
                <Link to="/checkout">
                    <Button style={{ width: "100%", backgroundColor: "purple", color: "white" }} size="small">
                        Checkout
                    </Button>
                </Link>}
        </List>
    );
}
