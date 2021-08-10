const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

const apiUrl = '/api'
const testBegin = '2021-02-02T22:33:39.643569Z'
const testEnd = '2021-03-13T11:08:11.643530Z'

describe('api', () => {

  test('returns correct amount of vaccinations', async () => {
    await api.get(apiUrl + '/vaccinations')
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 7000
      })
      .expect(200)
  })

  test('returns correct amount of vaccinations when filtered with begin', async () => {
    await api.get(apiUrl + '/vaccinations')
      .send({ vaccinationDate: true, begin: testBegin })
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 5948
      })
      .expect(200)
  })

  test('returns correct amount of vaccinations when filtered with end', async () => {
    await api.get(apiUrl + '/vaccinations')
      .send({ vaccinationDate: true, end: testEnd })
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 3844
      })
      .expect(200)
  })

  test('returns correct amount of vaccinations when filtered with begin and end', async () => {
    await api.get(apiUrl + '/vaccinations')
      .send({ vaccinationDate: true, begin: testBegin, end: testEnd })
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 2792
      })
      .expect(200)
  })

  test('returns correct amount of orders', async () => {
    await api.get(apiUrl + '/orders')
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 0
      })
      .expect(200)
    await api.get(apiUrl + '/orders?antiqua=true')
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 1661
      })
      .expect(200)
    await api.get(apiUrl + '/orders?solarbuddhica=true')
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 1676
      })
      .expect(200)
    await api.get(apiUrl + '/orders?zerpfy=true')
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 1663
      })
      .expect(200)
    await api.get(apiUrl + '/orders?antiqua=true?solarbuddhica=true')
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 3337
      })
      .expect(200)
    await api.get(apiUrl + '/orders?antiqua=true?zerpfy=true')
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 3324
      })
      .expect(200)
    await api.get(apiUrl + '/orders?solarbuddhica=true?zerpfy=true')
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 3339
      })
      .expect(200)
    await api.get(apiUrl + '/orders?antiqua=true?solarbuddhica=true?zerpfy=true')
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 5000
      })
      .expect(200)
  })

  test('returns correct amount of orders when filtered with begin', async () => {
    await api.get(apiUrl + '/orders')
    .send({arrived: true, begin: testBegin})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 0
      })
      .expect(200)
    await api.get(apiUrl + '/orders?antiqua=true')
    .send({arrived: true, begin: testBegin})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 1171
      })
      .expect(200)
    await api.get(apiUrl + '/orders?solarbuddhica=true')
    .send({arrived: true, begin: testBegin})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 1156
      })
      .expect(200)
    await api.get(apiUrl + '/orders?zerpfy=true')
    .send({arrived: true, begin: testBegin})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 1176
      })
      .expect(200)
    await api.get(apiUrl + '/orders?antiqua=true?solarbuddhica=true')
    .send({arrived: true, begin: testBegin})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 2327
      })
      .expect(200)
    await api.get(apiUrl + '/orders?antiqua=true?zerpfy=true')
    .send({arrived: true, begin: testBegin})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 2347
      })
      .expect(200)
    await api.get(apiUrl + '/orders?solarbuddhica=true?zerpfy=true')
    .send({arrived: true, begin: testBegin})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 2332
      })
      .expect(200)
    await api.get(apiUrl + '/orders?antiqua=true?solarbuddhica=true?zerpfy=true')
    .send({arrived: true, begin: testBegin})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 3503
      })
      .expect(200)
  })

  test('returns correct amount of orders when filtered with end', async () => {
    await api.get(apiUrl + '/orders')
    .send({arrived: true, end: testEnd})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 0
      })
      .expect(200)
    await api.get(apiUrl + '/orders?antiqua=true')
    .send({arrived: true, end: testEnd})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 1158
      })
      .expect(200)
    await api.get(apiUrl + '/orders?solarbuddhica=true')
    .send({arrived: true, end: testEnd})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 1170
      })
      .expect(200)
    await api.get(apiUrl + '/orders?zerpfy=true')
    .send({arrived: true, end: testEnd})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 1176
      })
      .expect(200)
    await api.get(apiUrl + '/orders?antiqua=true?solarbuddhica=true')
    .send({arrived: true, end: testEnd})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 2328
      })
      .expect(200)
    await api.get(apiUrl + '/orders?antiqua=true?zerpfy=true')
    .send({arrived: true, end: testEnd})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 2334
      })
      .expect(200)
    await api.get(apiUrl + '/orders?solarbuddhica=true?zerpfy=true')
    .send({arrived: true, end: testEnd})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 2346
      })
      .expect(200)
    await api.get(apiUrl + '/orders?antiqua=true?solarbuddhica=true?zerpfy=true')
    .send({arrived: true, end: testEnd})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 3504
      })
      .expect(200)
  })

  test('returns correct amount of orders when filtered with begin and end', async () => {
    await api.get(apiUrl + '/orders')
    .send({arrived: true, begin:testBegin, end: testEnd})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 0
      })
      .expect(200)
    await api.get(apiUrl + '/orders?antiqua=true')
    .send({arrived: true, begin:testBegin, end: testEnd})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 668
      })
      .expect(200)
    await api.get(apiUrl + '/orders?solarbuddhica=true')
    .send({arrived: true, begin:testBegin, end: testEnd})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 650
      })
      .expect(200)
    await api.get(apiUrl + '/orders?zerpfy=true')
    .send({arrived: true, begin:testBegin, end: testEnd})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 689
      })
      .expect(200)
    await api.get(apiUrl + '/orders?antiqua=true?solarbuddhica=true')
    .send({arrived: true, begin:testBegin, end: testEnd})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 1318
      })
      .expect(200)
    await api.get(apiUrl + '/orders?antiqua=true?zerpfy=true')
    .send({arrived: true, begin:testBegin, end: testEnd})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 1357
      })
      .expect(200)
    await api.get(apiUrl + '/orders?solarbuddhica=true?zerpfy=true')
    .send({arrived: true, begin:testBegin, end: testEnd})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 1339
      })
      .expect(200)
    await api.get(apiUrl + '/orders?antiqua=true?solarbuddhica=true?zerpfy=true')
    .send({arrived: true, begin:testBegin, end: testEnd})
      .expect('Content-Type', /json/)
      .expect(function (res) {
        res.body.length = 2007
      })
      .expect(200)
  })

  afterAll(() => mongoose.connection.close())
})