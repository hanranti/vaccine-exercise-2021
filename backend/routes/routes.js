const router = require('express').Router()

const controller = require('../controllers/controller')

const { defaultFilters } = require('../utils/filters')

router.get('/vaccinations', async (req, res) =>
  res.status(200).json(await controller.findAllVaccinations(
    Object.assign(defaultFilters, req.body.filters))))

router.get('/orders', async (req, res) => {
  res.status(200).json(await controller.findAllOrders(
    Object.assign(defaultFilters, req.body.filters),
    [
      (req.query.antiqua === 'true' ? 'Antiqua' : null),
      (req.query.solarbuddhica === 'true' ? 'SolarBuddhica' : null),
      (req.query.zerpfy === 'true' ? 'Zerpfy' : null)
    ]))
})

router.get('/ping', async (req, res) => res.status(200).json({ message: 'ping' }))

module.exports = router