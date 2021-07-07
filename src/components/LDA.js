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
                        <div className="col-6">
                            <h1> Modelado de Tópicos</h1>
                            <p>
                                Para este proyecto se implementó un modelo de LDA (Latent Dirichlet Allocation) con el objetivo de hacer una caracterización de los documentos analizados del siglo XVII.
                                El modelado de tópicos es una técnica sin supervisión de machine learning que permite tomar un conjunto de documentos, detectar patrones de palabras y frases y de esta manera hacer agrupaciones de palabras y expresiones que caracterizan un subconjunto de estos documentos. Esta técnica está fuertemente fundamentada en técnicas de procesamiento de lenguaje natural e inteligencia artificial. El modelado de tópicos da como resultado grupos de palabras que en conjunto representan una temática en particular que se presente en los documentos procesados. Por esto es muy útil, ya que trabaja con datos no estructurados como texto. 
                            </p>

                        </div>
                        <div className="col-6">
                            
                        </div>
                        <img className="lda" src={lda}></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default LDA;