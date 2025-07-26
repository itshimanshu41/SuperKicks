# Super Kicks - Premium Sneaker Collection

A modern, responsive e-commerce website for premium sneakers built with HTML5, CSS3, JavaScript, and Node.js.

![Super Kicks](https://img.shields.io/badge/Super-Kicks-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)

## 🚀 Features

### ✨ Modern Design
- **Glassmorphism Effects**: Modern UI with backdrop blur and transparency
- **Responsive Layout**: Fully responsive design for all devices
- **Smooth Animations**: CSS transitions and JavaScript animations
- **Professional Typography**: Inter font family for clean, modern look

### 🛍️ E-commerce Functionality
- **Product Catalog**: Dynamic product display with filtering and sorting
- **Search Functionality**: Real-time search with backend API support
- **Product Details**: Auto-image gallery with manual and automatic switching
- **Shopping Cart**: Cart counter and add-to-cart functionality
- **User Authentication**: Login and signup pages with form validation

### 🎬 Interactive Elements
- **Auto-playing Video**: Background video on landing page
- **Moving Brand Showcase**: Animated brand logos scrolling horizontally
- **Image Galleries**: Auto-swapping product images with hover pause
- **Loading Animations**: Smooth page transitions and loading states

### 📱 Mobile-First Design
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Touch-Friendly**: Optimized for touch interactions
- **Cross-Platform**: Works seamlessly on desktop, tablet, and mobile

## 🏗️ Project Structure

```
Super Kicks/
├── index.html              # Landing page with video and brand showcase
├── menu.html               # Products listing page with filters
├── menu-detail.html        # Single product detail page
├── login.html              # User login page
├── signup.html             # User registration page
├── airmax97.html           # Product detail page (example)
├── style.css               # Main stylesheet
├── menu.css                # Products page styles
├── script.js               # Main JavaScript functionality
├── menu.js                 # Products page JavaScript
├── index.js                # Node.js server
├── package.json            # Project dependencies
├── routes/                 # Backend routes
│   ├── url.js
│   └── user.js
├── controller/             # Backend controllers
│   ├── url.js
│   └── user.js
├── model/                  # Data models
│   └── user.js
└── img/                    # Image assets
    ├── logo.png
    ├── product images
    └── brand logos
```

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup and modern structure
- **CSS3**: Flexbox, Grid, animations, and responsive design
- **JavaScript (ES6+)**: DOM manipulation, event handling, API calls
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Inter font family

### Backend
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web application framework
- **CORS**: Cross-origin resource sharing
- **Nodemon**: Development server with auto-reload

### Features
- **Responsive Design**: Mobile-first approach
- **Modern UI/UX**: Glassmorphism, smooth transitions
- **Search API**: Backend search functionality
- **Form Validation**: Client-side and server-side validation
- **Image Optimization**: Optimized product images

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Remade copy 4"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:8000`

### Troubleshooting

If you encounter permission issues with nodemon:
```bash
chmod +x node_modules/.bin/nodemon
npm start
```

## 📄 Pages Overview

### 🏠 Landing Page (`index.html`)
- **Hero Section**: Auto-playing background video
- **Brand Showcase**: Animated scrolling brand logos
- **Featured Categories**: Nike, Adidas, Yeezy
- **Product Collection**: Dynamic product grid
- **Newsletter Signup**: Email subscription form

### 🛍️ Products Page (`menu.html`)
- **Product Grid**: Responsive product cards
- **Filtering**: Category-based filtering (All, Nike, Adidas, Jordan, Yeezy)
- **Sorting**: Price (low/high), name (A-Z), rating
- **Pagination**: Page-based navigation
- **Search**: Real-time product search

### 📦 Product Detail (`menu-detail.html`)
- **Image Gallery**: Auto-swapping product images
- **Product Info**: Title, price, description
- **Size Selection**: Dropdown size selector
- **Add to Cart**: Shopping cart integration
- **Related Products**: Similar product suggestions

### 🔐 Authentication
- **Login Page**: User authentication form
- **Signup Page**: User registration with validation
- **Form Validation**: Client-side and server-side validation

## 🎨 Design Features

### Color Scheme
- **Primary**: #007bff (Blue)
- **Secondary**: #0056b3 (Dark Blue)
- **Background**: #f8f9fa (Light Gray)
- **Text**: #333 (Dark Gray)
- **Accent**: #667eea (Purple)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately on all devices

### Animations
- **Brand Scroll**: 30-second infinite scroll animation
- **Image Gallery**: 3-second auto-swap with hover pause
- **Page Transitions**: Smooth loading animations
- **Hover Effects**: Interactive element feedback

## 🔧 Customization

### Adding New Products
1. Add product data to `script.js` products array
2. Include product images in `img/` directory
3. Update product cards in HTML templates

### Modifying Styles
- **Main Styles**: Edit `style.css`
- **Product Styles**: Edit `menu.css`
- **Responsive**: Update media queries

### Backend Configuration
- **Server Port**: Modify `index.js` port setting
- **API Routes**: Add new routes in `routes/` directory
- **Database**: Configure MongoDB connection in `index.js`

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Super Kicks Team**
- Website: [Super Kicks](http://localhost:8000)
- Email: contact@superkicks.com

## 🙏 Acknowledgments

- **Font Awesome** for icons
- **Google Fonts** for typography
- **Unsplash** for stock images
- **Blender** for 3D animation video

---

⭐ **Star this repository if you found it helpful!** 