import React, { Component } from 'react';

class Word extends Component {
    state = {
        id: null,
    };

    componentDidMount() {
        console.log(this.props);
        const id = this.props.match.params.word_id;
        this.setState({
            id,
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
            </div>
        );
    }
}

export default Word;
