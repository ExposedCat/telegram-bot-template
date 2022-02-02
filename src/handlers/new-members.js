async function handleNewMember(ctx) {
    if (ctx.chat.id !== ctx.from.id) {
        return
    }
    const { user, group } = await ctx.getSelfEntities()

    
}


export {
    handleNewMember
}