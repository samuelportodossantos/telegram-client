const api = {
    webhook: 'https://18bdba144646.ngrok.io/webhook',
    bot_token: '981090075:AAE5bDe6pscow1Ho6F5tuTgYZ40j1N3YotM'
}

export default {
    endpoint: `https://api.telegram.org/bot${api.bot_token}`,
    webhook: api.webhook
}