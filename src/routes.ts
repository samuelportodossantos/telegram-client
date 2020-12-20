import { Router } from 'express'

import setWebhook from './services/setWebhook'
import sendTextMessage from './services/sendTextMessage'

const routes = Router();

routes.get('/', (req, res) => {
    return res.send('Welcome to my Telegram client')
})

routes.post('/setWebhook', (req, res) => {
    setWebhook()
})

routes.post('/webhook', (req, res) => {
    const data = req.body;

    const message = {
        text: 'eaiii bmeu chaapaaaa',
        chatId: data.message.chat.id
    }
    sendTextMessage(message)

    return res.send()
})

export default routes