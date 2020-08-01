const express = require('express')
const router = express.Router()
const CustomerModel = require('../models/customer')
// const multer = require('multer')
// const upload = multer() //use upload.none() multipart/form data

router.get("/customerInfo", async (req, res) => {
    try {

        const customer = await CustomerModel.find()
        res.status(201).json(customer)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});

router.post("/customerSave", async (req, res) => {
    const data = {
        ...req.body,
    }
    try {
        const customer = await CustomerModel.create(data)
        res.status(201).json(customer)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    console.log(req.body)
});


router.get("/customerInfo/:_id", async (req, res) => {
    try {
        const customer = await CustomerModel.findOne({ _id: req.params._id })
        res.status(201).json(customer)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    console.log(req.body)
});

router.put("/customerUpdate", async (req, res) => {
    const data = {

        ...req.body,
        updated_at: new Date(Date.now())

    }
    try {
        const customer = await CustomerModel.findByIdAndUpdate({ _id: req.body._id }, data)
        res.status(201).json(customer)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    console.log(req.body)
});

router.delete("/customerDelete/:_id", async (req, res) => {
    try {
        const customer = await CustomerModel.deleteOne({ _id: req.params._id })
        res.status(201).json(customer)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    console.log(req.body)
});


module.exports = router