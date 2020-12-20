import conf from '../conf'
import axios from 'axios'

interface IsetWebhook {
    url: string
}

const serviceConf = {
    endPoint: `${conf.endpoint}/setWebhook`
}

async function setWebhook ( data?: IsetWebhook )
{
    const url = data?.url ?? conf.webhook;
    const response = await axios.post(serviceConf.endPoint, {url: url});
    console.log('Webhook configurado com sucesso: ', response.data, url)
    return response.data
}


export default setWebhook