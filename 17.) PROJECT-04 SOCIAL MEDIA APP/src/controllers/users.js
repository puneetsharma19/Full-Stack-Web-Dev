const {Users} = require('../db/models')
const {getRandomUsername} = require('../utils/username')

async function createAnonUser(){
    const user = await Users.create({
        username: getRandomUsername()
    })

    return user
}

module.exports = {
    createAnonUser
}

//test code
// async function task(){
//     console.log(await createAnonUser())
//     console.log(await createAnonUser())
//     console.log(await createAnonUser())
//     console.log(await createAnonUser())
// }

// task()