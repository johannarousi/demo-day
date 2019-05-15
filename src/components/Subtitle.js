import React from 'react';
import { translate } from '../services/translate';
import ButtonsMainCardDesktop from './ButtonsMainCardDesktop';

class Subtitle extends React.Component {
    onClickTranslate = e => {
        const parentSubtitle = e.currentTarget.closest('.subtitle-wrapper');
        const translateText = parentSubtitle
            .querySelector('.subtitle-para')
            .textContent.replace(/[\n]/gi, '- ');

        console.log(translateText);

        translate('en', translateText, 'fi').then(dataTranslate => {
            // console.log(dataTranslate);
            parentSubtitle
                .querySelector('.subtitle')
                .insertAdjacentHTML(
                    'beforeEnd',
                    `<div class="subtitle-para">${dataTranslate}<div>`
                );
        });
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
                </div>
                <div className="sub-btn-below">
                    <ButtonsMainCardDesktop
                        movieNow={movieNow}
                        clickTranslate={this.onClickTranslate}
                    />
                </div>
            </div>
        );
    }
}

export default Subtitle;
