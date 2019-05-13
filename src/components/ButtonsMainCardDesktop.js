import React, { Component } from 'react';
import ButtonMainDesktop from './ButtonMainDesktop';

class ButtonsMainCardDesktop extends Component {
    render() {
        return (
            <div className="buttons-main-card">
                <ButtonMainDesktop link="#" icon="fas fa-play" para="Play" />
                <ButtonMainDesktop link="#" icon="far fa-save" para="Save" />
                <ButtonMainDesktop link="#" icon="fas fa-globe-europe" para="Translate" />
            </div>
        );
    }
}

export default ButtonsMainCardDesktop;
