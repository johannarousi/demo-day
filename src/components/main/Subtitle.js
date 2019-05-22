import React from 'react';
import { translate } from '../../services/translate';
import ButtonsMainCard from './ButtonsMainCard';
import { fnAddSentenceToMyList } from '../../services/funData';

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
            const userSetting = JSON.parse(localStorage.getItem('userSetting'));
            translate(userSetting.language, translateText, 'fi').then(dataTranslate => {
                clickTranslate.innerHTML = ` ${dataTranslate} `;
            });
        }
    };

    onClickSave = (e, clickWord) => {
        const parentSubtitle = e.currentTarget.closest('.subtitle-wrapper');
        const translateText = parentSubtitle
            .querySelector('.subtitle-para')
            .textContent.replace(/[\n]/gi, '- ');
        fnAddSentenceToMyList(clickWord, translateText);
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
                    const timeRewind = 1;
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
