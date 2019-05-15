import React, { Component } from 'react';

class ButtonsMainCardDesktop extends Component {
    clickBtnTranslate = e => {
        console.log('tranlate click');
        this.props.clickTranslate(e);
    };

    render() {
        return (
            <div className="buttons-main-card">
                <a
                    href={this.props.movieNow.link}
                    className="hvr-pulse-shrink"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="btn-desktop" type="button">
                        <i className="fas fa-play" />
                        <p className="btn-name">Play</p>
                    </button>
                </a>

                <a className="hvr-pulse-shrink">
                    <button className="btn-desktop" type="button">
                        <i className="far fa-save" />
                        <p className="btn-name">Save</p>
                    </button>
                </a>
                <a className="hvr-pulse-shrink">
                    <button className="btn-desktop" type="button" onClick={this.clickBtnTranslate}>
                        <i className="fas fa-globe-europe" />
                        <p className="btn-name">Translate</p>
                    </button>
                </a>
            </div>
        );
    }
}

export default ButtonsMainCardDesktop;
