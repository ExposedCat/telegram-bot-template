import mongoose from 'mongoose'
import { initModels } from './models.js'


function initDatabaseConnection() {
    try {
        mongoose.Promise = global.Promise
        
        let db = initModels()
        db.connection = mongoose.connect(`mongodb://${process.env.DB_URL}/${process.env.DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        return db
    } catch (error) {
        console.error('CRITICAL: Cannot connect to database:')
        console.trace(error)
        process.exit()
    }
}


export {
    initDatabaseConnection
}