const db = require('./models')
const sequelize = db.sequelize
const Sequelize = db.Sequelize

const VaccinationsJSON = require('./data/vaccinations.json')
const AntiquaJSON = require('./data/Antiqua.json')
const SolarBuddhicaJSON = require('./data/SolarBuddhica.json')
const ZerpfyJSON = require('./data/Zerpfy.json')

const init = async () => {
    await sequelize.query("DROP TABLE IF EXISTS \"vaccinations\"")
    await sequelize.query("CREATE TABLE \"vaccinations\" (\"vaccination-id\" TEXT PRIMARY KEY, \"sourceBottle\" TEXT, \"gender\" TEXT, \"vaccinationDate\" DATE, \"createdAt\" DATE, \"updatedAt\" DATE)")
    for (const e of VaccinationsJSON) {
        await db.vaccinations.create({
            'vaccination-id': e['vaccination-id'],
            sourceBottle: e['sourceBottle'],
            gender: e['gender'],
            vaccinationDate: e['vaccinationDate']
        })
    }
    await sequelize.query("DROP TABLE IF EXISTS \"antiqua\"")
    await sequelize.query("CREATE TABLE \"antiqua\" (\"id\" TEXT PRIMARY KEY, \"orderNumber\" BIGINT, \"responsiblePerson\" TEXT, \"healthCareDistrict\" TEXT, \"vaccine\" TEXT, \"injections\" INTEGER, \"arrived\" DATE, \"createdAt\" DATE, \"updatedAt\" DATE)")
    for (const e of AntiquaJSON) {
        await db.Antiqua.create({
            id: e['id'],
            orderNumber: e['orderNumber'],
            responsiblePerson: e['responsiblePerson'],
            healthCareDistrict: e['healthCareDistrict'],
            vaccine: e['vaccine'],
            injections: e['injections'],
            arrived: e['arrived']
        })
    }
    await sequelize.query("DROP TABLE IF EXISTS \"solarbuddhica\"")
    await sequelize.query("CREATE TABLE \"solarbuddhica\" (\"id\" TEXT PRIMARY KEY, \"orderNumber\" BIGINT, \"responsiblePerson\" TEXT, \"healthCareDistrict\" TEXT, \"vaccine\" TEXT, \"injections\" INTEGER, \"arrived\" DATE, \"createdAt\" DATE, \"updatedAt\" DATE)")
    for (const e of SolarBuddhicaJSON) {
        await db.SolarBuddhica.create({
            id: e['id'],
            orderNumber: e['orderNumber'],
            responsiblePerson: e['responsiblePerson'],
            healthCareDistrict: e['healthCareDistrict'],
            vaccine: e['vaccine'],
            injections: e['injections'],
            arrived: e['arrived']
        })
    }
    await sequelize.query("DROP TABLE IF EXISTS \"zerpfy\"")
    await sequelize.query("CREATE TABLE \"zerpfy\" (\"id\" TEXT PRIMARY KEY, \"orderNumber\" BIGINT, \"responsiblePerson\" TEXT, \"healthCareDistrict\" TEXT, \"vaccine\" TEXT, \"injections\" INTEGER, \"arrived\" DATE, \"createdAt\" DATE, \"updatedAt\" DATE)")
    for (const e of ZerpfyJSON) {
        await db.Zerpfy.create({
            id: e['id'],
            orderNumber: e['orderNumber'],
            responsiblePerson: e['responsiblePerson'],
            healthCareDistrict: e['healthCareDistrict'],
            vaccine: e['vaccine'],
            injections: e['injections'],
            arrived: e['arrived']
        })
    }
}

init()
