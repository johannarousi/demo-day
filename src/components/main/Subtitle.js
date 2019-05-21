import React from 'react';
import { translate } from '../../services/translate';
import ButtonsMainCard from './ButtonsMainCard';

class Subtitle extends React.Component {
    onClickTranslate = e => {
        const parentSubtitle = e.currentTarget.closest('.subtitle-wrapper');
        const translateText = parentSubtitle
            .querySelector('.subtitle-para')
            .textContent.replace(/[\n]/gi, '- ');

        console.log(translateText);
        const clickTranslate = parentSubtitle.querySelector('.translate');
        const numTranslate = clickTranslate.textContent.length;
        console.log(numTranslate);

        if (numTranslate > 0) {
            clickTranslate.innerHTML = '';
        } else {
            translate('en', translateText, 'fi').then(dataTranslate => {
                clickTranslate.innerHTML = ` ${dataTranslate} `;
            });
        }
    };

    onClickSave = (e, clickWord) => {
        const parentSubtitle = e.currentTarget.closest('.subtitle-wrapper');
        const translateText = parentSubtitle
            .querySelector('.subtitle-para')
            .textContent.replace(/[\n]/gi, '- ');
        console.log(translateText, '\n', clickWord);
        // add word to my list in not there
        if (localStorage.getItem('myList') === null) {
            localStorage.setItem('myList', JSON.stringify([clickWord]));
        } else {
            const myList = JSON.parse(localStorage.getItem('myList'));
            if (!myList.includes(clickWord)) {
                const addList = [...myList, clickWord];
                localStorage.setItem('myList', JSON.stringify(addList));
            }
        }

        // add mySentence
        if (localStorage.getItem('mySentence') === null) {
            localStorage.setItem(
                'mySentence',
                JSON.stringify([{ word: clickWord, sentences: [translateText] }])
            );
        } else {
            const myList = JSON.parse(localStorage.getItem('mySentence'));
            console.log('myList:', myList);
            // find and if find replace if not add
            const findItem = myList.find(item => item.word == clickWord);
            let addList = [];
            console.log(findItem);

            if (findItem) {
                addList = myList.map(item => {
                    if (item.word == clickWord) {
                        item.sentences.push(translateText);
                        return {
                            word: clickWord,
                            sentences: Array.from(new Set(item.sentences)),
                        };
                    }
                    return item;
                });
            } else {
                addList = [...myList, { word: clickWord, sentences: [translateText] }];
            }
            console.log(addList);
            localStorage.setItem('mySentence', JSON.stringify(addList));
        }
    };

    render() {
        const movieNow = { name: '', link: '' };
        const { movies, subtitle, searchTerm } = this.props;
        if (movies.length > 0) {
            movies.forEach(movie => {
                if (movie._id === subtitle._movie) {
                    // {movieName:name,movieLinkTime:link} = movie;
                    // console.log(movie);
                    movieNow.name = movie.name;
                    let timeMovie = subtitle.timeBegin.split(/[:.]/);
                    const timeRewind = 0;
                    timeMovie =
                        parseInt(timeMovie[0]) * 60 * 60 +
                        parseInt(timeMovie[1]) * 60 +
                        parseInt(timeMovie[2]) -
                        timeRewind;
                    // https://areena.yle.fi/1-1070789?seek=11 00:03:13.320
                    movieNow.link = `https://areena.yle.fi/${movie.id}?seek=${timeMovie}`;
                }
            });
        }
        const re = new RegExp(searchTerm, 'gi');
        // const subtitleSpan = subtitle.subtitle;
        const subtitleSpan = subtitle.subtitle.replace(re, ` <span>${searchTerm}</span> `);
        // console.log(subtitleSpan);

        return (
            <div className="subtitle-wrapper">
                <div className="subtitle">
                    {/* <p className="subtitle-para">
                    {subtitleSpan}
                    <br />{movieNow.name}
                </p> */}
                    <p
                        className="subtitle-para"
                        dangerouslySetInnerHTML={{ __html: subtitleSpan }}
                    />
                    <p className="subtitle-para translate" />
                </div>
                <div className="sub-btn-below">
                    <ButtonsMainCard
                        movieNow={movieNow}
                        searchTerm={searchTerm}
                        clickTranslate={this.onClickTranslate}
                        clickSave={this.onClickSave}
                    />
                </div>
            </div>
        );
    }
}

export default Subtitle;
