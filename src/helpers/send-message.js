function sendMessage(text, extra = {}) {
    return this.telegram.sendMessage(
        this.chat.id,
        text,
        Object.assign(extra, {
            parse_mode: 'HTML',
            disable_web_page_preview: true
        })
    )
}


export {
    sendMessage
}