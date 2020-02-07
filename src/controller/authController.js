const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { fname } = req.body;
    try {
        if (await User.findOne({ fname }))
            return res.status(400).send({ error: " User already exist" });
        const user = await User.create(req.body);
        return res.send({ user });
    }
    catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        return res.send({ users });
    } catch (error) {
        return res.status(400).send({ error: 'Select failed' });
    }
});


module.exports = app => app.use('/auth', router);