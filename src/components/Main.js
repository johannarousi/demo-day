import React from 'react';
import Subtitle from './Subtitle';

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
    }

    render() {
        // console.log(this.props.searchTerm);
        const renderSubtitles = this.props.subtitles.map(subtitle => (
            <Subtitle
                key={subtitle._id}
                subtitle={subtitle}
                movies={this.state.movies}
                searchTerm={this.props.searchTerm}
            />
        ));
        return (
            <main className="content">
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
