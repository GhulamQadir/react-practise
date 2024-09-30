import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ReactStars from 'react-stars'
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import './index.css'


export default function ViewDetailsCard({ prodDetails, addToCart }) {

    const { title, image, description, rating, price, category } = prodDetails
    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 250, objectFit: "contain" }}
                image={image}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">{title}</Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        {description}
                    </Typography>
                    <ReactStars
                        count={5}
                        size={24}
                        value={rating.rate}
                        color2={'#ffd700'} />
                    <Typography component="div" variant="h6">RS {price}/-</Typography>
                    <Chip label={category} className='mt-2' />
                    <div className='mt-2'>
                        <Button onClick={() => addToCart(prodDetails)} className='addToCartBtn' size="medium" >Add to Cart</Button>
                    </div>
                </CardContent>
            </Box>
        </Card>
    );
}
