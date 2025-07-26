// Product data
const products = [
    {
        id: 1,
        name: "Nike Air Force 1 '07 LVB",
        price: 120,
        image: "img/product-1.jpg",
        category: "nike",
        rating: 4.5,
        link: "menu-detail.html"
    },
    {
        id: 2,
        name: "Jump Man MVP",
        price: 135,
        image: "img/product-2.jpg",
        category: "jordan",
        rating: 4.8,
        link: "jumpman.html"
    },
    {
        id: 3,
        name: "Nike Air Max 97",
        price: 115,
        image: "img/product-3.jpg",
        category: "nike",
        rating: 4.3,
        link: "airmax97.html"
    },
    {
        id: 4,
        name: "Air Jordan 06 Retro",
        price: 148,
        image: "img/product-9.png",
        category: "jordan",
        rating: 4.6,
        link: "jordan06.html"
    },
    {
        id: 5,
        name: "Air Jordan 05 Retro",
        price: 150,
        image: "img/product-5.jpg",
        category: "jordan",
        rating: 4.7,
        link: "jordan05.html"
    },
    {
        id: 6,
        name: "Scuderia Ferrari Kart Cat RL Mid",
        price: 221,
        image: "img/product-13.png",
        category: "adidas",
        rating: 4.4,
        link: "menu-detail.html"
    },
    {
        id: 7,
        name: "Nike Air Jordan 6 Macklemore Clay",
        price: 5009,
        image: "img/product-8.jpg",
        category: "jordan",
        rating: 4.9,
        link: "macklemore06.html",
        badge: "Limited"
    },
    {
        id: 8,
        name: "Nike Air Fear of God 1 The Question",
        price: 135,
        image: "img/product-2.jpg",
        category: "nike",
        rating: 4.2,
        link: "menu-detail.html"
    },
    {
        id: 9,
        name: "Louis Vuitton x Nike Air Force 1 Low",
        price: 1120,
        image: "img/product-7.jpg",
        category: "nike",
        rating: 4.8,
        link: "menu-detail.html",
        badge: "Premium"
    },
    {
        id: 10,
        name: "Nike Air Force 1 High Sheed Sample",
        price: 248,
        image: "img/product-10.jpg",
        category: "nike",
        rating: 4.5,
        link: "force1high.html"
    },
    {
        id: 11,
        name: "Nike Air Max 97 Off-White Menta",
        price: 115,
        image: "img/product-11.jpg",
        category: "nike",
        rating: 4.4,
        link: "menu-details.html"
    },
    {
        id: 12,
        name: "Nike SB Dunk Low Pro Premium Supreme",
        price: 121,
        image: "img/product-12.jpg",
        category: "nike",
        rating: 4.3,
        link: "menu-detail.html"
    },
    {
        id: 13,
        name: "Adidas Ultraboost",
        price: 180,
        image: "img/adidas.png",
        category: "adidas",
        rating: 4.6,
        link: "menu-detail.html"
    },
    {
        id: 14,
        name: "Yeezy Boost 350",
        price: 220,
        image: "img/yeezys.png",
        category: "yeezy",
        rating: 4.7,
        link: "menu-detail.html"
    }
];

// State management
let currentProducts = [...products];
let currentFilter = 'all';
let currentSort = 'default';
let currentPage = 1;
const productsPerPage = 8;

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const sortSelect = document.getElementById('sortSelect');
const filterBtns = document.querySelectorAll('.filter-btn');
const pageBtns = document.querySelectorAll('.page-btn');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Sort functionality
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            currentPage = 1;
            applyFiltersAndSort();
            displayProducts();
            updatePagination();
        });
    }

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.category;
            currentPage = 1;
            applyFiltersAndSort();
            displayProducts();
            updatePagination();
        });
    });

    // Pagination
    pageBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('next')) {
                currentPage = Math.min(currentPage + 1, Math.ceil(currentProducts.length / productsPerPage));
            } else {
                currentPage = parseInt(btn.dataset.page);
            }
            displayProducts();
            updatePagination();
        });
    });
}

// Apply filters and sorting
function applyFiltersAndSort() {
    // Filter products
    if (currentFilter === 'all') {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(product => product.category === currentFilter);
    }

    // Sort products
    switch (currentSort) {
        case 'price-low':
            currentProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            currentProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            currentProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            currentProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // Keep original order
            break;
    }
}

// Display products
function displayProducts() {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = currentProducts.slice(startIndex, endIndex);

    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div class="loading" style="grid-column: 1 / -1;">
                <h3>No products found</h3>
                <p>Try adjusting your filters</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card">
            <a href="${product.link}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                </div>
                <div class="product-info">
                    <h4 class="product-title">${product.name}</h4>
                    <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                    <div class="product-rating">
                        <div class="stars">
                            ${generateStars(product.rating)}
                        </div>
                        <span class="rating-text">(${product.rating})</span>
                    </div>
                    <p class="product-price">$${product.price.toLocaleString()}</p>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </a>
        </div>
    `).join('');
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

// Update pagination
function updatePagination() {
    const totalPages = Math.ceil(currentProducts.length / productsPerPage);
    
    pageBtns.forEach((btn, index) => {
        if (btn.classList.contains('next')) {
            btn.style.display = currentPage < totalPages ? 'flex' : 'none';
        } else if (index < totalPages) {
            btn.style.display = 'flex';
            btn.classList.toggle('active', index + 1 === currentPage);
        } else {
            btn.style.display = 'none';
        }
    });
}

// Add to cart functionality
function addToCart(productId) {
    event.preventDefault();
    event.stopPropagation();
    
    const cartCount = document.querySelector('.cart-count');
    const currentCount = parseInt(cartCount.textContent);
    cartCount.textContent = currentCount + 1;
    
    // Add animation
    cartCount.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartCount.style.transform = 'scale(1)';
    }, 200);
    
    // Here you would typically add the product to cart storage
    console.log(`Added product ${productId} to cart`);
}

// Apply initial filters and display
applyFiltersAndSort();
updatePagination(); 