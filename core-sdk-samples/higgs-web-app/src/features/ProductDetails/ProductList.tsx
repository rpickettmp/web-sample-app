import React from 'react';
import { Grid } from '@mui/material';
import { ProductCard } from '.';
import { Product } from '../../models/Products';

interface ProductListProps {
    products: Product[];
    category: string;
    testId: string;
}

const ProductList: React.FC<ProductListProps> = ({ testId, products, category }) => {
    function capitalise(str: string){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <Grid
            data-testid={testId}
            container
            spacing={{ xs: 1, sm: 2 }}
            columns={{ xs: 1, sm: 4 }}
            direction='row'
            alignItems='center'
            justifyContent={{ xs: 'center', sm: 'flex-start' }}
        >
            {products.filter(product =>  !category || category === 'all' || product.category === capitalise(category))
                .map(({ id, label, price, imageUrl, imageUrl2, altText }) => (
                    <Grid item key={id} xs={1} md={1}>
                        <ProductCard
                            testId={`${testId}-${id}`}
                            id={id}
                            key={id}
                            label={label}
                            price={price}
                            imageUrl={imageUrl}
                            imageUrl2={imageUrl2}
                            altText={altText}
                        />
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default ProductList;
