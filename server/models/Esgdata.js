const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const esgdataSchema = mongoose.Schema({
    index: {
        type: Number
    },
    ticker: {
        type: String
    },
    tname: {
        type: String,
    },
    industry: {
        type: String,
    },
    e_class: {
        type: String,
        // default: '0'
    },
    s_class: {
        type: String,
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


// esgdataSchema.index({ 
//     tname:'text'
// }, {
//     weights: {
//         name: 5
//     }
// })

// const Product = mongoose.model('Product', productSchema);

// 스키마를 모델로 감싸줌
const Esgdata = mongoose.model('Esgdata', esgdataSchema);

// 다른 곳에서도 쓸 수 있게 export
module.exports = { Esgdata }