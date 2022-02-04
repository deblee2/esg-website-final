const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
// const { Product } = require('../models/Product');
const { auth } = require("../middleware/auth");
// const { Payment } = require('../models/Payment');

const async = require('async');

//=================================
//             User
//=================================

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        investstyle: req.user.investstyle,
        investprefer: req.user.investprefer,
        image: req.user.image
    });
});

router.post("/register", (req, res) => {

    const user = new User(req.body); //req.body 안에는 { id: 'hello', password: ... } 등이 있음
    //save는 mongo DB 메소드
    user.save((err, doc) => {
        // 오류가 있다면 json 형식으로 전달, 에러메세지도 함께
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, userId: user._id
                    });
            });
        });
    });
});

router.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});

module.exports = router;
