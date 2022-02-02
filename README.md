# Telegram bot template
## Tech stack
```
Node.JS  
└─Telegraf.JS  
└─Mongoose.JS  
MongoDB  
```
## Dependencies
- [Node.JS](https://nodejs.org/uk/download/package-manager/)  
  └─ `nodejs` package in your distro repos
- [MongoDB](https://docs.mongodb.com/manual/administration/install-on-linux/)
- [Mongoose.JS](https://www.npmjs.com/package/mongoose) - ORM  
- [Telegraf](https://www.npmjs.com/package/mongoose) - Telegram API  
- [Telegraf i18n](https://www.npmjs.com/package/telegraf-i18n) - Localization  
- [Dotenv](https://www.npmjs.com/package/dotenv)  

## Running
1. Install dependencies  
2. Replace `example-config.env` with `config.env`
2.1. Replace `TOKEN` with the one new from t.me/BotFather  
2.2. Replace `DB_URL` and `DB_NAME` with your own MongoDB database URL and name  
3. Run bot with `npm start`  
