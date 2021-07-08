import React, { Component } from 'react';
import Header from './Header';
import mapa from '../Images/mapa.png';
import axios from "axios";
class main extends Component {
   
    state= {
        data: ''
    }
    toggleButtonState = () => {
        
        axios.get("http://172.24.98.118:5000/hola/")
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
                            Actualmente existen herramientas computacionales que llevan varios años en desarrollo y en constante mejora y actualización. Estas herramientas se han llevado a todos los campos del conocimiento humano permitiendo la expansión del conocimiento automatizando procesos que sin la existencia de estas herramientas serían imposibles de realizar. La minería de texto es un campo especifico de estos aparatos computacionales. Esta ha encontrado muy buena acogida en la mayoría de los espacios ya que funciona para información no estructurada. Así pues, es que existen aplicaciones de la minería de texto en campos como la investigación, negocios, el gobierno, la medicina y seguridad.
Sin embargo, hay espacios donde la minería de texto y las herramientas que puede proporcionar no han sido exploradas a fondo. Conjuntamente, las humanidades digitales es un campo sin mucha exploración que se ha dejado de lado por los científicos de datos y se ha puesto en las manos de algunos aventureros humanistas que se han atrevido a ir en contra de los estereotipos. La investigación en las humanidades es un espacio con un gran potencial donde las herramientas de minería de texto caben perfectamente. Esta conversación multi disciplinaria permitirá desarrollar nuevas metodologías de investigación que posiblemente dé lugar a nuevas maneras de entender el desarrollo del conocimiento en las humanidades. 

                            </p>
                            <p>
                            El proyecto consiste en crear un recurso digital para explorar, visualizar y analizar fuentes primarias del siglo XVIII en el Nuevo Reino de Granada (historias naturales, mapas, cartas, proyectos económicos, memoriales, periódicos, reportes administrativos, descripciones geográficas, etc.). 
Teniendo en cuenta los diferentes tipos de fuentes de información que se tienen disponibles se van a realizar experimentos con diferentes tecnologías de reconocimiento de caracteres para extraer datos y metadatos de las fuentes disponibles. 
                            </p>
                        </div>
                    </div>
                    <button onClick={this.toggleButtonState}>
                        LLAMAR
                    </button>
                </div>
            </div>
        );
    }
}

export default main;