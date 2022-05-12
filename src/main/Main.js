import React from "react";
import Cabecalo from "../inicio/Header";
import './Main.css';

class Main extends React.Component{
    render(){
        return(
            <div class="teste">
                <Cabecalo/>
                <div class="conteudo">
                    <p>Seja bem-vindo!</p>
                </div>
            </div>
        )
    }
}

export default Main;