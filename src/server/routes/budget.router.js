const express = require('express');
const router = express.Router();
const Budget = require('../models/budget.schema');
const ApiError = require('../utils/api.error');

router.post('/', async (req, res) => {
    try {
        const { firsPoint, lastPoint, vehiclesBudget } = req.body;
        if (!(firsPoint && lastPoint && vehiclesBudget)) {
            throw new ApiError("Todos los campos son requeridos.", 400);
        }

        const budget = await Budget.create({
            firsPoint,
            lastPoint,
            vehiclesBudget,
        });
        res.status(201).json(budget)

    } catch (err) {
        console.log(err);
    };
});

module.exports = router;