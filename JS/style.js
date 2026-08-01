/* ==========================================
   STYLE.CSS
   BAGIAN 1
   RESET • VARIABLE • BASE • TYPOGRAPHY
   UTILITY • BUTTON
========================================== */

/* ==========================================
   GOOGLE FONT
========================================== */

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");

/* ==========================================
   RESET
========================================== */

*,
*::before,
*::after{

    margin:0;
    padding:0;

    box-sizing:border-box;

}

html{

    scroll-behavior:smooth;

    -webkit-text-size-adjust:100%;

}

body{

    font-family:"Poppins",sans-serif;

    font-size:16px;

    line-height:1.7;

    color:var(--text-color);

    background:var(--background-color);

    overflow-x:hidden;

}

img{

    display:block;

    max-width:100%;

    height:auto;

}

picture{

    display:block;

}

a{

    color:inherit;

    text-decoration:none;

}

ul,
ol{

    list-style:none;

}

button,
input,
textarea,
select{

    font:inherit;

    border:none;

    outline:none;

}

button{

    background:none;

    cursor:pointer;

}

textarea{

    resize:vertical;

}

iframe{

    width:100%;

    border:0;

}

/* ==========================================
   ROOT VARIABLE
========================================== */

:root{

    /* Color */

    --primary:#ff6b00;

    --primary-dark:#e45f00;

    --secondary:#222222;

    --text-color:#444444;

    --title-color:#1f1f1f;

    --background-color:#ffffff;

    --surface:#f8f8f8;

    --border:#e5e5e5;

    --white:#ffffff;

    /* Shadow */

    --shadow-sm:0 4px 10px rgba(0,0,0,.08);

    --shadow-md:0 10px 25px rgba(0,0,0,.10);

    --shadow-lg:0 20px 45px rgba(0,0,0,.12);

    /* Radius */

    --radius-sm:8px;

    --radius-md:16px;

    --radius-lg:24px;

    --radius-full:999px;

    /* Transition */

    --transition:.3s ease;

    /* Layout */

    --container:1200px;

    --header-height:80px;

}

/* ==========================================
   BASE
========================================== */

.container{

    width:min(100% - 2rem,var(--container));

    margin-inline:auto;

}

section{

    padding:100px 0;

}

main{

    overflow:hidden;

}

/* ==========================================
   TYPOGRAPHY
========================================== */

h1,
h2,
h3,
h4{

    color:var(--title-color);

    font-weight:700;

    line-height:1.2;

}

h1{

    font-size:clamp(2.5rem,5vw,4rem);

}

h2{

    font-size:clamp(2rem,4vw,3rem);

}

h3{

    font-size:1.5rem;

}

p{

    margin-top:1rem;

    color:var(--text-color);

}

.section-title{

    text-align:center;

    margin-bottom:1rem;

}

.section-subtitle{

    text-align:center;

    max-width:650px;

    margin:0 auto 3rem;

}

/* ==========================================
   UTILITY
========================================== */

.text-center{

    text-align:center;

}

.hidden{

    display:none !important;

}

.flex{

    display:flex;

}

.grid{

    display:grid;

}

.rounded{

    border-radius:var(--radius-md);

}

.shadow{

    box-shadow:var(--shadow-md);

}

/* ==========================================
   BUTTON
========================================== */

.btn{

    display:inline-flex;

    align-items:center;

    justify-content:center;

    gap:.5rem;

    padding:14px 28px;

    border-radius:var(--radius-full);

    font-weight:600;

    transition:var(--transition);

}

.btn-primary{

    background:var(--primary);

    color:var(--white);

}

.btn-primary:hover{

    background:var(--primary-dark);

}

.btn-secondary{

    background:var(--secondary);

    color:var(--white);

}

.btn-secondary:hover{

    opacity:.9;

}

.btn-outline{

    border:2px solid var(--primary);

    color:var(--primary);

}

.btn-outline:hover{

    background:var(--primary);

    color:var(--white);

}

/* ==========================================
   STYLE.CSS
   BAGIAN 2
   HEADER & NAVBAR
========================================== */

/* ==========================================
   HEADER
========================================== */

.header{

    position:fixed;

    top:0;
    left:0;

    width:100%;

    height:var(--header-height);

    background:rgba(255,255,255,.95);

    backdrop-filter:blur(12px);

    -webkit-backdrop-filter:blur(12px);

    z-index:1000;

    transition:
        background var(--transition),
        box-shadow var(--transition),
        padding var(--transition);

}

.header.sticky{

    background:var(--white);

    box-shadow:var(--shadow-md);

}

/* ==========================================
   NAV CONTAINER
========================================== */

.nav-container{

    height:100%;

    display:flex;

    align-items:center;

    justify-content:space-between;

}

/* ==========================================
   LOGO
========================================== */

.logo{

    display:flex;

    align-items:center;

    gap:.75rem;

}

.logo img{

    width:60px;

    height:60px;

    object-fit:contain;

}

.logo-text h1{

    font-size:1.2rem;

    margin:0;

}

.logo-text span{

    display:block;

    font-size:.8rem;

    color:var(--text-color);

}

/* ==========================================
   NAVBAR
========================================== */

.navbar{

    display:flex;

    align-items:center;

    gap:2rem;

}

.navbar a{

    position:relative;

    font-weight:600;

    color:var(--secondary);

    transition:color var(--transition);

}

.navbar a:hover,

.navbar a.active{

    color:var(--primary);

}

/* Underline */

.navbar a::after{

    content:"";

    position:absolute;

    left:0;

    bottom:-6px;

    width:0;

    height:2px;

    background:var(--primary);

    transition:width var(--transition);

}

.navbar a:hover::after,

.navbar a.active::after{

    width:100%;

}

/* ==========================================
   NAV ACTION
========================================== */

.nav-action{

    display:flex;

    align-items:center;

    gap:1rem;

}

/* ==========================================
   BURGER
========================================== */

.burger{

    display:none;

    flex-direction:column;

    justify-content:space-between;

    width:28px;

    height:22px;

    cursor:pointer;

    z-index:1002;

}

.burger span{

    width:100%;

    height:3px;

    background:var(--secondary);

    border-radius:999px;

    transition:all var(--transition);

}

/* Active */

.burger.active span:nth-child(1){

    transform:
        translateY(9px)
        rotate(45deg);

}

.burger.active span:nth-child(2){

    opacity:0;

}

.burger.active span:nth-child(3){

    transform:
        translateY(-9px)
        rotate(-45deg);

}

/* ==========================================
   MENU OVERLAY
========================================== */

.menu-overlay{

    position:fixed;

    inset:0;

    background:rgba(0,0,0,.45);

    opacity:0;

    visibility:hidden;

    transition:var(--transition);

    z-index:998;

}

.menu-overlay.show{

    opacity:1;

    visibility:visible;

}

/* ==========================================
   BODY LOCK
========================================== */

body.no-scroll{

    overflow:hidden;

}

/* ==========================================
   STYLE.CSS
   BAGIAN 3
   HERO
========================================== */

.hero{

    position:relative;

    display:flex;

    align-items:center;

    min-height:100vh;

    padding-top:var(--header-height);

    background:
        linear-gradient(
            135deg,
            #fffaf5 0%,
            #fff2e6 100%
        );

    overflow:hidden;

}

/* Background Decoration */

.hero::before{

    content:"";

    position:absolute;

    top:-150px;

    right:-150px;

    width:450px;

    height:450px;

    border-radius:50%;

    background:rgba(255,107,0,.08);

    z-index:0;

}

.hero::after{

    content:"";

    position:absolute;

    bottom:-180px;

    left:-180px;

    width:500px;

    height:500px;

    border-radius:50%;

    background:rgba(255,107,0,.05);

    z-index:0;

}

/* ==========================================
   HERO CONTAINER
========================================== */

.hero-container{

    position:relative;

    z-index:1;

    display:grid;

    grid-template-columns:repeat(2,1fr);

    align-items:center;

    gap:4rem;

}

/* ==========================================
   HERO CONTENT
========================================== */

.hero-content{

    max-width:600px;

}

.hero-badge{

    display:inline-flex;

    align-items:center;

    gap:.5rem;

    padding:8px 18px;

    margin-bottom:1.5rem;

    background:rgba(255,107,0,.12);

    color:var(--primary);

    border-radius:var(--radius-full);

    font-weight:600;

    font-size:.9rem;

}

.hero-title{

    margin-bottom:1.25rem;

    color:var(--title-color);

}

.hero-title span{

    color:var(--primary);

}

.hero-description{

    margin-bottom:2rem;

    max-width:540px;

}

/* ==========================================
   HERO BUTTON
========================================== */

.hero-buttons{

    display:flex;

    flex-wrap:wrap;

    gap:1rem;

}

/* ==========================================
   HERO INFO
========================================== */

.hero-info{

    display:flex;

    gap:2rem;

    margin-top:2.5rem;

}

.hero-info-item h3{

    color:var(--primary);

    margin-bottom:.25rem;

}

.hero-info-item p{

    margin:0;

    font-size:.9rem;

}

/* ==========================================
   HERO IMAGE
========================================== */

.hero-image{

    position:relative;

    display:flex;

    justify-content:center;

    align-items:center;

}

.hero-image picture{

    display:block;

}

.hero-image img{

    width:100%;

    max-width:520px;

    object-fit:contain;

    user-select:none;

    pointer-events:none;

    filter:drop-shadow(0 20px 40px rgba(0,0,0,.15));

}

/* ==========================================
   FLOAT CARD
========================================== */

.hero-card{

    position:absolute;

    display:flex;

    align-items:center;

    gap:.75rem;

    padding:14px 18px;

    background:var(--white);

    border-radius:var(--radius-md);

    box-shadow:var(--shadow-md);

}

.hero-card-top{

    top:40px;

    left:-20px;

}

.hero-card-bottom{

    right:-20px;

    bottom:40px;

}

.hero-card-icon{

    width:50px;

    height:50px;

    display:grid;

    place-items:center;

    border-radius:50%;

    background:rgba(255,107,0,.12);

    color:var(--primary);

    font-size:1.3rem;

}

.hero-card-text h4{

    margin-bottom:.2rem;

}

.hero-card-text p{

    margin:0;

    font-size:.85rem;

}

/* ==========================================
   SCROLL DOWN
========================================== */

.hero-scroll{

    position:absolute;

    left:50%;

    bottom:30px;

    transform:translateX(-50%);

    display:flex;

    flex-direction:column;

    align-items:center;

    gap:.5rem;

    color:var(--primary);

    font-size:.9rem;

}

/* ==========================================
   STYLE.CSS
   BAGIAN 4
   ABOUT
========================================== */

.about{

    position:relative;

    background:var(--surface);

}

.about-container{

    display:grid;

    grid-template-columns:repeat(2,1fr);

    align-items:center;

    gap:5rem;

}

/* ==========================================
   ABOUT IMAGE
========================================== */

.about-image{

    position:relative;

    display:flex;

    justify-content:center;

    align-items:center;

}

.about-image picture{

    display:block;

}

.about-image img{

    width:100%;

    max-width:520px;

    border-radius:var(--radius-lg);

    object-fit:cover;

    box-shadow:var(--shadow-lg);

}

/* Decorative Border */

.about-image::before{

    content:"";

    position:absolute;

    top:-18px;

    left:-18px;

    width:100%;

    height:100%;

    border:3px solid var(--primary);

    border-radius:var(--radius-lg);

    z-index:-1;

}

/* ==========================================
   ABOUT CONTENT
========================================== */

.about-content{

    max-width:600px;

}

.about-subtitle{

    display:inline-block;

    margin-bottom:1rem;

    padding:8px 18px;

    background:rgba(255,107,0,.12);

    color:var(--primary);

    border-radius:999px;

    font-size:.9rem;

    font-weight:600;

}

.about-title{

    margin-bottom:1.5rem;

}

.about-description{

    margin-bottom:1.25rem;

}

/* ==========================================
   ABOUT LIST
========================================== */

.about-list{

    display:grid;

    gap:1rem;

    margin:2rem 0;

}

.about-list li{

    display:flex;

    align-items:flex-start;

    gap:.75rem;

}

.about-list i{

    width:40px;

    height:40px;

    display:grid;

    place-items:center;

    flex-shrink:0;

    background:rgba(255,107,0,.12);

    color:var(--primary);

    border-radius:50%;

    font-size:1rem;

}

.about-list h4{

    margin-bottom:.25rem;

}

.about-list p{

    margin:0;

    font-size:.95rem;

}

/* ==========================================
   ABOUT INFO
========================================== */

.about-info{

    display:grid;

    grid-template-columns:repeat(3,1fr);

    gap:1rem;

    margin-top:2.5rem;

}

.about-info-item{

    padding:1.5rem;

    text-align:center;

    background:var(--white);

    border-radius:var(--radius-md);

    box-shadow:var(--shadow-sm);

}

.about-info-item h3{

    color:var(--primary);

    margin-bottom:.4rem;

}

.about-info-item p{

    margin:0;

    font-size:.9rem;

}

/* ==========================================
   ABOUT BUTTON
========================================== */

.about-buttons{

    display:flex;

    flex-wrap:wrap;

    gap:1rem;

    margin-top:2rem;

}

/* ==========================================
   STYLE.CSS
   BAGIAN 5
   MENU
========================================== */

.menu{

    position:relative;

    background:var(--white);

}

/* ==========================================
   MENU GRID
========================================== */

.menu-grid{

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));

    gap:2rem;

    margin-top:3rem;

}

/* ==========================================
   MENU CARD
========================================== */

.menu-card{

    display:flex;

    flex-direction:column;

    background:var(--white);

    border-radius:var(--radius-lg);

    overflow:hidden;

    box-shadow:var(--shadow-sm);

    transition:var(--transition);

}

.menu-card:hover{

    transform:translateY(-8px);

    box-shadow:var(--shadow-lg);

}

/* ==========================================
   MENU IMAGE
========================================== */

.menu-image{

    position:relative;

    overflow:hidden;

}

.menu-image img{

    width:100%;

    height:240px;

    object-fit:cover;

    transition:transform .4s ease;

}

.menu-card:hover .menu-image img{

    transform:scale(1.05);

}

/* ==========================================
   MENU BADGE
========================================== */

.menu-badge{

    position:absolute;

    top:15px;

    left:15px;

    padding:6px 14px;

    background:var(--primary);

    color:var(--white);

    font-size:.8rem;

    font-weight:600;

    border-radius:999px;

}

/* ==========================================
   MENU CONTENT
========================================== */

.menu-content{

    display:flex;

    flex-direction:column;

    flex:1;

    padding:1.5rem;

}

.menu-title{

    margin-bottom:.5rem;

}

.menu-description{

    margin-bottom:1.25rem;

}

/* ==========================================
   PRICE
========================================== */

.menu-price{

    display:flex;

    align-items:center;

    justify-content:space-between;

    margin-bottom:1.5rem;

}

.menu-price strong{

    color:var(--primary);

    font-size:1.3rem;

}

/* ==========================================
   QUANTITY
========================================== */

.qty-control{

    display:flex;

    align-items:center;

    justify-content:space-between;

    gap:.75rem;

}

.qty-btn{

    width:42px;

    height:42px;

    display:grid;

    place-items:center;

    border-radius:50%;

    background:var(--primary);

    color:var(--white);

    font-size:1.2rem;

    cursor:pointer;

    transition:var(--transition);

}

.qty-btn:hover{

    background:var(--primary-dark);

}

.qty-input{

    width:60px;

    height:42px;

    text-align:center;

    border:1px solid var(--border);

    border-radius:var(--radius-sm);

    background:var(--surface);

    font-weight:600;

}

/* Hilangkan spinner number */

.qty-input::-webkit-inner-spin-button,
.qty-input::-webkit-outer-spin-button{

    -webkit-appearance:none;

    margin:0;

}

.qty-input{

    appearance:textfield;

}

/* ==========================================
   MENU FOOTER
========================================== */

.menu-footer{

    display:flex;

    justify-content:space-between;

    align-items:center;

    margin-top:auto;

    padding-top:1.25rem;

    border-top:1px solid var(--border);

}

.menu-stock{

    color:#2e7d32;

    font-size:.9rem;

    font-weight:600;

}

.menu-stock.out{

    color:#d32f2f;

}