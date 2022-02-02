import {
    getOneUser,
    updateUserData
} from '../services/database/user.js'
import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    userId: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        default: 'free'
    }
})

class userClass {
    static getOne(userId, name) {
        return getOneUser(this, userId, name)
    }
    updateData(updates) {
        return updateUserData.bind(this)(this.constructor, updates)
    }
}


export {
    userClass,
    userSchema
}