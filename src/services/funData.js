const fnTotalList = () =>
    new Promise((resolve, reject) => {
        if (sessionStorage.getItem('totalList') === null) {
            const urlWordList = `https://yle-subtitle.herokuapp.com/api/list/2000`;
            fetch(urlWordList)
                .then(response => response.json())
                .then(data => {
                    // console.log(data[0].frequency);
                    sessionStorage.setItem('totalList', JSON.stringify(data));
                    resolve(data);
                });
        } else {
            resolve(JSON.parse(sessionStorage.getItem('totalList')));
        }
    });

const fnMyList = () => {
    if (localStorage.getItem('myList') === null) {
        localStorage.setItem('myList', JSON.stringify([]));
        return [];
    }
    const myList = JSON.parse(localStorage.getItem('myList'));
    return myList;
};

const fnAddWordToMyList = (myList, clickWord) => {
    const findItem = myList.find(item => item.word == clickWord);
    let addList = [];
    console.log(findItem);
    if (findItem) {
        return myList;
    }
    addList = [...myList, { word: clickWord, sentences: [] }];

    console.log(addList);
    localStorage.setItem('myList', JSON.stringify(addList));
    return addList;
};

const fnAddSentenceToMyList = (clickWord, sentence) => {
    const myList = fnMyList();
    const findItem = myList.find(item => item.word === clickWord);
    let addList = [];
    console.log(findItem);
    if (findItem) {
        addList = myList.map(item => {
            if (item.word === clickWord) {
                item.sentences.push(sentence);
                return {
                    word: clickWord,
                    sentences: Array.from(new Set(item.sentences)),
                };
            }
            return item;
        });
    } else {
        addList = [...myList, { word: clickWord, sentences: [sentence] }];
    }

    console.log(addList);
    localStorage.setItem('myList', JSON.stringify(addList));
};

export { fnTotalList, fnMyList, fnAddWordToMyList, fnAddSentenceToMyList };
