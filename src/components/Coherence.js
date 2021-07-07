import React, { Component } from 'react';
import Header from './Header';
import RangeSlider from './RangeSlider';



class Coherence extends Component {
     value;

    valuetext(value) {
        return `${value}°C`;
    }

    render() {
        return (
            <div>
                <Header>

                </Header>
                <div className="container">
                    
                        <RangeSlider></RangeSlider>
                    
                </div>
            </div>
        );
    }
}

export default Coherence;