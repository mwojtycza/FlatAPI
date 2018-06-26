const express = require('express');
const router = express.Router();
const Expense = require('../models/expense');

exports.expensesGet = (req, res) => {
    Expense.find({})
        .then(expenses => res.send(expenses))
}

exports.expensesCreate = (req, res) => {
    Expense.create(req.body)
        .then(expense => res.send(expense))
}

exports.expensesUpdate = (req, res) => {
    Expense.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(expense => res.send(expense))
}

exports.expensesDelete = (req, res) => {
    Expense.findByIdAndRemove({_id: req.params.id})
        .then(expense => res.send(expense))
}
