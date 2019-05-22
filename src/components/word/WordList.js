import React, { Component } from 'react';
import { fnTotalList, fnMyList, fnAddWordToMyList } from '../../services/funData';

export class WordList extends Component {
    state = {
        howMany: 100,
        word: '',
        frequency: '',
        subtitles: [],
        totalList: [],
        myList: [],
    };

    componentDidMount() {
        fnTotalList().then(totalList => {
            this.setState({ totalList });
        });
        // get mylist
        this.setState({ myList: fnMyList() });
    }

    clickWord = e => {
        const clickWord = e.currentTarget.id;

        const clickParent = e.currentTarget.closest('.word_wrapper');

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

    addWord = wordName => {
        console.log(wordName);
        // copying the datalist from state
        const { myList } = this.state;
        this.setState({
            myList: fnAddWordToMyList(myList, wordName),
        });
    };

    clickShowAll = wordName => {
        console.log(wordName);
        this.props.history.push(`/${wordName}`);
    };

    render() {
        const { totalList, myList } = this.state;
        // console.log(datalist);
        const styles = {
            background: '#fff',
            width: '85%',
            margin: '3% auto',
            padding: '2% 0',
        };
        const showlist = [...totalList]
            .filter(word => !myList.find(item => item.word == word.name))
            .splice(0, 200);

        const list = showlist.map(word => (
            <div style={styles} key={word._id} className="word_wrapper">
                <p>
                    Word <span>{word.name}</span> appears <span>{word.frequency}</span> times.
                </p>
                <div className="subtitle" />
                <button onClick={() => this.addWord(word.name)} type="button">
                    Add
                </button>
                {/* <button onClick={this.clickWord} type="button" id={word.name}>
                    More
                </button> */}
                <button onClick={() => this.clickShowAll(word.name)} type="button">
                    More
                </button>
            </div>
        ));

        return (
            <div>
                <div>
                    <h3>
                        Process: {myList.length} /{totalList.length}
                    </h3>
                </div>
                {list}
            </div>
        );
    }
}

export default WordList;
