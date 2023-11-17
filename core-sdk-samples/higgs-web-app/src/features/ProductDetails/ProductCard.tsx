import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import theme from '../../contexts/theme';

interface ProductCardProps {
    id: string;
    label: string;
    price: number;
    altText: string;
    imageUrl: string;
    imageUrl2: string;
    testId: string;
}
const ProductCard: React.FC<ProductCardProps> = ({
    id,
    label,
    price,
    altText,
    imageUrl,
    imageUrl2,
    testId,
}) => {
    const [image, setImage] = useState(imageUrl);
    const handleMouseEnter = () => {
        setImage(imageUrl2);
    };
    const handleMouseOut = () => {
        setImage(imageUrl);
    };
    return (
        <Card sx={{
            minWidth: 172,
            maxWidth: 302,
            maxHeight: 478,
            m: 0,
            p: 0,
        }}>
            <CardActionArea
                component={Link}
                to={`/products/${id}`}
                data-testid={testId}
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    // backgroundColor: 'whitesmoke',
                }}
            >
                <CardMedia
                    component='img'
                    height='344.5'
                    // image={process.env.PUBLIC_URL + imageUrl}
                    image={image}
                    alt={altText}
                    sx={{
                        objectFit: 'contain',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseOut={handleMouseOut}
                />
                <CardContent
                    sx={{
                        display: 'flex',
                        alignItems: 'top',
                        justifyContent: 'space-between',
                        height: '64px',
                        width: '280px',
                        padding: '10px',
                    }}
                >
                    <Typography variant='body2' sx={{ color: '#000000', fontSize: '14px' }}>{label}</Typography>
                    <ArrowForward sx={{ color: '#000000' }} />
                </CardContent>
            </CardActionArea>
            <CardContent
                sx={{
                    display: 'flex',
                    alignItems: 'top',
                    backgroundColor: theme.palette.primary.main,
                    height: '40px',
                    width: '280px',
                    padding: '10px',
                }}
            >
                <Typography variant='body2' sx={{ color: '#000000', fontSize: '14px', fontWeight: 'bold' }}>{`£ ${price.toFixed(2)}`}</Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
