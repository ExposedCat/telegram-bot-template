# Telegram bot template
## Dependencies
- [Node.JS](https://nodejs.org/uk/download/package-manager/)  
  └─ `nodejs` package in your distro repos
- [MongoDB](https://docs.mongodb.com/manual/administration/install-on-linux/)
- [Mongoose.JS](https://www.npmjs.com/package/mongoose)  
- [Telegraf](https://www.npmjs.com/package/mongoose)  
- [Telegraf i18n](https://www.npmjs.com/package/telegraf-i18n)  
- [Dotenv](https://www.npmjs.com/package/dotenv)  

## Usage
1. Create new project:  
`sh create-project.sh PATH/NAME`  
Replace `PATH` with new project path and `NAME` with project directory name
2. Configure `src/config.env`
2.1. Replace `TOKEN` with the new one from t.me/BotFather  
2.2. Replace `DB_URL` and `DB_NAME` with your own MongoDB database URL and name  
3. Run bot with `npm start`  
