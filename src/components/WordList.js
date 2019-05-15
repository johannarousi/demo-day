import React, { Component } from 'react';

export class WordList extends Component {
    state = {
        howMany: 100,
        word: '',
        frequency: '',
        subtitles: [],
    };

    clickWord = e => {
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
        const styles = {
            background: '#fff',
            border: '2px solid red',
            width: '85%',
            margin: '3% auto',
        };
        const list = datalist.map(word => (
            <div style={styles} key={word._id}>
                <p onClick={this.clickWord} id={word.name}>
                    {word.name}
                    <span>{word.frequency}</span>
                </p>
            </div>
        ));

        return <div>{list}</div>;
    }
}

export default WordList;
