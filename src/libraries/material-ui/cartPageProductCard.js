import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './index.css'

export default function MediaControlCard({ product }) {
    const { image, title, price, rating } = product

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
                    RS {price}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: "center" }}>
                <IconButton aria-label="increase" size='small' sx={{ height: "25px", width: "25px", borderRadius: "50%", border: "1px solid purple", marginRight: "10px" }}>
                    <AddIcon />
                </IconButton>
                <IconButton aria-label="increase" size='small' sx={{ height: "25px", width: "25px", borderRadius: "50%", border: "1px solid purple" }}>
                    <RemoveIcon />
                </IconButton>
            </Box>
        </Card>
    );
}
