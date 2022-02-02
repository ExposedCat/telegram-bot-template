import { User } from '../../entities/user.js'
import { Group } from '../../entities/group.js'
import { start } from '../../services/handlers/text/start.js'
import { unknown } from '../../services/handlers/text/unknown.js'


async function handleNewMember(ctx) {
    const userId = ctx.from.id
    const groupId = ctx.chat.id
    const isGroup = userId !== groupId
    const { text } = ctx.message
    const group = isGroup && await Group.getOne(groupId)
    const user = await User.getOne(groupId, userId)

    switch (user.state) {
        // case '': {

        //     break
        // }
        default: {
            switch (text) {
                case '/start': {
                    await start(ctx, user)
                    break
                }
                default: {
                    await unknown(ctx)
                }
            }
        }
    }
}


export { handleTextMessage }