import React, { Component } from 'react';
import Header from './Header';
import wordcloud from '../Images/wordcloudg.png';

class Wordcloud extends Component {
    render() {
        return (
            <div>
                <Header>

                </Header>
                <div className="container">
                    <div className="row">
                        <div className='col-6'>
                            <h1> Modelado de Tópicos</h1>
                            <p>
                                Dentro de este proyecto, una de las visualizaciones propuesta es la nube de palabras que permite ver los clusters de palabras que fueron identificadas por el LDA como conjuntos de palabras que en sumatoria tienen la capacidad de caracterizar un subconjunto de documentos dentro del grupo orignial de los 43 documentos.
                            </p>
                        </div>
                        <div className='col-6'>

                        </div>



                        <img className="wordcloud" src={wordcloud}></img>


                    </div>
                </div>
            </div>
        );
    }
}

export default Wordcloud;