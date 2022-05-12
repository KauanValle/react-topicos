import React from 'react';
import './about.css'
import Cabecalo from "../inicio/Header";

class About extends React.Component{
    render(){
        return (
            <div class="teste">
                <Cabecalo/>
                <div class="conteudo">
                    <p>Sobre mim</p>
                </div>
                
            </div>
        )
    }
}

export default About;