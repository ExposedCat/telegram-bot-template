import Telegraf from 'telegraf'

import { showPopup } from '../services/helpers/show-popup.js'
import { sendMessage } from '../services/helpers/send-message.js'


class ExtendedContext extends Telegraf.Context {
    constructor(update, telegram, options) {
        super(update, telegram, options)
    }

    popup = showPopup

    text = sendMessage

    async getSelfEntities() {
        const user = await this.db.User.getOne(
            this.from.id,
            this.from.first_name
        )
        let group = null
        if (this.from.id !== this.chat.id) {
            group = await this.db.Group.getOne(this.group.id, title)
        }

        return {
            user,
            group
        }
    }
}


export {
    ExtendedContext
}