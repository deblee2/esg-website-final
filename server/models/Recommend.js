const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recommendSchema = mongoose.Schema({
    index: {
        type: Number,
    },
    ticker: {
        type: String
    },
    tname: {
        type: String,
        //default: '0'
    },
    industry: {
        type: String,
        //default: '0'
    },
    e_class: {
        type: String,
        //default: '0'
    },
    s_class: {
        type: String,
        //default: '0'
    },
    g_class: {
        type: String,
        //default: '0'
    },
    p_class: {
        type: String,
        //default: '0'
    },
    total : {
        type: String,
        //default: '0'
    }
}, { timestamps: true })

// 스키마를 모델로 감싸줌
const Recommend = mongoose.model('Recommend', recommendSchema);

// 다른 곳에서도 쓸 수 있게 export
module.exports = { Recommend }