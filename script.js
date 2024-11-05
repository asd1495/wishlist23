// script.js
document.addEventListener('DOMContentLoaded', function() {
    const wishlistItems = [
        {
            title: "Kingdom Hearts: Melody of Memory | PS4",
            imageUrl: 'https://m.media-amazon.com/images/I/71Ffn6hGGGL._AC_SL1000_.jpg',
            url: "https://www.amazon.com.mx/Kingdom-Hearts-Melod%C3%ADa-memoria-PS4/dp/B08GYTC39V/ref=sr_1_3?crid=9FJL53X0M4W4&dib=eyJ2IjoiMSJ9.uowhHj3ncFAYoqp2IydM_T21Hae5IeUZRyZqTpEoXAzBnMxGZGhuSCRXSLJat_jBuW3O2gRkcd4hj7YhoRchYVRTUIr5eMO5xKwtIM1vvc-yW8bkXhYQQ-23X1tLhLTxf1AW2pSTNIQKtNIcGW78tyGHe4QSrSDbfDw99w8ytmohTxs8S5kXOwO7aO-jYOJfANiJwOHuICM2jMaHUO_woi-P4a_s9vtBWYntshqpOULjakc9vtatRGF2N-ZvwZiXLdrUG8ykEcxRUR1HcZBa2_FZRouERnKcy9gNW22HDd0.GG9Bw634pgFeh0DAxK5vkaDnY5QSpZdviyqtkA8W72Q&dib_tag=se&keywords=kingdom+hearts+melody+of+memory&qid=1730761842&sprefix=kingdom+hearts+melo%2Caps%2C139&sr=8-3&ufe=app_do%3Aamzn1.fos.45030d3a-91a9-4303-890a-776dee9077c1",    
            price: "$399.00"
        },
        {
            title: "Lego Animal Crossing: Julian's Birthday Party",
            imageUrl: "https://m.media-amazon.com/images/I/81NRCSaXUoL._AC_SL1500_.jpg",
            url: "https://www.amazon.com.mx/LEGO-cumplea%C3%B1os-construcci%C3%B3n-minifigura-Videojuegos/dp/B0CGYR9ZRH/ref=sr_1_7?crid=2E6GJNGSCCX70&dib=eyJ2IjoiMSJ9.yJjDS18n0O_yK3HQckD5GhuDOuwdWisVk_rWf7wltZxjKlfACiB80ata7UezXka6luJzAAcZ5XFo08smI8pe542I4Hq4CnLxJnBmFzylguhN6QmSsGFUcPnW2TwEd4c5N9ZqRbwcC7owhwuuiuncsuUzzZVA2nOu9JeJwQr9qR1rc85E_2Vj5wjTxRc1BDPY71nv0T2BMssY7UQpD_7GouDxsJAJRbWDfd7KRhst94bL2gnNKftcqG9r3Rds0vCwEl9pDejhY9SpKroNzD77cNHGLuIIJTwVq8XC6QxqTek.bQyHOps7BhHOaxqg_MMmYxJcEucRh4i7soENtfVQGNQ&dib_tag=se&keywords=lego+animal+crossing&qid=1730761939&sprefix=lego+animal%2Caps%2C148&sr=8-7&ufe=app_do%3Aamzn1.fos.de93fa6a-174c-4df7-be7c-5bc8e9c5a71b",
            price: "$349.00"
        },
        {
            title: "Pokémon TCG: Scarlet & Violet—Shrouded Fable Mini Tin",
            imageUrl: "https://m.media-amazon.com/images/I/7153x21ieML._AC_SL1500_.jpg",
            url: "https://www.amazon.com.mx/Pok%C3%A9mon-TCG-Scarlet-Violet-Shrouded-Dusknoir/dp/B0D4B3K2DQ/ref=sr_1_2?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=11IP6RJKUGTNR&dib=eyJ2IjoiMSJ9.aLLxbBzI49TaxVmmLfthtf0sCHZFybKf3PEMhmYnfEo-_I7u0UFzSRA3WPCId8H6g1iezjP33itz6au2P7GSJ4piEUTxyc8q16x9yxqGf-W7wHOYGGk9kcfL_z_H-jv1TIbpDCpX34DBaeKEdGd7Gm20_lzkWEpY2iiCMAUc4Ezry4lkRRv_VZmXLdTXtAuGjd8_SfmNeipZ7Dz9TdYy8xl3lVWWvSg49QELanSlw4LL_qivf8Wt9BxCXOAzb7IyCZTNkIvJJ94Xy5OdGZG1YQirBZhKOdVCVVbBtg24KV0.3b-EKRe4Z1V_zBhuRCGsk6AtC9lhSutYi3pQofzYEcE&dib_tag=se&keywords=pokemon+shrouded+fable+mini+tin&qid=1730762270&sprefix=pokemon+shrouded+fable+mini+tin%2Caps%2C133&sr=8-2&ufe=app_do%3Aamzn1.fos.de93fa6a-174c-4df7-be7c-5bc8e9c5a71b",
            price: "$209.00"
        },
        {
            title: "Gunpla Kun",
            imageUrl: "https://m.media-amazon.com/images/I/61PW742MXdL._AC_SL1500_.jpg",
            url: "https://www.amazon.com.mx/Hobby-2640762-Gunpla-Kun-Version-Recreation/dp/B0BQHH7XXQ/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=K5FV5GV752R5&dib=eyJ2IjoiMSJ9.SX4JJBaXeBzgG2_Vp5muQeGyQkhGQFeJPXI5RF6nP0AeAiseXCZNRhZDl4h113aClpA9YNc_4d4azkkKEmEqXiz6hFojAQnWfEsBFgeVR3MNQBXdQHIL1aQuSU43MFY_KtL_V5w686_y7vT5ecT3M3yw_yy5I8G6KVx9G0MUwfu6FwmNoqCNxib5kjudHnB7IOjhYPA0Vr7GNjvwDdY3rrt-NpdnTgf0U088cscZOpdHCwwu9SPBPc0w3ZiShI-FQFxQbbsjlQ2cvLAHLlCre4CUqfFDQ82s6XnZPIJL9Ow.nkKZs2Npp6I5Y6w7XGu_28ZwcpA4v-MTvRUFYc2UiJo&dib_tag=se&keywords=gunpla+kun&qid=1730762638&sprefix=gunpla+kun%2Caps%2C140&sr=8-1&ufe=app_do%3Aamzn1.fos.45030d3a-91a9-4303-890a-776dee9077c1",
            price: "$361.00"
        },
        {
            title: "Disrupting the Game",
            imageUrl: "https://m.media-amazon.com/images/I/81OFZCCBwlL._SL1500_.jpg",
            url: "https://www.amazon.com.mx/Disrupting-Game-Bronx-Top-Nintendo/dp/1400226678/ref=sr_1_1?crid=1UT10LHYBCY4L&dib=eyJ2IjoiMSJ9.yAv5xUx1voH2WkHPiFmOU8_td6tQ4GmDxM-s-14DdQ035uMEEkUl2KhkAuy_RIjEak_5xfUtCCi5E-PDeHomnlxSucXT3OVXFslENO5xWHT3ziEDyVmpPa9wO25_DPEUa7n35_LRaPsrOU7mzxMn6CyZU0PlJGcigUXFiIQ57-dY39KfiOacVDCCiGBKfCIp5FsmVqPalaek__ik66mDSmhNkSoLeO8_APgj7x4MTW8jy0F2Uk_o1bFOY_hAjTku.1YtCOCi3uYGmqDgqfulm9wKqv6Z8HOyThS9OMBBhdCE&dib_tag=se&keywords=disrupting+the+game&qid=1730763527&sprefix=disrupti%2Caps%2C156&sr=8-1&ufe=app_do%3Aamzn1.fos.de93fa6a-174c-4df7-be7c-5bc8e9c5a71b",
            price: "$406.00"
        },
        {
            title: "NieR Automata: Short Story Long",
            imageUrl: "https://m.media-amazon.com/images/I/81S8C7mDECL._SL1500_.jpg",
            url: "https://www.amazon.com.mx/Nier-Automata-Short-Story-Long/dp/1974701840/ref=srd_d_psims_d_sccl_2_4/147-5310940-6819020?pd_rd_w=iZ2CF&content-id=amzn1.sym.05004666-285b-4520-8e91-84836f1d7a62&pf_rd_p=05004666-285b-4520-8e91-84836f1d7a62&pf_rd_r=2GF9Q6XTEBYXCT9RJ0GM&pd_rd_wg=3xqmf&pd_rd_r=aa13ce40-6d0f-4ab0-b8c1-22892eb6b3ae&pd_rd_i=1974701840&psc=1",
            price: "$294.00"
        },
        {
            title: "Squishmallow Pikachu",
            imageUrl: "https://http2.mlstatic.com/D_NQ_NP_911910-MLU75608828878_042024-O.webp",
            url: "https://www.mercadolibre.com.mx/squishmallows-pokemon-peluche-de-pikachu-de-14-pulgadas/p/MLM35794967?pdp_filters=item_id:MLM3057458474",
            price: "$382.00"
        },
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
