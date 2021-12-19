const express = require('express');
const budgetRouter = require('./budget.router');
const dashboardRouter = require('./dashboard.router');
const orderRouter = require('./order.router');

function routerApi(app){
    const router = express.Router();
    app.use('', router);
    router.use('/budget', budgetRouter);
    router.use('/dashboard', dashboardRouter);
    router.use('/order', orderRouter);

}

module.exports = routerApi;