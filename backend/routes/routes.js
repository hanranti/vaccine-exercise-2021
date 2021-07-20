const router = require('express').Router()

router.get('/ping', async (req, res) => res.status(200).json({ message: 'ping' }))

module.exports = router