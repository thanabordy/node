const express = require('express')
const router = express.Router()
// const mongoose = require('../db/connect')
const ClinicModel = require('../models/clinic')
// const multer = require('multer')
// const upload = multer() //use upload.none() multipart/form data
// router.post('/clinicSave', (req, res) => {
//     obj = {
//         name: req.body.name,
//         tel: req.body.tel,
//         tax: req.body.tax,
//         address: req.body.address
//     }
//     Clinic.insertMany(obj, (err, rs) => {
//         if (err) {
//             res.json(err)
//         } else {
//             res.json(rs)
//         }
//     })
// })
// GET 
router.get("/clinicInfo", async (req, res) => {
    try {

        const clinic = await ClinicModel.findOne()
        res.status(201).json(clinic)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});

// POST (create new data) 
router.post("/clinicSave", async (req, res) => {

    const data = {
        ...req.body,
    }
    try {
        const clinic = await ClinicModel.create(data)
        res.status(201).json(clinic)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    console.log(req.body)
});

// POST (create new data) 
router.put("/clinicUpdate", async (req, res) => {

    const data = {
        ...req.body,
        updated_at: new Date(Date.now())
        
    }
    try {
        const clinic = await ClinicModel.update(data)
        res.status(201).json(clinic)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    console.log(req.body)
});



module.exports = router