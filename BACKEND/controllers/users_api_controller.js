const mongoose = require('mongoose');
const { ReturnDocument } = require('mongodb');
// const { User } = require("../models/user");

async function createUser(name, mail, password) {
    let newUser = {
        name: name,
        email: mail,
        password: password,
        joined_at: (new Date()).toISOString()
    };
    let user_obj = new User(newUser);
    try {
        await user_obj.validate();
    } catch(err) {
        if(error.name === 'ValidationError') {
            let error = Object.keys(err.erros)[0];
            throw new UserException(err.erros[error].message);
        }
    }
    data.users.push(user_obj);
}