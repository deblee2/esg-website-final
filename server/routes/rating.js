//기업 상세 평가 데이터
const express = require('express');
const router = express.Router();
// const { Product } = require("../models/Product");
const { Rating } = require("../models/Rating");
const multer = require('multer');

const { auth } = require("../middleware/auth");


//?id=${productId}&type=single
//id=12121212,121212,1212121   type=array 
// router.get("/comps_by_id", (req, res) => { //DetailCompPage.js에 있음
router.get("/comps_by_ticker", (req, res) => {
    let type = req.query.type
    // let compIds = req.query.id
    let compTickers = req.query.ticker

    // console.log("req.query.id", req.query.id)
    console.log("req.query.ticker", req.query.ticker)

    if (type === "array") {
        let tickers = req.query.ticker.split(',');
        compTickers = [];
        compTickers = tickers.map(item => {
            return item
        })
    }

    console.log("compTickers", compTickers)

    //we need to find the product information that belong to product Id 
    //01.20. 여기 수정
    Rating.find({ 'ticker': { $in: compTickers } })
        // .populate('writer') // 이건 필요 없는듯
        .exec((err, comp) => {
            if (err) return res.status(400).send(err)
            return res.status(200).send(comp)
        })
});



module.exports = router;
