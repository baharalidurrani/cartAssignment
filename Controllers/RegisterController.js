const UserModel = require('../Models/User');
const CartModel = require('../Models/Cart');

exports.get = (req, res) => {
    res.render('Register');
}
exports.post = (req, res) => {
    var user = new UserModel({

        _name: req.body.NAME,
        _email: req.body.EMAIL,
        _password: req.body.PASS,
        _gender: req.body.GENDER
    });
    var cart = new CartModel({
        _userID: user
    });
    user.save().then(() => {
            cart.save();
            res.redirect('/')
        })
        .catch((err) => res.redirect('/login'));
}