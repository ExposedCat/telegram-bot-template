function getOneGroup(Group, groupId, title) {
    let update = {}
    if (title) {
        update.title = title
    }
    return Group.findOneAndUpdate({
        groupId
    }, update, {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true
    })
}

function updateGroupData(Group, updates) {
    return Group.updateOne({
        groupId: this.groupId
    }, updates)
}


export {
    getOneGroup,
    updateGroupData
}