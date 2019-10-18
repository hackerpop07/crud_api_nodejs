const Product = require('../models/Product.model');

exports.product_create = function (req, res) {
    let product = new Product({
        name: req.body.name,
        price: req.body.price,
    });
    product.save((err) => {
        if (err) return next(err);
        res.send(" Product Created Success ")
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.product_get_all = function (req, res) {
    Product.find({}, (err, products) => {
        if (err) return next(err);
        res.send(products);
    })
};