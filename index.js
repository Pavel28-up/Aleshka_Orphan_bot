//const bot = require('telegram-bot')

//const token = '7470611522:AAFx54mg6SHFfLtxojBw45it17qYmYPdkaQ'

const { Telegraf, Markup } = require('telegraf')
const { message } = require('telegraf/filters')
require('dotenv').config()
//const COMMANOS = require('./modeles/const')
const group = require('./modeles/group')
const game = require('./modeles/game')
const partner = require('./modeles/partner')
const father = require('./modeles/father')
const youtube = require('./modeles/yotutube')
const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) =>  ctx.reply('Привет, ' 
    + ctx.message.from.first_name 
    + '! Чтобы узнать что я могу введи команду - /help'
    +' или нажми /comand для просмотра разделов бота') 
    ? ctx.message.from.first_name : "незнакомец")
// bot.on('message', (ctx) => {
//     if(ctx.message.location){
//             //ctx.reply('Здорова')
//             //ctx.reply('Здорова')
//             console.log(ctx.message.location)
//     }
// })

function addActionBot(name, src, text){
    bot.action(name, async (ctx) => {
        try{
            await ctx.answerCbQuery()
            if (src !== false){
                await ctx.replyWithPhoto({
                    source: src
                })
            }
            await ctx.replyWithHTML(text, {
                disable_web_page_preview: true
            })
        } catch(e){
            console.error(e)
        }
    })
}

bot.command('father', async (ctx) => {
    try{
        await ctx.replyWithHTML('<b>Все разделы</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Изминить настроить бота','btn_father')]
            ]
        ))
    } catch(e){
        console.error(e)
    }
})

addActionBot('btn_father', false, father[0][0])

bot.command('comand', async (ctx) => {
    try{
        await ctx.replyWithHTML('<b>Все разделы</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('ВК группы','btn_group_vk'),Markup.button.callback('ТГ группы','btn_group_tg')],
                [Markup.button.callback('Игры в ВК','btn_game_vk')],
                [Markup.button.callback('Каналы ТГ','btn_partner_tg')],
                [Markup.button.callback('YouTube','youtube')],
            ]
        ))
    } catch(e){
        console.error(e)
    }
})

bot.help((ctx) =>  ctx.reply(text.comands))
bot.command('group', async (ctx) => {
    try{
        await ctx.replyWithHTML('<b>Группы</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('ВК группы','btn_group_vk')],
                [Markup.button.callback('ТГ группы','btn_group_tg')]
            ]
        ))
    } catch(e){
        console.error(e)
    }
})

bot.action('btn_group_vk', async (ctx) => {
    try{
        await ctx.replyWithHTML('<b>Группы BK</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('ВК пятнашки','btn_vk_1')],
                //[Markup.button.callback('ВК','btn_1'),Markup.button.callback('ТГ','btn_2')]
            ]
        ))
    } catch(e){
        console.error(e)
    }
})

addActionBot('btn_vk_1', './img/1.jpg', group[0][0])

bot.action('btn_group_tg', async (ctx) => {
    try{
        await ctx.replyWithHTML('<b>Группы ТГ</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Игрульки','btn_tg_1')],
                [Markup.button.callback('Тех. Поддержка','btn_tg_2')]
            ]
        ))
    } catch(e){
        console.error(e)
    }
})

addActionBot('btn_tg_1', './img/2.jpg', group[1][0])
addActionBot('btn_tg_2', false, group[1][1])

bot.command('game', async (ctx) => {
    try{
        await ctx.replyWithHTML('<b>Игры</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Игры в ВК','btn_game_vk')],
            ]
        ))
    } catch(e){
        console.error(e)
    }
})

bot.action('btn_game_vk', async (ctx) => {
    try{
        await ctx.replyWithHTML('<b>Игры в ВКонтакте</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Классичесие Пятнашки','btn_game_1')],
            ]
        ))
    } catch(e){
        console.error(e)
    }
})

addActionBot('btn_game_1', './img/3.jpg', game[0][0])

bot.command('partner', async (ctx) => {
    try{
        await ctx.replyWithHTML('<b>Партнеры проекта</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Каналы ТГ','btn_partner_tg')],
            ]
        ))
    } catch(e){
        console.error(e)
    }
})

bot.action('btn_partner_tg', async (ctx) => {
    try{
        await ctx.replyWithHTML('<b>Партнеры</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Тг Канал','btn_partner_1')],
            ]
        ))
    } catch(e){
        console.error(e)
    }
})

addActionBot('btn_partner_1', false, partner[0][0])

bot.command('youtube', async (ctx) => {
    try{
        await ctx.replyWithHTML('<b>YouTube</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Канал','btn_youtube_0'), Markup.button.callback('Плей листы','btn_youtube')],
            ]
        ))
    } catch(e){
        console.error(e)
    }
})

bot.action('youtube', async (ctx) => {
    try{
        await ctx.replyWithHTML('<b>YouTube</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Канал','btn_youtube_0'), Markup.button.callback('Плей листы','btn_youtube')],
            ]
        ))
    } catch(e){
        console.error(e)
    }
})

bot.action('btn_youtube_0', async (ctx) => {
    try{
        await ctx.replyWithHTML('<b>Канал</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Rebotica  Mentor Pavel','btn_youtube_1')],
            ]
        ))
    } catch(e){
        console.error(e)
    }
})

bot.action('btn_youtube', async (ctx) => {
    try{
        await ctx.replyWithHTML('<b>Плей листы</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Обзор игр','btn_youtube_2')],
            ]
        ))
    } catch(e){
        console.error(e)
    }
})

addActionBot('btn_youtube_1', false, youtube[0][0])
addActionBot('btn_youtube_2', false, youtube[1][0])

//bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
//bot.hears('Лох', (ctx) => ctx.reply('Гапеев не балуйся!!!'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))