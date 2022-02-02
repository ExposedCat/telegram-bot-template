import {
    getOneGroup,
    updateGroupData
} from '../services/database/group.js'
import mongoose from 'mongoose'


const groupSchema = new mongoose.Schema({
    groupId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

class groupClass {
    static getOne(groupId, title) {
        return getOneGroup(Group, groupId, title)
    }
    updateData(updates) {
        return updateGroupData.bind(this)(Group, updates)
    }
}


export {
    groupClass,
    groupSchema
}