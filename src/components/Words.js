import React, { Component } from 'react';

class Words extends Component {
    state = {
        isPressed: false,
    };

    handleClick = () => {
        this.setState(prevState => ({ isPressed: !prevState.isPressed }));
    };

    render() {
        const subs = this.props.wordSubtitles;
        const subtitles = subs.map(subtitle => <p key={subtitle._id}>{subtitle.subtitle}</p>);
        const showSubtitles = this.state.isPressed ? subtitles : null;
        return (
            <div>
                <h2 onClick={this.handleClick}>{this.props.wordName}</h2>
                <p>{this.props.wordFrequency}</p>
                <div>{showSubtitles}</div>
            </div>
        );
    }
}

export default Words;
