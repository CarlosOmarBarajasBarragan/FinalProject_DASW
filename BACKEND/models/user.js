const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: {
        type: [String, 'Name must be string'],
        required: [true, 'Name must not be empty'],
        trim: true
    },
    email: {
        type: [String, 'Email must be string'],
        required: [true, 'Email must not be empty'],
        trim: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email must be formatted correctly'],
        unique: [true, 'Account already exists, email must be unique']
    },
    password: {
        type: [String, 'Password must be string'],
        required: [true, 'Password must not be empty'],
        trim: true,
        minLength: [8, 'Password must be at least 8 characters'],
        unique: [true, 'Password is already taken, password must be unique']
    },
    joined_at: {
        type: String,
        required: true
    }
});

let User = mongoose.model('users', userSchema);

class UserException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

// exports.User = User;
// exports.UserException = UserException;
