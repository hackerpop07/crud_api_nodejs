const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

router.get('/', product_controller.product_get_all);
router.post('/create', product_controller.product_create);
router.get('/details/:id', product_controller.product_details);
router.put('/update/:id', product_controller.product_update);
router.delete('/delete/:id', product_controller.product_delete);
module.exports = router;
