document.addEventListener('DOMContentLoaded', function() {
    const familyItems = { 
        "Salcedo Dávila": { 
            "Armando": [ 
                { 
                    title: "Kingdom Hearts: Melody of Memory | PS4", 
                    imageUrl: 'https://m.media-amazon.com/images/I/71Ffn6hGGGL._AC_SL1000_.jpg', 
                    url: "https://www.amazon.com.mx/Kingdom-Hearts-Melod%C3%ADa-memoria-PS4/dp/B08GYTC39V/ref=sr_1_3?crid=H6EO4BD7ADP7&dib=eyJ2IjoiMSJ9.NenpAhFiK9Z9IrmZ0-6OOui5jitL0JPb7ZRD4MrVBvd8XkPjlkv4-DVeDov-VgSSdgKJ1rTEC49VLVbSEigADxM79vqXj0kIvM3p4EHpbE2_aytdHOXpBMzFv2pzt9akswVDAjM6INwMNTmJ-S-RWIII9dH31fQGiL49bnYx2MC90S_xf9OrsiYjxwHedRLucT06GXVy9pkLMO0aQqXag7EzmltcELMRxEbb3B2iaRKgOSjyux7CNzBJAMjwBCdmqMO5j2PUuXu1tAjrAZibYaCsvn9Yvm3MOV7_mPYpPZs.M67JfbfWRmFmkFf6Q7J0pt7XNfWSsBuD6ki9XWkxZBA&dib_tag=se&keywords=kingdom+hearts+melody+of+memory&qid=1762733190&sprefix=kingdom+hearts+melo%2Caps%2C234&sr=8-3&ufe=app_do%3Aamzn1.fos.45030d3a-91a9-4303-890a-776dee9077c1",
                    price: "$316.00" 
                }, 
                { 
                    title: "Poémon TCG Battle Academy", 
                    imageUrl: 'https://m.media-amazon.com/images/I/71Prgj3-oBL._AC_SL1500_.jpg', 
                    url: "https://www.amazon.com.mx/Pok%C3%A9mon-Battle-Academy-Lycanroc-Corviknight/dp/B0CYT9TPN4/ref=sr_1_5?crid=M347W384I70K&dib=eyJ2IjoiMSJ9.BPx9uUaJBD3nhiSzcGjW5e1pYDrpFIiAcZTTGAsh9-ZKQdWZTGnSa713Evbt8F6QDNajbgBJk1fpzueQuA5EkFKTaQzpMzNIkveKcqSfC0MGTK8lFI7GzHTWCV1KiAVNDFSv5wJJ5azzCm8h77BSgfQF0xOwzoUc_GNJxa1_ntcul99jgHOxh67GTy_fHWRHXvo0gxEkPertP6KRW0GXOB6e3N2jxrKzPaKzf8yKkVJp-Sp-mKeNmoIUPrJa14ttz8Opj3tjdElMMHPZ9trpjF0M3FqFDOWZ2cFEGTG15E0.ENTVprp6BDB-a-mvliFt85mBruypPw-ZcPgDu1Y1arI&dib_tag=se&keywords=pokemon+battle+academy&qid=1762828756&sprefix=pokemon+battle+aca%2Caps%2C289&sr=8-5&ufe=app_do%3Aamzn1.fos.de93fa6a-174c-4df7-be7c-5bc8e9c5a71b",
                    price: "$442.00" 
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
                    url: "https://www.amazon.com.mx/Sega-Persona-Tactica-para-PlayStation/dp/B0C8VHCHX4/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2KGM7DZN1D9Y8&dib=eyJ2IjoiMSJ9.Q_qT3TYQPeuNlBJSLxypi-9h1FTCcdOaKQDEytYstBgCUo3RW6_nTl7P7ctH2GG2-RWDy4V41aJB9ZGYXUjoAWA_8x8yFTNyi2nZHBl1zZq5jtEshO-mU3hXW6_Hn5A1TBDz9gek7PBZ7QtpcKQZC5oMgn_My6a_C0I8pzC6BO4HDohvrti5fW7KiRgHYQK8kt1Z71ASqDZ3KN4DVbJLeW3FSc5FTB_Fb3_5R90zCrw.ezBEKrmLTbb_ncLwNHQUPX2GDhSdq1XSXGBvtHNJxkg&dib_tag=se&keywords=persona+5+tactica+ps5&qid=1762839296&s=videogames&sprefix=persona+5+tactica+ps%2Cvideogames%2C167&sr=1-1&ufe=app_do%3Aamzn1.fos.45030d3a-91a9-4303-890a-776dee9077c1",
                    price: "$422.00" 
                },
            ], 
            "Fernando": [ 
                
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

            ], 
            "Tía Edith": [ 
 
            ], 
        }, 
        "Dávila Hernández": { 
            "Coral": [ 

            ], 
            "Kitty": [ 

            ], 
            "Manolito": [ 
 
            ], 
            "Sabina": [ 

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