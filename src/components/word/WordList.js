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
        /* check TotalList and MyList */

        if (localStorage.getItem('totalData') === null) {
            const urlWordList = `https://yle-subtitle.herokuapp.com/api/list/100`;
            fetch(urlWordList)
                .then(response => response.json())
                .then(data => {
                    // console.log(data[0].frequency);
                    this.setState({
                        datalist: data,
                    });
                });
        } else {
            const totalData = JSON.parse(localStorage.getItem('totalData'));
            this.setState({
                datalist: totalData.totalList,
            });
        }

        /* variables total list , my list:
        const totalList = totalData.totalList
        const myList = totalData.myWordList */
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

    addWord = wordName => {
        console.log(wordName);
        // copying the datalist from state
        const removeList = [...this.state.datalist];
        // we need to get the index of the word we want to add/remove
        let index;
        for (let i = 0; i < removeList.length; i += 1) {
            if (removeList[i].name === wordName) {
                index = i;
            }
        }
        console.log(index);
        console.log(removeList);
        const myListWord = removeList.splice(index, 1)[0];
        console.log(myListWord);
        console.log(removeList);
        this.setState({
            datalist: removeList,
        });
        // we want to store the removeList AND the myListWord so we create an object that we can store in the localStorage
        if (localStorage.getItem('totalData') === null) {
            const totalData = { totalList: removeList, myList: [myListWord] };
            localStorage.setItem('totalData', JSON.stringify(totalData));
            console.log(JSON.parse(localStorage.getItem('totalData')));
        } else {
            // we need the old list with the words in the mylist (because we don't want to override the old ones with the one new word)
            // so we have to first take them from the localStorage and add the new word to them
            const parsedData = JSON.parse(localStorage.getItem('totalData'));
            const myNewList = parsedData.myList;
            console.log(myNewList);
            myNewList.push(myListWord);
            console.log(myNewList);
            const totalData = { totalList: removeList, myList: myNewList };

            localStorage.setItem('totalData', JSON.stringify(totalData));
            console.log(JSON.parse(localStorage.getItem('totalData')));
        }

        //     setState(datalist:removeList)
        //     set LS toalta list = dataList
        // add remov e Word to my List and save it
    };

    render() {
        const { datalist } = this.state;
        // console.log(datalist);
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
                <button onClick={() => this.addWord(word.name)}>Add</button>
            </div>
        ));

        return <div>{list}</div>;
    }
}

export default WordList;
