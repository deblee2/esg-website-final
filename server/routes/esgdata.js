//ESGP rating의 데이터
const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
//const { Esgdata } = require("../models/Esgdata");
const { Rating } = require("../models/Rating");

router.get('/getEsgdata', (req,res) => {
    var mysort = {index: 1};
    Rating.find().sort(mysort)
        .exec((err, esgdata)=> {
            if(err) return res.status(400).send(err);
            res.status(200).json({success:true, esgdata})
        })
})

module.exports = router;