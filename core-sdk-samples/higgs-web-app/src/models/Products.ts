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
            'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc9%2Fff%2Fc9ffe754d3f8c9815041d710097f26cff8b03a27.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
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
            'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F52%2F92%2F52922f3fbcbe261a6ec9e2fbd07b919eeed41840.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        imageUrl2:
            'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ff8%2Fe4%2Ff8e449b006de92592086b228f29e4da9746b6ba1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        altText: 'Linen-blend shirt',
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
