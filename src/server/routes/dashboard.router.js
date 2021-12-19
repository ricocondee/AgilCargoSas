const express = require('express');
const router = express.Router();
const Dash = require('../models/dashboard.schema');
const ApiError = require('../utils/api.error');

router.post('/', async (req, res) => {
    try {
        const { originPoint, destinatePoint, distance, time } = req.body;
        if (!(originPoint && destinatePoint && distance && time)) {
            throw new ApiError("Todos los campos son requeridos.", 400);
        }

        const dashboard = await Dash.create({
            originPoint,
            destinatePoint,
            distance,
            time,
        });
        res.status(201).json(dashboard)

    } catch (err) {
        console.log(err);
    };
});

module.exports = router;