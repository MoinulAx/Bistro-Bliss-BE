const db = require('../db/dbConfig')

// Import library to hash password
const bcrypt = require('bcrypt')


bcrypt.hash('testpassword', 10, (err, hash) => {
    if (err) console.error(err);
});

const createUser = async (user) => {
    try {
        const { user_full_name, email, password_hash, user_address } = user
        const salt = 10
        const hash = await bcrypt.hash(password_hash, salt)
        const newUser = await db.one("INSERT INTO users (email, password_hash,user_full_name,user_address) VALUES($1, $2, $3, $4) RETURNING *", [email, hash,user_full_name,user_address])
        console.log(newUser)
        return newUser
        
    } catch (err) {
        console.log(err)
        return err

    }
}

const getUsers = async () => {
    try {
        const users = await db.any("SELECT * FROM users")
        return users
    } catch (err) {
        return err
    }
}


module.exports = { createUser, getUsers }
