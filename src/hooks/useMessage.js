import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001'
})

async function CreatingMessage(message){

    let text = ''

    const data = {
        message
    }

    try{
        await api.post('/create', data).then(response => {
        text = response.data
        })
    }
    catch(error){
        console.log(error.message)
    }
    return text
}

async function ReadingMessage(id){

    let message = ""

    try{
        await api.get(`/read/${id}`).then(response => {
               
            message = response
        })
        
    }
    catch(error){
        message = 400
    }

    return message

}




export  {CreatingMessage, ReadingMessage}