import React from 'react';
import Subtitle from './Subtitle';
import LanguageOption from '../user/languageOption';
import Searchbox from '../layout/Searchbox';
import { translate } from '../../services/translate';
import WordInfo from './WordInfo';
import Info from './Info';
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
            this.setState({
                subtitles: [],
            });
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
            <main>
                <Searchbox searchWord={this.searchWord} />
                <div>
                    <div>
                        <LanguageOption />
                    </div>
                    {subtitles.length > 0 ? (
                        <WordInfo subtitles={subtitles} searchTerm={searchTerm} />
                    ) : (
                        <Info />
                    )}
                </div>
                <div className="content">
                    <div className="subtitle-container">{renderSubtitles}</div>
                </div>
            </main>
        );
    }
}

export default Main;
