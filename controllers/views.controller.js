const axios = require("axios");

let fetchedImages = []; // locally storing
let cart = [];
function calculateTotalPrice(cart) {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price * cart[i].quantity;
    }
    return Math.round(totalPrice);
}

const home = async (req, res) => {

    await axios.get('https://dog.ceo/api/breeds/image/random')
        .then(data => {
            const imageUrl = data.data.message;
            fetchedImages.push(imageUrl);
            res.render('home', {
                image: imageUrl
            });
        })
        .catch(err => {
            res.status(500).json({ "message": "Error while fetching image"});
        });
    
}

const history = async (req, res) => {
    res.render('history', {
        images: fetchedImages
    });
}

const addToCart = async (req, res) => {
    const imageUrl = req.body.imageUrl;
    const price = Math.abs(req.body.price) < 10 ? 10 : Math.abs(req.body.price);
    // Adding doggy to the cart
    const existingItemIndex = cart.findIndex(item => item.imageUrl === imageUrl);
    if (existingItemIndex !== -1) { //case where item exist already
        cart[existingItemIndex].quantity++; //so increasing quantity
    } else {
        cart.push({ imageUrl, price, quantity: 1 });
    }
    res.redirect('/view/cart');
};

const showCart = async (req, res) => {
    res.render('cart', {
        cart: cart,
        totalsum: calculateTotalPrice(cart)
    });
}

module.exports = { home, history, addToCart, showCart };