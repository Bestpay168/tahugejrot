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