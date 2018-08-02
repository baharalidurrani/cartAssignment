const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CartSchema = new Schema({
    _userID: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    _products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

var CartModel = mongoose.model('Cart', CartSchema);
module.exports = CartModel;

module.exports.getCart = (tempID, callback) => {
    var query = {
        _userID: tempID
    };

    CartModel.findOne(query, callback);
}

// module.exports.postCart = (tempUserID, tempProductID, callback) => {

//     console.log("uid " + tempUserID);
//     console.log("pid " + tempProductID);

//     var query = {
//         _userID: tempUserID
//     };

// }