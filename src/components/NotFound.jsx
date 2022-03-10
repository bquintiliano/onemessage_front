import React from 'react';
import { Link } from 'react-router-dom'

function NotFound(){

    return (
        <div align='center' id='notfound'>   
            <p>Parece que essa página não existe!</p>
            <Link to='/'>Voltar a página principal</Link>
        </div>
  
    )
}

export default NotFound