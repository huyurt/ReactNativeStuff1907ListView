const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = new User({email, password});
        await user.save();

        const token = jwt.sign({userId: user._id}, 'GİZLİ_ANAHTAR');
        res.send({token});
    } catch (err) {
        return res.status(422).send(err.message);
    }
});

router.post('/signin', async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(422).send({error: 'Eposta ve şifre gerekli!'});
    }

    const user = await User.findOne({email});
    if (!user) {
        return res.status(422).send({error: 'Eposta veya şifre hatalı!'});
    }

    try {
        await user.comparePassword(password);
        const token = jwt.sign({userId: user._id}, 'GİZLİ_ANAHTAR');
        res.send({token});
    } catch (err) {
        return res.status(422).send({error: 'Eposta veya şifre hatalı!'});
    }
});

module.exports = router;
