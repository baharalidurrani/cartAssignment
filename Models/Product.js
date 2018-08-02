const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    _title: {
        type: String
    },
    _file: {
        _fakePath: {
            type: String
        },
        _fileName: {
            type: String
        },
        _fileType: {
            type: String
        }
    }
});

var ProductModel = mongoose.model('Product', ProductSchema);
module.exports = ProductModel;

module.exports.getProducts = (callback, limit) => {
    ProductModel.find(callback);
    //ProductModel.find(callback).limit(limit);
}