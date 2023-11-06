/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Box, Typography } from '@mui/material';
import mParticle from '@mparticle/web-sdk';
import { Page } from '../../layouts/Page';
import { ProductList } from '../../features/ProductDetails';
import products from '../../models/Products';
import banner from '../../assets/images/banner.png';

const ShopPage = () => {
    const [loading, setLoading] = useState(true);
    const [productCategory, setProductCategory] = useState('all');
    const { category } = useParams() as { 
        category: string;
    };
    const [bannerURL, setBannerURL] = useState('');

    function capitalise(str: string){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    function findBannerURL() {
        const currUser = mParticle.Identity.getCurrentUser();
        if (currUser && currUser.isLoggedIn()) {
            let profileData = JSON.parse(
                localStorage.getItem(currUser.getMPID())!,
            );
            if (
                profileData &&
                '$FirstName' in profileData!.user_profile.user_attributes
            ) {
                setBannerURL(banner);
            } else {
                fetch(
                    `https://demo.mp.com/mp/profile?wSID=432&mPID=${currUser.getMPID()}`,
                )
                    .then((response) => response.json())
                    .then((data) => {
                        profileData = data;
                        if (
                            '$FirstName' in
                            profileData!.user_profile.user_attributes
                        ) {
                            setBannerURL(banner);
                        }
                    });
            }
        } else {
            setBannerURL(banner);
        }
        setLoading(false);
    }
    // As per React conventions, it is recommended to trigger each mParticle
    // event in its own useEffect call.
    useEffect(() => {
        // To simulate a pageview with an SPA, we are triggering a
        // PageView whenever the Shop Page component is mounted.
        // In the case of this example application, our Shop Page
        // is our Landing page, so we are logging it as a "Landing"
        // Page View
        mParticle.logPageView('Landing');
    });

    useEffect(() => {
        // As our sample application represents a simple, streamlined use case,
        // we are simply using a single Product Impression to identify that a list of
        // products was viewed by the visitor. In most cases, you may have multiple
        // product lists within a single view. For example, Featured Products vs
        // Recommended or Related Products. Each of these would be considered a
        // separate list of products. You can also use a product impression event
        // for a single product as well.

        // First we convert our array of products to a array of mParticle products
        // so that your fields can be mapped to the necessary mParticle eCommerce
        // attributes
        // For more information, please review our Docs:
        // https://docs.mparticle.com/developers/sdk/web/commerce-tracking/#tracking-basic-purchases
        const mParticleProducts = products.filter(product =>  !category || category === 'all' || product.category === capitalise(category))
            .map(({ label, id, price }) =>
                mParticle.eCommerce.createProduct(label, id, price),
            );

        // We then create a product impression
        const impressions = mParticle.eCommerce.createImpression(
            'Product List Impression',
            mParticleProducts,
        );

        // Then log the product impression
        mParticle.eCommerce.logImpression(impressions);
    });

    if (!loading) {
        return (
            <Page>
                <Grid item>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            my: 1,
                        }}
                    />
                </Grid>
                <ProductList products={products} testId='shop-product-list' category={category} />
            </Page>
        );
    }
    return (
        <Page>
            <ProductList products={products} testId='shop-product-list' category={category} />
        </Page>
    );
};

export default ShopPage;
