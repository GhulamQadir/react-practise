import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactStars from 'react-stars'
import './index.css'


export default function ProductCard({ product, viewDetails, addToCart }) {
    const { id, title, image, price, rating } = product
    return (
        <>

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
                    <Button onClick={() => addToCart(product)} className='addToCartBtn' size="medium">Add to Cart</Button>
                    <Button onClick={() => viewDetails(id)} className='viewBtn' size="medium">View Details</Button>
                </CardActions>

            </Card>
        </>);
}
