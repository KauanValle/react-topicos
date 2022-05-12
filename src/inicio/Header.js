import React from 'react';
import './Header.css';

class Cabecalo extends React.Component {
    render(){
        return(
            <div class="list">
                <h2>KVS</h2>
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/sobre"><li>About Us</li></a>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}

export default Cabecalo;