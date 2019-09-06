const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



// NAVI ---------------------------
let navi = document.querySelectorAll('header nav a');

for (let i = 0; i < navi.length; i++) {
  let newContent = siteContent.nav[`nav-item-${i + 1}`];
  navi[i].textContent = `${newContent}`;
}



// BANNER ------------------------
let headerBanner = document.querySelector('.cta');

headerBanner.querySelector('h1').textContent = `${siteContent.cta.h1}`;

headerBanner.querySelector('button').textContent = `${siteContent.cta.button}`;

document.querySelector('#cta-img').src = `${siteContent.cta["img-src"]}`;


// MAIN CONTENT ------------------
let mainContent = document.querySelector('.main-content');

let topTexts = mainContent.querySelectorAll('.top-content .text-content');
// features section
topTexts[0].querySelector('h4').textContent = `${siteContent['main-content']["features-h4"]}`

topTexts[0].querySelector('p').textContent = `${siteContent['main-content']['features-content']}`


//ABOUT SECTION
topTexts[1].querySelector('h4').textContent = `${siteContent['main-content']["about-h4"]}`

topTexts[1].querySelector('p').textContent = `${siteContent['main-content']['about-content']}`


// MIDDLE IMG -------------------------
document.querySelector('.middle-img').src = `${siteContent['main-content']["middle-img-src"]}`


// BOTTOM CONTENT ----------------------
let bottomContent = document.querySelector('.bottom-content')

let bottomTextSections = bottomContent.querySelectorAll('.text-content')

bottomTextSections[0].querySelector('h4').textContent = `${siteContent['main-content']['services-h4']}`

bottomTextSections[0].querySelector('p').textContent = `${siteContent['main-content']['services-content']}`

bottomTextSections[1].querySelector('h4').textContent = `${siteContent['main-content']['product-h4']}`

bottomTextSections[1].querySelector('p').textContent = `${siteContent['main-content']['product-content']}`

bottomTextSections[2].querySelector('h4').textContent = `${siteContent['main-content']['vision-h4']}`

bottomTextSections[2].querySelector('p').textContent = `${siteContent['main-content']['vision-content']}`

// CONTACT ----------------------------------

let contactSection = document.querySelector('.contact')

contactSection.querySelector('h4').textContent = `${siteContent.contact['contact-h4']}`

let contactParas = contactSection.querySelectorAll('p')

contactParas[0].textContent = `${siteContent.contact.address}`
contactParas[1].textContent = `${siteContent.contact.phone}`
contactParas[2].textContent = `${siteContent.contact.email}`

// FOOTER ----------------------------------------

let footerSection = document.querySelector('footer')

footerSection.querySelector('p').textContent = `${siteContent.footer.copyright}`