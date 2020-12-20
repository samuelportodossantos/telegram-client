import axios from 'axios'
import conf from '../conf'

interface IsendMessage {
    text: string;
    chatId: number;
}

const serviceConf = {
    endPoint: `${conf.endpoint}/sendMessage`
}

async function sendMessage( dataMessage: IsendMessage )
{
    const dataSend = {
        text: dataMessage.text,
        chat_id: dataMessage.chatId,
        parse_mode: 'markdown'
    }

    const response = await axios.post(serviceConf.endPoint, dataSend)
    console.log('Mensagem enviada: ', response.data);
    return response
}

export default sendMessage