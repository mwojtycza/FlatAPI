const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationUserSchema = new Schema({
    username: {
        type: String
    },
    firsName: {
        type: String
    },
    lastName: {
        type: String
    }
})

module.exports = applicationUserSchema;