import {
    any as processClick
} from '../../services/any-click.js'


async function handleAnyButtonClick(ctx) {
    const { data } = ctx.callbackQuery
    let group = null
    const user = await ctx.db.User.getOne(
        ctx.from.id, ctx.from.first_name
    )
    if (ctx.from.id !== ctx.chat.id) {
        group = await ctx.db.Group.getOne(ctx.chat.id, title)
    }

    const { text } = await processClick(data, user, group)
    await ctx.popup(text)
}


export {
    handleAnyButtonClick
}