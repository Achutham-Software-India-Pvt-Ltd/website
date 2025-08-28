# Achutham - Website

A modern, responsive website for Achutham, showcasing their technology services and expertise.

## 🌟 Features

- **Modern Design**: Clean, professional design with gradient backgrounds and modern typography
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Elements**: Smooth animations, hover effects, and interactive components
- **Contact Form**: Functional contact form with validation and notifications
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Smooth navigation between sections
- **Performance Optimized**: Fast loading with optimized CSS and JavaScript

## 🚀 Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Font Awesome**: Icons for visual elements
- **Google Fonts**: Inter font family for typography

## 📁 Project Structure

```
achutham-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🛠️ Setup Instructions

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - this is a static website

### Installation
1. **Clone or Download**: Download the project files to your local machine
2. **Open Website**: Simply open `index.html` in your web browser
3. **Local Development**: For development, you can use any local server or live server extension

### Using Live Server (VS Code)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Using Python (Alternative)
```bash
# Navigate to project directory
cd achutham-website

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser.

## 🎨 Customization

### Colors
The website uses a modern blue color scheme. To change colors, modify these CSS variables in `styles.css`:
- Primary Blue: `#2563eb`
- Secondary Blue: `#3b82f6`
- Dark Gray: `#1f2937`
- Light Gray: `#f8fafc`

### Content
- **Company Information**: Update company details in `index.html`
- **Services**: Modify service descriptions and icons
- **Contact Information**: Update contact details and form fields
- **Images**: Replace placeholder icons with your own images

### Styling
- **Fonts**: Change fonts by updating the Google Fonts link in `index.html`
- **Layout**: Modify grid layouts and spacing in `styles.css`
- **Animations**: Adjust animation timing and effects in `script.js`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📧 Contact Form

The contact form includes:
- Name (required)
- Email (required)
- Company Name (optional)
- Project Description (required)
- Form validation
- Success/error notifications

**Note**: The form currently shows a success message but doesn't actually send data. To make it functional, you'll need to:
1. Set up a backend server
2. Configure form submission to your server
3. Handle email sending or database storage

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch and save

### Netlify
1. Drag and drop your project folder to Netlify
2. Or connect your GitHub repository
3. Deploy automatically

### Vercel
1. Import your GitHub repository
2. Deploy with zero configuration

### Traditional Hosting
1. Upload all files to your web server
2. Ensure `index.html` is in the root directory
3. Verify all file paths are correct

## 📈 Performance Tips

- **Optimize Images**: Use WebP format and compress images
- **Minify CSS/JS**: Minify files for production
- **Enable Gzip**: Configure server compression
- **Use CDN**: Serve Font Awesome and Google Fonts from CDN
- **Lazy Loading**: Implement lazy loading for images if needed

## 🔒 Security Considerations

- **Form Validation**: Client-side validation is implemented
- **HTTPS**: Use HTTPS in production
- **Input Sanitization**: Implement server-side input sanitization
- **CSP Headers**: Consider adding Content Security Policy headers

## 📝 License

This project is created for Achutham. All rights reserved.

## 🤝 Support

For technical support or customization requests, please contact:
- **Email**: achuthamsoftwareindiapvtltd@gmail.com
- **Phone**: +91 9701199922
- **Address**: Achutham, Kondapur, Hyderabad 500084, Telangana

## 🔄 Updates

### Version 1.0.0
- Initial website launch
- Responsive design
- Contact form
- Modern animations
- Mobile navigation

---

**Built with ❤️ for Achutham**
