import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CartListItems from './CartListItems';
import CartContext from '../context';
import { useContext } from 'react';

export default function CartDrawer({ openDrawer, closeDrawer }) {
    const { cart } = useContext(CartContext)
    return (
        <div>
            <React.Fragment>
                <Drawer
                    anchor={'right'}
                    open={openDrawer}
                    onClose={() => closeDrawer(false)}
                >

                    {cart.length < 1 ? <h1>Your Cart is empty</h1> : <CartListItems closeDrawer={closeDrawer} />}
                </Drawer>
            </React.Fragment>

        </div>
    );
}
