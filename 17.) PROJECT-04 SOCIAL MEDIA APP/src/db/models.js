const Sequelize = require('sequelize')

const db = new Sequelize({
    database: 'cbsocialmediadb',
    dialect: 'mysql',
    username: 'cbsocialuser',
    password: 'cbsocialpass'
})

const COL_ID_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}
const COL_NAME_DEF = {
    type: Sequelize.DataTypes.STRING(30),
    unique: true,
    allowNull: false
}
const COL_TITLE_DEF = {
    type: Sequelize.DataTypes.STRING(140),
    allowNull: false
}

const Users = db.define('user', {
    id: COL_ID_DEF,
    username: COL_NAME_DEF
})

const Posts = db.define('post',{
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
    }
})

const Comments = db.define('comment',{
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT('tiny')
    }
})

//relationships
Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)

//Cart.hasMany(Products)
//Cart.belongs(Users)

module.exports = {
    db,
    Users,
    Comments,
    Posts
}