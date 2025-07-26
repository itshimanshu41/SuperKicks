const express=require('express');

const router=express.Router();
const{handleImagesRequest, handleCSSRequest, handleHTMLRequest, handleVedioRequest, handleSearchRequest, handleJSRequest} = require('../controller/url');

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: './' }); 
});

// Search API endpoint
router.get('/api/search', handleSearchRequest);

router.get('/:htmlFileName.html', handleHTMLRequest);
router.get('/:cssFileName.css', handleCSSRequest);
router.get('/:jsFileName.js', handleJSRequest);
router.get('/img/:imageName',handleImagesRequest)
router.get('/:vedioFileName',handleVedioRequest);

module.exports=router;