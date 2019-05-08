import React, { Component } from 'react';
import Header from './components/Header';
import Searchbox from './components/Searchbox';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
    state = {
        word: {},
        subtitles: [],
        movies: [],
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
                });
            });
    };

    render() {
        return (
            <div className="phone-screen">
                <Header />
                <Searchbox searchWord={this.searchWord} />
                <Main subtitles={this.state.subtitles} movies={this.state.movies} />
                <Footer />
            </div>
        );
    }
}

export default App;
