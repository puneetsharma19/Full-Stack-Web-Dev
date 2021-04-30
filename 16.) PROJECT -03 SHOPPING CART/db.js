const Sequelize = require('sequelize')
const { SET_DEFERRED } = require('sequelize/types/lib/deferrable')

const db = new Sequelize('shopdb', 'shopper','shoppass',{
    host: 'localhost',
    dialect: 'mysql',
    pool:{
        min: 0, //minimum number of connections to database
        max: 5
    }
})

const user = db.define('users', {
    id:{
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false      
    }
})


const Product = db.define('products', {
    id:{
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    manufacturer: Sequelize.DataTypes.STRING,
    price: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})


db.sync()
    .then(()=> console.log("Database has been created"))
    .catch(()=> console.error("Error creating database"))


module.exports = {
    User, Product
}