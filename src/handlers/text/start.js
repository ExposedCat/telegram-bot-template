import {
    start as processCommand
} from '../../services/start-command.js'


async function handleStartCommand(ctx) {
    const { user } = await ctx.getSelfEntities()
    const { text } = await processCommand(ctx.i18n)
    await ctx.text(text)
    await user.updateData({
        state: 'free'
    })
}


export {
    handleStartCommand
}