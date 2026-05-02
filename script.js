// Carousel Functionality
let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

function currentSlide(index) {
    showSlide(index);
}

// Auto-advance carousel every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMobile.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const mobileNavLinks = document.querySelectorAll('.nav-mobile a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMobile.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.header') && !e.target.closest('.nav-mobile')) {
        hamburger.classList.remove('active');
        navMobile.classList.remove('active');
    }
});

// PDF Download Function
function downloadPDF(category) {
    const catalogData = {
        mens: {
            filename: 'Shalimaar_Opticals_Mens_Catalog.pdf',
            title: 'Men\'s Eyewear Catalog'
        },
        womens: {
            filename: 'Shalimaar_Opticals_Womens_Catalog.pdf',
            title: 'Women\'s Eyewear Catalog'
        },
        kids: {
            filename: 'Shalimaar_Opticals_Kids_Catalog.pdf',
            title: 'Kids Eyewear Catalog'
        }
    };

    const catalog = catalogData[category];
    
    // Create a simple PDF content
    const content = generatePDFContent(catalog.title, category);
    
    // Create a blob and download
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = catalog.filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

function generatePDFContent(title, category) {
    const content = `
SHALIMAAR OPTICALS - ${title.toUpperCase()}
================================================

Dear Valued Customer,

Thank you for your interest in our ${title.toLowerCase()} collection!

${getCategoryDetails(category)}

CONTACT US:
Phone: +91 9915600340
Email: crameseyewear@gmail.com
Location: Lucknow, U.P.
Hours: 10:00 AM - 6:00 PM

Our Lens Features:
✓ Blocks Blue Light
✓ Eliminates Glare
✓ Blocks UV Light
✓ Resists Scratches
✓ Resists Fingerprints & Smudges
✓ Repels Water & Liquids
✓ Repels Dust Particles
✓ Reduces Color & Image Distortion

Visit our store for a complete collection and professional consultation.

Thank you for choosing Shalimaar Opticals!
================================================
`;
    return content;
}

function getCategoryDetails(category) {
    const details = {
        mens: `OUR MEN'S COLLECTION
Our premium men's eyewear collection features:
- Classic and contemporary designs
- High-quality frames with superior durability
- Perfect for professional and casual wear
- Various styles from casual to formal
- Affordable pricing for quality eyewear`,
        womens: `OUR WOMEN'S COLLECTION
Our elegant women's eyewear collection features:
- Stylish and fashionable designs
- Premium quality materials
- Perfect for every occasion
- Diverse frame styles and colors
- Trendy collections at affordable prices`,
        kids: `OUR KIDS COLLECTION
Our fun and comfortable kids' eyewear features:
- Safe and durable materials
- Colorful and attractive designs
- Comfortable for extended wear
- Sports-friendly options available
- Special discounts for kids eyewear`
    };
    
    return details[category] || details.mens;
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('Shalimaar Opticals Website Loaded Successfully!');
