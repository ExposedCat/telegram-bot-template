import {
    userClass,
    userSchema
} from '../../entities/user.js'
import {
    groupClass,
    groupSchema
} from '../../entities/group.js'

import mongoose from 'mongoose'


function initEntityModel(name, entitySchema, entityClass) {
    entitySchema.loadClass(entityClass)
    const Model = new mongoose.model(name, entitySchema)
    return Model
}

function initModels() {
    return {
        User: initEntityModel('User', userSchema, userClass),
        Group: initEntityModel('Group', groupSchema, groupClass)
    }
}


export {
    initModels
}