const express = require('express');
const router = express.Router();
const Order = require('../models/order.schema');
const ApiError = require('../utils/api.error');

router.post('/', async (req, res) => {
    try {
        const { startPoint, endPoint, vehicles, datetime, paymentMethod, nameDest, documentType, document } = req.body;
        if (!(startPoint && endPoint && vehicles && datetime && paymentMethod && nameDest && documentType && document)) {
            throw new ApiError("Todos los campos son requeridos.", 400);
        }

        const order = await Order.create({
            nameDest,
            documentType,
            document,
            startPoint,
            endPoint,
            vehicles,
            datetime,
            paymentMethod,
        });
        res.status(201).json(order)

    } catch (err) {
        console.log(err);
    };
});

module.exports = router;