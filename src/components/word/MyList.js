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
        const styles = {
            background: '#fff',
            width: '85%',
            margin: '3% auto',
            padding: '2% 0',
        };
        console.log(myList);

        const list = myList.map((item, index) => {
            console.log(item);
            return (
                <div style={styles} key={index} className="word_wrapper">
                    <p>
                        <span>{item.word}</span>
                    </p>

                    <div className="subtitle">
                        {item.sentences && item.sentences.map(sentence => <p>{sentence}</p>)}
                    </div>
                    <button onClick={() => this.removeWord(item.word)} type="button">
                        Remove
                    </button>
                    <button onClick={() => this.clickMore(item.word)} type="button">
                        More
                    </button>
                </div>
            );
        });

        return (
            <div>
                <div>
                    <h3>Your Vocabulary: {myList.length}</h3>
                </div>
                {list}
            </div>
        );
    }
}

export default WordList;
