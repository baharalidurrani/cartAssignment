const UserModel = require('../Models/User');
const CartModel = require('../Models/Cart');
const ProductModel = require('../Models/Product');

exports.get = (req, res) => {

    CartModel.findOne({
        _userID: req.user._id
    }).populate('_products').then((cart) => {
        console.log("cart products");
        console.log(cart);
        res.render('Cart', {
            Products: cart._products
        });

    }).catch((err) => {
        console.log("error fetching cart products :D");
        console.log(err);
    });
}

exports.post = (req, res) => {

    CartModel.findOne({
        _userID: req.user._id
    }).then((cart) => {
        cart._products.push(req.body.buttonID);
        cart.save();
        res.redirect('/');
    });
}