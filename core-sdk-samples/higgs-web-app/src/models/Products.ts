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
        label: 'Flutter-sleeved throw-on dress',
        imageUrl:
            'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F97%2F29%2F97293adfa36f99ff7e2c327bceb7d8ca55616b95.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        imageUrl2:
            'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe8%2F1f%2Fe81f8aae0f1aa8e464cc385849129d2d1b3c9799.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        altText: 'Flutter-sleeved throw-on dress',
        price: 15.99,
        variants: {
            color: ['Black'],
            size: ['3XS', 'XXS', 'XS', 'S', 'M', 'L', 'XL'],
            style: ['Short Dresses'],
        },
        category: 'Women',
        brand: 'H&M',
        description: `
        Short dress in a cotton crêpe weave with a V-shaped neckline and flutter sleeves. Fitted bodice, a gathered seam at the waist and a gently flared skirt with a gathered tier. Lined.
`,
    },
    {
        id: '1206248005',
        label: 'Ribbed vest top',
        imageUrl:
            'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc5%2F36%2Fc5368727d4b41c2d6eff328f3e9aa283d7e1b63b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        imageUrl2:
            'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F79%2Fe7%2F79e7b14f38c0f00a1199d961c1d25d7c3a11fa1d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        altText: 'Ribbed vest top',
        price: 6.99,
        category: 'Women',
        brand: 'H&M',
        variants: {
            color: ['Light blue'],
            size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            style: ['Vests'],
        },
        description: `
        Short, fitted vest top in ribbed jersey with a narrow cut at the top. Narrow trim around the neckline and armholes.
`,
    },
    {
        id: '1027844046',
        label: "Linen-blend shirt",
        imageUrl:
            'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fae%2F8d%2Fae8d78f39b68f88e08501cf9256d6f955bcd9f58.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        imageUrl2:
            'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F73%2Fbf%2F73bfd82456514aa50b81c2b1f9329e24025cbff8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        altText: 'Linen-blend shirt',
        category: 'Women',
        brand: 'H&M',
        price: 18.99,
        variants: {
            color: ['Khaki green'],
            size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            style: ['Shirts'],
        },
        description: `
        Shirt in a linen and cotton weave with a collar, buttons down the front and a double-layered yoke with a pleat at the back. Dropped shoulders, long sleeves with buttoned cuffs, an open chest pocket and a rounded hem. Slightly longer at the back.

`,
    },
    {
        id: '1229100006',
        label: "2-piece set",
        imageUrl:
            'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff4%2F61%2Ff461dbaeca242f9e7948afedadbf90ef66c87d17.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        imageUrl2:
            'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fbd%2Fd0%2Fbdd086d11bea336890e4b395af8a8871da6e7fd1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        altText: '2-piece set',
        category: 'Kids',
        brand: 'H&M',
        price: 9.99,
        variants: {
            color: ['Purple'],
            size: ['1-2Y', '2-3Y', '3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y'],
            style: ['Sweatshirts'],
        },
        description: `
        Set with a top and a coordinating pair of cycling shorts. Long-sleeved top in lightweight sweatshirt fabric with dropped shoulders and ribbing around the neckline, cuffs and hem. Cycling shorts with covered elastication at the waist.

`,
    },
    {
        id: '0930126091',
        label: "Printed T-shirt",
        imageUrl:
            'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F03%2Fd1%2F03d193f1e20f7dbde917168547543fd56164c185.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girls_clothing_topstshirts_tshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        imageUrl2:
            'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F1c%2F82%2F1c82be9e28089fadad7937d6dfddeacc13658de4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girls_clothing_topstshirts_tshirts%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        altText: 'Printed T-shirt',
        category: 'Kids',
        brand: 'H&M',
        price: 2.99,
        variants: {
            color: ['Rainbow'],
            size: ['1-2Y', '2-3Y', '3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y'],
            style: ['T-Shirts'],
        },
        description: `
        T-shirt in cotton jersey with a print motif on the front and a narrow trim around the neckline.

`,
    },
    {
        id: '1226334008',
        label: "Frill-trimmed ribbed T-shirt",
        imageUrl:
            'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F18%2F86%2F18867ef936cc3cdb5da6130a2fe5827b36401ba1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girls_clothing_topstshirts_tshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        imageUrl2:
            'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F39%2F42%2F394279157a6f4557477345279b0b0342c3c118f1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girls_clothing_topstshirts_tshirts%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        altText: 'Frill-trimmed ribbed T-shirt',
        category: 'Kids',
        brand: 'H&M',
        price: 3.99,
        variants: {
            color: ['Floral'],
            size: ['1-2Y', '2-3Y', '3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y'],
            style: ['T-Shirts'],
        },
        description: `
        Shirt in a linen and cotton weave with a collar, buttons down the front and a double-layered yoke with a pleat at the back. Dropped shoulders, long sleeves with buttoned cuffs, an open chest pocket and a rounded hem. Slightly longer at the back.

`,
    },
    {
        id: '1226386002',
        label: "Flutter-sleeved top",
        imageUrl:
            'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F28%2F7f%2F287f8ad3d7484deaa6b69ef802467d874799766c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girls_clothing_topstshirts_tshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        imageUrl2:
            'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe3%2F8b%2Fe38b12714fd5a4065087cbcf5590aba0a83ec494.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girls_clothing_topstshirts_tshirts%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        altText: 'Flutter-sleeved top',
        category: 'Kids',
        brand: 'H&M',
        price: 5.99,
        variants: {
            color: ['Pink'],
            size: ['1-2Y', '2-3Y', '3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y'],
            style: ['T-Shirts'],
        },
        description: `
        Top in soft cotton jersey with a round neckline and flutter sleeves.

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
