import React, { Component } from 'react';

export class WordList extends Component {
    state = {
        howMany: 100,
        word: '',
        frequency: '',
        subtitles: [],

        datalist: [],
    };

    componentDidMount() {
        const urlWordList = `https://yle-subtitle.herokuapp.com/api/list/100`;
        fetch(urlWordList)
            .then(response => response.json())
            .then(data => {
                console.log(data[0].frequency);
                this.setState({
                    datalist: data,
                });
            });
    }

    clickWord = e => {
        const clickWord = e.currentTarget.id;

        const clickParent = e.currentTarget;

        const checkClick = clickParent.querySelector('.subtitle');
        const numSubtible = checkClick.textContent.length;

        if (numSubtible > 0) {
            console.log(checkClick.textContent.length);
            clickParent.querySelector('.subtitle').innerHTML = '';
        } else {
            const urlWord = `https://yle-subtitle.herokuapp.com/api/word/${clickWord}`;
            fetch(urlWord)
                .then(response => response.json())
                .then(data => {
                    // console.log(data.subtitles);
                    this.setState({
                        subtitles: data.subtitles,
                    });

                    const sub = this.state.subtitles.slice(0, 3).map(
                        subtitle => `<p style={{ fontStyle: 'italic' }} key={subtitle._id}>
                        ${subtitle.subtitle}
                        </p>`
                    );

                    checkClick.innerHTML = `${sub.join('')}`;
                });
        }
    };

    render() {
        const { datalist } = this.state;
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
                <div className="subtitle" />
            </div>
        ));

        return <div>{list}</div>;
    }
}

export default WordList;
