import { path } from './services/helpers/path-resolver.js'
import { config as setConfigFile } from 'dotenv'

import { initDatabaseConnection } from './config/database/database.js'
import { initBot } from './config/bot.js'


setConfigFile({
    path: path(import.meta.url, 'config.env')
})

let db = initDatabaseConnection()
const bot = await initBot(db)
db = null

bot.launch()

await bot.context.db.User.deleteMany()
await bot.context.db.Group.deleteMany()

console.info('App started')