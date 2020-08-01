const mongoose = require('../db/connect')
const moment = require('moment-timezone');
const schemaOpts = { toJSON: { virtuals: true } };
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    code: { type: String },
    name: { type: String },
    email: { type: String },
    tel: { type: String },
    line_id: { type: String },
    address: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
},
    schemaOpts
)
CustomerSchema.virtual('Asia/Bangkok').get(function () {
    const createdAt = moment.tz(this.created_at, 'Asia/Bangkok').format('DD-MM-YYYY  HH:mm z');
    const updatedAt = moment.tz(this.updated_at, 'Asia/Bangkok').format('DD-MM-YYYY  HH:mm z');
    return { created_at: createdAt, updated_at: updatedAt }
});
const CustomerModel = mongoose.model('Customer', CustomerSchema)

module.exports = CustomerModel