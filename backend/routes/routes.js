const router = require('express').Router()

const controller = require('../controllers/controller')

router.get('/vaccinations', async (req, res) => res.status(200).json(await controller.findAllVaccinations()))

router.get('/ping', async (req, res) => res.status(200).json({ message: 'ping' }))

module.exports = router