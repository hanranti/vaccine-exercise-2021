const router = require('express').Router()

const controller = require('../controllers/controller')

const { assignFilters } = require('../utils/filters')

router.get('/vaccinations', async (req, res) =>
  res.status(200).json(await controller.findAllVaccinations(
    assignFilters({
      beginVaccinations: req.query.beginVaccinations,
      endVaccinations: req.query.endVaccinations,
      beginOrders: req.query.beginOrders,
      endOrders: req.query.endOrders
    }))))

router.get('/orders', async (req, res) => {
  res.status(200).json(await controller.findAllOrders(
    assignFilters({
      beginVaccinations: req.query.beginVaccinations,
      endVaccinations: req.query.endVaccinations,
      beginOrders: req.query.beginOrders,
      endOrders: req.query.endOrders
    }),
    [
      (req.query.antiqua === 'true' ? 'Antiqua' : null),
      (req.query.solarbuddhica === 'true' ? 'SolarBuddhica' : null),
      (req.query.zerpfy === 'true' ? 'Zerpfy' : null)
    ]))
})

router.get('/totalamount', async (req, res) => {
  res.status(200).json(await controller.getTotalOrdersData(
    assignFilters({
      beginVaccinations: req.query.beginVaccinations,
      endVaccinations: req.query.endVaccinations,
      beginOrders: req.query.beginOrders,
      endOrders: req.query.endOrders
    }),
    [
      (req.query.antiqua === 'true' ? 'Antiqua' : null),
      (req.query.solarbuddhica === 'true' ? 'SolarBuddhica' : null),
      (req.query.zerpfy === 'true' ? 'Zerpfy' : null)
    ]
  ))
})

router.get('/ping', async (req, res) => res.status(200).json({ message: 'ping' }))

module.exports = router