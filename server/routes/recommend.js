const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
// const { Esgdata } = require("../models/Esgdata");
const { Recommend } = require("../models/Recommend");

///recommend collection에 있는 모든 회사 정보를 가져오기
router.get('/recommends', (req,res) => {
    var mysort = {index: 1};
    Recommend.find().sort(mysort)
        .exec((err, recommend)=> {
            if(err) return res.status(400).send(err);
            res.status(200).json({success:true, recommend})
        })
})

module.exports = router;