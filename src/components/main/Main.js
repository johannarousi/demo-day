import React from 'react';
import Subtitle from './Subtitle';
import LanguageOption from '../user/languageOption';
import Searchbox from '../Searchbox';
import { translate } from '../../services/translate';
// import { translate } from '../services/translate';

class Main extends React.Component {
    state = {
        movies: {},
        subtitles: [],
        searchTerm: '',
    };

    componentDidMount() {
        const urlMovie = 'https://yle-subtitle.herokuapp.com/api/movies';

        fetch(urlMovie)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                this.setState({
                    movies: data,
                });
            });

        const { match, location } = this.props;
        const wordUrl = match.params.word;

        if (wordUrl) {
            console.log('do something');

            this.searchWord(wordUrl);
        }
        // translate('en', 'kolme', 'fi').then(data => console.log(data));
    }

    searchWord = searchTerm => {
        if (searchTerm.length < 2) {
            return;
        }
        const urlWord = `https://yle-subtitle.herokuapp.com/api/word/${searchTerm}`;
        fetch(urlWord)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    subtitles: data.subtitles,
                    searchTerm,
                });
            });

        const userSetting = JSON.parse(localStorage.getItem('userSetting'));
        translate(userSetting.language, searchTerm, 'fi').then(dataTranslate => {
            document.querySelector('.word-translate').innerHTML = ` ${dataTranslate} `;
        });
    };

    render() {
        // console.log(this.props.searchTerm);
        const { subtitles, searchTerm } = this.state;

        const renderSubtitles = subtitles
            .slice(0, 30)
            .map(subtitle => (
                <Subtitle
                    key={subtitle._id}
                    subtitle={subtitle}
                    movies={this.state.movies}
                    searchTerm={searchTerm}
                />
            ));

        return (
            <main className="content">
                <Searchbox searchWord={this.searchWord} />
                <div className="word-wrapper">
                    <div className="language-option">
                        <LanguageOption />
                    </div>
                    <div className="word-info">
                        <p>
                            Word <span>{searchTerm}</span> is in {subtitles.length} subtitles
                        </p>
                        <p>
                            {searchTerm} =<span className="word-translate"> </span>
                        </p>
                    </div>
                </div>
                {renderSubtitles}
            </main>
        );
    }
}

export default Main;
