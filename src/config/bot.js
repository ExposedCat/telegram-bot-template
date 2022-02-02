import { path } from '../helpers/path-resolver.js'

import Telegraf from 'telegraf'
import { ExtendedContext } from './telegraf-context.js'

import { initLocalesEngine } from './locales.js'
import { processError } from '../helpers/global-errors-processor.js'

import { handleStartCommand } from '../handlers/text/start.js'
import { handleAnyTextMessage } from '../handlers/text/any.js'
import { handleAnyButtonClick } from '../handlers/button/any.js'


async function initBot(dbInstance) {
    const bot = new Telegraf(process.env.TOKEN, {
        contextType: ExtendedContext
    })

    bot.context.db = dbInstance

    bot.use(Telegraf.session())
    const localeEngine = initLocalesEngine(path(import.meta.url, '../locales'))
    bot.use(localeEngine.middleware())

    bot.start(handleStartCommand)
    bot.on('message', handleAnyTextMessage)
    bot.on('callback_query', handleAnyButtonClick)

    bot.catch(processError)

    return bot
}


export {
    initBot
}