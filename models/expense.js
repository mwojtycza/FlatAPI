const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const applicationUser = require('./applicationUser');

const ExpenseSchema = new Schema({
    timestamp: {
        type: Date,
        default: new Date()
    },
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    date: {
        type: String
    },
    owner: applicationUser
});

const Expense = mongoose.model('expenses', ExpenseSchema);

module.exports = Expense;
