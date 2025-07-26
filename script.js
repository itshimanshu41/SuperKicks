// Product data for search functionality
const products = [
    {
        id: 1,
        name: "Nike Air Force 1 '07 LVB",
        price: "$120",
        image: "./img/nike.png",
        category: "nike"
    },
    {
        id: 2,
        name: "Adidas Ultraboost",
        price: "$180",
        image: "./img/adidas.png",
        category: "adidas"
    },
    {
        id: 3,
        name: "Yeezy Boost 350",
        price: "$220",
        image: "./img/yeezys.png",
        category: "yeezy"
    },
    {
        id: 4,
        name: "Classic Sneaker",
        price: "$95",
        image: "./img/random.png",
        category: "classic"
    },
    {
        id: 5,
        name: "Sport Edition",
        price: "$150",
        image: "./img/random 3.png",
        category: "sport"
    },
    {
        id: 6,
        name: "Urban Style",
        price: "$110",
        image: "./img/random4.png",
        category: "urban"
    },
    {
        id: 7,
        name: "Premium Collection",
        price: "$200",
        image: "./img/random5.png",
        category: "premium"
    },
    {
        id: 8,
        name: "Street Fashion",
        price: "$130",
        image: "./img/random6.png",
        category: "street"
    },
    {
        id: 9,
        name: "Limited Edition",
        price: "$280",
        image: "./img/random7.png",
        category: "limited"
    },
    {
        id: 10,
        name: "Casual Comfort",
        price: "$85",
        image: "./img/random8.png",
        category: "casual"
    },
    {
        id: 11,
        name: "Performance Pro",
        price: "$160",
        image: "./img/random9.png",
        category: "performance"
    },
    {
        id: 12,
        name: "Designer Series",
        price: "$320",
        image: "./img/random10.png",
        category: "designer"
    },
    {
        id: 13,
        name: "Retro Classic",
        price: "$140",
        image: "./img/random11.png",
        category: "retro"
    },
    {
        id: 14,
        name: "Modern Edge",
        price: "$175",
        image: "./img/random12.png",
        category: "modern"
    }
];

// DOM elements
let searchInput, searchBtn, productGrid;

// Initialize DOM elements when page loads
function initializeElements() {
    searchInput = document.getElementById('searchInput');
    searchBtn = document.getElementById('searchBtn');
    productGrid = document.getElementById('productGrid');
    
    if (searchInput && searchBtn && productGrid) {
        setupSearchEventListeners();
    }
}

// Search functionality
async function searchProducts(query) {
    try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        displayProducts(data.products);
    } catch (error) {
        console.error('Search error:', error);
        // Fallback to client-side search
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
        displayProducts(filteredProducts);
    }
}

function displayProducts(productsToShow) {
    if (productsToShow.length === 0) {
        productGrid.innerHTML = `
            <div class="no-results">
                <h3>No products found</h3>
                <p>Try searching for something else</p>
            </div>
        `;
        return;
    }
    
    productGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card">
            <a href="/menu-detail.html">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h4>${product.name}</h4>
                    <p class="price">${product.price}</p>
                </div>
            </a>
        </div>
    `).join('');
}

// Setup search event listeners
function setupSearchEventListeners() {
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            searchProducts(query);
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                searchProducts(query);
            }
        }
    });

    // Clear search and show all products
    searchInput.addEventListener('input', (e) => {
        if (e.target.value === '') {
            displayProducts(products);
        }
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for navigation links
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

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        if (email) {
            // Here you would typically send the email to your backend
            alert('Thank you for subscribing!');
            newsletterForm.querySelector('input[type="email"]').value = '';
        }
    });
}

// Product card hover effects
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize elements
    initializeElements();
    
    // Display all products initially if on landing page
    if (productGrid) {
        displayProducts(products);
    }
    
    // Ensure video autoplay works
    const bgVideo = document.getElementById('bgVideo');
    if (bgVideo) {
        // Force autoplay on mobile devices
        bgVideo.play().catch(function(error) {
            console.log("Video autoplay failed:", error);
            // Fallback: try to play on user interaction
            document.addEventListener('click', function() {
                bgVideo.play().catch(function(error) {
                    console.log("Video play failed:", error);
                });
            }, { once: true });
        });
    }
    
    // Add loading animation
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroTitle.style.transition = 'all 1s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 500);
    }
});

// Add CSS for no results
const style = document.createElement('style');
style.textContent = `
    .no-results {
        grid-column: 1 / -1;
        text-align: center;
        padding: 3rem;
        color: #666;
    }
    
    .no-results h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    
    .no-results p {
        font-size: 1rem;
        opacity: 0.8;
    }
`;
document.head.appendChild(style); 