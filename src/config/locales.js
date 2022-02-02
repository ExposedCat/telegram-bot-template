import I18n from 'telegraf-i18n'


function initLocalesEngine(path, defaultLanguage = 'ru') {
    const i18n = new I18n({
        directory: path,
        defaultLanguage: defaultLanguage,
        defaultLanguageOnMissing: true
    })
    return i18n
}


export {
    initLocalesEngine
}