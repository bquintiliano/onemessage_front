import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import { ReadingMessage } from '../hooks/useMessage'
import carta from '../img/carta.gif'

function ReadMessage(){
    const { id } = useParams()
    const [hiddenLetter, setHiddenLetter] = useState(false)
    const [hiddenMessage, setHiddenMessage] = useState(true)
    const [message, setMessage] = useState('Carregando...')
    
    useEffect(()=> {
        ReadingMessage(id).then(response => {

            if(response.status == 200) {
                setMessage(response.data)
            }
            else if( response == 400) {
                setMessage('Parece que essa mensagem não existe mais')
            }

        })
    },[])

    setInterval(() =>{
        setHiddenLetter(true)
        setHiddenMessage(false)
    }, 3000)

    


    return(
            <div align='center'>
            <img id='carta' src={carta} alt="carta" hidden={hiddenLetter} />
            <h2 id='mensagemT' hidden={hiddenMessage}>AQUI ESTA SUA MENSAGEM:</h2>
            <h3 id='mensagem' hidden={hiddenMessage}>
                {message}
            </h3>
            
            <br />

            <h3 id='link' hidden={hiddenMessage}>
             <Link to="/"> Clique aqui se deseja criar uma nova mensagem</Link>  
            </h3>
        </div>
       
    )
}

export default ReadMessage