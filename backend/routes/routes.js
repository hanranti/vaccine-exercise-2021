const router = require('express').Router()

const controller = require('../controllers/controller')

router.get('/vaccinations', async (req, res) => res.status(200).json(await controller.findAllVaccinations()))

router.get('/orders', async (req, res) => {
    res.status(200).json(await controller.findAllOrders([
    (req.query.antiqua === 'true' ? 'Antiqua' : null),
    (req.query.solarbuddhica === 'true' ? 'SolarBuddhica' : null),
    (req.query.zerpfy === 'true' ? 'Zerpfy' : null)
]))})

router.get('/ping', async (req, res) => res.status(200).json({ message: 'ping' }))

module.exports = router