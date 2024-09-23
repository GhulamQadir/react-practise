import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
export default function MediaControlCard({ product }) {
    const { image, title, description, price, rating } = product

    return (
        <Card sx={{ display: 'flex', border: "1px solid black", justifyContent: "space-around" }}>
            <Box sx={{ display: 'flex' }}>
                <img src={image} style={{ height: 70, width: 70, verticalAlign: "middle" }} />
                <Typography component="div" variant="h6" sx={{ verticalAlign: "middle" }}>
                    Live From Space
                </Typography>
                <Typography
                    component="div"
                    sx={{ color: 'text.secondary' }}
                >
                    Mac Miller
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="increase">
                    fsdfs
                </IconButton>
                <Fab size="small" sx={{ border: "1px solid purple" }} aria-label="add" >
                    <AddIcon />
                </Fab>
            </Box>
        </Card>
    );
}
