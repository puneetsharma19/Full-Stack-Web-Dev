const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'mysql',
    database: 'sampledb1',
    username: 'sampleuser1',
    password: 'samplepass1'
})

// db.authenticate()
const Student = db.define('student',{
    name: {
        type : Sequelize.DataTypes.STRING(40),
        allowNull: false
    },
    age: {
        type: Sequelize.DataTypes.INTEGER(2),
        allowNull: false,
        defaultValue: -1
    }
})


module.exports = {db, Student}