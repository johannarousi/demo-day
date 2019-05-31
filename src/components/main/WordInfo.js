import React, { Component } from 'react';
import { translate } from '../../services/translate';
import { fnMyList, fnAddWordToMyList } from '../../services/funData';

class WordInfo extends Component {
    state = {
        wordTranslate: '',
        myList: [],
    };

    componentDidMount() {
        const { searchTerm, subtitles } = this.props;
        const userSetting = JSON.parse(localStorage.getItem('userSetting'));
        translate(userSetting.language, searchTerm, 'fi').then(wordTranslate => {
            // document.querySelector('.word-translate').innerHTML = ` ${dataTranslate} `;
            this.setState({
                wordTranslate,
            });
        });
        this.setState({ myList: fnMyList() });
    }

    addWord = wordName => {
        console.log(wordName);
        // copying the datalist from state
        const { myList } = this.state;
        this.setState({
            myList: fnAddWordToMyList(myList, wordName),
        });
    };

    render() {
        const { searchTerm, subtitles } = this.props;
        return (
            <div className="language-option">
                <p>
                    Word <span>{searchTerm}</span> is in {subtitles.length} subtitles
                </p>
                <p>
                    {searchTerm} ={' '}
                    <span className="word-translate">
                        <em>{this.state.wordTranslate}</em>
                    </span>
                </p>
                <a className="hvr-pulse-shrink button-all" onClick={() => this.addWord(searchTerm)}>
                    <button className="btn-desktop" type="button">
                        <i className="far fa-save" />
                        <p className="btn-name">Save</p>
                    </button>
                </a>
            </div>
        );
    }
}

export default WordInfo;
