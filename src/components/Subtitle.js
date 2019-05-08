import React from 'react';

class Subtitle extends React.Component {
    render() {
        const { subtitle } = this.props.subtitle;

        return (
            <div className="subtitle">
                <p className="subtitle-para">{subtitle}</p>
                <button className="subtitle-btn">
                    <a href="#words" className="hvr-pulse-shrink">
                        <i className="fas fa-play" />
                    </a>
                </button>
            </div>
        );
    }
}

export default Subtitle;
