import React from 'react';
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
} from '@mui/material';
import { formatCurrency } from '../../models/Products';

interface OrderDetailsCardProps {
    productAttributes: {
        id: string;
        sku: string;
        label: string;
        imageUrl: string;
        altText: string;
        quantity: number;
        price: number;
        brand: string;
        category: string;
        total: number;
        size?: string;
        color?: string;
        style?: string;
        silhouette?: string;
    };

    buttonAction?: JSX.Element;
}

const OrderDetailsCard: React.FC<OrderDetailsCardProps> = ({
    productAttributes,
    buttonAction,
}) => {
    const {
        label,
        imageUrl,
        altText,
        quantity,
        brand,
        category,
        total,
        size,
        color,
        style,
        silhouette,
    } = productAttributes;

    return (
        <Card
            sx={{
                backgroundColor: '#000000',
                display: 'flex',
                width: { xs: 329, sm: 448, md: 689 },
            }}
            role='listitem'
        >
            <CardMedia
                sx={{ width: { xs: 100, sm: 209 } }}
                component='img'
                // image={process.env.PUBLIC_URL + imageUrl}
                image={imageUrl}
                alt={altText}
            />
            <CardContent
                sx={{
                    width: '100%',
                    borderBottom: '1px solid #333333',
                    padding: 0,
                    mb: 0,
                    mt: 2,
                    ml: 3,
                }}
            >
                <Typography
                    variant='subtitle1'
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box component='span'>{label}</Box>
                    <Box component='span'>{formatCurrency(total)}</Box>
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                    }}
                >
                    <Typography variant='body2'>Qty: {quantity}</Typography>
                    <Typography variant='body2'>Brand: {brand}</Typography>
                    <Typography variant='body2'>
                        Categroy: {category}
                    </Typography>
                    {color && (
                        <Typography variant='body2'>Color: {color}</Typography>
                    )}
                    {size && (
                        <Typography variant='body2'>Size: {size}</Typography>
                    )}
                </Box>
                {buttonAction && (
                    <CardActions sx={{ m: 0, p: 0 }}>
                        {buttonAction}
                    </CardActions>
                )}
            </CardContent>
        </Card>
    );
};

OrderDetailsCard.defaultProps = {
    buttonAction: undefined,
};

export default OrderDetailsCard;
