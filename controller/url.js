const path = require('path'); 
const fs=require('fs')

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

async function handleCSSRequest(req, res){
    const cssFileName = req.params.cssFileName; 
    res.sendFile(`${cssFileName}.css`, { root: './' });
} 

async function handleJSRequest(req, res){
    const jsFileName = req.params.jsFileName; 
    res.sendFile(`${jsFileName}.js`, { root: './' });
}

async function handleHTMLRequest(req, res){
    const htmlFileName = req.params.htmlFileName; 
    res.sendFile(`${htmlFileName}.html`, { root: './' }); // Adjust file path if needed
}

async function handleImagesRequest(req, res){
    const imageName = req.params.imageName;

    // Build the correct path to the image file
    const imagePath = path.join('./img/', imageName); 

    // Check if the image file exists
    fs.access(imagePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(imagePath);
            res.status(404).send('Image not found');
        } else {
            res.sendFile(imageName, { root: './img' }); 
        }
    });
}

async function handleVedioRequest(req, res){
    const vedioFileName = req.params.vedioFileName; 
    res.sendFile(vedioFileName, { root: './' }); // Adjust file path if needed
}

async function handleSearchRequest(req, res) {
    try {
        const query = req.query.q;
        
        if (!query) {
            return res.json({ products: products });
        }
        
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
        
        res.json({ 
            products: filteredProducts,
            query: query,
            total: filteredProducts.length
        });
    } catch (error) {
        console.error('Search error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports={
    handleCSSRequest,
    handleJSRequest,
    handleHTMLRequest,
    handleImagesRequest,
    handleVedioRequest,
    handleSearchRequest,
}