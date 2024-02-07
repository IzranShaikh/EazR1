const router = require('express').Router();
const viewController = require('../controllers/views.controller.js');

router.get('/home', viewController.home);
router.get('/history', viewController.history);
router.post('/cartit', viewController.addToCart);
router.get('/cart', viewController.showCart);

//testing for chagnes in value of image array
// router.get('/test', (req, res) => {
//     setInterval(() => {
//         console.log(viewController.cart);
//     }, 5)
// })

module.exports = router;