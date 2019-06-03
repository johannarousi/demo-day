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
        // get mylist
        this.setState({ myList: fnMyList() });
    }

    clickMore = wordName => {
        console.log(wordName);
        this.props.history.push(`/${wordName}`);
    };

    removeWord = wordName => {
        // copying the datalist from state
        console.log(wordName);

        const { myList } = this.state;
        const removeList = myList.filter(item => item.word !== wordName);
        this.setState({
            myList: removeList,
        });
        localStorage.setItem('myList', JSON.stringify(removeList));
    };

    render() {
        const { myList } = this.state;
        // console.log(datalist);
        console.log(myList);

        const list = myList.map((item, index) => {
            console.log(item);
            return (
                <div className="subtitle-wrapper">
                    <div className="subtitle">
                        <p className="subtitle-para">
                            <span>{item.word}</span>
                        </p>
                    </div>

                    <div>
                        {item.sentences.map(sentence => (
                            <p className="subtitle-para">{sentence}</p>
                        ))}
                    </div>

                    <div className="buttons-main-card">
                        <a
                            className="hvr-pulse-shrink button-all"
                            onClick={() => this.removeWord(item.word)}
                        >
                            <button className="btn-desktop" type="button">
                                <i className="far fa-minus-square" />
                                <p className="btn-name">Remove</p>
                            </button>
                        </a>
                        <a
                            className="hvr-pulse-shrink button-all"
                            onClick={() => this.clickMore(item.word)}
                        >
                            <button className="btn-desktop" type="button">
                                <i className="far fa-plus-square" />
                                <p className="btn-name">More</p>
                            </button>
                        </a>
                    </div>
                </div>
            );
        });

        return (
            <div className="main">
                <div className="searchbox">
                    <p className="archivement">
                        My Vocabulary: <strong>{myList.length}</strong>
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
