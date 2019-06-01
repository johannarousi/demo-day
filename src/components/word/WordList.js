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
            console.log(totalList);

            this.setState({ totalList });
        });
        // get mylist
        this.setState({ myList: fnMyList() });
    }

    clickWord = e => {
        const clickWord = e.currentTarget.id;

        const clickParent = e.currentTarget.closest('.word-wrapper');

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
        const showlist = [...totalList]
            .filter(word => !myList.find(item => item.word == word.name))
            .splice(0, 200);

        const list = showlist.map(word => (
            <div key={word._id} className="subtitle-wrapper">
                <div className="subtitle">
                    <p className="subtitle-para">
                        Word <span>{word.name}</span> appears <span>{word.frequency}</span> times.
                    </p>
                </div>
                <div className="buttons-main-card">
                    <a
                        className="hvr-pulse-shrink button-all"
                        onClick={() => this.addWord(word.name)}
                    >
                        <button className="btn-desktop" type="button">
                            <i className="far fa-save" />
                            <p className="btn-name">Save</p>
                        </button>
                    </a>
                    {/* <button onClick={this.clickWord} type="button" id={word.name}>
                    More
                </button> */}
                    <a
                        className="hvr-pulse-shrink button-all"
                        onClick={() => this.clickShowAll(word.name)}
                    >
                        <button className="btn-desktop" type="button">
                            <i className="far fa-plus-square" />
                            <p className="btn-name">More</p>
                        </button>
                    </a>
                </div>
            </div>
        ));

        return (
            <div className="main">
                <div className="searchbox">
                    <p className="archivement">
                        Progress: <strong>{myList.length}</strong> /{' '}
                        <strong>{totalList.length}</strong> words.
                    </p>
                </div>
                <div className="content">
                    <div className="subtitle-container">{list}</div>
                </div>
            </div>
        );
    }
}

export default WordList;
