import React, { Component } from 'react';
import Header from './Header';
import lda from '../Images/ldag.png';

class LDA extends Component {
    render() {
        return (
            <div>
                <Header>

                </Header>
                <div className="container">
                    <div className="row">
                       
                            <h1> Modelado de Tópicos</h1>
                            <p>
                                Para este proyecto se implementó un modelo de LDA (Latent Dirichlet Allocation) con el objetivo de hacer una caracterización de los documentos analizados del siglo XVII.
                                El modelado de tópicos es una técnica sin supervisión de machine learning que permite tomar un conjunto de documentos, detectar patrones de palabras y frases y de esta manera hacer agrupaciones de palabras y expresiones que caracterizan un subconjunto de estos documentos. Esta técnica está fuertemente fundamentada en técnicas de procesamiento de lenguaje natural e inteligencia artificial. El modelado de tópicos da como resultado grupos de palabras que en conjunto representan una temática en particular que se presente en los documentos procesados. Por esto es muy útil, ya que trabaja con datos no estructurados como texto. 
                            </p>
                            <p>
                            Dentro de la implementación de un modelo LDA se puede escoger el número de tópicos que se obtienen como resultado. El número de tópicos cambia drásticamente el resultado obtenido en términos de relevancia y significancia con respecto a los documentos. En consecuencia, se usa una métrica de coherencia para determinar lo eficaz que fue el modelo. Luego de varios experimentos se determinó que el número óptimo de tópicos para este conjunto de 43 documentos es 8.
                            </p>
                            <p>
                            Las gráficas que se pueden ver como resultado, muestran las 10 palabras que representa los tópicos, así como la frecuencia y el peso de esta dentro de los documentos. Esto es porque a pesar de que una palabra aparezca muchas veces no necesariamente agrega más valor semántico para definir el tópico. 
                            </p>

                        
                        <img className="lda" src={lda}></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default LDA;