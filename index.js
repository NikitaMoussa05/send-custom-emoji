const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot('6091681632:AAH5G5tOkVZbICXFvDwxf0dd23u2xl74Oio', {polling: true})
const channelIds = ['', '', '']//здесь идет перечисление ваших груп
const sticker = '😜'

bot.on('message', msg => {
    if (msg.text === '/start'){
        channelIds.forEach((chat_id) => {
            bot.sendMessage(chat_id, `Ку ${sticker}`).then(() => {
                console.log(`the message with chat_id ${chat_id} sended succesfully`)
                .catch((error) => {
                    console.log(`error the message with chat_id ${chat_id} wasnt sended ${errror.message}`)
                })
        
            })
        })
        bot.sendMessage(msg.chat.id, "успех сообщение отправлено на канал")
    }
})

bot.on('channel_post', msg => {
    console.log(msg)
})

bot.on('polling_error', console.log)
