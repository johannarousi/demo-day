import React from 'react';
import Subtitle from './Subtitle';

class Main extends React.Component {
    render() {
        // console.log(this.props.searchTerm);
        const renderSubtitles = this.props.subtitles.map(subtitle => (
            <Subtitle key={subtitle._id} subtitle={subtitle} movies={this.props.movies} />
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

                <div className="subtitle">
                    <p className="subtitle-para">
                        Ennalleen en saa mä vaan ootan että sut nään vielä uudestaan ja tuun sun luo{' '}
                        <span>nukkumaan</span>
                    </p>
                    <button className="subtitle-btn">
                        <a href="#words" className="hvr-pulse-shrink">
                            <i className="fas fa-play" />
                        </a>
                    </button>
                </div>

                <div className="subtitle">
                    <p className="subtitle-para">
                        Elin vuosia liian vähillä unilla, koska en halunnut mennä aikaisin{' '}
                        <span>nukkumaan</span>. Illat olivat laatuaikaani: luin kirjoja ja lehtiä,
                        katsoin telkkaria, ...
                    </p>
                    <button className="subtitle-btn">
                        <a href="#words" className="hvr-pulse-shrink">
                            <i className="fas fa-play" />
                        </a>
                    </button>
                </div>

                <div className="subtitle">
                    <p className="subtitle-para">
                        Näin opin <span>nukkumaan</span> - poppakonsteja ei ole That looks simple!
                        Unfortunately, there is an issue with the code above. It assumes window
                        width to be static — get it once and render the appropriate layout. The
                        reality of the web is different, of course. If you resize your browser, the
                        app won’t re-render, because it doesn’t know something has changed. And yet,
                        something clearly did change. But how would we know? resize events The only
                        way the dimensions of the page change is if a user resizes the browser (or
                        rotates their phone.) Our browsers are kind enough to give us a simple event
                        whenever the size of the page changes.
                    </p>
                    <button className="subtitle-btn">
                        <a href="#words" className="hvr-pulse-shrink">
                            <i className="fas fa-play" />
                        </a>
                    </button>
                </div> */}
            </main>
        );
    }
}

export default Main;
