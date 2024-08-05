const db = require('../db/dbConfig')

// Import library to hash password
const bcrypt = require('bcrypt')


const createUser = async (user) => {
    try {
        const { username, email, password_hash } = user
        const salt = 10
        const hash = await bcrypt.hash(password_hash, salt)
        const newUser = await db.one("INSERT INTO users (username, email, password_hash) VALUES($1, $2, $3) RETURNING *", [username, email, hash])
        return newUser
    } catch (err) {
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
