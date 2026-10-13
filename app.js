/**
 * BozorGo — Zamonaviy Online Do'kon
 * Kengaytirilgan Menyular va Mahsulotlar Bazasi
 */

// 1. KENGAYTIRILGAN KATEGORIYALAR RO'YXATI (12 TA TOIFA)
const categories = [
    { 
        id: 'all', 
        name: 'Barchasi', 
        icon: 'fa-solid fa-border-all', 
        desc: 'Barcha toifadagi eng sara va ommabop tovarlar',
        gradient: 'from-blue-600 to-indigo-600',
        bgLight: 'bg-blue-50 text-blue-600'
    },
    { 
        id: 'smartphones', 
        name: 'Smartfon & Gadjetlar', 
        icon: 'fa-solid fa-mobile-screen-button', 
        desc: 'Eng so\'nggi flagman telefonlar, aqlli soatlar va quloqchinlar',
        gradient: 'from-sky-500 to-blue-600',
        bgLight: 'bg-sky-50 text-sky-600'
    },
    { 
        id: 'laptops', 
        name: 'Noutbuk & Kompyuter', 
        icon: 'fa-solid fa-laptop', 
        desc: 'Ish, o\'qish va grafik dasturlar uchun kuchli kompyuterlar',
        gradient: 'from-indigo-500 to-purple-600',
        bgLight: 'bg-indigo-50 text-indigo-600'
    },
    { 
        id: 'appliances', 
        name: 'Maishiy texnika', 
        icon: 'fa-solid fa-blender', 
        desc: 'Oshxona va uy qulayligi uchun zamonaviy texnikalar',
        gradient: 'from-orange-500 to-amber-600',
        bgLight: 'bg-orange-50 text-orange-600'
    },
    { 
        id: 'clothes', 
        name: 'Kiyim & Moda', 
        icon: 'fa-solid fa-shirt', 
        desc: 'Erkaklar va ayollar uchun mavsumiy zamonaviy kiyimlar',
        gradient: 'from-rose-500 to-pink-600',
        bgLight: 'bg-rose-50 text-rose-600'
    },
    { 
        id: 'shoes', 
        name: 'Poyabzallar', 
        icon: 'fa-solid fa-shoe-prints', 
        desc: 'Krossovkalar, sport va kundalik qulay poyabzallar',
        gradient: 'from-teal-500 to-emerald-600',
        bgLight: 'bg-teal-50 text-teal-600'
    },
    { 
        id: 'groceries', 
        name: 'Oziq-ovqat', 
        icon: 'fa-solid fa-basket-shopping', 
        desc: 'Yangi, tabiiy va organik oziq-ovqat mahsulotlari',
        gradient: 'from-emerald-500 to-green-600',
        bgLight: 'bg-emerald-50 text-emerald-600'
    },
    { 
        id: 'books', 
        name: 'Kitoblar & Ilm', 
        icon: 'fa-solid fa-book-open', 
        desc: 'Jahon bestsellerlari, biznes, rivojlanish va badiiy adabiyot',
        gradient: 'from-amber-500 to-yellow-600',
        bgLight: 'bg-amber-50 text-amber-600'
    },
    { 
        id: 'sports', 
        name: 'Sport & Salomatlik', 
        icon: 'fa-solid fa-dumbbell', 
        desc: 'Trenajyorlar, gantellar va fitnes aksessuarlari',
        gradient: 'from-red-500 to-orange-600',
        bgLight: 'bg-red-50 text-red-600'
    },
    { 
        id: 'beauty', 
        name: 'Go\'zallik & Parvarish', 
        icon: 'fa-solid fa-wand-magic-sparkles', 
        desc: 'Fransuz parfyumeriyasi va sifatli kosmetika vositalari',
        gradient: 'from-fuchsia-500 to-pink-600',
        bgLight: 'bg-fuchsia-50 text-fuchsia-600'
    },
    { 
        id: 'kids', 
        name: 'Bolalar tovarlari', 
        icon: 'fa-solid fa-gamepad', 
        desc: 'Konstruktorlar, rivojlantiruvchi o\'yinchoqlar va samokatlar',
        gradient: 'from-purple-500 to-violet-600',
        bgLight: 'bg-purple-50 text-purple-600'
    },
    { 
        id: 'auto', 
        name: 'Avtotovarlar', 
        icon: 'fa-solid fa-car', 
        desc: 'Videoregistratorlar, avto aksessuarlar va qulaylik vositalari',
        gradient: 'from-slate-700 to-slate-900',
        bgLight: 'bg-slate-100 text-slate-700'
    }
];

// 2. KENGAYTIRILGAN MAHSULOTLAR BAZASI (55+ TA MAHSULOT, BARCHASI SO'MDA)
const products = [
    // -------------------------------------------------------------
    // SMARTFON & GADJETLAR
    // -------------------------------------------------------------
    {
        id: 1,
        name: 'Apple iPhone 15 Pro Max 256GB Titanium',
        category: 'smartphones',
        price: 16800000,
        oldPrice: 18200000,
        rating: 4.9,
        reviewsCount: 142,
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80',
        badge: 'Top Sotuv',
        desc: 'Aviatsiya darajasidagi titan korpus, A17 Pro qudratli protsessori, 48MP professional kamera va USB-C 3.0.'
    },
    {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra 512GB Titanium Gray',
        category: 'smartphones',
        price: 15200000,
        oldPrice: 16500000,
        rating: 4.8,
        reviewsCount: 98,
        image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=80',
        badge: 'Yangi',
        desc: 'Galaxy AI sun\'iy intellekt texnologiyasi, o\'rnatilgan S-Pen stilus, 200MP kamera va 120Hz Dynamic AMOLED ekran.'
    },
    {
        id: 3,
        name: 'Xiaomi 14 Pro 12/256GB Black',
        category: 'smartphones',
        price: 8900000,
        oldPrice: 9800000,
        rating: 4.7,
        reviewsCount: 65,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80',
        badge: 'Aksiya',
        desc: 'Leica optikasi bilan jihozlangan kamera, Snapdragon 8 Gen 3 protsessor va 120W HyperCharge o\'ta tezkor quvvatlash.'
    },
    {
        id: 4,
        name: 'Apple Watch Series 9 45mm Midnight',
        category: 'smartphones',
        price: 5300000,
        oldPrice: 5800000,
        rating: 4.9,
        reviewsCount: 74,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=80',
        badge: 'Xit',
        desc: 'Yangi Double Tap imo-ishora nazorati, S9 SiP chipi, 2000 nit ultra-yorqin displey va salomatlik nazorati.'
    },
    {
        id: 5,
        name: 'Apple AirPods Pro 2 (USB-C MagSafe)',
        category: 'smartphones',
        price: 3100000,
        oldPrice: 3500000,
        rating: 4.9,
        reviewsCount: 162,
        image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&auto=format&fit=crop&q=80',
        badge: 'Top',
        desc: '2 barobar kuchliroq faol shovqinni to\'sish (ANC), Shaffoflik rejimi, Spatial Audio va USB-C g'ilof.'
    },

    // -------------------------------------------------------------
    // NOUTBUK & KOMPYUTER
    // -------------------------------------------------------------
    {
        id: 6,
        name: 'Apple MacBook Air 13.6" M2 8/256GB Space Gray',
        category: 'laptops',
        price: 12500000,
        oldPrice: 13800000,
        rating: 4.9,
        reviewsCount: 88,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80',
        badge: 'Tavsiya',
        desc: 'Yupqa va yengil alyuminiy korpus, Apple M2 chipi, 18 soatlik batareya quvvati va Liquid Retina displey.'
    },
    {
        id: 7,
        name: 'ASUS ROG Zephyrus G14 Gaming Ryzen 9 / RTX 4060',
        category: 'laptops',
        price: 17900000,
        oldPrice: 19500000,
        rating: 4.8,
        reviewsCount: 42,
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80',
        badge: 'Gaming',
        desc: '165Hz ROG Nebula displey, kuchli sovutish tizimi, AniMe Matrix qopqoq va ultra-portativ korpus.'
    },
    {
        id: 8,
        name: 'Apple iPad Pro 11" M2 Wi-Fi 128GB',
        category: 'laptops',
        price: 9800000,
        oldPrice: 10900000,
        rating: 4.9,
        reviewsCount: 56,
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: 'M2 chipining professional unumdorligi, Apple Pencil Hover qo\'llab-quvvatlashi va ProMotion 120Hz displey.'
    },
    {
        id: 9,
        name: 'Logitech MX Master 3S Ergonomik Sichqoncha',
        category: 'laptops',
        price: 1350000,
        oldPrice: 1550000,
        rating: 5.0,
        reviewsCount: 112,
        image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80',
        badge: 'Ofis',
        desc: 'O\'ta sokin bosilish (Quiet Clicks), 8K DPI datchik, MagSpeed elektromagnit aylantirish va qulay ergonomika.'
    },
    {
        id: 10,
        name: 'Xiaomi Curved Gaming Monitor 34" 144Hz WQHD',
        category: 'laptops',
        price: 4600000,
        oldPrice: 5200000,
        rating: 4.7,
        reviewsCount: 39,
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80',
        badge: 'Chegirma',
        desc: '21:9 keng burchakli 1500R egri ekran, FreeSync texnologiyasi va ajoyib 3440x1440 piksel tasvir tiniqligi.'
    },

    // -------------------------------------------------------------
    // MAISHIY TEXNIKA
    // -------------------------------------------------------------
    {
        id: 11,
        name: 'Artel Sovutgich HD-345FW NoFrost Silver',
        category: 'appliances',
        price: 4800000,
        oldPrice: 5200000,
        rating: 4.6,
        reviewsCount: 52,
        image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=600&auto=format&fit=crop&q=80',
        badge: 'Aksiya',
        desc: 'No Frost tizimi, A+ energiya tejamkorlik sinfi, keng muzlatgich kamerasi va antibakterial himoya.'
    },
    {
        id: 12,
        name: 'LG Inverter Kir Yuvish Mashinasi 7kg AI DD',
        category: 'appliances',
        price: 5600000,
        oldPrice: 6100000,
        rating: 4.8,
        reviewsCount: 77,
        image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&auto=format&fit=crop&q=80',
        badge: 'Top Sotuv',
        desc: 'Sun\'iy intellekt mato turini aniqlaydi, bug\' bilan antibakterial tozalash va to\'g\'ridan-to\'g\'ri drayv motor.'
    },
    {
        id: 13,
        name: 'Xiaomi Robot Changyutgich S10+ Smart Mop',
        category: 'appliances',
        price: 2950000,
        oldPrice: 3400000,
        rating: 4.7,
        reviewsCount: 110,
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80',
        badge: 'Aqlli uy',
        desc: 'LDS lazerli xarita chizish, 4000Pa kuchli tortish, aylanuvchi pol yuvish cho\'tkalari va avtomatik boshqaruv.'
    },
    {
        id: 14,
        name: 'Dyson Supersonic Soch Quritgich Fen HD08',
        category: 'appliances',
        price: 5900000,
        oldPrice: 6500000,
        rating: 5.0,
        reviewsCount: 94,
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
        badge: 'Premium',
        desc: 'Sochni haddan tashqari qizib ketishdan asraydi, magnitli nozzillar to\'plami va tezkor ionlashtirilgan havo oqimi.'
    },
    {
        id: 15,
        name: 'De\'Longhi Dedica Espresso Qahva Mashinasi',
        category: 'appliances',
        price: 3200000,
        oldPrice: 3600000,
        rating: 4.8,
        reviewsCount: 39,
        image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: '15 bar nasos bosimi, qalin ko\'pikli kapuchino tayyorlagich va ixcham italyan metall korpusi.'
    },

    // -------------------------------------------------------------
    // KIYIM & MODA
    // -------------------------------------------------------------
    {
        id: 16,
        name: 'Erkaklar Klassik Slim-Fit Kostyum-Shimi',
        category: 'clothes',
        price: 1200000,
        oldPrice: 1500000,
        rating: 4.7,
        reviewsCount: 34,
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80',
        badge: 'Klassika',
        desc: 'Tabiiy jun aralashmali mato, mukammal bichim va rasmiy tadbirlar uchun bashang ko\'rinish.'
    },
    {
        id: 17,
        name: 'Ayollar Elegant Kechki Shoyi Ko\'ylagi',
        category: 'clothes',
        price: 750000,
        oldPrice: 900000,
        rating: 4.8,
        reviewsCount: 46,
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80',
        badge: 'Yangi',
        desc: 'Nafis ipaksimon mato, qomatga urg\'u beruvchi zamonaviy dizayn va bayramona joziba.'
    },
    {
        id: 18,
        name: 'Qishki Issiq Kurtka (Suv va Shamol O\'tkazmaydigan)',
        category: 'clothes',
        price: 980000,
        oldPrice: 1200000,
        rating: 4.8,
        reviewsCount: 88,
        image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600&auto=format&fit=crop&q=80',
        badge: 'Mavsumiy',
        desc: 'Bio-pat bilan to\'ldirilgan, sovuq haroratlarda qulay issiqlikni saqlovchi chuqur kapyushonli kurtka.'
    },
    {
        id: 19,
        name: 'Oversize Paxtali Kapushonkali Xudi (Unisex)',
        category: 'clothes',
        price: 320000,
        oldPrice: 390000,
        rating: 4.6,
        reviewsCount: 104,
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: '100% paxta, yumshoq flis ichki qatlam, keng qulay keng cho\'ntak va elastik manjetlar.'
    },
    {
        id: 20,
        name: 'Erkaklar Klassik Jun Palto (To\'q Ko\'k)',
        category: 'clothes',
        price: 1650000,
        oldPrice: 1950000,
        rating: 4.9,
        reviewsCount: 29,
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80',
        badge: 'Premium',
        desc: 'Italiya texnologiyasida tayyorlangan tabiiy kashmer-jun mato, nafis yoqa va qulay cho\'ntaklar.'
    },

    // -------------------------------------------------------------
    // POYABZALLAR
    // -------------------------------------------------------------
    {
        id: 21,
        name: 'Nike Air Force 1 \'07 Klassik Oq Krossovka',
        category: 'shoes',
        price: 1450000,
        oldPrice: 1650000,
        rating: 4.9,
        reviewsCount: 215,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
        badge: 'Ommabop',
        desc: 'Haqiqiy charm ustki qism, afsonaviy Nike Air yostiqchasi va har qanday kiyimga mos oq rang.'
    },
    {
        id: 22,
        name: 'Adidas Ultraboost Light Yugurish Krossovkasi',
        category: 'shoes',
        price: 1850000,
        oldPrice: 2100000,
        rating: 4.9,
        reviewsCount: 83,
        image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&auto=format&fit=crop&q=80',
        badge: 'Sport',
        desc: 'Yengil Boost taglik, qadam tashlashda mislsiz energiya qaytarish va nafas oluvchi Primeknit matosi.'
    },
    {
        id: 23,
        name: 'New Balance 574 Kundalik Qulay Krossovka',
        category: 'shoes',
        price: 1290000,
        oldPrice: 1450000,
        rating: 4.8,
        reviewsCount: 118,
        image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: 'Zamshe va to\'qima mato uyg\'unligi, ENCAP mustahkam taglik amortizatsiyasi va klassik NB dizayni.'
    },
    {
        id: 24,
        name: 'Erkaklar Tabiiy Charm Klassik Tuflisi',
        category: 'shoes',
        price: 890000,
        oldPrice: 1050000,
        rating: 4.7,
        reviewsCount: 45,
        image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&auto=format&fit=crop&q=80',
        badge: 'Klassika',
        desc: '100% tabiiy buzoq terisi, ortopedik taglik va rasmiy tadbirlar uchun oqlangan joziba.'
    },

    // -------------------------------------------------------------
    // OZIK-OVQAT MAHSULOTLARI
    // -------------------------------------------------------------
    {
        id: 25,
        name: 'Tabiiy Zomin Tog\' Asali 1 kg (Sof Asal)',
        category: 'groceries',
        price: 140000,
        oldPrice: 165000,
        rating: 5.0,
        reviewsCount: 156,
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop&q=80',
        badge: 'Tabiiy ECO',
        desc: 'Tog\' gullari shirasidan olingan tabiiy shifobaxsh asal. Tarkibida shakar va begona qo\'shimchalar yo\'q.'
    },
    {
        id: 26,
        name: 'Samarqand Non va Milliy Shirinliklar To\'plami',
        category: 'groceries',
        price: 75000,
        oldPrice: 90000,
        rating: 4.9,
        reviewsCount: 72,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80',
        badge: 'Milliy',
        desc: 'An\'anaviy Samarqand patiri, bodomli holva va xushbo\'y pishiriqlar to\'plami.'
    },
    {
        id: 27,
        name: 'Monini Extra Virgin Sof Zaytun Moyi 1L',
        category: 'groceries',
        price: 135000,
        oldPrice: 155000,
        rating: 4.8,
        reviewsCount: 64,
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format&fit=crop&q=80',
        badge: 'Italiya',
        desc: 'Birinchi sovuq siqim orqali olingan Italiya zaytun moyi. Salatlar va sog\'lom taomlar uchun ideal.'
    },
    {
        id: 28,
        name: 'Lavazza Qualita Oro Donali Qahva 1kg',
        category: 'groceries',
        price: 285000,
        oldPrice: 320000,
        rating: 4.9,
        reviewsCount: 89,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
        badge: 'Premium',
        desc: '100% Markaziy Amerika Arabikasi, mayin mevali nozik ta\'m va kuchli xushbo\'ylik.'
    },
    {
        id: 29,
        name: 'Lindt Shveytsariya Shokoladi Assorti 250g',
        category: 'groceries',
        price: 95000,
        oldPrice: 110000,
        rating: 4.9,
        reviewsCount: 95,
        image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: 'Og\'izda eruvchi mayin shveytsariya sutli va achchiq shokoladlari to\'plami.'
    },

    // -------------------------------------------------------------
    // KITOBLAR & ILM
    // -------------------------------------------------------------
    {
        id: 30,
        name: 'Atom Odatlar — Jeyms Klir (Bestseller)',
        category: 'books',
        price: 65000,
        oldPrice: 75000,
        rating: 5.0,
        reviewsCount: 310,
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80',
        badge: 'Bestseller',
        desc: 'Kichik kundalik odatlar qanday qilib hayotda ulkan natijalarga erishishga olib kelishini o\'rgatuvchi kitob.'
    },
    {
        id: 31,
        name: 'Stiv Jobs Rasmiy Biografiyasi — Uolter Ayzekson',
        category: 'books',
        price: 110000,
        oldPrice: 130000,
        rating: 4.9,
        reviewsCount: 140,
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=80',
        badge: 'Tarixiy',
        desc: 'Apple asoschisining hayoti, xarakteri, g\'oyalari va texnologiya olamidagi inqilobiy yutuqlari.'
    },
    {
        id: 32,
        name: 'Boy Ota, Kambag\'al Ota — Robert Kiyosaki',
        category: 'books',
        price: 55000,
        oldPrice: 65000,
        rating: 4.8,
        reviewsCount: 220,
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80',
        badge: 'Moliya',
        desc: 'Moliyaviy erkinlik, aktivlar va pul qanday ishlashi haqida jahonga mashhur qo\'llanma.'
    },
    {
        id: 33,
        name: 'Alkimyogar — Paulo Koelo (Falsafiy Asar)',
        category: 'books',
        price: 45000,
        oldPrice: 50000,
        rating: 4.7,
        reviewsCount: 180,
        image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: 'O\'z orzulari ortidan yo\'lga chiqqan cho\'pon Santyagoning ma\'naviy boyligi va taqdir haqidagi ramziy asari.'
    },
    {
        id: 34,
        name: 'Saodat Asri Qissalari (4 jildlik to\'liq to\'plam)',
        category: 'books',
        price: 320000,
        oldPrice: 360000,
        rating: 5.0,
        reviewsCount: 280,
        image: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=600&auto=format&fit=crop&q=80',
        badge: 'Mashhur',
        desc: 'Payg\'ambarimiz sollallohu alayhi vasallam va sahobai kiromlarning ibratli hayotlari haqidagi to'liq majmua.'
    },

    // -------------------------------------------------------------
    // SPORT & SALOMATLIK
    // -------------------------------------------------------------
    {
        id: 35,
        name: 'Gantellar To\'plami 2x10kg (Yig\'iladigan Metall)',
        category: 'sports',
        price: 490000,
        oldPrice: 550000,
        rating: 4.8,
        reviewsCount: 62,
        image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&auto=format&fit=crop&q=80',
        badge: 'Sport',
        desc: 'Og\'irligi oson sozlanuvchi xromlangan disklar, sirpanmaydigan rezinali tutqich va qulflash gaykalari.'
    },
    {
        id: 36,
        name: 'Professional Yoga & Fitnes Gilamchasi (Kovrik 6mm)',
        category: 'sports',
        price: 150000,
        oldPrice: 185000,
        rating: 4.7,
        reviewsCount: 44,
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: 'Ekologik xavfsiz TPE materiali, bo\'g\'imlarni himoya qiluvchi qalinlik va ko\'chirish tasmasi.'
    },
    {
        id: 37,
        name: 'Smartfit Perkussion Massajyor Tabancasi 6 Tezlik',
        category: 'sports',
        price: 390000,
        oldPrice: 460000,
        rating: 4.8,
        reviewsCount: 81,
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=80',
        badge: 'Top Gadjet',
        desc: 'Mashg\'ulotdan keyingi mushak og\'riqlarini ketkazuvchi 4 ta almashtiriladigan boshcha va uzoq batareya.'
    },
    {
        id: 38,
        name: 'Zanglamas Termos Suv Idishi 1L (24 Soat Sovuq)',
        category: 'sports',
        price: 110000,
        oldPrice: 130000,
        rating: 4.9,
        reviewsCount: 57,
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: 'Vakuumli ikki qavatli po\'lat, suv sizib chiqishiga qarshi ishonchli qopqoq va sport halqasi.'
    },

    // -------------------------------------------------------------
    // GO'ZALLIK & PARVARISH
    // -------------------------------------------------------------
    {
        id: 39,
        name: 'Chanel Coco Mademoiselle Parfyum 100ml',
        category: 'beauty',
        price: 1850000,
        oldPrice: 2100000,
        rating: 4.9,
        reviewsCount: 87,
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80',
        badge: 'Asl Fransiya',
        desc: 'Sharqona va yangi gullar ohangidagi afsonaviy ayollar parfyumi. 24 soatdan ortiq davom etuvchi hid.'
    },
    {
        id: 40,
        name: 'Dior Sauvage Erkaklar Parfyum Suvi 100ml',
        category: 'beauty',
        price: 1750000,
        oldPrice: 1950000,
        rating: 5.0,
        reviewsCount: 135,
        image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=80',
        badge: 'Xit',
        desc: 'Kalabriya bergamoti va vanil ohanglari uyg\'unlashgan qat\'iy, jozibali erkaklar ifori.'
    },
    {
        id: 41,
        name: 'The Ordinary Niacinamide 10% + Zinc 1% (30ml)',
        category: 'beauty',
        price: 1450000,
        oldPrice: 170000,
        rating: 4.8,
        reviewsCount: 168,
        image: 'https://images.unsplash.com/photo-1608248597359-5f284d72856a?w=600&auto=format&fit=crop&q=80',
        badge: 'Kosmetika',
        desc: 'Yuz terisidagi teshiklarni toraytiruvchi, ortiqcha yog\'lanishni kamaytiruvchi mashhur zardob.'
    },
    {
        id: 42,
        name: 'Philips Soqol va Soch Trimmeri Multigroom 9-in-1',
        category: 'beauty',
        price: 520000,
        oldPrice: 600000,
        rating: 4.8,
        reviewsCount: 92,
        image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: 'O\'z-o\'zini charxlovchi po\'lat tig\'lar, suv o\'tkazmaydigan yuviladigan korpus va 70 daqiqa avtonom ishlash.'
    },

    // -------------------------------------------------------------
    // BOLALAR TOVARLARI
    // -------------------------------------------------------------
    {
        id: 43,
        name: 'LEGO City Katta Politsiya Uchastkasi Konstruktori',
        category: 'kids',
        price: 820000,
        oldPrice: 950000,
        rating: 4.9,
        reviewsCount: 76,
        image: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=600&auto=format&fit=crop&q=80',
        badge: 'LEGO',
        desc: '668 qismdan iborat qiziqarli o\'yin to\'plami: vertolyot, politsiya mashinasi va figurkalar bilan.'
    },
    {
        id: 44,
        name: 'Masofadan Boshqariladigan 4WD Drift Monster Avto',
        category: 'kids',
        price: 340000,
        oldPrice: 410000,
        rating: 4.7,
        reviewsCount: 53,
        image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=600&auto=format&fit=crop&q=80',
        badge: 'RC Mashina',
        desc: 'To\'rtta g\'ildirak tortuvchi (4WD) kuchli motor, har qanday notekis yo\'llarda yurish va 2.4GHz pult.'
    },
    {
        id: 45,
        name: 'Teddy Katta Yumshoq Oq Ayiqcha 120 sm',
        category: 'kids',
        price: 390000,
        oldPrice: 460000,
        rating: 4.9,
        reviewsCount: 65,
        image: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=600&auto=format&fit=crop&q=80',
        badge: 'Sovg\'a',
        desc: 'Mayin gipoallergen sun\'iy mo\'yna, xavfsiz to\'ldiruvchi va bolalar uchun eng sevimli sovg\'a.'
    },
    {
        id: 46,
        name: 'Yig\'iladigan Bolalar Uch G\'ildirakli Samokati LED',
        category: 'kids',
        price: 290000,
        oldPrice: 350000,
        rating: 4.8,
        reviewsCount: 84,
        image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: 'Harakatlanganda yonuvchi LED chiroqli silikon g\'ildiraklar, bo\'yi sozlanuvchi rullar va orqa tormoz.'
    },

    // -------------------------------------------------------------
    // AVTOTOVARLAR & JIHOZLAR
    // -------------------------------------------------------------
    {
        id: 47,
        name: '70mai Dash Cam A810 4K UHD Videoregistrator',
        category: 'auto',
        price: 1450000,
        oldPrice: 1650000,
        rating: 4.9,
        reviewsCount: 114,
        image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?w=600&auto=format&fit=crop&q=80',
        badge: 'Sony 4K',
        desc: 'Sony Starvis 2 sensori, kechasi tiniq tasvirga olish, o\'rnatilgan GPS va harakat datchigi.'
    },
    {
        id: 48,
        name: 'Baseus Simsiz Kuchli Avtomobil Changyutgichi A3',
        category: 'auto',
        price: 380000,
        oldPrice: 440000,
        rating: 4.8,
        reviewsCount: 78,
        image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600&auto=format&fit=crop&q=80',
        badge: 'Baseus',
        desc: '15000Pa kuchli tortish kuchi, metall filtr, yorug\'lik chirog\'i va ixcham simsiz batareya.'
    },
    {
        id: 49,
        name: 'Baseus MagSafe Avtomobil Magnitli Ushlagichi',
        category: 'auto',
        price: 165000,
        oldPrice: 195000,
        rating: 4.7,
        reviewsCount: 62,
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&auto=format&fit=crop&q=80',
        badge: null,
        desc: 'Kuchli neodim magnitlar, 360 daraja aylanish burchagi va deflektor panjarasiga mustahkam mahkamlanish.'
    },
    {
        id: 50,
        name: 'Avtomobil Raqamli Portativ Shinani Damlash Kompressori',
        category: 'auto',
        price: 320000,
        oldPrice: 380000,
        rating: 4.8,
        reviewsCount: 47,
        image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=600&auto=format&fit=crop&q=80',
        badge: 'Avto',
        desc: 'Raqamli manometr, belgilangan bosimga yetganda avtomatik o\'chish va tungi fonar rejimi.'
    }
];

// 3. ILOVA HOLATI (STATE)
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'popular';
let cart = JSON.parse(localStorage.getItem('bozorgo_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('bozorgo_wishlist')) || [];
let appliedPromo = null;

// BEPUL YETKAZIB BERISH CHEGARASI (500 000 so'm)
const FREE_SHIPPING_THRESHOLD = 500000;
const STANDARD_SHIPPING_FEE = 25000;

// 4. NARXNI SO'MDA FORMATLASH FUNKSIYASI
function formatPrice(amount) {
    if (typeof amount !== 'number') amount = Number(amount) || 0;
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
}

// Kategoriya bo'yicha mahsulotlar sonini hisoblash
function getCategoryCount(catId) {
    if (catId === 'all') return products.length;
    return products.filter(p => p.category === catId).length;
}

// 5. SAHIFANI YUKLASH VA TASHKIL ETISH
document.addEventListener('DOMContentLoaded', () => {
    initCategoryMenu();
    initCategoriesShowcase();
    initCatalogDropdown();
    renderProducts();
    updateCartUI();
    updateWishlistUI();
    setupEventListeners();
    populateFooterCategories();
});

// 6. YUQORIGI KATEGORIYALAR STRIP MENYUSI (STICKY NAV)
function initCategoryMenu() {
    const menuContainer = document.getElementById('categoryMenu');
    if (!menuContainer) return;
    menuContainer.innerHTML = '';

    categories.forEach(cat => {
        const count = getCategoryCount(cat.id);
        const btn = document.createElement('button');
        const isActive = cat.id === currentCategory;

        btn.className = `category-btn whitespace-nowrap px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
            isActive 
            ? 'active bg-brand-600 text-white border-brand-600 shadow-md shadow-brand-500/20' 
            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
        }`;
        btn.dataset.category = cat.id;

        // Tugma ichida ikonka, toifa nomi va soni (Badge)
        btn.innerHTML = `
            <i class="${cat.icon} ${isActive ? 'text-white' : 'text-brand-600'}"></i>
            <span>${cat.name}</span>
            <span class="text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                isActive ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-600'
            }">${count}</span>
        `;

        // Menuni bosganda mahsulotlarga o'tish
        btn.addEventListener('click', () => {
            selectCategory(cat.id);
        });

        menuContainer.appendChild(btn);
    });
}

// 7. ASOSIY SAHIFADAGI KATEGORIYALAR VITRINASI (SHOWCASE GRID)
function initCategoriesShowcase() {
    const showcaseGrid = document.getElementById('categoriesShowcaseGrid');
    if (!showcaseGrid) return;
    showcaseGrid.innerHTML = '';

    // Vitrinada 'all' dan tashqari toifalarni chizamiz
    const showcaseCategories = categories.filter(c => c.id !== 'all');

    showcaseCategories.forEach(cat => {
        const count = getCategoryCount(cat.id);
        const card = document.createElement('div');
        const isActive = cat.id === currentCategory;

        card.className = `showcase-card cursor-pointer p-3.5 sm:p-4 rounded-2xl border bg-white flex flex-col items-center text-center transition group relative overflow-hidden ${
            isActive ? 'active border-brand-500 bg-brand-50/50 shadow-md' : 'border-slate-200/80 hover:border-brand-400'
        }`;
        card.dataset.category = cat.id;

        card.innerHTML = `
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr ${cat.gradient} text-white flex items-center justify-center text-xl sm:text-2xl mb-2.5 shadow-md shadow-slate-200 group-hover:scale-110 transition-transform duration-300">
                <i class="${cat.icon}"></i>
            </div>
            <h4 class="font-bold text-xs sm:text-sm text-slate-800 group-hover:text-brand-600 transition leading-snug line-clamp-1">
                ${cat.name}
            </h4>
            <span class="text-[11px] text-slate-400 font-medium mt-0.5">
                ${count} ta tovar
            </span>
        `;

        // Vitrina kartasini bosganda toifaga o'tish
        card.addEventListener('click', () => {
            selectCategory(cat.id);
        });

        showcaseGrid.appendChild(card);
    });
}

// 8. KATALOG MEGA-DROPDOWN MENYUSI
function initCatalogDropdown() {
    const catalogGrid = document.getElementById('catalogGrid');
    if (!catalogGrid) return;
    catalogGrid.innerHTML = '';

    categories.forEach(cat => {
        const count = getCategoryCount(cat.id);
        const card = document.createElement('button');
        card.className = 'text-left p-3.5 rounded-xl border border-slate-100 hover:border-brand-500 hover:bg-brand-50/50 transition group flex flex-col items-center text-center';
        card.innerHTML = `
            <div class="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-brand-600 group-hover:text-white text-brand-600 flex items-center justify-center text-lg mb-2 transition">
                <i class="${cat.icon}"></i>
            </div>
            <span class="font-bold text-xs text-slate-800 group-hover:text-brand-600 transition line-clamp-1">${cat.name}</span>
            <span class="text-[10px] text-slate-400 font-semibold mt-0.5">${count} ta tovar</span>
        `;
        card.addEventListener('click', () => {
            selectCategory(cat.id);
            toggleCatalogDropdown(false);
        });
        catalogGrid.appendChild(card);
    });
}

// 9. KATEGORIYANI TANLASH VA MAHSULOTLARGA SILLIQ O'TISH
function selectCategory(categoryId) {
    currentCategory = categoryId;

    // 1. Yuqori strip menyusidagi tugmalarni yangilash
    initCategoryMenu();

    // 2. Vitrina kartochkalaridagi holatni yangilash
    document.querySelectorAll('.showcase-card').forEach(card => {
        if (card.dataset.category === categoryId) {
            card.classList.add('active', 'border-brand-500', 'bg-brand-50/50');
        } else {
            card.classList.remove('active', 'border-brand-500', 'bg-brand-50/50');
        }
    });

    // 3. Sarlavha va ta'rifni o'zgartirish
    const foundCat = categories.find(c => c.id === categoryId);
    const titleEl = document.getElementById('currentCategoryTitle');
    const descEl = document.getElementById('currentCategoryDesc');

    if (foundCat) {
        titleEl.textContent = foundCat.name;
        descEl.textContent = foundCat.desc;
    }

    // 4. Mahsulotlarni qayta chizish
    renderProducts();

    // 5. Mahsulotlar bo'limiga silliq skroll qilish
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// 10. MAHSULOTLARNI FILTERLASH VA SARALASH
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

// 11. MAHSULOTLAR RO'YXATINI CHIZISH (RENDER)
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
        
        // Chegirma nishoni
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

                <!-- Tezkor ko'rish belgisi -->
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

                    <!-- Korzinaga qo'shish yoki miqdorni boshqarish -->
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

// 12. KORZINA (SAVAT) LOGIKASI

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

// Savatni saqlash
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

    if (cartCountBadge) {
        cartCountBadge.textContent = totalItems;
        cartCountBadge.classList.remove('animate-pop');
        void cartCountBadge.offsetWidth;
        cartCountBadge.classList.add('animate-pop');
    }

    if (cartHeaderTotal) cartHeaderTotal.textContent = formatPrice(subtotal);
    if (cartItemsCountText) cartItemsCountText.textContent = totalItems;

    // 3. Bepul yetkazish progress bari
    const freeShippingProgress = document.getElementById('freeShippingProgressBar');
    const freeShippingStatusText = document.getElementById('freeShippingStatusText');
    const freeShippingRemainText = document.getElementById('freeShippingRemainText');

    if (freeShippingProgress && freeShippingStatusText && freeShippingRemainText) {
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
    }

    // 4. Drawer ichidagi ro'yxat
    const container = document.getElementById('cartItemsContainer');
    const emptyView = document.getElementById('emptyCartView');
    const promoSection = document.getElementById('cartPromoSection');
    const footerSection = document.getElementById('cartFooter');

    if (!container || !emptyView || !promoSection || !footerSection) return;

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
    const checkoutTotal = document.getElementById('checkoutTotalAmount');
    if (checkoutTotal) checkoutTotal.textContent = formatPrice(grandTotal);
}

// 13. PROMOKOD TIZIMI
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

// 14. SEVIMLILAR (WISHLIST) LOGIKASI
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
    if (!badge) return;
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
                    <h5 class="text-xs font-bold text-slate-800 line-clamp-1">${product.name}</h5>
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

// 15. TEZKOR KO'RISH (QUICK VIEW MODAL)
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

// 16. TOAST BILDIRISHNOMALAR
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
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

// 17. KORZINA DRAWER
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

// 18. KATALOG MEGA MENYUSI
function toggleCatalogDropdown(forceState) {
    const dropdown = document.getElementById('catalogDropdown');
    const chevron = document.getElementById('catalogChevron');
    if (!dropdown) return;
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

// 19. FOOTER KATEGORIYALARI
function populateFooterCategories() {
    const list = document.getElementById('footerCategories');
    if (!list) return;
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

// 20. VOQEALARNI O'RNATISH (EVENT LISTENERS)
function setupEventListeners() {
    // Korzina
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

    // Qayta o'rnatish
    document.getElementById('resetFiltersBtn').addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.classList.add('hidden');
        selectCategory('all');
    });

    // Promokod
    document.getElementById('applyPromoBtn').addEventListener('click', applyPromoCode);

    // Katalog tugmasi
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

    // Tezkor ko'rish
    document.getElementById('closeQuickViewBtn').addEventListener('click', closeQuickView);
    document.getElementById('quickViewBackdrop').addEventListener('click', closeQuickView);

    // Buyurtma berish
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

    // Buyurtma tasdiqlash
    document.getElementById('checkoutForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('orderName').value.trim();
        const phone = document.getElementById('orderPhone').value.trim();
        const address = document.getElementById('orderAddress').value.trim();
        const payment = document.querySelector('input[name="paymentType"]:checked')?.value || 'Payme';

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

        document.getElementById('checkoutModal').classList.add('hidden');
        document.getElementById('receiptModal').classList.remove('hidden');

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
