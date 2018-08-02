const ProductModel = require('../Models/Product');
const UserModel = require('../Models/User');

exports.get = (req, res) => {
    res.render('UploadProduct');
}

exports.post = (req, res) => {
    console.log(req.body.NAME);

    var product = new ProductModel({
        _title: req.body.NAME
    });

    product.save().then(() => {
        res.redirect('/');
    });
}