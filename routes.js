const express = require('express');
const router = express.Router();

var expensesController = require('./controllers/expenses');

router.get('/expenses', expensesController.expensesGet);

router.post('/expenses', expensesController.expensesCreate);

router.put('/expenses/:id', expensesController.expensesUpdate);

router.delete('/expenses/:id', expensesController.expensesDelete);

module.exports = router;