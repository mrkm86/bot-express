'use strict';

let debug = require("debug")("bot-express:skill");

/*
** Just reply the text response provided from api.ai.
*/
module.exports = class SkillSimpleResponse {
    finish(bot, bot_event, context, resolve, reject){
        debug(`Going to reply "${context.intent.fulfillment.speech}".`);
        let messages = [{
            text: context.intent.fulfillment.speech
        }];
        return bot.reply(messages);
    }
};
