document.addEventListener('DOMContentLoaded', function() {
    const familyItems = { 
        "Salcedo Dávila": { 
            "Armando": [ 
                { 
                    title: "Kingdom Hearts: Melody of Memory | PS4", 
                    imageUrl: 'https://m.media-amazon.com/images/I/71Ffn6hGGGL._AC_SL1000_.jpg', 
                    url: "https://www.amazon.com.mx/Kingdom-Hearts-Melod%C3%ADa-memoria-PS4/dp/B08GYTC39V/ref=sr_1_3?crid=H6EO4BD7ADP7&dib=eyJ2IjoiMSJ9.NenpAhFiK9Z9IrmZ0-6OOui5jitL0JPb7ZRD4MrVBvd8XkPjlkv4-DVeDov-VgSSdgKJ1rTEC49VLVbSEigADxM79vqXj0kIvM3p4EHpbE2_aytdHOXpBMzFv2pzt9akswVDAjM6INwMNTmJ-S-RWIII9dH31fQGiL49bnYx2MC90S_xf9OrsiYjxwHedRLucT06GXVy9pkLMO0aQqXag7EzmltcELMRxEbb3B2iaRKgOSjyux7CNzBJAMjwBCdmqMO5j2PUuXu1tAjrAZibYaCsvn9Yvm3MOV7_mPYpPZs.M67JfbfWRmFmkFf6Q7J0pt7XNfWSsBuD6ki9XWkxZBA&dib_tag=se&keywords=kingdom+hearts+melody+of+memory&qid=1762733190&sprefix=kingdom+hearts+melo%2Caps%2C234&sr=8-3&ufe=app_do%3Aamzn1.fos.45030d3a-91a9-4303-890a-776dee9077c1",
                    price: "$399.00" 
                }, 
                { 
                    title: "Pokémon TCG Battle Deck", 
                    imageUrl: 'https://m.media-amazon.com/images/I/81fuPY2PJ8L._AC_SL1500_.jpg', 
                    url: "https://www.amazon.com.mx/Pok%C3%A9mon-Tapu-Koko-Leaves-Battle/dp/B0DC651JYB/ref=sr_1_5?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=28R68LDZ6VB5K&dib=eyJ2IjoiMSJ9.9xS04gOG8D1hm04TWs6-WcjKJ14Z-aDlTaoQksIOqVeTGyP0cPqUbdkl4njjmaLkcioDMVqaTpFwvo2xAu0SOOujfon-cFS-zxgB46o6IICiDXAxkb_mus-MbivW0P4DCKxBpsu7bL14pWZVeJG65sb-CFAHMuTTdtWrxK98YblL4ejOKVeaGhkCmFplhDkLN1GdZo7wuRtAj3z-DBsiwyuWFcZmIVYcX33RSUQVd_8eFf0zYIGQwFUb-k3FchXsxr9-sjP60m5RSjz9jQIfIQfR85o9L6H0-LBcHGFeC4w.6Zu-kuLDmAERecUw5O6qs-qlXJmn3ZxvxH8TE4DOezE&dib_tag=se&keywords=pokemon+tcg+deck&qid=1763236141&s=toys&sprefix=pokemon+tcg+deck%2Ctoys%2C178&sr=1-5&ufe=app_do%3Aamzn1.fos.de93fa6a-174c-4df7-be7c-5bc8e9c5a71b",
                    price: "$222.00" 
                }, 
                { 
                    title: "Squishmallow Fuecoco", 
                    imageUrl: "https://ss424.liverpool.com.mx/xl/1153824521.jpg", 
                    url: "https://www.liverpool.com.mx/tienda/pdp/peluche-de-fuecoco-jazwares-de-31-cm/1153824521?skuid=1153824521",
                    price: "$321.00" 
                }, 
                { 
                    title: "Squishmallow Dragonite", 
                    imageUrl: "https://ss424.liverpool.com.mx/xl/1153823398.jpg", 
                    url: "https://www.liverpool.com.mx/tienda/pdp/peluche-de-dragonite-drag%C3%B3n-jazwares-de-32-cm/1153823398?skuid=1153823398",
                    price: "$335.00"
                }, 
                { 
                    title: "Gunpla Kun", 
                    imageUrl: "https://m.media-amazon.com/images/I/61PW742MXdL._AC_SL1500_.jpg", 
                    url: "https://www.amazon.com.mx/Hobby-2640762-Gunpla-Kun-Version-Recreation/dp/B0BQHH7XXQ/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=K5FV5GV752R5&dib=eyJ2IjoiMSJ9.SX4JJBaXeBzgG2_Vp5muQeGyQkhGQFeJPXI5RF6nP0AeAiseXCZNRhZDl4h113aClpA9YNc_4d4azkkKEmEqXiz6hFojAQnWfEsBFgeVR3MNQBXdQHIL1aQuSU43MFY_KtL_V5w686_y7vT5ecT3M3yw_yy5I8G6KVx9G0MUwfu6FwmNoqCNxib5kjudHnB7IOjhYPA0Vr7GNjvwDdY3rrt-NpdnTgf0U088cscZOpdHCwwu9SPBPc0w3ZiShI-FQFxQbbsjlQ2cvLAHLlCre4CUqfFDQ82s6XnZPIJL9Ow.nkKZs2Npp6I5Y6w7XGu_28ZwcpA4v-MTvRUFYc2UiJo&dib_tag=se&keywords=gunpla+kun&qid=1730762638&sprefix=gunpla+kun%2Caps%2C140&sr=8-1&ufe=app_do%3Aamzn1.fos.45030d3a-91a9-4303-890a-776dee9077c1",
                    price: "$309.00" 
                }, 
                { 
                    title: "NieR Automata: Short Story Long", 
                    imageUrl: "https://m.media-amazon.com/images/I/81S8C7mDECL._SL1500_.jpg", 
                    url: "https://www.amazon.com.mx/Nier-Automata-Short-Story-Long/dp/1974701840/ref=srd_d_psims_d_sccl_2_4/147-5310940-6819020?pd_rd_w=iZ2CF&content-id=amzn1.sym.05004666-285b-4520-8e91-84836f1d7a62&pf_rd_p=05004666-285b-4520-8e91-84836f1d7a62&pf_rd_r=2GF9Q6XTEBYXCT9RJ0GM&pd_rd_wg=3xqmf&pd_rd_r=aa13ce40-6d0f-4ab0-b8c1-22892eb6b3ae&pd_rd_i=1974701840&psc=1",
                    price: "$220.00" 
                }, 
                { 
                    title: "Persona 5 Tactica PS5", 
                    imageUrl: 'https://m.media-amazon.com/images/I/81lWolHFm5L._AC_SL1500_.jpg', 
                    url: "https://www.amazon.com.mx/Sega-Persona-Tactica-para-PlayStation/dp/B0C8VHCHX4/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=165S85KZEIGZX&dib=eyJ2IjoiMSJ9.Q_qT3TYQPeuNlBJSLxypi-9h1FTCcdOaKQDEytYstBhxCP7A_EnJNwqNVmQpgq2DJEF_Iq96xjra0EEhiOEzglxJUVdFu-hVnFzaULVzfj-5jtEshO-mU3hXW6_Hn5A18gXJm7Xx4wD5QEc7ncoEY_eKTbps-y8caQdF4ZYtf4himgrFMqEYGzIQ_DOsYAHpdrT2HSunSn-FxnPOV7buDrRXKjL0dK0IlpWmc0xkbFFOB-3b2-nwS38GBJoF0kw0Kz4x5sWI4CBlRI33WXk3to8agxWxVDKIHvp-OIZnMOI.1GTp6Htjey_LgffXSTUgB3qCm8SafFsAeajdP1pFUQw&dib_tag=se&keywords=persona+5+tactica+ps5&qid=1763237007&sprefix=persona+5+tactica+ps%2Caps%2C179&sr=8-1&ufe=app_do%3Aamzn1.fos.45030d3a-91a9-4303-890a-776dee9077c1",
                    price: "$388.00" 
                },
            ], 
            "Fernando": [ 
                { 
                    title: "Mouse", 
                    imageUrl: 'https://m.media-amazon.com/images/I/61lCJsdW2XL._AC_SL1336_.jpg', 
                    url: "https://www.amazon.com.mx/TERPORT-12000DPI-Ajustables-Programables-Computadora/dp/B0C3QG5YMM/ref=mp_s_a_1_16?crid=3A1H7AS8100QG&dib=eyJ2IjoiMSJ9.cdrUBZk76HIjm6ZOlJjkaq9f48OWWKUnjkS-BpJ2BatJ8abl0CXuOzT7-8GexIz8jvwqzm_tJ_Xcw8Gu-jPWUW3mY_-ZHnBlSZaIDoPZguYkmvitbhDG-zLn1KTyYaSvWr67gMgAlV2p5CvsbjvmSdOHUVV8a9LoTsqAHG5he4vgTcJSwe5qgKCa-bvFH6jiFE8iv9rvDRY5G3_c2doQKg._xV5RaprI-7IyruFG8TDXITwkRxrTKgyctVkPjXDiDs&dib_tag=se&keywords=mouse+alambrico+gamer&qid=1763141095&refinements=p_85%3A9841545011&rnid=9754434011&rps=1&sprefix=%2Caps%2C126&sr=8-16&ufe=app_do%3Aamzn1.fos.db4f1a57-87f1-43c5-9a39-0cdca6036b57",
                    price: "$291.00" 
                },
                { 
                    title: "Gundam HG Lfrith", 
                    imageUrl: 'https://m.media-amazon.com/images/I/61IXZciReXL._AC_SL1200_.jpg', 
                    url: "https://www.amazon.com.mx/BANDAI-Hobby-Mercury-Gundam-LFRITH/dp/B0B4NNKYCD/ref=ast_sto_dp_puis?ufe=app_do%3Aamzn1.fos.de93fa6a-174c-4df7-be7c-5bc8e9c5a71b",
                    price: "$410.00" 
                },
                { 
                    title: "Gundam HG Stark Jegan", 
                    imageUrl: 'https://m.media-amazon.com/images/I/71Fc5AztFfL._AC_SL1348_.jpg', 
                    url: "https://www.amazon.com.mx/RGM-89S-Stark-Jegan-Mobile-Gundam/dp/B002Z6ISQU/ref=ast_sto_dp_puis?ufe=app_do%3Aamzn1.fos.de93fa6a-174c-4df7-be7c-5bc8e9c5a71b",
                    price: "$420.00" 
                },
                { 
                    title: "Gundam HG Calibarn", 
                    imageUrl: 'https://m.media-amazon.com/images/I/61CiHvDnuWL._AC_SL1500_.jpg', 
                    url: "https://www.amazon.com.mx/BANDAI-Witch-Mercury-art%C3%ADculo-Tentativo/dp/B0BYYMKV2B/ref=ast_sto_dp_puis?ufe=app_do%3Aamzn1.fos.1f47693a-e1a6-4b06-ba29-28033858cf82&th=1",
                    price: "$479.00" 
                },
                { 
                    title: "Gundam HG Gouf", 
                    imageUrl: 'https://m.media-amazon.com/images/I/61Hc+YmTDTL._AC_SL1079_.jpg', 
                    url: "https://www.amazon.com.mx/Bandai-Revive-Mobile-Gundam-Building/dp/B01BD3NIJ2/ref=mp_s_a_1_30?crid=1V3QB8A9XKMIM&dib=eyJ2IjoiMSJ9.nX-EM9qaF8WSGcYtbYaTXGVXjGtxZ6xeMJCKWLJqdagq0LY81SGkX5a-7X-VbQbnVRPBmeFOrcPTu9JjXdWD0gf4t1Hi2kQfBRXnGesvX1mQ3KkD4o1IZkFjAkL0onNg46Upb1rKHAvBe-7tmmoRlteHa92rveMRrIunzdT4J6AQyDwXU5WrVAPSv2W3LIFc7hYOsZ70kx9TBdkSC4fZnQ.GYxzhkIhjt253Ce29tMTQhXUAy9BAZZ0kJYEMWUUd5c&dib_tag=se&keywords=gunpla+hg&qid=1763141348&refinements=p_85%3A9841545011&rnid=9754434011&rps=1&sprefix=gunpla+h%2Caps%2C156&sr=8-30&ufe=app_do%3Aamzn1.fos.de93fa6a-174c-4df7-be7c-5bc8e9c5a71b&xpid=Ia2TaawpROuf5",
                    price: "$399.00" 
                },
                { 
                    title: "Tarjeta de Steam (venden en oxxo)", 
                    imageUrl: 'https://m.media-amazon.com/images/I/71Tnsa5nveL.jpg', 
                    url: "Oxxo",
                    price: "$200.00" 
                },
            ], 
            "Rocío": [ 
                { 
                    title: "Bolsa de gatito", 
                    imageUrl: "https://m.media-amazon.com/images/I/718v8QTckhL._AC_SX569_.jpg", 
                    url: "https://www.amazon.com.mx/dp/B0918BVR4N?ref=cm_sw_r_cso_wa_apan_dp_M9VAZ32CMT3SZH2Y8Y6G&ref_=cm_sw_r_cso_wa_apan_dp_M9VAZ32CMT3SZH2Y8Y6G&social_share=cm_sw_r_cso_wa_apan_dp_M9VAZ32CMT3SZH2Y8Y6G&th=1",
                    price: "$382.00" 
                }, 
            ] 
        }, 
        "Téllez Dávila": { 
            "Saúl": [ 
                {
                    title: "Mochila",
                    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_888707-MLM70140216087_062023-F-bolso-mariconera-hombre-maletin-bandoleras-y-billetera-kit.webp",
                    url: "https://articulo.mercadolibre.com.mx/MLM-1874007765-bolso-mariconera-hombre-maletin-bandoleras-y-billetera-kit-_JM?attributes=COLOR_SECONDARY_COLOR%3ATWFycsOzbg%3D%3D#origin=share&sid=share&action=whatsapp",
                    price: "$252.00"
                },
                {
                    title: "Legacy of Kain: Soul Reaver PS5",
                    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_611876-MLM93415404072_092025-F.webp",
                    url: "https://www.mercadolibre.com.mx/up/MLMU3458404586?pdp_filters=item_id:MLM2477094421#origin=share&sid=share&wid=MLM2477094421&action=whatsapp",
                    price: "$599.00"
                },
            ], 
            "Diego": [  
                { 
                    title: "Death Stranding 2", 
                    imageUrl: "https://cdn.gameplanet.com/wp-content/uploads/2025/06/25202817/death201NEW20PRODUCT-17508802576534.jpg", 
                    url: "https://gameplanet.com/producto/death-stranding-2-on-the-beach-ps5/",
                    price: "$500.00" 
                }, 
                { 
                    title: "Assassin's Creed Origins", 
                    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_798056-MLA96402195177_102025-F.webp", 
                    url: "https://www.mercadolibre.com.mx/p/MLM15287899?pdp_filters=item_id:MLM2078210595#origin=share&sid=share&wid=MLM2078210595&action=whatsapp",
                    price: "$415.00" 
                }, 
                { 
                    title: "Marvel vs Capcom", 
                    imageUrl: "https://m.media-amazon.com/images/I/918AfO9Yy2L._AC_SL1500_.jpg", 
                    url: "https://www.amazon.com.mx/dp/B0D7NSB8XV?ref=cm_sw_r_cso_wa_apan_dp_4A0ASYSFQ1KFVHPF6DH2&ref_=cm_sw_r_cso_wa_apan_dp_4A0ASYSFQ1KFVHPF6DH2&social_share=cm_sw_r_cso_wa_apan_dp_4A0ASYSFQ1KFVHPF6DH2",
                    price: "$430.00" 
                }, 
                {
                    title: "Resident Evil Village PS5",
                    imageUrl: "https://m.media-amazon.com/images/I/81E09HpdK8L._AC_SL1500_.jpg",
                    url: "https://www.amazon.com.mx/dp/B0B75WMSFP?ref=cm_sw_r_cso_wa_apan_dp_530NDQHG9S3CXTV01FWT&ref_=cm_sw_r_cso_wa_apan_dp_530NDQHG9S3CXTV01FWT&social_share=cm_sw_r_cso_wa_apan_dp_530NDQHG9S3CXTV01FWT",
                    price: "$510"
                },
                {
                    title: "Megaman Zero-ZX Switch",
                    imageUrl: "https://www.slang.vg/cdn/shop/files/145daa909fa4598978fff6e3da8de049.jpg?v=1746628302",
                    url: "https://www.slang.vg/products/mega-man-zero-zx-legacy-collection",
                    price: "$399"
                },
                {
                    title: "Super Monkey Ball Banana Rumble",
                    imageUrl: "https://m.media-amazon.com/images/I/71BQ1UPgqVL._AC_SL1499_.jpg",
                    url: "https://www.amazon.com.mx/dp/B0CW3W97PS?ref=cm_sw_r_cso_wa_apan_dp_HF9QM2FJGVS80S83N7WV&ref_=cm_sw_r_cso_wa_apan_dp_HF9QM2FJGVS80S83N7WV&social_share=cm_sw_r_cso_wa_apan_dp_HF9QM2FJGVS80S83N7WV",
                    price: "$420"
                },
            ], 
            "Pili": [ 
 
            ], 
            "David": [ 
 
            ], 
            "Tía Pilar": [ 
 
            ] 
        }, 
        "Dávila Castillo": { 
            "Efritas": [ 

            ], 
            "Greta": [ 

            ], 
            "Majo": [ 
 
            ], 
            "Tía Lupita": [ 
 
            ], 
            "Tío Efras": [ 

            ], 
        }, 
        "Rosales Dávila": { 
            "Itzel": [ 
 
            ], 
            "Manuel": [ 
  
            ], 
            "Isra": [ 
                {
                    title: "Bocina Bluetooth",
                    imageUrl: "https://m.media-amazon.com/images/I/51r+ULfjF7L._AC_SL1125_.jpg",
                    url: "https://www.amazon.com.mx/dp/B0DHFZW4CV?_encoding=UTF8&psc=1&ref=cm_sw_r_cp_ud_dp_4PG133ZQCKVXAKYY0KWH&ref_=cm_sw_r_cp_ud_dp_4PG133ZQCKVXAKYY0KWH&social_share=cm_sw_r_cp_ud_dp_4PG133ZQCKVXAKYY0KWH",
                    price: "$419.00"
                },
                {
                    title: "Audífonos Soundcore",
                    imageUrl: "https://m.media-amazon.com/images/I/51o+LynoCUL._AC_SL1500_.jpg",
                    url: "https://www.amazon.com.mx/dp/B0BTYCRJSS?ref=cm_sw_r_cp_ud_dp_FNTZR3Y51GSABHK21FXQ&ref_=cm_sw_r_cp_ud_dp_FNTZR3Y51GSABHK21FXQ&social_share=cm_sw_r_cp_ud_dp_FNTZR3Y51GSABHK21FXQ&th=1",
                    price: "$379.00"
                },
                {
                    title: "Mochila Adidas",
                    imageUrl: "https://m.media-amazon.com/images/I/713Oa3wGO7L._AC_SY575_.jpg",
                    url: "https://www.amazon.com.mx/dp/B0CZLQR8CD?ref=cm_sw_r_cp_ud_dp_VW95TQM19716WAGYQ84F&ref_=cm_sw_r_cp_ud_dp_VW95TQM19716WAGYQ84F&social_share=cm_sw_r_cp_ud_dp_VW95TQM19716WAGYQ84F&th=1&psc=1",
                    price: "$491.00"
                },
                {
                    title: "Libro Wine Folly",
                    imageUrl: "https://m.media-amazon.com/images/I/91B9QbDFs1L._SL1500_.jpg",
                    url: "https://www.amazon.com.mx/dp/0525533893?ref=cm_sw_r_cso_cp_apan_dp_ZAJPPDBVTZS52DQ10A29&ref_=cm_sw_r_cso_cp_apan_dp_ZAJPPDBVTZS52DQ10A29&social_share=cm_sw_r_cso_cp_apan_dp_ZAJPPDBVTZS52DQ10A29",
                    price: "$165.00"
                },
                {
                    title: "Funda Switch Lite",
                    imageUrl: "https://m.media-amazon.com/images/I/71mZdLY9y0L._AC_SL1500_.jpg",
                    url: "https://www.amazon.com.mx/dp/B08911HS3H?_encoding=UTF8&ref=cm_sw_r_cp_ud_dp_HTXZWFWEX51Y9CKW2R50&ref_=cm_sw_r_cp_ud_dp_HTXZWFWEX51Y9CKW2R50&social_share=cm_sw_r_cp_ud_dp_HTXZWFWEX51Y9CKW2R50&th=1",
                    price: "$346.00"
                },
            ], 
            "Tía Edith": [ 
 
            ], 
        }, 
        "Dávila Hernández": { 
            "Coral": [ 
                { 
                    title: "Leggings capri talle alto negro talla M", 
                    imageUrl: "https://sololegginspe.com/cdn/shop/files/CAPRI-NEGRO024.jpg?v=1694712326", 
                    url: "",
                    price: "" 
                }, 
                { 
                    title: "Rompevientos negro talla M ", 
                    imageUrl: "https://sololegginspe.com/cdn/shop/files/CAPRI-NEGRO024.jpg?v=1694712326", 
                    url: "",
                    price: "" 
                },
            ], 
            "Kitty": [ 

            ], 
            "Manolito": [ 
                { 
                    title: "Sudadera bonita de Bershka o H&M que no sea negra", 
                    imageUrl: "https://www.findlayhats.com/cdn/shop/products/MysteryHoodie.jpg?v=1613463680&width=2048", 
                    url: "",
                    price: "" 
                },
            ], 
            "Sabina": [ 
                { 
                    title: "Gato de peluche Minecraft", 
                    imageUrl: "https://m.media-amazon.com/images/I/71hJVmt2gjL.jpg", 
                    url: "",
                    price: "" 
                },
                { 
                    title: "Set veterinario", 
                    imageUrl: "https://m.media-amazon.com/images/I/81ErH+30olL._AC_SL1500_.jpg", 
                    url: "https://www.amazon.com.mx/YUJWW-Accesorios-Veterinario-Examinar-Imaginativo/dp/B0DY1647W7/ref=sr_1_7?dib=eyJ2IjoiMSJ9.wdJj0saMDk3Pa_2avD5_NAqD-l_aEmVXoUBSYFDcrIuinWIiA3q9VJaJFiHS9vp0mOC7QpaaJEmLaWJ0wmdofQxkZG_DZ-5mQAYHgaHu_qlMw1Uc7G5UKXm3Pb8lgzQIBTVm3SbTuqea2PUREUjLNzu_0P3oTbNby0KgfPVYG9-8baRL_i3puxXAFwkotqtZJ9PpI_3sOB-KqPISgB6BwRtmJTtFVjkVmAo6NodHS1qWvoJwz84HtIx6CoyXaah__zKeI66pTBJeFLW0Prxh5gssYFg1PPjLo3ISYrJpuhk.OIQLaiHz1h0YEuXBYsx6djcdUZ-ln36g4ybRJxW5Heg&dib_tag=se&keywords=set%2Bveterinario&qid=1763143976&sr=8-7&ufe=app_do%3Aamzn1.fos.de93fa6a-174c-4df7-be7c-5bc8e9c5a71b&th=1",
                    price: "" 
                },
            ], 
        }, 
        "Espinoza Dávila": { 
            "Tía Trini": [ 
 
            ], 
            "Tío Alexis": [ 
 
            ], 
        }, 
        "Dávila Casco": { 
            "Abuela": [ 
 
            ], 
            "Tío Saúl": [ 

            ], 
        } 
    };

    // --- DOM elements ---
    const wishlistElement = document.getElementById('wishlist');
    const menuIcon = document.getElementById('menu-icon');
    const homeIcon = document.getElementById('home-icon');
    const sideNav = document.getElementById('side-nav');
    const navContainer = document.getElementById('nav-container');
    const overlay = document.getElementById('overlay');
    const mainTitle = document.getElementById('main-title');

    // --- functions ---

    //toggle the side nav menu open||closed
    function toggleMenu() {
        document.body.classList.toggle('nav-open');
    }

    function clearActive() {
        const active = document.querySelector('.member-name.active');
        if (active) {
            const active = document.querySelector('.member-name.active');
            if (active) {
                active.classList.remove('active');
            }
        }
    }

    function setActive(memberName) {
        clearActive();
        const allMembers = document.querySelectorAll('.member-name');
        allMembers.forEach(memberEl => {
            if (memberEl.textContent === memberName) {
                memberEl.classList.add('active');
            }
        });
    }

    //displays the main grid of family cards
    function displayFamilyCards() {
        window.scrollTo(0, 0);
        clearActive();
        wishlistElement.innerHTML = ''; // clear content
        mainTitle.textContent = 'Familias';
        homeIcon.style.display = 'none'; // hide home icon on home page
        //setGridColumns('families');
        wishlistElement.className = 'grid-cards'

        const sortedFamilyNames = Object.keys(familyItems).sort();
        
        for (const familyName of sortedFamilyNames) {
            const card = document.createElement('div');
            card.className = 'family-card';
            card.textContent = familyName;
            card.addEventListener('click', () => displayMemberCards(familyName));
            wishlistElement.appendChild(card);
        }
    }

    //displays the grid of member cards for a specific family
    function displayMemberCards(familyName) {
        wishlistElement.innerHTML = '';
        window.scrollTo(0, 0);
        clearActive();
        wishlistElement.innerHTML = '';
        mainTitle.textContent = familyName;
        homeIcon.style.display = 'block'; // show home icon
        //setGridColumns('members');
        wishlistElement.className = 'grid-cards';

        const sortedMemberNames = Object.keys(familyItems[familyName]).sort();

        for (const memberName of sortedMemberNames) {
            const card = document.createElement('div');
            card.className = 'member-card';
            card.textContent = memberName;
            card.addEventListener('click', () => displayMemberWishlist(familyName, memberName));
            wishlistElement.appendChild(card);
        }
    }

    //clears and displays the wishlist for a specific person
    function displayMemberWishlist(familyName, memberName) {
        const items = familyItems[familyName][memberName];
        wishlistElement.innerHTML = '';
        mainTitle.textContent = `Opciones ${memberName}`;
        homeIcon.style.display = 'block'; // show home icon
        //setGridColumns('items'); // set grid for items
        setActive(memberName);
        wishlistElement.className = 'grid-items';

        if (items && items.length > 0) {
            items.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'wishlist-item';
                
                const fallbackImg = `https://placehold.co/400x400/555/FFF?text=${encodeURIComponent(item.title)}`;

                itemElement.innerHTML = `
                    <img src="${item.imageUrl}" alt="${item.title}" onerror="this.onerror=null;this.src='${fallbackImg}';">
                    <p><a href="${item.url}" target="_blank">${item.title}</a></p>
                    <p>${item.price}</p>
                `;
                wishlistElement.appendChild(itemElement);
            });
        } else {
            wishlistElement.innerHTML = `<p style="text-align: center; grid-column: 1 / -1; color:#7a2a2a; font-weight: bold">La lista de ${memberName} está vacía :(</p>`;
        }

        if (document.body.classList.contains('nav-open')) {
            toggleMenu();
        }
    }

    //populates the side nav
    function populateNav() {
        navContainer.innerHTML = ''; 
        
        const sortedFamilyNames = Object.keys(familyItems).sort();
        
        for (const familyName of sortedFamilyNames) {
            const familyGroup = document.createElement('div');
            familyGroup.className = 'family-group';

            const familyElement = document.createElement('div');
            familyElement.className = 'family-name';
            familyElement.textContent = familyName;
            
            const memberList = document.createElement('div');
            memberList.className = 'member-list';

            familyElement.addEventListener('click', () => {

                const wasOpen = memberList.style.display === 'block';

                const allMembersList = navContainer.querySelectorAll('.member-list');
                allMembersList.forEach(list => {
                    list.style.display = 'none';
                });

                if (!wasOpen) {
                    memberList.style.display = 'block';
                }

                /*memberList.style.display = memberList.style.display === 'block' ? 'none' : 'block';*/
            });

            const sortedMemberNames = Object.keys(familyItems[familyName]).sort();

            for (const memberName of sortedMemberNames) {
                const memberElement = document.createElement('div');
                memberElement.className = 'member-name';
                memberElement.textContent = memberName;
                
                memberElement.addEventListener('click', () => {
                    displayMemberWishlist(familyName, memberName);
                });
                
                memberList.appendChild(memberElement);
            }

            familyGroup.appendChild(familyElement);
            familyGroup.appendChild(memberList);
            navContainer.appendChild(familyGroup);
        }
    }

    //click listeners
    menuIcon.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    homeIcon.addEventListener('click', displayFamilyCards);

    //create the nav menu
    populateNav();

    //display family cards by default on page load
    displayFamilyCards();
    
    //add resize listener to adjust grid columns dynamically
    /*window.addEventListener('resize', () => {
        const currentView = mainTitle.textContent;
        if (familyItems[currentView]) {
            setGridColumns('members');
        } else if (currentView === 'Familias') {
            setGridColumns('families');
        } else {
            setGridColumns('items');
        }
    });*/
});