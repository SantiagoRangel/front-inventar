import React, { Component } from 'react';
import uniandes from '../Images/uniandes.svg';
import { Link } from 'react-router-dom'
class Header extends Component {
    nav = (param) => {
        this.props.history.push('/' + param);
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/"><img className="uniandes" src={uniandes}></img></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">

                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <Link to="/LDA"> <li class="nav-item">
                                <a class="nav-link" >LDA</a>
                            </li>
                            </Link>
                            <Link to="/wordcloud">
                                <li class="nav-item">
                                    <a class="nav-link" >Wordcloud</a>
                                </li>
                            </Link>

                            <Link to="/coherence">
                                <li class="nav-item">
                                    <a class="nav-link" >Linea del tiempo</a>
                                </li>
                            </Link>
                            
                            <Link to="/NER">
                                <li class="nav-item">
                                    <a class="nav-link" >NER</a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;