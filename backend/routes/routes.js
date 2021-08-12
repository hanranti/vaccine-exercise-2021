const router = require('express').Router()

const controller = require('../controllers/controller')

const { assignFilters } = require('../utils/filters')

router.get('/vaccinations', async (req, res) =>
  res.status(200).json(await controller.findAllVaccinations(
    assignFilters({
      beginVaccinations: req.query.beginVaccinations,
      endVaccinations: req.query.endVaccinations,
      beginOrders: req.query.beginOrders,
      endOrders: req.query.endOrders,
      byVaccinations: false,
      byOrders: true,
      expirationDate: false,
      gender: [
        (req.query.male === 'true' ? 'male' : null),
        (req.query.female === 'true' ? 'female' : null),
        (req.query.nonbinary === 'true' ? 'nonbinary' : null),
      ]
    }),
    [
      (req.query.antiqua === 'true' ? 'Antiqua' : null),
      (req.query.solarbuddhica === 'true' ? 'SolarBuddhica' : null),
      (req.query.zerpfy === 'true' ? 'Zerpfy' : null)
    ])))

router.get('/orders', async (req, res) =>
  res.status(200).json(await controller.findAllOrders(
    assignFilters({
      beginVaccinations: req.query.beginVaccinations,
      endVaccinations: req.query.endVaccinations,
      beginOrders: req.query.beginOrders,
      endOrders: req.query.endOrders,
      byVaccinations: true,
      byOrders: false,
      expirationDate: false,
      gender: [
        (req.query.male === 'true' ? 'male' : null),
        (req.query.female === 'true' ? 'female' : null),
        (req.query.nonbinary === 'true' ? 'nonbinary' : null),
      ]
    }),
    [
      (req.query.antiqua === 'true' ? 'Antiqua' : null),
      (req.query.solarbuddhica === 'true' ? 'SolarBuddhica' : null),
      (req.query.zerpfy === 'true' ? 'Zerpfy' : null)
    ]))
)

router.get('/totalamount', async (req, res) =>
  res.status(200).json(await controller.getTotalOrdersData(
    assignFilters({
      beginVaccinations: req.query.beginVaccinations,
      endVaccinations: req.query.endVaccinations,
      beginOrders: req.query.beginOrders,
      endOrders: req.query.endOrders,
      byVaccinations: true,
      byOrders: false,
      expirationDate: false,
      gender: [
        (req.query.male === 'true' ? 'male' : null),
        (req.query.female === 'true' ? 'female' : null),
        (req.query.nonbinary === 'true' ? 'nonbinary' : null),
      ]
    }),
    [
      (req.query.antiqua === 'true' ? 'Antiqua' : null),
      (req.query.solarbuddhica === 'true' ? 'SolarBuddhica' : null),
      (req.query.zerpfy === 'true' ? 'Zerpfy' : null)
    ]
  ))
)

router.get('/expired', async (req, res) =>
  res.status(200).json(await controller.getExpiredData(assignFilters({
    beginVaccinations: false,
    endVaccinations: false,
    beginOrders: false,
    endOrders: false,
    byVaccinations: true,
    byOrders: false,
    expirationDate: req.query.expirationdate,
    expirationTime: 2592000000,
    gender: [
      (req.query.male === 'true' ? 'male' : null),
      (req.query.female === 'true' ? 'female' : null),
      (req.query.nonbinary === 'true' ? 'nonbinary' : null),
    ]
  }),
    [
      (req.query.antiqua === 'true' ? 'Antiqua' : null),
      (req.query.solarbuddhica === 'true' ? 'SolarBuddhica' : null),
      (req.query.zerpfy === 'true' ? 'Zerpfy' : null)
    ]))
)

router.get('/info', async (req, res) =>
  res.status(200).json(await controller.getAdditionalInfo(assignFilters({
    beginVaccinations: false,
    endVaccinations: false,
    beginOrders: false,
    endOrders: false,
    byVaccinations: false,
    byOrders: false,
    expirationDate: new Date().toISOString().split('T')[0],
    gender: [
      'male',
      'female',
      'nonbinary',
    ]
  }),
    [
      'Antiqua',
      'SolarBuddhica',
      'Zerpfy'
    ]))
)

router.get('/ping', async (req, res) => res.status(200).json({ message: 'ping' }))

module.exports = router