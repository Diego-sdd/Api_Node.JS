const mongoose = require('../database/index');

const UserShema = new mongoose.Schema({
    fname: {
        type: String,
        require: true,
    },
    lname: {
        type: String,
        require: true,
    },
    participation: {
        type: String,
        require: true,
    }
});

const User = mongoose.model('User', UserShema);

module.exports = User;