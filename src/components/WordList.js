import React, { Component } from 'react';

export class WordList extends Component {
    state = {
        howMany: 100,
        word: '',
        frequency: '',
        subtitles: [],
        isPressed: false,
    };

    clickWord = e => {
        this.setState(prevState => ({ isPressed: !prevState.isPressed }));
        const clickWord = e.currentTarget.id;
        const urlWord = `https://yle-subtitle.herokuapp.com/api/word/${clickWord}`;
        fetch(urlWord)
            .then(response => response.json())
            .then(data => {
                // console.log(data.subtitles);
                this.setState({
                    subtitles: data.subtitles,
                });
                console.log(this.state.subtitles.slice(0, 3));
            });
    };

    render() {
        const { datalist } = this.props;
        console.log(datalist);
        const subtitles = this.state.subtitles
            .slice(0, 3)
            .map(subtitle => (
                <p style={{ fontStyle: 'italic' }} key={subtitle._id}>{`"${subtitle.subtitle}"`}</p>
            ));
        const styles = {
            background: '#fff',
            width: '85%',
            margin: '3% auto',
            padding: '2% 0',
        };
        const list = datalist.map(word => (
            <div style={styles} key={word._id} onClick={this.clickWord} id={word.name}>
                <p>
                    Word <span>{word.name}</span> appears <span>{word.frequency}</span> times.
                </p>
                <div>{this.state.isPressed ? subtitles : null}</div>
            </div>
        ));

        return <div>{list}</div>;
    }
}

export default WordList;
