const express = require('express')
const users = express.Router()
require('dotenv').config()
// Package to generate tokens to authenticate users when sending requests
const jwt = require('jsonwebtoken')
// Secret string from .env used when function to create a token is called
const secret = process.env.SECRET
const { getUsers, createUser } = require('../queries/user')


users.get('/', async (req, res) => {
    try {
        const users = await getUsers()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ "error": "Internal Server Error" })
    }
});

users.post('/', async (req, res) => {
    try {
        const newUser = await createUser(req.body)
        // JWT package has a method called sign, to which we pass an object containing a user's id and the user's username, AND the 'secret' from your environment variables to create a 'token' that we assign to the variable token
        const token = jwt.sign({ userId: newUser.user_id, username: newUser.username }, secret);

        // We create a new object to send both the user and the token to the client
        res.status(201).json({ user: newUser, token });
    } catch (error) {
        res.status(500).json({ error: "Invalid information", info: error });
    }
});


module.exports = users