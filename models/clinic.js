const mongoose = require('../db/connect')
const moment = require('moment-timezone');
const schemaOpts = { toJSON: { virtuals: true } };
const Schema = mongoose.Schema;

const ClinicSchema = new Schema({
    name: { type: String },
    tel: { type: String },
    tax: { type: String },
    address: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
},
    schemaOpts
)
ClinicSchema.virtual('Asia/Bangkok').get(function () {
    const createdAt = moment.tz(this.created_at, 'Asia/Bangkok').format('DD-MM-YYYY  HH:mm z');
    const updatedAt = moment.tz(this.updated_at, 'Asia/Bangkok').format('DD-MM-YYYY  HH:mm z');
    return { created_at: createdAt, updated_at: updatedAt }
});
const ClinicModel = mongoose.model('Clinic', ClinicSchema)

module.exports = ClinicModel