// script.js
document.addEventListener('DOMContentLoaded', function() {
    const wishlistItems = [
        {
            title: "CrisTales PS5",
            imageUrl: 'https://m.media-amazon.com/images/I/81y9aUUjxHL._AC_UF1000,1000_QL80_.jpg',
            url: "https://gameplanet.com/producto/cris-tales-ps5/",    
            price: "$399.00"
        },
        {
            title: "Future Noir",
            imageUrl: "https://m.media-amazon.com/images/I/61AoeTBGRgL._AC_UF894,1000_QL80_.jpg",
            url: "https://www.amazon.com.mx/Future-Noir-Revised-Updated-Making/dp/0062699466/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=future+noir&qid=1702864069&sr=8-1&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47",
            price: "$344.00"
        },
        {
            title: "The Creative Gene",
            imageUrl: "https://m.media-amazon.com/images/I/51iRVKfd5dL.jpg",
            url: "https://www.amazon.com.mx/dp/197472591X/?coliid=I35WSLY7339DWZ&colid=A18Y7US5J3FQ&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
            price: "$473.00"
        },
        {
            title: "The Man in the High Castle",
            imageUrl: "https://m.media-amazon.com/images/I/51GnvfpTJ9L._AC_UF1000,1000_QL80_.jpg",
            url: "https://www.amazon.com.mx/Man-High-Castle-Philip-Dick/dp/0547572484/ref=sr_1_1?crid=EVVH3JLSUWDO&keywords=the+man+in+the+high+castle&qid=1702864167&sprefix=the+man+in+t%2Caps%2C153&sr=8-1&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47",
            price: "$293.00"
        },
        {
            title: "Entra al Vacío",
            imageUrl: "https://http2.mlstatic.com/D_NQ_NP_811578-MLU71134474351_082023-O.webp",
            url: "https://www.amazon.com.mx/dp/B01N4ICT9I/?coliid=I299H8CFGX4BVC&colid=26YH8YHIET29Q&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
            price: "$191.00"
        },
        {
            title: "Akira",
            imageUrl: "https://m.media-amazon.com/images/I/91C9pjrU1yL._AC_SL1500_.jpg",
            url: "https://www.amazon.com.mx/dp/B00ENNA62W/?coliid=I1X4I6B0A264F2&colid=26YH8YHIET29Q&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
            price: "$262.00"
        },
        {
            title: "Squishmallow Pikachu",
            imageUrl: "https://ss424.liverpool.com.mx/xl/1137271598.jpg",
            url: "https://www.liverpool.com.mx/tienda/pdp/peluche-de-pikachu-jazwares-squishmallows/1137271598?skuid=1137271598",
            price: "$374.00"
        },
        {
            title: "Paprika",
            imageUrl: "https://m.media-amazon.com/images/I/71HerJzc+zL._AC_SL1400_.jpg",
            url: "https://www.amazon.com.mx/Paprika-Blu-ray-Importado-Akio-Ohtsuka/dp/B000VWYJ5Y/ref=sr_1_31?crid=AH5N96UQ3GQH&keywords=ghibli+blu+ray&qid=1700944141&sprefix=ghibli+b%2Caps%2C164&sr=8-31&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47",
            price: "$334.00"
        },
        {
            title: "Wish You Were Here",
            imageUrl: "https://m.media-amazon.com/images/I/810CGm6+GbL._AC_SL1500_.jpg",
            url: "https://www.amazon.com.mx/Wish-Were-Here-Pink-Floyd/dp/B019VQSADM/ref=sr_1_3?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=26MR9FHWN88MT&keywords=pink+floyd+cd&qid=1700944334&refinements=p_85%3A9841545011&rnid=9754434011&rps=1&sprefix=pink+floyd+cd%2Caps%2C175&sr=8-3&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47",
            price: "$215.00"
        },
        {
            title: "Squishmallow Piplup",
            imageUrl: "https://ss424.liverpool.com.mx/xl/1137271580.jpg",
            url: "https://www.liverpool.com.mx/tienda/pdp/peluche-de-piplup-jazwares-squishmallows/1137271580?skuid=1137271580",
            price: "$374.00"
        },
        {
            title: "Unfinished Tales",
            imageUrl: "https://m.media-amazon.com/images/I/91H4kA+Ss7L._SL1500_.jpg",
            url: "https://www.amazon.com.mx/Unfinished-Tales-J-R-Tolkien/dp/0345357116/ref=pd_sim_sccl_2_2/147-5310940-6819020?pd_rd_w=mwS4r&content-id=amzn1.sym.87ddf269-557f-4159-8d22-1398277af916&pf_rd_p=87ddf269-557f-4159-8d22-1398277af916&pf_rd_r=0KYJ2ZVMY6X9N4MNK3GN&pd_rd_wg=rX3H0&pd_rd_r=683bf26b-5e4b-4fa4-ad5f-e2f2fd3205c5&pd_rd_i=0345357116&psc=1",
            price: "$155.00"
        },
        {
            title: "Funko Spiderman JP",
            imageUrl: "https://m.media-amazon.com/images/I/51YADEWMk2L._AC_SL1500_.jpg",
            url: "https://www.amazon.com.mx/Pop-Japanese-Spider-Man-Vinyl-Figure/dp/B09CBX6HS4/ref=sr_1_34?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=23CY6LNTURTT7&keywords=funko+spiderman&qid=1700945512&refinements=p_85%3A9841545011&rnid=9754434011&rps=1&sprefix=funko+spiderman%2Caps%2C136&sr=8-34&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47",
            price: "$319.00"
        },
        {
            title: "Funko Scarlet Spider",
            imageUrl: "https://m.media-amazon.com/images/I/617kyN6p7mL._AC_SL1000_.jpg",
            url: "https://www.amazon.com.mx/Funko-Pop-Spider-Man-Bobble-Head-coleccionable/dp/B0C4PBK315/ref=sr_1_9?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=23CY6LNTURTT7&keywords=funko+spiderman&qid=1700945512&refinements=p_85%3A9841545011&rnid=9754434011&rps=1&sprefix=funko+spiderman%2Caps%2C136&sr=8-9&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47",
            price: "$269.00"
        },
        {
            title: "Cobija Rilakkuma",
            imageUrl: "https://i.imgur.com/VY0xS0X.jpeg",
            url: "https://g.co/kgs/hFoFKi",
            price: "$300.00"
        },
        
        // Add more items as needed
    ];

    const wishlistElement = document.getElementById('wishlist');

    wishlistItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'wishlist-item';
        itemElement.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}">
            <p><a href="${item.url}" target="_blank">${item.title}</a></p>
            <p>${item.price}</p>
        `;
        wishlistElement.appendChild(itemElement);
    });
});
