const products: Product[] = [
    {
        id: '1214786008',
        label: 'Viscose tunic dress',
        imageUrl:
            'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff9%2F95%2Ff9950f8f5e73528a632a0dc4ef2f669991d2a3fd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        imageUrl2:
            'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe7%2Faa%2Fe7aada2d7aa8579868ff9747866d70d5e52aa234.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        altText: 'Viscose tunic dress',
        price: 18.99,
        variants: {
            color: ['Green'],
            size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            style: ['Midi Dresses'],
        },
        category: 'Women',
        brand: "H&M",
        description: `
        Knee-length tunic dress in an airy viscose weave with a band collar and a V-shaped opening at the front. Loose fit with gently dropped shoulders, short sleeves and a straight-cut hem with a slit at each side. Slightly longer at the back. Unlined.
`,
    },
    {
        id: '1226858001',
        label: 'Linen-blend suit waistcoat',
        imageUrl:
            'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F76%2F4c%2F764c8d81a2787a5de3bedde3023544ff6d38e56a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        imageUrl2:
            'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F2e%2F23%2F2e23e9e30ec8e532ecb3ac26551c5d9d0b3a6b38.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        altText: 'Linen-blend suit waistcoat',
        price: 42.99,
        variants: {
            color: ['White'],
            size: ['6', '8', '10', '12', '14', '16', '18'],
            style: ['Waistcoats'],
        },
        category: 'Women',
        brand: 'H&M',
        description: `
        Tailored, fitted waistcoat in an airy weave made from a linen and viscose blend. V-neckline, pearly buttons at the front, welt front pockets and a single back vent. Lined.
`,
    },
    {
        id: '1217677005',
        label: 'Wide pull-on trousers',
        imageUrl:
            'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2f%2F32%2F2f3286c130ed1f09dd4d6bda9f016040330f709f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        imageUrl2:
            'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F15%2Fd6%2F15d69f837ad558e1b03eec675ad38f1033d77cbe.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        altText: 'Wide pull-on trousers',
        price: 14.99,
        category: 'Women',
        brand: 'H&M',
        variants: {
            color: ['Black'],
            size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            style: ['High Waisted Trousers'],
        },
        description: `
        Trousers in an airy viscose weave featuring a high waist with covered elastication and a narrow drawstring. Loose fit with discreet pockets in the side seams and wide, straight legs.
`,
    },
    {
        id: '1027844046',
        label: "Linen-blend shirt",
        imageUrl:
            'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2f%2F32%2F2f3286c130ed1f09dd4d6bda9f016040330f709f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        imageUrl2:
            'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F15%2Fd6%2F15d69f837ad558e1b03eec675ad38f1033d77cbe.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        altText: "Linen-blend shirt",
        category: 'Women',
        brand: 'H&M',
        price: 18.99,
        variants: {
            color: ['Light blue'],
            size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            style: ['Shirts'],
        },
        description: `
        Shirt in a linen and cotton weave with a collar, buttons down the front and a double-layered yoke with a pleat at the back. Dropped shoulders, long sleeves with buttoned cuffs, an open chest pocket and a rounded hem. Slightly longer at the back.

`,
    },
    {
        id: '10015280001',
        label: 'Linen-blend shirt',
        imageUrl:
            'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F52%2F92%2F52922f3fbcbe261a6ec9e2fbd07b919eeed41840.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        imageUrl2:
            'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ff8%2Fe4%2Ff8e449b006de92592086b228f29e4da9746b6ba1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        altText: 'Linen-blend shirt',
        price: 95.00,
        variants: {
            color: ['Black'],
            size: ['8', '10', '12', '14', '16', '18', '20', '22', '24'],
            style: ['MAXI DRESSES'],
        },
        category: 'Women',
        brand: 'Monsoon',
        description: `
        Guarantees a warm reception. Engineered in slinky fabric, this black dress falls to maxi length with statement feather trimmed sleeves. Finished with a subtle twist detail under the bust and a slit in the skirt. 
`,
    },
    {
        id: '10015260001',
        label: 'MANDY MONOCHROME JUMPSUIT BLACK',
        imageUrl:
            'https://www.monsoon.co.uk/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-monsoon-master-catalog/default/dwfcb4430f/images/large/51_10015260001_6.jpg?sw=663&sh=848&sm=cut',
        imageUrl2:
            'https://www.monsoon.co.uk/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-monsoon-master-catalog/default/dw7a9f075e/images/large/23_10015260001_2.jpg?sw=663&sh=848&sm=cut',
        altText: 'MANDY MONOCHROME JUMPSUIT BLACK',
        price: 85.00,
        variants: {
            color: ['Black'],
            size: ['8', '10', '12', '14', '16', '18', '20', '22', '24'],
            style: ['JUMPSUITS'],
        },
        category: 'Women',
        brand: 'Monsoon',
        description: `
        As simple as black and white... Literally. This jumpsuit is organically chic with its monochrome finish, wide legs and halterneck. Finished with a keyhole button on the reverse, add a pop of colour with our selection of heels (if you fancy it).
    `,
    },
    {
        id: '61622226',
        label: 'FAIR ISLE LONDON BUS JUMPER IVORY',
        imageUrl:
            'https://www.monsoon.co.uk/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-monsoon-master-catalog/default/dw37117093/images/large/01_61622226_2.jpg?sw=663&sh=848&sm=cut',
        imageUrl2:
            'https://www.monsoon.co.uk/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-monsoon-master-catalog/default/dw6883c733/images/large/04_61622226_4.jpg?sw=663&sh=848&sm=cut',
        altText: 'FAIR ISLE LONDON BUS JUMPER IVORY',
        price: 28.00,
        variants: {
            color: ['Ivory'],
            size: ['6-12 mths', '12-18 mths', '18-24 mths', '2-3 yrs', '3-4 yrs', '4-5 yrs', '5-6 yrs', '7-8 yrs'],
            style: ['CHRISTMAS'],
        },
        category: 'Kids',
        brand: 'Monsoon',
        description: `
        Beep beep! Christmas is coming. So dress them for the festivities with this jumper, built with a chunky cotton knit. The cosy Fair Isle print features a big red bus carrying a Christmas tree, with snowflake detailing throughout. 
    `,
    },
    {
        id: '64634554',
        label: 'ARDEN VELVET MAXI DRESS BLUE',
        imageUrl:
            'https://www.monsoon.co.uk/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-monsoon-master-catalog/default/dwad259635/images/large/51_64634554_6.jpg?sw=663&sh=848&sm=cut',
        imageUrl2:
            'https://www.monsoon.co.uk/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-monsoon-master-catalog/default/dw5d82e8cf/images/large/23_64634554_2.jpg?sw=663&sh=848&sm=cut',
        altText: 'ARDEN VELVET MAXI DRESS BLUE',
        price: 125.00,
        variants: {
            color: ['Blue'],
            size: ['8', '10', '12', '14', '16', '18', '20', '22', '24'],
            style: ['EVENING DRESSES'],
        },
        category: 'Womens',
        brand: "Monsoon",
        description: `
        Bagged: A new dress and endless compliments. This piece is designed in velvet with a blend of prints in bursting hues. As flamboyant as it is feminine, it features puff shoulders and a v-neckline, with subtle definition under the bust. Finished with buttons through the front.
`,
    },
];

export interface Product {
    id: string;
    label: string;
    altText: string;
    imageUrl: string;
    imageUrl2: string;
    price: number;
    description: string;
    category: string;
    brand: string;
    couponCode?: string;
    position?: number;
    variants?: {
        color?: string[];
        size?: string[];
        style?: string[];
        silhouette?: string[];
    };
}

export const getProductById = (id: string) => products.find((p) => p.id === id);

export const formatCurrency = (num: number) =>
    `£ ${num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;

export default products;
