import React, { Component } from 'react';
import Header from './Header';
import mapa from '../Images/mapa.png';
const axios = require('axios');
class main extends Component {
   
    state= {
        data: ''
    }
    toggleButtonState = () => {
        
        axios.get("/hola")
        .then((response) => console.log(response.data));
      };

    render() {
        return (
            <div>
                <Header>

                </Header>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img className="mapa" src={mapa}></img>
                        </div>
                        <div className="col-6">

                            <h1> Acerca del proyecto</h1>
                            <p>
                            Este proyecto busca continuar con una conversación interdisciplinaria y dejar algunos cimientos para lo que podrán ser grandes procesos de investigación en el área de humanidades. Esta propuesta nace de un proyecto que la profesora Maria Jose Afanador Llach definió y nombró como: "Inventar la Gran Colombia: Utopía, producción de conocimiento y la economía política del espacio". En consecuencia, este proyecto busca aprovechar herramientas digitales que apoyaran el proceso de investigación para un conjunto de documentos del siglo XVIII. 
                               De esta manera se definieron nuevos objetivos y analizaron diferentes propuestas para consolidar el proyecto.

                            </p>
                            <p>
                            En el proyecto "Inventar Colombia" se querían analizar 84 documentos producidos entre 1720 y 1811 en virreinato de la Nueva Granada (hoy Venezuela, Colombia, Panamá y Ecuador) de los cuales hay 56 en formato pdf o en txt y varios mapas de la época.  Con estos insumos la propuesta el proyecto constó de tres pasos principales: OCR para los documentos, implementar algoritmos de procesamientos de lenguaje natural y finalmente implementar una interfaz que permita visualizar los resultados de estos análisis.
                                El resultado obtenido fue solo una primera iteración sobre el proyecto y funciona como cimiento para posteriores adiciones a la plataforma e implementación de otras técnicas y herramientas de minería de texto que podrían ser aprovechadas e usadas dentro del marco del proyecto “Inventar Colombia”.
                            </p>
                        </div>
                    </div>
                   {/*  <button onClick={this.toggleButtonState}>
                        LLAMAR
                    </button> */}
                </div>
            </div>
        );
    }
}

export default main;