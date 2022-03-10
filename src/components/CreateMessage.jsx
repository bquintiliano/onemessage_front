import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import {CreatingMessage} from '../hooks/useMessage'
import carta from '../img/carta.png'
import  '../css/style.css'


function CreateMessage(){
    const [message, setMessage] = useState()
    const [error, setError] = useState(false)
    const [text, setText] = useState('')
    const [hidded,setHidded] = useState(false)
    const [hiddedText,setHiddedText] = useState(true)
    const [link, setLink] = useState()

    return(
        <form onSubmit={(event) => {
            event.preventDefault()

            if(message.length > 5) {
                setError(false)
                setHidded(true)
                
                CreatingMessage(message).then(response => { 
                setLink(`http://localhost:3000/read/${response}`)
                setHiddedText(false)
                })
            }
            
            setError(true)
            setText('Mensagem precisa ter mais que 5 caracteres')

        }}>
        <div align='center'>
            <img id='logo' src={carta} alt="carta" />
        </div>

        <div id='campotexto' align='center' hidden={hidded} >
            <TextField  
            label='Digite sua mensagem' 
            variant="outlined"
            multiline
            required
            error={error}
            helperText={text} 
            rows={4} 
            value={message}
            onChange={(event)=> {
                setMessage(event.target.value)    
        }} />
        </div>
        <br></br>
        <div align='center' hidden={hidded}>
            <Button variant="contained" color="primary" type='submit' > ENVIAR </Button>
        </div>

        <div align='center' hidden={hiddedText}>
            <p id='info'>Copie o link abaixo e envie para a pessoa desejada! Não abra se não a mensagem será deletada! </p>
            <h3 id='link'>{link}</h3>
            <button type='button' onClick={() => {navigator.clipboard.writeText(link)}}>Copiar</button>
        </div>            
            
        </form>
    )


}

export default CreateMessage