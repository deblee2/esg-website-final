const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = mongoose.Schema({
    // index: {
    //     type: Number
    // },
    ticker: {
        type: String
    },
    tname: {
        type: String,
    },
    industry: {
        type: String,
    },
    clim_change: {
        type: Number,
    },
    nat_res: {
        type: Number,
    },
    env_protect: {
        type: Number,
    },
    e_class: {
        type: String,
    },
    hr: {
        type: Number,
    },
    prod_safe: {
        type: Number,
    },
    soc_impact: {
        type: Number,
    },
    corp_compete: {
        type: Number,
    },
    s_class: {
        type: String,
        // default: '0'
    },
    gov: {
        type: Number,
        // default: '0'
    },
    corp_ethic: {
        type: Number,
        // default: '0'
    },
    g_class: {
        type: String,
        // default: '0'
    },
    p_class: {
        type: String,
        // default: '0'
    },
    esg_total : {
        type: String,
        // default: '0'
    },
    total : {
        type: String,
        // default: '0'
    }
}, { timestamps: true })


// 스키마를 모델로 감싸줌
const Rating = mongoose.model('Rating', ratingSchema);

// 다른 곳에서도 쓸 수 있게 export
module.exports = { Rating }