# Shalimaar Opticals - Static Website

A modern, responsive static website built for Shalimaar Opticals.

## 📋 Features

### 1. **Hero Section**
- Attractive banner with theme color (#FFC85C)
- Main headline: "Premium BluGuard Spectacle Lenses"
- Image carousel with auto-play functionality
- Professional light grey background

### 2. **Mid Section - Choose Your Style**
Divided into three categories:
- **Men's Wear** - Eyewear for men
- **Women's Wear** - Eyewear for women
- **Kids Wear** - Eyewear for kids

Each category includes:
- High-quality product images
- Descriptive text
- **Download Catalog Button** - For PDF downloads
- Professional card layout with shadows

### 3. **Lens Features Section**
- "Our Lens Features At A Glance" showcase
- 8 key lens features with icons:
  - Blocks Blue Light
  - Eliminates Glare
  - Blocks UV Light
  - Resists Scratches
  - Resists Fingerprints & Smudges
  - Repels Water & Liquids
  - Repels Dust Particles
  - Reduces Color & Image Distortion

### 4. **Footer Section**
- Contact Information (Phone, Email, Address)
- **Social Media Links:**
  - Instagram
  - Facebook
  - WhatsApp
- Copyright information
- Professional layout

## 📱 Responsive Design

### Desktop View
- ✓ Top navigation bar with horizontal menu
- ✓ Full menu visible
- ✓ 3-column grid for user types
- ✓ Smooth carousel with controls

### Tablet View
- ✓ 2-column layout for user types
- ✓ Optimized spacing
- ✓ Touch-friendly controls

### Mobile View
- ✓ Hamburger menu icon
- ✓ Side navigation drawer (opens from left)
- ✓ 1-column responsive layout
- ✓ Touch-optimized buttons
- ✓ Full-width carousel
- ✓ Optimized typography

## 🎨 Design Details

**Theme Color:** #FFC85C (Golden Yellow)
- **Primary Color:** #FFC85C
- **Secondary Color:** #2C3E50 (Dark Blue)
- **Header Gradient:** Gold → Light Gold → Dark Blue (Left to Right)
- **Text Color:** #333 (Dark Grey)
- **Background:** #F0F0F0 (Light Grey)
- **Accent Color:** White with shadows

## 📂 Project Structure

```
Shalimaar_Opticals_Website/
├── index.html          (Main HTML file)
├── styles.css          (Responsive CSS styles)
├── script.js           (JavaScript functionality)
├── logo.jpg            (Brand logo)
├── Asset/
│   ├── logo.png        (Header logo)
│   ├── MensWear.png    (Men's category image)
│   ├── WomensWear.png  (Women's category image)
│   ├── KidsWear.jfif   (Kids category image)
│   ├── c1.png          (Carousel image 1)
│   ├── c2.png          (Carousel image 2)
│   └── c3.jfif         (Carousel image 3)
└── README.md           (This file)
```

## 🚀 How to Use

1. **Open index.html** in any modern web browser
2. **To view on mobile:**
   - Open Browser Developer Tools (F12)
   - Enable mobile device emulation
   - Test responsive layouts
3. **Download buttons** work properly - click to download catalogs
4. **Carousel controls** - Use arrow buttons or indicators to navigate images

## 🎯 Key Features

### Carousel
- ✓ Auto-play every 5 seconds
- ✓ Manual navigation with arrow buttons
- ✓ Indicator dots for slide selection
- ✓ Professional shadow effect
- ✓ Smooth transitions

### Navigation
- ✓ Gradient header (left to right)
- ✓ Solid navbar (no transparency)
- ✓ Hamburger menu for mobile
- ✓ Smooth animations

### User Cards
- ✓ Equal height alignment
- ✓ Product images with proper aspect ratio
- ✓ Consistent styling
- ✓ Professional shadows

### Download Functionality
- ✓ Category-specific PDF downloads
- ✓ Easy-to-use buttons
- ✓ Consistent styling

## 🔧 Customization

### To Change Colors:
Edit `styles.css` and modify the color values:
```css
/* Primary Color */
--primary-color: #FFC85C;

/* Secondary Color */
--secondary-color: #2C3E50;

/* Hero Background */
background-color: #F0F0F0;
```

### To Change Content:
Edit `index.html` directly:
- Hero section headline
- User types descriptions
- Lens features details
- Footer contact information
- Social media links

### To Add Social Media Links:
Update footer section with your actual URLs:
```html
<a href="https://instagram.com/your-profile" class="social-icon">
    <i class="fab fa-instagram"></i>
</a>
```

### To Update Product Images:
Replace images in the `Asset/` folder:
- `MensWear.png` - Men's category image
- `WomensWear.png` - Women's category image
- `KidsWear.jfif` - Kids category image
- `c1.png, c2.png, c3.jfif` - Carousel images

## 📞 Contact Information (Footer)

- **Phone:** +91 9919650348
- **Email:** crameseyewear@gmail.com
- **Location:** Opposite Khoya Mandi Thakurganj, Lucknow, U.P.
- **Hours:** 10:00 AM - 9:00 PM

## ✨ Browser Compatibility

- ✓ Chrome/Chromium
- ✓ Firefox
- ✓ Safari
- ✓ Microsoft Edge
- ✓ Mobile browsers (iOS Safari, Android Chrome)

## 🎯 Performance Features

- ✓ Semantic HTML5 markup
- ✓ Mobile-first responsive design
- ✓ Optimized CSS with minimal dependencies
- ✓ Font Awesome 6.4.0 for modern icons
- ✓ Smooth animations and transitions
- ✓ Fast loading times
- ✓ Lightweight JavaScript

## 📝 JavaScript Functions

```javascript
// Carousel Navigation
prevSlide()      // Go to previous slide
nextSlide()      // Go to next slide
currentSlide(n)  // Go to specific slide

// Mobile Menu
toggleMenu()     // Toggle hamburger menu
```

## 🎨 CSS Features

- ✓ Flexbox layouts
- ✓ CSS Grid for features section
- ✓ Smooth transitions and animations
- ✓ Box shadows for depth
- ✓ Gradient backgrounds
- ✓ Responsive media queries

## 📈 SEO Optimization

- ✓ Semantic HTML structure
- ✓ Proper heading hierarchy
- ✓ Alt text for images
- ✓ Meta viewport for mobile
- ✓ Descriptive page title

## 💡 PDF Download Feature

When users click "Download Catalog" button:
- A downloadable text file is generated
- Different content for each category
- Can be converted to PDF format
- Professional document formatting

---

**Website Created:** May 2, 2026  
**Theme Color:** #FFC85C (Golden Yellow)  
**Responsive:** ✓ Yes (Desktop, Tablet & Mobile)  
**Version:** 1.0

**Made with ❤️ for Shalimaar Opticals**  
Happy showcasing your eyewear collection! 👓✨
