const ProductModel = require('../Models/Product');
//const UserModel = require('../Models/User');


module.exports = (req, res) => {
    ProductModel.getProducts((err, list) => {
        if (err) {
            console.log("Error at getproducts");
        } else {
            console.log("retrieved all products");
            res.render('Home', {
                List: list
            });
        }
    });
}