/**
 * BozorGo — Zamonaviy Online Do'kon
 * Asosiy Javascript Logikasi
 */

// 1. KATEGORIYALAR RO'YXATI
const categories = [
    { id: 'all', name: 'Barchasi', icon: 'fa-solid fa-border-all', desc: 'Barcha toifadagi eng sara tovarlar' },
    { id: 'electronics', name: 'Elektronika', icon: 'fa-solid fa-mobile-screen', desc: 'Smartfonlar, noutbuklar va gadjetlar' },
    { id: 'appliances', name: 'Maishiy texnika', icon: 'fa-solid fa-blender', desc: 'Uy-ro\'zg'or uchun zamonaviy texnikalar' },
    { id: 'clothes', name: 'Kiyim va poyabzal', icon: 'fa-solid fa-shirt', desc: 'Klassik va kundalik zamonaviy liboslar' },
    { id: 'groceries', name: 'Oziq-ovqat', icon: 'fa-solid fa-basket-shopping', desc: 'Yangi, tabiiy va mazali mahsulotlar' },
    { id: 'books', name: 'Kitoblar', icon: 'fa-solid fa-book-open', desc: 'Jahon va milliy adabiyot durdonalari' },
    { id: 'sports', name: 'Sport & Salomatlik', icon: 'fa-solid fa-dumbbell', desc: 'Faol hayot va jismoniy tarbiya vositalari' }
];

// 2. MAHSULOTLAR BAZASI (SO'MDA NARXLAR)
const products = [
    // Elektronika
    {
        id: 1,
        name: 'Apple iPhone 15 Pro Max 256GB',
        category: 'electronics',
        price: 16800000,
        oldPrice: 18200000,
        rating: 4.9,
        reviewsCount: 142,
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80',
        badge: 'Top Sotuv',
        desc: 'Titan korpus, A17 Pro kuchli protsessor, 48MP professional kamera va 120Hz Super Retina XDR ekran.'
    },
    {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra 512GB',
        category: 'electronics',
        price: 15200000,
        oldPrice: 16500000,
        rating: 4.8,
        reviewsCount: 98,
        image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=80',
        badge: 'Yangi',
        desc: 'Galaxy AI sun\'iy intellekt xususiyatlari, S-Pen stilus, 200MP kamera va mustahkam Armor Aluminum korpus.'
    },
    {
        id: 3,
        name: 'Sony WH-1000XM5 Simsiz Quloqchin',
        category: 'electronics',
        price: 4100000,
        oldPrice: 4600000,
        rating: 4.9,
        reviewsCount: 84,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
        badge: 'Chegirma',
        desc: 'Soha yetakchisi bo\'lgan faol shovqinni bekor qilish (ANC), 30 soatgacha batareya quvvati va Hi-Res Audio.'
    },
    {
        id: 4,
        name: 'Apple MacBook Air 13.6" M2 8/256GB',
        category: 'electronics',
        price: 12500000,
        oldPrice: 13800000,
        rating: 4.9,
        reviewsCount: 65,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80',
        badge: 'Xit',
        desc: 'Juda yupqa va yengil alyuminiy korpus, Apple M2 chipi, 18 soatlik avtonom ishlash va Liquid Retina displey.'
    },
    {
        id: 5,
        name: 'Apple Watch Series 9 45mm GPS',
        category: 'electronics',
        price: 5300000,
        oldPrice: 5800000,
        rating: 4.7,
        reviewsCount: 41,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: 'Double Tap yangi imo-ishora nazorati, S9 SiP chipi, yorqin displey va salomatlikni doimiy kuzatish datchiklari.'
    },

    // Maishiy texnika
    {
        id: 6,
        name: 'Artel Sovutgich HD-345FW NoFrost',
        category: 'appliances',
        price: 4800000,
        oldPrice: 5200000,
        rating: 4.6,
        reviewsCount: 52,
        image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=600&auto=format&fit=crop&q=80',
        badge: 'Aksiya',
        desc: 'No Frost tizimi, energiya tejovchi A+ sinf, keng hajmli muzlatgich va oziq-ovqatlarni uzoq yangi saqlovchi zona.'
    },
    {
        id: 7,
        name: 'LG Inverter Kir Yuvish Mashinasi 7kg',
        category: 'appliances',
        price: 5600000,
        oldPrice: 6100000,
        rating: 4.8,
        reviewsCount: 77,
        image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&auto=format&fit=crop&q=80',
        badge: 'Top Sotuv',
        desc: 'AI DD aqlli tola aniqlash texnologiyasi, bug\' bilan tozalash (Steam), sokin ishlaydigan inverter motor.'
    },
    {
        id: 8,
        name: 'Xiaomi Robot Changyutgich S10+',
        category: 'appliances',
        price: 2950000,
        oldPrice: 3400000,
        rating: 4.7,
        reviewsCount: 110,
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80',
        badge: 'Aqlli uy',
        desc: 'LDS lazerli xaritani chizish, 4000Pa kuchli tortish kuchi, namlab yuvish (mopping) va Mi Home ilovasi orqali boshqaruv.'
    },
    {
        id: 9,
        name: 'Philips Elektr Choynak HD9350 1.7L',
        category: 'appliances',
        price: 450000,
        oldPrice: 520000,
        rating: 4.9,
        reviewsCount: 130,
        image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: 'Zanglamas po\'latdan yasalgan korpus, tez qaynash xususiyati, ko\'p bosqichli xavfsizlik va yorug\'lik indikatori.'
    },
    {
        id: 10,
        name: 'De\'Longhi Espresso Qahva Mashinasi',
        category: 'appliances',
        price: 3200000,
        oldPrice: 3600000,
        rating: 4.8,
        reviewsCount: 39,
        image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&auto=format&fit=crop&q=80',
        badge: 'Tavsiya',
        desc: '15 bar bosimli nasos, qo\'lda kapuchino ko\'pirtirgich tizimi va ixcham nafis italiyalik dizayn.'
    },

    // Kiyim va Poyabzal
    {
        id: 11,
        name: 'Nike Air Force 1 \'07 Klassik Krossovka',
        category: 'clothes',
        price: 1450000,
        oldPrice: 1650000,
        rating: 4.9,
        reviewsCount: 215,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
        badge: 'Ommabop',
        desc: '100% tabiiy charm, qulay Nike Air amortizatsiyasi va kundalik har qanday uslubga mos keluvchi oq afsonaviy dizayn.'
    },
    {
        id: 12,
        name: 'Erkaklar Klassik Slim-Fit Kostyumi',
        category: 'clothes',
        price: 1200000,
        oldPrice: 1500000,
        rating: 4.7,
        reviewsCount: 34,
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: 'Yuqori sifatli jun aralashmali mato, nafis bichim, to\'y va rasmiy marosimlar uchun ideal tanlov.'
    },
    {
        id: 13,
        name: 'Ayollar Elegant Kechki Ko\'ylagi',
        category: 'clothes',
        price: 750000,
        oldPrice: 900000,
        rating: 4.8,
        reviewsCount: 46,
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80',
        badge: 'Yangi',
        desc: 'Mayin ipaksimon mato, zamonaviy qomatga mos bichim, bayramona va jozibali ko\'rinish.'
    },
    {
        id: 14,
        name: 'Qishki Issiq Kurtka (Suv o\'tkazmaydigan)',
        category: 'clothes',
        price: 980000,
        oldPrice: 1200000,
        rating: 4.8,
        reviewsCount: 88,
        image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600&auto=format&fit=crop&q=80',
        badge: 'Mavsumiy',
        desc: 'Gipoallergen patli to\'ldiruvchi, shamol va sovuqdan to\'liq himoya qiluvchi kapyushonli kurtka.'
    },
    {
        id: 15,
        name: 'Oversize Sport Xudi (Paxta 100%)',
        category: 'clothes',
        price: 320000,
        oldPrice: 390000,
        rating: 4.6,
        reviewsCount: 104,
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: 'Keng va qulay bichim, yumshoq flis astar, qulay keng cho\'ntak va elastik manjetlar.'
    },

    // Oziq-ovqat
    {
        id: 16,
        name: 'Tabiiy Zomin Tog\' Asali 1 kg',
        category: 'groceries',
        price: 140000,
        oldPrice: 165000,
        rating: 5.0,
        reviewsCount: 156,
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop&q=80',
        badge: 'Tabiiy ECO',
        desc: '100% toza tog\' gullari shirasidan olingan shifobaxsh asal. Hech qanday shakar yoki qo\'shimchalarsiz.'
    },
    {
        id: 17,
        name: 'Samarqand Non va Shirinliklar To\'plami',
        category: 'groceries',
        price: 75000,
        oldPrice: 90000,
        rating: 4.9,
        reviewsCount: 72,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80',
        badge: 'Milliy',
        desc: 'An\'anaviy Samarqand patiri, bodomli holva va xushta\'m yong\'oqli milliy pishiriqlar.'
    },
    {
        id: 18,
        name: 'Monini Extra Virgin Zaytun Moyi 1L',
        category: 'groceries',
        price: 135000,
        oldPrice: 155000,
        rating: 4.8,
        reviewsCount: 64,
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format&fit=crop&q=80',
        badge: 'Italiya',
        desc: 'Sovuq siqish orqali tayyorlangan sof zaytun moyi. Salatlar va sog\'lom taomlar uchun ideal.'
    },
    {
        id: 19,
        name: 'Lavazza Qualita Oro Donali Qahva 1kg',
        category: 'groceries',
        price: 285000,
        oldPrice: 320000,
        rating: 4.9,
        reviewsCount: 89,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
        badge: 'Premium',
        desc: '100% Arabika, mevali va gulli ohanglarga boy yoqimli xushbo\'y hidli nozik italiyalik qahva.'
    },
    {
        id: 20,
        name: 'Lindt Shveytsariya Shokoladi Assorti 250g',
        category: 'groceries',
        price: 95000,
        oldPrice: 110000,
        rating: 4.9,
        reviewsCount: 95,
        image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: 'Og\'izda erib ketuvchi nozik qaymoqli shveytsar shokoladi. Sovg\'a uchun eng yaxshi tanlov.'
    },

    // Kitoblar
    {
        id: 21,
        name: 'Atom Odatlar — Jeyms Klir',
        category: 'books',
        price: 65000,
        oldPrice: 75000,
        rating: 5.0,
        reviewsCount: 310,
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80',
        badge: 'Bestseller',
        desc: 'Kichik o\'zgarishlar qanday qilib ulkan natijalarga olib kelishini ko\'rsatib beruvchi jahon miqyosidagi bestseller kitob.'
    },
    {
        id: 22,
        name: 'Stiv Jobs Rasmiy Biografiyasi — Uolter Ayzekson',
        category: 'books',
        price: 110000,
        oldPrice: 130000,
        rating: 4.9,
        reviewsCount: 140,
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: 'Apple asoschisining hayoti, ijodkorligi, xatolari va dunyoni o\'zgartirgan innovatsiyalari haqida yagona to\'liq kitob.'
    },
    {
        id: 23,
        name: 'Boy ota, Kambag\'al ota — Robert Kiyosaki',
        category: 'books',
        price: 55000,
        oldPrice: 65000,
        rating: 4.8,
        reviewsCount: 220,
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80',
        badge: 'Moliyaviy Savod',
        desc: 'Moliyaviy erkinlikka erishish, aktivlar to\'plash va pulni o\'ziga ishlashga o\'rgatuvchi mashhur qo\'llanma.'
    },
    {
        id: 24,
        name: 'Alkimyogar — Paulo Koelo',
        category: 'books',
        price: 45000,
        oldPrice: 50000,
        rating: 4.7,
        reviewsCount: 180,
        image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: 'O\'z orzulari ortidan ergashgan cho\'pon Santyagoning ma\'naviy izlanishlari va taqdir haqidagi falsafiy asar.'
    },

    // Sport & Salomatlik
    {
        id: 25,
        name: 'Gantellar To\'plami 2x10kg (Yig\'iladigan)',
        category: 'sports',
        price: 490000,
        oldPrice: 550000,
        rating: 4.8,
        reviewsCount: 62,
        image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&auto=format&fit=crop&q=80',
        badge: 'Sport',
        desc: 'Vazni sozlanadigan metall disklar, qulay rezina tutqich va xavfsiz qulflash gaykalari.'
    },
    {
        id: 26,
        name: 'Professional Yoga & Fitnes Gilamchasi (Kovrik)',
        category: 'sports',
        price: 150000,
        oldPrice: 185000,
        rating: 4.7,
        reviewsCount: 44,
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: 'Toyib ketmaydigan TPE ekologik materiali, 6mm qalinlik, yelka tasmasi bilan birga.'
    },
    {
        id: 27,
        name: 'Smartfit Perkussion Massajyor Tabancasi',
        category: 'sports',
        price: 390000,
        oldPrice: 460000,
        rating: 4.8,
        reviewsCount: 81,
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=80',
        badge: 'Top Gadjet',
        desc: 'Mushaklardagi og\'riq va charchoqni ketkazuvchi 6 xil tezlik, 4 ta almashtiriladigan boshcha va uzoq quvvat.'
    },
    {
        id: 28,
        name: 'Zanglamas Termos Suv Idishi 1L',
        category: 'sports',
        price: 110000,
        oldPrice: 130000,
        rating: 4.9,
        reviewsCount: 57,
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: 'Ichimliklarni 24 soat sovuq va 12 soat issiq saqlovchi vakuumli ikki qavatli zanglamas po\'lat idish.'
    }
];

// 3. ILOVA HOLATI (STATE)
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'popular';
let cart = JSON.parse(localStorage.getItem('bozorgo_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('bozorgo_wishlist')) || [];
let appliedPromo = null; // masalan { code: 'BOZOR10', discountPercent: 10 }

// BEPUL YETKAZIB BERISH SHARTI (500 000 so'm)
const FREE_SHIPPING_THRESHOLD = 500000;
const STANDARD_SHIPPING_FEE = 25000;

// 4. NARXNI SO'MDA FORMATLASH YORDAMCHISI
function formatPrice(amount) {
    if (typeof amount !== 'number') amount = Number(amount) || 0;
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
}

// 5. SAHIFANI YUKLASH VA TINGLOVCHILARNI O'RNATISH
document.addEventListener('DOMContentLoaded', () => {
    initCategoryMenu();
    initCatalogDropdown();
    renderProducts();
    updateCartUI();
    updateWishlistUI();
    setupEventListeners();
    populateFooterCategories();
});

// 6. KATEGORIYALAR MENYUSINI GENERATSIYA QILISH
function initCategoryMenu() {
    const menuContainer = document.getElementById('categoryMenu');
    menuContainer.innerHTML = '';

    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `category-btn whitespace-nowrap px-4 py-2 rounded-xl border text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
            cat.id === currentCategory 
            ? 'active bg-brand-600 text-white border-brand-600' 
            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
        }`;
        btn.dataset.category = cat.id;
        btn.innerHTML = `<i class="${cat.icon}"></i><span>${cat.name}</span>`;

        // Menuni ustiga bosganda mahsulotlarga o'tish
        btn.addEventListener('click', () => {
            selectCategory(cat.id);
        });

        menuContainer.appendChild(btn);
    });
}

// 7. KATALOG DROPDOWN BO'LIMI
function initCatalogDropdown() {
    const catalogGrid = document.getElementById('catalogGrid');
    catalogGrid.innerHTML = '';

    categories.forEach(cat => {
        const card = document.createElement('button');
        card.className = 'text-left p-4 rounded-xl border border-slate-100 hover:border-brand-500 hover:bg-brand-50/50 transition group flex flex-col items-center text-center';
        card.innerHTML = `
            <div class="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-brand-600 group-hover:text-white text-brand-600 flex items-center justify-center text-xl mb-2 transition">
                <i class="${cat.icon}"></i>
            </div>
            <span class="font-bold text-xs text-slate-800 group-hover:text-brand-600 transition">${cat.name}</span>
        `;
        card.addEventListener('click', () => {
            selectCategory(cat.id);
            toggleCatalogDropdown(false);
        });
        catalogGrid.appendChild(card);
    });
}

// 8. KATEGORIYANI TANLASH VA MAHSULOTLARGA SILLIQ O'TISH
function selectCategory(categoryId) {
    currentCategory = categoryId;

    // Menyu tugmalaridagi faol sinfni yangilash
    document.querySelectorAll('.category-btn').forEach(btn => {
        if (btn.dataset.category === categoryId) {
            btn.classList.add('active', 'bg-brand-600', 'text-white', 'border-brand-600');
            btn.classList.remove('bg-slate-50', 'text-slate-700', 'border-slate-200');
        } else {
            btn.classList.remove('active', 'bg-brand-600', 'text-white', 'border-brand-600');
            btn.classList.add('bg-slate-50', 'text-slate-700', 'border-slate-200');
        }
    });

    // Sarlavha va ta'rifni o'zgartirish
    const foundCat = categories.find(c => c.id === categoryId);
    const titleEl = document.getElementById('currentCategoryTitle');
    const descEl = document.getElementById('currentCategoryDesc');

    if (foundCat) {
        titleEl.textContent = foundCat.name;
        descEl.textContent = foundCat.desc;
    }

    // Mahsulotlarni qayta chizish
    renderProducts();

    // Silliq skroll orqali mahsulotlar bo'limiga o'tish
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// 9. MAHSULOTLARNI SARALASH VA FILTERLASH
function getFilteredAndSortedProducts() {
    let result = [...products];

    // Kategoriya bo'yicha filter
    if (currentCategory !== 'all') {
        result = result.filter(item => item.category === currentCategory);
    }

    // Qidiruv bo'yicha filter
    if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        result = result.filter(item => 
            item.name.toLowerCase().includes(query) ||
            item.desc.toLowerCase().includes(query)
        );
    }

    // Saralash
    if (currentSort === 'price-asc') {
        result.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
        result.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
        result.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'name') {
        result.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        // 'popular'
        result.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    return result;
}

// 10. MAHSULOTLAR RO'YXATINI CHIZISH (RENDER)
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const noProducts = document.getElementById('noProductsFound');
    const totalCountEl = document.getElementById('productTotalCount');

    const filtered = getFilteredAndSortedProducts();
    totalCountEl.textContent = `${filtered.length} ta mahsulot`;

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noProducts.classList.remove('hidden');
        return;
    }

    noProducts.classList.add('hidden');
    grid.innerHTML = '';

    filtered.forEach(product => {
        const inCartItem = cart.find(c => c.id === product.id);
        const inWishlist = wishlist.includes(product.id);

        const card = document.createElement('div');
        card.className = 'product-card bg-white rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between shadow-sm hover:border-brand-300 relative';
        
        // Chegirma foizini hisoblash
        let discountBadge = '';
        if (product.oldPrice && product.oldPrice > product.price) {
            const percent = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
            discountBadge = `<span class="bg-rose-500 text-white font-extrabold text-[11px] px-2 py-0.5 rounded-full shadow-sm">-${percent}%</span>`;
        }

        // Alohida nishon (badge)
        let specialBadge = '';
        if (product.badge) {
            specialBadge = `<span class="bg-amber-400 text-slate-900 font-extrabold text-[11px] px-2 py-0.5 rounded-full shadow-sm">${product.badge}</span>`;
        }

        card.innerHTML = `
            <!-- Surat va yuqori nishonlar -->
            <div class="relative product-img-wrapper bg-slate-100 aspect-square cursor-pointer group" onclick="openQuickView(${product.id})">
                <img 
                    src="${product.image}" 
                    alt="${product.name}" 
                    class="product-img w-full h-full object-cover object-center"
                    loading="lazy"
                    onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80'"
                >
                <div class="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start z-10">
                    ${discountBadge}
                    ${specialBadge}
                </div>
                <!-- Sevimlilar tugmasi -->
                <button 
                    onclick="event.stopPropagation(); toggleWishlist(${product.id})" 
                    class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-600 shadow-sm flex items-center justify-center transition z-10"
                    title="${inWishlist ? 'Sevimlilardan o\'chirish' : 'Sevimlilarga qo\'shish'}"
                >
                    <i class="${inWishlist ? 'fa-solid fa-heart text-rose-500' : 'fa-regular fa-heart'} text-sm"></i>
                </button>

                <!-- Tezkor ko'rish indikatori -->
                <div class="absolute inset-0 bg-slate-900/15 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span class="bg-white/95 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl shadow">
                        <i class="fa-solid fa-eye mr-1 text-brand-600"></i> Ko'rish
                    </span>
                </div>
            </div>

            <!-- Ma'lumot qismi -->
            <div class="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <!-- Reyting va sharhlar -->
                    <div class="flex items-center gap-1.5 mb-1.5 text-xs text-slate-500">
                        <div class="flex text-amber-400 text-[11px]">
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <span class="font-bold text-slate-700">${product.rating}</span>
                        <span class="text-slate-400">(${product.reviewsCount} sharh)</span>
                    </div>

                    <!-- Nomi -->
                    <h3 
                        onclick="openQuickView(${product.id})" 
                        class="font-bold text-sm text-slate-800 hover:text-brand-600 line-clamp-2 cursor-pointer transition leading-snug mb-2" 
                        title="${product.name}"
                    >
                        ${product.name}
                    </h3>
                </div>

                <div class="pt-2 border-t border-slate-100">
                    <!-- Narxlar (So'mda) -->
                    <div class="mb-3">
                        ${product.oldPrice ? `<div class="text-[11px] text-slate-400 line-through">${formatPrice(product.oldPrice)}</div>` : ''}
                        <div class="text-base sm:text-lg font-extrabold text-slate-900 price-tag text-brand-700">
                            ${formatPrice(product.price)}
                        </div>
                    </div>

                    <!-- Korzinaga qo'shish yoki Miqdorni boshqarish -->
                    ${
                        inCartItem ? `
                        <div class="flex items-center justify-between bg-brand-50 border border-brand-200 rounded-xl p-1">
                            <button 
                                onclick="updateCartQuantity(${product.id}, -1)" 
                                class="w-8 h-8 rounded-lg bg-white text-brand-700 hover:bg-brand-600 hover:text-white font-bold flex items-center justify-center shadow-xs transition"
                            >
                                <i class="fa-solid fa-minus text-xs"></i>
                            </button>
                            <span class="font-bold text-sm text-brand-900 px-2">${inCartItem.quantity}</span>
                            <button 
                                onclick="updateCartQuantity(${product.id}, 1)" 
                                class="w-8 h-8 rounded-lg bg-white text-brand-700 hover:bg-brand-600 hover:text-white font-bold flex items-center justify-center shadow-xs transition"
                            >
                                <i class="fa-solid fa-plus text-xs"></i>
                            </button>
                        </div>
                        ` : `
                        <button 
                            onclick="addToCart(${product.id})" 
                            class="w-full bg-slate-900 hover:bg-brand-600 text-white font-semibold py-2.5 px-3 rounded-xl transition duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm active:scale-[0.98]"
                        >
                            <i class="fa-solid fa-cart-plus"></i>
                            <span>Savatga qo'shish</span>
                        </button>
                        `
                    }
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// 11. KORZINA (SAVAT) LOGIKASI

// Savatga qo'shish
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    renderProducts();
    showToast(`"${product.name}" savatga qo'shildi!`, 'success');
}

// Miqdorni o'zgartirish (+ yoki -)
function updateCartQuantity(productId, delta) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    cart[itemIndex].quantity += delta;

    if (cart[itemIndex].quantity <= 0) {
        const removedName = cart[itemIndex].name;
        cart.splice(itemIndex, 1);
        showToast(`"${removedName}" savatdan olib tashlandi`, 'info');
    }

    saveCart();
    updateCartUI();
    renderProducts();
}

// Korzinadan to'g'ridan-to'g'ri olib tashlash
function removeFromCart(productId) {
    const item = cart.find(i => i.id === productId);
    const itemName = item ? item.name : 'Mahsulot';
    
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    updateCartUI();
    renderProducts();
    showToast(`"${itemName}" savatdan o'chirildi`, 'info');
}

// Savatni tozalash
function clearCart() {
    if (cart.length === 0) return;
    if (confirm("Haqiqatan ham savatchani tozalashni xohlaysizmi?")) {
        cart = [];
        appliedPromo = null;
        saveCart();
        updateCartUI();
        renderProducts();
        showToast("Savatcha tozalandi", 'info');
    }
}

// Savatni LocalStorage ga saqlash
function saveCart() {
    localStorage.setItem('bozorgo_cart', JSON.stringify(cart));
}

// UMUMIY NARXNI HISOBLASH VA SAVAT UI-NI YANGILASH
function updateCartUI() {
    // 1. Hisob-kitoblar
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Yetkazib berish narxi (500 000 so'mdan oshsa bepul)
    let shipping = 0;
    if (subtotal > 0) {
        shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_FEE;
    }

    // Chegirma (Promokod orqali)
    let discount = 0;
    if (appliedPromo && subtotal > 0) {
        discount = Math.round((subtotal * appliedPromo.discountPercent) / 100);
    }

    // Jami to'lov
    const grandTotal = Math.max(0, subtotal + shipping - discount);

    // 2. Headerdagi indikatorlar
    const cartCountBadge = document.getElementById('cartCountBadge');
    const cartHeaderTotal = document.getElementById('cartHeaderTotal');
    const cartItemsCountText = document.getElementById('cartItemsCountText');

    cartCountBadge.textContent = totalItems;
    cartCountBadge.classList.remove('animate-pop');
    void cartCountBadge.offsetWidth; // reflow animatsiya uchun
    cartCountBadge.classList.add('animate-pop');

    cartHeaderTotal.textContent = formatPrice(subtotal);
    cartItemsCountText.textContent = totalItems;

    // 3. Bepul yetkazish progress bari
    const freeShippingProgress = document.getElementById('freeShippingProgressBar');
    const freeShippingStatusText = document.getElementById('freeShippingStatusText');
    const freeShippingRemainText = document.getElementById('freeShippingRemainText');

    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
        freeShippingProgress.style.width = '100%';
        freeShippingStatusText.innerHTML = '<span class="text-emerald-700 font-bold"><i class="fa-solid fa-circle-check mr-1"></i> Bepul yetkazib berish faollashdi!</span>';
        freeShippingRemainText.textContent = '';
    } else {
        const percent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
        const diff = FREE_SHIPPING_THRESHOLD - subtotal;
        freeShippingProgress.style.width = `${percent}%`;
        freeShippingStatusText.textContent = 'Bepul yetkazib berishgacha yana:';
        freeShippingRemainText.textContent = formatPrice(diff);
    }

    // 4. Drawer ichidagi ro'yxat
    const container = document.getElementById('cartItemsContainer');
    const emptyView = document.getElementById('emptyCartView');
    const promoSection = document.getElementById('cartPromoSection');
    const footerSection = document.getElementById('cartFooter');

    if (cart.length === 0) {
        container.innerHTML = '';
        container.classList.add('hidden');
        emptyView.classList.remove('hidden');
        promoSection.classList.add('hidden');
        footerSection.classList.add('hidden');
        return;
    }

    emptyView.classList.add('hidden');
    container.classList.remove('hidden');
    promoSection.classList.remove('hidden');
    footerSection.classList.remove('hidden');

    container.innerHTML = '';
    cart.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.className = 'pt-3.5 first:pt-0 flex gap-3.5 items-center';
        itemRow.innerHTML = `
            <img 
                src="${item.image}" 
                alt="${item.name}" 
                class="w-16 h-16 rounded-xl object-cover bg-slate-100 flex-shrink-0 border border-slate-100"
            >
            <div class="flex-1 min-w-0">
                <h4 class="text-xs font-bold text-slate-800 truncate" title="${item.name}">${item.name}</h4>
                <div class="text-xs text-brand-700 font-bold mt-0.5">${formatPrice(item.price)}</div>
                
                <div class="flex items-center justify-between mt-2">
                    <!-- Miqdor tugmalari -->
                    <div class="flex items-center border border-slate-200 rounded-lg bg-slate-50 overflow-hidden">
                        <button 
                            onclick="updateCartQuantity(${item.id}, -1)" 
                            class="w-6 h-6 flex items-center justify-center hover:bg-slate-200 text-slate-600 transition text-xs"
                        >
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <span class="w-8 text-center text-xs font-bold text-slate-800">${item.quantity}</span>
                        <button 
                            onclick="updateCartQuantity(${item.id}, 1)" 
                            class="w-6 h-6 flex items-center justify-center hover:bg-slate-200 text-slate-600 transition text-xs"
                        >
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>

                    <!-- Umumiy qator narxi va O'chirish tugmasi -->
                    <div class="flex items-center gap-3">
                        <span class="text-xs font-bold text-slate-900">${formatPrice(item.price * item.quantity)}</span>
                        <button 
                            onclick="removeFromCart(${item.id})" 
                            title="Olib tashlash" 
                            class="text-slate-400 hover:text-red-500 transition text-xs p-1"
                        >
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(itemRow);
    });

    // 5. Hisoblar satrlarini yangilash
    document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);
    
    const shippingEl = document.getElementById('cartShipping');
    if (shipping === 0) {
        shippingEl.textContent = 'Bepul';
        shippingEl.className = 'font-bold text-emerald-600';
    } else {
        shippingEl.textContent = formatPrice(shipping);
        shippingEl.className = 'font-bold text-slate-800';
    }

    const discountRow = document.getElementById('discountRow');
    if (discount > 0) {
        discountRow.classList.remove('hidden');
        document.getElementById('cartDiscount').textContent = `- ${formatPrice(discount)}`;
    } else {
        discountRow.classList.add('hidden');
    }

    document.getElementById('cartTotalSum').textContent = formatPrice(grandTotal);
    document.getElementById('checkoutTotalAmount').textContent = formatPrice(grandTotal);
}

// 12. PROMOKOD TIZIMI
function applyPromoCode() {
    const promoInput = document.getElementById('promoInput');
    const promoMessage = document.getElementById('promoMessage');
    const code = promoInput.value.trim().toUpperCase();

    if (!code) {
        promoMessage.textContent = "Iltimos, promokodni kiriting!";
        promoMessage.className = "text-[11px] mt-1.5 font-medium text-rose-500 block";
        return;
    }

    if (code === 'BOZOR10') {
        appliedPromo = { code: 'BOZOR10', discountPercent: 10 };
        promoMessage.textContent = "Promokod muvaffaqiyatli qo'llandi: 10% chegirma!";
        promoMessage.className = "text-[11px] mt-1.5 font-medium text-emerald-600 block";
        updateCartUI();
        showToast("10% chegirma taqdim etildi!", "success");
    } else {
        promoMessage.textContent = "Bunday promokod mavjud emas!";
        promoMessage.className = "text-[11px] mt-1.5 font-medium text-rose-500 block";
    }
}

// 13. SEVIMLILAR (WISHLIST) LOGIKASI
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    const product = products.find(p => p.id === productId);

    if (index === -1) {
        wishlist.push(productId);
        showToast(`"${product ? product.name : 'Mahsulot'}" sevimlilarga qo'shildi!`, 'info');
    } else {
        wishlist.splice(index, 1);
        showToast(`"${product ? product.name : 'Mahsulot'}" sevimlilardan olib tashlandi`, 'info');
    }

    localStorage.setItem('bozorgo_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    renderProducts();
}

function updateWishlistUI() {
    const badge = document.getElementById('wishlistCountBadge');
    if (wishlist.length > 0) {
        badge.textContent = wishlist.length;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

function openWishlistModal() {
    const modal = document.getElementById('wishlistModal');
    const container = document.getElementById('wishlistContainer');
    modal.classList.remove('hidden');

    if (wishlist.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 text-slate-400">
                <i class="fa-regular fa-heart text-4xl mb-3"></i>
                <p class="text-sm">Hozircha sevimli mahsulotlar yo'q</p>
            </div>
        `;
        return;
    }

    const items = products.filter(p => wishlist.includes(p.id));
    container.innerHTML = '';
    items.forEach(product => {
        const div = document.createElement('div');
        div.className = 'flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-slate-300 transition';
        div.innerHTML = `
            <div class="flex items-center gap-3">
                <img src="${product.image}" class="w-12 h-12 rounded-lg object-cover bg-slate-100">
                <div>
                    <h5 class="text-xs font-bold text-slate-800">${product.name}</h5>
                    <span class="text-xs font-bold text-brand-700">${formatPrice(product.price)}</span>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="addToCart(${product.id}); openWishlistModal();" class="text-xs bg-slate-900 text-white px-3 py-1.5 rounded-lg hover:bg-brand-600 transition">
                    <i class="fa-solid fa-cart-plus mr-1"></i> Savatga
                </button>
                <button onclick="toggleWishlist(${product.id}); openWishlistModal();" class="text-rose-500 hover:text-rose-700 p-1.5 text-sm">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
        container.appendChild(div);
    });
}

// 14. TEZKOR KO'RISH (QUICK VIEW MODAL)
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('quickViewModal');
    const content = document.getElementById('quickViewContent');

    const inCartItem = cart.find(c => c.id === product.id);

    content.innerHTML = `
        <div class="bg-slate-100 rounded-2xl overflow-hidden aspect-square">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
        </div>
        <div class="flex flex-col justify-between h-full">
            <div>
                <span class="text-xs font-bold text-brand-600 uppercase tracking-wider">${categories.find(c => c.id === product.category)?.name || ''}</span>
                <h3 class="text-xl font-extrabold text-slate-900 mt-1">${product.name}</h3>
                <div class="flex items-center gap-2 mt-2 text-xs text-slate-500">
                    <span class="text-amber-400 font-bold"><i class="fa-solid fa-star"></i> ${product.rating}</span>
                    <span>•</span>
                    <span>${product.reviewsCount} ta xaridor sharhi</span>
                    <span>•</span>
                    <span class="text-emerald-600 font-semibold"><i class="fa-solid fa-check mr-1"></i> Omborda mavjud</span>
                </div>
                <p class="text-xs text-slate-600 mt-4 leading-relaxed">${product.desc}</p>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-200">
                <div class="mb-3">
                    ${product.oldPrice ? `<span class="text-xs text-slate-400 line-through mr-2">${formatPrice(product.oldPrice)}</span>` : ''}
                    <span class="text-2xl font-black text-brand-700">${formatPrice(product.price)}</span>
                </div>
                <div class="flex gap-2">
                    <button 
                        onclick="addToCart(${product.id}); closeQuickView();" 
                        class="flex-1 bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm"
                    >
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span>${inCartItem ? 'Yana qo\'shish' : 'Savatga qo\'shish'}</span>
                    </button>
                    <button 
                        onclick="toggleWishlist(${product.id}); closeQuickView();" 
                        class="w-12 h-12 rounded-xl border border-slate-300 hover:border-slate-400 flex items-center justify-center text-slate-600 transition"
                    >
                        <i class="${wishlist.includes(product.id) ? 'fa-solid fa-heart text-rose-500' : 'fa-regular fa-heart'} text-lg"></i>
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
}

function closeQuickView() {
    document.getElementById('quickViewModal').classList.add('hidden');
}

// 15. TOAST BILDIRISHNOMALAR TIZIMI
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');

    let icon = 'fa-info-circle';
    let borderColor = 'border-brand-500';
    let iconColor = 'text-brand-600';

    if (type === 'success') {
        icon = 'fa-circle-check';
        borderColor = 'border-emerald-500';
        iconColor = 'text-emerald-600';
    } else if (type === 'warning') {
        icon = 'fa-triangle-exclamation';
        borderColor = 'border-amber-500';
        iconColor = 'text-amber-500';
    }

    toast.className = `toast-enter flex items-center gap-3 bg-white text-slate-800 text-xs font-semibold px-4 py-3 rounded-xl shadow-xl border-l-4 ${borderColor} pointer-events-auto max-w-sm`;
    toast.innerHTML = `
        <i class="fa-solid ${icon} ${iconColor} text-base flex-shrink-0"></i>
        <span class="flex-1">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('toast-enter');
        toast.classList.add('toast-exit');
        setTimeout(() => toast.remove(), 250);
    }, 2800);
}

// 16. KORZINA DRAWER OCHISH VA YOPISH
function toggleCartDrawer(open = true) {
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('cartBackdrop');
    const panel = document.getElementById('cartPanel');

    if (open) {
        drawer.classList.remove('hidden');
        setTimeout(() => {
            backdrop.classList.remove('opacity-0');
            backdrop.classList.add('opacity-100');
            panel.classList.remove('translate-x-full');
            panel.classList.add('translate-x-0');
        }, 10);
    } else {
        backdrop.classList.remove('opacity-100');
        backdrop.classList.add('opacity-0');
        panel.classList.remove('translate-x-0');
        panel.classList.add('translate-x-full');
        setTimeout(() => {
            drawer.classList.add('hidden');
        }, 300);
    }
}

// 17. KATALOG MENYUSINI TOGGLE QILISH
function toggleCatalogDropdown(forceState) {
    const dropdown = document.getElementById('catalogDropdown');
    const chevron = document.getElementById('catalogChevron');
    const isHidden = dropdown.classList.contains('hidden');

    const shouldOpen = forceState !== undefined ? forceState : isHidden;

    if (shouldOpen) {
        dropdown.classList.remove('hidden');
        if (chevron) chevron.style.transform = 'rotate(180deg)';
    } else {
        dropdown.classList.add('hidden');
        if (chevron) chevron.style.transform = 'rotate(0deg)';
    }
}

// 18. FOOTER KATEGORIYALARINI TO'LDIRISH
function populateFooterCategories() {
    const list = document.getElementById('footerCategories');
    list.innerHTML = '';
    categories.forEach(c => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#products-section" class="hover:text-white transition cursor-pointer">${c.name}</a>`;
        li.querySelector('a').addEventListener('click', () => {
            selectCategory(c.id);
        });
        list.appendChild(li);
    });
}

// 19. VOQEALARNI BIRIKTIRISH (EVENT LISTENERS)
function setupEventListeners() {
    // Korzina ochish va yopish
    document.getElementById('openCartBtn').addEventListener('click', () => toggleCartDrawer(true));
    document.getElementById('closeCartBtn').addEventListener('click', () => toggleCartDrawer(false));
    document.getElementById('cartBackdrop').addEventListener('click', () => toggleCartDrawer(false));
    document.getElementById('clearCartBtn').addEventListener('click', clearCart);
    document.getElementById('startShoppingBtn').addEventListener('click', () => {
        toggleCartDrawer(false);
        const sec = document.getElementById('products-section');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    });

    // Qidiruv
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (searchQuery.trim().length > 0) {
            clearSearchBtn.classList.remove('hidden');
        } else {
            clearSearchBtn.classList.add('hidden');
        }
        renderProducts();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.classList.add('hidden');
        renderProducts();
    });

    // Saralash
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProducts();
    });

    // Filtrlarni qayta o'rnatish tugmasi
    document.getElementById('resetFiltersBtn').addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.classList.add('hidden');
        selectCategory('all');
    });

    // Promokod tugmasi
    document.getElementById('applyPromoBtn').addEventListener('click', applyPromoCode);

    // Katalog dropdown tugmasi
    const catalogBtn = document.getElementById('catalogBtn');
    if (catalogBtn) {
        catalogBtn.addEventListener('click', () => toggleCatalogDropdown());
    }
    const closeCatalogBtn = document.getElementById('closeCatalogBtn');
    if (closeCatalogBtn) {
        closeCatalogBtn.addEventListener('click', () => toggleCatalogDropdown(false));
    }

    // Sevimlilar
    document.getElementById('wishlistToggleBtn').addEventListener('click', openWishlistModal);
    document.getElementById('closeWishlistBtn').addEventListener('click', () => {
        document.getElementById('wishlistModal').classList.add('hidden');
    });
    document.getElementById('wishlistBackdrop').addEventListener('click', () => {
        document.getElementById('wishlistModal').classList.add('hidden');
    });

    // Tezkor ko'rish yopish
    document.getElementById('closeQuickViewBtn').addEventListener('click', closeQuickView);
    document.getElementById('quickViewBackdrop').addEventListener('click', closeQuickView);

    // Buyurtma berish tugmasi
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if (cart.length === 0) return;
        toggleCartDrawer(false);
        document.getElementById('checkoutModal').classList.remove('hidden');
    });

    document.getElementById('closeCheckoutBtn').addEventListener('click', () => {
        document.getElementById('checkoutModal').classList.add('hidden');
    });
    document.getElementById('checkoutBackdrop').addEventListener('click', () => {
        document.getElementById('checkoutModal').classList.add('hidden');
    });

    // Buyurtma shaklini yuborish (Checkout submit)
    document.getElementById('checkoutForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('orderName').value.trim();
        const phone = document.getElementById('orderPhone').value.trim();
        const address = document.getElementById('orderAddress').value.trim();
        const payment = document.querySelector('input[name="paymentType"]:checked')?.value || 'Payme';

        // Chek ma'lumotlarini tayyorlash
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_FEE;
        const discount = appliedPromo ? Math.round((subtotal * appliedPromo.discountPercent) / 100) : 0;
        const total = subtotal + shipping - discount;
        const orderNumber = Math.floor(100000 + Math.random() * 900000);

        const receiptContent = document.getElementById('receiptContent');
        receiptContent.innerHTML = `
            <div class="flex justify-between border-b border-slate-200 pb-2">
                <span class="text-slate-500">Buyurtma raqami:</span>
                <span class="font-bold text-slate-800">#BG-${orderNumber}</span>
            </div>
            <div class="flex justify-between">
                <span class="text-slate-500">Buyurtmachi:</span>
                <span class="font-semibold text-slate-800">${name}</span>
            </div>
            <div class="flex justify-between">
                <span class="text-slate-500">Telefon:</span>
                <span class="font-semibold text-slate-800">${phone}</span>
            </div>
            <div class="flex justify-between">
                <span class="text-slate-500">Yetkazish manzili:</span>
                <span class="font-semibold text-slate-800 text-right">${address}</span>
            </div>
            <div class="flex justify-between">
                <span class="text-slate-500">To'lov usuli:</span>
                <span class="font-semibold text-brand-600">${payment}</span>
            </div>
            <div class="border-t border-slate-200 pt-2 flex justify-between font-bold text-slate-900 text-sm">
                <span>To'langan summa:</span>
                <span class="text-emerald-600">${formatPrice(total)}</span>
            </div>
        `;

        // Modallarni almashtirish
        document.getElementById('checkoutModal').classList.add('hidden');
        document.getElementById('receiptModal').classList.remove('hidden');

        // Savatni tozalash
        cart = [];
        appliedPromo = null;
        saveCart();
        updateCartUI();
        renderProducts();

        showToast("Buyurtmangiz muvaffaqiyatli qabul qilindi!", "success");
    });

    document.getElementById('closeReceiptBtn').addEventListener('click', () => {
        document.getElementById('receiptModal').classList.add('hidden');
    });
}
