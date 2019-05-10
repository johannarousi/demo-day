import React from 'react';
import Subtitle from './Subtitle';
// import { translate } from '../services/translate';

class Main extends React.Component {
    state = {
        movies: {},
    };

    componentDidMount() {
        const urlMovie = 'https://yle-subtitle.herokuapp.com/api/movies';

        fetch(urlMovie)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    movies: data,
                });
            });

        // translate('en', 'kolme', 'fi').then(data => console.log(data));
    }

    render() {
        // console.log(this.props.searchTerm);
        const { subtitles, searchTerm } = this.props;

        const renderSubtitles = subtitles.map(subtitle => (
            <Subtitle
                key={subtitle._id}
                subtitle={subtitle}
                movies={this.state.movies}
                searchTerm={searchTerm}
            />
        ));

        return (
            <main className="content">
                <div className="subtitle-wrapper">
                    <div className="subtitle">
                        <p className="subtitle-para">
                            Word <span>{searchTerm}</span> is in {subtitles.length} subtitles{' '}
                        </p>
                    </div>
                </div>
                {renderSubtitles}
                {/* <div className="subtitle">
                    <p className="subtitle-para">
                        Yöllä taas mä menin parvekkeelle <span>nukkumaan</span>, Jotta lähempänä mua
                        ois hän
                    </p>
                    <button className="subtitle-btn">
                        <a href="#words" className="hvr-pulse-shrink">
                            <i className="fas fa-play" />
                        </a>
                    </button>
                </div>
                 */}
            </main>
        );
    }
}

export default Main;
