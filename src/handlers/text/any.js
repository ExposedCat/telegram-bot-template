import {
    any as processCommand
} from '../../services/handlers/text/any.js'


async function handleAnyTextMessage(ctx) {
    const { text } = ctx.message
    let group = null
    const user = await ctx.db.User.getOne(
        ctx.from.id,
        ctx.from.first_name
    )
    if (ctx.from.id !== ctx.chat.id) {
        group = await ctx.db.Group.getOne(ctx.group.id, title)
    }

    const { text: responseText } = await processCommand(text, user, group)
    await ctx.text(responseText)
}


export {
    handleAnyTextMessage
}